export function FAQAccordion({ faqs, title = "Common Questions" }: { faqs: { q: string; a: string }[]; title?: string }) {
  return (
    <div>
      <h2 className="heading-lg">{title}</h2>
      <div className="mt-8 divide-y divide-border border-y border-border">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-foreground">
              {f.q}
              <span className="text-gold group-open:rotate-45 transition-transform text-2xl leading-none shrink-0">+</span>
            </summary>
            <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
