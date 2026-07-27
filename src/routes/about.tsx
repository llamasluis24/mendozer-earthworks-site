import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, HardHat, Building2, Target, Users, MapPin } from "lucide-react";
import heroImg from "@/assets/gallery-1.jpg";
import teamImg from "@/assets/service-excavation.jpg";
import { CTASection } from "@/components/site/CTA";
import { REGIONS, citiesInRegion, cityUrl } from "@/data/cities";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mendozer x Earthworks Inc. | Southern California Heavy Civil Contractor" },
      { name: "description", content: COMPANY.description },
      { property: "og:title", content: "About Mendozer x Earthworks Inc." },
      { property: "og:description", content: COMPANY.description },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Our Mission", body: "Deliver predictable, commercial-grade earthwork that lets developers and GCs hit their construction milestones with confidence." },
  { icon: HardHat, title: "Work Ethic", body: "Show up early, run a clean site, finish what we start. The crew sets the standard every day." },
  { icon: Shield, title: "Safety Standards", body: "OSHA-aligned practices, daily JHAs, and active site supervision. Safety is non-negotiable." },
  { icon: Building2, title: "Commercial Focus", body: "We're built around commercial, industrial, municipal, and developer projects — not residential one-offs." },
  { icon: Users, title: "Experienced Operators", body: "Skilled operators and laborers with deep experience across SoCal's heavy civil sector." },
  { icon: MapPin, title: "Local Knowledge", body: "We know the soils, the cities, and the agencies across the Inland Empire, OC, and LA County." },
];

function About() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Heavy equipment at sunset" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        </div>
        <div className="container-x relative">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-4 heading-xl max-w-4xl">Built on Discipline. Delivered with Equipment.</h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85 leading-relaxed">
            Mendozer x Earthworks Inc. is a Southern California heavy civil contractor focused on commercial grading, excavation, concrete, and asphalt. We partner with developers, general contractors, and public agencies to deliver predictable, professional sitework.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <div className="aspect-[5/4] rounded-2xl overflow-hidden border border-border">
            <img src={teamImg} alt="Mendozer crew on a commercial site" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 heading-lg">A Contractor Built for Commercial Earthwork</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We started Mendozer x Earthworks Inc. with one focus: doing heavy civil work the right way for commercial clients. Today, we run late-model dozers, excavators, loaders, and compactors on commercial pads, grading sites, and asphalt projects across the Inland Empire, Orange County, and Los Angeles County.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We're licensed ({COMPANY.licenseLabel}), insured, and bonded — and we work the way larger GCs expect their subs to work. Clean job sites, accurate schedules, professional communication, and quality workmanship are the baseline.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat n="1069854" l="License #" />
              <Stat n="3" l="Counties served" />
              <Stat n="100%" l="Commercial focus" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-x">
          <p className="eyebrow">What We Stand For</p>
          <h2 className="mt-3 heading-lg max-w-3xl">Values That Show Up on Every Job Site</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-7 hover:border-gold/60 transition">
                <div className="h-12 w-12 rounded-md bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <v.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-5 font-display text-xl tracking-wide">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <p className="eyebrow">Service Area</p>
          <h2 className="mt-3 heading-lg max-w-3xl">Heavy Civil Work Across Southern California</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
            We mobilize quickly across three counties. If your project sits in one of these regions, we can be on site for a walk this week.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {REGIONS.map((region) => {
              const cities = citiesInRegion(region.slug);
              return (
                <div key={region.slug} className="rounded-xl border border-gold/30 bg-gradient-to-br from-card to-card/40 p-8">
                  <MapPin className="h-7 w-7 text-gold" />
                  <h3 className="mt-4 font-display text-2xl tracking-wide">{region.name}</h3>
                  <ul className="mt-4 space-y-2">
                    {cities.map((city) => (
                      <li key={city.slug}>
                        <Link to={cityUrl(city.slug)} className="text-sm text-foreground/85 hover:text-gold transition">
                          {city.name}, CA →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link to="/service-areas" className="text-gold uppercase tracking-wider text-sm font-semibold hover:underline">
              View All Service Areas →
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold-bright transition">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="font-display text-4xl text-gold">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
    </div>
  );
}
