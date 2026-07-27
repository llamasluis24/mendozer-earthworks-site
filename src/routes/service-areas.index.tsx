import { createFileRoute, Link } from "@tanstack/react-router";
import { CITIES, REGIONS, citiesInRegion, cityUrl } from "@/data/cities";
import { CTASection } from "@/components/site/CTA";
import { buildPageMeta } from "@/data/seo";
import heroImg from "@/assets/gallery-1.jpg";

export const Route = createFileRoute("/service-areas/")({
  head: () =>
    buildPageMeta({
      title: "Commercial Earthwork Service Areas | Mendozer x Earthworks",
      description:
        "Commercial earthwork services across Southern California. Serving the Inland Empire, Orange County, and Los Angeles County.",
      path: "/service-areas",
      image: heroImg,
    }),
  component: ServiceAreas,
});

function ServiceAreas() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Southern California service areas" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40" />
        </div>
        <div className="container-x relative">
          <p className="eyebrow">Service Areas</p>
          <h1 className="mt-4 heading-xl max-w-4xl">Commercial Earthwork Services Across Southern California</h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85">
            Licensed commercial grading, excavation, concrete, and asphalt for developers, GCs, and municipalities across three major SoCal regions.
          </p>
        </div>
      </section>

      {REGIONS.map((region) => {
        const cities = citiesInRegion(region.slug);
        return (
          <section key={region.slug} className="py-16 lg:py-24 border-b border-border last:border-b-0">
            <div className="container-x">
              <p className="eyebrow">Region</p>
              <h2 className="mt-3 heading-lg">{region.name}</h2>
              <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">{region.description}</p>
              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    to={cityUrl(city.slug)}
                    className="rounded-xl border border-border bg-card p-6 hover:border-gold/60 transition group"
                  >
                    <div className="h-1 w-8 bg-gold mb-3" />
                    <h3 className="font-display text-lg tracking-wide group-hover:text-gold transition">{city.name}, CA</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Grading, excavation, concrete & asphalt</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 lg:py-20 bg-secondary/40">
        <div className="container-x">
          <h2 className="heading-lg">All Service Area Pages</h2>
          <ul className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link to={cityUrl(c.slug)} className="text-sm text-foreground/85 hover:text-gold transition">
                  {c.name}, CA →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
