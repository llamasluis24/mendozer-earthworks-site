/** Regenerate checkpoints from lead text in migrated SiteWalkStep objects */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, "../src/data/service-city-content");

function extractBalancedArray(source, startIndex) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = startIndex; i < source.length; i++) {
    const ch = source[i];

    if (inString) {
      if (escaped) escaped = false;
      else if (ch === "\\") escaped = true;
      else if (ch === '"') inString = false;
      continue;
    }

    if (ch === '"') {
      inString = true;
      continue;
    }

    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) return source.slice(startIndex, i + 1);
    }
  }

  return null;
}

function capitalizeSentence(s) {
  const t = s.trim().replace(/^and\s+/i, "").replace(/\.$/, "");
  if (!t) return "";
  const out = t.charAt(0).toUpperCase() + t.slice(1);
  return out.endsWith(".") ? out : out + ".";
}

function deriveCheckpoints(text) {
  const clean = text.replace(/\.$/, "").trim();
  const parts = clean
    .split(/,\s+/)
    .map((p) => p.trim().replace(/^and\s+/i, ""))
    .filter((p) => p.length > 10);

  if (parts.length >= 3) {
    return parts.slice(0, 3).map((p) => capitalizeSentence(p));
  }

  const verb = clean.split(/\s+/)[0];
  const first = capitalizeSentence(clean.split(",")[0]);
  return [
    first,
    "Cross-check observations against civil plans, geotechnical data, and project specifications.",
    verb === "Deliver"
      ? "Confirm bid assumptions, quantities, and schedule milestones align with preconstruction requirements."
      : "Flag constraints affecting production, haul logistics, SWPPP compliance, or inspection hold points.",
  ];
}

function escapeString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatStep(step, indent) {
  return [
    `${indent}{`,
    `${indent}  title: "${escapeString(step.title)}",`,
    `${indent}  lead:`,
    `${indent}    "${escapeString(step.lead)}",`,
    `${indent}  checkpoints: [`,
    ...step.checkpoints.map((c) => `${indent}    "${escapeString(c)}",`),
    `${indent}  ],`,
    `${indent}  fieldNote:`,
    `${indent}    "${escapeString(step.fieldNote)}",`,
    `${indent}},`,
  ].join("\n");
}

function parseSteps(arrayBlock) {
  const steps = [];
  const inner = arrayBlock.slice(1, -1);
  let i = 0;

  while (i < inner.length) {
    if (inner[i] !== "{") {
      i++;
      continue;
    }

    let depth = 0;
    let inString = false;
    let escaped = false;
    const start = i;

    for (; i < inner.length; i++) {
      const ch = inner[i];

      if (inString) {
        if (escaped) escaped = false;
        else if (ch === "\\") escaped = true;
        else if (ch === '"') inString = false;
        continue;
      }

      if (ch === '"') {
        inString = true;
        continue;
      }

      if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) {
          const sb = inner.slice(start, i + 1);
          const title = sb.match(/title:\s*"((?:\\.|[^"\\])*)"/)?.[1]?.replace(/\\"/g, '"');
          const lead = sb.match(/lead:\s*\n?\s*"((?:\\.|[^"\\])*)"/)?.[1]?.replace(/\\"/g, '"');
          const fieldNote = sb
            .match(/fieldNote:\s*\n?\s*"((?:\\.|[^"\\])*)"/)?.[1]
            ?.replace(/\\"/g, '"');

          if (title && lead && fieldNote) {
            steps.push({
              title,
              lead: lead.endsWith(".") ? lead : lead + ".",
              fieldNote,
              checkpoints: deriveCheckpoints(lead),
            });
          }
          i++;
          break;
        }
      }
    }
  }

  return steps;
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const marker = "siteVisitItems:";
  const markerIndex = content.indexOf(marker);
  if (markerIndex === -1) return false;

  const arrayStart = content.indexOf("[", markerIndex);
  if (arrayStart === -1) return false;

  const arrayBlock = extractBalancedArray(content, arrayStart);
  if (!arrayBlock) return false;

  const steps = parseSteps(arrayBlock);
  if (steps.length < 4) return false;

  const replacement = `siteVisitItems: [\n${steps.map((s) => formatStep(s, "    ")).join("\n")}\n  ]`;
  content =
    content.slice(0, markerIndex) +
    replacement +
    content.slice(arrayStart + arrayBlock.length);
  fs.writeFileSync(filePath, content);
  return true;
}

let n = 0;
for (const service of fs.readdirSync(contentDir)) {
  const dir = path.join(contentDir, service);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
    if (fixFile(path.join(dir, file))) n++;
  }
}
console.log(`Fixed checkpoints in ${n} files.`);
