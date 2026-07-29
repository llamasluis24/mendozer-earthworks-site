import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Shield, Clock, Award, Wrench, HardHat, Building2, Truck, Hammer, Layers, Mountain, Quote, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-bulldozer.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import aboutImg from "@/assets/about-daytime.jpg";
import demolitionImg from "@/assets/service-demolition.jpg";
import pavingImg from "@/assets/service-paving.jpg";
import concreteImg from "@/assets/service-concrete.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { CTASection } from "@/components/site/CTA";
import { ContactLeadSection } from "@/components/site/ContactLeadSection";
import { buildPageMeta } from "@/data/seo";
import { COMPANY } from "@/data/company";

export const Route = createFileRoute("/")({
  head: () =>
    buildPageMeta({
      title: "Mendozer x Earthworks | Commercial Earthwork Contractor Southern California",
      description: COMPANY.description,
      path: "/",
      image: heroImg,
    }),
  component: Home,
});

const services = [
  { slug: "grading", title: "Grading", desc: "Mass grading, fine grading, and engineered pad prep for commercial sites.", img: g2, icon: Mountain, serviceSlug: "grading" },
  { slug: "excavation", title: "Excavation", desc: "Commercial excavation, cut/fill, and utility trenching for developer and GC schedules.", img: excavationImg, icon: Truck, serviceSlug: "excavation" },
  { slug: "concrete", title: "Concrete", desc: "Footings, slabs, curbs, gutters, and flatwork to commercial spec.", img: concreteImg, icon: Building2, serviceSlug: "concrete" },
  { slug: "asphalt", title: "Asphalt", desc: "Asphalt paving and resurfacing for parking lots, drive aisles, and access roads.", img: pavingImg, icon: Layers, serviceSlug: "paving" },
];

const features = [
  { icon: Building2, title: "Commercial Project Experience", body: "Built for retail, industrial, municipal, and large multifamily developments." },
  { icon: Clock, title: "Reliable Scheduling", body: "We hit milestones. Your GCs and developers stay on schedule." },
  { icon: Shield, title: "Licensed & Professional", body: `Fully licensed (${COMPANY.licenseLabel}), insured, and bonded for serious work.` },
  { icon: Truck, title: "Modern Equipment", body: "Late-model fleet of dozers, excavators, loaders, and compactors." },
  { icon: Wrench, title: "Site Coordination", body: "Sequenced sitework coordinated with utilities, engineers, and your GC." },
  { icon: MapPin, title: "Southern California Local", body: "Mobilized across the Inland Empire, Orange County, and LA County." },
];

const industries = [
  "Developers", "General Contractors", "Municipal Projects", "Industrial Sites",
  "Retail Centers", "Warehouses", "Multifamily", "Property Managers",
];

const gallery = [
  { src: g1, alt: "Yellow heavy equipment lineup at sunset" },
  { src: excavationImg, alt: "Aerial commercial excavation site" },
  { src: g2, alt: "Graded commercial building pad" },
  { src: demolitionImg, alt: "Commercial demolition project" },
  { src: g3, alt: "Finished concrete slab at warehouse" },
  { src: pavingImg, alt: "Asphalt paving on commercial lot" },
  { src: g4, alt: "Excavator bucket close up" },
  { src: concreteImg, alt: "Concrete pour at commercial site" },
];

