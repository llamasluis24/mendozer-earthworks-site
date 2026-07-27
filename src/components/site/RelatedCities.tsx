import { Link } from "@tanstack/react-router";
import type { City } from "@/data/cities";
import { getCity } from "@/data/cities";
import { getService, PRIMARY_SERVICE_LINKS } from "@/data/services";

export function RelatedCities({ city, serviceSlug }: { city: City; serviceSlug?: string }) {
  const nearby = city.nearby
    .map((slug) => getCity(slug))
    .filter((c): c is City => !!c);

  return (
    <div>
      <h3 className="font-display text-lg tracking-wide text-gold mb-4">Nearby Service Areas</h3>
      <ul className="grid sm:grid-cols-2 gap-2">
        {nearby.map((c) => (
          <li key={c.slug}>
            <Link
              to={serviceSlug ? "/services/$slug/$city" : "/service-areas/$slug"}
              params={
                serviceSlug
                  ? { slug: serviceSlug, city: `${c.slug}-ca` }
                  : { slug: c.slug }
              }
              className="text-sm text-foreground/85 hover:text-gold transition"
            >
              {c.name}, CA →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CityServiceLinks({ city }: { city: City }) {
  return (
    <div>
      <h3 className="font-display text-lg tracking-wide text-gold mb-4">Services in {city.name}</h3>
      <ul className="grid sm:grid-cols-2 gap-2">
        {PRIMARY_SERVICE_LINKS.map((link) => {
          const service = getService(link.slug);
          if (!service) return null;
          return (
            <li key={`${link.slug}-${link.label}`}>
              <Link
                to="/services/$slug/$city"
                params={{ slug: link.slug, city: `${city.slug}-ca` }}
                className="text-sm text-foreground/85 hover:text-gold transition"
              >
                {link.label} in {city.name} →
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
