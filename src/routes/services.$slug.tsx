import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { MAIN_SERVICE_SLUGS } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }) => {
    if (!MAIN_SERVICE_SLUGS.includes(params.slug)) throw notFound();
  },
  component: ServiceSlugLayout,
});

function ServiceSlugLayout() {
  return <Outlet />;
}
