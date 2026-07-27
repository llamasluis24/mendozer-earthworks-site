import { X } from "lucide-react";
import { useEffect } from "react";

export function MediaLightbox({
  src,
  caption,
  onClose,
}: {
  src: string;
  caption?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-md border border-border bg-card p-2 text-foreground hover:border-gold transition"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={caption ?? "Expanded view"} className="w-full max-h-[80vh] object-contain rounded-lg" />
        {caption && <p className="mt-3 text-center text-sm text-muted-foreground">{caption}</p>}
      </div>
    </div>
  );
}
