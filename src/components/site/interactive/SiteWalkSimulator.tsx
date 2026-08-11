import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, ClipboardList, MapPin } from "lucide-react";
import type { SiteWalkStep } from "@/data/service-city-content/types";

export function SiteWalkSimulator({
  items,
  serviceName,
  county,
}: {
  items: SiteWalkStep[];
  serviceName: string;
  county: string;
}) {
  const [step, setStep] = useState(0);
  const current = items[step];
  const progress = ((step + 1) / items.length) * 100;

  return (
    <section className="py-20 lg:py-28 border-y border-border bg-gradient-to-b from-secondary/30 to-transparent">
      <div className="container-x">
        <p className="eyebrow">Interactive</p>
        <h2 className="mt-3 heading-lg">Walk the Site With Us</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
          Step through what we review on a commercial {serviceName.toLowerCase()} pre-bid walk in {county}.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-card overflow-hidden">
          <div className="grid lg:grid-cols-[280px_1fr] lg:min-h-[420px]">
            <div className="border-b lg:border-b-0 lg:border-r border-border bg-secondary/40 p-6">
              <div className="flex items-center gap-2 text-gold mb-4">
                <ClipboardList className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Checklist</span>
              </div>
              <ol className="space-y-2">
                {items.map((item, i) => (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => setStep(i)}
                      className={`w-full text-left rounded-lg px-3 py-2.5 text-sm transition ${
                        i === step
                          ? "bg-gold text-primary-foreground font-medium"
                          : i < step
                            ? "text-gold/80 hover:bg-gold/10"
                            : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <span className="font-display mr-2 opacity-70">{String(i + 1).padStart(2, "0")}</span>
                      {item.title}
                    </button>
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-6 lg:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between text-xs text-muted-foreground uppercase tracking-wider">
                  <span>Step {step + 1} of {items.length}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-gold" /> {county}
                  </span>
                </div>
                <div className="mt-4 h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-gold transition-all duration-400" style={{ width: `${progress}%` }} />
                </div>

                <h3 className="mt-8 font-display text-xl lg:text-2xl tracking-wide text-foreground">{current.title}</h3>
                <p className="mt-4 text-base lg:text-lg text-foreground/90 leading-relaxed">{current.lead}</p>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">What we verify on site</p>
                  <ul className="space-y-3">
                    {current.checkpoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {current.fieldNote && (
                  <div className="mt-6 rounded-lg border border-gold/25 bg-gold/5 px-4 py-3 border-l-2 border-l-gold">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-1.5">Why this matters</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{current.fieldNote}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-2 border-t border-border/60">
                <button
                  type="button"
                  disabled={step === 0}
                  onClick={() => setStep((s) => s - 1)}
                  className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2.5 text-sm disabled:opacity-30 hover:border-gold/50 transition"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
                <button
                  type="button"
                  disabled={step === items.length - 1}
                  onClick={() => setStep((s) => s + 1)}
                  className="inline-flex items-center gap-1 rounded-md bg-gold px-4 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-30 hover:bg-gold-bright transition"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
