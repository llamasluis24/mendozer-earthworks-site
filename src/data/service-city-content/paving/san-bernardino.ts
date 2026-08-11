import g2 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-4.jpg";
import aboutImg from "@/assets/about-daytime.jpg";
import heroImg from "@/assets/hero-bulldozer.jpg";
import pavingImg from "@/assets/service-paving.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import { getCityLandmarkAsset } from "@/assets/cities";
import type { ServiceCityPageContent } from "../types";

const landmarkAsset = getCityLandmarkAsset("san-bernardino");

export const pavingSanBernardino: ServiceCityPageContent = {
  metaDescription:
    "Commercial asphalt paving in San Bernardino, CA. Industrial yard overlays, municipal paving programs, large-lot reconstruction, and mill-and-overlay for older pavement failure on Inland Empire commercial and industrial properties.",

  siteVisitItems: [
    {
      title: "Pre-Bid Site Walk",
      lead:
        "Walk existing San Bernardino industrial yard pavement and document rutting, alligator cracking, reflective failure, and remaining structural capacity for overlay vs. full-depth reconstruction.",
      checkpoints: [
        "Walk existing San Bernardino industrial yard pavement and document rutting.",
        "Alligator cracking.",
        "Reflective failure.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Plan & Document Review",
      lead:
        "Review civil paving plans, heavy-load section details, and aggregate base specifications for large-lot commercial and municipal parking reconstruction on San Bernardino redevelopment parcels.",
      checkpoints: [
        "Review civil paving plans.",
        "Heavy-load section details.",
        "Aggregate base specifications for large-lot commercial and municipal parking reconstruction on San Bernardino redevelopment parcels.",
      ],
      fieldNote:
        "Early plan and document review keeps bid assumptions aligned with engineer-approved civil quantities before contract award.",
    },
    {
      title: "Field Conditions Assessment",
      lead:
        "Assess subgrade conditions, drainage flow lines, and catch basin tie-ins on older San Bernardino pavement where decades of truck traffic and deferred maintenance accelerated structural failure.",
      checkpoints: [
        "Assess subgrade conditions.",
        "Drainage flow lines.",
        "Catch basin tie-ins on older San Bernardino pavement where decades of truck traffic and deferred maintenance accelerated structural failure.",
      ],
      fieldNote:
        "Field assessment during the pre-bid walk surfaces constraints that affect production, haul logistics, and inspection sequencing.",
    },
    {
      title: "Specification Verification",
      lead:
        "Confirm City of San Bernardino paving permit pathway, compaction testing requirements, and municipal inspection hold points for public improvement and agency-funded commercial projects.",
      checkpoints: [
        "Confirm City of San Bernardino paving permit pathway.",
        "Compaction testing requirements.",
        "Municipal inspection hold points for public improvement and agency-funded commercial projects.",
      ],
      fieldNote:
        "Verified specifications before mobilization protect compaction acceptance, drainage performance, and agency sign-off.",
    },
    {
      title: "Inspection & Schedule Mapping",
      lead:
        "Map haul routes, staging areas, and phased traffic control for large-lot paving on expansive San Bernardino industrial properties where full-lot closure is not feasible during active operations.",
      checkpoints: [
        "Map haul routes.",
        "Staging areas.",
        "Phased traffic control for large-lot paving on expansive San Bernardino industrial properties where full-lot closure is not feasible during active operations.",
      ],
      fieldNote:
        "Mapped inspection windows and hold points keep sitework sequenced with your GC master schedule and vertical mobilization.",
    },
    {
      title: "Itemized Bid Delivery",
      lead:
        "Deliver itemized paving bid with overlay tonnage, reconstruction quantities, base course assumptions, and production rates tied to San Bernardino municipal and industrial redevelopment schedules.",
      checkpoints: [
        "Deliver itemized paving bid with overlay tonnage.",
        "Reconstruction quantities.",
        "Base course assumptions.",
      ],
      fieldNote:
        "Itemized assumptions documented in the bid package protect schedule, budget, and both parties at award.",
    },
  ],

  evaluationSteps: [
    {
      step: "01",
      title: "Older Pavement Failure Assessment",
      body: "Core existing San Bernardino industrial yard pavement, map crack patterns, base course distress, and drainage ponding to determine whether mill-and-overlay, full-depth patching, or large-lot reconstruction is required before asphalt mobilization is priced.",
    },
    {
      step: "02",
      title: "Industrial Yard Overlay Scope",
      body: "Confirm milling depth, crack-seal treatment, tack coat requirements, and heavy-duty lift thickness for San Bernardino truck courts and loading yards where commercial vehicle loads exceed standard parking stall specifications.",
    },
    {
      step: "03",
      title: "Large-Lot Reconstruction Planning",
      body: "Define subgrade remediation, aggregate base tonnage, phased paving zones, and daily production rates for expansive San Bernardino commercial lots where full-depth reconstruction cannot close the entire property at once.",
    },
    {
      step: "04",
      title: "San Bernardino Permit Coordination",
      body: "Confirm City of San Bernardino paving permit requirements, municipal inspection sequencing, compaction density testing, and thickness verification hold points before certificate of occupancy or project closeout milestones.",
    },
    {
      step: "05",
      title: "Municipal & Industrial Estimate",
      body: "Itemized bid with overlay vs. reconstruction assumptions, base course quantities, traffic phasing allowances, QC documentation, and realistic paving windows tied to your San Bernardino municipal improvement or industrial redevelopment schedule.",
    },
  ],

  localBenefits: [
    {
      title: "Industrial Yard Overlay Programs",
      body: "Mill-and-overlay and heavy-duty resurfacing sized for San Bernardino truck courts, loading yards, and distribution aprons where commercial vehicle traffic demands thicker pavement sections than standard retail parking.",
    },
    {
      title: "Municipal Paving Coordination",
      body: "Paving production and inspection documentation aligned with City of San Bernardino municipal improvement standards, agency hold points, and public works closeout requirements on commercial corridor projects.",
    },
    {
      title: "Large-Lot Reconstruction Capacity",
      body: "Full-depth pavement reconstruction on expansive San Bernardino industrial parcels with phased traffic control, base course placement, and multi-lift asphalt production sized for multi-acre commercial lots.",
    },
    {
      title: "Older Pavement Failure Remediation",
      body: "Targeted reconstruction of failed base courses, drainage corrections, and structural patching on aging San Bernardino commercial pavement where deferred maintenance produced rutting, ponding, and alligator cracking.",
    },
  ],

  serviceIssues: [
    {
      title: "Industrial Yard Overlay on Failed Base",
      body: "San Bernardino industrial yards with decades of truck loading often hide base course failure beneath surface cracks. Overlay scoped without milling depth analysis and proof-rolling transfers rutting and reflective cracking into the new asphalt within the first maintenance cycle.",
    },
    {
      title: "Municipal Inspection Documentation Gaps",
      body: "City of San Bernardino municipal paving projects require compaction density records, thickness verification, and drainage sign-off before final acceptance. Paving bids that omit QC documentation and inspection coordination trigger rework holds on agency-funded improvements.",
    },
    {
      title: "Large-Lot Reconstruction Bottlenecks",
      body: "Multi-acre San Bernardino commercial lots require phased paving, base course import logistics, and sequenced traffic control. Full-lot reconstruction priced without phasing assumptions overwhelms staging areas and blocks tenant access on active industrial properties.",
    },
    {
      title: "Older Pavement Drainage Failure",
      body: "Aging San Bernardino commercial pavement with settled catch basins, reversed cross-slopes, and bird-bath ponding fails ADA and fire lane compliance after overlay. Resurfacing without drainage correction reproduces standing water and accelerates new pavement deterioration.",
    },
  ],

  faqs: [
    {
      q: "Do you provide commercial asphalt paving in San Bernardino, CA?",
      a: "Yes. Mendozer X Earthworks Inc. (Lic. #1069854) self-performs commercial asphalt paving, mill-and-overlay, full-depth reconstruction, and aggregate base installation on industrial yards, municipal improvements, and large-lot commercial properties in San Bernardino and the Inland Empire.",
    },
    {
      q: "Can you overlay aging San Bernardino industrial yard pavement?",
      a: "Yes. We assess existing pavement structure, milling depth, crack treatment, and heavy-load section requirements on San Bernardino truck courts and loading yards. Overlay scope is priced only where base course integrity supports resurfacing — otherwise we recommend full-depth reconstruction.",
    },
    {
      q: "Do you handle municipal paving projects in San Bernardino?",
      a: "Yes. We coordinate City of San Bernardino paving permits, compaction density testing, thickness verification, and municipal inspection hold points on commercial corridor improvements and agency-funded parking reconstruction projects.",
    },
    {
      q: "How do you approach large-lot pavement reconstruction in San Bernardino?",
      a: "We phase full-depth reconstruction across multi-acre San Bernardino commercial lots with sequenced base course placement, multi-lift asphalt production, and traffic control that maintains partial lot access during active industrial operations.",
    },
    {
      q: "What causes older pavement failure on San Bernardino commercial lots?",
      a: "Decades of truck loading, inadequate base compaction, deferred crack sealing, and drainage settlement produce rutting, alligator cracking, and ponding on aging San Bernardino industrial pavement. We evaluate structural capacity during pre-bid to determine overlay, patching, or reconstruction.",
    },
    {
      q: "Do you install heavy-duty pavement in San Bernardino truck courts?",
      a: "Yes. Truck courts, loading aprons, and dumpster enclosures on San Bernardino industrial properties receive thicker asphalt sections and reinforced base courses per civil plan specifications for commercial vehicle loads and high-frequency turning movements.",
    },
    {
      q: "How do you manage drainage on San Bernardino parking lot reconstruction?",
      a: "We verify civil plan cross-slopes, flow lines, and catch basin tie-ins before final asphalt placement on San Bernardino commercial lots. Positive drainage is confirmed during base course grading — not corrected after overlay when ponding already compromised the old pavement.",
    },
    {
      q: "Do you perform core testing and compaction QC on San Bernardino paving?",
      a: "Yes. Density testing, thickness verification, and QC documentation are standard on San Bernardino municipal and commercial paving scopes. We coordinate inspection hold points with City of San Bernardino building officials and your GC quality control requirements.",
    },
    {
      q: "Can you phase paving on active San Bernardino industrial properties?",
      a: "Yes. We routinely phase mill-and-overlay and reconstruction on occupied San Bernardino industrial yards with traffic control plans, partial lot closures, and sequenced work zones that maintain truck access and tenant operations during paving production.",
    },
    {
      q: "How do I request a San Bernardino commercial paving estimate?",
      a: "Contact us with your San Bernardino project address, civil paving plans, existing pavement condition notes, and target completion date. We walk the lot and respond within one business day with overlay vs. reconstruction assumptions and phasing recommendations.",
    },
  ],

  caseStudies: [
    {
      title: "Placeholder — San Bernardino Industrial Yard Overlay",
      location: "San Bernardino, CA · Distribution Center Truck Court",
      scope: "Mill-and-overlay resurfacing of a 1.8-acre industrial yard and truck court on a San Bernardino logistics property where decades of container traffic produced rutting and reflective cracking across the loading apron.",
      challenge: "Heavy-load pavement sections required deeper milling and thicker asphalt lifts while adjacent cross-dock operations remained active and could not tolerate full-lot closure during weekday production.",
      result: "Phased overlay completed with density testing sign-off and restored ride quality in truck courts without disrupting delivery schedules. Placeholder — final client metrics pending.",
      image: pavingImg,
      isPlaceholder: true,
    },
    {
      title: "Placeholder — San Bernardino Municipal Lot Reconstruction",
      location: "San Bernardino, CA · Municipal Commercial Corridor",
      scope: "Full-depth pavement reconstruction on a large-format municipal parking improvement along a San Bernardino commercial corridor, including base course replacement and drainage correction on older failed pavement.",
      challenge: "Settled catch basins and reversed cross-slopes on aging pavement required subgrade remediation and phased reconstruction while maintaining fire lane and ADA route access through the municipal improvement schedule.",
      result: "Large-lot reconstruction passed City of San Bernardino inspection with positive drainage verified and QC documentation delivered for municipal closeout. Placeholder — case study details coming soon.",
      image: heroImg,
      isPlaceholder: true,
    },
  ],

  landmark: {
    image: landmarkAsset.image,
    alt: landmarkAsset.alt,
    caption: `Commercial asphalt paving serving the ${landmarkAsset.landmark}`,
    label: "Serving San Bernardino, CA",
  },

  media: {
    photos: [
      { src: pavingImg, caption: "Placeholder — industrial yard mill-and-overlay on San Bernardino logistics property" },
      { src: g2, caption: "Placeholder — municipal parking lot reconstruction, San Bernardino commercial corridor" },
      { src: heroImg, caption: "Placeholder — large-lot full-depth pavement reconstruction on Inland Empire industrial parcel" },
      { src: aboutImg, caption: "Placeholder — older pavement failure remediation and drainage correction, San Bernardino" },
    ],
    video: {
      poster: g4,
      caption: "Placeholder — San Bernardino commercial asphalt paving site walk",
    },
  },

  tabbedInsights: {
    siteConditions: [
      "San Bernardino industrial yards and distribution aprons commonly carry decades of truck loading that produces rutting, base course failure, and reflective cracking beyond what standard overlay can remediate.",
      "Large-lot commercial and municipal parking reconstruction on San Bernardino redevelopment parcels requires phased paving across multi-acre sites where full-lot closure disrupts active industrial operations.",
      "Older San Bernardino pavement frequently exhibits settled drainage structures, reversed cross-slopes, and ponding that accelerate asphalt deterioration and trigger ADA compliance issues after resurfacing.",
      "Municipal paving improvements along San Bernardino commercial corridors require agency inspection documentation, compaction QC, and thickness verification before public works closeout.",
    ],
    ourApproach: [
      "Pre-bid pavement assessment with crack mapping, milling depth analysis, and proof-rolling before overlay vs. reconstruction scope is priced for San Bernardino industrial schedules.",
      "Heavy-duty asphalt sections and reinforced base courses in truck courts, loading aprons, and dumpster enclosures sized for commercial vehicle loads on San Bernardino logistics properties.",
      "Phased large-lot reconstruction with sequenced base course placement, multi-lift asphalt production, and traffic control that maintains partial access on active industrial yards.",
      "Drainage correction, catch basin tie-in verification, and positive slope confirmation before final compaction on San Bernardino commercial lots with older pavement failure.",
    ],
    localPermits: [
      "City of San Bernardino paving permit with compaction density testing and thickness verification requirements on commercial and municipal improvement projects.",
      "Municipal inspection hold points and QC documentation standards for agency-funded parking reconstruction along San Bernardino commercial corridors.",
      "Traffic control and phased paving plans for large-lot reconstruction on active San Bernardino industrial properties with ongoing truck operations.",
      "Final paving inspection and drainage sign-off required before striping, certificate of occupancy, or municipal project closeout on San Bernardino commercial sites.",
    ],
  },
};
