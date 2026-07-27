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
        <div className="rounded-2xl border border-gold/30 bg-card p-8 lg:p-12 text-center relative">
          <Quote className="absolute top-6 left-6 h-10 w-10 text-gold/20" />
          <p className="text-xs uppercase tracking-wider text-gold mb-4">Placeholder — client testimonial pending</p>
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
