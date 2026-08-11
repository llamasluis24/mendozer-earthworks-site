import { Quote } from "lucide-react";

export function TestimonialPlaceholder({
  quote,
  author,
  company,
}: {
  quote: string;
  author: string;
  company: string;
}) {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-x max-w-3xl">
        <div className="rounded-2xl border border-gold/30 bg-card p-8 lg:p-12 text-center relative overflow-visible">
          <Quote className="pointer-events-none absolute -top-4 left-6 h-12 w-12 text-gold/55 z-10" aria-hidden />
          <Quote className="pointer-events-none absolute -bottom-4 right-6 h-12 w-12 rotate-180 text-gold/55 z-10" aria-hidden />
          <blockquote className="text-lg lg:text-xl leading-relaxed text-foreground/90">"{quote}"</blockquote>
          <div className="mt-6">
            <div className="font-display text-sm tracking-wider text-gold">{author}</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{company}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
