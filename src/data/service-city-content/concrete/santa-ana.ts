import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";
import aboutImg from "@/assets/about-daytime.jpg";
import demolitionImg from "@/assets/service-demolition.jpg";
import concreteImg from "@/assets/service-concrete.jpg";
import { getCityLandmarkAsset } from "@/assets/cities";
import type { ServiceCityPageContent } from "../types";

const landmarkAsset = getCityLandmarkAsset("santa-ana");

export const concreteSantaAna: ServiceCityPageContent = {
  metaDescription:
    "Commercial concrete contractor in Santa Ana, CA. Urban OC infill slab pours, county seat permit coordination, and dense staging flatwork for commercial redevelopment near civic center agencies.",

  siteVisitItems: [
    {
      title: "Plan & Document Review",
      lead:
        "Review structural and civil concrete plans, slab-on-grade specifications, and footing details on Santa Ana urban infill commercial and mixed-use redevelopment parcels.",
      checkpoints: [
        "Review structural and civil concrete plans.",
        "Slab-on-grade specifications.",
        "Footing details on Santa Ana urban infill commercial and mixed-use redevelopment parcels.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Field Conditions Assessment",
      lead:
        "Assess tight-lot subgrade compaction certification, proof-roll results, and vapor barrier requirements before formwork mobilizes on densely staged Santa Ana commercial pads.",
      checkpoints: [
        "Assess tight-lot subgrade compaction certification.",
        "Proof-roll results.",
        "Vapor barrier requirements before formwork mobilizes on densely staged Santa Ana commercial pads.",
      ],
      fieldNote:
        "Field assessment during the pre-bid walk surfaces constraints that affect production, haul logistics, and inspection sequencing.",
    },
    {
      title: "Specification Verification",
      lead:
        "Confirm rebar placement, embed schedules, and dowel layouts against structural engineering drawings on Santa Ana infill floor pours with limited crane and pump access.",
      checkpoints: [
        "Confirm rebar placement.",
        "Embed schedules.",
        "Dowel layouts against structural engineering drawings on Santa Ana infill floor pours with limited crane and pump access.",
      ],
      fieldNote:
        "Verified specifications before mobilization protect compaction acceptance, drainage performance, and agency sign-off.",
    },
    {
      title: "Technical Evaluation",
      lead:
        "Evaluate mix design, slump targets, and 28-day PSI strength specifications for commercial floor loading on Santa Ana urban slabs with tenant-specific finish requirements.",
      checkpoints: [
        "Evaluate mix design.",
        "Slump targets.",
        "28-day PSI strength specifications for commercial floor loading on Santa Ana urban slabs with tenant-specific finish requirements.",
      ],
      fieldNote:
        "Technical evaluation upfront reduces rework during production and prevents mid-project quantity disputes.",
    },
    {
      title: "Inspection & Schedule Mapping",
      lead:
        "Map pre-pour inspection hold points, curing compound protocols, and pump truck staging with City of Santa Ana and Orange County building officials on infill sites.",
      checkpoints: [
        "Map pre-pour inspection hold points.",
        "Curing compound protocols.",
        "Pump truck staging with City of Santa Ana and Orange County building officials on infill sites.",
      ],
      fieldNote:
        "Mapped inspection windows and hold points keep sitework sequenced with your GC master schedule and vertical mobilization.",
    },
    {
      title: "Itemized Bid Delivery",
      lead:
        "Deliver itemized commercial concrete bid with pour quantities, formwork assumptions, and inspection sequencing within one business day.",
      checkpoints: [
        "Deliver itemized commercial concrete bid with pour quantities.",
        "Formwork assumptions.",
        "Inspection sequencing within one business day.",
      ],
      fieldNote:
        "Itemized assumptions documented in the bid package protect schedule, budget, and both parties at award.",
    },
  ],

  evaluationSteps: [
    {
      step: "01",
      title: "Urban Infill Slab Plan Review",
      body: "Walk Santa Ana infill commercial slabs with structural and civil plans. Document slab thickness, reinforcement schedules, control joint layouts, and FF/FL tolerance requirements for tenant floor operations on densely staged urban pads near the county seat.",
    },
    {
      step: "02",
      title: "County Seat Permit Pathway",
      body: "Confirm pre-pour inspection requirements for formwork, rebar, and embed placement with City of Santa Ana and Orange County officials before vertical construction milestones depend on footing and slab turnover on urban infill redevelopments.",
    },
    {
      step: "03",
      title: "Dense Staging Coordination",
      body: "Align formwork mobilization, pump truck access, and material staging with geotechnical subgrade certification on Santa Ana infill parcels where tight lot lines, adjacent structures, and active street frontage constrain pour logistics.",
    },
    {
      step: "04",
      title: "Mix Design & Curing Spec",
      body: "Verify concrete mix design, slump, air content, and specified curing duration for Santa Ana commercial pours where urban heat island effects and limited cure windows affect placement and finish protocols on infill sites.",
    },
    {
      step: "05",
      title: "Pour Scope & Schedule Estimate",
      body: "Itemized bid with cubic yard quantities, formwork lineal footage, rebar tonnage, curing compound allowances, and realistic pour windows tied to your Santa Ana pad turnover and tenant improvement schedule.",
    },
  ],

  localBenefits: [
    {
      title: "Urban Infill Slab-on-Grade",
      body: "Reinforced commercial slabs poured to structural engineering specifications with documented FF/FL readings, control joint tooling, and curing protocols sized for Santa Ana infill floor loading and tenant finish requirements.",
    },
    {
      title: "County Seat Inspection Ready",
      body: "Pre-pour formwork, rebar, and embed inspections coordinated with City of Santa Ana and Orange County building officials so footing and slab pours proceed without holding vertical construction on urban commercial redevelopments.",
    },
    {
      title: "Dense Staging Logistics",
      body: "Pump truck access, material staging, and formwork mobilization planned for Santa Ana infill parcels where tight lot lines and active street frontage require sequenced pour windows and neighbor coordination.",
    },
    {
      title: "Mixed-Use Flatwork Packages",
      body: "Slab-on-grade pours, curb and gutter, and sidewalk flatwork engineered for Santa Ana urban infill commercial and mixed-use redevelopments with ADA ramp verification per civil engineering plans.",
    },
  ],

  serviceIssues: [
    {
      title: "Pouring Before Infill Subgrade Certification",
      body: "Santa Ana urban infill slabs on regraded tight-lot pads require certified subgrade compaction and proof-roll clearance before formwork sets. Concrete placed over uncertified base settles under commercial floor loads — producing map cracking and FF/FL failures after tenant buildout.",
    },
    {
      title: "Pre-Pour Rebar Inspection Holds",
      body: "City of Santa Ana and Orange County inspectors reject rebar set outside cover requirements, missing dowels at construction joints, or inadequate lap splices on infill footings. Each failed pre-pour inspection delays steel erection and tenant improvement mobilization on compressed urban schedules.",
    },
    {
      title: "Pump Access Conflicts on Dense Sites",
      body: "Santa Ana infill commercial pours require pump truck staging and crane access planned during pre-bid — not after mobilization. Unplanned access conflicts with adjacent structures, street closures, and county seat traffic delay pour windows and hold vertical construction.",
    },
    {
      title: "FF/FL Tolerance Misses on Tenant Floors",
      body: "Santa Ana urban commercial slabs must meet floor flatness and levelness readings for tenant equipment and display fixtures. Out-of-tolerance finishes discovered after pour require costly grinding remediation on fast-track infill turnover schedules.",
    },
  ],

  faqs: [
    {
      q: "Do you provide commercial concrete in Santa Ana, CA?",
      a: "Yes. Mendozer X Earthworks Inc. (Lic. #1069854) self-performs commercial concrete including structural footings, slabs-on-grade, curb and gutter, sidewalks, and loading aprons on urban infill, mixed-use, and commercial projects throughout Santa Ana and Orange County.",
    },
    {
      q: "Can you pour slabs-on-grade on Santa Ana urban infill sites?",
      a: "Yes. We form, place reinforcement, pour, finish, and cure reinforced slabs-on-grade on Santa Ana infill commercial and mixed-use centers — with mix design, control joint layout, and FF/FL documentation per structural engineering specifications.",
    },
    {
      q: "How do you coordinate pre-pour inspections near the Santa Ana county seat?",
      a: "We schedule formwork, rebar, and embed inspections with City of Santa Ana and Orange County building officials before every footing and slab pour. Inspection clearance is built into our pour sequencing so vertical construction is not held on urban infill redevelopments.",
    },
    {
      q: "What subgrade requirements apply before Santa Ana infill slab pours?",
      a: "Subgrade compaction certification, proof-roll results, and vapor barrier placement per geotechnical report are required before formwork mobilizes on Santa Ana commercial slabs. We confirm geotech hold points during pre-bid walks on tight-lot infill pads.",
    },
    {
      q: "How do you manage dense staging on Santa Ana commercial sites?",
      a: "We plan pump truck access, material staging, and pour windows during pre-bid walks on Santa Ana infill parcels — coordinating street frontage, neighbor access, and county seat traffic constraints before formwork mobilizes.",
    },
    {
      q: "Do you install curb, gutter, and sidewalk flatwork in Santa Ana?",
      a: "Yes. We form and pour commercial curb, gutter, sidewalk, and ADA ramp flatwork on Santa Ana municipal improvements and commercial site packages — with profile verification and drainage flow-line tolerances per civil engineering plans.",
    },
    {
      q: "What happens if cylinder break tests fail on a Santa Ana pour?",
      a: "Failed 28-day compressive strength results trigger structural review, load restrictions, and potential re-pour scope. We document mix tickets, placement conditions, and cylinder handling on every Santa Ana commercial pour to support QC closeout packages.",
    },
    {
      q: "Can you pour structural footings on Santa Ana infill commercial sites?",
      a: "Yes. We form, place rebar, and pour continuous and spread footings on Santa Ana commercial and mixed-use buildings — with embed coordination, pre-pour inspection clearance, and elevation control per structural engineering drawings.",
    },
    {
      q: "How do control joints work on Santa Ana urban commercial slabs?",
      a: "Control joints are tooled at specified spacing during finishing to manage shrinkage cracking on Santa Ana infill slabs. Isolation joints at columns and construction joints at pour breaks are formed per structural plans before placement.",
    },
    {
      q: "How do I request a Santa Ana commercial concrete estimate?",
      a: "Contact us with your Santa Ana project address, structural and civil plans, geotechnical report, and target pour schedule. We walk the site and respond within one business day with cubic yard assumptions and inspection sequencing recommendations.",
    },
  ],

  caseStudies: [
    {
      title: "Placeholder — Santa Ana Urban Infill Commercial Slab",
      location: "Santa Ana, CA · Orange County Infill",
      scope: "Reinforced slab-on-grade pour, vapor barrier installation, control joint tooling, and curing compound application on a tight-lot commercial pad near the Santa Ana civic center.",
      challenge: "Dense staging constraints, pump truck access limitations, and county seat pre-pour inspection requirements compressed the schedule between subgrade certification and tenant improvement mobilization.",
      result: "Slab poured to spec with passing cylinder breaks, documented FF/FL readings, and pre-pour inspection clearance ahead of vertical construction mobilization. Placeholder — final client metrics pending.",
      image: concreteImg,
      isPlaceholder: true,
    },
    {
      title: "Placeholder — Santa Ana Mixed-Use Flatwork Package",
      location: "Santa Ana, CA · County Seat Redevelopment",
      scope: "Commercial curb, gutter, sidewalk, and ADA ramp flatwork on an urban infill mixed-use repositioning project with active street frontage.",
      challenge: "Flatwork reinforcement and elevation tolerances required pre-pour inspection clearance while adjacent civic center traffic and neighboring commercial operations maintained active access on a constrained Santa Ana parcel.",
      result: "Flatwork poured inspection-ready with documented rebar placement and finish slopes verified before paving and striping trades mobilized. Placeholder — case study details coming soon.",
      image: g4,
      isPlaceholder: true,
    },
  ],

  landmark: {
    image: landmarkAsset.image,
    alt: landmarkAsset.alt,
    caption: `Commercial concrete serving the ${landmarkAsset.landmark}`,
    label: "Serving Santa Ana, CA",
  },

  media: {
    photos: [
      { src: concreteImg, caption: "Placeholder — reinforced slab-on-grade pour on Santa Ana urban infill pad" },
      { src: g2, caption: "Placeholder — rebar placement and formwork inspection before Santa Ana commercial pour" },
      { src: demolitionImg, caption: "Placeholder — dense staging and subgrade certification on Santa Ana infill site" },
      { src: aboutImg, caption: "Placeholder — control joint tooling and curing on Santa Ana county seat flatwork" },
    ],
    video: {
      poster: g2,
      caption: "Placeholder — Santa Ana commercial concrete site walk",
    },
  },

  tabbedInsights: {
    siteConditions: [
      "Santa Ana urban infill commercial and mixed-use parcels commonly require slab-on-grade pours with FF/FL tolerances sized for tenant floor loading on tightly staged pads near the Orange County seat.",
      "Regraded tight-lot soils across Santa Ana infill sites demand geotechnical subgrade certification and vapor barrier placement before formwork mobilizes on structural slabs.",
      "City of Santa Ana and Orange County pre-pour inspections for formwork, rebar, and embed placement are standard hold points before footing and slab pours proceed on urban redevelopments.",
      "Dense staging, pump truck access, and active street frontage on Santa Ana infill sites require pour logistics planned during pre-bid — not after mobilization.",
    ],
    ourApproach: [
      "Pre-bid review of structural and civil concrete plans, reinforcement schedules, and geotechnical subgrade requirements before pour quantities and inspection sequencing are priced on Santa Ana infill sites.",
      "Pre-pour inspection coordination with City of Santa Ana and Orange County officials on every footing, slab, and flatwork pour before vertical construction milestones are committed.",
      "Mix design verification, slump control, and cylinder break documentation throughout placement on Santa Ana urban infill commercial projects.",
      "Control joint layout, curing compound application, and FF/FL verification coordinated with your structural engineer and GC superintendent on pad turnover schedules.",
    ],
    localPermits: [
      "City of Santa Ana and Orange County building permits with pre-pour formwork, rebar, and embed inspection hold points before concrete placement.",
      "Geotechnical subgrade certification and proof-roll clearance required before formwork mobilization on Santa Ana infill slab pours.",
      "SWPPP compliance and erosion control maintained during formwork, pour, and flatwork operations on Santa Ana urban redevelopment parcels.",
      "Final flatwork inspection and ADA ramp verification required before certificate of occupancy on Santa Ana commercial site improvement packages.",
    ],
  },
};
