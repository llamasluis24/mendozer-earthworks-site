/**
 * Service×City differentiated content registry.
 *
 * PHASE 8 COMPLETE: 60/60 service×city pages migrated, legacy fallbacks removed
 */
import type { City } from "@/data/cities";
import type { PillarService } from "@/data/services/types";
import type { ServiceFaq } from "@/data/services/types";
import { getServiceCityMeta } from "@/data/services";
import { getServiceCityContent } from "@/data/city-content";
import { demolitionRiverside } from "./demolition/riverside";
import { demolitionBanning } from "./demolition/banning";
import { demolitionTemecula } from "./demolition/temecula";
import { demolitionSanBernardino } from "./demolition/san-bernardino";
import { demolitionRialto } from "./demolition/rialto";
import { demolitionAnaheim } from "./demolition/anaheim";
import { demolitionSantaAna } from "./demolition/santa-ana";
import { demolitionIrvine } from "./demolition/irvine";
import { demolitionLosAngeles } from "./demolition/los-angeles";
import { demolitionPasadena } from "./demolition/pasadena";
import { gradingRiverside } from "./grading/riverside";
import { gradingBanning } from "./grading/banning";
import { gradingTemecula } from "./grading/temecula";
import { gradingSanBernardino } from "./grading/san-bernardino";
import { gradingRialto } from "./grading/rialto";
import { gradingAnaheim } from "./grading/anaheim";
import { gradingSantaAna } from "./grading/santa-ana";
import { gradingIrvine } from "./grading/irvine";
import { gradingLosAngeles } from "./grading/los-angeles";
import { gradingPasadena } from "./grading/pasadena";
import { excavationRiverside } from "./excavation/riverside";
import { excavationBanning } from "./excavation/banning";
import { excavationTemecula } from "./excavation/temecula";
import { excavationSanBernardino } from "./excavation/san-bernardino";
import { excavationRialto } from "./excavation/rialto";
import { excavationAnaheim } from "./excavation/anaheim";
import { excavationSantaAna } from "./excavation/santa-ana";
import { excavationIrvine } from "./excavation/irvine";
import { excavationLosAngeles } from "./excavation/los-angeles";
import { excavationPasadena } from "./excavation/pasadena";
import { pavingRiverside } from "./paving/riverside";
import { pavingBanning } from "./paving/banning";
import { pavingTemecula } from "./paving/temecula";
import { pavingSanBernardino } from "./paving/san-bernardino";
import { pavingRialto } from "./paving/rialto";
import { pavingAnaheim } from "./paving/anaheim";
import { pavingSantaAna } from "./paving/santa-ana";
import { pavingIrvine } from "./paving/irvine";
import { pavingLosAngeles } from "./paving/los-angeles";
import { pavingPasadena } from "./paving/pasadena";
import { concreteRiverside } from "./concrete/riverside";
import { concreteBanning } from "./concrete/banning";
import { concreteTemecula } from "./concrete/temecula";
import { concreteSanBernardino } from "./concrete/san-bernardino";
import { concreteRialto } from "./concrete/rialto";
import { concreteAnaheim } from "./concrete/anaheim";
import { concreteSantaAna } from "./concrete/santa-ana";
import { concreteIrvine } from "./concrete/irvine";
import { concreteLosAngeles } from "./concrete/los-angeles";
import { concretePasadena } from "./concrete/pasadena";
import { siteDevelopmentRiverside } from "./site-development/riverside";
import { siteDevelopmentBanning } from "./site-development/banning";
import { siteDevelopmentTemecula } from "./site-development/temecula";
import { siteDevelopmentSanBernardino } from "./site-development/san-bernardino";
import { siteDevelopmentRialto } from "./site-development/rialto";
import { siteDevelopmentAnaheim } from "./site-development/anaheim";
import { siteDevelopmentSantaAna } from "./site-development/santa-ana";
import { siteDevelopmentIrvine } from "./site-development/irvine";
import { siteDevelopmentLosAngeles } from "./site-development/los-angeles";
import { siteDevelopmentPasadena } from "./site-development/pasadena";
import type { ServiceCityPageContent } from "./types";

