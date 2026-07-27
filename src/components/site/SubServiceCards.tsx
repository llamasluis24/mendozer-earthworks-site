export function SubServiceCards({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: { title: string; body: string; image: string }[];
}) {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="container-x">
        <p className="eyebrow">Service Breakdown</p>
        <h2 className="mt-3 heading-lg max-w-3xl">{title}</h2>
        {subtitle && <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">{subtitle}</p>}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <article key={item.title} className="rounded-xl border border-border bg-card overflow-hidden hover:border-gold/60 transition group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <figcaption className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wider bg-charcoal/80 text-foreground/70 px-2 py-0.5 rounded">
                  Placeholder — project photo coming soon
                </figcaption>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
