import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Building2, Layers, Mountain, Truck } from "lucide-react";
import { SERVICES, PRIMARY_SERVICE_LINKS } from "@/data/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CTASection } from "@/components/site/CTA";
import { buildPageMeta } from "@/data/seo";
import { COMPANY } from "@/data/company";
import heroImg from "@/assets/hero-bulldozer.jpg";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  grading: Mountain,
  excavation: Truck,
  paving: Layers,
  concrete: Building2,
};

export const Route = createFileRoute("/services/")({
  head: () =>
    buildPageMeta({
      title: "Commercial Earthwork Services | Mendozer X Earthworks Inc.",
      description:
        "Commercial grading, excavation, concrete, and asphalt services in Southern California for developers and GCs.",
      path: "/services",
    }),
  component: ServicesOverview,
});

function ServicesOverview() {
  const primaryServices = PRIMARY_SERVICE_LINKS.map((link) => ({
    ...SERVICES[link.slug],
    displayLabel: link.label,
  }));

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Commercial earthwork services" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40" />
        </div>
        <div className="container-x relative">
          <p className="eyebrow">Services</p>
          <h1 className="mt-4 heading-xl max-w-4xl">Commercial Grading, Excavation, Concrete & Asphalt</h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85">
            {COMPANY.description}
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold-bright transition">
            Request Estimate <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {primaryServices.map((s) => (
            <ServiceCard key={`${s.slug}-${s.displayLabel}`} service={s} icon={ICONS[s.slug]} label={s.displayLabel} />
          ))}
        </div>
        <div className="container-x mt-12 rounded-xl border border-border bg-card p-8">
          <h2 className="font-display text-xl tracking-wide">Additional Commercial Services</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">
            We also perform commercial demolition and full site development on select developer-led projects.{" "}
            <Link to="/services/$slug" params={{ slug: "demolition" }} className="text-gold hover:underline">Demolition</Link> and{" "}
            <Link to="/services/$slug" params={{ slug: "site-development" }} className="text-gold hover:underline">site development</Link> pillar pages remain available for scope reference.{" "}
            <Link to="/contact" className="text-gold hover:underline">Request an estimate</Link> or explore our{" "}
            <Link to="/service-areas" className="text-gold hover:underline">service areas</Link>.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
