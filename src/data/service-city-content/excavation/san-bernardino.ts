import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import heroImg from "@/assets/hero-bulldozer.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import aboutImg from "@/assets/about-daytime.jpg";
import { getCityLandmarkAsset } from "@/assets/cities";
import type { ServiceCityPageContent } from "../types";

const landmarkAsset = getCityLandmarkAsset("san-bernardino");

export const excavationSanBernardino: ServiceCityPageContent = {
  metaDescription:
    "Commercial excavation in San Bernardino, CA. Large-lot mass grading, former industrial zone soil remediation, and San Bernardino County agency coordination for Inland Empire redevelopment pads.",

  siteVisitItems: [
    {
      title: "Pre-Bid Site Walk",
      lead:
        "Walk expansive San Bernardino redevelopment parcels and document large-lot cut/fill quantities, haul road access, and on-site balance potential across multi-acre former industrial zone pads.",
      checkpoints: [
        "Walk expansive San Bernardino redevelopment parcels and document large-lot cut/fill quantities.",
        "Haul road access.",
        "On-site balance potential across multi-acre former industrial zone pads.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Plan & Document Review",
      lead:
        "Review geotechnical reports for undocumented fill, unsuitable soils, and former industrial zone contamination zones before mass excavation scope is priced.",
      checkpoints: [
        "Review geotechnical reports for undocumented fill.",
        "Unsuitable soils.",
        "Former industrial zone contamination zones before mass excavation scope is priced.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Specification Verification",
      lead:
        "Confirm grading permit pathway with City of San Bernardino building division and San Bernardino County environmental health coordination on legacy industrial parcels.",
      checkpoints: [
        "Confirm grading permit pathway with City of San Bernardino building division and San Bernardino County environmental health coordination on legacy industrial parcels.",
        "Cross-check observations against civil plans, geotechnical data, and project specifications.",
        "Flag constraints affecting production, haul logistics, SWPPP compliance, or inspection hold points.",
      ],
      fieldNote:
        "Verified specifications before mobilization protect compaction acceptance, drainage performance, and agency sign-off.",
    },
    {
      title: "Inspection & Schedule Mapping",
      lead:
        "Map utility trench sequencing, storm drain tie-ins, and wet utility relocation holds across large-lot San Bernardino commercial grading schedules.",
      checkpoints: [
        "Map utility trench sequencing.",
        "Storm drain tie-ins.",
        "Wet utility relocation holds across large-lot San Bernardino commercial grading schedules.",
      ],
      fieldNote:
        "Mapped inspection windows and hold points keep sitework sequenced with your GC master schedule and vertical mobilization.",
    },
    {
      title: "Technical Evaluation",
      lead:
        "Evaluate SWPPP BMP placement, sediment control, and track-out requirements for expansive grading operations on former industrial zone redevelopment sites.",
      checkpoints: [
        "Evaluate SWPPP BMP placement.",
        "Sediment control.",
        "Track-out requirements for expansive grading operations on former industrial zone redevelopment sites.",
      ],
      fieldNote:
        "Technical evaluation upfront reduces rework during production and prevents mid-project quantity disputes.",
    },
    {
      title: "Itemized Bid Delivery",
      lead:
        "Deliver itemized grading bid with large-lot production rates, import/export assumptions, county agency coordination allowances, and excavation sequencing milestones tied to vertical construction.",
      checkpoints: [
        "Deliver itemized grading bid with large-lot production rates.",
        "Import/export assumptions.",
        "County agency coordination allowances.",
      ],
      fieldNote:
        "Itemized assumptions documented in the bid package protect schedule, budget, and both parties at award.",
    },
  ],

  evaluationSteps: [
    {
      step: "01",
      title: "Large-Lot Site Assessment",
      body: "Inventory parcel dimensions, existing grades, haul road access, and equipment staging zones on expansive San Bernardino former industrial zone redevelopments. Flag multi-acre cut/fill imbalances that drive import/export volumes beyond civil plan assumptions.",
    },
    {
      step: "02",
      title: "Former Industrial Zone Soils",
      body: "Review geotechnical reports for undocumented fill layers, unsuitable soils, high-plasticity clays, and potential contamination zones common on legacy San Bernardino manufacturing and warehouse parcels. Map remediation sequencing before mass excavation mobilizes.",
    },
    {
      step: "03",
      title: "County Agency Coordination",
      body: "Confirm San Bernardino County environmental health review triggers, grading inspection sequencing, and SWPPP enforcement standards with your civil engineer before large-lot grading production is scheduled.",
    },
    {
      step: "04",
      title: "Mass Grading Logistics",
      body: "Define cut/fill balance, articulated haul routes, import/export staging, and daily production targets sized for multi-acre San Bernardino pads where equipment access and stockpile capacity constrain large-lot earthwork schedules.",
    },
    {
      step: "05",
      title: "Scope & Pad Estimate",
      body: "Itemized bid with mass excavation methods, large-lot cut/fill quantities, moisture conditioning and compaction allowances, county agency coordination, and realistic excavation sequencing timeline for San Bernardino commercial redevelopments.",
    },
  ],

  localBenefits: [
    {
      title: "Large-Lot Mass Grading Capacity",
      body: "Dozer, scraper, and articulated haul truck production sized for multi-acre warehouse, logistics, and industrial pad preparation on expansive San Bernardino former industrial zone redevelopment parcels.",
    },
    {
      title: "Former Industrial Zone Soil Expertise",
      body: "Mass excavation and unsuitable soil remediation sequenced around geotechnical recommendations on legacy San Bernardino manufacturing parcels with undocumented fill and variable subsurface conditions.",
    },
    {
      title: "County Agency Coordination",
      body: "Grading inspection sequencing, SWPPP compliance, and San Bernardino County environmental health coordination managed throughout large-lot earthwork on Inland Empire commercial redevelopments.",
    },
    {
      title: "excavation sequencing Handoff",
      body: "Proof-rolling, density testing coordination, and utility trenching turnover documentation aligned with your geotechnical engineer for inspector sign-off before vertical construction mobilizes on San Bernardino pads.",
    },
  ],

  serviceIssues: [
    {
      title: "Undocumented Industrial Fill Layers",
      body: "San Bernardino former industrial zone parcels commonly contain undocumented fill, buried slabs, and mixed debris from decades of manufacturing use. Mass excavation scoped without test pit discovery forces costly import/export revisions and county review delays mid-grading.",
    },
    {
      title: "Large-Lot Cut/Fill Imbalance",
      body: "Multi-acre San Bernardino redevelopments generate cut/fill volumes that exceed on-site balance without disciplined haul planning. Underestimated export or import quantities inflate earthwork cost and collapse GC milestones before excavation sequencing.",
    },
    {
      title: "Unsuitable Soil Remediation Gaps",
      body: "High-plasticity clays, contaminated soils, and former industrial zone unsuitable material zones on San Bernardino parcels require over-excavation and replacement before structural compaction. Grading bids that ignore remediation scope fail density tests after foundations are laid out.",
    },
    {
      title: "County Inspection Hold Compression",
      body: "San Bernardino County grading inspection and environmental health review on legacy industrial parcels can extend permit timelines beyond GC float. Earthwork production without county coordination hold points leaves excavation sequencing without schedule recovery buffer.",
    },
  ],

  faqs: [
    {
      q: "Do you provide commercial excavation in San Bernardino, CA?",
      a: "Yes. Mendozer X Earthworks Inc. (Lic. #1069854) self-performs mass excavation, utility trenching, and excavation sequencing on commercial, industrial, and developer-led projects across San Bernardino and the Inland Empire.",
    },
    {
      q: "Can you handle large-lot grading on San Bernardino industrial redevelopments?",
      a: "Yes. We size dozer, scraper, and articulated haul truck production for multi-acre warehouse, logistics, and industrial pad preparation on expansive San Bernardino former industrial zone parcels with disciplined cut/fill balance planning.",
    },
    {
      q: "How do former industrial zone soils affect San Bernardino grading scope?",
      a: "Legacy San Bernardino manufacturing and warehouse parcels often contain undocumented fill, unsuitable soils, and variable subsurface conditions. We review geotechnical reports during pre-bid, coordinate test pits, and sequence over-excavation and replacement before structural compaction begins.",
    },
    {
      q: "Do you coordinate San Bernardino County grading inspections?",
      a: "Yes. We coordinate grading permit applications, county inspection hold points, SWPPP compliance, and environmental health review triggers with San Bernardino County agencies throughout large-lot earthwork on commercial redevelopment parcels.",
    },
    {
      q: "What compaction and excavation sequencing do you provide in San Bernardino?",
      a: "We execute moisture conditioning, controlled lifts, proof-rolling, and density testing per your geotechnical engineer's specifications. Pad turnover documentation supports inspector sign-off before vertical construction mobilizes on San Bernardino commercial sites.",
    },
    {
      q: "How do you manage import and export on large San Bernardino grading sites?",
      a: "We plan cut/fill balance, articulated haul routes, and daily export/import volumes during pre-bid on expansive San Bernardino parcels. Certified disposal and import sources are coordinated to prevent stockpiles from blocking equipment access across multi-acre grading operations.",
    },
    {
      q: "Can you grade San Bernardino sites with contaminated soil findings?",
      a: "Yes. We sequence mass excavation around geotechnical remediation plans, over-excavation of unsuitable material, and certified import of structural fill on San Bernardino former industrial zone parcels with county environmental health coordination.",
    },
    {
      q: "Do you use GPS grading on San Bernardino commercial pads?",
      a: "Yes. GPS and laser-guided utility trenching on dozers and motor graders delivers civil plan tolerances for building pads, access roads, and storm drain flow lines on San Bernardino warehouse and industrial redevelopments.",
    },
    {
      q: "How do SWPPP requirements apply to San Bernardino large-lot grading?",
      a: "Active grading on expansive San Bernardino parcels requires BMP installation, sediment control, track-out prevention, and daily maintenance meeting county enforcement standards. We maintain SWPPP compliance from mobilization through excavation sequencing.",
    },
    {
      q: "How do I request a San Bernardino excavation estimate?",
      a: "Contact us with your San Bernardino project address, civil grading plans, geotechnical report, and target excavation sequencing date. We walk the site and respond within one business day with large-lot scope assumptions and county coordination notes.",
    },
  ],

  caseStudies: [
    {
      title: "Placeholder — San Bernardino Large-Lot Industrial Pad Grading",
      location: "San Bernardino, CA · Former Industrial Zone Redevelopment",
      scope: "Mass excavation, cut/fill balancing, and structural excavation sequencing across a 4.8-acre former manufacturing parcel prior to new logistics warehouse construction.",
      challenge: "Undocumented fill layers and unsuitable soils discovered during test pits required over-excavation and county environmental health coordination without slipping the GC pad delivery milestone.",
      result: "Certified structural pad delivered on schedule with full density testing documentation and zero SWPPP violations across the expansive lot. Placeholder — final client quote pending.",
      image: heroImg,
      isPlaceholder: true,
    },
    {
      title: "Placeholder — San Bernardino Multi-Acre Warehouse Grading",
      location: "San Bernardino, CA · Inland Empire Logistics Redevelopment",
      scope: "Large-lot mass grading, storm drain rough grading, and utility trenching turnover on a former steel-frame warehouse parcel being repositioned for distribution use.",
      challenge: "Cut/fill imbalance across the multi-acre pad required coordinated import of structural fill and daily articulated haul export while maintaining county inspection hold points.",
      result: "Pad certified within civil plan tolerances with balanced earthwork quantities and geotech-coordinated compaction sign-off. Placeholder — case study details coming soon.",
      image: excavationImg,
      isPlaceholder: true,
    },
  ],

  landmark: {
    image: landmarkAsset.image,
    alt: landmarkAsset.alt,
    caption: `Commercial excavation serving the ${landmarkAsset.landmark}`,
    label: "Serving San Bernardino, CA",
  },

  media: {
    photos: [
      { src: heroImg, caption: "Placeholder — large-lot mass grading on San Bernardino former industrial zone parcel" },
      { src: excavationImg, caption: "Placeholder — articulated haul export during multi-acre San Bernardino earthwork" },
      { src: g3, caption: "Placeholder — GPS utility trenching on San Bernardino warehouse pad" },
      { src: aboutImg, caption: "Placeholder — compaction and proof-rolling on Inland Empire commercial redevelopment" },
    ],
    video: {
      poster: g1,
      caption: "Placeholder — San Bernardino large-lot commercial grading site walk",
    },
  },

  tabbedInsights: {
    siteConditions: [
      "San Bernardino former industrial zone parcels commonly span multi-acre footprints with large-lot cut/fill requirements, limited haul road access, and expansive equipment staging demands.",
      "Legacy manufacturing and warehouse sites frequently contain undocumented fill, buried slabs, unsuitable soils, and variable subsurface conditions requiring geotechnical remediation before structural compaction.",
      "High-plasticity clays and former industrial zone soil profiles on San Bernardino parcels demand moisture conditioning discipline and over-excavation sequencing to achieve density specifications.",
      "Large-lot grading operations generate high export and import volumes where on-site cut/fill balance alone cannot satisfy civil plan finished floor elevations.",
    ],
    ourApproach: [
      "Pre-bid review of civil grading plans, geotechnical reports, and test pit findings before large-lot earthwork scope is priced for San Bernardino industrial redevelopments.",
      "Cut/fill balance planning with articulated haul logistics sized for multi-acre San Bernardino pads where stockpiling would block equipment access across expansive parcels.",
      "Moisture conditioning, controlled lifts, and density testing coordinated with your geotechnical engineer throughout mass grading and utility trenching production.",
      "County agency inspection hold points, SWPPP BMP maintenance, and environmental health coordination managed from mobilization through excavation sequencing.",
    ],
    localPermits: [
      "City of San Bernardino grading permit with civil plan approval and utility clearance verification.",
      "San Bernardino County grading inspection sequencing and environmental health review triggers on former industrial zone parcels.",
      "SWPPP and sediment control BMP requirements for large-lot grading operations during Inland Empire storm seasons.",
      "excavation sequencing and geotech-coordinated compaction sign-off required before new commercial construction permits and foundation mobilization.",
    ],
  },
};
