import { createFileRoute, notFound } from "@tanstack/react-router";
import { getCity, CITY_SLUGS } from "@/data/cities";
import { buildPageMeta, buildFaqSchema } from "@/data/seo";
import { CityPageTemplate } from "@/components/site/CityPageTemplate";
import { resolveCityPage } from "@/data/city-page-content";

export const Route = createFileRoute("/service-areas/$slug")({
  beforeLoad: ({ params }) => {
    if (!CITY_SLUGS.includes(params.slug)) throw notFound();
  },
  loader: ({ params }) => {
    const city = getCity(params.slug)!;
    const resolved = resolveCityPage(city);
    return { city, resolved };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { city, resolved } = loaderData;
    return buildPageMeta({
      title: resolved.meta.title,
      description: resolved.meta.description,
      path: `/service-areas/${city.slug}`,
      scripts: [buildFaqSchema(resolved.faqs)],
    });
  },
  component: CityRoute,
});

function CityRoute() {
  const { city, resolved } = Route.useLoaderData();
  return <CityPageTemplate key={city.slug} city={city} resolved={resolved} />;
}
