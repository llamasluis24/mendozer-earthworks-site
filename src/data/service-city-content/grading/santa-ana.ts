import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import heroImg from "@/assets/hero-bulldozer.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import demolitionImg from "@/assets/service-demolition.jpg";
import { getCityLandmarkAsset } from "@/assets/cities";
import type { ServiceCityPageContent } from "../types";

const landmarkAsset = getCityLandmarkAsset("santa-ana");

export const gradingSantaAna: ServiceCityPageContent = {
  metaDescription:
    "Commercial grading in Santa Ana, CA. Urban OC infill pad prep, county seat agency coordination, dense staging earthwork, and Orange County grading permits for Santa Ana commercial redevelopments.",

  siteVisitItems: [
    {
      title: "Plan & Document Review",
      lead:
        "Review civil grading plans and infill cut/fill quantities on dense Santa Ana urban parcels where adjacent building setbacks, alley access, and limited staging constrain earthwork production.",
      checkpoints: [
        "Review civil grading plans and infill cut/fill quantities on dense Santa Ana urban parcels where adjacent building setbacks.",
        "Alley access.",
        "Limited staging constrain earthwork production.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Field Conditions Assessment",
      lead:
        "Assess undocumented fill, high-plasticity clays, and shallow groundwater indicators from geotechnical reports on Orange County Santa Ana commercial infill redevelopment sites.",
      checkpoints: [
        "Assess undocumented fill.",
        "High-plasticity clays.",
        "Shallow groundwater indicators from geotechnical reports on Orange County Santa Ana commercial infill redevelopment sites.",
      ],
      fieldNote:
        "Field assessment during the pre-bid walk surfaces constraints that affect production, haul logistics, and inspection sequencing.",
    },
    {
      title: "Specification Verification",
      lead:
        "Confirm City of Santa Ana and Orange County grading permit requirements, compaction testing schedules, and inspection hold points before mass excavation mobilizes on urban infill pads.",
      checkpoints: [
        "Confirm City of Santa Ana and Orange County grading permit requirements.",
        "Compaction testing schedules.",
        "Inspection hold points before mass excavation mobilizes on urban infill pads.",
      ],
      fieldNote:
        "Verified specifications before mobilization protect compaction acceptance, drainage performance, and agency sign-off.",
    },
    {
      title: "Inspection & Schedule Mapping",
      lead:
        "Map tight haul routes, alley staging, and articulated truck access for export material on Santa Ana infill parcels where on-site stockpiling is not feasible within county seat redevelopment zones.",
      checkpoints: [
        "Map tight haul routes.",
        "Alley staging.",
        "Articulated truck access for export material on Santa Ana infill parcels where on-site stockpiling is not feasible within county seat redevelopment zones.",
      ],
      fieldNote:
        "Mapped inspection windows and hold points keep sitework sequenced with your GC master schedule and vertical mobilization.",
    },
    {
      title: "Trade Coordination Review",
      lead:
        "Coordinate earthwork sequencing with county seat agency review timelines, SWPPP BMP placement, and storm drain inlet protection on active Santa Ana urban commercial job sites.",
      checkpoints: [
        "Coordinate earthwork sequencing with county seat agency review timelines.",
        "SWPPP BMP placement.",
        "Storm drain inlet protection on active Santa Ana urban commercial job sites.",
      ],
      fieldNote:
        "Utility and trade coordination mapped early avoids conflicts that delay pad certification and paving turnover.",
    },
    {
      title: "Itemized Bid Delivery",
      lead:
        "Deliver itemized grading bid with dense staging assumptions, phased production scope, and Orange County inspection sequencing within one business day.",
      checkpoints: [
        "Deliver itemized grading bid with dense staging assumptions.",
        "Phased production scope.",
        "Orange County inspection sequencing within one business day.",
      ],
      fieldNote:
        "Itemized assumptions documented in the bid package protect schedule, budget, and both parties at award.",
    },
  ],

  evaluationSteps: [
    {
      step: "01",
      title: "Urban Infill Site Assessment",
      body: "Inventory parcel dimensions, adjacent building setbacks, alley access, and equipment staging zones on dense Santa Ana urban infill redevelopments. Flag staging constraints and export requirements before cut/fill quantities are priced.",
    },
    {
      step: "02",
      title: "County Seat Agency Coordination",
      body: "Confirm City of Santa Ana grading permit pathways, Orange County environmental review triggers, and inspection hold points with your civil engineer before earthwork production is scheduled on county seat commercial parcels.",
    },
    {
      step: "03",
      title: "Dense Staging & Export Plan",
      body: "Define phased cut/fill production, tight haul routes, alley staging, and daily export targets sized for Santa Ana infill parcels where equipment access and stockpile capacity are limited by urban adjacency.",
    },
    {
      step: "04",
      title: "SWPPP & Infill Compliance",
      body: "Align grading production with SWPPP BMP maintenance, inlet protection, and track-out controls required on Santa Ana urban commercial sites subject to Orange County stormwater enforcement during rain season.",
    },
    {
      step: "05",
      title: "Pad Prep & Scope Estimate",
      body: "Itemized bid with phased mass excavation methods, dense staging allowances, compaction lift schedules, GPS fine grading tolerances, and realistic production tied to your Santa Ana commercial pad turnover date.",
    },
  ],

  localBenefits: [
    {
      title: "Urban OC Infill Experience",
      body: "Phased mass grading and fine grading on dense Santa Ana urban infill parcels with tight staging, alley access coordination, and export hauling sized for county seat commercial redevelopments.",
    },
    {
      title: "County Seat Agency Coordination",
      body: "Grading permit pathways, Orange County review timelines, and inspection hold points aligned with City of Santa Ana building division and county seat agency requirements before pad certification.",
    },
    {
      title: "Dense Staging Production",
      body: "Equipment staging, phased work zones, and articulated export planning on constrained Santa Ana infill sites where adjacent buildings, alleys, and active street frontage limit large-lot earthwork methods.",
    },
    {
      title: "Commercial Infill Pad Prep",
      body: "GPS-guided fine grading, proof-rolling, and engineered pad certification for office, retail, and mixed-use commercial building pads across Santa Ana urban Orange County infill corridors.",
    },
  ],

  serviceIssues: [
    {
      title: "Dense Staging Bottlenecks",
      body: "Santa Ana urban infill parcels offer limited equipment staging and stockpile capacity between adjacent buildings and alley setbacks. Mass excavation scoped without phased production planning blocks site access and halts compaction mid-stream on county seat redevelopments.",
    },
    {
      title: "County Seat Permit Delays",
      body: "City of Santa Ana and Orange County agency review on commercial infill redevelopments adds grading permit and environmental hold points. Earthwork mobilized before permit clearance triggers stop-work orders that compress pad turnover schedules.",
    },
    {
      title: "Infill Export & Haul Route Conflicts",
      body: "Cut-heavy Santa Ana infill sites require daily export through tight urban haul routes and alley access. Underestimated staging and haul logistics force material stockpiling on pad footprints and delay GPS fine grading before tenant mobilization.",
    },
    {
      title: "High-Plasticity Clay Compaction Failures",
      body: "Santa Ana urban infill parcels commonly contain high-plasticity clays with moisture-sensitive compaction response. Dry grading without controlled moisture conditioning produces failed density tests and pad rework on compressed county seat commercial schedules.",
    },
  ],

  faqs: [
    {
      q: "Do you perform commercial grading in Santa Ana, CA?",
      a: "Yes. Mendozer X Earthworks Inc. (Lic. #1069854) self-performs mass excavation, cut/fill balancing, compaction, GPS fine grading, and engineered pad prep on urban infill office, retail, and mixed-use commercial projects throughout Santa Ana and Orange County.",
    },
    {
      q: "Can you grade on dense urban infill parcels in Santa Ana?",
      a: "Yes. We execute phased mass grading and fine grading on constrained Santa Ana infill sites with tight staging, alley access coordination, and daily export hauling — sized for county seat commercial redevelopments where large-lot earthwork methods are not feasible.",
    },
    {
      q: "How do you coordinate county seat agency requirements in Santa Ana?",
      a: "We align grading permit pathways, Orange County review timelines, and City of Santa Ana inspection hold points with your civil engineer and GC before earthwork production begins on county seat commercial infill redevelopments.",
    },
    {
      q: "Do you coordinate Orange County grading inspections in Santa Ana?",
      a: "Yes. We align compaction testing, geotechnical observation, and grading inspection hold points with your schedule. Pad turnover documentation is prepared before vertical construction mobilizes on Santa Ana commercial projects.",
    },
    {
      q: "How do you manage staging on tight Santa Ana infill sites?",
      a: "We plan phased work zones, alley staging, equipment paths, and daily export schedules during pre-bid walks. Mass excavation on Santa Ana urban parcels is sequenced so adjacent building setbacks and active street frontage are preserved throughout production.",
    },
    {
      q: "What SWPPP requirements apply to Santa Ana urban grading?",
      a: "Orange County requires functional BMPs, inlet protection, and track-out controls on active Santa Ana commercial grading sites. We install and maintain SWPPP compliance throughout earthwork so rain-season enforcement does not trigger stop-work orders.",
    },
    {
      q: "Can you phase earthwork on active Santa Ana commercial properties?",
      a: "Yes. We execute phased mass grading on active Santa Ana urban properties with controlled haul routes, dust suppression, and sequenced work zones that preserve adjacent tenant operations and county seat street frontage.",
    },
    {
      q: "Do you excavate utility trenches on Santa Ana commercial parcels?",
      a: "Yes. We trench for wet and dry utilities sequenced with your underground contractor and inspection holds. Mass excavation is phased so utility relocations complete before structural pad compaction and fine grading begin.",
    },
    {
      q: "What compaction standards apply to Santa Ana commercial pads?",
      a: "Compaction follows your geotechnical engineer's lift thickness, moisture conditioning, and density targets. We coordinate testing frequency and observation on every structural lift on Santa Ana urban infill parcels with high-plasticity clay profiles.",
    },
    {
      q: "How do I request a Santa Ana grading estimate?",
      a: "Contact us with your Santa Ana project address, civil grading plans, geotechnical report, SWPPP status, and target pad certification date. We walk the site and respond within one business day with cut/fill assumptions and county seat inspection sequencing.",
    },
  ],

  caseStudies: [
    {
      title: "Placeholder — Santa Ana Urban Infill Commercial Pad Grading",
      location: "Santa Ana, CA · County Seat Infill Redevelopment",
      scope: "Phased mass excavation, cut/fill balancing, compaction, and GPS fine grading on a dense urban infill commercial building pad with alley staging and Orange County pad certification.",
      challenge: "Limited staging capacity and cut-heavy balance required daily export through tight urban haul routes while county seat agency review and SWPPP BMP maintenance compressed the pad turnover schedule.",
      result: "Engineered pad certified ahead of vertical construction with passing compaction tests and full geotech sign-off documentation. Placeholder — final client metrics pending.",
      image: excavationImg,
      isPlaceholder: true,
    },
    {
      title: "Placeholder — Santa Ana County Seat Mixed-Use Earthwork",
      location: "Santa Ana, CA · Orange County Urban Core",
      scope: "Fine grading, phased cut/fill, and fine grading on a county seat mixed-use commercial repositioning parcel with dense staging and adjacent building setback coordination.",
      challenge: "High-plasticity clay profiles required controlled moisture conditioning on every compaction lift while phased production preserved active alley access and county seat street frontage throughout earthwork.",
      result: "Pad turned over inspection-ready with positive drainage verified and City of Santa Ana grading clearance completed before foundation layout. Placeholder — case study details coming soon.",
      image: demolitionImg,
      isPlaceholder: true,
    },
  ],

  landmark: {
    image: landmarkAsset.image,
    alt: landmarkAsset.alt,
    caption: `Commercial grading serving the ${landmarkAsset.landmark}`,
    label: "Serving Santa Ana, CA",
  },

  media: {
    photos: [
      { src: excavationImg, caption: "Placeholder — phased mass excavation on Santa Ana urban infill commercial pad" },
      { src: heroImg, caption: "Placeholder — GPS fine grading on dense Orange County Santa Ana parcel" },
      { src: g2, caption: "Placeholder — tight staging and alley access coordination on county seat redevelopment" },
      { src: g3, caption: "Placeholder — SWPPP BMP maintenance during Santa Ana urban grading operation" },
    ],
    video: {
      poster: heroImg,
      caption: "Placeholder — Santa Ana commercial grading site walk",
    },
  },

  tabbedInsights: {
    siteConditions: [
      "Santa Ana urban infill commercial parcels commonly offer limited equipment staging and stockpile capacity between adjacent buildings, alleys, and active county seat street frontage.",
      "Dense Orange County infill redevelopments in Santa Ana require phased earthwork production with daily export hauling where on-site balance cannot absorb cut volumes.",
      "City of Santa Ana and Orange County agency review on county seat commercial projects adds grading permit and environmental hold points before mass excavation mobilizes.",
      "High-plasticity clay profiles on Santa Ana urban infill sites demand controlled moisture conditioning on every compaction lift before GPS fine grading meets civil plan tolerances.",
    ],
    ourApproach: [
      "Pre-bid review of civil plans, geotechnical reports, and staging constraints before cut/fill quantities and phased production schedules are priced for Santa Ana infill pad turnover timelines.",
      "Phased mass excavation with tight haul route planning, alley staging, and daily export sized for dense Santa Ana urban parcels where stockpiling blocks pad certification.",
      "Moisture conditioning, controlled lifts, and density testing coordinated with your geotechnical engineer on every structural pad before GPS fine grading begins.",
      "County seat agency coordination and SWPPP BMP maintenance throughout earthwork on Santa Ana commercial infill redevelopments.",
    ],
    localPermits: [
      "City of Santa Ana grading permit with compaction testing requirements and geotechnical observation hold points on urban infill commercial redevelopments.",
      "Orange County environmental review and SWPPP compliance for active mass grading and fine grading on Santa Ana commercial sites.",
      "Export hauling coordination and haul route planning for excess cut material from dense Santa Ana infill parcels.",
      "Final grading inspection and pad certification clearance required before foundation layout and vertical construction mobilization in Santa Ana.",
    ],
  },
};
