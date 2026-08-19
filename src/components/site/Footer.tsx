import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { BrandWordmark } from "./BrandWordmark";
import { FOOTER_SERVICES } from "@/data/navigation";
import { CITIES } from "@/data/cities";
import { COMPANY } from "@/data/company";

export function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-border">
      <div className="h-1 diagonal-stripes opacity-80" />
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <BrandWordmark iconClassName="h-24 w-24" />
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            {COMPANY.description}
          </p>
          <p className="mt-4 text-xs text-muted-foreground/80">License #{COMPANY.license}</p>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.2em] text-gold mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            {FOOTER_SERVICES.map((s) => (
              <li key={s.label}>
                <Link to={s.to} params={s.params} className="text-foreground/80 hover:text-gold transition">{s.label}</Link>
              </li>
            ))}
            <li><Link to="/projects" className="text-foreground/80 hover:text-gold transition">Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.2em] text-gold mb-4">Service Areas</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/service-areas" className="text-foreground/80 hover:text-gold transition">All Service Areas</Link></li>
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link to="/service-areas/$slug" params={{ slug: c.slug }} className="text-foreground/80 hover:text-gold transition">{c.name}, CA</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.2em] text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li><a href={COMPANY.phoneHref} className="flex items-center gap-2 text-foreground/85 hover:text-gold transition"><Phone className="h-4 w-4 text-gold" /> {COMPANY.phone}</a></li>
            <li><a href={`mailto:${COMPANY.email}`} className="flex items-start gap-2 text-foreground/85 hover:text-gold transition"><Mail className="h-4 w-4 text-gold mt-0.5 shrink-0" /> <span className="break-all">{COMPANY.email}</span></a></li>
            <li className="flex items-start gap-2 text-foreground/85"><MapPin className="h-4 w-4 text-gold mt-0.5" /> Southern California</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {COMPANY.name} All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://www.ftwagency.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#81D6BA] hover:opacity-90 transition"
            >
              FTW Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
