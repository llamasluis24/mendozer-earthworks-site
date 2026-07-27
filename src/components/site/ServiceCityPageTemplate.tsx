import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Shield } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import { FAQAccordion } from "./FAQAccordion";
import { CTASection } from "./CTA";
import { EducationalCallout } from "./EducationalCallout";
import { BenefitGrid } from "./BenefitGrid";
import { NearbyCityPills } from "./NearbyCityPills";
import { ServiceBottomCTA } from "./ServiceBottomCTA";
import { CityLandmarkBanner } from "./CityLandmarkBanner";
import { PlaceholderCaseStudyCard } from "./PlaceholderCaseStudyCard";
import { ServiceCityMediaGallery } from "./ServiceCityMediaGallery";
import { PlaceholderVideoBlock } from "./PlaceholderVideoBlock";
import { TabbedLocalInsights } from "./TabbedLocalInsights";
import { SiteWalkSimulator } from "./interactive/SiteWalkSimulator";
import { IssueSpotlight } from "./interactive/IssueSpotlight";
import type { City } from "@/data/cities";
import type { PillarService } from "@/data/services/types";
import type { ResolvedServiceCityPage } from "@/data/service-city-content";
import { serviceUrl } from "@/data/services";
import { COMPANY } from "@/data/company";

interface Props {
  service: PillarService;
  city: City;
  resolved: ResolvedServiceCityPage;
}

export function ServiceCityPageTemplate({ service, city, resolved }: Props) {
  const { pageContent, cityContext, meta, faqs } = resolved;

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.heroImage} alt={meta.h1} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40" />
        </div>
        <div className="container-x relative">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: service.shortName, to: serviceUrl(service.slug) },
              { label: city.name },
            ]}
          />
          <p className="eyebrow mt-4">{service.eyebrow}</p>
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

      <SiteWalkSimulator
        items={pageContent.siteVisitItems}
        serviceName={service.shortName}
        county={city.county}
      />

      <section className="py-20 lg:py-28">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">Local Expertise</p>
          <h2 className="mt-3 heading-lg">About This Market</h2>
          <p className="mt-3 text-sm text-muted-foreground">{city.county}</p>
          <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
            {cityContext.aboutExtended.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <IssueSpotlight issues={pageContent.serviceIssues} serviceName={service.shortName} />

      <ServiceCityMediaGallery
        photos={pageContent.media.photos}
        title={`${service.shortName} Project Photos`}
      />
      <PlaceholderVideoBlock
        poster={pageContent.media.video.poster}
        caption={pageContent.media.video.caption}
        title={`${service.shortName} Site Walk`}
      />
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <p className="eyebrow">Case Studies</p>
          <h2 className="mt-3 heading-lg">Representative {service.shortName} Projects</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {pageContent.caseStudies.map((study) => (
              <PlaceholderCaseStudyCard key={study.title} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-x">
          <p className="eyebrow">Evaluation</p>
          <h2 className="mt-3 heading-lg">Our {service.shortName} Evaluation Process</h2>
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

      <BenefitGrid
        eyebrow="Why Mendozer"
        title="Why Developers and GCs Call Us"
        items={pageContent.localBenefits}
        variant="alt"
      />

      <TabbedLocalInsights insights={pageContent.tabbedInsights} county={city.county} />

      <section className="py-16 lg:py-20">
        <div className="container-x max-w-4xl">
          <EducationalCallout title={cityContext.honestCallout.title}>{cityContext.honestCallout.body}</EducationalCallout>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow">Industries</p>
            <h2 className="mt-3 heading-lg">Commercial Clients We Serve</h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {cityContext.industries.map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 text-gold shrink-0" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Project Types</p>
            <h2 className="mt-3 heading-lg">Typical {service.shortName} Projects</h2>
            <ul className="mt-6 space-y-3">
              {cityContext.projectTypes.map((t) => (
                <li key={t} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-gold shrink-0">—</span> {t}
                </li>
              ))}
            </ul>
            <Link to={serviceUrl(service.slug)} className="mt-6 inline-block text-sm text-gold font-semibold uppercase tracking-wider hover:underline">
              Full Commercial {service.shortName} Guide →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <FAQAccordion faqs={faqs} title={`${service.shortName} FAQs`} />
        </div>
      </section>

      <section className="py-12 border-t border-border">
        <div className="container-x">
          <NearbyCityPills citySlugs={city.nearby} serviceSlug={service.slug} title={`More ${service.shortName} Service Areas`} />
        </div>
      </section>

      <ServiceBottomCTA
        title={`Get a ${service.shortName} Quote`}
        subtitle="Share your project address, civil plans, and schedule. We respond within one business day."
      />

      <CTASection />
    </>
  );
}
