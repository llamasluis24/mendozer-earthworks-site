import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/data/company";
import { ContactForm } from "@/components/site/ContactForm";
import heroImg from "@/assets/hero-bulldozer.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mendozer x Earthworks Inc. | Request a Commercial Estimate" },
      { name: "description", content: "Contact Mendozer x Earthworks Inc. for commercial grading, excavation, concrete, and asphalt in Southern California. Call (951) 427-4904 or request an estimate." },
      { property: "og:title", content: "Contact Mendozer x Earthworks Inc." },
      { property: "og:description", content: "Request a commercial earthwork estimate. Serving Inland Empire, Orange County, and LA County." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Commercial earthwork site with heavy equipment" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        </div>
        <div className="container-x relative">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 heading-xl max-w-4xl">Let's Talk About Your Next Commercial Project</h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground/85">
            Tell us about the site and scope. We'll respond within one business day with next steps and a realistic estimate.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <div className="space-y-4">
            <InfoCard icon={Phone} label="Call Direct" value={COMPANY.phone} href={COMPANY.phoneHref} />
            <InfoCard icon={Mail} label="Email Us" value={COMPANY.email} href={`mailto:${COMPANY.email}`} />
            <InfoCard icon={MapPin} label="Service Areas" value="Inland Empire · Orange County · LA County" />
            <InfoCard icon={Clock} label="Business Hours" value="Mon–Fri 7:00 AM – 6:00 PM" />

            <div className="rounded-xl overflow-hidden border border-border aspect-[16/10] mt-6">
              <iframe
                title="Service area map"
                src="https://www.google.com/maps?q=Riverside%2C+CA&output=embed"
                className="w-full h-full grayscale-[0.4] contrast-110"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h2 className="heading-lg mb-4">Request an Estimate</h2>
            <p className="text-muted-foreground mb-6">Share the project basics — scope, location, and timeline.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="rounded-xl border border-border bg-card p-6 flex items-start gap-4 hover:border-gold/60 transition">
      <div className="h-11 w-11 rounded-md bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 font-display text-base tracking-wide text-foreground break-words">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
