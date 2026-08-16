import { createFileRoute, notFound } from "@tanstack/react-router";
import { getCityBySlugParam } from "@/data/cities";
import { getService, SEO_SERVICE_SLUGS } from "@/data/services";
import { buildPageMeta, buildFaqSchema, buildServiceSchema } from "@/data/seo";
import { ServiceCityPageTemplate } from "@/components/site/ServiceCityPageTemplate";
import { getServiceCityPageContent, resolveServiceCityPage } from "@/data/service-city-content";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/services/$slug/$city")({
  beforeLoad: ({ params }) => {
    if (!SEO_SERVICE_SLUGS.includes(params.slug)) throw notFound();
    const city = getCityBySlugParam(params.city);
    if (!city) throw notFound();
    if (!getServiceCityPageContent(params.slug, city.slug)) throw notFound();
  },
  loader: ({ params }) => {
    const service = getService(params.slug)!;
    const city = getCityBySlugParam(params.city)!;
    const resolved = resolveServiceCityPage(service, city);
    return { service, city, resolved };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { service, city, resolved } = loaderData;
    const path = `/services/${service.slug}/${city.slug}-ca`;
    return buildPageMeta({
      title: resolved.meta.title,
      description: resolved.meta.description,
      path,
      scripts: [
        buildFaqSchema(resolved.faqs),
        buildServiceSchema({
          name: `${service.shortName} in ${city.name}, CA`,
          description: resolved.meta.description,
          url: path,
          areaServed: [city.name, city.county, ...COMPANY.serviceAreas],
        }),
      ],
    });
  },
  component: ServiceCityRoute,
});

function ServiceCityRoute() {
  const { service, city, resolved } = Route.useLoaderData();
  return (
    <ServiceCityPageTemplate
      key={`${service.slug}-${city.slug}`}
      service={service}
      city={city}
      resolved={resolved}
    />
  );
}
