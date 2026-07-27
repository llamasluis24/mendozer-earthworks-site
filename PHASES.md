# Service×City SEO Differentiation — Phased Rollout

## Phase 1 — COMPLETE
**Foundation + reference pages**

- Data layer: `src/data/service-city-content/`
- City landmark assets: `src/assets/cities/index.ts`
- Components + unified resolver: `resolveServiceCityPage()`

---

## Phase 2 — COMPLETE
**Demolition × all 10 cities**

Content files: `src/data/service-city-content/demolition/{city}.ts`

---

## Phase 3 — COMPLETE
**Grading × all 10 cities**

Content files: `src/data/service-city-content/grading/{city}.ts`

---

## Phase 3b — COMPLETE
**Excavation × all 10 cities**

Content files: `src/data/service-city-content/excavation/{city}.ts`

---

## Phase 4 — COMPLETE
**Paving × all 10 cities**

Content files: `src/data/service-city-content/paving/{city}.ts`

---

## Phase 5 — COMPLETE
**Concrete × all 10 cities**

Content files: `src/data/service-city-content/concrete/{city}.ts`

---

## Phase 6 — COMPLETE
**Site Development × all 10 cities**

Content files: `src/data/service-city-content/site-development/{city}.ts`

**60/60 service×city pages migrated** (6 services × 10 cities).

### Current cities
Riverside, Banning, Temecula, San Bernardino, Rialto, Anaheim, Santa Ana, Irvine, Los Angeles, Pasadena

### Example URLs
| Service | Example |
|---------|---------|
| Grading | `/services/grading/anaheim-ca` |
| Excavation | `/services/excavation/anaheim-ca` |
| Concrete | `/services/concrete/anaheim-ca` |
| Asphalt | `/services/paving/anaheim-ca` |
| Demolition | `/services/demolition/anaheim-ca` |
| Site Development | `/services/site-development/anaheim-ca` |

---

## Phase 7 — COMPLETE
**City location pages × all 10 cities**

Content layer: `src/data/city-page-content/{city}.ts`

Each city page includes: landmark banner, photo gallery, video placeholder, case studies, tabbed insights, unique FAQs, and `resolveCityPage()` as single source of truth for meta + FAQ schema.

---

## Phase 8 — COMPLETE
**Final audit**

- Legacy fallbacks removed from `resolveServiceCityPage()` and `ServiceCityPageTemplate`
- Orphan `excavation-grading` content and service file removed (replaced by separate `grading` + `excavation`)
- Service×city routing fixed: layout + index pattern so city pages render correctly
- Overlap audit script: `npm run audit:phase8` (checks 60/60 coverage, content fields, duplicate meta/FAQ detection)
- Sitemap updated: `/services` added; 82 total URLs (6 static + 6 pillar + 10 city + 60 service×city)
- Service×city pages now emit FAQ + Service JSON-LD schema

---

## Content pattern (per migrated page)

Each `ServiceCityPageContent` must include:
- `metaDescription` (unique, 150–160 chars)
- `siteVisitItems` (6, service + city specific)
- `evaluationSteps` (5)
- `localBenefits` (4)
- `serviceIssues` (4 fully written)
- `faqs` (8+, no `service.faqs.slice()`)
- `caseStudies` (1–2 placeholders)
- `landmark`, `media`, `tabbedInsights`

Copy any file from `demolition/`, `grading/`, `excavation/`, or `paving/` as the reference template.
