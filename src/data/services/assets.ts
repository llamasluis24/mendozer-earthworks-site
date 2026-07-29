import heroImg from "@/assets/hero-bulldozer.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import demolitionImg from "@/assets/service-demolition.jpg";
import pavingImg from "@/assets/service-paving.jpg";
import aboutImg from "@/assets/about-daytime.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import pourForm from "@/assets/pour-phase-form-rebar.jpg";
import pourPre from "@/assets/pour-phase-pre-pour.jpg";
import pourPour from "@/assets/pour-phase-pour.jpg";
import pourCure from "@/assets/pour-phase-cure.jpg";
import pourStrip from "@/assets/pour-phase-strip.jpg";
import pavingBase from "@/assets/paving-layer-base.jpg";
import pavingSurface from "@/assets/paving-layer-surface.jpg";
import pavingBinder from "@/assets/paving-layer-binder.jpg";
import pavingSub from "@/assets/paving-layer-subgrade.jpg";

export const EXCAVATION_IMAGES = [
  excavationImg,
  heroImg,
  g1,
  g3,
  g2,
  g4,
  aboutImg,
  demolitionImg,
  pavingImg,
  pourForm,
];

export const GRADING_IMAGES = [
  g2,
  heroImg,
  excavationImg,
  g1,
  g3,
  g4,
  aboutImg,
  pavingBinder,
  pavingBase,
  demolitionImg,
  pourForm,
  pourStrip,
  pavingSurface,
  pourPre,
  pourCure,
];

export const CONCRETE_IMAGES = [
  pourForm,
  pourPre,
  pourPour,
  pourCure,
  g3,
  g4,
  aboutImg,
  g1,
  g2,
];

export const PAVING_IMAGES = [
  pavingImg,
  pavingSurface,
  pavingBinder,
  pavingBase,
  pavingSub,
  g3,
  heroImg,
  g1,
  excavationImg,
  aboutImg,
];

export const DEMOLITION_IMAGES = [
  demolitionImg,
  excavationImg,
  heroImg,
  g1,
  g3,
  g2,
  g4,
  pavingImg,
  aboutImg,
  pourStrip,
];

export const SITE_DEVELOPMENT_IMAGES = [
  excavationImg,
  heroImg,
  pavingImg,
  pourForm,
  demolitionImg,
  g1,
  g2,
  pavingBase,
  pourCure,
  aboutImg,
];

/** @deprecated Use service-specific image pools instead. */
export const SERVICE_IMAGES = EXCAVATION_IMAGES;
