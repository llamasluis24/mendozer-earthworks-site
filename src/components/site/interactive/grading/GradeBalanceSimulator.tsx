import { useMemo, useState } from "react";
import { ArrowDownToLine, ArrowUpFromLine, Minus, Truck } from "lucide-react";

const PRESETS = [
  { label: "Export cut", value: -4 },
  { label: "Balanced pad", value: 0 },
  { label: "Import fill", value: 4 },
] as const;

const ACRES = 2.5;
const CY_PER_FT = ACRES * 1613;

const PX_PER_FT = 5.5;
const GROUND_Y = 148;
const PAD_L = 118;
const PAD_R = 282;
const SLOPE_OUT = 28;

/**
 * Mass-graded site view — one pad footprint, flat top surface moves vertically.
 * Fill/cut volume grows between fixed side walls (not shrinking stacked layers).
 */
function GradingTerrain({ balance }: { balance: number }) {
  const isExport = balance < 0;
  const isImport = balance > 0;
  const mag = Math.abs(balance);
  const depthPx = mag * PX_PER_FT;
  const padY = GROUND_Y - balance * PX_PER_FT;
  const truckCount = Math.min(4, Math.ceil(mag / 2));

  const slopeDrop = Math.min(depthPx * 0.45, 18);
  const outerL = PAD_L - SLOPE_OUT;
  const outerR = PAD_R + SLOPE_OUT;
  const equipX = isImport ? [228, 260, 288] : [36, 68, 96];
  const equipW = [30, 24, 22];

  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6ba3c7" />
          <stop offset="100%" stopColor="#c9b896" />
        </linearGradient>
        <linearGradient id="fieldSoil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9a7b4f" />
          <stop offset="100%" stopColor="#5c4228" />
        </linearGradient>
        <linearGradient id="importFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4b896" />
          <stop offset="100%" stopColor="#8b6840" />
        </linearGradient>
        <linearGradient id="cutFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b4e30" />
          <stop offset="100%" stopColor="#3a2818" />
        </linearGradient>
        <pattern id="cutHatch" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#d4a843" strokeWidth="1" opacity="0.35" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="400" height="72" fill="url(#skyGrad)" />
      <rect x="0" y="72" width="400" height="148" fill="url(#fieldSoil)" />

      <line x1="0" y1={GROUND_Y} x2={outerL} y2={GROUND_Y} stroke="#7a5c38" strokeWidth="2" opacity="0.6" />
      <line x1={outerR} y1={GROUND_Y} x2="400" y2={GROUND_Y} stroke="#7a5c38" strokeWidth="2" opacity="0.6" />
      <text x="12" y={GROUND_Y - 6} fill="#c9b896" fontSize="7" letterSpacing="1" opacity="0.7">
        EXISTING GRADE
      </text>

      {isExport && depthPx > 0 && (
        <g className="transition-all duration-500 ease-out">
          <path
            d={`M${PAD_L} ${GROUND_Y} L${PAD_L} ${padY} L${PAD_R} ${padY} L${PAD_R} ${GROUND_Y} Z`}
            fill="url(#cutFace)"
          />
          <path
            d={`M${PAD_L} ${GROUND_Y} L${PAD_L} ${padY} L${PAD_R} ${padY} L${PAD_R} ${GROUND_Y} Z`}
            fill="url(#cutHatch)"
            opacity="0.5"
          />
          <line x1={PAD_L} y1={GROUND_Y} x2={PAD_L} y2={padY} stroke="#4a3520" strokeWidth="1.5" opacity="0.8" />
          <line x1={PAD_R} y1={GROUND_Y} x2={PAD_R} y2={padY} stroke="#4a3520" strokeWidth="1.5" opacity="0.8" />
        </g>
      )}

      {isImport && depthPx > 0 && (
        <g className="transition-all duration-500 ease-out">
          <path
            d={`M${PAD_L} ${GROUND_Y} L${PAD_L} ${padY} L${PAD_R} ${padY} L${PAD_R} ${GROUND_Y} Z`}
            fill="url(#importFill)"
          />
          <line x1={PAD_L} y1={GROUND_Y} x2={PAD_L} y2={padY} stroke="#a08055" strokeWidth="1.5" opacity="0.7" />
          <line x1={PAD_R} y1={GROUND_Y} x2={PAD_R} y2={padY} stroke="#a08055" strokeWidth="1.5" opacity="0.7" />
        </g>
      )}

      {mag > 0 && (
        <g className="transition-all duration-500 ease-out">
          <path
            d={`M${outerL} ${GROUND_Y} L${PAD_L} ${padY + slopeDrop} L${PAD_L} ${isExport ? GROUND_Y : padY} Z`}
            fill={isImport ? "#b8956a" : "#4a3520"}
            opacity={isImport ? 0.85 : 0.7}
          />
          <path
            d={`M${outerR} ${GROUND_Y} L${PAD_R} ${padY + slopeDrop} L${PAD_R} ${isExport ? GROUND_Y : padY} Z`}
            fill={isImport ? "#b8956a" : "#4a3520"}
            opacity={isImport ? 0.85 : 0.7}
          />
        </g>
      )}

      <rect
        x={PAD_L}
        y={padY}
        width={PAD_R - PAD_L}
        height={4}
        fill="#d4a843"
        className="transition-all duration-500 ease-out"
      />
      <line
        x1={PAD_L}
        y1={padY}
        x2={PAD_R}
        y2={padY}
        stroke="#f0d060"
        strokeWidth="1"
        opacity="0.6"
        className="transition-all duration-500 ease-out"
      />
      <text
        x={200}
        y={padY - 7}
        textAnchor="middle"
        fill="#d4a843"
        fontSize="8"
        fontWeight="bold"
        letterSpacing="1.5"
        className="transition-all duration-500 ease-out"
      >
        FINISHED PAD
      </text>

      {[138, 168, 198, 228, 258].map((x) => (
        <ellipse
          key={x}
          cx={x}
          cy={padY - 1}
          rx="14"
          ry={mag <= 1.5 ? 3 : 1.5}
          fill="#b8956a"
          opacity={mag <= 1.5 ? 0.55 : 0.25}
          className="transition-all duration-500 ease-out"
        />
      ))}

      <path d="M 30 160 Q 50 158 70 160" fill="none" stroke="#4a3520" strokeWidth="1.5" opacity="0.25" />
      <path d="M 330 165 Q 350 163 370 165" fill="none" stroke="#4a3520" strokeWidth="1.5" opacity="0.25" />

      {mag > 0 && (
        <g className="transition-all duration-500 ease-out">
          <line x1="88" y1={GROUND_Y} x2="88" y2={padY} stroke="#d4a843" strokeWidth="1.2" />
          <polygon points={`85,${GROUND_Y} 91,${GROUND_Y} 88,${GROUND_Y + (isImport ? -4 : 4)}`} fill="#d4a843" />
          <polygon points={`85,${padY} 91,${padY} 88,${padY + (isImport ? 4 : -4)}`} fill="#d4a843" />
          <text
            x="76"
            y={(GROUND_Y + padY) / 2 + 3}
            textAnchor="middle"
            fill="#d4a843"
            fontSize="9"
            fontWeight="bold"
            transform={`rotate(-90 76 ${(GROUND_Y + padY) / 2})`}
          >
            {mag.toFixed(1)} ft
          </text>
        </g>
      )}

      <g
        transform={`translate(${isImport ? equipX[0] + equipW[0] : equipX[0]}, ${padY - 30})${isImport ? " scale(-1,1)" : ""}`}
        className="transition-all duration-500 ease-out"
      >
        <rect x="0" y="14" width="30" height="11" rx="2" fill="#e8b020" />
        <rect x="4" y="8" width="16" height="8" rx="1" fill="#f0c040" />
        <rect x="24" y="16" width="11" height="6" rx="1" fill="#3d3d3d" />
        <circle cx="7" cy="27" r="3.5" fill="#1a1a1a" />
        <circle cx="22" cy="27" r="3.5" fill="#1a1a1a" />
      </g>
      <g
        transform={`translate(${isImport ? equipX[1] + equipW[1] : equipX[1]}, ${padY - 26})${isImport ? " scale(-1,1)" : ""}`}
        className="transition-all duration-500 ease-out"
      >
        <rect x="0" y="12" width="24" height="9" rx="2" fill="#e8b020" />
        <path d="M10 4 L22 -2 L24 4 L12 12 Z" fill="#3d3d3d" />
        <circle cx="6" cy="23" r="3" fill="#1a1a1a" />
        <circle cx="18" cy="23" r="3" fill="#1a1a1a" />
      </g>
      <g
        transform={`translate(${isImport ? equipX[2] + equipW[2] : equipX[2]}, ${padY - 24})${isImport ? " scale(-1,1)" : ""}`}
        className="transition-all duration-500 ease-out"
      >
        <rect x="0" y="10" width="22" height="9" rx="2" fill="#e8b020" />
        <path d="M8 3 L18 -3 L20 3 L10 10 Z" fill="#3d3d3d" />
        <circle cx="5" cy="21" r="3" fill="#1a1a1a" />
        <circle cx="16" cy="21" r="3" fill="#1a1a1a" />
      </g>

      <rect x="0" y="100" width="52" height="10" rx="2" fill="#5a5a5a" opacity="0.25" />
      <rect x="348" y="100" width="52" height="10" rx="2" fill="#5a5a5a" opacity="0.25" />

      {isExport &&
        Array.from({ length: truckCount }).map((_, i) => (
          <g key={`out-${i}`} transform={`translate(${6 + i * 24}, 82)`} opacity={0.9}>
            <rect x="0" y="10" width="18" height="8" rx="1.5" fill="#c45c1a" />
            <rect x="14" y="12" width="9" height="9" rx="1" fill="#a04e18" />
            <circle cx="4" cy="22" r="2.5" fill="#1a1a1a" />
            <circle cx="17" cy="22" r="2.5" fill="#1a1a1a" />
            <text x="11" y="8" textAnchor="middle" fill="#fff" fontSize="4" fontWeight="bold">OUT</text>
          </g>
        ))}

      {isImport &&
        Array.from({ length: truckCount }).map((_, i) => (
          <g key={`in-${i}`} transform={`translate(${352 - i * 24}, 82)`} opacity={0.9}>
            <rect x="0" y="10" width="18" height="8" rx="1.5" fill="#2b7ab0" />
            <rect x="14" y="12" width="9" height="9" rx="1" fill="#1e5a7a" />
            <circle cx="4" cy="22" r="2.5" fill="#1a1a1a" />
            <circle cx="17" cy="22" r="2.5" fill="#1a1a1a" />
            <text x="11" y="8" textAnchor="middle" fill="#fff" fontSize="4" fontWeight="bold">IN</text>
          </g>
        ))}

      {(() => {
        const badge = isExport
          ? { lines: ["EXPORTING", "HAUL OFF-SITE"] as const, width: 118, height: 28 }
          : isImport
            ? { lines: ["IMPORTING", "BUILD PAD"] as const, width: 118, height: 28 }
            : { lines: ["BALANCED", "AT DESIGN ELEVATION"] as const, width: 132, height: 28 };
        const badgeX = 200 - badge.width / 2;

        return (
          <>
            <rect
              x={badgeX}
              y={10}
              width={badge.width}
              height={badge.height}
              rx={badge.height / 2}
              fill="rgba(20,14,6,0.75)"
              stroke="#d4a843"
              strokeWidth="0.8"
            />
            <text
              x="200"
              y={22}
              textAnchor="middle"
              fill="#d4a843"
              fontSize="7"
              fontWeight="bold"
              letterSpacing="0.5"
            >
              <tspan x="200" dy="0">
                {badge.lines[0]}
              </tspan>
              <tspan x="200" dy="9">
                {badge.lines[1]}
              </tspan>
            </text>
          </>
        );
      })()}
    </svg>
  );
}

