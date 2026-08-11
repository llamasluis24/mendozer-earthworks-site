import { useState } from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import formRebarImg from "@/assets/pour-phase-form-rebar.jpg";
import prePourImg from "@/assets/pour-phase-pre-pour.jpg";
import pourImg from "@/assets/pour-phase-pour.jpg";
import finishImg from "@/assets/pour-phase-finish.jpg";
import cureImg from "@/assets/pour-phase-cure.jpg";
import stripImg from "@/assets/pour-phase-strip.jpg";

const PHASES = [
  {
    step: "01",
    title: "Form & Rebar",
    body: "Formwork set to plan dimensions. Rebar chaired and tied per structural drawings before pre-pour inspection.",
    image: formRebarImg,
    alt: "Crew setting formwork and tying rebar on a commercial concrete slab",
  },
  {
    step: "02",
    title: "Pre-Pour Inspect",
    body: "Agency and structural inspector sign-off on forms, rebar cover, and embeds. No pour until hold points clear.",
    image: prePourImg,
    alt: "Rebar grid and embeds inspected on site before concrete placement",
  },
  {
    step: "03",
    title: "Pour",
    body: "Concrete placed, vibrated, and screeded to elevation. Pump and haul coordinated for commercial flatwork production.",
    image: pourImg,
    alt: "Cement mixer truck pouring concrete at a commercial job site",
  },
  {
    step: "04",
    title: "Finish",
    body: "Broom, trowel, or specialty finish applied. Control joints cut per spec before initial set passes.",
    image: finishImg,
    alt: "Workers screeding and finishing a commercial concrete slab",
  },
  {
    step: "05",
    title: "Cure",
    body: "Cure compound or wet cure applied immediately. Hot-weather protocols protect surface from early cracking.",
    image: cureImg,
    alt: "Worker applying finish and early cure on a formed concrete slab",
  },
  {
    step: "06",
    title: "Strip & Protect",
    body: "Forms stripped after strength criteria met. Curing continues until agency and structural release for next trade.",
    image: stripImg,
    alt: "Graded commercial pad with layout stakes — site protected and ready for next trade",
  },
];

export function PourPhaseTimeline() {
  const [active, setActive] = useState(0);
  const progress = ((active + 1) / PHASES.length) * 100;
  const phase = PHASES[active];

  return (
    <div className="relative rounded-2xl border border-border overflow-hidden min-h-[420px]">
      {/* Phase background — swaps per step */}
      <div className="absolute inset-0" aria-hidden>
        {PHASES.map((p, i) => (
          <img
            key={p.step}
            src={p.image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/88 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20" />
      </div>

      <div className="relative p-6 lg:p-10">
        <div className="h-2 rounded-full bg-white/10 overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-gold transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {PHASES.map((p, i) => (
            <button
              key={p.step}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-lg border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                i === active
                  ? "border-gold bg-gold text-primary-foreground"
                  : i < active
                    ? "border-gold/40 bg-gold/15 text-gold"
                    : "border-white/20 bg-black/30 text-foreground/70 hover:border-gold/30 hover:text-foreground"
              }`}
            >
              {p.step}
            </button>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-[auto_1fr] gap-6 items-start">
          <div className="font-display text-6xl text-gold/40 leading-none">{phase.step}</div>
          <div>
            <h3 className="font-display text-xl tracking-wide text-foreground">{phase.title}</h3>
            <p className="mt-3 text-foreground/80 leading-relaxed max-w-2xl">{phase.body}</p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                disabled={active === 0}
                onClick={() => setActive((i) => i - 1)}
                className="rounded-md border border-white/20 bg-black/30 px-4 py-2 text-sm text-foreground disabled:opacity-30 hover:border-gold/50 transition"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={active === PHASES.length - 1}
                onClick={() => setActive((i) => i + 1)}
                className="inline-flex items-center gap-1 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-30 hover:bg-gold-bright transition"
              >
                Next phase <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-xs text-foreground/60">
          {PHASES.map((p, i) => (
            <span key={p.step} className={`flex items-center gap-1 ${i <= active ? "text-gold" : ""}`}>
              {i < active ? (
                <CheckCircle2 className="h-3.5 w-3.5" />
              ) : (
                <span className="h-3.5 w-3.5 rounded-full border border-current" />
              )}
              {p.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
