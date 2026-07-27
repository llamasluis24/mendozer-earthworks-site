import { Link } from "@tanstack/react-router";
import { CITIES } from "@/data/cities";
import { cityUrl } from "@/data/cities";
import { serviceCityUrl } from "@/data/services";

export function ServiceAreasSection({ serviceSlug }: { serviceSlug?: string }) {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="container-x">
        <p className="eyebrow">Service Areas</p>
        <h2 className="mt-3 heading-lg max-w-3xl">Commercial Projects Across Southern California</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
          Mendozer x Earthworks mobilizes across the Inland Empire, Orange County, and Los Angeles County for commercial excavation, grading, demolition, paving, concrete, and site development.
        </p>
        <div className="mt-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
          <div className="rounded-xl overflow-hidden border border-border aspect-[16/10] lg:aspect-auto lg:min-h-[320px]">
            <iframe
              title="Southern California service area map"
              src="https://www.google.com/maps?q=Southern+California&output=embed"
              className="w-full h-full min-h-[280px] grayscale-[0.3] contrast-110"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-display text-lg tracking-wide text-gold mb-4">
              {serviceSlug ? "Cities We Serve" : "Commercial Service Area Pages"}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={serviceSlug ? serviceCityUrl(serviceSlug, c.slug) : cityUrl(c.slug)}
                    className="text-sm text-foreground/85 hover:text-gold transition"
                  >
                    {c.name}, CA →
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/service-areas" className="mt-6 inline-block text-sm text-gold font-semibold uppercase tracking-wider hover:underline">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
