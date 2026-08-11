import type { City } from "./cities";
import { SECONDARY_CALLOUT_DEFAULT } from "./services/defaults";

export interface CityContent {
  about: string;
  aboutExtended: string[];
  projectTypes: string[];
  localChallenges: string[];
  industries: string[];
  siteworkEducation: string[];
  localIssues: { title: string; body: string }[];
  siteVisitItems: string[];
  evaluationSteps: { step: string; title: string; body: string }[];
  localBenefits: { title: string; body: string }[];
  honestCallout: { title: string; body: string };
}

const DEFAULT_INDUSTRIES = [
  "Commercial Developers",
  "General Contractors",
  "Municipal & Public Agencies",
  "Industrial & Distribution",
  "Retail & Shopping Centers",
  "Warehouses & Logistics",
  "Multifamily Development",
  "Commercial Property Owners",
];

const DEFAULT_EVALUATION_STEPS = [
  { step: "01", title: "Site Walk & Plan Review", body: "Walk the parcel with your team, review civil and geotech plans, and identify access, staging, and schedule constraints." },
  { step: "02", title: "Scope & Quantity Takeoff", body: "Quantify excavation, grading, paving, or concrete scope against plans and flag soils, drainage, and compaction risks that affect bid accuracy." },
  { step: "03", title: "Agency & Utility Coordination", body: "Confirm permit status, inspection requirements, and utility sequencing with your civil engineer and GC schedule." },
  { step: "04", title: "Production & Phasing Plan", body: "Define equipment, crew, and phased work areas aligned with your mobilization date and milestone schedule." },
  { step: "05", title: "Itemized Estimate Delivery", body: "Provide a detailed commercial estimate with quantities, assumptions, and realistic production timeline." },
];

const DEFAULT_SITE_VISIT = [
  "Review civil grading plans, geotechnical report, and SWPPP requirements on site",
  "Assess access routes, haul roads, staging areas, and equipment mobilization points",
  "Document existing grades, utilities, drainage patterns, and adjacent commercial operations",
  "Identify soils, compaction, drainage, and agency inspection considerations",
  "Coordinate scope questions with your GC superintendent and civil engineer",
  "Deliver itemized estimate assumptions and recommended phasing within one business day",
];

const DEFAULT_BENEFITS = [
  { title: "Local Agency Familiarity", body: "Experience with commercial inspection standards and permit processes in your county." },
  { title: "Fast Mobilization", body: "Equipment and crews positioned across Southern California for developer and GC schedules." },
  { title: "Clean Job Sites", body: "SWPPP compliance, dust control, and professional site management on every commercial project." },
  { title: "Direct Superintendent Access", body: "Transparent communication with your GC team — daily production updates and schedule accountability." },
];

function defaultHonestCallout() {
  return {
    title: "Honest Scoping for Commercial Projects",
    body: "We do not recommend unnecessary scope on commercial job sites. If phased execution, narrowed earthwork, or value-engineered paving sections fit your budget and still pass inspection, we document those options during the pre-bid walk — not after mobilization.",
  };
}

