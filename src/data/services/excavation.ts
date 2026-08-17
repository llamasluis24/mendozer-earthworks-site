import excavationImg from "@/assets/service-excavation.jpg";
import excavationMass from "@/assets/excavation-mass.jpg";
import excavationCutFill from "@/assets/excavation-cut-fill.jpg";
import excavationUtilityTrenching from "@/assets/excavation-utility-trenching.jpg";
import excavationImportExport from "@/assets/excavation-import-export.jpg";
import excavationStormDrain from "@/assets/excavation-storm-drain.jpg";
import excavationTopsoilStripping from "@/assets/excavation-topsoil-stripping.jpg";
import excavationRock from "@/assets/excavation-rock.jpg";
import excavationRecompaction from "@/assets/excavation-recompaction.jpg";
import excavationDeepUtility from "@/assets/excavation-deep-utility.jpg";
import type { PillarService } from "./types";
import { COMMERCIAL_WORKFLOW } from "../commercial-workflow";
import { COMMON_TRUST_BAR } from "./defaults";
import { EXCAVATION_IMAGES } from "./assets";

export const excavation: PillarService = {
  slug: "excavation",
  eyebrow: "Commercial Excavation",
  title: "Commercial Excavation Contractor in Southern California",
  shortName: "Excavation",
  intro:
    "Mass excavation, cut and fill operations, utility trenching, over-excavation, import and export hauling, and site balancing for commercial developers, general contractors, project managers, and civil engineers. Mendozer X Earthworks Inc. supports preconstruction with quantity takeoffs, excavation sequencing plans, haul logistics, and schedule coordination across the Inland Empire, Orange County, and Los Angeles County.",
  cardDesc: "Mass excavation, cut/fill, utility trenching, and import/export for commercial earthwork schedules.",
  heroImage: excavationImg,
  metaTitle: "Commercial Excavation Contractor Southern California | Mendozer X Earthworks Inc.",
  metaDesc:
    "Licensed commercial excavation contractor in Southern California. Mass excavation, cut/fill operations, utility trenching coordination, over-excavation, import/export hauling, and site balancing for developers and GCs.",
  hasDetailPage: true,
  definition:
    "Commercial excavation is the earthwork required to remove, relocate, and balance soil on development sites — including mass excavation, cut and fill, utility trenching, over-excavation, and import/export hauling — sequenced with grading, compaction, and pad certification before vertical construction begins.",
  aeoSummary:
    "Mendozer X Earthworks Inc. is a licensed commercial excavation contractor in Southern California providing mass excavation, cut/fill operations, utility trenching coordination, over-excavation, import/export hauling, and site balancing for warehouse, retail, industrial, and municipal projects.",
  whyMatters: {
    title: "Why Excavation Sets the Pace for Commercial Earthwork",
    paragraphs: [
      "On commercial sites, mass grading and cut/fill balance come first — the parcel must be balanced and rough-graded before onsite excavation begins. Utility trenches, structure excavations, and over-excavation zones are sequenced after mass grade so crews are not digging from existing grade into dangerously deep cuts. When mass grade is skipped or rushed, a trench that should be 4' below finished subgrade can stack on top of a site cut — turning a manageable utility dig into a deep excavation with safety and cost consequences.",
      "Consider a site cut 3' below existing grade to reach design subgrade. If utility trenching starts before that mass grade is complete and the trench must go 4' below subgrade, the trench ends up 7' deep from existing ground. Depths beyond about 4' are typically treated as unsafe without shoring, benching, or other engineered protections — adding inspection holds, production delays, and higher subcontractor cost to your earthwork budget.",
      "Cut and fill operations execute civil engineering quantities with balance planning that minimizes import and export costs. Mass excavation on warehouse and industrial parcels can involve tens of thousands of cubic yards. Once the site is balanced, utility trenching is sequenced with your underground contractor so wet utilities, storm drain, and dry utilities are installed, inspected, and backfilled before paving or fine grading closes the surface. Over-excavation removes unsuitable soils per geotechnical direction; import and export hauling moves approved fill and excess material to certified facilities. Mendozer X Earthworks Inc. coordinates mass grade, onsite excavation, and grading as a single commercial earthwork workflow from pre-bid through turnover.",
    ],
  },
  trustBar: [...COMMON_TRUST_BAR],
  howProblemsHappen: [
    { title: "Cut/Fill Without Balance Planning", body: "Mass excavation that ignores on-site balance drives unnecessary import and export hauling, inflating cost and extending schedule on large commercial parcels." },
    { title: "Utility Sequencing Gaps", body: "Excavation ahead of wet and dry utility relocation damages existing infrastructure and triggers stop-work orders on active commercial job sites." },
    { title: "Over-Excavation Without Approval", body: "Removing material beyond civil cut lines without geotechnical sign-off creates voids that require import fill and re-compaction before grading can proceed." },
    { title: "Haul Route & Disposal Delays", body: "Export of unsuitable soils without pre-approved disposal facilities or haul permits backs up truck queues and stalls excavation production." },
    { title: "Underestimated Rock Quantities", body: "Rock excavation not accounted for in pre-bid takeoffs halts production until ripping, hammering, or specialty equipment is mobilized." },
    { title: "Equipment Mismatch on Volume", body: "Undersized fleets on high-volume commercial cuts fall behind GC milestones, delaying grading mobilization and vertical construction." },
  ],
  signsYouNeedService: [
    { title: "Schedule Slips on Earthwork", body: "Mass excavation falling behind GC milestones signals equipment mismatch, soils issues, or poor production planning." },
    { title: "Unexpected Rock or Unsuitable Soils", body: "Encountering rock, high-plasticity clay, or undocumented fill during excavation halts production until a remediation plan is approved." },
    { title: "Utility Conflict Discoveries", body: "Trenching or mass cut exposing unmapped utilities indicates sequencing problems and requires immediate coordination with underground contractors." },
    { title: "Import/Export Cost Overruns", body: "Haul quantities exceeding bid assumptions due to poor balance planning inflate earthwork budgets and trigger change order disputes." },
    { title: "Trench Cave-In or Shoring Needs", body: "Utility trenches deeper than expected or in unstable soils require shoring redesign and inspection holds before work can continue." },
    { title: "Truck Queue Bottlenecks", body: "Articulated haul trucks waiting at cut or fill zones indicate poor load-and-haul sequencing and lost production hours." },
    { title: "Stop-Work on Utility Damage", body: "Damaged water, gas, or communication lines during excavation halt all sitework until repairs and agency notifications are complete." },
    { title: "Export Permit or Disposal Issues", body: "Rejected loads at disposal facilities due to contamination or improper classification stall export operations and delay site balance." },
  ],
  whatWeEvaluate: [
    "Civil grading plans, cut/fill quantities, and excavation depths against geotechnical recommendations",
    "Site balance opportunities — on-site cut/fill vs. import/export requirements",
    "Existing site conditions, access routes, haul roads, and staging areas for commercial equipment",
    "Soil types, groundwater, rock, and unsuitable material zones from geotech reports and test pits",
    "Utility locations, easements, and sequencing with wet and dry underground contractors",
    "Over-excavation depths, remediation requirements, and approved backfill sources",
    "Import fill sources, export disposal facilities, and haul route permits",
    "GC master schedule milestones, phasing constraints, and inspection windows",
  ],
  subServices: [
    { title: "Mass Excavation", body: "Large-volume earthmoving for warehouse pads, retail centers, and industrial sites using dozers, scrapers, and articulated haul trucks sized for commercial production schedules.", image: excavationMass },
    { title: "Cut & Fill Operations", body: "On-site cut and fill executed to civil engineering quantities — balancing material across the parcel to minimize haul costs while meeting pad elevations.", image: excavationCutFill },
    { title: "Site Balancing", body: "Cut/fill balance planning and execution that keeps suitable material on-site, reducing import, export, and truck traffic on commercial developments.", image: EXCAVATION_IMAGES[2] },
    { title: "Utility Trenching Coordination", body: "Trench excavation for wet and dry utilities sequenced with your underground contractor — water, sewer, storm drain, electrical, and communications with inspection holds.", image: excavationUtilityTrenching },
    { title: "Over-Excavation", body: "Removal of unsuitable, expansive, or contaminated soils to geotechnical depths before approved structural fill and recompaction by the grading team.", image: EXCAVATION_IMAGES[4] },
    { title: "Import & Export of Soil", body: "Coordinated import of approved structural fill and export of excess or unsuitable material with certified disposal facilities and permitted haul routes.", image: excavationImportExport },
    { title: "Building Pad Excavation", body: "Pad-area excavation to subgrade elevation — preparing the footprint for structural fill placement, compaction, and finish grading.", image: EXCAVATION_IMAGES[6] },
    { title: "Storm Drain Trenching", body: "Trench excavation for storm drain pipe, structures, and drainage infrastructure per civil engineering plans and agency requirements.", image: excavationStormDrain },
    { title: "Topsoil Stripping & Stockpiling", body: "Stripping and stockpiling of topsoil and organic material before mass excavation and structural fill placement on commercial parcels.", image: excavationTopsoilStripping },
    { title: "Rock Excavation", body: "Ripping, hammering, and mechanical rock removal on commercial sites where bedrock or boulders impede excavation production.", image: excavationRock },
    { title: "Recompaction Support", body: "Excavation scope coordinated with grading for structural fill placement, moisture conditioning, and compaction after over-excavation is complete.", image: excavationRecompaction },
    { title: "Deep Utility Excavation", body: "Deep trench and structure excavation for utility vaults, grease interceptors, and storm drain structures with shoring coordination as required.", image: excavationDeepUtility },
  ],
  scopeIncludes: [
    "Pre-bid site walk with civil and geotechnical plan review",
    "Mass excavation, cut/fill balancing, and site balance establishment",
    "Utility trench excavation sequenced with underground contractors",
    "Over-excavation of unsuitable soils per geotechnical direction",
    "Import fill delivery and export hauling with certified disposal facilities",
    "Topsoil stripping, stockpiling, and structural fill placement support",
    "Haul route planning, truck sequencing, and daily production reporting",
    "Turnover to grading team at subgrade elevation ready for compaction and certification",
  ],
  secondaryCallout: {
    title: "We Only Bid Excavation Scope That's Needed",
    body: "Mendozer X Earthworks Inc. provides honest pre-bid quantity reviews and itemized estimates. We do not pad cut/fill volumes or recommend unnecessary export. If your site can balance on-site, needs phased excavation to hit budget, or requires coordination with grading and pad certification, we document options upfront — with realistic production rates and haul quantities for commercial review.",
  },
  placeholderTestimonial: {
    quote:
      "Mendozer X Earthworks Inc. moved 40,000 CY on our industrial site ahead of schedule. Clean trench work, no utility conflicts, and haul routes that kept the neighborhood happy.",
    author: "David Okonkwo",
    company: "Orange County Industrial Park",
  },
  commonProblems: [
    { title: "Poor Site Balance", body: "Excavation without cut/fill balance planning drives unnecessary import and export volumes. Accurate pre-bid takeoffs and on-site balancing protect earthwork budgets." },
    { title: "Utility Conflicts", body: "Excavation that runs ahead of utility relocation damages existing infrastructure and stops the job. Sequencing with wet and dry utility contractors is critical on commercial sites." },
    { title: "Over-Excavation Gaps", body: "Unsuitable soils left in place or removed without approved backfill plans delay grading, compaction, and pad certification." },
    { title: "Haul Cost Overruns", body: "Export volumes exceeding bid assumptions due to poor balance planning inflate earthwork budgets and trigger change order disputes." },
    { title: "Rock Production Delays", body: "Unanticipated rock volumes without pre-planned ripping or hammering equipment stall excavation and delay grading mobilization." },
    { title: "Schedule Delays", body: "Late mobilization, equipment mismatch, or poor sequencing against utilities delays vertical construction. Commercial excavation must align with GC master schedules." },
  ],
  serviceBreakdown: [
    { title: "Mass Excavation", body: "Large-volume cut and fill for warehouse pads, retail centers, industrial sites, and multifamily developments." },
    { title: "Cut & Fill Operations", body: "On-site earth balancing to minimize import/export costs while meeting civil plan quantities." },
    { title: "Utility Trenching", body: "Excavation for wet and dry utilities sequenced with your underground contractor and inspection holds." },
    { title: "Over-Excavation", body: "Removal of unsuitable soils with approved backfill and compaction per geotechnical direction." },
    { title: "Import & Export Hauling", body: "Coordinated hauling of suitable fill and export of unsuitable or excess material." },
    { title: "Site Balancing", body: "Cut/fill balance planning to reduce haul costs and truck traffic on commercial parcels." },
    { title: "Rock Excavation", body: "Ripping, hammering, and mechanical rock removal where bedrock impedes production." },
    { title: "Storm Drain Trenching", body: "Trench excavation for storm drain pipe, structures, and drainage infrastructure per civil plans." },
  ],
  process: COMMERCIAL_WORKFLOW.map((s) => ({ step: s.step, title: s.title, body: s.body })),
  educational: {
    title: "Why Over-Excavation and Recompaction Come Before Construction",
    paragraphs: [
      "Geotechnical investigations on commercial sites frequently identify soils that cannot support building loads in their natural state — expansive clays, undocumented fill, organics, or low-strength native material. Over-excavation removes these soils to an engineer-specified depth. Approved structural fill is then imported or sourced on-site, placed in controlled lifts, moisture-conditioned, and compacted to required density. This is not optional remediation — it is the foundation of an engineered building pad.",
      "Skipping or shortcutting over-excavation saves time during earthwork and costs far more later. Settlement under footings, slab differential movement, and failed proof-rolls halt vertical construction and force re-excavation after foundations are already laid out. On commercial projects, the cost of re-work dwarfs the cost of doing over-excavation and recompaction correctly the first time.",
      "Mass grading and site balance establish subgrade elevation before onsite utility and structure excavation proceed. Grading compacts, fine-grades, and certifies the pad. Mendozer X Earthworks Inc. self-performs both scopes and coordinates them as a single earthwork workflow — so developers and GCs get a certified pad, not a chain of subcontractor handoffs.",
    ],
    callout:
      "Commercial developers and GCs should treat excavation quantities, over-excavation requirements, and haul planning as bid milestones — not assumptions. Accurate takeoffs, realistic production rates, and utility sequencing protect schedule and keep earthwork on pace for pad certification and vertical construction.",
  },
  commercialBenefits: [
    { title: "Mass Excavation", body: "High-volume earthmoving sized for warehouse, industrial, and retail development schedules." },
    { title: "Cut & Fill Operations", body: "Civil quantity execution with balance planning to minimize import and export costs." },
    { title: "Site Balancing", body: "On-site material balance to reduce haul traffic and disposal fees on large parcels." },
    { title: "Utility Trenching Coordination", body: "Trench excavation sequenced with wet and dry underground contractors and inspection holds." },
    { title: "Over-Excavation", body: "Unsuitable soil removal to geotech depths before recompaction and pad certification." },
    { title: "Import & Export Hauling", body: "Coordinated fill import and soil export with certified disposal and approved fill sources." },
    { title: "Rock Excavation", body: "Mechanical rock removal with production rates evaluated during pre-bid and geotech review." },
    { title: "Grading Coordination", body: "Excavation turnover sequenced with rough grading, compaction, and pad certification workflow." },
    { title: "Production Reporting", body: "Daily haul logs, cut/fill tracking, and superintendent communication with your GC team." },
  ],
  benefits: [
    { title: "Mass Excavation", body: "Capacity to move large volumes quickly on tight commercial schedules." },
    { title: "Cut/Fill Balancing", body: "On-site balance planning to minimize import and export costs." },
    { title: "Utility Trenching", body: "Excavation timed around wet and dry utility installations." },
    { title: "Over-Excavation", body: "Unsuitable soil removal coordinated with grading and geotechnical direction." },
    { title: "Import & Export", body: "Coordinated hauling with certified disposal facilities and approved fill sources." },
    { title: "Southern California Local", body: "Crews and equipment positioned for fast mobilization across SoCal." },
  ],
  faqs: [
    { q: "What is the difference between rough grading and finish grading?", a: "Rough grading establishes site balance, drainage patterns, and approximate pad elevations after mass excavation. Finish grading brings surfaces to final civil plan tolerances for compaction, paving, or foundation layout. Mendozer X Earthworks Inc. performs both scopes — mass grade and balance precede onsite utility trenching, and finish grading follows compaction and pad certification." },
    { q: "When is over-excavation required?", a: "When geotechnical reports identify soils unsuitable for structural support — expansive clays, undocumented fill, organics, or low-strength material. We remove soils to engineer-specified depths, then coordinate with our grading team for approved fill placement, recompaction, and pad certification." },
    { q: "What is pad certification?", a: "Pad certification is geotechnical sign-off confirming the building pad meets compaction, elevation, and proof-rolling requirements. Excavation and over-excavation must be complete and recompaction verified before pad certification can be issued. We coordinate this workflow with your soils engineer." },
    { q: "Do you coordinate with soils engineers?", a: "Yes. We coordinate over-excavation depths, fill sources, compaction requirements, and pad certification with your geotechnical engineer throughout the earthwork sequence." },
    { q: "Can you perform mass excavation for large developments?", a: "Yes. We self-perform mass excavation on warehouse, retail, industrial, and multifamily sites using owned dozers, excavators, scrapers, and articulated trucks with production rates sized for commercial schedules." },
    { q: "Do you handle cut/fill balancing?", a: "Yes. We plan and execute on-site cut/fill balance to minimize import and export volumes while meeting civil plan quantities. Pre-bid takeoffs identify balance opportunities and haul requirements upfront." },
    { q: "Can you excavate for utility trenches?", a: "Yes. We excavate trenches for wet and dry utilities — water, sewer, storm drain, electrical, and communications — sequenced with your underground contractor and inspection holds." },
    { q: "Do you coordinate import and export hauling?", a: "Yes. We coordinate import of suitable structural fill and export of unsuitable or excess material with certified disposal facilities, approved fill sources, and permitted haul routes." },
    { q: "What happens if unexpected rock or unsuitable soils are encountered?", a: "We notify the GC and geotechnical engineer immediately, document conditions, and develop a remediation plan — ripping, hammering, over-excavation, import of suitable fill, or export — with revised quantities and schedule impact clearly communicated." },
    { q: "Can you phase excavation around active commercial sites?", a: "Yes. We routinely phase excavation on occupied or partially developed commercial properties with controlled access, dust mitigation, and sequenced work areas." },
    { q: "Are you a licensed commercial excavation contractor?", a: "Yes. Mendozer X Earthworks Inc. is a California licensed heavy civil contractor (Lic. #1069854), insured, and bonded. We work exclusively on commercial excavation and earthwork for developers, GCs, and property owners." },
    { q: "What cities do you provide commercial excavation in?", a: "We serve Riverside, Banning, Temecula, San Bernardino, Rialto, Anaheim, Santa Ana, Irvine, Los Angeles, and Pasadena — plus surrounding areas across the Inland Empire, Orange County, and Los Angeles County." },
  ],
};
