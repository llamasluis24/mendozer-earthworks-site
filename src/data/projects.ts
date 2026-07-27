import excavationImg from "@/assets/service-excavation.jpg";
import pavingImg from "@/assets/service-paving.jpg";
import concreteImg from "@/assets/service-concrete.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

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
    serviceCategory: "Grading, Excavation, Concrete & Asphalt",
    overview:
      "Commercial site work for a Quick Quack Car Wash facility including grading, excavation, concrete flatwork, and asphalt paving to deliver a build-ready pad for tenant improvement and certificate of occupancy.",
    scope:
      "Mass grading, utility trench coordination, slab-on-grade and trench drain flatwork, asphalt parking and drive aisles, and SWPPP compliance across the full horizontal scope.",
    challenge:
      "Fast-track schedule tied to franchise opening date with phased earthwork, concrete, and asphalt sequencing on an active commercial corridor parcel.",
    equipment: "D6 dozer, 330 excavator, articulated haul trucks, smooth drum rollers, concrete pump, asphalt paver.",
    timeline: "Multi-phase sitework program with grading, concrete, and asphalt milestones aligned to franchise opening.",
    solution:
      "Unified superintendent oversight with grading and utility sequencing before concrete and asphalt mobilization. Phased production maintained corridor access while meeting inspection hold points.",
    results:
      "Site turned over build-ready with documented compaction results, completed flatwork, and paved areas inspection-ready ahead of franchise opening. Placeholder — final client metrics pending.",
    image: pavingImg,
    gallery: [pavingImg, concreteImg, g2],
    relatedServices: ["grading", "excavation", "concrete", "paving"],
  },
  {
    slug: "so-cal-edison",
    title: "Southern California Edison — Utility Site Work",
    location: "Southern California",
    county: "Inland Empire",
    projectType: "Utility / Industrial",
    serviceCategory: "Grading, Excavation & Site Prep",
    overview:
      "Commercial earthwork and site preparation for a Southern California Edison utility project requiring graded access roads, excavation for underground infrastructure, and compaction-certified pads.",
    scope:
      "Mass grading, fine grading, utility trench excavation and backfill coordination, aggregate base placement, and SWPPP compliance on a utility-sector commercial parcel.",
    challenge:
      "Utility-dense site with strict agency inspection requirements, environmental compliance, and schedule coordination with SCE engineering and civil contractors.",
    equipment: "D6 dozer, 320 excavator, motor grader with GPS, smooth drum rollers, water trucks for dust suppression.",
    timeline: "Phased grading and excavation program with geotechnical observation and agency inspection hold points.",
    solution:
      "Pre-mobilization review of civil plans, utility routing, and agency requirements. Phased earthwork with documented compaction testing and SWPPP BMP maintenance throughout execution.",
    results:
      "Pad certified and site turned over inspection-ready for subsequent utility and civil contractor mobilization. Placeholder — final client metrics pending.",
    image: excavationImg,
    gallery: [excavationImg, g3, concreteImg],
    relatedServices: ["grading", "excavation", "concrete"],
  },
  {
    slug: "commercial-grading-riverside",
    title: "Commercial Grading Project in Riverside County",
    location: "Riverside, CA",
    county: "Riverside County",
    projectType: "Warehouse Development",
    serviceCategory: "Grading & Excavation",
    overview:
      "A large industrial warehouse development requiring mass excavation, cut/fill balancing, and engineered pad certification before vertical construction mobilization.",
    scope: "Mass excavation, cut/fill, engineered pad prep, compaction, and fine grading for a build-to-suit distribution facility.",
    challenge: "Variable alluvial soils and a tight schedule tied to tenant delivery and vertical construction mobilization.",
    equipment: "D6 dozer, 330 excavator, articulated haul trucks, smooth drum rollers, motor grader with GPS.",
    timeline: "6-week grading phase with phased compaction testing and geotech observation.",
    solution:
      "Phased grading with daily moisture conditioning, GPS-guided fine grade, and direct coordination with the project soils engineer for density testing on every structural lift.",
    results: "Pad certified ahead of schedule with zero re-work. Site turned over ready for footings and underground installation.",
    image: excavationImg,
    gallery: [excavationImg, g2, g3],
    relatedServices: ["grading", "excavation", "concrete"],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
