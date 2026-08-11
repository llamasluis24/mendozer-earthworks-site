import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import heroImg from "@/assets/hero-bulldozer.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import demolitionImg from "@/assets/service-demolition.jpg";
import { getCityLandmarkAsset } from "@/assets/cities";
import type { ServiceCityPageContent } from "../types";

const landmarkAsset = getCityLandmarkAsset("banning");

export const demolitionBanning: ServiceCityPageContent = {
  metaDescription:
    "Licensed commercial demolition in Banning, CA. I-10 corridor structural takedown, desert-edge foundation removal, and Riverside County hazmat-coordinated site clearing for Pass area logistics and retail redevelopment.",

  siteVisitItems: [
    {
      title: "Pre-Bid Site Walk",
      lead:
        "Walk existing warehouse or retail structures and document load-bearing systems, slab thickness, and foundation depth for Banning I-10 corridor redevelopment parcels.",
      checkpoints: [
        "Walk existing warehouse or retail structures and document load-bearing systems.",
        "Slab thickness.",
        "Foundation depth for Banning I-10 corridor redevelopment parcels.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Plan & Document Review",
      lead:
        "Review Phase I/II environmental reports and asbestos survey status before structural demolition is scoped on Riverside County Pass area commercial sites.",
      checkpoints: [
        "Review Phase I/II environmental reports and asbestos survey status before structural demolition is scoped on Riverside County Pass area commercial sites.",
        "Cross-check observations against civil plans, geotechnical data, and project specifications.",
        "Flag constraints affecting production, haul logistics, SWPPP compliance, or inspection hold points.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Field Verification",
      lead:
        "Verify gas, electric, water, sewer, and fire line disconnect documentation with your utility coordinator on active Banning desert-edge job sites.",
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
        "Assess haul routes, debris staging, and export logistics for Banning I-10 corridor commercial sites with SWPPP and dust control requirements.",
      checkpoints: [
        "Assess haul routes.",
        "Debris staging.",
        "Export logistics for Banning I-10 corridor commercial sites with SWPPP and dust control requirements.",
      ],
      fieldNote:
        "Field assessment during the pre-bid walk surfaces constraints that affect production, haul logistics, and inspection sequencing.",
    },
    {
      title: "Identify Adjacent Occupied Tenant Operations Requiri",
      lead:
        "Identify adjacent occupied tenant operations requiring phased demolition access and dust suppression near Banning Pass area retail centers.",
      checkpoints: [
        "Identify adjacent occupied tenant operations requiring phased demolition access and dust suppression near Banning Pass area retail centers.",
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
      body: "Assess building construction type, age, and environmental survey status on your Banning Pass area parcel. Flag asbestos, lead, and underground storage tank risks before demolition methods are defined on I-10 corridor commercial structures.",
    },
    {
      step: "02",
      title: "Riverside County Permit Pathway",
      body: "Confirm demolition permit requirements with Riverside County and City of Banning building departments, fire department notification timelines, and inspection hold points for your I-10 corridor redevelopment schedule.",
    },
    {
      step: "03",
      title: "Utility Disconnect Verification",
      body: "Document capped gas, electric, water, and sewer services with your GC and utility contractors. Demolition cannot mobilize on Banning commercial sites until disconnects are verified on desert-edge parcels.",
    },
    {
      step: "04",
      title: "Phasing & Debris Plan",
      body: "Define sequenced work zones, debris staging areas, and daily export routes that maintain SWPPP compliance and protect adjacent commercial operations during Banning Pass area corridor demolition.",
    },
    {
      step: "05",
      title: "Itemized Demo Estimate",
      body: "Provide demolition methods, equipment requirements, abatement coordination allowances, and realistic production schedule tied to your Banning grading mobilization date on Riverside County commercial pads.",
    },
  ],

  localBenefits: [
    {
      title: "Riverside County Permit Familiarity",
      body: "Experience coordinating demolition permits, fire department notification, and final inspection clearance with Riverside County agencies on Banning I-10 corridor commercial redevelopment projects.",
    },
    {
      title: "Pass Area Demo Capacity",
      body: "High-reach excavators and production rates sized for large-format distribution and retail structure takedown across Banning desert-edge logistics and commercial corridors.",
    },
    {
      title: "SWPPP-Compliant Job Sites",
      body: "Dust suppression, debris containment, and erosion controls maintained throughout demolition on Banning sites subject to Pass area wind exposure and aggressive Riverside County BMP enforcement.",
    },
    {
      title: "Bare-Pad Handoff for Grading",
      body: "Foundation and slab removal completed to subgrade with export documentation — ready for mass excavation and pad certification without buried concrete conflicts on Banning redevelopment parcels.",
    },
  ],

  serviceIssues: [
    {
      title: "Pre-1980 Corridor Asbestos Risk",
      body: "Older distribution and retail buildings along the Banning I-10 corridor commonly contain asbestos in roofing, flooring, and MEP systems. Demolition scoped without abatement clearance triggers Cal/OSHA and Riverside County stop-work orders.",
    },
    {
      title: "Buried Slabs on Desert-Edge Parcels",
      body: "Banning Pass area retail redevelopments often hide multiple slab layers and undocumented footings from prior tenant improvements. Partial demo leaves concrete that conflicts with new civil grades and utility trenches on desert-edge pads.",
    },
    {
      title: "Wind-Driven Dust on Pass Sites",
      body: "Banning's desert-edge wind exposure amplifies demolition dust beyond standard SWPPP controls. Debris staging without proper containment halts sitework until erosion and dust BMPs are restored — delaying grading mobilization.",
    },
    {
      title: "Occupied Retail Adjacency on I-10",
      body: "Demolition on Banning commercial parcels near active corridor retail requires phased takedown, after-hours work windows, and dust control that must be planned during pre-bid — not after tenant complaints.",
    },
  ],

  faqs: [
    {
      q: "Do you handle commercial demolition in Banning, CA?",
      a: "Yes. Mendozer X Earthworks Inc. (Lic. #1069854) is a licensed commercial demolition contractor serving developers, GCs, and property owners in Banning and Riverside County. We self-perform structural takedown, foundation removal, and site clearing on warehouse, retail, and industrial redevelopment projects along the I-10 corridor.",
    },
    {
      q: "What demolition projects do you take on in Banning?",
      a: "We demolish warehouses, distribution centers, retail centers, and industrial facilities on Banning Pass area redevelopment parcels — including tenant improvement selective demo, full structural takedown, and foundation removal before grading mobilization.",
    },
    {
      q: "How do Riverside County demolition permits work in Banning?",
      a: "Most Banning commercial demolitions require a Riverside County or city demolition permit, utility disconnect verification, fire department notification, and sometimes environmental review. We map permit pathways and inspection hold points during the pre-bid walk so your GC schedule reflects realistic approval timelines.",
    },
    {
      q: "Do you coordinate asbestos abatement on Banning warehouse demos?",
      a: "We sequence demolition around licensed abatement contractors. We do not self-perform abatement, but we coordinate containment access, clearance documentation, and structural demo mobilization after abatement sign-off on Banning I-10 corridor industrial buildings.",
    },
    {
      q: "Can you phase demolition near occupied Banning retail tenants?",
      a: "Yes. We execute phased demolition on partially occupied commercial properties with controlled access zones, water suppression, debris screening, and work-hour compliance that protects adjacent tenant operations along the Banning Pass corridor.",
    },
    {
      q: "Do you remove foundations and slabs in Banning?",
      a: "Yes. Foundation, footing, and slab-on-grade removal is standard on Banning commercial demolition scopes. We break, remove, and export concrete to deliver a bare pad ready for mass excavation and geotech-coordinated compaction on desert-edge parcels.",
    },
    {
      q: "How do you manage debris export from Banning commercial sites?",
      a: "We segregate concrete, steel, and mixed debris, haul to certified recycling and disposal facilities, and provide daily export logs for project compliance. Haul routes and staging are planned during pre-bid to avoid conflicts with I-10 corridor traffic and SWPPP requirements.",
    },
    {
      q: "What is the typical timeline for Banning industrial demolition?",
      a: "Duration depends on structure size, hazmat requirements, foundation depth, and permit status. A single-story warehouse takedown with foundation removal typically runs two to four weeks after permit approval — we provide site-specific schedules during the estimate phase.",
    },
    {
      q: "Who hires you for demolition in Banning?",
      a: "Commercial developers, general contractors, municipalities, industrial property owners, and commercial asset managers building or redeveloping in Banning, CA and throughout the Pass area and Riverside County.",
    },
  ],

  caseStudies: [
    {
      title: "Placeholder — Banning I-10 Corridor Warehouse Demolition",
      location: "Banning, CA · Pass Area Logistics",
      scope: "Full structural takedown, foundation removal, and site clearing on a 38,000 SF warehouse prior to mass grading on a build-to-suit distribution pad along the I-10 corridor.",
      challenge: "Asbestos-containing roofing materials and an occupied retail pad adjacent to the demo zone required phased takedown and aggressive dust suppression during Pass area wind events.",
      result: "Bare pad delivered ahead of grading mobilization with recycling documentation and zero debris backlog blocking earthwork access. Placeholder — final client metrics pending.",
      image: demolitionImg,
      isPlaceholder: true,
    },
    {
      title: "Placeholder — Banning Retail Center Selective Demo",
      location: "Banning, CA · Riverside County Commercial",
      scope: "Selective interior and structural demolition on a strip retail center being repositioned for new commercial tenants on a desert-edge parcel.",
      challenge: "Active service tenants remained operational during phased demolition along a high-traffic Banning I-10 corridor frontage.",
      result: "Phased takedown completed without tenant shutdowns. Foundation conflicts identified and removed before civil regrading. Placeholder — case study details coming soon.",
      image: g3,
      isPlaceholder: true,
    },
  ],

  landmark: {
    image: landmarkAsset.image,
    alt: landmarkAsset.alt,
    caption: `Serving commercial demolition projects near ${landmarkAsset.landmark}`,
    label: "Serving Banning, CA",
  },

  media: {
    photos: [
      { src: demolitionImg, caption: "Placeholder — structural demolition on Banning I-10 corridor parcel" },
      { src: g1, caption: "Placeholder — foundation and slab removal, Riverside County Pass area" },
      { src: excavationImg, caption: "Placeholder — debris segregation and export staging, Banning desert-edge site" },
      { src: heroImg, caption: "Placeholder — phased demo near occupied Banning retail corridor" },
    ],
    video: {
      poster: g1,
      caption: "Placeholder — Banning commercial demolition site walk",
    },
  },

  tabbedInsights: {
    siteConditions: [
      "Banning I-10 corridor redevelopment parcels commonly include CMU warehouse construction, slab-on-grade foundations, and undocumented tenant improvement slabs from prior retail occupants.",
      "Sandy desert-edge soils exposed after foundation removal may require over-excavation coordination with your geotechnical engineer before grading begins on Pass area pads.",
      "Older industrial and retail buildings along the Banning I-10 corridor frequently require asbestos and lead surveys before structural demolition mobilizes.",
      "Pass area wind exposure and adjacent occupied corridor retail constrain haul routes, work hours, and debris staging on Banning commercial redevelopment sites.",
    ],
    ourApproach: [
      "Pre-bid structure walk with hazmat flag review and utility disconnect status documentation before demolition methods are priced on Banning corridor sites.",
      "Sequenced abatement clearance, structural takedown, foundation removal, and site sweep aligned with your grading mobilization milestone on Riverside County commercial pads.",
      "Daily debris export with concrete and steel segregation to certified Riverside County recycling and disposal facilities.",
      "SWPPP-compliant dust suppression and BMP maintenance throughout demolition — especially during Pass area wind events on desert-edge parcels.",
    ],
    localPermits: [
      "Riverside County and City of Banning demolition permits with utility disconnect verification and fire department notification.",
      "Cal/OSHA compliance documentation for commercial structural demolition operations on Banning I-10 corridor sites.",
      "SWPPP and stormwater BMP requirements for debris staging and export on Banning Pass area commercial parcels.",
      "Final demolition inspection clearance required before new building permit issuance and vertical construction mobilization.",
    ],
  },
};
