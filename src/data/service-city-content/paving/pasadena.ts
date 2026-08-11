import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import aboutImg from "@/assets/about-daytime.jpg";
import heroImg from "@/assets/hero-bulldozer.jpg";
import pavingImg from "@/assets/service-paving.jpg";
import pavingSurface from "@/assets/paving-layer-surface.jpg";
import { getCityLandmarkAsset } from "@/assets/cities";
import type { ServiceCityPageContent } from "../types";

const landmarkAsset = getCityLandmarkAsset("pasadena");

export const pavingPasadena: ServiceCityPageContent = {
  metaDescription:
    "Commercial asphalt paving in Pasadena, CA. Urban LA foothills parking lots, tight staging asphalt work, multi-agency permit coordination, and Los Angeles County inspection compliance for Pasadena commercial redevelopments.",

  siteVisitItems: [
    {
      title: "Plan & Document Review",
      lead:
        "Review civil asphalt plans, pavement section details, and parking lot specifications on Pasadena urban foothill parcels where tight staging, hillside adjacency, and multi-agency permits affect asphalt sequencing.",
      checkpoints: [
        "Review civil asphalt plans.",
        "Pavement section details.",
        "Parking lot specifications on Pasadena urban foothill parcels where tight staging.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Field Conditions Assessment",
      lead:
        "Assess existing pavement condition, base course integrity, and full-depth reconstruction scope on Pasadena office, retail, and mixed-use commercial parking areas along Colorado Boulevard corridor redevelopments.",
      checkpoints: [
        "Assess existing pavement condition.",
        "Base course integrity.",
        "Full-depth reconstruction scope on Pasadena office.",
      ],
      fieldNote:
        "Field assessment during the pre-bid walk surfaces constraints that affect production, haul logistics, and inspection sequencing.",
    },
    {
      title: "Specification Verification",
      lead:
        "Confirm City of Pasadena, Los Angeles County, and multi-agency asphalt paving permit requirements, density testing schedules, and inspection hold points before aggregate base mobilizes.",
      checkpoints: [
        "Confirm City of Pasadena.",
        "Los Angeles County.",
        "Multi-agency asphalt paving permit requirements.",
      ],
      fieldNote:
        "Verified specifications before mobilization protect compaction acceptance, drainage performance, and agency sign-off.",
    },
    {
      title: "Inspection & Schedule Mapping",
      lead:
        "Map tight haul routes, alley staging, and phased traffic control for commercial parking turnover on constrained Pasadena urban parcels where foothill topography limits equipment and material access.",
      checkpoints: [
        "Map tight haul routes.",
        "Alley staging.",
        "Phased traffic control for commercial parking turnover on constrained Pasadena urban parcels where foothill topography limits equipment and material access.",
      ],
      fieldNote:
        "Mapped inspection windows and hold points keep sitework sequenced with your GC master schedule and vertical mobilization.",
    },
    {
      title: "Trade Coordination Review",
      lead:
        "Coordinate asphalt prep sequencing with multi-agency review timelines, SWPPP BMP placement, and storm drain inlet protection on active Pasadena commercial job sites.",
      checkpoints: [
        "Coordinate asphalt prep sequencing with multi-agency review timelines.",
        "SWPPP BMP placement.",
        "Storm drain inlet protection on active Pasadena commercial job sites.",
      ],
      fieldNote:
        "Utility and trade coordination mapped early avoids conflicts that delay pad certification and paving turnover.",
    },
    {
      title: "Itemized Bid Delivery",
      lead:
        "Deliver itemized commercial asphalt bid with tight staging assumptions, phased asphalt scope, and multi-agency inspection sequencing within one business day.",
      checkpoints: [
        "Deliver itemized commercial asphalt bid with tight staging assumptions.",
        "Phased asphalt scope.",
        "Multi-agency inspection sequencing within one business day.",
      ],
      fieldNote:
        "Itemized assumptions documented in the bid package protect schedule, budget, and both parties at award.",
    },
  ],

  evaluationSteps: [
    {
      step: "01",
      title: "Foothill Urban Parking Plan Review",
      body: "Walk Pasadena commercial parking layouts with civil plans. Document stall counts, drive aisle profiles, fire lane routes, and ADA ramp tie-ins on urban foothill parcels where multi-agency permit pathways and tight staging affect asphalt phasing.",
    },
    {
      step: "02",
      title: "Multi-Agency Permit Pathway",
      body: "Confirm City of Pasadena asphalt paving permit requirements, Los Angeles County review triggers, and additional agency hold points with your civil engineer before pavement production is scheduled on Pasadena commercial redevelopments.",
    },
    {
      step: "03",
      title: "Tight Staging & Phased Asphalt",
      body: "Define phased asphalt production, tight material staging, alley access, and daily traffic control sized for Pasadena urban foothill parcels where equipment access and stockpile capacity are limited by topography and adjacent building setbacks.",
    },
    {
      step: "04",
      title: "SWPPP Asphalt Prep Compliance",
      body: "Align aggregate base installation and asphalt prep with SWPPP BMP maintenance, inlet protection, and track-out controls required on Pasadena commercial sites subject to Los Angeles County stormwater enforcement during rain season.",
    },
    {
      step: "05",
      title: "Scope & Turnover Estimate",
      body: "Itemized bid with asphalt tonnage, base course quantities, tight staging allowances, phased traffic control, striping coordination, and realistic paving windows tied to your Pasadena commercial tenant turnover date.",
    },
  ],

  localBenefits: [
    {
      title: "Urban Foothill Parking",
      body: "Full-depth and overlay asphalt construction sized for Pasadena urban LA foothill office, retail, and mixed-use commercial parking lots with phased production, tight staging, and compaction documentation for GC closeout packages.",
    },
    {
      title: "Multi-Agency Permit Coordination",
      body: "Asphalt paving permit pathways, Los Angeles County review timelines, and City of Pasadena inspection hold points aligned across multi-agency requirements before striping and tenant improvement mobilization.",
    },
    {
      title: "Tight Staging Production",
      body: "Phased asphalt schedules, alley staging, and material delivery planning on constrained Pasadena urban sites where foothill topography and adjacent building setbacks limit conventional parking lot paving methods.",
    },
    {
      title: "SWPPP Asphalt Prep Compliance",
      body: "Inlet protection, BMP maintenance, and stormwater controls maintained throughout aggregate base and asphalt prep on Pasadena commercial sites subject to Los Angeles County SWPPP enforcement.",
    },
  ],

  serviceIssues: [
    {
      title: "Multi-Agency Permit Delays",
      body: "Pasadena commercial redevelopments trigger City of Pasadena and Los Angeles County asphalt paving permit pathways with overlapping review timelines. Pavement mobilized before multi-agency clearance triggers stop-work orders that compress tenant turnover schedules.",
    },
    {
      title: "Tight Staging on Foothill Parcels",
      body: "Pasadena urban foothill sites offer limited material staging between adjacent buildings, alleys, and sloped terrain. Asphalt production scoped without phased planning blocks site access and halts base course compaction mid-stream.",
    },
    {
      title: "Foothill Drainage Defects",
      body: "Pasadena commercial parking on urban foothill parcels requires precise cross-slopes directing runoff to approved inlets within tight urban footprints. Asphalt graded outside civil plan tolerances creates ponding at storefront entries and ADA conflicts before tenant occupancy.",
    },
    {
      title: "Phased Traffic Control Gaps",
      body: "Active Pasadena commercial redevelopments along Colorado Boulevard corridor require phased parking lot closures that preserve alley access and fire lanes. Unphased asphalt production blocks tenant and delivery access and triggers multi-agency inspection holds on compressed turnover schedules.",
    },
  ],

  faqs: [
    {
      q: "Do you provide commercial asphalt paving in Pasadena, CA?",
      a: "Yes. Mendozer X Earthworks Inc. (Lic. #1069854) self-performs commercial asphalt paving, aggregate base installation, parking lot construction, and full-depth reconstruction on office, retail, and mixed-use commercial projects throughout Pasadena and Los Angeles County.",
    },
    {
      q: "Can you pave on tight urban foothill parcels in Pasadena?",
      a: "Yes. We execute phased parking lot asphalt construction on constrained Pasadena urban sites with tight staging, alley access coordination, and traffic control — sized for foothill commercial redevelopments where conventional large-lot paving methods are not feasible.",
    },
    {
      q: "How do you coordinate multi-agency permits in Pasadena?",
      a: "We align asphalt paving permit pathways, Los Angeles County review timelines, and City of Pasadena inspection hold points with your civil engineer and GC before pavement production begins on Pasadena commercial redevelopments.",
    },
    {
      q: "Do you coordinate Los Angeles County asphalt inspections in Pasadena?",
      a: "Yes. We align asphalt density testing, core sampling schedules, and county pavement inspection hold points with your GC schedule. Final pavement acceptance documentation is prepared before striping and tenant improvement mobilization on Pasadena projects.",
    },
    {
      q: "How do you manage staging on tight Pasadena commercial sites?",
      a: "We plan phased work zones, alley staging, material delivery paths, and traffic control during pre-bid walks. Asphalt production on Pasadena urban parcels is sequenced so adjacent building setbacks and foothill grade relationships are preserved throughout paving.",
    },
    {
      q: "How does SWPPP compliance affect Pasadena commercial asphalt work?",
      a: "Los Angeles County requires functional BMPs, inlet protection, and track-out controls before and during aggregate base and asphalt prep on Pasadena commercial sites. We maintain SWPPP compliance throughout paving operations so rain-season enforcement does not trigger stop-work orders.",
    },
    {
      q: "Do you install aggregate base before asphalt on Pasadena commercial sites?",
      a: "Yes. Aggregate base placement, compaction, and proof-rolling to geotechnical specifications are standard scope on Pasadena commercial asphalt projects. Base course certification precedes asphalt mobilization on every parking lot section.",
    },
    {
      q: "Can you phase asphalt work on active Pasadena commercial properties?",
      a: "Yes. We execute phased parking lot asphalt construction on active Pasadena urban properties with traffic control plans, partial lot closures, and sequenced work zones that preserve alley access, fire lanes, and Colorado Boulevard corridor storefront operations.",
    },
    {
      q: "Do you coordinate striping and ADA markings on Pasadena commercial lots?",
      a: "Yes. We sequence asphalt completion with striping contractors for stall layout, fire lane markings, directional arrows, and ADA-compliant pavement markings required before tenant improvement turnover on Pasadena commercial redevelopments.",
    },
    {
      q: "How do I request a Pasadena commercial asphalt estimate?",
      a: "Contact us with your Pasadena project address, civil asphalt plans, geotechnical report, SWPPP status, existing pavement assessment, and target tenant improvement date. We walk the site and respond within one business day with tonnage assumptions and multi-agency inspection sequencing.",
    },
  ],

  caseStudies: [
    {
      title: "Placeholder — Pasadena Urban Foothill Commercial Parking Asphalt",
      location: "Pasadena, CA · Urban LA Foothills",
      scope: "Phased parking lot asphalt construction, aggregate base installation, and multi-lift asphalt placement on a tight urban foothill commercial parcel with multi-agency permit coordination and Los Angeles County pavement acceptance.",
      challenge: "Multi-agency permit timelines, limited staging capacity, and foothill drainage requirements required phased asphalt production with tight traffic control tied to a compressed commercial tenant delivery schedule.",
      result: "Parking areas paved to spec with passing density tests, positive drainage verified, and multi-agency inspection clearance completed before striping turnover. Placeholder — final client metrics pending.",
      image: pavingImg,
      isPlaceholder: true,
    },
    {
      title: "Placeholder — Pasadena Colorado Boulevard Mixed-Use Lot Reconstruction",
      location: "Pasadena, CA · Colorado Boulevard Corridor",
      scope: "Full-depth parking lot reconstruction, aggregate base replacement, and asphalt placement on a mixed-use commercial repositioning project with ADA ramp and fire lane sections.",
      challenge: "Tight urban staging and phased traffic control required sequenced work zones while Los Angeles County SWPPP enforcement maintained BMP compliance throughout active asphalt prep on a constrained foothill parcel.",
      result: "Asphalt turned over inspection-ready with documented compaction results, striping completed, and City of Pasadena pavement acceptance before tenant improvement start. Placeholder — case study details coming soon.",
      image: pavingSurface,
      isPlaceholder: true,
    },
  ],

  landmark: {
    image: landmarkAsset.image,
    alt: landmarkAsset.alt,
    caption: `Commercial asphalt paving serving ${landmarkAsset.landmark}`,
    label: "Serving Pasadena, CA",
  },

  media: {
    photos: [
      { src: pavingImg, caption: "Placeholder — phased asphalt on Pasadena urban foothill commercial parking lot" },
      { src: aboutImg, caption: "Placeholder — aggregate base compaction before asphalt, tight Pasadena commercial parcel" },
      { src: g2, caption: "Placeholder — multi-lift asphalt placement on Colorado Boulevard corridor commercial site" },
      { src: g3, caption: "Placeholder — tight staging and traffic control during Pasadena urban asphalt operation" },
    ],
    video: {
      poster: pavingImg,
      caption: "Placeholder — Pasadena commercial asphalt paving site walk",
    },
  },

  tabbedInsights: {
    siteConditions: [
      "Pasadena urban foothill commercial parcels commonly offer limited material staging between adjacent buildings, alleys, and sloped terrain across Los Angeles County redevelopment footprints.",
      "Multi-agency permit pathways through City of Pasadena and Los Angeles County add asphalt paving review and inspection hold points before aggregate base mobilization on commercial redevelopments.",
      "Pasadena commercial parking on urban foothill parcels requires precise cross-slopes and storm drain tie-ins within tight urban footprints before tenant improvement mobilization.",
      "Existing pavement on repositioned Pasadena commercial sites often requires full-depth reconstruction when base compaction failures and reflective cracking cannot support a mill-and-overlay scope in constrained staging conditions.",
    ],
    ourApproach: [
      "Pre-bid review of civil asphalt plans, pavement section details, and staging constraints before asphalt tonnage and phased production schedules are priced for Pasadena commercial turnover timelines.",
      "Multi-agency permit coordination with City of Pasadena and Los Angeles County officials before asphalt production begins on commercial redevelopments.",
      "Phased parking lot asphalt construction with tight staging, alley access coordination, and traffic control on constrained Pasadena urban foothill parcels.",
      "SWPPP BMP installation and maintenance throughout aggregate base and asphalt prep to keep Los Angeles County paving operations compliant through rain-season events.",
    ],
    localPermits: [
      "City of Pasadena asphalt paving permit with density testing requirements and pavement inspection hold points on urban commercial redevelopments.",
      "Los Angeles County environmental review and SWPPP compliance for aggregate base and asphalt prep on Pasadena commercial sites.",
      "Multi-agency inspection hold points coordinated across City of Pasadena and Los Angeles County before pavement acceptance milestones.",
      "Final pavement inspection and striping clearance required before tenant improvement mobilization and project closeout on Pasadena commercial projects.",
    ],
  },
};
