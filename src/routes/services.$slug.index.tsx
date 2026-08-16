import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { getService } from "@/data/services";
import { buildPageMeta, buildFaqSchema, buildServiceSchema } from "@/data/seo";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/services/$slug/")({
  loader: ({ params }) => {
    const content = getService(params.slug)!;
    return { slug: params.slug, content };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [] };
    const { content, slug } = loaderData;
    const path = `/services/${slug}`;
    return buildPageMeta({
      title: content.metaTitle,
      description: content.metaDesc,
      path,
      scripts: [
        buildFaqSchema(content.faqs),
        buildServiceSchema({
          name: content.shortName,
          description: content.definition,
          url: path,
          areaServed: COMPANY.serviceAreas,
        }),
      ],
    });
  },
  component: ServiceIndexRoute,
});

function ServiceIndexRoute() {
  const { content } = Route.useLoaderData();
  return <ServicePage {...content} />;
}
