import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COMMERCIAL_WORKFLOW, COMMERCIAL_WORKFLOW_PHASES } from "@/data/commercial-workflow";

type CommercialWorkflowSectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export function CommercialWorkflowSection({
  eyebrow = "Commercial Workflow",
  title = "How Mendozer X Earthworks Inc. Executes Sitework From Preconstruction to Handoff",
  subtitle = "Developers, general contractors, and project managers use this sequence to align bid packages, field production, inspections, and schedule milestones before dirt moves.",
}: CommercialWorkflowSectionProps) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const phase = COMMERCIAL_WORKFLOW_PHASES[phaseIndex];
  const phaseSteps = useMemo(
    () => phase.stepIndices.map((index) => ({ index, step: COMMERCIAL_WORKFLOW[index] })),
    [phase],
  );
  const [activeInPhase, setActiveInPhase] = useState(0);
  const activeGlobalIndex = phaseSteps[activeInPhase]?.index ?? phase.stepIndices[0];
  const step = COMMERCIAL_WORKFLOW[activeGlobalIndex];
  const progress = ((activeGlobalIndex + 1) / COMMERCIAL_WORKFLOW.length) * 100;

  const selectPhase = (nextPhase: number) => {
    setPhaseIndex(nextPhase);
    setActiveInPhase(0);
  };

  const goToStep = (nextInPhase: number) => {
    setActiveInPhase(Math.max(0, Math.min(phaseSteps.length - 1, nextInPhase)));
  };

  const goPrevious = () => {
    if (activeInPhase > 0) {
      goToStep(activeInPhase - 1);
      return;
    }
    if (phaseIndex > 0) {
      const prevPhase = COMMERCIAL_WORKFLOW_PHASES[phaseIndex - 1];
      setPhaseIndex(phaseIndex - 1);
      setActiveInPhase(prevPhase.stepIndices.length - 1);
    }
  };

  const goNext = () => {
    if (activeInPhase < phaseSteps.length - 1) {
      goToStep(activeInPhase + 1);
      return;
    }
    if (phaseIndex < COMMERCIAL_WORKFLOW_PHASES.length - 1) {
      setPhaseIndex(phaseIndex + 1);
      setActiveInPhase(0);
    }
  };

  const atStart = phaseIndex === 0 && activeInPhase === 0;
  const atEnd =
    phaseIndex === COMMERCIAL_WORKFLOW_PHASES.length - 1 &&
    activeInPhase === phaseSteps.length - 1;

  return (
    <section className="py-20 lg:py-28 bg-secondary/40 border-y border-border">
      <div className="container-x">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 heading-lg max-w-3xl">{title}</h2>
        {subtitle && <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">{subtitle}</p>}

        <div className="mt-10 rounded-2xl border border-border bg-card overflow-hidden">
          <div className="p-4 lg:p-6 border-b border-border bg-secondary/30 space-y-4">
            <div className="flex flex-wrap gap-2">
              {COMMERCIAL_WORKFLOW_PHASES.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => selectPhase(i)}
                  className={`rounded-lg border px-4 py-2.5 text-left transition min-w-[140px] flex-1 sm:flex-none sm:min-w-[180px] ${
                    i === phaseIndex
                      ? "border-gold bg-gold/10"
                      : "border-border hover:border-gold/40"
                  }`}
                >
                  <span
                    className={`block text-[11px] font-semibold uppercase tracking-wider ${
                      i === phaseIndex ? "text-gold" : "text-muted-foreground"
                    }`}
                  >
                    {p.label}
                  </span>
                  <span className="mt-1 block text-[11px] text-muted-foreground leading-snug">
                    {p.stepIndices.length} steps
                  </span>
                </button>
              ))}
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">{phase.description}</p>

            <div className="overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {phaseSteps.map(({ index, step: s }, i) => (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => goToStep(i)}
                    className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap transition ${
                      i === activeInPhase
                        ? "border-gold bg-gold text-primary-foreground"
                        : index < activeGlobalIndex
                          ? "border-gold/40 bg-gold/10 text-gold"
                          : "border-border text-muted-foreground hover:border-gold/40"
                    }`}
                  >
                    {s.step} · {s.title.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-1.5 rounded-full bg-border overflow-hidden">
              <div className="h-full bg-gold transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="p-6 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold mb-3">{phase.label}</p>
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
                disabled={atStart}
                onClick={goPrevious}
                className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2 text-sm disabled:opacity-30 hover:border-gold/50 transition"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Step {activeGlobalIndex + 1} of {COMMERCIAL_WORKFLOW.length}
              </span>
              <button
                type="button"
                disabled={atEnd}
                onClick={goNext}
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
