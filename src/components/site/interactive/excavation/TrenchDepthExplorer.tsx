import { useState } from "react";
import { Droplets, Flame, Zap, Wifi } from "lucide-react";

const UTILITIES = [
  {
    id: "water",
    label: "Water Main",
    icon: Droplets,
    depth: "4–6 ft",
    width: '12–24"',
    note: "Domestic and fire line trenches sequenced before paving. Bedding and backfill per agency spec.",
    infraLabel: "Ductile iron / PVC water main — runs continuously beneath the site",
  },
  {
    id: "sewer",
    label: "Sewer / Storm",
    icon: Droplets,
    depth: "8–14 ft",
    width: '18–36"',
    note: "Deeper trenches with shoring evaluation on commercial parcels. Lift station tie-ins coordinated with civil.",
    infraLabel: "RCP / HDPE sewer main — deep gravity line crossing the parcel",
  },
  {
    id: "gas",
    label: "Gas Line",
    icon: Flame,
    depth: "2–4 ft",
    width: '6–12"',
    note: "Marked, potholed, and hand-exposed at crossings before mass excavation passes within tolerance.",
    infraLabel: "Yellow-jacket steel gas pipe with tracer wire — shallow continuous run",
  },
  {
    id: "electrical",
    label: "Electrical Duct",
    icon: Zap,
    depth: "3–5 ft",
    width: '12–24"',
    note: "Duct bank trenches with sand bedding and warning tape. Coordination with dry utility contractor.",
    infraLabel: "PVC duct bank — power and lighting circuits run site-wide",
  },
  {
    id: "comm",
    label: "Communications",
    icon: Wifi,
    depth: "2–4 ft",
    width: '6–12"',
    note: "Fiber and conduit runs in shared trenches where civil plans allow combined utility corridors.",
    infraLabel: "Fiber conduit bundle — telecom backbone across the corridor",
  },
] as const;

type UtilityId = (typeof UTILITIES)[number]["id"];

/** Pipe center Y and trench depth (surface to invert) per utility */
const LAYOUT: Record<UtilityId, { pipeY: number; trenchDepth: number; pipeH: number }> = {
  gas: { pipeY: 108, trenchDepth: 82, pipeH: 14 },
  comm: { pipeY: 112, trenchDepth: 86, pipeH: 10 },
  electrical: { pipeY: 118, trenchDepth: 92, pipeH: 22 },
  water: { pipeY: 132, trenchDepth: 108, pipeH: 20 },
  sewer: { pipeY: 162, trenchDepth: 138, pipeH: 26 },
};

const TRENCH_LEFT = 155;
const TRENCH_RIGHT = 245;
const SURFACE_Y = 36;

