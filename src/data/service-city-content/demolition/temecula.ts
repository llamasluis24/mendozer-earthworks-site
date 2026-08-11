import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";
import aboutImg from "@/assets/about-daytime.jpg";
import pavingImg from "@/assets/service-paving.jpg";
import demolitionImg from "@/assets/service-demolition.jpg";
import { getCityLandmarkAsset } from "@/assets/cities";
import type { ServiceCityPageContent } from "../types";

const landmarkAsset = getCityLandmarkAsset("temecula");

export const demolitionTemecula: ServiceCityPageContent = {
  metaDescription:
    "Licensed commercial demolition in Temecula, CA. Wine country retail structural takedown, hillside foundation removal, and Riverside County hazmat-coordinated clearing for master-planned commercial redevelopment.",

  siteVisitItems: [
    {
      title: "Pre-Bid Site Walk",
      lead:
        "Walk existing retail or mixed-use structures and document load-bearing systems, slab thickness, and foundation depth for Temecula wine country commercial redevelopment parcels.",
      checkpoints: [
        "Walk existing retail or mixed-use structures and document load-bearing systems.",
        "Slab thickness.",
        "Foundation depth for Temecula wine country commercial redevelopment parcels.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Plan & Document Review",
      lead:
        "Review Phase I/II environmental reports and asbestos survey status before structural demolition is scoped on Temecula master-planned commercial sites.",
      checkpoints: [
        "Review Phase I/II environmental reports and asbestos survey status before structural demolition is scoped on Temecula master-planned commercial sites.",
        "Cross-check observations against civil plans, geotechnical data, and project specifications.",
        "Flag constraints affecting production, haul logistics, SWPPP compliance, or inspection hold points.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Field Verification",
      lead:
        "Verify gas, electric, water, sewer, and fire line disconnect documentation with your utility coordinator on active Temecula hillside job sites.",
      checkpoints: [
        "Verify gas.",
        "Cross-check observations against civil plans, geotechnical data, and project specifications.",
        "Flag constraints affecting production, haul logistics, SWPPP compliance, or inspection hold points.",
      ],
      fieldNote:
        "Pre-mobilization verification prevents stop-work orders and rework that stall downstream trades.",
    },
    {
      title: "Field Conditions Assessment",
      lead:
        "Assess haul routes, debris staging, and export logistics for Temecula wine country retail corridors with SWPPP and dust control requirements.",
      checkpoints: [
        "Assess haul routes.",
        "Debris staging.",
        "Export logistics for Temecula wine country retail corridors with SWPPP and dust control requirements.",
      ],
      fieldNote:
        "Field assessment during the pre-bid walk surfaces constraints that affect production, haul logistics, and inspection sequencing.",
    },
    {
      title: "Identify Adjacent Occupied Tenant Operations Requiri",
      lead:
        "Identify adjacent occupied tenant operations requiring phased demolition access and noise suppression near Temecula retail and mixed-use centers.",
      checkpoints: [
        "Identify adjacent occupied tenant operations requiring phased demolition access and noise suppression near Temecula retail and mixed-use centers.",
        "Cross-check observations against civil plans, geotechnical data, and project specifications.",
        "Flag constraints affecting production, haul logistics, SWPPP compliance, or inspection hold points.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Itemized Bid Delivery",
      lead:
        "Deliver itemized demolition estimate with permit assumptions, abatement allowances, and debris export quantities within one business day.",
      checkpoints: [
        "Deliver itemized demolition estimate with permit assumptions.",
        "Abatement allowances.",
        "Debris export quantities within one business day.",
      ],
      fieldNote:
        "Itemized assumptions documented in the bid package protect schedule, budget, and both parties at award.",
    },
  ],

  evaluationSteps: [
    {
      step: "01",
      title: "Structure & Hazmat Review",
      body: "Assess building construction type, age, and environmental survey status on your Temecula wine country parcel. Flag asbestos, lead, and underground storage tank risks before demolition methods are defined on master-planned commercial structures.",
    },
    {
      step: "02",
      title: "Riverside County Permit Pathway",
      body: "Confirm demolition permit requirements with Riverside County and City of Temecula building departments, fire department notification timelines, and inspection hold points for your master-planned commercial redevelopment schedule.",
    },
    {
      step: "03",
      title: "Utility Disconnect Verification",
      body: "Document capped gas, electric, water, and sewer services with your GC and utility contractors. Demolition cannot mobilize on Temecula commercial sites until disconnects are verified on hillside and retail parcels.",
    },
    {
      step: "04",
      title: "Phasing & Debris Plan",
      body: "Define sequenced work zones, debris staging areas, and daily export routes that maintain SWPPP compliance and protect adjacent commercial operations during Temecula wine country retail corridor demolition.",
    },
    {
      step: "05",
      title: "Itemized Demo Estimate",
      body: "Provide demolition methods, equipment requirements, abatement coordination allowances, and realistic production schedule tied to your Temecula grading mobilization date on master-planned commercial pads.",
    },
  ],

  localBenefits: [
    {
      title: "Riverside County Permit Familiarity",
      body: "Experience coordinating demolition permits, fire department notification, and final inspection clearance with Riverside County agencies on Temecula wine country and master-planned commercial redevelopment projects.",
    },
    {
      title: "Wine Country Retail Demo Capacity",
      body: "High-reach excavators and production rates sized for strip retail, mixed-use, and commercial structure takedown across Temecula master-planned commercial centers.",
    },
    {
      title: "Hillside Site SWPPP Compliance",
      body: "Dust suppression, debris containment, and erosion controls maintained throughout demolition on Temecula hillside sites subject to seasonal rain and aggressive Riverside County BMP enforcement.",
    },
    {
      title: "Bare-Pad Handoff for Grading",
      body: "Foundation and slab removal completed to subgrade with export documentation — ready for hillside mass excavation and pad certification without buried concrete conflicts.",
    },
  ],

  serviceIssues: [
    {
      title: "Pre-1980 Retail Asbestos Risk",
      body: "Older strip retail and mixed-use buildings in Temecula wine country commonly contain asbestos in roofing, flooring, and MEP systems. Demolition scoped without abatement clearance triggers Cal/OSHA and Riverside County stop-work orders.",
    },
    {
      title: "Buried Slabs on Master-Planned Parcels",
      body: "Temecula commercial redevelopments often hide multiple slab layers and undocumented footings from prior tenant improvements. Partial demo leaves concrete that conflicts with new civil grades and utility trenches on hillside pads.",
    },
    {
      title: "Rain-Season SWPPP Holds on Hillsides",
      body: "Riverside County enforces BMP compliance during seasonal storms on Temecula hillside sites. Demolition debris staging without proper containment halts sitework until erosion control is restored — delaying grading mobilization.",
    },
    {
      title: "Occupied Wine Country Retail Adjacency",
      body: "Demolition on Temecula commercial parcels near active retail and restaurant tenants requires phased takedown, after-hours work windows, and dust control that must be planned during pre-bid — not after tenant complaints.",
    },
  ],

  faqs: [
    {
      q: "Do you handle commercial demolition in Temecula, CA?",
      a: "Yes. Mendozer X Earthworks Inc. (Lic. #1069854) is a licensed commercial demolition contractor serving developers, GCs, and property owners in Temecula and Riverside County. We self-perform structural takedown, foundation removal, and site clearing on retail, mixed-use, and master-planned commercial redevelopment projects.",
    },
    {
      q: "What demolition projects do you take on in Temecula?",
      a: "We demolish strip retail centers, mixed-use buildings, commercial facilities, and tenant improvement structures on Temecula wine country redevelopment parcels — including selective demo, full structural takedown, and foundation removal before grading mobilization.",
    },
    {
      q: "How do Riverside County demolition permits work in Temecula?",
      a: "Most Temecula commercial demolitions require a Riverside County or city demolition permit, utility disconnect verification, fire department notification, and sometimes environmental review. We map permit pathways and inspection hold points during the pre-bid walk so your GC schedule reflects realistic approval timelines.",
    },
    {
      q: "Do you coordinate asbestos abatement on Temecula retail demos?",
      a: "We sequence demolition around licensed abatement contractors. We do not self-perform abatement, but we coordinate containment access, clearance documentation, and structural demo mobilization after abatement sign-off on Temecula commercial buildings.",
    },
    {
      q: "Can you phase demolition near occupied Temecula retail tenants?",
      a: "Yes. We execute phased demolition on partially occupied commercial properties with controlled access zones, water suppression, debris screening, and work-hour compliance that protects adjacent tenant operations in Temecula wine country retail centers.",
    },
    {
      q: "Do you remove foundations and slabs in Temecula?",
      a: "Yes. Foundation, footing, and slab-on-grade removal is standard on Temecula commercial demolition scopes. We break, remove, and export concrete to deliver a bare pad ready for hillside mass excavation and geotech-coordinated compaction.",
    },
    {
      q: "How do you manage debris export from Temecula commercial sites?",
      a: "We segregate concrete, steel, and mixed debris, haul to certified recycling and disposal facilities, and provide daily export logs for project compliance. Haul routes and staging are planned during pre-bid to avoid conflicts with wine country corridor traffic and SWPPP requirements.",
    },
    {
      q: "What is the typical timeline for Temecula commercial demolition?",
      a: "Duration depends on structure size, hazmat requirements, foundation depth, and permit status. A single-story retail takedown with foundation removal typically runs two to four weeks after permit approval — we provide site-specific schedules during the estimate phase.",
    },
    {
      q: "Who hires you for demolition in Temecula?",
      a: "Commercial developers, general contractors, municipalities, retail property owners, and commercial asset managers building or redeveloping in Temecula, CA and throughout Riverside County wine country.",
    },
  ],

  caseStudies: [
    {
      title: "Placeholder — Temecula Wine Country Retail Demolition",
      location: "Temecula, CA · Master-Planned Commercial",
      scope: "Full structural takedown, foundation removal, and site clearing on a 28,000 SF strip retail center prior to hillside mass grading on a master-planned commercial pad.",
      challenge: "Asbestos-containing roofing materials and occupied restaurant tenants adjacent to the demo zone required phased takedown and aggressive dust suppression during Riverside County rain season.",
      result: "Bare pad delivered ahead of grading mobilization with recycling documentation and zero debris backlog blocking earthwork access. Placeholder — final client metrics pending.",
      image: demolitionImg,
      isPlaceholder: true,
    },
  ],

  landmark: {
    image: landmarkAsset.image,
    alt: landmarkAsset.alt,
    caption: `Serving commercial demolition projects near ${landmarkAsset.landmark}`,
    label: "Serving Temecula, CA",
  },

  media: {
    photos: [
      { src: demolitionImg, caption: "Placeholder — structural demolition on Temecula wine country retail parcel" },
      { src: g2, caption: "Placeholder — foundation and slab removal, Riverside County hillside site" },
      { src: g4, caption: "Placeholder — debris segregation and export staging, Temecula master-planned commercial" },
      { src: aboutImg, caption: "Placeholder — phased demo near occupied Temecula retail tenants" },
    ],
    video: {
      poster: pavingImg,
      caption: "Placeholder — Temecula commercial demolition site walk",
    },
  },

  tabbedInsights: {
    siteConditions: [
      "Temecula wine country redevelopment parcels commonly include strip retail construction, slab-on-grade foundations, and undocumented tenant improvement slabs from prior commercial occupants.",
      "Hillside soils exposed after foundation removal may require over-excavation coordination with your geotechnical engineer before grading begins on master-planned commercial pads.",
      "Older retail and mixed-use buildings in Temecula frequently require asbestos and lead surveys before structural demolition mobilizes.",
      "Adjacent occupied wine country retail and restaurant operations constrain haul routes, work hours, and debris staging on corridor redevelopment sites.",
    ],
    ourApproach: [
      "Pre-bid structure walk with hazmat flag review and utility disconnect status documentation before demolition methods are priced on Temecula commercial sites.",
      "Sequenced abatement clearance, structural takedown, foundation removal, and site sweep aligned with your hillside grading mobilization milestone.",
      "Daily debris export with concrete and steel segregation to certified Riverside County recycling and disposal facilities.",
      "SWPPP-compliant dust suppression and BMP maintenance throughout demolition — especially during Riverside County rain season on hillside parcels.",
    ],
    localPermits: [
      "Riverside County and City of Temecula demolition permits with utility disconnect verification and fire department notification.",
      "Cal/OSHA compliance documentation for commercial structural demolition operations.",
      "SWPPP and stormwater BMP requirements for debris staging and export on Temecula master-planned commercial parcels.",
      "Final demolition inspection clearance required before new building permit issuance and vertical construction mobilization.",
    ],
  },
};
