import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { CTASection } from "./CTA";
import { Breadcrumbs } from "./Breadcrumbs";
import { EducationalCallout } from "./EducationalCallout";
import { ServiceAreasSection } from "./ServiceAreasSection";
import { FAQAccordion } from "./FAQAccordion";
import { TrustBar } from "./TrustBar";
import { ServiceInteractive } from "./interactive/ServiceInteractive";
import { SignsGrid } from "./SignsGrid";
import { ChecklistSection } from "./ChecklistSection";
import { SubServiceCards } from "./SubServiceCards";
import { BenefitGrid } from "./BenefitGrid";
import { TestimonialPlaceholder } from "./TestimonialPlaceholder";
import { ServiceBottomCTA } from "./ServiceBottomCTA";
import { CommercialWorkflowSection } from "./CommercialWorkflowSection";
import { COMPANY } from "@/data/company";
import type { PillarService } from "@/data/services/types";

export function ServicePage(p: PillarService) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={p.heroImage} alt={p.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40" />
        </div>
        <div className="container-x relative">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: p.shortName, to: `/services/${p.slug}` },
            ]}
          />
          <p className="eyebrow mt-4">{p.eyebrow}</p>
          <h1 className="mt-4 heading-xl text-foreground max-w-4xl">{p.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/85">{p.intro}</p>
          <p className="mt-4 max-w-3xl text-sm text-foreground/70 leading-relaxed border-l-2 border-gold/60 pl-4">
            <strong className="text-foreground/90">Quick answer:</strong> {p.aeoSummary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold-bright transition">
              Request Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-md border-2 border-gold/60 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-gold hover:bg-gold/10 transition">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/70">
            <span>Licensed · Insured · Bonded · {COMPANY.licenseLabel}</span>
            <span>{COMPANY.phone}</span>
          </div>
        </div>
      </section>

      <TrustBar items={p.trustBar} />

      <ServiceInteractive service={p} />

      {/* Why This Service Matters */}
      <section className="py-20 lg:py-28">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">Education</p>
          <h2 className="mt-3 heading-lg">{p.whyMatters.title}</h2>
          <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
            {p.whyMatters.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <BenefitGrid
        eyebrow="Root Causes"
        title={`How Commercial ${p.shortName} Problems Happen on Job Sites`}
        items={p.howProblemsHappen}
      />

      <SignsGrid
        title={`Signs Your Commercial Project Needs ${p.shortName}`}
        subtitle="Developers and GCs should address these warning signs before they trigger inspection holds, change orders, or schedule slips."
        items={p.signsYouNeedService}
      />

      <ChecklistSection
        eyebrow="Site Evaluation"
        title="What We Evaluate on Your Commercial Site"
        items={p.whatWeEvaluate}
        variant="alt"
      />

      <BenefitGrid
        eyebrow="Common Issues"
        title="Commercial Problems We Solve on Every Job Site"
        items={p.commonProblems}
        variant="alt"
      />

      <SubServiceCards
        title={`Commercial ${p.shortName} Services We Self-Perform`}
        subtitle={p.definition}
        items={p.subServices}
      />

      <ChecklistSection
        eyebrow="Scope"
        title="What's Included in Our Commercial Scope"
        items={p.scopeIncludes}
      />

      <CommercialWorkflowSection
        eyebrow="Our Process"
        title="A Predictable Commercial Workflow From Bid to Completion"
        subtitle="Every commercial scope follows the same preconstruction, field execution, and closeout sequence — sequenced with your GC schedule and inspection milestones."
      />

      {/* Educational Deep Dive */}
      <section className="py-20 lg:py-28">
        <div className="container-x max-w-4xl">
          <p className="eyebrow">Deep Dive</p>
          <h2 className="mt-3 heading-lg">{p.educational.title}</h2>
          <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-lg">
            {p.educational.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <EducationalCallout>{p.educational.callout}</EducationalCallout>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-secondary/40 border-y border-border">
        <div className="container-x max-w-4xl">
          <EducationalCallout title={p.secondaryCallout.title}>{p.secondaryCallout.body}</EducationalCallout>
        </div>
      </section>

      <BenefitGrid
        eyebrow="Why Mendozer X"
        title="Commercial Benefits for Developers & GCs"
        items={p.commercialBenefits}
      />

      <TestimonialPlaceholder
        quote={p.placeholderTestimonial.quote}
        author={p.placeholderTestimonial.author}
        company={p.placeholderTestimonial.company}
      />

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <FAQAccordion faqs={p.faqs} title={`${p.shortName} FAQs for Commercial Projects`} />
        </div>
      </section>

      <ServiceAreasSection serviceSlug={p.slug} />

      <ServiceBottomCTA
        title={`Ready for Commercial ${p.shortName}?`}
        subtitle={`Request a site walk and itemized estimate for your developer or GC-led project across Southern California.`}
      />

      <CTASection />
    </>
  );
}
