import { useEffect, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import "mapbox-gl/dist/mapbox-gl.css";
import { CITIES, cityUrl, type City } from "@/data/cities";
import { serviceCityUrl } from "@/data/services";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN as string | undefined;
const MAP_STYLE = "mapbox://styles/mapbox/dark-v11";

type ServiceAreaMapProps = {
  /** "region" fits the whole Southern California footprint; "city" zooms into one market. */
  variant?: "region" | "city";
  /** Slug of the city to emphasize and center on. */
  highlightCitySlug?: string;
  /** When set, markers link to the service-in-city page instead of the city page. */
  serviceSlug?: string;
  className?: string;
  label?: string;
};

function markerHref(city: City, serviceSlug?: string) {
  return serviceSlug ? serviceCityUrl(serviceSlug, city.slug) : cityUrl(city.slug);
}

/**
 * Branded Mapbox map of the commercial service area.
 * Mapbox GL needs a real DOM, so the map is created after mount and only once
 * the container scrolls near the viewport.
 */
export function ServiceAreaMap({
  variant = "region",
  highlightCitySlug,
  serviceSlug,
  className = "",
  label = "Mendozer X Earthworks commercial service area map",
}: ServiceAreaMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [failed, setFailed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !MAPBOX_TOKEN) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !MAPBOX_TOKEN || !containerRef.current) return;

    let cancelled = false;
    let map: import("mapbox-gl").Map | undefined;

    (async () => {
      try {
        const mapboxgl = (await import("mapbox-gl")).default;
        if (cancelled || !containerRef.current) return;

        mapboxgl.accessToken = MAPBOX_TOKEN;

        const highlighted = highlightCitySlug
          ? CITIES.find((city) => city.slug === highlightCitySlug)
          : undefined;
        const focus = highlighted ?? CITIES[0];
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        map = new mapboxgl.Map({
          container: containerRef.current,
          style: MAP_STYLE,
          center: [focus.coords.lng, focus.coords.lat],
          zoom: variant === "city" ? 9.5 : 7.4,
        });

        map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "bottom-right");
        // Page scroll should never get hijacked by the map.
        map.scrollZoom.disable();

        for (const city of CITIES) {
          const href = markerHref(city, serviceSlug);
          const el = document.createElement("a");
          el.href = href;
          el.className =
            "mxe-marker" + (city.slug === highlightCitySlug ? " mxe-marker--active" : "");
          el.setAttribute("aria-label", `${city.name}, CA service area`);
          el.innerHTML =
            '<span class="mxe-marker__dot"></span>' +
            `<span class="mxe-marker__label">${city.name}</span>`;

          // Markers live outside React, so route manually to avoid a full reload.
          el.addEventListener("click", (event) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
            event.preventDefault();
            router.history.push(href);
          });

          new mapboxgl.Marker({ element: el, anchor: "center" })
            .setLngLat([city.coords.lng, city.coords.lat])
            .addTo(map);
        }

        if (variant === "region") {
          const bounds = new mapboxgl.LngLatBounds();
          for (const city of CITIES) bounds.extend([city.coords.lng, city.coords.lat]);
          map.fitBounds(bounds, {
            padding: { top: 60, bottom: 60, left: 60, right: 60 },
            duration: reduceMotion ? 0 : 900,
            maxZoom: 9,
          });
        }

        // An invalid or domain-restricted token should fall back, not show an empty box.
        map.on("error", (event) => {
          const status = (event as { error?: { status?: number } }).error?.status;
          if (status === 401 || status === 403) setFailed(true);
        });
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [shouldLoad, variant, highlightCitySlug, serviceSlug, router]);

  return (
    <div className={`relative rounded-xl overflow-hidden border border-border bg-charcoal ${className}`}>
      {!MAPBOX_TOKEN || failed ? (
        <ServiceAreaFallback serviceSlug={serviceSlug} />
      ) : (
        <div ref={containerRef} className="mxe-map" role="application" aria-label={label} />
      )}
    </div>
  );
}

/** Rendered when no Mapbox token is configured so the section is never blank. */
function ServiceAreaFallback({ serviceSlug }: { serviceSlug?: string }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 p-6">
      <div>
        <p className="eyebrow">Service Area</p>
        <h3 className="mt-2 font-display text-xl tracking-wide text-foreground">
          Southern California
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Inland Empire · Orange County · Los Angeles County
        </p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {CITIES.map((city) => (
          <li key={city.slug}>
            <a
              href={markerHref(city, serviceSlug)}
              className="inline-flex items-center gap-1.5 rounded-md border border-gold/30 bg-card/70 px-2.5 py-1.5 text-xs text-foreground/85 hover:border-gold hover:text-gold transition"
            >
              <MapPin className="h-3 w-3 text-gold" />
              {city.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