export function GradeBalanceSimulator() {
  const [balance, setBalance] = useState(0);

  const stats = useMemo(() => {
    const isExport = balance < 0;
    const isImport = balance > 0;
    const mag = Math.abs(balance);
    const cy = Math.round(mag * CY_PER_FT);
    const exportLoads = isExport ? Math.round(mag * 18) : 0;
    const importLoads = isImport ? Math.round(mag * 22) : 0;
    const padReady = mag <= 0.5;

    return { isExport, isImport, mag, cy, exportLoads, importLoads, padReady };
  }, [balance]);

  const nudge = (delta: number) =>
    setBalance((b) => Math.min(8, Math.max(-8, Math.round((b + delta) * 2) / 2)));

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="relative bg-[#3a2818]/30 min-h-[240px] lg:min-h-[280px]">
        <GradingTerrain balance={balance} />
      </div>

      <div className="p-6 lg:p-8 border-t border-border bg-secondary/20">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-wider mb-4">
          Move dirt on or off site to hit design pad elevation
        </p>

        <div className="flex items-center justify-center gap-3 max-w-lg mx-auto">
          <button
            type="button"
            onClick={() => nudge(-1)}
            disabled={balance <= -8}
            className="flex flex-col items-center gap-1.5 rounded-xl border-2 border-orange-500/50 bg-orange-500/10 px-5 py-4 hover:bg-orange-500/20 hover:border-orange-500 transition disabled:opacity-30 min-w-[120px]"
          >
            <ArrowDownToLine className="h-7 w-7 text-orange-400" />
            <span className="text-sm font-semibold text-orange-300 uppercase tracking-wider">Export</span>
            <span className="text-[10px] text-muted-foreground">Haul off-site</span>
          </button>

          <div className="flex flex-col items-center px-4 min-w-[100px]">
            <span className="text-3xl font-display text-foreground tabular-nums">
              {balance > 0 ? "+" : ""}{balance.toFixed(1)}
            </span>
            <span className="text-xs text-muted-foreground mt-1">ft vs design</span>
            {stats.padReady && (
              <span className="mt-2 rounded-full bg-gold/20 border border-gold/40 px-2 py-0.5 text-[10px] text-gold font-semibold uppercase">
                Pad ready
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => nudge(1)}
            disabled={balance >= 8}
            className="flex flex-col items-center gap-1.5 rounded-xl border-2 border-sky-500/50 bg-sky-500/10 px-5 py-4 hover:bg-sky-500/20 hover:border-sky-500 transition disabled:opacity-30 min-w-[120px]"
          >
            <ArrowUpFromLine className="h-7 w-7 text-sky-400" />
            <span className="text-sm font-semibold text-sky-300 uppercase tracking-wider">Import</span>
            <span className="text-[10px] text-muted-foreground">Bring on-site</span>
          </button>
        </div>

        <div className="mt-6 max-w-md mx-auto">
          <input
            id="grade-slider"
            type="range"
            min={-8}
            max={8}
            step={0.5}
            value={balance}
            onChange={(e) => setBalance(Number(e.target.value))}
            className="w-full accent-gold cursor-pointer"
          />
          <div className="mt-1 flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider">
            <span className="flex items-center gap-1"><ArrowDownToLine className="h-3 w-3" /> Max export</span>
            <span className="flex items-center gap-1"><Minus className="h-3 w-3" /> Balanced</span>
            <span className="flex items-center gap-1"><ArrowUpFromLine className="h-3 w-3" /> Max import</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setBalance(p.value)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                balance === p.value
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/40"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          <div className={`rounded-lg border px-4 py-3 text-center transition ${stats.isExport ? "border-orange-500/40 bg-orange-500/10" : "border-border bg-card/50"}`}>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Exported</p>
            <p className="text-xl font-display text-foreground mt-1">
              {stats.isExport ? stats.cy.toLocaleString() : "0"}
              <span className="text-xs font-sans text-muted-foreground ml-1">CY</span>
            </p>
            {stats.exportLoads > 0 && (
              <p className="text-xs text-orange-300 mt-1 flex items-center justify-center gap-1">
                <Truck className="h-3 w-3" /> {stats.exportLoads} loads out
              </p>
            )}
          </div>
          <div className={`rounded-lg border px-4 py-3 text-center transition ${!stats.isExport && !stats.isImport ? "border-gold/40 bg-gold/10" : "border-border bg-card/50"}`}>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Net balance</p>
            <p className="text-xl font-display text-foreground mt-1">
              {balance > 0 ? "+" : ""}{balance.toFixed(1)}
              <span className="text-xs font-sans text-muted-foreground ml-1">ft</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">{ACRES}-acre parcel</p>
          </div>
          <div className={`rounded-lg border px-4 py-3 text-center transition ${stats.isImport ? "border-sky-500/40 bg-sky-500/10" : "border-border bg-card/50"}`}>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Imported</p>
            <p className="text-xl font-display text-foreground mt-1">
              {stats.isImport ? stats.cy.toLocaleString() : "0"}
              <span className="text-xs font-sans text-muted-foreground ml-1">CY</span>
            </p>
            {stats.importLoads > 0 && (
              <p className="text-xs text-sky-300 mt-1 flex items-center justify-center gap-1">
                <Truck className="h-3 w-3" /> {stats.importLoads} loads in
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
