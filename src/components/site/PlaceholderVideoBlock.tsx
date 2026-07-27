import { Play } from "lucide-react";
import { useState } from "react";

export function PlaceholderVideoBlock({
  poster,
  caption,
  title = "Site Walk Video",
}: {
  poster: string;
  caption: string;
  title?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 lg:py-20 bg-secondary/40 border-y border-border">
      <div className="container-x max-w-4xl">
        <p className="eyebrow">Video</p>
        <h2 className="mt-3 heading-lg">{title}</h2>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-8 w-full relative rounded-2xl overflow-hidden border border-border aspect-video group"
        >
          <img src={poster} alt={caption} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
          <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/40 transition" />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="h-16 w-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:bg-gold transition">
              <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider text-foreground">{caption}</span>
          </span>
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-6"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-w-lg w-full rounded-2xl border border-gold/40 bg-card p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs uppercase tracking-wider text-gold mb-3">Placeholder</p>
            <h3 className="font-display text-xl tracking-wide">Site walk video coming soon</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              This commercial site walk video will be replaced with actual project footage. Contact us for a live pre-bid walk in the meantime.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-md bg-gold px-6 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold-bright transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
