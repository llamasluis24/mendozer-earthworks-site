import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { COMPANY } from "@/data/company";

export function ContactLeadSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40 border-t border-border" id="contact">
      <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <div>
          <p className="eyebrow">Get Started</p>
          <h2 className="mt-3 heading-lg">Request a Project Estimate</h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Tell us about your commercial site — scope, location, and timeline. Our team will respond within one business day.
          </p>
          <ul className="mt-8 space-y-4">
            <li>
              <a href={COMPANY.phoneHref} className="flex items-center gap-3 text-foreground/90 hover:text-gold transition">
                <span className="h-10 w-10 rounded-md bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-gold" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">Call Direct</span>
                  <span className="font-display tracking-wide">{COMPANY.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-foreground/90 hover:text-gold transition">
                <span className="h-10 w-10 rounded-md bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-gold" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                  <span className="font-display tracking-wide break-all">{COMPANY.email}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-foreground/90">
              <span className="h-10 w-10 rounded-md bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                <MapPin className="h-4 w-4 text-gold" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">Service Areas</span>
                <span className="font-display tracking-wide">Inland Empire · Orange County · LA County</span>
              </span>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