export const CITY_CONTENT: Record<string, CityContent> = {
  riverside: {
    about:
      "Riverside's commercial corridor continues to expand with warehouse, logistics, and retail development across Riverside County. Mendozer X Earthworks Inc. (Lic. #1069854) supports developers and GCs on mass grading, excavation, asphalt paving, and concrete flatwork for build-to-suit and speculative commercial projects throughout the city.",
    aboutExtended: [
      "Riverside sits at the center of Inland Empire commercial growth, with warehouse, logistics, and retail development driving consistent demand for licensed earthwork contractors. Developers and GCs building in Riverside need partners who understand Riverside County soils, SWPPP requirements, and the inspection standards that gate vertical construction mobilization.",
      "From large-format distribution pads along major corridors to retail center improvements and municipal concrete work, commercial sitework in Riverside demands accurate cut/fill planning, geotech-coordinated compaction, and sequencing that keeps GC master schedules intact. Mendozer X Earthworks Inc. mobilizes with commercial-grade equipment and superintendent-led crews for projects across the city.",
      "We partner with commercial developers, general contractors, municipalities, and industrial property owners on excavation, grading, asphalt paving, and concrete flatwork — with honest pre-bid walks and itemized estimates that reflect what your Riverside project actually needs.",
    ],
    projectTypes: ["Warehouse & distribution pad grading", "Retail parking lot paving", "Industrial site excavation", "Commercial concrete flatwork", "Municipal curb and gutter improvements"],
    localChallenges: ["Variable alluvial soils requiring geotech coordination", "SWPPP compliance during seasonal rain", "Coordination with Riverside County inspection schedules", "Phased grading near occupied commercial properties"],
    industries: DEFAULT_INDUSTRIES,
    siteworkEducation: [
      "Commercial sitework in Riverside begins with understanding the soils beneath your pad. Alluvial deposits across Riverside County vary in compaction characteristics, and geotechnical reports define the moisture conditioning, lift thickness, and density testing required before structural footings or paving subgrades are approved. Skipping this step on warehouse and retail projects leads to settlement, failed inspections, and schedule delays that ripple through every downstream trade.",
      "Riverside's seasonal rainfall makes SWPPP compliance a year-round concern on active grading sites. BMPs must remain functional throughout construction, and track-out control on commercial corridors protects both agency standing and adjacent business operations. Developers and GCs who treat erosion control as an afterthought face stop-work orders that halt grading until compliance is restored.",
      "Utility sequencing is another critical factor on Riverside commercial parcels. Wet and dry utility installation must align with mass excavation, trench backfill, and fine grading phases. Earthwork contractors who run ahead of utility relocation create conflict, damage, and costly rework on developer-led schedules.",
      "Finally, Riverside commercial projects increasingly require phased execution near occupied retail and industrial operations. Dust control, access management, and after-hours paving windows must be planned during pre-bid — not improvised after mobilization. Mendozer X Earthworks Inc. documents phasing assumptions upfront so your GC team can hold tenant delivery and certificate-of-occupancy dates.",
    ],
    localIssues: [
      { title: "Alluvial Soil Variability", body: "Riverside County alluvial soils change across short distances. Pad preparation without test pit verification risks encountering unsuitable material mid-grade." },
      { title: "Seasonal SWPPP Enforcement", body: "Rain events trigger aggressive BMP inspections on active commercial grading sites throughout Riverside." },
      { title: "County Inspection Scheduling", body: "Riverside County compaction and grading inspections require advance coordination to avoid holding vertical mobilization." },
      { title: "Occupied-Site Phasing", body: "Retail and industrial improvements near active tenants demand sequenced grading and paving with dust and access controls." },
    ],
    siteVisitItems: DEFAULT_SITE_VISIT,
    evaluationSteps: DEFAULT_EVALUATION_STEPS,
    localBenefits: DEFAULT_BENEFITS,
    honestCallout: defaultHonestCallout(),
  },

  banning: {
    about:
      "Banning's I-10 corridor and Pass area logistics zones drive commercial grading, excavation, paving, and concrete demand at the desert edge of Riverside County. Mendozer X Earthworks Inc. (Lic. #1069854) supports developers and GCs on commercial pads, truck courts, and retail sitework where haul logistics and Riverside County inspection standards shape every schedule.",
    aboutExtended: [
      "Banning sits at the gateway between the Inland Empire and desert commercial corridors, with I-10 frontage parcels attracting retail, logistics support, and service commercial development. Desert-edge soils, seasonal wind exposure, and Pass area haul logistics add complexity that generic earthwork bids often underestimate on Banning commercial sites.",
      "Commercial grading in Banning requires geotech-coordinated compaction on variable desert-edge soils, planned export routes through the Pass corridor, and Riverside County inspection sequencing that keeps pad certification on track. Developers and GCs need contractors who price haul distance, moisture conditioning, and SWPPP compliance as production requirements — not change-order surprises.",
      "Mendozer X Earthworks Inc. delivers licensed commercial excavation, grading, asphalt paving, and concrete flatwork across Banning with superintendent communication, itemized estimates, and equipment sized for I-10 corridor commercial production rates.",
    ],
    projectTypes: ["I-10 corridor commercial pad grading", "Retail and service center paving", "Truck court asphalt reconstruction", "Commercial concrete flatwork", "Desert-edge parcel excavation"],
    localChallenges: ["Desert-edge soil variability and moisture conditioning", "Pass area haul logistics and export routing", "Riverside County grading and compaction inspections", "Wind-driven dust control on exposed grading sites"],
    industries: DEFAULT_INDUSTRIES,
    siteworkEducation: [
      "Banning commercial sitework starts with desert-edge soil conditions that differ sharply from alluvial Inland Empire parcels. Geotechnical reports define over-excavation depths, suitable fill import, and compaction effort required before structural pads and paving subgrades pass Riverside County inspection. Contractors who assume uniform soils across Banning parcels risk mid-grade export and re-compaction that compress GC schedules.",
      "Pass area haul logistics affect every Banning commercial earthwork bid. Export distances, truck staging along I-10 frontage roads, and corridor traffic windows must be mapped during pre-bid walks — not discovered after articulated haul trucks mobilize. Production planning that ignores haul constraints creates daily tonnage shortfalls on commercial pad projects.",
      "Wind-driven dust control is a year-round production factor on exposed Banning grading sites. SWPPP BMPs, water trucks, and track-out management protect Riverside County agency standing and adjacent commercial operations along the I-10 corridor. Stop-work orders for dust violations halt grading and delay paving mobilization on commercial schedules with minimal float.",
      "Riverside County inspection hold points on Banning commercial projects require advance scheduling for compaction testing, fine grade verification, and paving subgrade approval. Earthwork contractors who treat inspections as end-of-phase checkpoints — rather than continuous compliance — face holds that delay vertical construction mobilization on I-10 corridor developments.",
    ],
    localIssues: [
      { title: "Desert-Edge Soil Conditions", body: "Banning commercial parcels often require over-excavation, suitable fill import, and moisture conditioning before Riverside County pad certification." },
      { title: "Pass Area Haul Logistics", body: "Export routing through the Banning Pass corridor must be planned during pre-bid to maintain production on I-10 frontage commercial sites." },
      { title: "Riverside County Inspection Holds", body: "Compaction and grading inspections on Banning commercial projects require advance coordination to avoid delaying vertical mobilization." },
      { title: "Wind-Driven Dust Exposure", body: "Exposed grading on Banning commercial parcels demands continuous dust control and SWPPP compliance along the I-10 corridor." },
    ],
    siteVisitItems: DEFAULT_SITE_VISIT,
    evaluationSteps: DEFAULT_EVALUATION_STEPS,
    localBenefits: DEFAULT_BENEFITS,
    honestCallout: defaultHonestCallout(),
  },

  temecula: {
    about:
      "Temecula's wine country retail growth and master-planned commercial corridors demand precise hillside grading, excavation, paving, and concrete work under Riverside County standards. Mendozer X Earthworks Inc. (Lic. #1069854) partners with developers and GCs on commercial pads, parking improvements, and flatwork across Temecula's expanding commercial zones.",
    aboutExtended: [
      "Temecula combines wine country tourism-driven retail expansion with master-planned commercial development on hillside and valley-floor parcels throughout Riverside County. Commercial earthwork here requires cut slope management, storm drain integration, and finish-quality paving and concrete that meet both city engineering standards and developer design expectations.",
      "Hillside grading on Temecula commercial sites adds embankment finishing, erosion control, and geotech-coordinated compaction programs that must be sequenced before pad certification and vertical mobilization. Retail pad preparation, parking lot reconstruction, and commercial flatwork must align with GC master schedules tied to lease execution and tenant delivery.",
      "Mendozer X Earthworks Inc. provides licensed commercial excavation, grading, asphalt paving, and concrete flatwork across Temecula with GPS grading capability, SWPPP-compliant job sites, and superintendent communication aligned with Riverside County inspection requirements.",
    ],
    projectTypes: ["Master-planned commercial pad grading", "Retail center parking lot paving", "Hillside commercial excavation", "Commercial concrete flatwork", "Wine country corridor improvements"],
    localChallenges: ["Hillside grading and cut slope management", "Master-planned community design standards", "Riverside County inspection coordination", "Storm drain integration on commercial pads"],
    industries: DEFAULT_INDUSTRIES,
    siteworkEducation: [
      "Temecula commercial sitework on hillside parcels requires cut slope finishing, erosion control, and geotechnical recommendations coordinated before pad grading begins. Embankment stability, storm drain tie-ins, and finished grades must direct runoff to approved collection points before asphalt paving or concrete flatwork mobilizes on master-planned commercial developments.",
      "Master-planned community standards in Temecula extend beyond minimum code to pavement aesthetics, landscape-adjacent grading, and long-term performance expectations on retail and office commercial projects. Fine grading tolerances and concrete finish quality must meet design guidelines from the first lift — not after punch-list corrections delay certificate of occupancy.",
      "Riverside County inspection standards on Temecula commercial sites demand documented compaction testing, subgrade verification, and SWPPP compliance throughout grading operations. Missed multi-phase inspection windows hold paving and flatwork mobilization on commercial schedules with tenant-driven delivery dates.",
      "Wine country corridor commercial growth in Temecula increases demand for phased parking improvements and retail pad work near active tenant operations. Dust control, access management, and after-hours paving windows must be scoped during pre-bid so GC teams can hold operational commitments while horizontal improvements proceed.",
    ],
    localIssues: [
      { title: "Hillside Grading Complexity", body: "Cut slopes and embankments on Temecula commercial sites require geotech-coordinated finishing and erosion control before pad certification." },
      { title: "Master-Plan Design Standards", body: "Temecula retail and commercial projects must meet community design standards beyond minimum grading and paving code." },
      { title: "Storm Drain Integration", body: "Commercial grading must tie into approved storm infrastructure before paving and concrete flatwork begin on Temecula parcels." },
      { title: "Riverside County Inspection Timing", body: "Compaction and subgrade inspections on Temecula commercial projects require advance scheduling to protect vertical mobilization dates." },
    ],
    siteVisitItems: DEFAULT_SITE_VISIT,
    evaluationSteps: DEFAULT_EVALUATION_STEPS,
    localBenefits: DEFAULT_BENEFITS,
    honestCallout: defaultHonestCallout(),
  },

  "san-bernardino": {
    about:
      "San Bernardino commercial projects range from industrial pad grading to municipal paving and retail concrete improvements across San Bernardino County. Mendozer X Earthworks Inc. (Lic. #1069854) delivers licensed excavation, grading, asphalt paving, and concrete flatwork with reliable mobilization and professional site management.",
    aboutExtended: [
      "San Bernardino's commercial landscape includes industrial pad preparation, warehouse grading, and municipal improvements across large parcels throughout San Bernardino County. Mass excavation, cut/fill balancing, and geotech-coordinated compaction programs set the foundation for every commercial build in the city.",
      "Large-lot grading in San Bernardino industrial zones involves significant cut/fill volumes, export planning, and agency inspection sequencing that must align with developer and GC master schedules. Truck court paving, commercial concrete flatwork, and parking lot reconstruction follow pad certification with tight tolerance requirements.",
      "Mendozer X Earthworks Inc. supports developers, municipalities, and GCs across San Bernardino with commercial-grade equipment, superintendent communication, and itemized estimates that reflect realistic production on San Bernardino County commercial parcels.",
    ],
    projectTypes: ["Industrial pad grading and excavation", "Large-lot commercial earthwork", "Municipal paving improvements", "Warehouse truck court asphalt", "Commercial concrete flatwork"],
    localChallenges: ["Large-lot cut/fill on industrial parcels", "Coordination with San Bernardino County agency requirements", "Export hauling from expansive commercial sites", "Compaction standards on structural warehouse pads"],
    industries: DEFAULT_INDUSTRIES,
    siteworkEducation: [
      "San Bernardino commercial earthwork on large industrial parcels starts with accurate cut/fill quantity planning and on-site balance analysis. Export volumes, import fill requirements, and haul route logistics determine whether grading stays on budget and on schedule across San Bernardino County commercial developments.",
      "Structural pad requirements on San Bernardino warehouse projects are stringent. Geotechnical engineers specify compaction effort, moisture conditioning, and density testing on every lift. Fine grading brings pads to civil plan tolerances that paving crews and structural teams can proceed from without rework.",
      "San Bernardino County agency requirements for commercial sitework include inspection scheduling, SWPPP compliance, and documentation standards that vary by project type. Earthwork contractors must coordinate with county inspectors throughout grading, utility backfill, and paving phases.",
      "Truck court paving and commercial concrete flatwork on San Bernardino industrial sites require subgrade certification before mobilization. Failed compaction under asphalt sections causes rutting under container traffic — a costly correction that phased pre-bid planning prevents on logistics-oriented commercial projects.",
    ],
    localIssues: [
      { title: "Large-Lot Cut/Fill Volume", body: "San Bernardino industrial parcels require production-scale equipment and balance planning to avoid export cost overruns on commercial grading." },
      { title: "Structural Pad Compaction", body: "Warehouse pads in San Bernardino demand strict compaction programs with geotech observation on every structural lift." },
      { title: "County Agency Coordination", body: "San Bernardino County commercial projects require advance inspection scheduling and permit compliance across grading and paving phases." },
      { title: "Industrial Paving Loads", body: "Truck courts and yard paving on San Bernardino logistics sites require base sections engineered for heavy commercial traffic." },
    ],
    siteVisitItems: DEFAULT_SITE_VISIT,
    evaluationSteps: DEFAULT_EVALUATION_STEPS,
    localBenefits: DEFAULT_BENEFITS,
    honestCallout: defaultHonestCallout(),
  },

  rialto: {
    about:
      "Rialto's Inland Empire industrial corridor and BNSF-adjacent logistics zones drive demand for large-lot grading, excavation, paving, and concrete on San Bernardino County commercial parcels. Mendozer X Earthworks Inc. (Lic. #1069854) supports developers and GCs on warehouse pads, industrial yards, and commercial improvements throughout Rialto.",
    aboutExtended: [
      "Rialto sits at the intersection of Inland Empire industrial growth and rail-adjacent logistics development, with large-format commercial parcels requiring production-scale earthwork under San Bernardino County standards. Warehouse pad grading, truck court paving, and industrial yard improvements bind earthwork completion to tenant delivery milestones.",
      "BNSF corridor adjacency adds haul route planning, noise and dust management, and phased access requirements on Rialto commercial sites near active rail and logistics operations. Large-lot grading on industrial parcels demands accurate quantity takeoffs, export logistics, and compaction programs sized for structural pad certification.",
      "Mendozer X Earthworks Inc. delivers licensed commercial excavation, grading, asphalt paving, and concrete flatwork across Rialto with superintendent-led crews, itemized estimates, and equipment fleets sized for industrial-scale production rates.",
    ],
    projectTypes: ["Large-lot industrial pad grading", "BNSF-adjacent warehouse sitework", "Industrial yard asphalt paving", "Commercial concrete flatwork", "Logistics corridor truck courts"],
    localChallenges: ["Large-lot grading on industrial parcels", "BNSF and logistics corridor adjacency", "San Bernardino County inspection coordination", "Heavy-duty paving for industrial traffic"],
    industries: DEFAULT_INDUSTRIES,
    siteworkEducation: [
      "Rialto commercial earthwork on large industrial parcels routinely involves high-volume cut and fill that must be balanced during pre-bid quantity analysis. On-site material balance, export routing, and import fill logistics determine whether grading production stays on pace for tenant-driven delivery schedules along the Inland Empire logistics corridor.",
      "BNSF-adjacent commercial sites in Rialto require haul route planning that accounts for active rail operations, adjacent warehouse traffic, and corridor dust control. Earthwork phasing must preserve logistics access on neighboring parcels while maintaining daily production targets on your commercial pad.",
      "San Bernardino County compaction and grading inspections on Rialto industrial projects are hold points that gate paving and vertical mobilization. Multi-phase inspection scheduling — coordinated during pre-bid, not after pad work begins — protects GC master schedules on warehouse and distribution developments.",
      "Heavy-duty asphalt sections on Rialto truck courts and industrial yards must be engineered for container handling equipment and continuous logistics traffic. Subgrade compaction, base course thickness, and core test compliance are scoped during pre-bid so paving turnover meets San Bernardino County standards without mid-project spec changes.",
    ],
    localIssues: [
      { title: "Large-Lot Grading Volume", body: "Rialto industrial parcels require production-scale cut/fill planning and export logistics to avoid mid-project cost escalation." },
      { title: "Rail Corridor Adjacency", body: "BNSF-adjacent commercial sites in Rialto demand phased haul routes and dust control that preserve adjacent logistics operations." },
      { title: "San Bernardino County Inspections", body: "Compaction and subgrade inspections on Rialto commercial projects require advance scheduling before paving mobilization." },
      { title: "Industrial Pavement Specs", body: "Truck courts on Rialto logistics sites require heavy-duty asphalt sections with verified base compaction." },
    ],
    siteVisitItems: DEFAULT_SITE_VISIT,
    evaluationSteps: DEFAULT_EVALUATION_STEPS,
    localBenefits: DEFAULT_BENEFITS,
    honestCallout: defaultHonestCallout(),
  },

  anaheim: {
    about:
      "Anaheim's commercial landscape includes retail, hospitality, and industrial development with complex scheduling and access requirements across Orange County. Mendozer X Earthworks Inc. (Lic. #1069854) provides commercial grading, excavation, asphalt paving, and concrete flatwork for projects that must minimize disruption to active commercial operations.",
    aboutExtended: [
      "Anaheim combines high-visibility commercial corridors with active retail, hospitality, and entertainment operations that demand phased sitework execution. Developers and GCs need earthwork contractors who work after-hours, manage dust and noise, and maintain access for adjacent tenants throughout grading and paving phases.",
      "Orange County agency inspection standards in Anaheim require documentation-ready grading, paving core thickness, and concrete flatwork compliance. ADA path-of-travel improvements and parking lot reconstruction must meet strict tolerance before certificate of occupancy on commercial tenant improvement projects.",
      "Mendozer X Earthworks Inc. provides commercial excavation, grading, asphalt paving, and concrete flatwork across Anaheim with phased execution plans, traffic control coordination, and superintendent communication aligned with your GC schedule.",
    ],
    projectTypes: ["Retail parking lot reconstruction", "Commercial pad grading", "Industrial site excavation", "After-hours asphalt paving", "ADA concrete path-of-travel improvements"],
    localChallenges: ["After-hours and phased work near active retail", "High-visibility sites requiring dust and noise control", "Orange County agency inspection standards", "Traffic control on high-volume commercial corridors"],
    industries: DEFAULT_INDUSTRIES,
    siteworkEducation: [
      "Anaheim commercial sitework frequently occurs adjacent to active retail, hospitality, and entertainment operations. Phased execution, after-hours paving windows, and traffic control are planned during pre-bid — not after tenant complaints force shutdowns on Orange County commercial improvements.",
      "Orange County inspection standards demand tight tolerance on grading, paving thickness, and concrete flatwork. Failed cores, grade discrepancies, and ADA compliance issues hold certificate of occupancy on commercial projects throughout Anaheim.",
      "High-visibility Anaheim sites require aggressive dust, noise, and community impact management. SWPPP compliance and professional site appearance protect both agency standing and client relationships on commercial grading and paving programs.",
      "Parking lot reconstruction and overlay programs in Anaheim must maintain fire lane access, ADA routes, and striping coordination through phased paving execution. Asphalt contractors who ignore traffic phasing create operational conflicts for retail tenants and delay horizontal turnover.",
    ],
    localIssues: [
      { title: "Active Retail Adjacency", body: "Anaheim commercial paving and grading projects require phased execution that preserves tenant access and operations." },
      { title: "Orange County Inspection Standards", body: "Orange County agencies enforce strict grading, paving, and ADA compliance on commercial improvements in Anaheim." },
      { title: "High-Visibility Impact", body: "Entertainment and retail corridor sites demand dust, noise, and appearance management throughout grading and paving." },
      { title: "Traffic Phasing", body: "Parking reconstruction must maintain fire lanes and ADA routes through sequenced asphalt paving programs." },
    ],
    siteVisitItems: DEFAULT_SITE_VISIT,
    evaluationSteps: DEFAULT_EVALUATION_STEPS,
    localBenefits: DEFAULT_BENEFITS,
    honestCallout: defaultHonestCallout(),
  },

  "santa-ana": {
    about:
      "Santa Ana's urban Orange County infill and county seat agency standards create dense staging challenges for commercial grading, excavation, paving, and concrete work. Mendozer X Earthworks Inc. (Lic. #1069854) supports developers and GCs on retail and industrial tenant improvements where tight sites and strict inspection requirements shape every schedule.",
    aboutExtended: [
      "Santa Ana functions as Orange County's county seat, with commercial redevelopment, retail tenant improvements, and industrial sitework occurring on dense urban parcels with limited staging and strict agency oversight. Commercial earthwork contractors must navigate multi-layered permit requirements, confined equipment access, and inspection standards enforced across county and city jurisdictions.",
      "Urban infill grading and paving on Santa Ana commercial sites demands creative mobilization plans, sequenced haul routes, and phased execution that preserves adjacent tenant operations. Retail pad preparation, parking lot reconstruction, and commercial concrete flatwork must meet Orange County tolerance standards on schedules with minimal horizontal float.",
      "Mendozer X Earthworks Inc. delivers licensed commercial excavation, grading, asphalt paving, and concrete flatwork across Santa Ana with superintendent communication, itemized estimates, and execution plans scoped for dense urban commercial parcels.",
    ],
    projectTypes: ["Urban commercial infill grading", "Retail and industrial TI paving", "Dense-parcel excavation", "Commercial concrete flatwork", "Parking lot reconstruction"],
    localChallenges: ["Dense urban staging and equipment access", "County seat agency inspection standards", "Phased work near occupied retail and industrial tenants", "Confined haul routes on infill commercial parcels"],
    industries: DEFAULT_INDUSTRIES,
    siteworkEducation: [
      "Santa Ana commercial sitework on urban infill parcels begins with staging analysis that determines equipment access, material storage, and haul route feasibility before grading mobilizes. Dense commercial zones limit articulated truck movement and export windows — production planning during pre-bid accounts for these constraints so GC schedules reflect realistic earthwork duration.",
      "As Orange County's county seat, Santa Ana commercial projects encounter agency standards and inspection pathways that demand documentation-ready grading, paving cores, and concrete flatwork from the first phase. Failed inspections on TI and redevelopment projects hold certificate of occupancy across the full horizontal scope.",
      "Phased grading and paving near occupied retail and industrial tenants in Santa Ana requires dust control, noise management, and access sequencing scoped during pre-bid. Commercial neighbors operate on tight schedules — unplanned sitework disruption triggers complaints and agency intervention that halt production.",
      "Confined haul routes on Santa Ana infill commercial parcels affect daily export tonnage and paving material delivery logistics. Earthwork contractors who price production rates without mapping access constraints create schedule gaps that compress TI completion dates on Orange County commercial improvements.",
    ],
    localIssues: [
      { title: "Dense Urban Staging", body: "Santa Ana commercial infill parcels limit equipment access and material staging — production must be planned for confined site conditions." },
      { title: "County Seat Agency Standards", body: "Orange County inspection requirements on Santa Ana commercial projects demand documented grading, paving, and flatwork compliance." },
      { title: "Occupied Tenant Adjacency", body: "Retail and industrial TI work near active operations requires phased grading and paving with dust and access controls." },
      { title: "Confined Haul Logistics", body: "Urban infill sites in Santa Ana require planned export routes and delivery windows that maintain daily production targets." },
    ],
    siteVisitItems: DEFAULT_SITE_VISIT,
    evaluationSteps: DEFAULT_EVALUATION_STEPS,
    localBenefits: DEFAULT_BENEFITS,
    honestCallout: defaultHonestCallout(),
  },

  irvine: {
    about:
      "Irvine sets a high bar for commercial construction quality and agency compliance across Orange County. Mendozer X Earthworks Inc. (Lic. #1069854) supports master-planned commercial development with precise grading, asphalt paving, concrete flatwork, and clean job sites coordinated with Irvine's engineering and inspection requirements.",
    aboutExtended: [
      "Irvine's master-planned commercial environment demands precision on every sitework phase — from grading tolerances to pavement finish quality and concrete flatwork aesthetics. Developers and GCs building in Irvine need contractors who treat Orange County agency compliance as a production requirement, not a punch-list afterthought.",
      "Office campuses, tech parks, and commercial retail in Irvine involve utility-dense sites with careful sequencing between excavation, underground installation, and fine grading. Scope gaps between trades create schedule risk that pre-bid coordination must address before pad certification.",
      "Mendozer X Earthworks Inc. delivers commercial excavation, grading, asphalt paving, and concrete flatwork across Irvine with GPS grading, SWPPP-compliant job sites, and superintendent communication aligned with Irvine's engineering standards.",
    ],
    projectTypes: ["Office and tech campus grading", "Commercial pad excavation", "Structured parking area paving", "Landscape-adjacent concrete flatwork", "Retail center asphalt improvements"],
    localChallenges: ["Strict city engineering and inspection standards", "Coordination within master-planned communities", "High design standards for commercial finishes", "Utility-dense sites requiring careful sequencing"],
    industries: DEFAULT_INDUSTRIES,
    siteworkEducation: [
      "Irvine commercial construction operates under some of the strictest city engineering standards in Orange County. Grading tolerances, compaction documentation, and finish quality must meet design standards before inspectors release subsequent paving and flatwork phases.",
      "Master-planned community requirements in Irvine extend beyond code minimums to aesthetics, landscape integration, and long-term pavement performance. Commercial grading and concrete flatwork must align with civil plans and design guidelines from day one on office and retail projects.",
      "Utility-dense Irvine commercial sites require excavation and grading sequenced around wet and dry utility installation. Trench backfill, compaction, and fine grading over utilities must be coordinated with underground contractors and city inspectors before paving mobilizes.",
      "Office and tech campus projects in Irvine bind sitework quality to tenant experience. Clean job sites, dust control, and professional execution protect developer reputation on high-profile commercial grading and paving programs throughout Orange County.",
    ],
    localIssues: [
      { title: "Strict Engineering Standards", body: "Irvine city engineering expects tight grading tolerances and documented compaction on every commercial pad." },
      { title: "Master-Plan Design Requirements", body: "Commercial paving and flatwork must meet Irvine design guidelines — not just minimum code compliance." },
      { title: "Utility-Dense Sites", body: "Office and campus projects require careful sequencing between excavation, grading, and underground installation." },
      { title: "High-Profile Execution", body: "Visible commercial sites demand clean, professional job site management throughout grading and paving." },
    ],
    siteVisitItems: DEFAULT_SITE_VISIT,
    evaluationSteps: DEFAULT_EVALUATION_STEPS,
    localBenefits: DEFAULT_BENEFITS,
    honestCallout: defaultHonestCallout(),
  },

  "los-angeles": {
    about:
      "Los Angeles commercial construction demands contractors who can execute in dense urban environments with complex permitting, utility conflicts, and strict agency oversight across Los Angeles County. Mendozer X Earthworks Inc. (Lic. #1069854) provides commercial grading, excavation, asphalt paving, and concrete flatwork for industrial, retail, and commercial improvement projects.",
    aboutExtended: [
      "Los Angeles commercial sitework operates in one of the most complex regulatory and logistical environments in the country. Dense urban staging, utility conflicts, multi-agency permitting, and community impact requirements demand experienced commercial earthwork contractors who plan production before mobilization.",
      "Industrial yard reconstruction, commercial pad grading, and distribution facility sitework across Los Angeles County require haul route planning, dust and noise management, and sequencing that keeps GC schedules moving despite site constraints.",
      "Mendozer X Earthworks Inc. partners with developers and GCs on Los Angeles County commercial projects — with superintendent accountability, itemized estimates, and execution plans that account for urban grading, paving, and concrete realities.",
    ],
    projectTypes: ["Urban commercial pad grading", "Industrial yard asphalt reconstruction", "Commercial excavation and fine grading", "Municipal concrete improvements", "Distribution facility paving"],
    localChallenges: ["Dense urban staging and haul routes", "Complex utility relocation sequencing", "Los Angeles County and city-specific permit requirements", "Dust, noise, and community impact management"],
    industries: DEFAULT_INDUSTRIES,
    siteworkEducation: [
      "Los Angeles commercial earthwork requires haul route analysis, staging plans, and traffic coordination before grading mobilization. Urban sites cannot absorb unplanned truck traffic without community complaints and agency intervention that halt paving and flatwork phases.",
      "Utility relocation sequencing on Los Angeles commercial sites is among the most complex in Southern California. Multiple agencies, private utilities, and existing infrastructure layers create conflict risk that pre-bid coordination must map before excavation begins.",
      "Los Angeles County and city-specific permit requirements vary by jurisdiction and project type. Commercial contractors must confirm permit status and inspection pathways before grading, paving, or concrete mobilizes on urban improvement projects.",
      "Dust, noise, and community impact management on Los Angeles commercial sites is heavily enforced. SWPPP compliance, after-hours work permits, and professional site management protect your project from stop-work orders in dense urban environments throughout Los Angeles County.",
    ],
    localIssues: [
      { title: "Urban Staging Limits", body: "Los Angeles commercial sites require planned equipment staging and haul routes that minimize community and traffic impact." },
      { title: "Utility Conflict Density", body: "Multiple utility layers on Los Angeles commercial sites demand sequencing maps before excavation and grading begin." },
      { title: "Multi-Agency Permits", body: "Los Angeles County and city permit requirements vary by jurisdiction — permit clarity is required before mobilization." },
      { title: "Community Impact Enforcement", body: "Dust, noise, and track-out violations on Los Angeles commercial sites trigger rapid agency response." },
    ],
    siteVisitItems: DEFAULT_SITE_VISIT,
    evaluationSteps: DEFAULT_EVALUATION_STEPS,
    localBenefits: DEFAULT_BENEFITS,
    honestCallout: defaultHonestCallout(),
  },

  pasadena: {
    about:
      "Pasadena's urban Los Angeles County foothill setting combines tight staging, multi-agency permits, and historic corridor adjacency on commercial grading, excavation, paving, and concrete projects. Mendozer X Earthworks Inc. (Lic. #1069854) supports developers and GCs on commercial improvements where foothill topography and dense urban conditions shape every schedule.",
    aboutExtended: [
      "Pasadena commercial sitework occurs along historic corridors and foothill urban parcels where staging is limited, permit pathways cross multiple agencies, and community visibility is high. Commercial grading, parking reconstruction, and concrete flatwork must proceed with dust control, noise management, and access plans scoped during pre-bid — not improvised after mobilization.",
      "Foothill topography on Pasadena commercial sites adds cut/fill complexity, drainage integration, and geotech-coordinated compaction that must align with Los Angeles County inspection standards. Retail tenant improvements, office park paving, and municipal concrete work bind horizontal completion to certificate-of-occupancy milestones.",
      "Mendozer X Earthworks Inc. delivers licensed commercial excavation, grading, asphalt paving, and concrete flatwork across Pasadena with superintendent communication, phased execution plans, and itemized estimates reflecting urban foothill site realities.",
    ],
    projectTypes: ["Historic corridor commercial grading", "Urban foothill pad excavation", "Commercial parking lot paving", "Municipal concrete improvements", "Retail tenant improvement flatwork"],
    localChallenges: ["Tight staging on urban foothill parcels", "Multi-agency permit coordination", "Historic corridor adjacency and community visibility", "Foothill cut/fill and drainage integration"],
    industries: DEFAULT_INDUSTRIES,
    siteworkEducation: [
      "Pasadena commercial earthwork on urban foothill parcels requires staging plans that account for limited equipment access, confined material storage, and restricted haul windows along historic commercial corridors. Production rates priced without mapping these constraints create schedule gaps on TI and redevelopment projects throughout Los Angeles County.",
      "Multi-agency permit pathways on Pasadena commercial sites cross city engineering, Los Angeles County building standards, and corridor-specific improvement requirements. Grading, paving, and concrete permits must be confirmed before mobilization to avoid stop-work orders that halt horizontal improvements mid-phase.",
      "Historic corridor adjacency in Pasadena demands community impact management throughout grading and paving operations. Dust control, noise limits, and professional site appearance protect agency standing and client relationships on high-visibility commercial improvements near established retail and civic zones.",
      "Foothill cut/fill and drainage integration on Pasadena commercial parcels ties grading directly to storm infrastructure and finished pavement slopes. Subgrade certification, compaction testing, and paving mobilization must follow civil plan sequencing — not trade-by-trade improvisation that triggers Los Angeles County inspection holds.",
    ],
    localIssues: [
      { title: "Tight Urban Staging", body: "Pasadena commercial parcels along foothill corridors limit equipment staging and haul access — production must be planned accordingly." },
      { title: "Multi-Agency Permits", body: "Pasadena commercial grading and paving projects require permit clarity across city and Los Angeles County jurisdictions before mobilization." },
      { title: "Historic Corridor Visibility", body: "Commercial sitework near Pasadena's established corridors demands dust, noise, and appearance management throughout grading and paving." },
      { title: "Foothill Drainage Integration", body: "Cut/fill and finished grades on Pasadena commercial sites must tie into approved storm infrastructure before paving begins." },
    ],
    siteVisitItems: DEFAULT_SITE_VISIT,
    evaluationSteps: DEFAULT_EVALUATION_STEPS,
    localBenefits: DEFAULT_BENEFITS,
    honestCallout: defaultHonestCallout(),
  },
};