export type { ServiceCityPageContent, PlaceholderCaseStudy, CityLandmark, TabbedInsights } from "./types";

export const SERVICE_CITY_CONTENT: Record<string, Record<string, ServiceCityPageContent>> = {
  demolition: {
    riverside: demolitionRiverside,
    banning: demolitionBanning,
    temecula: demolitionTemecula,
    "san-bernardino": demolitionSanBernardino,
    rialto: demolitionRialto,
    anaheim: demolitionAnaheim,
    "santa-ana": demolitionSantaAna,
    irvine: demolitionIrvine,
    "los-angeles": demolitionLosAngeles,
    pasadena: demolitionPasadena,
  },
  grading: {
    riverside: gradingRiverside,
    banning: gradingBanning,
    temecula: gradingTemecula,
    "san-bernardino": gradingSanBernardino,
    rialto: gradingRialto,
    anaheim: gradingAnaheim,
    "santa-ana": gradingSantaAna,
    irvine: gradingIrvine,
    "los-angeles": gradingLosAngeles,
    pasadena: gradingPasadena,
  },
  excavation: {
    riverside: excavationRiverside,
    banning: excavationBanning,
    temecula: excavationTemecula,
    "san-bernardino": excavationSanBernardino,
    rialto: excavationRialto,
    anaheim: excavationAnaheim,
    "santa-ana": excavationSantaAna,
    irvine: excavationIrvine,
    "los-angeles": excavationLosAngeles,
    pasadena: excavationPasadena,
  },
  paving: {
    riverside: pavingRiverside,
    banning: pavingBanning,
    temecula: pavingTemecula,
    "san-bernardino": pavingSanBernardino,
    rialto: pavingRialto,
    anaheim: pavingAnaheim,
    "santa-ana": pavingSantaAna,
    irvine: pavingIrvine,
    "los-angeles": pavingLosAngeles,
    pasadena: pavingPasadena,
  },
  concrete: {
    riverside: concreteRiverside,
    banning: concreteBanning,
    temecula: concreteTemecula,
    "san-bernardino": concreteSanBernardino,
    rialto: concreteRialto,
    anaheim: concreteAnaheim,
    "santa-ana": concreteSantaAna,
    irvine: concreteIrvine,
    "los-angeles": concreteLosAngeles,
    pasadena: concretePasadena,
  },
  "site-development": {
    riverside: siteDevelopmentRiverside,
    banning: siteDevelopmentBanning,
    temecula: siteDevelopmentTemecula,
    "san-bernardino": siteDevelopmentSanBernardino,
    rialto: siteDevelopmentRialto,
    anaheim: siteDevelopmentAnaheim,
    "santa-ana": siteDevelopmentSantaAna,
    irvine: siteDevelopmentIrvine,
    "los-angeles": siteDevelopmentLosAngeles,
    pasadena: siteDevelopmentPasadena,
  },
};

export function getServiceCityPageContent(
  serviceSlug: string,
  citySlug: string,
): ServiceCityPageContent | null {
  return SERVICE_CITY_CONTENT[serviceSlug]?.[citySlug] ?? null;
}

export interface ResolvedServiceCityPage {
  pageContent: ServiceCityPageContent;
  cityContext: ReturnType<typeof getServiceCityContent>;
  meta: {
    title: string;
    description: string;
    h1: string;
    intro: string;
  };
  faqs: ServiceFaq[];
  ogImage: string;
}

/** Single source of truth for template, route head, and FAQ schema. */
export function resolveServiceCityPage(service: PillarService, city: City): ResolvedServiceCityPage {
  const pageContent = getServiceCityPageContent(service.slug, city.slug);
  if (!pageContent) {
    throw new Error(`Missing service×city content for ${service.slug}/${city.slug}`);
  }

  const cityContext = getServiceCityContent(service.slug, city);
  const baseMeta = getServiceCityMeta(service, city.name);

  return {
    pageContent,
    cityContext,
    meta: {
      ...baseMeta,
      description: pageContent.metaDescription,
    },
    faqs: pageContent.faqs,
    ogImage: pageContent.landmark.image,
  };
}
