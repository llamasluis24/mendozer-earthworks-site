import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COMMERCIAL_WORKFLOW } from "@/data/commercial-workflow";

export function CommercialWorkflowSection() {
  const [active, setActive] = useState(0);
  const step = COMMERCIAL_WORKFLOW[active];
  const progress = ((active + 1) / COMMERCIAL_WORKFLOW.length) * 100;

  return (
    <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="container-x">
        <p className="eyebrow">Commercial Workflow</p>
        <h2 className="mt-3 heading-lg max-w-3xl">How Mendozer X Earthworks Inc. Executes Sitework From Preconstruction to Handoff</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
          Developers, general contractors, and project managers use this sequence to align bid packages, field production, inspections, and schedule milestones before dirt moves.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-card overflow-hidden">
          <div className="p-4 lg:p-6 border-b border-border bg-secondary/30 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {COMMERCIAL_WORKFLOW.map((s, i) => (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap transition ${
                    i === active
                      ? "border-gold bg-gold text-primary-foreground"
                      : i < active
                        ? "border-gold/40 bg-gold/10 text-gold"
                        : "border-border text-muted-foreground hover:border-gold/40"
                  }`}
                >
                  {s.step} · {s.title.split(" ")[0]}
                </button>
              ))}
            </div>
            <div className="mt-4 h-1.5 rounded-full bg-border overflow-hidden">
              <div className="h-full bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="p-6 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="font-display text-5xl text-gold/30 leading-none shrink-0">{step.step}</div>
              <div className="flex-1">
                <h3 className="font-display text-xl lg:text-2xl tracking-wide text-foreground">{step.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">{step.body}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                disabled={active === 0}
                onClick={() => setActive((i) => i - 1)}
                className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2 text-sm disabled:opacity-30 hover:border-gold/50 transition"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Phase {active + 1} of {COMMERCIAL_WORKFLOW.length}
              </span>
              <button
                type="button"
                disabled={active === COMMERCIAL_WORKFLOW.length - 1}
                onClick={() => setActive((i) => i + 1)}
                className="inline-flex items-center gap-1 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-30 hover:bg-gold-bright transition"
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
