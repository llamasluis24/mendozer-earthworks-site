/**
 * City location page differentiated content registry.
 *
 * PHASE 8 COMPLETE: all 10 /service-areas/{slug} pages upgraded, legacy fallbacks removed
 */
import type { City } from "@/data/cities";
import type { ServiceFaq } from "@/data/services/types";
import { getCityPageMeta } from "@/data/services";
import { getCityContent } from "@/data/city-content";
import { cityPageRiverside } from "./riverside";
import { cityPageBanning } from "./banning";
import { cityPageTemecula } from "./temecula";
import { cityPageSanBernardino } from "./san-bernardino";
import { cityPageRialto } from "./rialto";
import { cityPageAnaheim } from "./anaheim";
import { cityPageSantaAna } from "./santa-ana";
import { cityPageIrvine } from "./irvine";
import { cityPageLosAngeles } from "./los-angeles";
import { cityPagePasadena } from "./pasadena";
import type { CityPageContent } from "./types";

export type { CityPageContent } from "./types";

export const CITY_PAGE_CONTENT: Record<string, CityPageContent> = {
  riverside: cityPageRiverside,
  banning: cityPageBanning,
  temecula: cityPageTemecula,
  "san-bernardino": cityPageSanBernardino,
  rialto: cityPageRialto,
  anaheim: cityPageAnaheim,
  "santa-ana": cityPageSantaAna,
  irvine: cityPageIrvine,
  "los-angeles": cityPageLosAngeles,
  pasadena: cityPagePasadena,
};

export function getCityPageContent(citySlug: string): CityPageContent | null {
  return CITY_PAGE_CONTENT[citySlug] ?? null;
}

export interface ResolvedCityPage {
  pageContent: CityPageContent;
  cityContext: ReturnType<typeof getCityContent>;
  meta: {
    title: string;
    description: string;
    h1: string;
    intro: string;
  };
  faqs: ServiceFaq[];
  ogImage: string;
}

/** Single source of truth for city template, route head, and FAQ schema. */
export function resolveCityPage(city: City): ResolvedCityPage {
  const pageContent = getCityPageContent(city.slug);
  if (!pageContent) {
    throw new Error(`Missing city page content for ${city.slug}`);
  }

  const cityContext = getCityContent(city);
  const baseMeta = getCityPageMeta(city.name, city.county);

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
