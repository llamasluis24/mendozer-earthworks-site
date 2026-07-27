import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { getCity, cityUrl } from "@/data/cities";
import { serviceCityUrl } from "@/data/services";

export function NearbyCityPills({
  citySlugs,
  serviceSlug,
  title = "Nearby Service Areas",
}: {
  citySlugs: string[];
  serviceSlug?: string;
  title?: string;
}) {
  const cities = citySlugs.map((s) => getCity(s)).filter(Boolean);
  if (cities.length === 0) return null;

  return (
    <div>
      <h3 className="font-display text-lg tracking-wide text-gold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {cities.map((c) => c && (
          <Link
            key={c.slug}
            to={serviceSlug ? serviceCityUrl(serviceSlug, c.slug) : cityUrl(c.slug)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/85 hover:border-gold hover:text-gold transition"
          >
            <MapPin className="h-3.5 w-3.5 text-gold" />
            {c.name}, CA
          </Link>
        ))}
      </div>
    </div>
  );
}
