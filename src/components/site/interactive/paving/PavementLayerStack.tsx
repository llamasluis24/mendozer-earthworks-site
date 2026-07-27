import { useState } from "react";
import { Car, ChevronLeft, ChevronRight, Layers, Mountain, Shovel } from "lucide-react";

const LAYERS = [
  {
    id: "surface",
    icon: Car,
    title: "The top layer",
    tagline: "What you drive and walk on",
    thickness: "About 2–3 inches",
    body: "This is the smooth black asphalt you see in the parking lot — where cars park and people walk.",
    why: "A good surface stays flat, drains water, and holds up to daily traffic without cracking.",
    color: "#2a2a2e",
    light: "#4a4a50",
    h: 28,
  },
  {
    id: "binder",
    icon: Layers,
    title: "The middle layer",
    tagline: "Adds strength underneath",
    thickness: "About 2–4 inches",
    body: "Another layer of asphalt sits below the surface. It helps carry weight and smooths out small bumps in the lot.",
    why: "Without this layer, the top surface would flex too much and crack faster under heavy trucks.",
    color: "#3d3d42",
    light: "#5c5c62",
    h: 36,
  },
  {
    id: "base",
    icon: Mountain,
    title: "The gravel layer",
    tagline: "Crushed rock that spreads the load",
    thickness: "About 4–8 inches",
    body: "Packed crushed rock goes under the asphalt. Think of it as a sturdy platform that spreads weight across a wider area.",
    why: "This layer keeps the pavement from sinking or flexing when delivery trucks and forklifts cross the lot.",
    color: "#8b6840",
    light: "#a88055",
    h: 52,
  },
  {
    id: "subgrade",
    icon: Shovel,
    title: "The prepared ground",
    tagline: "Flat, compacted soil at the bottom",
    thickness: "Varies by site",
    body: "Before anything else goes down, the dirt is graded flat and packed tight. Everything above rests on this foundation.",
    why: "If the ground shifts or settles later, cracks and dips can show up all the way through the pavement above.",
    color: "#6b4e30",
    light: "#8b6848",
    h: 64,
  },
] as const;

function LotCutaway({ active }: { active: number }) {
  const bands = [...LAYERS].reverse();
  let y = 200;

  return (
    <svg viewBox="0 0 360 260" className="w-full max-w-md mx-auto" aria-hidden>
      {/* Parking lot surface */}
      <rect x="0" y="0" width="360" height="52" fill="#1a171b" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={20 + i * 68}
          y="10"
          width="56"
          height="34"
          fill="none"
          stroke={active === 0 ? "#d4a843" : "#3a3840"}
          strokeWidth="1.5"
          rx="2"
          opacity={active === 0 ? 0.9 : 0.4}
        />
      ))}
      <rect x="0" y="48" width="360" height="6" fill="#c45c1a" opacity="0.85" />
      <text x="180" y="8" textAnchor="middle" fill="#9a8b70" fontSize="8" letterSpacing="1.2">
        PARKING LOT SURFACE
      </text>

      {/* Cutaway edge */}
      <polygon points="0,52 360,52 360,260 0,260" fill="#141218" />
      <line x1="0" y1="52" x2="0" y2="260" stroke="#d4a843" strokeWidth="2" opacity="0.5" />

      {/* Layers bottom to top */}
      {bands.map((layer, i) => {
        const idx = 3 - i;
        const isOn = active === idx;
        const h = layer.h;
        y -= h;
        return (
          <g key={layer.id}>
            <rect
              x="12"
              y={y}
              width="336"
              height={h}
              fill={layer.color}
              stroke={isOn ? "#d4a843" : "rgba(255,255,255,0.08)"}
              strokeWidth={isOn ? 3 : 1}
              rx="3"
              className="transition-all duration-400"
              style={{ filter: isOn ? "drop-shadow(0 0 8px rgba(212,168,67,0.4))" : "none" }}
            />
            <rect x="12" y={y} width="336" height={h} fill={layer.light} opacity={isOn ? 0.15 : 0} rx="3" />
            <text
              x="28"
              y={y + h / 2 + 5}
              fill={isOn ? "#f0d060" : "#c9b896"}
              fontSize={isOn ? 12 : 10}
              fontWeight={isOn ? "bold" : "normal"}
            >
              {layer.title}
            </text>
            {isOn && (
              <text x="28" y={y + h / 2 + 20} fill="#c9b896" fontSize="9">
                {layer.thickness}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function PavementLayerStack() {
  const [active, setActive] = useState(0);
  const layer = LAYERS[active];
  const Icon = layer.icon;

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(LAYERS.length - 1, i + 1));

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="p-6 lg:p-10">
        <p className="text-center text-sm text-muted-foreground max-w-lg mx-auto">
          A commercial parking lot is more than a flat black surface. Tap each layer to see what&apos;s underneath.
        </p>

        <div className="mt-8">
          <LotCutaway active={active} />
        </div>

        {/* Simple layer picker */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {LAYERS.map((l, i) => {
            const LayerIcon = l.icon;
            const isOn = active === i;
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => setActive(i)}
                className={`rounded-xl border px-4 py-4 text-left transition-all duration-300 ${
                  isOn
                    ? "border-gold bg-gold/10 shadow-md shadow-gold/10"
                    : "border-border bg-secondary/30 hover:border-gold/40"
                }`}
              >
                <LayerIcon className={`h-5 w-5 mb-2 ${isOn ? "text-gold" : "text-muted-foreground"}`} />
                <p className={`text-sm font-semibold ${isOn ? "text-foreground" : "text-foreground/80"}`}>
                  {l.title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{l.thickness}</p>
              </button>
            );
          })}
        </div>

        {/* Plain-language detail card */}
        <div className="mt-8 max-w-2xl mx-auto rounded-xl border border-border bg-secondary/20 p-6 lg:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-gold/15 p-3 shrink-0">
              <Icon className="h-6 w-6 text-gold" />
            </div>
            <div>
              <p className="text-xs text-gold uppercase tracking-wider font-semibold">{layer.tagline}</p>
              <h3 className="mt-1 font-display text-xl tracking-wide text-foreground">{layer.title}</h3>
              <p className="mt-3 text-foreground/85 leading-relaxed">{layer.body}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed border-l-2 border-gold/40 pl-4">
                <span className="text-foreground/70 font-medium">Why it matters: </span>
                {layer.why}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={prev}
              disabled={active === 0}
              className="inline-flex items-center gap-1 rounded-md border border-border px-4 py-2 text-sm disabled:opacity-30 hover:border-gold/50 transition"
            >
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Layer {active + 1} of {LAYERS.length}
            </span>
            <button
              type="button"
              onClick={next}
              disabled={active === LAYERS.length - 1}
              className="inline-flex items-center gap-1 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-30 hover:bg-gold-bright transition"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
