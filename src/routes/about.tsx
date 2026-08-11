import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HardHat, Shield, Target, Users, MapPin, Award } from "lucide-react";
import heroImg from "@/assets/gallery-1.jpg";
import teamImg from "@/assets/service-excavation.jpg";
import { CTASection } from "@/components/site/CTA";
import { REGIONS, citiesInRegion, cityUrl } from "@/data/cities";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mendozer X Earthworks Inc. | Southern California Heavy Civil Contractor" },
      { name: "description", content: COMPANY.description },
      { property: "og:title", content: "About Mendozer X Earthworks Inc." },
      { property: "og:description", content: COMPANY.description },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: Target,
    title: "Discipline",
    body: "Commercial earthwork is production work. We show up prepared, run clean sites, and finish what we commit to on the preconstruction schedule.",
  },
  {
    icon: HardHat,
    title: "Craftsmanship",
    body: "Rough grade, compaction, and finish grade are executed to civil plans and geotechnical specs — not approximations that fail inspection.",
  },
  {
    icon: Users,
    title: "Relationships",
    body: "Most of our work comes from referrals and repeat clients. We earn that by communicating directly with superintendents and project managers in the field.",
  },
  {
    icon: Shield,
    title: "Long-Term Trust",
    body: "We do not pad bid quantities or recommend scope that is not required. Honest pre-bid walks protect your budget and our reputation.",
  },
  {
    icon: Award,
    title: "Work Ethic",
    body: "Fifteen years in the industry taught us that schedule slips start when earthwork contractors treat grading as a low-skill task. We do not operate that way.",
  },
  {
    icon: MapPin,
    title: "Local Field Knowledge",
    body: "We know the soils, agencies, and logistics across the Inland Empire, Orange County, and Los Angeles County from years of commercial production in the field.",
  },
];

function About() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Heavy equipment at a commercial earthwork site" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        </div>
        <div className="container-x relative">
          <p className="eyebrow">About Us</p>
          <h1 className="mt-4 heading-xl max-w-4xl">
            Built on Excavation. <span className="text-gold">The X Is Who We Are.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85 leading-relaxed">
            Mendozer X Earthworks Inc. is a Southern California commercial earthwork contractor founded by Miguel Mendoza — a licensed heavy civil operator who grew up around equipment and built this company through discipline, referrals, and repeat work.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-start">
          <div className="aspect-[5/4] rounded-2xl overflow-hidden border border-border lg:sticky lg:top-28">
            <img src={teamImg} alt="Commercial excavation and grading in progress" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <p className="text-sm font-display tracking-wide text-gold border-l-2 border-gold pl-4 max-w-lg">
              {COMPANY.tagline}
            </p>
            <p className="eyebrow mt-8">Our Story</p>
            <h2 className="mt-3 heading-lg">From COVID Downtime to a Full-Time Commercial Contractor</h2>
            <div className="mt-6 space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Mendozer X Earthworks Inc. started during COVID, when construction slowed and Miguel Mendoza decided to invest in himself instead of waiting for the market to return. He enrolled in contractor licensing school, studied the code and business requirements, and earned his California contractor license in late 2020 through {COMPANY.licensingSchool}, under instructor {COMPANY.licensingInstructor} — who helped him navigate the process and pass the exam.
              </p>
              <p>
                His first major commercial opportunity was a movie theater project: demolition, grading, and concrete work. The client kept awarding additional scope. That relationship — and the production discipline behind it — gave Miguel the confidence to leave his previous employer and build Mendozer X Earthworks Inc. full time.
              </p>
              <p>
                The company has grown primarily through referrals and repeat relationships with developers, general contractors, and project managers who need a earthwork partner that understands preconstruction, bid packages, and field sequencing — not a residential crew trying to scale up.
              </p>
              <p>
                Miguel brings approximately fifteen years of industry experience, but the foundation goes back further. His father has been a heavy equipment operator since the 1990s. Miguel grew up around dozers, excavators, and grading crews. That upbringing shaped how he reads a site, talks to operators, and understands what excavation and earthwork actually require in the field — before a quantity hits a spreadsheet.
              </p>
              <p>
                The <strong className="text-foreground">X</strong> in Mendozer X stands for <strong className="text-foreground">Excavation</strong>. It is not decorative. It reflects what the company was built on and what we self-perform every day: commercial excavation, grading, and the horizontal sitework that gets a pad ready for vertical construction.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <Stat n="15+" l="Years in industry" />
              <Stat n={COMPANY.license} l="License #" />
              <Stat n="3" l="Counties served" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">Who We Work With</p>
          <h2 className="mt-3 heading-lg">Commercial Construction — Not Homeowner Projects</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Mendozer X Earthworks Inc. partners with developers, general contractors, civil engineers, and municipal agencies on warehouse pads, retail sitework, industrial yards, and horizontal improvements across Southern California. We speak the language of preconstruction meetings, SWPPP coordination, compaction testing, and inspection hold points — because that is the work we do every week.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
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

      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-x">
          <p className="eyebrow">Service Area</p>
          <h2 className="mt-3 heading-lg max-w-3xl">Heavy Civil Work Across Southern California</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
            We mobilize across three counties for commercial grading, excavation, asphalt, and concrete flatwork.
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
              Request Estimate <ArrowRight className="h-4 w-4" />
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
