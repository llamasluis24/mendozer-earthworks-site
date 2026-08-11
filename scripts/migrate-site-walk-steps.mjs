/**
 * One-time migration: siteVisitItems string[] → SiteWalkStep[]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const contentDir = path.join(root, "src/data/service-city-content");

const FIELD_NOTES = {
  Review: "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
  Assess: "Field assessment during the pre-bid walk surfaces constraints that affect production, haul logistics, and inspection sequencing.",
  Confirm: "Verified specifications before mobilization protect compaction acceptance, drainage performance, and agency sign-off.",
  Evaluate: "Technical evaluation upfront reduces rework during production and prevents mid-project quantity disputes.",
  Map: "Mapped inspection windows and hold points keep sitework sequenced with your GC master schedule and vertical mobilization.",
  Deliver: "Itemized assumptions documented in the bid package protect schedule, budget, and both parties at award.",
  Verify: "Pre-mobilization verification prevents stop-work orders and rework that stall downstream trades.",
  Document: "Documented field conditions support realistic production rates and defensible preconstruction numbers.",
  Inspect: "Inspection sequencing confirmed at pre-bid prevents hold points from idling earthwork and horizontal improvements.",
  Coordinate: "Utility and trade coordination mapped early avoids conflicts that delay pad certification and paving turnover.",
};

function deriveTitle(text) {
  const verb = text.split(/\s+/)[0];
  const firstClause = text.split(",")[0].trim();
  const templates = {
    Review: "Plan & Document Review",
    Assess: "Field Conditions Assessment",
    Confirm: "Specification Verification",
    Evaluate: "Technical Evaluation",
    Map: "Inspection & Schedule Mapping",
    Deliver: "Itemized Bid Delivery",
    Verify: "Field Verification",
    Document: "Scope Documentation",
    Inspect: "Inspection Hold Points",
    Coordinate: "Trade Coordination Review",
    Walk: "Pre-Bid Site Walk",
  };
  if (templates[verb]) return templates[verb];

  const words = firstClause.split(/\s+/).slice(0, 6);
  return words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .slice(0, 52);
}

function deriveCheckpoints(text) {
  const commaParts = text
    .split(/,\s+/)
    .map((p) => p.trim().replace(/\.$/, ""))
    .filter((p) => p.length > 12);

  if (commaParts.length >= 3) {
    return commaParts.slice(0, 3).map((p) => (p.charAt(0).toUpperCase() + p.slice(1)) + ".");
  }

  const andParts = text
    .split(/\s+and\s+/i)
    .map((p) => p.trim().replace(/\.$/, ""))
    .filter((p) => p.length > 15);

  if (andParts.length >= 2) {
    const first = text.split(",")[0].trim();
    return [
      (first.charAt(0).toUpperCase() + first.slice(1)) + (first.endsWith(".") ? "" : "."),
      (andParts[0].charAt(0).toUpperCase() + andParts[0].slice(1)) + ".",
      (andParts[1].charAt(0).toUpperCase() + andParts[1].slice(1)) + ".",
    ];
  }

  const verb = text.split(/\s+/)[0];
  const lead = text.endsWith(".") ? text : text + ".";
  return [
    lead.charAt(0).toUpperCase() + lead.slice(1),
    "Cross-check field observations against civil plans, geotechnical data, and project specifications.",
    "Identify constraints affecting production rates, haul routes, SWPPP compliance, or inspection hold points.",
  ];
}

function deriveFieldNote(text) {
  const verb = text.split(/\s+/)[0];
  return FIELD_NOTES[verb] ?? FIELD_NOTES.Review;
}

function toSiteWalkStep(text) {
  const lead = text.endsWith(".") ? text : text + ".";
  return {
    title: deriveTitle(text),
    lead,
    checkpoints: deriveCheckpoints(text),
    fieldNote: deriveFieldNote(text),
  };
}

function escapeString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatStep(step, indent) {
  const lines = [
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
  ];
  return lines.join("\n");
}

function extractStringArray(content) {
  const match = content.match(/siteVisitItems:\s*\[([\s\S]*?)\n\s*\],/);
  if (!match) return null;
  const inner = match[1];
  const strings = [];
  const re = /"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(inner)) !== null) {
    strings.push(m[1].replace(/\\"/g, '"'));
  }
  return strings;
}

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const strings = extractStringArray(content);
  if (!strings?.length) {
    console.warn("Skip (no strings):", filePath);
    return false;
  }
  if (/siteVisitItems:\s*\[\s*\{/.test(content)) {
    console.log("Already migrated:", path.relative(root, filePath));
    return false;
  }

  const steps = strings.map(toSiteWalkStep);
  const replacement = `siteVisitItems: [\n${steps.map((s) => formatStep(s, "    ")).join("\n")}\n  ],`;

  content = content.replace(/siteVisitItems:\s*\[[\s\S]*?\n\s*\],/, replacement);
  fs.writeFileSync(filePath, content);
  console.log("Migrated:", path.relative(root, filePath), `(${steps.length} steps)`);
  return true;
}

const services = fs.readdirSync(contentDir).filter((f) => {
  const p = path.join(contentDir, f);
  return fs.statSync(p).isDirectory();
});

let count = 0;
for (const service of services) {
  const dir = path.join(contentDir, service);
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
    if (migrateFile(path.join(dir, file))) count++;
  }
}
console.log(`\nDone. Migrated ${count} files.`);