const SERVICE_ISSUE_ANGLES: Record<string, (city: City, base: CityContent) => { title: string; body: string }[]> = {
  grading: (city, base) => [
    { title: `Compaction Failures in ${city.name}`, body: `Variable soils across ${city.county} require geotech-coordinated moisture conditioning. Failed density tests on ${city.name} commercial pads halt foundation mobilization.` },
    { title: `Fine Grade Tolerances on ${city.name} Pads`, body: `GPS fine grading on ${city.name} commercial sites must meet civil elevation specs before foundations and flatwork mobilize.` },
    base.localIssues[2],
    base.localIssues[3],
  ],
  excavation: (city, base) => [
    { title: `Cut/Fill Balance on ${city.name} Parcels`, body: `Large commercial sites in ${city.name} need accurate quantity planning to avoid export cost overruns and schedule slips.` },
    { title: `Utility Trenching Conflicts in ${city.name}`, body: `Wet and dry utility routing on ${city.name} commercial parcels must be coordinated before mass excavation mobilizes.` },
    base.localIssues[2],
    base.localIssues[3],
  ],
  demolition: (city, base) => [
    { title: `Legacy Structures in ${city.name}`, body: `Older commercial and industrial buildings in ${city.name} require permitted demolition and hazmat surveys before grading can begin.` },
    { title: `Permit Delays on ${city.name} Redevelopment`, body: `${city.county} agency permit timelines on commercial demo projects must be mapped during pre-bid to protect GC schedules.` },
    { title: `Utility Disconnect Sequencing`, body: `Demolition on ${city.name} commercial sites cannot proceed until wet and dry utilities are safely disconnected and capped.` },
    { title: `Dust Control Near Active Operations`, body: `${base.localChallenges[0]} — demolition dust management must be scoped for ${city.name} commercial corridors.` },
  ],
  paving: (city, base) => [
    { title: `Parking Lot Settlement in ${city.name}`, body: `Failed base compaction under commercial paving in ${city.name} causes rutting and alligator cracking within the first service cycle.` },
    { title: `Drainage Failures on ${city.name} Pavement`, body: `Ponding on commercial lots in ${city.name} indicates subgrade or slope errors that trigger ADA and fire lane compliance issues.` },
    { title: `Traffic Phasing Requirements`, body: `${base.localChallenges[3] ?? "Phased paving"} is standard on active ${city.name} commercial properties.` },
    { title: `Core Test Failures`, body: `${city.county} agencies enforce thickness and compaction specs — failed cores hold CO on ${city.name} commercial TI projects.` },
  ],
  concrete: (city, base) => [
    { title: `Slab Tolerance Issues in ${city.name}`, body: `Commercial flatwork in ${city.name} must meet elevation and finish tolerances before tenant improvements and inspections proceed.` },
    { title: `Cure Failures on ${city.name} Pours`, body: `Hot Southern California conditions during ${city.name} commercial pours require proper cure compounds and timing to prevent surface cracking.` },
    { title: `Rebar & Forming Conflicts`, body: `Structural footings and curb/gutter work on ${city.name} sites require coordination with civil plans and underground installation.` },
    { title: `Inspection Holds`, body: `${city.county} concrete inspections on commercial work require advance scheduling to avoid holding vertical construction.` },
  ],
  "site-development": (city, base) => [
    { title: `Scope Gaps on ${city.name} Sitework`, body: `Fragmented earthwork scopes on ${city.name} developer projects create coordination breakdowns between grading, utilities, and paving.` },
    { title: `Utility Sequencing in ${city.name}`, body: `${base.localChallenges[1] ?? "Utility coordination"} must be mapped before phased sitework mobilizes.` },
    { title: `Milestone Misalignment`, body: `GC master schedule milestones on ${city.name} commercial projects require integrated sitework phasing — not trade-by-trade mobilization.` },
    { title: `SWPPP Compliance`, body: `${base.localChallenges[0]} affects full site development timelines across ${city.name} commercial parcels.` },
  ],
};

