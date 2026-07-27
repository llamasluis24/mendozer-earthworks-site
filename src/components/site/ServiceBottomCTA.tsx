import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { COMPANY } from "@/data/company";

export function ServiceBottomCTA({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow">Get Started</p>
          <h2 className="mt-3 heading-lg">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold-bright transition">
              Request Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2 rounded-md border-2 border-gold/60 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-gold hover:bg-gold/10 transition">
              <Phone className="h-4 w-4" /> {COMPANY.phone}
            </a>
          </div>
        </div>
        <ContactForm compact />
      </div>
    </section>
  );
}
