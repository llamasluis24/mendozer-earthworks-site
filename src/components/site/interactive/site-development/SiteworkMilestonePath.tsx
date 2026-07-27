import { useState } from "react";
import { Building2, Hammer, Layers, MapPin, Route, Truck } from "lucide-react";

const MILESTONES = [
  { icon: Hammer, label: "Demolition", detail: "Clear existing improvements and export debris before grading mobilizes." },
  { icon: Layers, label: "Mass Grading", detail: "Cut/fill balance, compaction, and rough pad to civil plan elevations." },
  { icon: Route, label: "Utilities", detail: "Wet and dry utility trenches, backfill, and inspection hold points." },
  { icon: Building2, label: "Concrete", detail: "Footings, slabs, curbs, and flatwork to commercial spec and tolerance." },
  { icon: Truck, label: "Paving", detail: "Aggregate base, asphalt placement, striping, and ADA path-of-travel." },
  { icon: MapPin, label: "CO Ready", detail: "Final grades, SWPPP closeout, and agency sign-off for certificate of occupancy." },
];

export function SiteworkMilestonePath() {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 lg:p-10">
      <div className="relative flex justify-between items-start gap-2 overflow-x-auto pb-4">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-border hidden md:block" />
        <div
          className="absolute top-6 left-0 h-0.5 bg-gold transition-all duration-500 hidden md:block"
          style={{ width: `${(active / (MILESTONES.length - 1)) * 100}%` }}
        />
        {MILESTONES.map((m, i) => {
          const Icon = m.icon;
          const isOn = i === active;
          const isDone = i < active;
          return (
            <button
              key={m.label}
              type="button"
              onClick={() => setActive(i)}
              className="relative z-10 flex flex-col items-center min-w-[80px] group"
            >
              <div
                className={`h-12 w-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isOn
                    ? "border-gold bg-gold text-primary-foreground scale-110"
                    : isDone
                      ? "border-gold bg-gold/20 text-gold"
                      : "border-border bg-card text-muted-foreground group-hover:border-gold/50"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span className={`mt-2 text-xs font-semibold uppercase tracking-wider text-center ${isOn ? "text-gold" : "text-muted-foreground"}`}>
                {m.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-gold/30 bg-gold/5 p-6">
        <p className="eyebrow">Milestone {active + 1}</p>
        <h3 className="mt-2 font-display text-xl text-foreground">{MILESTONES[active].label}</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">{MILESTONES[active].detail}</p>
      </div>
    </div>
  );
}
