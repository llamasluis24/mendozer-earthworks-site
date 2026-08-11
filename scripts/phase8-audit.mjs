#!/usr/bin/env node
/**
 * Phase 8 audit: migration coverage, content pattern checks, overlap detection, sitemap count.
 */
import fs from "fs";
import path from "path";

const root = path.resolve("src/data");
const services = ["demolition", "grading", "excavation", "paving", "concrete", "site-development"];
const cities = [
  "riverside",
  "banning",
  "temecula",
  "san-bernardino",
  "rialto",
  "anaheim",
  "santa-ana",
  "irvine",
  "los-angeles",
  "pasadena",
];

const cityPages = cities;
const errors = [];
const warnings = [];

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function extractMetaDescription(content) {
  const match = content.match(/metaDescription:\s*\n?\s*"([^"]+)"/);
  return match?.[1] ?? null;
}

function countFaqs(content) {
  const section = content.match(/faqs:\s*\[([\s\S]*?)\n\s*\],/);
  if (!section) return 0;
  return (section[1].match(/\bq:/g) ?? []).length;
}

function hasField(content, field) {
  return new RegExp(`${field}:`).test(content);
}

const metaByKey = new Map();
const faqKeysByPage = new Map();
let migrated = 0;

for (const service of services) {
  for (const city of cities) {
    const file = path.join(root, "service-city-content", service, `${city}.ts`);
    const key = `${service}/${city}`;

    if (!fs.existsSync(file)) {
      errors.push(`Missing content file: ${key}`);
      continue;
    }

    const content = read(file);
    migrated++;

    const meta = extractMetaDescription(content);
    if (!meta) errors.push(`${key}: missing metaDescription`);
    else if (meta.length < 120 || meta.length > 170)
      warnings.push(`${key}: metaDescription length ${meta.length} (target 150–160)`);

    if (meta) {
      const existing = metaByKey.get(meta);
      if (existing) warnings.push(`Duplicate metaDescription: ${key} === ${existing}`);
      else metaByKey.set(meta, key);
    }

    const faqCount = countFaqs(content);
    if (faqCount < 8) errors.push(`${key}: only ${faqCount} FAQs (need 8+)`);

    const faqKey = content.match(/faqs:\s*\[([\s\S]*?)\n\s*\],/)?.[1]?.replace(/\s+/g, " ").trim();
    if (faqKey) {
      const existingFaq = faqKeysByPage.get(faqKey);
      if (existingFaq) warnings.push(`Duplicate FAQ set: ${key} === ${existingFaq}`);
      else faqKeysByPage.set(faqKey, key);
    }

    for (const field of [
      "siteVisitItems",
      "evaluationSteps",
      "localBenefits",
      "serviceIssues",
      "caseStudies",
      "landmark",
      "media",
      "tabbedInsights",
    ]) {
      if (!hasField(content, field)) errors.push(`${key}: missing ${field}`);
    }

    const visitBlockStart = content.indexOf("siteVisitItems:");
    const visitBlockEnd = content.indexOf("evaluationSteps:", visitBlockStart);
    const visitItems =
      visitBlockStart === -1 || visitBlockEnd === -1
        ? 0
        : (content.slice(visitBlockStart, visitBlockEnd).match(/^\s+title:/gm) ?? []).length;
    if (visitItems < 6) warnings.push(`${key}: ${visitItems} siteVisitItems (target 6)`);
  }
}

for (const city of cityPages) {
  const file = path.join(root, "city-page-content", `${city}.ts`);
  if (!fs.existsSync(file)) errors.push(`Missing city page content: ${city}`);
}

const orphanDir = path.join(root, "service-city-content", "excavation-grading");
if (fs.existsSync(orphanDir)) {
  warnings.push("Orphan directory still exists: service-city-content/excavation-grading/");
}

const expectedServiceCity = services.length * cities.length;
const expectedSitemap =
  6 + // static: /, /about, /contact, /service-areas, /projects, /services
  services.length + // pillar pages
  cities.length + // city location pages
  expectedServiceCity;

console.log("Phase 8 Audit");
console.log("=============");
console.log(`Service×city pages: ${migrated}/${expectedServiceCity}`);
console.log(`Expected sitemap URLs: ${expectedSitemap}`);
console.log(`Errors: ${errors.length}`);
console.log(`Warnings: ${warnings.length}`);
console.log("");

if (errors.length) {
  console.log("ERRORS:");
  errors.forEach((e) => console.log(`  ✗ ${e}`));
  console.log("");
}

if (warnings.length) {
  console.log("WARNINGS:");
  warnings.slice(0, 30).forEach((w) => console.log(`  ! ${w}`));
  if (warnings.length > 30) console.log(`  ... and ${warnings.length - 30} more`);
  console.log("");
}

if (errors.length) {
  process.exit(1);
}

console.log("✓ Phase 8 audit passed");
process.exit(0);
