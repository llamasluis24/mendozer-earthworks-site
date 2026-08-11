import type { PlaceholderCaseStudy } from "@/data/service-city-content/types";

export function PlaceholderCaseStudyCard({ study }: { study: PlaceholderCaseStudy }) {
  return (
    <article className="rounded-xl border border-border bg-card overflow-hidden hover:border-gold/60 transition">
      <div className="aspect-[16/10] overflow-hidden relative">
        <img src={study.image} alt={study.title} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-wider text-gold">{study.location}</p>
        <h3 className="mt-2 font-display text-lg tracking-wide">{study.title}</h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="font-semibold text-foreground/90">Scope</dt>
            <dd className="mt-1 text-muted-foreground leading-relaxed">{study.scope}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground/90">Challenge</dt>
            <dd className="mt-1 text-muted-foreground leading-relaxed">{study.challenge}</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground/90">Result</dt>
            <dd className="mt-1 text-muted-foreground leading-relaxed">{study.result}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