const reviews = [
  { name: "Carlos Ramirez", company: "Vanguard Commercial Builders", body: "Mendozer ran our 14-acre warehouse pad ahead of schedule. Clean site, accurate grading, zero punch list. Exactly the partner we needed." },
  { name: "Jennifer Wu", company: "Pacific Crest Developers", body: "Best earthwork crew we've used in the Inland Empire. Communication was on point and they didn't blink at the scope changes mid-project." },
  { name: "Mark Sullivan", company: "Sullivan Industrial Group", body: "From demo through final grade, the work was professional and the equipment was modern. We're already booking them for our OC site." },
  { name: "Diana Patel", company: "Westline Retail Partners", body: "Tight urban site in LA County, complex utility relocation. The Mendozer team handled it with zero drama. Highly recommend." },
];

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Industries />
      <Gallery />
      <Reviews />
      <CTASection />
      <ContactLeadSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Heavy construction equipment on a commercial site in broad daylight" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/30 to-transparent" />
      </div>
      <div className="container-x relative pb-20 pt-40 lg:pb-32">
        <div className="max-w-4xl fade-up">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />
            <p className="eyebrow">Southern California · Commercial Earthwork</p>
          </div>
          <h1 className="mt-5 heading-xl text-foreground">
            Southern California's <span className="text-gold">Commercial Earthwork</span> Experts
          </h1>
          <p className="mt-6 max-w-2xl text-lg lg:text-xl text-foreground/85 leading-relaxed">
            Licensed heavy civil contractor delivering grading, excavation, concrete, and asphalt for developers, GCs, and municipalities across the Inland Empire, Orange County, and LA County.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-md bg-gold px-7 py-4 text-base font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold-bright transition shadow-xl shadow-gold/20">
              Request Estimate <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border-2 border-foreground/30 backdrop-blur px-7 py-4 text-base font-semibold uppercase tracking-wider text-foreground hover:border-gold hover:text-gold transition">
              Schedule Consultation
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-foreground/70">
            <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-gold" /> {COMPANY.licenseLabel}</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> Commercial-Grade Crews</span>
            <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> {COMPANY.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative border-t border-border">
      <div className="h-1 diagonal-stripes opacity-80" />
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center py-20 lg:py-32">
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
            <img src={aboutImg} alt="Daytime aerial of commercial excavation site with heavy equipment" className="h-full w-full object-cover" width={896} height={1120} loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden sm:block bg-gold text-primary-foreground rounded-xl p-6 shadow-2xl max-w-[220px]">
            <div className="font-display text-3xl leading-none tracking-wide">1069854</div>
            <div className="mt-1 text-xs uppercase tracking-wider font-semibold">Licensed · Insured · Bonded</div>
          </div>
        </div>
        <div>
          <p className="eyebrow">About Mendozer</p>
          <h2 className="mt-3 heading-lg">Earthwork Done Right. Every Site. Every Time.</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Mendozer x Earthworks Inc. is a Southern California heavy civil contractor specializing in commercial earthwork and site services. We bring the discipline of a much larger outfit — engineered grading, predictable schedules, and clean, safe job sites.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We partner with developers, general contractors, and public agencies to move dirt, demo structures, and prepare sites for the next phase of construction across the Inland Empire, Orange County, and LA County.
          </p>
          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {["Skilled full-time crew", "Reliable timelines", "Safety-first job sites", "Quality workmanship", "Commercial-scale capacity", "Contractor partnerships"].map((i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {i}
              </li>
            ))}
          </ul>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-wider text-sm hover:gap-3 transition-all">
            More About Our Company <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 heading-lg max-w-2xl">Full-Scope Site Services for Commercial Projects</h2>
          </div>
          <Link to="/services" className="text-gold uppercase tracking-wider text-sm font-semibold hover:underline">
            View All Services →
          </Link>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.serviceSlug }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-gold/60 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
              </div>
              <div className="absolute top-4 left-4 h-11 w-11 rounded-md bg-gold flex items-center justify-center shadow-lg">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl tracking-wide group-hover:text-gold transition">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <p className="eyebrow">Why Mendozer x Earthworks</p>
        <h2 className="mt-3 heading-lg max-w-3xl">A Heavy Civil Partner Your Project Schedule Can Count On</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-border bg-card p-7 hover:border-gold/60 hover:-translate-y-1 transition-all">
              <div className="h-12 w-12 rounded-md bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition">
                <f.icon className="h-6 w-6 text-gold group-hover:text-primary-foreground transition" />
              </div>
              <h3 className="mt-5 font-display text-xl tracking-wide">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={g1} alt="" className="h-full w-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <div className="container-x relative">
        <p className="eyebrow">Industries We Serve</p>
        <h2 className="mt-3 heading-lg max-w-3xl">Trusted by Developers, GCs, and Public Agencies Across SoCal</h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {industries.map((i) => (
            <div key={i} className="rounded-lg border border-border bg-card/70 backdrop-blur p-5 hover:border-gold/60 hover:bg-card transition">
              <div className="h-1 w-8 bg-gold mb-3" />
              <div className="font-display text-base tracking-wide">{i}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Project Gallery</p>
            <h2 className="mt-3 heading-lg max-w-2xl">Recent Work Across Southern California</h2>
          </div>
          <Link to="/projects" className="text-gold uppercase tracking-wider text-sm font-semibold hover:underline">
            View Projects →
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {gallery.map((g, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-lg border border-border ${i % 5 === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`}>
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent opacity-0 group-hover:opacity-100 transition" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-xs text-foreground/90 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);
  const r = reviews[idx];
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <p className="eyebrow text-center">What Our Clients Say</p>
        <h2 className="mt-3 heading-lg text-center max-w-3xl mx-auto">Trusted by Commercial Builders Across SoCal</h2>
        <div className="mt-12 max-w-3xl mx-auto relative">
          <div key={idx} className="fade-up relative rounded-2xl border border-border bg-card p-8 lg:p-12 text-center">
            <Quote
              className="pointer-events-none absolute -top-5 left-6 h-14 w-14 text-gold/55 z-10"
              aria-hidden
            />
            <Quote
              className="pointer-events-none absolute -bottom-5 right-6 h-14 w-14 rotate-180 text-gold/55 z-10"
              aria-hidden
            />
            <p className="relative z-0 text-lg lg:text-xl leading-relaxed text-foreground/90">"{r.body}"</p>
            <div className="mt-6 flex flex-col items-center gap-1">
              <div className="font-display text-base tracking-wider text-gold">{r.name}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.company}</div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => setIdx((i) => (i - 1 + reviews.length) % reviews.length)} className="h-10 w-10 rounded-full border border-border hover:border-gold hover:text-gold transition flex items-center justify-center" aria-label="Previous">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-4 bg-border"}`} aria-label={`Review ${i + 1}`} />
              ))}
            </div>
            <button onClick={() => setIdx((i) => (i + 1) % reviews.length)} className="h-10 w-10 rounded-full border border-border hover:border-gold hover:text-gold transition flex items-center justify-center" aria-label="Next">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
