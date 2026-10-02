import serviceExcavation from "@/assets/service-excavation.jpg";
import massExcavationImg from "@/assets/excavation-mass.jpg";
import gradingCommercialPad from "@/assets/grading-commercial-pad.jpg";
import serviceGrading from "@/assets/service-grading.jpg";
import jobsiteElectricalRoomTrench from "@/assets/jobsite-electrical-room-trench.jpg";
import jobsiteAsphaltDemoHaul from "@/assets/jobsite-asphalt-demo-haul.jpg";
import jobsiteLoaderDemoDebris from "@/assets/jobsite-loader-demo-debris.jpg";
import projectTrenchDustControl from "@/assets/project-trench-dust-control.jpg";

export interface Project {
  slug: string;
  title: string;
  location: string;
  county: string;
  projectType: string;
  serviceCategory: string;
  overview: string;
  scope: string;
  challenge: string;
  equipment: string;
  timeline: string;
  solution: string;
  results: string;
  image: string;
  gallery: string[];
  relatedServices: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "quick-quack-car-wash",
    title: "Quick Quack Car Wash — Commercial Site Work",
    location: "Southern California",
    county: "Inland Empire",
    projectType: "Commercial Car Wash Facility",
    serviceCategory: "Grading & Excavation",
    overview:
      "Site-prep earthwork for a Quick Quack Car Wash facility — mass grading, export, compaction, building pad over-excavation, recompaction, and pad certification to deliver a build-ready pad for subsequent vertical construction.",
    scope:
      "Mass grading, export, lot compaction, building pad over-excavation, recompaction, and pad certification.",
    challenge:
      "Rock-heavy site requiring efficient export and disposal logistics. Mendozer's relationships with Robertson and other aggregate processing facilities helped move material off-site efficiently.",
    equipment: "D6 dozer, 330 excavator, Super 10 dump trucks, sheep's foot roller, 5½-yard loader.",
    timeline: "Approximately 45 days.",
    solution:
      "Coordinated export hauling to approved disposal and aggregate processing facilities; sequenced over-excavation, recompaction, and compaction testing to certify the building pad.",
    results:
      "Completed on time with no delays. Approximately 10,000–12,000 cubic yards of material exported. Pad certified for subsequent vertical construction.",
    image: gradingCommercialPad,
    gallery: [gradingCommercialPad, serviceGrading, massExcavationImg],
    relatedServices: ["grading", "excavation"],
  },
  {
    slug: "so-cal-edison",
    title: "Southern California Edison — Utility Site Work",
    location: "Southern California",
    county: "Inland Empire",
    projectType: "Utility / Industrial",
    serviceCategory: "Grading & Excavation",
    overview:
      "Earthwork and pad preparation for a Southern California Edison utility site — mass grading, fine grading, over-excavation, export, pad compaction, and pad certification.",
    scope:
      "Mass grading, fine grading, over-excavation, export (approximately 3,000 CY), pad compaction, and pad certification.",
    challenge:
      "During over-excavation, encountered wet clay with excessive moisture that would not achieve the required 90% compaction despite repeated attempts.",
    equipment: "320 excavator, D6 dozer, water truck, 5½-yard loader.",
    timeline: "3 weeks.",
    solution:
      "Removed unsuitable wet soil, replaced with rock, compacted rock to stabilize the base, then continued replacing and recompacting excavation material on the stabilized foundation.",
    results:
      "90%+ compaction achieved after rock stabilization. Pad certified and turned over inspection-ready.",
    image: massExcavationImg,
    gallery: [massExcavationImg, serviceExcavation, serviceGrading],
    relatedServices: ["grading", "excavation"],
  },
  {
    slug: "commercial-grading-riverside",
    title: "Riverside Apartment Complex — Electrical Infrastructure Earthwork",
    location: "Riverside, CA",
    county: "Riverside County",
    projectType: "Apartment / Utility Trench & Street Restoration",
    serviceCategory: "Grading, Excavation & Asphalt",
    overview:
      "Earthwork to upgrade outdated electrical infrastructure at a Riverside apartment complex — connecting apartment infrastructure to the existing electrical source, with full roadway restoration.",
    scope:
      "Saw cutting, street demolition, approximately 300 ft of street/trench excavation, trenching, grading, backfill, compaction, street restoration, grinding, and asphalt overlay (approximately half the street). Electrical contractor installed conduit; Mendozer backfilled, compacted, and restored the roadway.",
    challenge:
      "Approximately 300 ft of trench through a very busy street with heavy, fast-moving traffic. Required traffic control, worker safety, maintained vehicle access, and daily steel plate coverage so the road could not remain open overnight.",
    equipment: "8K mini excavator, skid steer, dump trucks, skip loader, trench shoring.",
    timeline: "Approximately 2 months across multiple mobilizations and phases.",
    solution:
      "Excavated in sections; covered the open trench with steel plates at the end of each workday for vehicle traffic; reopened and continued excavation the following day until the full run was complete.",
    results:
      "Electrical infrastructure upgraded for the apartment complex. Excavation, backfill, and compaction completed. Roadway restored with grind-and-overlay asphalt.",
    image: jobsiteElectricalRoomTrench,
    gallery: [jobsiteElectricalRoomTrench, jobsiteAsphaltDemoHaul, jobsiteLoaderDemoDebris, projectTrenchDustControl],
    relatedServices: ["grading", "excavation", "paving"],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
