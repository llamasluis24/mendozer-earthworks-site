import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Shield } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { FAQAccordion } from "./FAQAccordion";
import { CTASection } from "./CTA";
import { CityServiceLinks } from "./RelatedCities";
import { NearbyCityPills } from "./NearbyCityPills";
import { ServiceBottomCTA } from "./ServiceBottomCTA";
import { EducationalCallout } from "./EducationalCallout";
import { BenefitGrid } from "./BenefitGrid";
import { ChecklistSection } from "./ChecklistSection";
import { CityLandmarkBanner } from "./CityLandmarkBanner";
import { PlaceholderCaseStudyCard } from "./PlaceholderCaseStudyCard";
import { ServiceCityMediaGallery } from "./ServiceCityMediaGallery";
import { PlaceholderVideoBlock } from "./PlaceholderVideoBlock";
import { TabbedLocalInsights } from "./TabbedLocalInsights";
import type { City } from "@/data/cities";
import type { ResolvedCityPage } from "@/data/city-page-content";
import { COMPANY } from "@/data/company";

interface Props {
  city: City;
  resolved: ResolvedCityPage;
}

export function CityPageTemplate({ city, resolved }: Props) {
  const { pageContent, cityContext, meta, faqs } = resolved;
  const heroImage = pageContent.media.photos[0]?.src ?? pageContent.landmark.image;

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={meta.h1} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40" />
        </div>
        <div className="container-x relative">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Service Areas", to: "/service-areas" }, { label: city.name }]} />
          <p className="eyebrow mt-4">{city.county}</p>
          <h1 className="mt-4 heading-xl max-w-4xl">{meta.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85">{meta.intro}</p>
          <p className="mt-4 max-w-3xl text-sm text-foreground/70 border-l-2 border-gold/60 pl-4">
            <strong className="text-foreground/90">Quick answer:</strong> {pageContent.metaDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold-bright transition">
              Request Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-md border-2 border-gold/60 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-gold hover:bg-gold/10 transition">
              <Phone className="h-4 w-4" /> {COMPANY.phone}
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-foreground/70">
            <Shield className="h-4 w-4 text-gold" /> {COMPANY.licenseLabel}
          </div>
        </div>
      </section>

      <CityLandmarkBanner landmark={pageContent.landmark} />

      <section className="py-20 lg:py-28">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">Local Expertise</p>
          <h2 className="mt-3 heading-lg">About This Market</h2>
          <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
            {cityContext.aboutExtended.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-x">
          <p className="eyebrow">Common Issues</p>
          <h2 className="mt-3 heading-lg">Commercial Sitework Problems We See Locally</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pageContent.localIssues.map((issue) => (
              <div key={issue.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-display text-base tracking-wide text-gold">{issue.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{issue.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCityMediaGallery photos={pageContent.media.photos} title="Commercial Earthwork Project Photos" />
      <PlaceholderVideoBlock
        poster={pageContent.media.video.poster}
        caption={pageContent.media.video.caption}
        title="Commercial Earthwork Site Walk"
      />

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <p className="eyebrow">Case Studies</p>
          <h2 className="mt-3 heading-lg">Representative Commercial Projects</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {pageContent.caseStudies.map((study) => (
              <PlaceholderCaseStudyCard key={study.title} study={study} />
            ))}
          </div>
        </div>
      </section>

      <ChecklistSection eyebrow="Site Visits" title="What Our Site Visits Include" items={pageContent.siteVisitItems} />

      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-x">
          <p className="eyebrow">Evaluation</p>
          <h2 className="mt-3 heading-lg">Our Commercial Earthwork Evaluation Process</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pageContent.evaluationSteps.map((s) => (
              <div key={s.step} className="rounded-xl bg-card border border-border p-6">
                <div className="font-display text-4xl text-gold/80 leading-none">{s.step}</div>
                <h3 className="mt-3 font-display text-base tracking-wide">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitGrid eyebrow="Why Mendozer X" title="Why Developers and GCs Call Us" items={pageContent.localBenefits} variant="alt" />

      <TabbedLocalInsights insights={pageContent.tabbedInsights} county={city.county} />

      <section className="py-16 lg:py-20">
        <div className="container-x max-w-4xl">
          <EducationalCallout title={cityContext.honestCallout.title}>{cityContext.honestCallout.body}</EducationalCallout>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow">Commercial Services</p>
            <h2 className="mt-3 heading-lg">Services in This Area</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Each service has its own local page with scope detail, FAQs, and estimate requests.
            </p>
            <div className="mt-6">
              <CityServiceLinks city={city} />
            </div>
          </div>
          <div>
            <p className="eyebrow">Industries</p>
            <h2 className="mt-3 heading-lg">Who We Work With</h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {cityContext.industries.map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow">Project Types</p>
            <h2 className="mt-3 heading-lg">Typical Commercial Projects</h2>
            <ul className="mt-6 space-y-3">
              {cityContext.projectTypes.map((t) => (
                <li key={t} className="text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-gold shrink-0">—</span> {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Local Considerations</p>
            <h2 className="mt-3 heading-lg">Sitework Challenges to Plan For</h2>
            <ul className="mt-6 space-y-3">
              {cityContext.localChallenges.map((c) => (
                <li key={c} className="text-muted-foreground leading-relaxed flex gap-2">
                  <span className="text-gold shrink-0">—</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">Education</p>
          <h2 className="mt-3 heading-lg">Common Commercial Sitework Issues</h2>
          <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
            {cityContext.siteworkEducation.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x">
          <NearbyCityPills citySlugs={city.nearby} title="More Service Areas" />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x max-w-4xl">
          <FAQAccordion faqs={faqs} title="Commercial Earthwork FAQs" />
        </div>
      </section>

      <ServiceBottomCTA
        title="Request an Estimate"
        subtitle={`Share your project scope, civil plans, and timeline. Licensed commercial earthwork across ${city.county}.`}
      />

      <CTASection />
    </>
  );
}
