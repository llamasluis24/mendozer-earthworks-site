import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";
import heroImg from "@/assets/hero-bulldozer.jpg";
import demolitionImg from "@/assets/service-demolition.jpg";
import { getCityLandmarkAsset } from "@/assets/cities";
import type { ServiceCityPageContent } from "../types";

const landmarkAsset = getCityLandmarkAsset("los-angeles");

export const demolitionLosAngeles: ServiceCityPageContent = {
  metaDescription:
    "Commercial demolition contractor in Los Angeles, CA. Urban structural takedown, industrial yard demolition, and foundation removal with multi-agency permit coordination, haul route planning, and community impact controls across LA County.",

  siteVisitItems: [
    {
      title: "Inventory Existing Industrial Yard Structures",
      lead:
        "Inventory existing industrial yard structures, slab-on-grade foundations, and buried improvements on Los Angeles redevelopment parcels.",
      checkpoints: [
        "Inventory existing industrial yard structures.",
        "Slab-on-grade foundations.",
        "Buried improvements on Los Angeles redevelopment parcels.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Inspection & Schedule Mapping",
      lead:
        "Map urban haul routes, truck staging zones, and traffic control requirements for dense LA commercial corridors before demolition mobilizes.",
      checkpoints: [
        "Map urban haul routes.",
        "Truck staging zones.",
        "Traffic control requirements for dense LA commercial corridors before demolition mobilizes.",
      ],
      fieldNote:
        "Mapped inspection windows and hold points keep sitework sequenced with your GC master schedule and vertical mobilization.",
    },
    {
      title: "Specification Verification",
      lead:
        "Confirm demolition permit status across City of Los Angeles, LA County, and applicable fire department notification requirements.",
      checkpoints: [
        "Confirm demolition permit status across City of Los Angeles.",
        "Cross-check observations against civil plans, geotechnical data, and project specifications.",
        "Flag constraints affecting production, haul logistics, SWPPP compliance, or inspection hold points.",
      ],
      fieldNote:
        "Verified specifications before mobilization protect compaction acceptance, drainage performance, and agency sign-off.",
    },
    {
      title: "Scope Documentation",
      lead:
        "Document wet and dry utility disconnect and cap verification for gas, electric, water, sewer, and communications on active LA commercial sites.",
      checkpoints: [
        "Document wet and dry utility disconnect and cap verification for gas.",
        "Cross-check observations against civil plans, geotechnical data, and project specifications.",
        "Flag constraints affecting production, haul logistics, SWPPP compliance, or inspection hold points.",
      ],
      fieldNote:
        "Documented field conditions support realistic production rates and defensible preconstruction numbers.",
    },
    {
      title: "Field Conditions Assessment",
      lead:
        "Assess dust, noise, and community impact controls required near occupied tenants and residential adjacency during phased LA demolition.",
      checkpoints: [
        "Assess dust.",
        "Cross-check observations against civil plans, geotechnical data, and project specifications.",
        "Flag constraints affecting production, haul logistics, SWPPP compliance, or inspection hold points.",
      ],
      fieldNote:
        "Field assessment during the pre-bid walk surfaces constraints that affect production, haul logistics, and inspection sequencing.",
    },
    {
      title: "Itemized Bid Delivery",
      lead:
        "Deliver itemized demolition bid with production rates, export logistics, and permit assumptions tied to your LA grading mobilization date.",
      checkpoints: [
        "Deliver itemized demolition bid with production rates.",
        "Export logistics.",
        "Permit assumptions tied to your LA grading mobilization date.",
      ],
      fieldNote:
        "Itemized assumptions documented in the bid package protect schedule, budget, and both parties at award.",
    },
  ],

  evaluationSteps: [
    {
      step: "01",
      title: "Urban Site & Structure Assessment",
      body: "Document industrial yard structures, tilt-up warehouses, CMU buildings, and buried improvements on your Los Angeles parcel. Flag undocumented slabs, grease interceptors, and utility vaults that expand demolition scope.",
    },
    {
      step: "02",
      title: "Multi-Agency Permit Mapping",
      body: "Confirm City of Los Angeles, LA County, and applicable agency demolition permit requirements, environmental review triggers, fire department notification, and inspection sequencing for your redevelopment timeline.",
    },
    {
      step: "03",
      title: "Haul Route & Staging Plan",
      body: "Define equipment mobilization, debris staging, articulated truck haul routes, and traffic coordination that minimize community impact on Los Angeles's dense urban commercial corridors.",
    },
    {
      step: "04",
      title: "Utility Conflict Sequencing",
      body: "Map dense utility layers — gas, electric, water, sewer, and private communications — and confirm disconnect documentation before structural demolition mobilizes on LA commercial sites.",
    },
    {
      step: "05",
      title: "Scope & Export Estimate",
      body: "Itemized bid with demolition methods, debris quantities, recycling diversion targets, abatement allowances, and realistic urban export logistics for constrained Los Angeles commercial parcels.",
    },
  ],

  localBenefits: [
    {
      title: "LA Urban Demolition Experience",
      body: "Industrial yard and warehouse takedown production sized for dense Los Angeles commercial corridors with haul route planning and phased access that protects GC schedules.",
    },
    {
      title: "Multi-Agency Permit Coordination",
      body: "Experience navigating City of Los Angeles, LA County, and fire department demolition permit pathways on commercial redevelopment projects across LA County jurisdictions.",
    },
    {
      title: "Constrained Urban Staging",
      body: "Planned equipment staging, debris screening, and sequenced truck export for Los Angeles sites with limited access, active adjacent operations, and strict community impact enforcement.",
    },
    {
      title: "Bare-Pad Handoff for Grading",
      body: "Foundation and slab removal completed to subgrade with certified recycling documentation — ready for mass excavation and pad certification on LA industrial redevelopment parcels.",
    },
  ],

  serviceIssues: [
    {
      title: "Urban Staging & Haul Route Limits",
      body: "Los Angeles commercial demolition sites cannot absorb unplanned truck traffic or debris stockpiles without community complaints and agency intervention. Demolition scoped without haul route analysis and daily export sequencing blocks site access and halts downstream sitework mobilization.",
    },
    {
      title: "Multi-Agency Permit Fragmentation",
      body: "LA County and city-specific demolition permit requirements vary by jurisdiction, structure type, and environmental triggers. Late permit clarity or missed fire department notification collapses the schedule buffer before grading and vertical construction mobilize.",
    },
    {
      title: "Dense Utility Conflict Layers",
      body: "Los Angeles redevelopment parcels carry multiple wet and dry utility systems, private communications infrastructure, and undocumented vaults beneath industrial yards. Structural demolition that proceeds before utility disconnect verification triggers stop-work orders and costly repair scopes.",
    },
    {
      title: "Community Impact Enforcement",
      body: "Dust, noise, and track-out violations on LA commercial corridors face rapid municipal response. Demolition without water suppression, screened debris staging, and after-hours work compliance triggers complaints from adjacent tenants and residential neighbors.",
    },
  ],

  faqs: [
    {
      q: "Do you provide commercial demolition in Los Angeles, CA?",
      a: "Yes. Mendozer X Earthworks Inc. provides licensed commercial demolition for developers, GCs, and industrial property owners in Los Angeles and throughout LA County. We self-perform structural takedown, industrial yard demolition, foundation removal, and site clearing on urban commercial redevelopment parcels.",
    },
    {
      q: "What types of demolition do you handle in Los Angeles?",
      a: "We handle industrial yard structure removal, warehouse and tilt-up takedown, tenant improvement demolition, foundation and slab removal, and commercial site clearing on Los Angeles urban redevelopment and logistics projects.",
    },
    {
      q: "How do you manage haul routes on dense LA commercial sites?",
      a: "We plan articulated truck routes, daily export volumes, and debris staging during pre-bid. Urban haul route analysis and traffic coordination prevent stockpiles from blocking site access and minimize community impact on Los Angeles commercial corridors.",
    },
    {
      q: "Which agencies issue demolition permits in Los Angeles?",
      a: "Permit jurisdiction depends on project location and structure type. City of Los Angeles, LA County, and applicable fire departments each have demolition permit, utility disconnect, and notification requirements. We map the correct pathway and inspection hold points during the pre-bid walk.",
    },
    {
      q: "Can you demolish industrial yards on active LA commercial sites?",
      a: "Yes. We phase industrial yard demolition on partially operational properties with sequenced work zones, dust suppression, screened staging, and haul routing that preserves adjacent tenant access and distribution traffic flow.",
    },
    {
      q: "How do you handle dense utility conflicts during LA demolition?",
      a: "We document wet and dry utility disconnect and cap verification before structural demolition mobilizes. Pre-bid utility mapping identifies gas, electric, water, sewer, and private communications conflicts that affect demolition methods and production sequencing.",
    },
    {
      q: "What community impact controls apply to LA commercial demolition?",
      a: "Los Angeles commercial corridors require water suppression, screened debris staging, dust and noise management, and compliant work-hour windows. We maintain SWPPP controls and after-hours permit compliance throughout demolition on urban LA sites.",
    },
    {
      q: "Do you remove foundations and slabs on Los Angeles redevelopment parcels?",
      a: "Yes. Foundation, footing, and slab-on-grade removal is standard on LA commercial demolition scopes. We break, remove, and export concrete to deliver a bare pad ready for mass excavation and geotech-coordinated compaction.",
    },
    {
      q: "What environmental requirements apply to LA industrial demolition?",
      a: "Older Los Angeles industrial buildings may require Phase I/II environmental assessment and asbestos surveys before structural demolition. We sequence our work around licensed abatement contractors and maintain environmental compliance throughout the operation.",
    },
    {
      q: "How do I request a Los Angeles demolition estimate?",
      a: "Contact us with your LA project address, as-built or structural drawings, environmental survey status, and target schedule. We walk the site and respond within one business day with scope assumptions, permit pathway notes, and next steps.",
    },
  ],

  caseStudies: [
    {
      title: "Placeholder — Los Angeles Industrial Yard Demolition",
      location: "Los Angeles, CA · Urban Industrial Redevelopment",
      scope: "Structural takedown and foundation removal on a 32,000 SF industrial yard structure in a dense LA commercial corridor prior to new distribution facility sitework.",
      challenge: "Constrained urban staging, multi-agency permit requirements, and active adjacent tenant operations required phased demolition, restricted haul windows, and daily debris export without community impact violations.",
      result: "Cleared bare pad delivered on schedule for grading mobilization with full recycling documentation and zero dust complaints. Placeholder — final client quote pending.",
      image: demolitionImg,
      isPlaceholder: true,
    },
    {
      title: "Placeholder — LA Warehouse Structural Takedown",
      location: "Los Angeles, CA · Logistics Redevelopment",
      scope: "Full tilt-up warehouse demolition and slab removal on an LA County logistics parcel with dense utility infrastructure beneath the industrial yard.",
      challenge: "Multiple utility layers and undocumented vaults required disconnect verification and sequenced structural takedown before foundation removal could proceed.",
      result: "Phased demolition completed with utility conflicts resolved and bare pad certified for mass grading. Placeholder — case study details coming soon.",
      image: heroImg,
      isPlaceholder: true,
    },
  ],

  landmark: {
    image: landmarkAsset.image,
    alt: landmarkAsset.alt,
    caption: `Commercial demolition serving the ${landmarkAsset.landmark}`,
    label: "Serving Los Angeles, CA",
  },

  media: {
    photos: [
      { src: heroImg, caption: "Placeholder — urban industrial yard demolition, Los Angeles commercial corridor" },
      { src: demolitionImg, caption: "Placeholder — structural takedown on LA logistics redevelopment parcel" },
      { src: demolitionImg, caption: "Placeholder — foundation and slab removal, dense LA utility zone" },
      { src: g2, caption: "Placeholder — phased demo with urban haul route staging" },
      { src: g4, caption: "Placeholder — debris export sequencing near active LA tenant operations" },
    ],
    video: {
      poster: heroImg,
      caption: "Placeholder — Los Angeles commercial demolition site walk",
    },
  },

  tabbedInsights: {
    siteConditions: [
      "Los Angeles commercial parcels commonly include industrial yard structures, tilt-up warehouses, CMU buildings, and legacy utility infrastructure from prior logistics and manufacturing tenants.",
      "Dense urban staging limits equipment placement, debris stockpiling, and truck access on LA redevelopment sites adjacent to active commercial and residential uses.",
      "Multiple utility layers — gas, electric, water, sewer, and private communications — create conflict risk beneath industrial yards on Los Angeles commercial parcels.",
      "Older industrial buildings in LA County frequently require asbestos surveys and environmental review before structural demolition mobilizes.",
    ],
    ourApproach: [
      "Pre-bid inventory of structure type, buried improvements, utility disconnect status, and haul route constraints before demolition scope is priced for LA urban schedules.",
      "Phased industrial yard and structural takedown with daily debris export sized for constrained urban access and adjacent tenant operations.",
      "Multi-agency permit coordination with City of Los Angeles, LA County, and fire department notification mapped during pre-bid.",
      "Water suppression, screened staging, and community impact controls maintained throughout demolition on Los Angeles's heavily enforced commercial corridors.",
    ],
    localPermits: [
      "City of Los Angeles and LA County demolition permits with utility disconnect verification and fire department notification.",
      "Environmental review triggers on older industrial structures with potential asbestos, lead-based materials, or underground storage tanks.",
      "Haul route, truck hour, and traffic control requirements on dense Los Angeles commercial corridors.",
      "Final demolition inspection clearance required before new construction permits and grading mobilization on LA redevelopment parcels.",
    ],
  },
};
