import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import demolitionImg from "@/assets/service-demolition.jpg";
import { getCityLandmarkAsset } from "@/assets/cities";
import type { ServiceCityPageContent } from "../types";

const landmarkAsset = getCityLandmarkAsset("riverside");

export const demolitionRiverside: ServiceCityPageContent = {
  metaDescription:
    "Licensed commercial demolition in Riverside, CA. Structural takedown, foundation removal, and hazmat-coordinated site clearing for warehouse, retail, and industrial redevelopment across Riverside County.",

  siteVisitItems: [
    "Walk existing warehouse or retail structures and document load-bearing systems, slab thickness, and foundation depth for Riverside redevelopment parcels",
    "Review Phase I/II environmental reports and asbestos survey status before structural demolition is scoped on Riverside County commercial sites",
    "Verify gas, electric, water, sewer, and fire line disconnect documentation with your utility coordinator on active Riverside job sites",
    "Assess haul routes, debris staging, and export logistics for Riverside commercial corridors with SWPPP and dust control requirements",
    "Identify adjacent occupied tenant operations requiring phased demolition access and noise suppression near Riverside retail centers",
    "Deliver itemized demolition estimate with permit assumptions, abatement allowances, and debris export quantities within one business day",
  ],

  evaluationSteps: [
    {
      step: "01",
      title: "Structure & Hazmat Review",
      body: "Assess building construction type, age, and environmental survey status on your Riverside parcel. Flag asbestos, lead, and underground storage tank risks before demolition methods are defined.",
    },
    {
      step: "02",
      title: "Riverside Permit Pathway",
      body: "Confirm demolition permit requirements with Riverside County and city building departments, fire department notification timelines, and inspection hold points for your redevelopment schedule.",
    },
    {
      step: "03",
      title: "Utility Disconnect Verification",
      body: "Document capped gas, electric, water, and sewer services with your GC and utility contractors. Demolition cannot mobilize on Riverside commercial sites until disconnects are verified.",
    },
    {
      step: "04",
      title: "Phasing & Debris Plan",
      body: "Define sequenced work zones, debris staging areas, and daily export routes that maintain SWPPP compliance and protect adjacent commercial operations during Riverside corridor demolition.",
    },
    {
      step: "05",
      title: "Itemized Demo Estimate",
      body: "Provide demolition methods, equipment requirements, abatement coordination allowances, and realistic production schedule tied to your Riverside grading mobilization date.",
    },
  ],

  localBenefits: [
    {
      title: "Riverside County Permit Familiarity",
      body: "Experience coordinating demolition permits, fire department notification, and final inspection clearance with Riverside County agencies on commercial redevelopment projects.",
    },
    {
      title: "Warehouse & Retail Demo Capacity",
      body: "High-reach excavators and production rates sized for large-format distribution and retail structure takedown across Riverside logistics corridors.",
    },
    {
      title: "SWPPP-Compliant Job Sites",
      body: "Dust suppression, debris containment, and erosion controls maintained throughout demolition on Riverside sites subject to seasonal rain and aggressive BMP enforcement.",
    },
    {
      title: "Bare-Pad Handoff for Grading",
      body: "Foundation and slab removal completed to subgrade with export documentation — ready for mass excavation and pad certification without buried concrete conflicts.",
    },
  ],

  serviceIssues: [
    {
      title: "Pre-1980 Warehouse Asbestos Risk",
      body: "Older distribution and industrial buildings along Riverside logistics corridors commonly contain asbestos in roofing, flooring, and MEP systems. Demolition scoped without abatement clearance triggers Cal/OSHA and county stop-work orders.",
    },
    {
      title: "Buried Slabs on Redevelopment Parcels",
      body: "Riverside retail center redevelopments often hide multiple slab layers and undocumented footings from prior tenant improvements. Partial demo leaves concrete that conflicts with new civil grades and utility trenches.",
    },
    {
      title: "Rain-Season SWPPP Holds",
      body: "Riverside County enforces BMP compliance during seasonal storms. Demolition debris staging without proper containment halts sitework until erosion control is restored — delaying grading mobilization.",
    },
    {
      title: "Occupied Retail Adjacency",
      body: "Demolition on Riverside commercial parcels near active big-box and strip retail requires phased takedown, after-hours work windows, and dust control that must be planned during pre-bid — not after tenant complaints.",
    },
  ],

  faqs: [
    {
      q: "Do you handle commercial demolition in Riverside, CA?",
      a: "Yes. Mendozer x Earthworks is a licensed commercial demolition contractor serving developers, GCs, and property owners in Riverside and Riverside County. We self-perform structural takedown, foundation removal, and site clearing on warehouse, retail, and industrial redevelopment projects.",
    },
    {
      q: "What demolition projects do you take on in Riverside?",
      a: "We demolish warehouses, distribution centers, retail centers, industrial facilities, and municipal structures on Riverside redevelopment parcels — including tenant improvement selective demo, full structural takedown, and foundation removal before grading mobilization.",
    },
    {
      q: "How do Riverside County demolition permits work?",
      a: "Most Riverside commercial demolitions require a county or city demolition permit, utility disconnect verification, fire department notification, and sometimes environmental review. We map permit pathways and inspection hold points during the pre-bid walk so your GC schedule reflects realistic approval timelines.",
    },
    {
      q: "Do you coordinate asbestos abatement on Riverside warehouse demos?",
      a: "We sequence demolition around licensed abatement contractors. We do not self-perform abatement, but we coordinate containment access, clearance documentation, and structural demo mobilization after abatement sign-off on Riverside industrial buildings.",
    },
    {
      q: "Can you phase demolition near occupied Riverside retail tenants?",
      a: "Yes. We execute phased demolition on partially occupied commercial properties with controlled access zones, water suppression, debris screening, and work-hour compliance that protects adjacent tenant operations along Riverside retail corridors.",
    },
    {
      q: "Do you remove foundations and slabs in Riverside?",
      a: "Yes. Foundation, footing, and slab-on-grade removal is standard on Riverside commercial demolition scopes. We break, remove, and export concrete to deliver a bare pad ready for mass excavation and geotech-coordinated compaction.",
    },
    {
      q: "How do you manage debris export from Riverside commercial sites?",
      a: "We segregate concrete, steel, and mixed debris, haul to certified recycling and disposal facilities, and provide daily export logs for project compliance. Haul routes and staging are planned during pre-bid to avoid conflicts with Riverside corridor traffic and SWPPP requirements.",
    },
    {
      q: "What is the typical timeline for Riverside industrial demolition?",
      a: "Duration depends on structure size, hazmat requirements, foundation depth, and permit status. A single-story warehouse takedown with foundation removal typically runs two to four weeks after permit approval — we provide site-specific schedules during the estimate phase.",
    },
    {
      q: "Who hires you for demolition in Riverside?",
      a: "Commercial developers, general contractors, municipalities, industrial property owners, and commercial asset managers building or redeveloping in Riverside, CA and throughout the Inland Empire.",
    },
  ],

  caseStudies: [
    {
      title: "Placeholder — Riverside Warehouse Structural Demolition",
      location: "Riverside, CA · Industrial Redevelopment",
      scope: "Full structural takedown, foundation removal, and site clearing on a 45,000 SF warehouse prior to mass grading on a build-to-suit distribution pad.",
      challenge: "Asbestos-containing roofing materials and an occupied retail pad adjacent to the demo zone required phased takedown and aggressive dust suppression during Riverside County rain season.",
      result: "Bare pad delivered ahead of grading mobilization with recycling documentation and zero debris backlog blocking earthwork access. Placeholder — final client metrics pending.",
      image: demolitionImg,
      isPlaceholder: true,
    },
    {
      title: "Placeholder — Riverside Retail Center Selective Demo",
      location: "Riverside, CA · Commercial Redevelopment",
      scope: "Selective interior and structural demolition on a strip retail center being repositioned for new commercial tenants.",
      challenge: "Active restaurant and service tenants remained operational during phased demolition along a high-traffic Riverside corridor.",
      result: "Phased takedown completed without tenant shutdowns. Foundation conflicts identified and removed before civil regrading. Placeholder — case study details coming soon.",
      image: g3,
      isPlaceholder: true,
    },
  ],

  landmark: {
    image: landmarkAsset.image,
    alt: landmarkAsset.alt,
    caption: `Serving commercial demolition projects near ${landmarkAsset.landmark}`,
    label: "Serving Riverside, CA",
  },

  media: {
    photos: [
      { src: demolitionImg, caption: "Placeholder — structural demolition on Riverside industrial parcel" },
      { src: g2, caption: "Placeholder — foundation and slab removal, Riverside County" },
      { src: g3, caption: "Placeholder — debris segregation and export staging" },
      { src: g4, caption: "Placeholder — phased demo near occupied Riverside retail" },
    ],
    video: {
      poster: g2,
      caption: "Placeholder — Riverside commercial demolition site walk",
    },
  },

  tabbedInsights: {
    siteConditions: [
      "Riverside redevelopment parcels commonly include CMU warehouse construction, slab-on-grade foundations, and undocumented tenant improvement slabs from prior retail occupants.",
      "Alluvial soils exposed after foundation removal may require over-excavation coordination with your geotechnical engineer before grading begins.",
      "Older industrial buildings along Riverside logistics corridors frequently require asbestos and lead surveys before structural demolition mobilizes.",
      "Adjacent occupied retail and industrial operations constrain haul routes, work hours, and debris staging on corridor redevelopment sites.",
    ],
    ourApproach: [
      "Pre-bid structure walk with hazmat flag review and utility disconnect status documentation before demolition methods are priced.",
      "Sequenced abatement clearance, structural takedown, foundation removal, and site sweep aligned with your grading mobilization milestone.",
      "Daily debris export with concrete and steel segregation to certified Riverside County recycling and disposal facilities.",
      "SWPPP-compliant dust suppression and BMP maintenance throughout demolition — especially during Riverside rain season.",
    ],
    localPermits: [
      "Riverside County and city demolition permits with utility disconnect verification and fire department notification.",
      "Cal/OSHA compliance documentation for commercial structural demolition operations.",
      "SWPPP and stormwater BMP requirements for debris staging and export on Riverside commercial parcels.",
      "Final demolition inspection clearance required before new building permit issuance and vertical construction mobilization.",
    ],
  },
};
