export function BenefitGrid({
  eyebrow,
  title,
  items,
  variant = "default",
}: {
  eyebrow: string;
  title: string;
  items: { title: string; body: string }[];
  variant?: "default" | "alt";
}) {
  return (
    <section className={`py-20 lg:py-28 ${variant === "alt" ? "" : "bg-secondary/40 border-y border-border"}`}>
      <div className="container-x">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 heading-lg max-w-3xl">{title}</h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b) => (
            <div key={b.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg tracking-wide">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
