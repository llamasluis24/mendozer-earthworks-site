import { grading } from "./grading";
import { excavation } from "./excavation";
import { demolition } from "./demolition";
import { paving } from "./paving";
import { concrete } from "./concrete";
import { siteDevelopment } from "./site-development";
import type { PillarService } from "./types";

export type { PillarService, ServiceBenefit, ServiceProcess, ServiceFaq } from "./types";

export const SERVICES: Record<string, PillarService> = {
  grading,
  excavation,
  demolition,
  paving,
  concrete,
  "site-development": siteDevelopment,
};

export const MAIN_SERVICE_SLUGS = Object.values(SERVICES)
  .filter((s) => s.hasDetailPage !== false)
  .map((s) => s.slug);

/** Customer-facing primary services: Grading, Excavation, Concrete, Asphalt */
export const PRIMARY_SERVICE_SLUGS = ["grading", "excavation", "concrete", "paving"] as const;

export const PRIMARY_SERVICE_LINKS = [
  { slug: "grading", label: "Grading" },
  { slug: "excavation", label: "Excavation" },
  { slug: "concrete", label: "Concrete" },
  { slug: "paving", label: "Asphalt" },
] as const;

export const SEO_SERVICE_SLUGS = Object.keys(SERVICES);

export const PILLAR_SERVICES = MAIN_SERVICE_SLUGS.map((slug) => SERVICES[slug]);

export function getService(slug: string): PillarService | undefined {
  return SERVICES[slug];
}

export function serviceUrl(slug: string) {
  return `/services/${slug}` as const;
}

export function serviceCityUrl(serviceSlug: string, citySlug: string) {
  return `/services/${serviceSlug}/${citySlug}-ca` as const;
}

export function getServiceCityMeta(service: PillarService, cityName: string) {
  return {
    title: `Commercial ${service.shortName} in ${cityName}, CA | Mendozer x Earthworks`,
    description: `Licensed commercial ${service.shortName.toLowerCase()} contractor serving ${cityName}, CA. ${service.aeoSummary.split(".")[0]}.`,
    h1: `Commercial ${service.shortName} in ${cityName}, CA`,
    intro: `Mendozer x Earthworks provides licensed commercial ${service.shortName.toLowerCase()} for developers, general contractors, and property owners in this market. ${service.definition}`,
  };
}

export function getCityPageMeta(cityName: string, county: string) {
  return {
    title: `Commercial Earthwork Contractor in ${cityName}, CA | Mendozer x Earthworks`,
    description: `Mendozer x Earthworks provides commercial grading, excavation, concrete, and asphalt in ${cityName}, CA and ${county}.`,
    h1: `Commercial Earthwork Contractor in ${cityName}, CA`,
    intro: `Mendozer x Earthworks Inc. is a licensed commercial earthwork contractor serving ${county}. We partner with developers, general contractors, municipalities, and property owners on grading, excavation, concrete, and asphalt.`,
  };
}
