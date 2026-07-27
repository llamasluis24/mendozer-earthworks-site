import { CITIES } from "./cities";
import { SEO_SERVICE_SLUGS, serviceCityUrl, serviceUrl, SERVICES } from "./services";
import { cityUrl } from "./cities";
import type { ServiceFaq } from "./services/types";

export function getAllSitemapPaths(): string[] {
  const staticPaths = ["/", "/about", "/contact", "/services", "/service-areas", "/projects"];

  const servicePaths = Object.values(SERVICES)
    .filter((s) => s.hasDetailPage)
    .map((s) => serviceUrl(s.slug));

  const cityPaths = CITIES.map((c) => cityUrl(c.slug));

  const serviceCityPaths = SEO_SERVICE_SLUGS.flatMap((serviceSlug) =>
    CITIES.map((city) => serviceCityUrl(serviceSlug, city.slug)),
  );

  return [...staticPaths, ...servicePaths, ...cityPaths, ...serviceCityPaths];
}

export function buildPageMeta({
  title,
  description,
  path,
  image,
  scripts,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  scripts?: { type: string; children: string }[];
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: path },
      { property: "og:type", content: "website" },
      ...(image ? [{ property: "og:image", content: image }] : []),
    ],
    links: [{ rel: "canonical", href: path }],
    ...(scripts ? { scripts } : {}),
  };
}

export function buildFaqSchema(faqs: ServiceFaq[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }),
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  areaServed,
}: {
  name: string;
  description: string;
  url: string;
  areaServed: string[];
}) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      url,
      provider: {
        "@type": "GeneralContractor",
        name: "Mendozer x Earthworks Inc.",
        telephone: "+1-951-427-4904",
      },
      areaServed: areaServed.map((a) => ({ "@type": "Place", name: a })),
    }),
  };
}
