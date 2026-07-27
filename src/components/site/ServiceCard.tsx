import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { PillarService } from "@/data/services/types";

export function ServiceCard({ service, icon: Icon, label }: { service: PillarService; icon?: React.ComponentType<{ className?: string }>; label?: string }) {
  const href = service.hasDetailPage !== false ? "/services/$slug" as const : "/contact" as const;
  const title = label ?? service.shortName;
  return (
    <Link
      to={href}
      {...(href === "/services/$slug" ? { params: { slug: service.slug } } : {})}
      className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-gold/60 transition"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={service.heroImage} alt={service.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
      </div>
      {Icon && (
        <div className="absolute top-4 left-4 h-11 w-11 rounded-md bg-gold flex items-center justify-center shadow-lg">
          <Icon className="h-5 w-5 text-primary-foreground" />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-display text-xl tracking-wide group-hover:text-gold transition">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.cardDesc}</p>
        <div className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold font-semibold">
          Learn More <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </Link>
  );
}
