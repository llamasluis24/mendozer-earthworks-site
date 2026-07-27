import { AlertTriangle } from "lucide-react";

export function SignsGrid({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: { title: string; body: string }[];
}) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <p className="eyebrow">Warning Signs</p>
        <h2 className="mt-3 heading-lg max-w-3xl">{title}</h2>
        {subtitle && <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">{subtitle}</p>}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card p-5 hover:border-gold/60 transition">
              <AlertTriangle className="h-5 w-5 text-gold mb-3" />
              <h3 className="font-display text-sm tracking-wide">{item.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
