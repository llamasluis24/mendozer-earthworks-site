import { Phone, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/data/company";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gold-gradient opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.25),transparent_60%)]" />
      <div className="container-x relative py-20 lg:py-28 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
        <div>
          <p className="eyebrow !text-charcoal">Ready to Break Ground</p>
          <h2 className="mt-3 heading-lg text-charcoal">
            Need a Reliable Earthwork Contractor in Southern California?
          </h2>
          <p className="mt-4 max-w-2xl text-charcoal/90 text-lg">
            Get a fast, no-obligation estimate for your next commercial project. We handle excavation, grading, demolition, paving, and concrete from the Inland Empire to LA County.
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:items-end">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-charcoal px-7 py-4 text-base font-semibold uppercase tracking-wider text-gold hover:bg-black transition w-full lg:w-auto"
          >
            <Phone className="h-5 w-5" /> {COMPANY.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-charcoal px-7 py-4 text-base font-semibold uppercase tracking-wider text-charcoal hover:bg-charcoal hover:text-gold transition w-full lg:w-auto"
          >
            Request Estimate <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