function UndergroundCrossSection({ type }: { type: UtilityId }) {
  const { pipeY, trenchDepth, pipeH } = LAYOUT[type];
  const pipeTop = pipeY - pipeH / 2;
  const pipeBot = pipeY + pipeH / 2;
  const beddingH = 10;
  const beddingTop = pipeBot;

  return (
    <svg viewBox="0 0 400 210" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
      <defs>
        <linearGradient id="soilGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c4228" />
          <stop offset="50%" stopColor="#3d2a18" />
          <stop offset="100%" stopColor="#2a1c10" />
        </linearGradient>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e2e22" stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <filter id="pipeGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="400" height={SURFACE_Y} fill="url(#skyGrad)" />
      {/* Grass / surface */}
      <rect x="0" y={SURFACE_Y - 4} width="400" height="6" fill="#3d5c3a" opacity="0.7" />
      <line x1="0" y1={SURFACE_Y} x2="400" y2={SURFACE_Y} stroke="#6b8f5e" strokeWidth="1.5" />
      <text x="200" y="22" textAnchor="middle" fill="#9ca3af" fontSize="9" letterSpacing="2">
        GROUND SURFACE
      </text>

      {/* Full soil mass */}
      <rect x="0" y={SURFACE_Y} width="400" height="174" fill="url(#soilGrad)" />
      {/* Soil strata lines */}
      {[55, 80, 105, 145, 175].map((y) => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#6b5238" strokeWidth="0.5" opacity="0.25" />
      ))}

      {/* ── Full-width bedding layer beneath pipe ── */}
      <rect x="0" y={beddingTop} width="400" height={beddingH} fill="#c4a574" opacity="0.55" />

      {/* ── Trench excavation (open cut in center) ── */}
      <path
        d={`M${TRENCH_LEFT} ${SURFACE_Y} L${TRENCH_LEFT} ${SURFACE_Y + trenchDepth} L${TRENCH_RIGHT} ${SURFACE_Y + trenchDepth} L${TRENCH_RIGHT} ${SURFACE_Y} Z`}
        fill="#1a1208"
        opacity="0.85"
      />
      <line x1={TRENCH_LEFT} y1={SURFACE_Y} x2={TRENCH_LEFT} y2={SURFACE_Y + trenchDepth} stroke="#8b6914" strokeWidth="1.5" opacity="0.6" />
      <line x1={TRENCH_RIGHT} y1={SURFACE_Y} x2={TRENCH_RIGHT} y2={SURFACE_Y + trenchDepth} stroke="#8b6914" strokeWidth="1.5" opacity="0.6" />
      <text x="200" y={SURFACE_Y + 18} textAnchor="middle" fill="#d4a843" fontSize="7" opacity="0.7" letterSpacing="1">
        OPEN TRENCH
      </text>

      {/* ── Infrastructure — full width left to right ── */}
      <g filter="url(#pipeGlow)">
        {type === "water" && (
          <>
            {/* Buried segments (dimmer under soil) */}
            <rect x="0" y={pipeTop} width={TRENCH_LEFT} height={pipeH} rx={pipeH / 2} fill="#1e5a7a" opacity="0.55" />
            <rect x={TRENCH_RIGHT} y={pipeTop} width={400 - TRENCH_RIGHT} height={pipeH} rx={pipeH / 2} fill="#1e5a7a" opacity="0.55" />
            {/* Exposed in trench (bright) */}
            <rect x={TRENCH_LEFT} y={pipeTop} width={TRENCH_RIGHT - TRENCH_LEFT} height={pipeH} rx={pipeH / 2} fill="#2b8fd4" />
            <rect x={TRENCH_LEFT + 4} y={pipeTop + 3} width={TRENCH_RIGHT - TRENCH_LEFT - 8} height={pipeH - 6} rx={(pipeH - 6) / 2} fill="#5bb8f0" opacity="0.45" />
            {/* Joint */}
            <rect x="196" y={pipeTop - 2} width="8" height={pipeH + 4} rx="2" fill="#144a66" />
            <path d={`M0 ${pipeY} L400 ${pipeY}`} stroke="#7ec8f0" strokeWidth="0.8" opacity="0.35" strokeDasharray="6 4" />
          </>
        )}

        {type === "sewer" && (
          <>
            <rect x="0" y={pipeTop} width={TRENCH_LEFT} height={pipeH} rx={pipeH / 2} fill="#3a3a3a" opacity="0.55" />
            <rect x={TRENCH_RIGHT} y={pipeTop} width={400 - TRENCH_RIGHT} height={pipeH} rx={pipeH / 2} fill="#3a3a3a" opacity="0.55" />
            <rect x={TRENCH_LEFT} y={pipeTop} width={TRENCH_RIGHT - TRENCH_LEFT} height={pipeH} rx={pipeH / 2} fill="#6a6a6a" />
            <rect x={TRENCH_LEFT + 5} y={pipeTop + 4} width={TRENCH_RIGHT - TRENCH_LEFT - 10} height={pipeH - 8} rx={(pipeH - 8) / 2} fill="#1a1a1a" />
            {/* Bell joint */}
            <ellipse cx="210" cy={pipeY} rx="8" ry={pipeH / 2 + 2} fill="#555" />
            <path d={`M0 ${pipeY} L400 ${pipeY}`} stroke="#888" strokeWidth="1" opacity="0.3" strokeDasharray="5 4" />
          </>
        )}

        {type === "gas" && (
          <>
            <rect x="0" y={pipeTop} width={TRENCH_LEFT} height={pipeH} rx={pipeH / 2} fill="#a07810" opacity="0.5" />
            <rect x={TRENCH_RIGHT} y={pipeTop} width={400 - TRENCH_RIGHT} height={pipeH} rx={pipeH / 2} fill="#a07810" opacity="0.5" />
            <rect x={TRENCH_LEFT} y={pipeTop} width={TRENCH_RIGHT - TRENCH_LEFT} height={pipeH} rx={pipeH / 2} fill="#f0c040" />
            <rect x={TRENCH_LEFT + 3} y={pipeTop + 2} width={TRENCH_RIGHT - TRENCH_LEFT - 6} height={pipeH - 4} rx={(pipeH - 4) / 2} fill="#ffe566" opacity="0.5" />
            {/* Tracer wire — full width */}
            <path d={`M8 ${pipeY - 6} Q200 ${pipeY - 12} 392 ${pipeY - 6}`} stroke="#cc3333" strokeWidth="1.2" fill="none" strokeDasharray="4 3" opacity="0.8" />
            {/* Warning tape — full width above pipe */}
            <rect x="0" y={pipeTop - 18} width="400" height="5" fill="#f0c040" opacity="0.35" />
            <rect x={TRENCH_LEFT} y={pipeTop - 18} width={TRENCH_RIGHT - TRENCH_LEFT} height="5" fill="#f0c040" opacity="0.9" />
            <text x="200" y={pipeTop - 14} textAnchor="middle" fontSize="6" fill="#1a1a1a" fontWeight="bold">CAUTION GAS LINE</text>
          </>
        )}

        {type === "electrical" && (
          <>
            {[0, 1, 2, 3].map((i) => {
              const cy = pipeTop + 4 + i * 5.5;
              const h = 4.5;
              return (
                <g key={i}>
                  <rect x="0" y={cy} width={TRENCH_LEFT} height={h} rx="2" fill="#a04e18" opacity="0.45" />
                  <rect x={TRENCH_RIGHT} y={cy} width={400 - TRENCH_RIGHT} height={h} rx="2" fill="#a04e18" opacity="0.45" />
                  <rect x={TRENCH_LEFT} y={cy} width={TRENCH_RIGHT - TRENCH_LEFT} height={h} rx="2" fill="#e87830" />
                  <rect x={TRENCH_LEFT + 2} y={cy + 0.8} width={TRENCH_RIGHT - TRENCH_LEFT - 4} height={h - 1.6} rx="1.5" fill="#1a1a1a" opacity="0.5" />
                </g>
              );
            })}
            {/* Encasement outline in trench */}
            <rect x={TRENCH_LEFT + 2} y={pipeTop} width={TRENCH_RIGHT - TRENCH_LEFT - 4} height={pipeH} rx="3" fill="none" stroke="#8b4049" strokeWidth="1" strokeDasharray="4 3" />
            <rect x="0" y={pipeTop - 14} width="400" height="3" fill="#e87830" opacity="0.25" />
          </>
        )}

        {type === "comm" && (
          <>
            {/* Main fiber conduit — full width */}
            {[0, 1, 2].map((i) => {
              const cy = pipeTop + 2 + i * 3.5;
              const colors = ["#40916c", "#2a4a6f", "#5c9ec4"];
              const dims = ["#2d6a4f", "#1d3557", "#457b9d"];
              return (
                <g key={i}>
                  <rect x="0" y={cy} width={TRENCH_LEFT} height="2.5" rx="1.2" fill={dims[i]} opacity="0.5" />
                  <rect x={TRENCH_RIGHT} y={cy} width={400 - TRENCH_RIGHT} height="2.5" rx="1.2" fill={dims[i]} opacity="0.5" />
                  <rect x={TRENCH_LEFT} y={cy} width={TRENCH_RIGHT - TRENCH_LEFT} height="2.5" rx="1.2" fill={colors[i]} />
                </g>
              );
            })}
            {/* Fiber strands — continuous cable run highlighted in trench */}
            <path
              d={`M0 ${pipeY} C60 ${pipeY - 2} 140 ${pipeY + 2} ${TRENCH_LEFT} ${pipeY} L${TRENCH_RIGHT} ${pipeY} C260 ${pipeY - 2} 340 ${pipeY + 2} 400 ${pipeY}`}
              stroke="#a8dadc"
              strokeWidth="2"
              fill="none"
              opacity="0.9"
            />
            <path
              d={`M0 ${pipeY + 3} C80 ${pipeY + 1} 160 ${pipeY + 5} ${TRENCH_LEFT} ${pipeY + 3} L${TRENCH_RIGHT} ${pipeY + 3} C240 ${pipeY + 1} 320 ${pipeY + 5} 400 ${pipeY + 3}`}
              stroke="#90e0ef"
              strokeWidth="1.2"
              fill="none"
              opacity="0.6"
            />
          </>
        )}
      </g>

      {/* Soil overlay on buried pipe sections (top half buried under earth) */}
      <rect x="0" y={SURFACE_Y} width={TRENCH_LEFT} height={pipeTop - SURFACE_Y} fill="url(#soilGrad)" opacity="0.7" />
      <rect x={TRENCH_RIGHT} y={SURFACE_Y} width={400 - TRENCH_RIGHT} height={pipeTop - SURFACE_Y} fill="url(#soilGrad)" opacity="0.7" />

      {/* Continuation arrows */}
      <text x="28" y={pipeY + 4} fill="#d4a843" fontSize="14" opacity="0.7">◀</text>
      <text x="365" y={pipeY + 4} fill="#d4a843" fontSize="14" opacity="0.7">▶</text>
      <text x="200" y={pipeY + pipeH / 2 + 16} textAnchor="middle" fill="#d4a843" fontSize="7" letterSpacing="1.5" opacity="0.8">
        UTILITY RUNS CONTINUOUSLY ACROSS SITE
      </text>

      {/* Depth dimension */}
      <line x1="370" y1={SURFACE_Y} x2="370" y2={pipeY} stroke="#d4a843" strokeWidth="0.8" opacity="0.5" strokeDasharray="3 2" />
      <line x1="365" y1={SURFACE_Y} x2="375" y2={SURFACE_Y} stroke="#d4a843" strokeWidth="0.8" opacity="0.5" />
      <line x1="365" y1={pipeY} x2="375" y2={pipeY} stroke="#d4a843" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

export function TrenchDepthExplorer() {
  const [active, setActive] = useState<UtilityId>("water");
  const selected = UTILITIES.find((u) => u.id === active)!;

  return (
    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 rounded-2xl border border-border bg-card p-6 lg:p-10">
      <div>
        <div className="flex flex-wrap gap-2">
          {UTILITIES.map((u) => {
            const Icon = u.icon;
            const isOn = u.id === active;
            return (
              <button
                key={u.id}
                type="button"
                onClick={() => setActive(u.id)}
                className={`flex items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition ${
                  isOn
                    ? "border-gold bg-gold/15 text-gold"
                    : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {u.label}
              </button>
            );
          })}
        </div>
        <div className="mt-6 rounded-xl border border-border bg-secondary/40 p-5">
          <p className="font-display text-lg text-gold">{selected.label}</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-muted-foreground">Typical depth</dt>
              <dd className="font-semibold text-foreground">{selected.depth}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Trench width</dt>
              <dd className="font-semibold text-foreground">{selected.width}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{selected.note}</p>
          <p className="mt-3 text-xs text-gold/80 border-t border-border pt-3">{selected.infraLabel}</p>
        </div>
      </div>

      <div className="relative h-80 rounded-xl border border-border overflow-hidden bg-charcoal">
        <UndergroundCrossSection type={active} />
        <p className="absolute bottom-2 inset-x-3 text-center text-[10px] text-muted-foreground z-10">
          Cross-section view — pipe or cable runs edge to edge; open trench exposes the line for tie-in or inspection
        </p>
      </div>
    </div>
  );
}