export function getCityContent(city: City): CityContent {
  return CITY_CONTENT[city.slug] ?? {
    about: `Mendozer X Earthworks Inc. (Lic. #1069854) provides commercial excavation, grading, asphalt paving, and concrete flatwork in ${city.name}, CA and throughout ${city.county}.`,
    aboutExtended: [
      `Commercial earthwork in ${city.name}, CA requires contractors who understand ${city.county} soils, agency standards, and developer-led schedule demands.`,
      `Mendozer X Earthworks Inc. partners with developers, GCs, municipalities, and industrial property owners on grading, excavation, paving, and concrete across ${city.name}.`,
    ],
    projectTypes: ["Commercial grading", "Industrial sitework", "Retail paving", "Warehouse pad prep", "Municipal improvements"],
    localChallenges: ["Agency inspection coordination", "Soils and compaction requirements", "Utility sequencing", "Commercial schedule discipline"],
    industries: DEFAULT_INDUSTRIES,
    siteworkEducation: [
      `Commercial sitework in ${city.name} starts with soils and geotechnical coordination.`,
      `SWPPP compliance and agency inspection standards govern active grading in ${city.county}.`,
      `Utility sequencing must align with earthwork phases on ${city.name} commercial parcels.`,
      `Phased execution protects adjacent commercial operations during grading and paving in ${city.name}.`,
    ],
    localIssues: [
      { title: "Soils Variability", body: `Geotech coordination is required on commercial pads in ${city.name}.` },
      { title: "Agency Compliance", body: `${city.county} inspection standards affect sitework schedules.` },
      { title: "Utility Conflicts", body: "Wet and dry utility sequencing must precede mass excavation." },
      { title: "Schedule Discipline", body: "Developer and GC milestones require realistic production planning." },
    ],
    siteVisitItems: DEFAULT_SITE_VISIT,
    evaluationSteps: DEFAULT_EVALUATION_STEPS,
    localBenefits: DEFAULT_BENEFITS,
    honestCallout: defaultHonestCallout(),
  };
}

export function getServiceCityContent(serviceSlug: string, city: City) {
  const base = getCityContent(city);
  const issueFn = SERVICE_ISSUE_ANGLES[serviceSlug];
  const serviceIssues = issueFn ? issueFn(city, base) : base.localIssues;

  return {
    about: base.about,
    aboutExtended: base.aboutExtended,
    projectTypes: base.projectTypes,
    localChallenges: base.localChallenges,
    industries: base.industries,
    serviceIssues,
    siteVisitItems: base.siteVisitItems,
    evaluationSteps: base.evaluationSteps,
    localBenefits: base.localBenefits,
    honestCallout: base.honestCallout,
    typicalClients: `Developers, general contractors, municipalities, industrial owners, and commercial property managers building in ${city.name}.`,
  };
}

export { SECONDARY_CALLOUT_DEFAULT };
