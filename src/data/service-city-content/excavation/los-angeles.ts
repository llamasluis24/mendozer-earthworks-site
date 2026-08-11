import g1 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-3.jpg";
import aboutImg from "@/assets/about-daytime.jpg";
import heroImg from "@/assets/hero-bulldozer.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import pavingImg from "@/assets/service-paving.jpg";
import { getCityLandmarkAsset } from "@/assets/cities";
import type { ServiceCityPageContent } from "../types";

const landmarkAsset = getCityLandmarkAsset("los-angeles");

export const excavationLosAngeles: ServiceCityPageContent = {
  metaDescription:
    "Commercial excavation in Los Angeles, CA. Urban haul route planning, multi-agency permit coordination, utility-dense mass excavation, and GPS excavation sequencing with community impact controls across LA County.",

  siteVisitItems: [
    {
      title: "Plan & Document Review",
      lead:
        "Review civil grading plans, cut/fill quantities, and finished floor elevations against geotechnical recommendations on Los Angeles commercial redevelopment parcels.",
      checkpoints: [
        "Review civil grading plans.",
        "Cut/fill quantities.",
        "Finished floor elevations against geotechnical recommendations on Los Angeles commercial redevelopment parcels.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Inspection & Schedule Mapping",
      lead:
        "Map urban haul routes, articulated truck staging, and traffic control requirements for dense LA commercial corridors before mass excavation mobilizes.",
      checkpoints: [
        "Map urban haul routes.",
        "Articulated truck staging.",
        "Traffic control requirements for dense LA commercial corridors before mass excavation mobilizes.",
      ],
      fieldNote:
        "Mapped inspection windows and hold points keep sitework sequenced with your GC master schedule and vertical mobilization.",
    },
    {
      title: "Specification Verification",
      lead:
        "Confirm grading permit pathway across City of Los Angeles, LA County, and applicable agency inspection requirements for your redevelopment timeline.",
      checkpoints: [
        "Confirm grading permit pathway across City of Los Angeles.",
        "Cross-check observations against civil plans, geotechnical data, and project specifications.",
        "Flag constraints affecting production, haul logistics, SWPPP compliance, or inspection hold points.",
      ],
      fieldNote:
        "Verified specifications before mobilization protect compaction acceptance, drainage performance, and agency sign-off.",
    },
    {
      title: "Scope Documentation",
      lead:
        "Document wet and dry utility locations, easements, and trench sequencing for utility-dense excavation on active Los Angeles commercial sites.",
      checkpoints: [
        "Document wet and dry utility locations.",
        "Cross-check observations against civil plans, geotechnical data, and project specifications.",
        "Flag constraints affecting production, haul logistics, SWPPP compliance, or inspection hold points.",
      ],
      fieldNote:
        "Documented field conditions support realistic production rates and defensible preconstruction numbers.",
    },
    {
      title: "Field Conditions Assessment",
      lead:
        "Assess dust, noise, track-out, and community impact controls required near occupied tenants and residential adjacency during phased LA grading.",
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
        "Deliver itemized excavation bid with production rates, import/export assumptions, and permit hold points tied to your LA vertical mobilization date.",
      checkpoints: [
        "Deliver itemized excavation bid with production rates.",
        "Import/export assumptions.",
        "Permit hold points tied to your LA vertical mobilization date.",
      ],
      fieldNote:
        "Itemized assumptions documented in the bid package protect schedule, budget, and both parties at award.",
    },
  ],

  evaluationSteps: [
    {
      step: "01",
      title: "Urban Site & Soils Assessment",
      body: "Walk your Los Angeles parcel with civil and geotech plans. Document existing grades, undocumented fill, rock zones, and buried improvements that expand mass excavation scope on urban industrial redevelopment sites.",
    },
    {
      step: "02",
      title: "Multi-Agency Permit Mapping",
      body: "Confirm City of Los Angeles, LA County, and applicable agency grading permit requirements, SWPPP triggers, fire department notification, and inspection sequencing before earthwork is priced.",
    },
    {
      step: "03",
      title: "Urban Haul Route & Staging Plan",
      body: "Define equipment mobilization, import/export truck routes, haul road access, and staging areas that minimize community impact on Los Angeles's dense urban commercial corridors.",
    },
    {
      step: "04",
      title: "Utility-Dense Excavation Sequencing",
      body: "Map dense utility layers — gas, electric, water, sewer, and private communications — and coordinate trench excavation with wet and dry underground contractors before mass cut proceeds.",
    },
    {
      step: "05",
      title: "Scope & Production Estimate",
      body: "Itemized bid with cut/fill quantities, compaction specifications, excavation depths and trenching scope, import/export logistics, and realistic production rates for constrained Los Angeles commercial parcels.",
    },
  ],

  localBenefits: [
    {
      title: "LA Urban Earthwork Experience",
      body: "Mass excavation and utility trenching production sized for dense Los Angeles commercial corridors with haul route planning and phased access that protects GC vertical schedules.",
    },
    {
      title: "Multi-Agency Permit Coordination",
      body: "Experience navigating City of Los Angeles, LA County, and fire department grading permit pathways on commercial redevelopment projects across LA County jurisdictions.",
    },
    {
      title: "Utility-Dense Excavation Coordination",
      body: "Trench and mass excavation sequenced around dense wet and dry utility infrastructure common on Los Angeles industrial yard and logistics redevelopment parcels.",
    },
    {
      title: "Community Impact Controls",
      body: "Water suppression, track-out prevention, screened staging, and compliant work-hour windows maintained throughout grading on Los Angeles's heavily enforced urban commercial corridors.",
    },
  ],

  serviceIssues: [
    {
      title: "Urban Haul Route & Staging Limits",
      body: "Los Angeles commercial grading sites cannot absorb unplanned articulated truck traffic or export stockpiles without community complaints and agency intervention. Earthwork scoped without haul route analysis and daily import/export sequencing blocks site access and halts vertical construction mobilization.",
    },
    {
      title: "Multi-Agency Permit Fragmentation",
      body: "LA County and city-specific grading permit requirements vary by jurisdiction, cut/fill volume, and environmental triggers. Late permit clarity or missed SWPPP compliance collapses the schedule buffer before excavation sequencing and foundation layout.",
    },
    {
      title: "Utility-Dense Excavation Conflicts",
      body: "Los Angeles redevelopment parcels carry multiple wet and dry utility systems, private communications infrastructure, and undocumented vaults beneath industrial yards. Mass excavation that proceeds before utility mapping and trench sequencing triggers stop-work orders and costly repair scopes.",
    },
    {
      title: "Community Impact Enforcement",
      body: "Dust, noise, and track-out violations on LA commercial corridors face rapid municipal response. Grading without water suppression, wheel wash stations, and after-hours work compliance triggers complaints from adjacent tenants and residential neighbors.",
    },
  ],

  faqs: [
    {
      q: "Do you provide commercial excavation in Los Angeles, CA?",
      a: "Yes. Mendozer X Earthworks Inc. (Lic. #1069854) self-performs mass excavation, utility trenching, soil compaction, and engineered pad prep for developers, GCs, and industrial property owners on Los Angeles commercial redevelopment parcels.",
    },
    {
      q: "How do you manage urban haul routes on dense LA commercial sites?",
      a: "We plan articulated truck routes, daily import/export volumes, and material staging during pre-bid walks. Urban haul route analysis and traffic coordination prevent stockpiles from blocking site access and minimize community impact on Los Angeles commercial corridors.",
    },
    {
      q: "Which agencies issue grading permits in Los Angeles?",
      a: "Permit jurisdiction depends on project location and cut/fill scope. City of Los Angeles, LA County, and applicable fire departments each have grading permit, SWPPP, and inspection requirements. We map the correct pathway and hold points during the pre-bid walk.",
    },
    {
      q: "Can you excavate around dense utility infrastructure in Los Angeles?",
      a: "Yes. We coordinate utility-dense trench excavation and mass cut with wet and dry underground contractors on LA industrial yard and logistics parcels. Pre-bid utility mapping identifies gas, electric, water, sewer, and private communications conflicts before earthwork mobilizes.",
    },
    {
      q: "Do you perform GPS and laser-guided utility trenching in Los Angeles?",
      a: "Yes. Our late-model dozers and motor graders execute GPS and laser-guided utility trenching to civil plan tolerances on Los Angeles commercial building pads, parking areas, and access roads.",
    },
    {
      q: "What community impact controls apply to LA commercial grading?",
      a: "Los Angeles commercial corridors require water suppression, wheel wash stations, track-out prevention, dust and noise management, and compliant work-hour windows. We maintain SWPPP BMPs and after-hours permit compliance throughout grading on urban LA sites.",
    },
    {
      q: "Can you phase excavation on partially operational Los Angeles commercial sites?",
      a: "Yes. We execute phased mass excavation and utility trenching on active commercial properties with sequenced work zones, dust mitigation, and haul routing that preserves adjacent tenant access and distribution traffic flow.",
    },
    {
      q: "How do you handle unexpected soils during LA mass excavation?",
      a: "We notify the GC and geotechnical engineer immediately when rock, high-plasticity clay, or unsuitable fill is encountered. Over-excavation, structural fill import, or export plans are documented with revised quantities before production resumes.",
    },
    {
      q: "Do you coordinate excavation sequencing with soils engineers in Los Angeles?",
      a: "Yes. We coordinate compaction testing, proof-rolling observation, and pad turnover documentation with your geotechnical engineer and city inspectors to deliver certified subgrade ready for foundation layout.",
    },
    {
      q: "How do I request a Los Angeles excavation estimate?",
      a: "Contact us with your LA project address, civil and geotechnical plans, environmental survey status, and target vertical mobilization date. We walk the site and respond within one business day with scope assumptions, permit pathway notes, and production rates.",
    },
  ],

  caseStudies: [
    {
      title: "Placeholder — Los Angeles Urban Warehouse Cut/Fill",
      location: "Los Angeles, CA · Urban Industrial Redevelopment",
      scope: "Mass excavation, structural fill placement, compaction, and GPS utility trenching on a 2.8-acre distribution facility pad in a dense LA commercial corridor prior to foundation mobilization.",
      challenge: "Constrained urban staging, multi-agency permit requirements, and utility-dense trench sequencing required phased earthwork, restricted haul windows, and daily import/export without community impact violations.",
      result: "Certified building pad delivered on schedule for foundation layout with full compaction documentation and zero dust complaints. Placeholder — final client quote pending.",
      image: excavationImg,
      isPlaceholder: true,
    },
    {
      title: "Placeholder — LA Utility-Dense Industrial Yard Grading",
      location: "Los Angeles, CA · Logistics Redevelopment",
      scope: "Cut/fill balancing, utility trench excavation, and utility trenching on an LA County logistics parcel with dense wet and dry infrastructure beneath the industrial yard.",
      challenge: "Multiple utility layers and undocumented vaults required trench sequencing and controlled mass cut before pad compaction and GPS finish grading could proceed.",
      result: "Phased earthwork completed with utility conflicts resolved and pad certified for vertical construction. Placeholder — case study details coming soon.",
      image: heroImg,
      isPlaceholder: true,
    },
  ],

  landmark: {
    image: landmarkAsset.image,
    alt: landmarkAsset.alt,
    caption: `Commercial excavation serving the ${landmarkAsset.landmark}`,
    label: "Serving Los Angeles, CA",
  },

  media: {
    photos: [
      { src: excavationImg, caption: "Placeholder — mass excavation on Los Angeles urban industrial redevelopment parcel" },
      { src: pavingImg, caption: "Placeholder — GPS utility trenching on LA commercial building pad" },
      { src: g1, caption: "Placeholder — articulated haul truck staging on dense LA commercial corridor" },
      { src: aboutImg, caption: "Placeholder — utility trench excavation in utility-dense LA industrial yard" },
      { src: g3, caption: "Placeholder — compaction and proof-rolling on Los Angeles logistics pad" },
      { src: heroImg, caption: "Placeholder — phased earthwork with community impact controls, Los Angeles" },
    ],
    video: {
      poster: excavationImg,
      caption: "Placeholder — Los Angeles commercial excavation site walk",
    },
  },

  tabbedInsights: {
    siteConditions: [
      "Los Angeles commercial parcels commonly include industrial yard redevelopment sites with undocumented fill, legacy slab remnants, and dense wet and dry utility infrastructure from prior logistics tenants.",
      "Urban staging limits equipment placement, import/export stockpiling, and articulated truck access on LA redevelopment sites adjacent to active commercial and residential uses.",
      "Multiple utility layers — gas, electric, water, sewer, and private communications — create trench and mass excavation conflict risk beneath industrial yards on Los Angeles commercial parcels.",
      "Alluvial and variable soils exposed during mass cut may require over-excavation, structural fill import, and geotech-coordinated remediation before excavation sequencing on LA County sites.",
    ],
    ourApproach: [
      "Pre-bid review of civil quantities, buried improvements, utility locations, haul route constraints, and SWPPP requirements before excavation scope is priced for LA urban schedules.",
      "Phased mass excavation with daily import/export sized for constrained urban access, utility trench sequencing, and adjacent tenant operations.",
      "Multi-agency permit coordination with City of Los Angeles, LA County, and fire department notification mapped during pre-bid.",
      "GPS utility trenching, moisture-conditioned compaction, and community impact controls maintained throughout earthwork on Los Angeles's heavily enforced commercial corridors.",
    ],
    localPermits: [
      "City of Los Angeles and LA County grading permits with SWPPP compliance, utility coordination, and fire department notification where required.",
      "Haul route, truck hour, and traffic control requirements on dense Los Angeles commercial corridors.",
      "Compaction testing and excavation sequencing inspection hold points coordinated with geotechnical engineer and city building officials.",
      "Final grading inspection clearance required before foundation permits and vertical construction mobilization on LA redevelopment parcels.",
    ],
  },
};
