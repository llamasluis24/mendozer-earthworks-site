import heroImg from "@/assets/hero-bulldozer.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import massExcavationImg from "@/assets/excavation-mass.jpg";
import utilityTrenchingImg from "@/assets/excavation-utility-trenching.jpg";
import importExportImg from "@/assets/excavation-import-export.jpg";
import recompactionImg from "@/assets/excavation-recompaction.jpg";
import demolitionImg from "@/assets/service-demolition.jpg";
import demolitionAsphaltRemoval from "@/assets/demolition-asphalt-removal.jpg";
import demolitionConcreteRemoval from "@/assets/demolition-concrete-removal.jpg";
import demolitionDebrisHauling from "@/assets/demolition-debris-hauling.jpg";
import serviceGradingImg from "@/assets/service-grading.jpg";
import gradingCommercialPad from "@/assets/grading-commercial-pad.jpg";
import pavingImg from "@/assets/service-paving.jpg";
import aboutImg from "@/assets/about-daytime.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import jobsiteLoaderDemo from "@/assets/jobsite-loader-demo-debris.jpg";
import jobsiteSkipLoaderGrading from "@/assets/jobsite-skip-loader-grading.jpg";
import jobsiteSkipLoaderOperator from "@/assets/jobsite-skip-loader-operator.jpg";
import projectTrenchDustControl from "@/assets/project-trench-dust-control.jpg";
import recentWorkRetentionBasin from "@/assets/recent-work-retention-basin.jpg";
import recentWorkExcavatorBasin from "@/assets/recent-work-excavator-basin.jpg";
import recentWorkSlopeExcavation from "@/assets/recent-work-slope-excavation.jpg";
import excavationSiteBalancingStock from "@/assets/excavation-site-balancing-stock.jpg";
import excavationOverExcavationStock from "@/assets/excavation-over-excavation-stock.jpg";
import concreteStockGallery1 from "@/assets/concrete-stock-gallery-1.jpg";
import concreteStockGallery2 from "@/assets/concrete-stock-gallery-2.jpg";
import concreteStockGallery3 from "@/assets/concrete-stock-gallery-3.jpg";
import concreteStockGallery4 from "@/assets/concrete-stock-gallery-4.jpg";
import concreteStockAbout from "@/assets/concrete-stock-about.jpg";
import concreteStockPavingBase from "@/assets/concrete-stock-paving-base.jpg";
import concreteStockHero from "@/assets/concrete-stock-hero.jpg";
import concreteStockDemolition from "@/assets/concrete-stock-demolition.jpg";
import pourForm from "@/assets/pour-phase-form-rebar.jpg";
import pourPre from "@/assets/pour-phase-pre-pour.jpg";
import pourPour from "@/assets/pour-phase-pour.jpg";
import pourCure from "@/assets/pour-phase-cure.jpg";
import pourStrip from "@/assets/pour-phase-strip.jpg";
import pavingBase from "@/assets/paving-layer-base.jpg";
import pavingSurface from "@/assets/paving-layer-surface.jpg";
import pavingBinder from "@/assets/paving-layer-binder.jpg";

export const EXCAVATION_IMAGES = [
  excavationImg,
  massExcavationImg,
  excavationSiteBalancingStock,
  importExportImg,
  excavationOverExcavationStock,
  g1,
  g3,
  g2,
  g4,
  aboutImg,
  demolitionImg,
];

export const GRADING_IMAGES = [
  serviceGradingImg,
  gradingCommercialPad,
  excavationImg,
  massExcavationImg,
  recompactionImg,
  jobsiteSkipLoaderGrading,
  g1,
  g3,
  g4,
  aboutImg,
  demolitionImg,
  importExportImg,
  projectTrenchDustControl,
  jobsiteSkipLoaderOperator,
  recentWorkRetentionBasin,
];

export const CONCRETE_IMAGES = [
  pourForm,
  pourPre,
  pourPour,
  pourCure,
  concreteStockGallery3,
  concreteStockGallery4,
  concreteStockAbout,
  concreteStockGallery1,
  concreteStockGallery2,
  concreteStockPavingBase,
  concreteStockHero,
  concreteStockDemolition,
];

export const PAVING_IMAGES = [
  pavingImg,
  demolitionAsphaltRemoval,
  g1,
  projectTrenchDustControl,
  heroImg,
  g3,
  g4,
  excavationImg,
  aboutImg,
  jobsiteLoaderDemo,
  g2,
  demolitionImg,
];

export const DEMOLITION_IMAGES = [
  demolitionImg,
  jobsiteLoaderDemo,
  projectTrenchDustControl,
  demolitionImg,
  demolitionConcreteRemoval,
  demolitionAsphaltRemoval,
  demolitionDebrisHauling,
  demolitionDebrisHauling,
  aboutImg,
  jobsiteSkipLoaderGrading,
];

export const SITE_DEVELOPMENT_IMAGES = [
  excavationImg,
  massExcavationImg,
  pavingImg,
  serviceGradingImg,
  demolitionImg,
  g1,
  g2,
  utilityTrenchingImg,
  recompactionImg,
  aboutImg,
];

/** @deprecated Use service-specific image pools instead. */
export const SERVICE_IMAGES = EXCAVATION_IMAGES;
