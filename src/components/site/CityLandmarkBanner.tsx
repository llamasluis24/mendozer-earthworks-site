import type { CityLandmark } from "@/data/service-city-content/types";

export function CityLandmarkBanner({ landmark }: { landmark: CityLandmark }) {
  return (
    <section className="py-12 lg:py-16 border-b border-border">
      <div className="container-x">
        <div className="relative rounded-2xl overflow-hidden border border-border aspect-[21/9] lg:aspect-[21/7]">
          <img src={landmark.image} alt={landmark.alt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <p className="eyebrow text-gold">{landmark.label}</p>
            <p className="mt-2 text-lg lg:text-xl font-display tracking-wide text-foreground max-w-2xl">{landmark.caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
