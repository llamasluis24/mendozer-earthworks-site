import * as Icons from "lucide-react";

export function TrustBar({ items }: { items: { icon: string; label: string }[] }) {
  return (
    <section className="border-y border-border bg-card/80">
      <div className="container-x py-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          const Icon = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[item.icon] ?? Icons.Shield;
          return (
            <div key={item.label} className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="h-10 w-10 rounded-md bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-gold" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground/85">{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
