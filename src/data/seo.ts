import { CITIES } from "./cities";
import { SEO_SERVICE_SLUGS, serviceCityUrl, serviceUrl, SERVICES } from "./services";
import { cityUrl } from "./cities";
import { COMPANY } from "./company";
import type { ServiceFaq } from "./services/types";

/** Branded card shown when the site is shared over SMS/iMessage, social, or chat apps. */
export const SHARE_IMAGE = {
  path: "/og-preview.jpg",
  width: "1200",
  height: "630",
  type: "image/jpeg",
  alt: "Mendozer X Earthworks Inc. — commercial grading, excavation, concrete, and asphalt in Southern California",
} as const;

/** Link preview scrapers ignore root-relative URLs, so every shared URL must be absolute. */
export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return `${COMPANY.siteUrl}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

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
  const url = absoluteUrl(path);
  const usesShareCard = !image;
  const shareImage = absoluteUrl(image ?? SHARE_IMAGE.path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: shareImage },
      { property: "og:image:secure_url", content: shareImage },
      // Only the share card has known dimensions; page photos vary in size.
      ...(usesShareCard
        ? [
            { property: "og:image:type", content: SHARE_IMAGE.type },
            { property: "og:image:width", content: SHARE_IMAGE.width },
            { property: "og:image:height", content: SHARE_IMAGE.height },
            { property: "og:image:alt", content: SHARE_IMAGE.alt },
          ]
        : [{ property: "og:image:alt", content: title }]),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: shareImage },
      { name: "twitter:image:alt", content: usesShareCard ? SHARE_IMAGE.alt : title },
    ],
    links: [{ rel: "canonical", href: url }],
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
        name: "Mendozer X Earthworks Inc.",
        telephone: "+1-951-427-4904",
      },
      areaServed: areaServed.map((a) => ({ "@type": "Place", name: a })),
    }),
  };
}
