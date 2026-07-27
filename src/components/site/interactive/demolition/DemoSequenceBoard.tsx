import { useState } from "react";
import { ChevronRight, HardHat } from "lucide-react";

const PHASES = [
  { title: "Survey & Permits", body: "As-built survey, hazmat screening, and demolition permits filed with agency before any structural work." },
  { title: "Utility Disconnect", body: "Wet and dry utilities safely capped and verified. No demo until disconnect letters are on file." },
  { title: "Hazmat Abatement", body: "ACM, lead, or contaminated materials abated per report. Clearance documentation before structural demo." },
  { title: "Structural Takedown", body: "Mechanical demolition of structures per engineered sequence. Dust, noise, and shoring controls active." },
  { title: "Foundation Removal", body: "Slabs, footings, and underground improvements broken out and exported. Subgrade proofed for grading." },
  { title: "Export & Clear", body: "Concrete and debris exported. Site cleared and rough-graded for subsequent sitework mobilization." },
];

export function DemoSequenceBoard() {
  const [step, setStep] = useState(0);
  const phase = PHASES[step];

  return (
    <div className="rounded-2xl border border-border bg-card p-6 lg:p-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-12 w-12 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center">
          <HardHat className="h-6 w-6 text-gold" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Phase {step + 1} of {PHASES.length}</p>
          <p className="font-display text-lg text-foreground">{phase.title}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-6 gap-2 mb-8">
        {PHASES.map((p, i) => (
          <button
            key={p.title}
            type="button"
            onClick={() => setStep(i)}
            className={`rounded-lg border p-3 text-left transition-all duration-300 ${
              i === step
                ? "border-gold bg-gold/15 col-span-2 lg:col-span-2"
                : i < step
                  ? "border-gold/30 bg-gold/5"
                  : "border-border opacity-60 hover:opacity-100"
            }`}
          >
            <span className="text-xs text-gold font-semibold">0{i + 1}</span>
            <p className="mt-1 text-xs font-medium leading-tight">{p.title}</p>
          </button>
        ))}
      </div>

      <p className="text-muted-foreground leading-relaxed text-lg">{phase.body}</p>

      <button
        type="button"
        onClick={() => setStep((s) => (s + 1) % PHASES.length)}
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:bg-gold-bright transition"
      >
        Next phase <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
