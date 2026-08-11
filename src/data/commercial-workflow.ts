/** Approved commercial sitework workflow — homepage & reference */
export const COMMERCIAL_WORKFLOW_PHASES = [
  {
    id: "preconstruction",
    label: "Preconstruction",
    description: "Site walks, plan review, specifications, estimating, and schedule alignment before mobilization.",
    stepIndices: [0, 1, 2, 3, 4],
  },
  {
    id: "field-execution",
    label: "Field Execution",
    description: "Mobilization through horizontal improvements — excavation, grading, utilities, base, and paving.",
    stepIndices: [5, 6, 7, 8, 9, 10],
  },
  {
    id: "closeout",
    label: "Closeout",
    description: "Final inspection, documentation, and build-ready turnover to your project team.",
    stepIndices: [11, 12],
  },
] as const;

export const COMMERCIAL_WORKFLOW = [
  {
    step: "01",
    title: "Pre-Bid Site Walk",
    body: "Superintendent and estimator walk the parcel with your project team. We review civil grading plans, geotechnical recommendations, SWPPP requirements, haul routes, staging limits, and adjacent operations before your bid due date — so quantities and production assumptions reflect actual field conditions.",
  },
  {
    step: "02",
    title: "Plan Review",
    body: "Civil sheets, cut/fill diagrams, utility profiles, and storm drain layouts are cross-checked against field observations. We flag grade conflicts, access constraints, and sequencing issues that affect excavation production, import/export volumes, and inspection hold points.",
  },
  {
    step: "03",
    title: "Specification Review",
    body: "Project specifications, geotechnical report requirements, compaction standards, and special provisions are reviewed against our production plan. Material specs, proof-roll criteria, and agency inspection requirements are confirmed before numbers go into the bid package.",
  },
  {
    step: "04",
    title: "Detailed Estimate",
    body: "Itemized bid with bank and loose cubic yard assumptions, haul distances, equipment classes, phasing options, and schedule milestones aligned to your preconstruction calendar. Expansion and shrink factors from the soils report are built into export and import quantities — not added later as change orders.",
  },
  {
    step: "05",
    title: "Scheduling",
    body: "Mobilization dates, inspection windows, utility coordination holds, and GC master schedule milestones are mapped with your project manager and civil engineer. Phased work areas, haul windows, and production rates are documented so field execution matches the bid assumptions.",
  },
  {
    step: "06",
    title: "Mobilization",
    body: "Equipment, crew, SWPPP BMPs, staging areas, and haul routes are established per the approved logistics plan. Daily production targets, superintendent contact, and inspection notification protocols are confirmed with your field team before mass grading begins.",
  },
  {
    step: "07",
    title: "Excavation",
    body: "Mass excavation, utility trenching, over-excavation, and export operations executed to civil quantities with geotechnical observation where required. Cut material is tracked in bank and loose cubic yards so haul tickets and export reports match the preconstruction estimate.",
  },
  {
    step: "08",
    title: "Grading",
    body: "Rough grading establishes site balance and drainage patterns. Structural fill is placed in controlled lifts, moisture-conditioned, and compacted to specified density with testing coordinated through your soils engineer. Fine grading brings pads and pavement areas to civil plan tolerances.",
  },
  {
    step: "09",
    title: "Base Preparation",
    body: "Aggregate base is placed and compacted to paving section requirements on drive aisles, truck courts, and parking areas. Subgrade proof-rolling and density testing are completed before asphalt or concrete flatwork mobilizes — protecting against settlement under design loads.",
  },
  {
    step: "10",
    title: "Utility Coordination",
    body: "Trench backfill, structure encasement, and fine grading over wet and dry utilities are sequenced with your underground contractor and civil inspector. Compaction at utility crossings is verified before cover and subsequent paving or flatwork phases proceed.",
  },
  {
    step: "11",
    title: "Paving / Concrete",
    body: "Asphalt placement, concrete flatwork, curbs, gutters, and ADA improvements are executed to commercial spec with inspection hold points coordinated through your GC schedule. Subgrade certification and base course approval precede each horizontal improvement phase.",
  },
  {
    step: "12",
    title: "Final Inspection",
    body: "Finished grades, compaction records, SWPPP closeout documentation, and as-built verification are prepared for agency and geotechnical review. Punch items affecting certificate of occupancy or tenant delivery are cleared before project handoff.",
  },
  {
    step: "13",
    title: "Project Handoff",
    body: "Site turned over build-ready with documented compaction results, positive drainage verified, and horizontal improvements inspection-ready for vertical construction or tenant improvement. Superintendent sign-off and turnover package delivered to your project manager.",
  },
] as const;
