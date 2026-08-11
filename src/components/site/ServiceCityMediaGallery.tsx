import { useState } from "react";
import { MediaLightbox } from "./MediaLightbox";

export function ServiceCityMediaGallery({
  photos,
  title = "Project Photos",
}: {
  photos: { src: string; caption: string }[];
  title?: string;
}) {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <p className="eyebrow">On Site</p>
        <h2 className="mt-3 heading-lg">{title}</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <button
              key={photo.caption}
              type="button"
              onClick={() => setLightbox(photo)}
              className="group rounded-xl border border-border bg-card overflow-hidden text-left hover:border-gold/60 transition"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="p-3 text-xs text-muted-foreground leading-relaxed">{photo.caption}</p>
            </button>
          ))}
        </div>
      </div>
      {lightbox && (
        <MediaLightbox src={lightbox.src} caption={lightbox.caption} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
