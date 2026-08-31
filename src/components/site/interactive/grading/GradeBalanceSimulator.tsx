import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  BookOpen,
  Minus,
  Truck,
  AlertTriangle,
  Layers,
} from "lucide-react";
import { EARTHWORK_DISCLAIMER } from "@/data/company";
import {
  TRUCK_CY,
  TRUCK_LABEL,
  SQ_FT_MIN,
  SQ_FT_MAX,
  DEPTH_MIN,
  DEPTH_MAX,
  clampSquareFeet,
  clampDepth,
  calcEarthworkVolumes,
  graphicBalanceFromDepths,
  terrainStatsFromVolumes,
  padWidthFromSquareFeet,
} from "@/lib/earthworkCalc";

/** Smoothly interpolates numeric values so pad width / depth animate instead of snapping. */
function useSmoothValue(target: number, durationMs = 600) {
  const [value, setValue] = useState(target);
  const valueRef = useRef(target);
  const frameRef = useRef(0);

  useEffect(() => {
    const from = valueRef.current;
    const to = target;
    if (Math.abs(from - to) < 0.05) {
      valueRef.current = to;
      setValue(to);
      return;
    }

    const t0 = performance.now();
    cancelAnimationFrame(frameRef.current);

    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / durationMs);
      // Ease-in-out cubic — land mass expands/contracts with weight
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      const next = from + (to - from) * eased;
      valueRef.current = next;
      setValue(next);
      if (p < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        valueRef.current = to;
        setValue(to);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, durationMs]);

  return value;
}

const DEPTH_PRESETS = [
  { label: "4 ft excavation", excavation: 4, import: 0 },
  { label: "2.5 ft import", excavation: 0, import: 2.5 },
  { label: "Balanced pad", excavation: 0, import: 0 },
] as const;

const SOIL_PRESETS = [
  { label: "Clay / wet soils", expansion: 30, shrink: 8 },
  { label: "Mixed native", expansion: 20, shrink: 10 },
  { label: "Sandy / granular", expansion: 12, shrink: 15 },
] as const;

const EDUCATION = [
  {
    id: "expansion",
    title: "Soil Expansion",
    icon: ArrowUpFromLine,
    body: "Clay and wet soils expand when excavated. Material that measures 1,000 bank cubic yards (BCY) in the ground can swell to 1,250–1,350 loose cubic yards (LCY) in the truck depending on moisture and soil type. That difference drives export quantity, haul costs, and disposal fees. Soil type matters — expansive clays and wet silts swell more than granular material.",
    points: [
      "Wet clays and silts swell the most — often 25–35% above bank volume",
      "Expansion increases loose haul quantities and Super 10 load counts",
      "Underestimating swell is one of the most common earthwork change-order triggers",
    ],
  },
  {
    id: "shrinkage",
    title: "Soil Shrinkage",
    icon: ArrowDownToLine,
    body: "Sandy and granular import fills shrink when compacted to specified density. You may need more loose yards delivered than the compacted volume shown on the grading plan. Shrink factors affect import quantities, trucking, and structural fill budgets.",
    points: [
      "Compacted fill volume (CCY) is less than loose material delivered (LCY)",
      "Shrink factors typically range 8–15% for structural fill imports",
      "Moisture conditioning during compaction affects actual shrink in the field",
    ],
  },
  {
    id: "reports",
    title: "Geotechnical Reports",
    icon: BookOpen,
    body: "Professional estimators rely on geotechnical reports to determine expected expansion and shrink factors before calculating export and import quantities. Soils engineers identify unsuitable material, over-excavation depths, compaction requirements, and recommended swell/shrink assumptions for the bid package.",
    points: [
      "Swell and shrink factors should come from the soils report — not guesswork",
      "Over-excavation depths and structural fill specs change cut/fill math",
      "Pre-bid review of geotech data prevents quantity disputes after mobilization",
    ],
  },
  {
    id: "volumes",
    title: "BCY · LCY · CCY",
    icon: Layers,
    body: "Earthwork quantities are measured in three conditions. Bank Cubic Yards (BCY) is material in its natural state in the ground. Loose Cubic Yards (LCY) is excavated material in a truck or stockpile — larger due to swell. Compacted Cubic Yards (CCY) is engineered fill after compaction — smaller than loose due to shrink. Field volumes start with length × width × depth (cut) or fill height, divided by 27 to convert cubic feet to cubic yards.",
    points: [
      "CY = (Length × Width × Depth or Fill Height) ÷ 27",
      "1,000 CY export ≈ 100 Super 10 loads at 10 CY per load",
      "BCY → bank in place · LCY → haul · CCY → compacted fill on pad",
    ],
  },
  {
    id: "changeorders",
    title: "Change Orders",
    icon: AlertTriangle,
    body: "Inaccurate soil assumptions lead to underestimated export, additional trucking, and change orders after construction begins. Experienced earthwork contractors account for expansion, shrink, haul distance, and geotechnical requirements during preconstruction — not after the first inspection hold.",
    points: [
      "Low export estimates create trucking and disposal cost overruns",
      "Import fill shortfalls delay compaction and pad certification",
      "Documented assumptions in the bid package protect both contractor and GC",
    ],
  },
] as const;

type EduId = (typeof EDUCATION)[number]["id"];

type TerrainStats = {
  isExport: boolean;
  isImport: boolean;
  mag: number;
  bcy: number;
  lcyExport: number;
  ccyImport: number;
  lcyImport: number;
  exportLoads: number;
  importLoads: number;
  naiveLoads: number;
};

const PX_PER_FT = 5.5;
const GROUND_Y = 148;
const SLOPE_OUT = 28;
/** Bottom strip for import / hint callouts */
const CALLOUT_Y = 168;
/** Sky-area callout for export overlays — above the excavation pit */
const EXPORT_CALLOUT_Y = 48;
const EXPORT_TRUCK_Y = 36;
const CALLOUT_W = 216;
const CALLOUT_X = 200 - CALLOUT_W / 2;
const VIEW_CX = 200;

function exportCalloutY(padY: number) {
  return Math.min(EXPORT_CALLOUT_Y, Math.max(42, padY - 56));
}

function CalloutBox({
  x,
  y,
  width,
  height,
  stroke,
  fill = "rgba(20,14,6,0.92)",
  children,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  stroke: string;
  fill?: string;
  children: ReactNode;
}) {
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={6} fill={fill} stroke={stroke} strokeWidth="0.8" />
      {children}
    </g>
  );
}

function CalloutTitle({ x, y, fill, children }: { x: number; y: number; fill: string; children: ReactNode }) {
  return (
    <text x={x} y={y} textAnchor="middle" fill={fill} fontSize="6.5" fontWeight="bold" letterSpacing="0.4">
      {children}
    </text>
  );
}

function CalloutLine({ x, y, fill, size = 6.5, children }: { x: number; y: number; fill: string; size?: number; children: ReactNode }) {
  return (
    <text x={x} y={y} textAnchor="middle" fill={fill} fontSize={size}>
      {children}
    </text>
  );
}

function Bulldozer({ x, y, flip = false }: { x: number; y: number; flip?: boolean }) {
  return (
    <g transform={`translate(${x}, ${y})${flip ? " scale(-1,1)" : ""}`}>
      <rect x="-2" y="18" width="34" height="5" rx="1" fill="#2a2a2a" />
      <rect x="0" y="14" width="30" height="11" rx="2" fill="#e8b020" stroke="#c99200" strokeWidth="0.5" />
      <rect x="4" y="7" width="14" height="9" rx="1" fill="#f5d060" stroke="#c99200" strokeWidth="0.4" />
      <rect x="24" y="16" width="12" height="7" rx="1" fill="#3d3d3d" />
      <rect x="30" y="12" width="3" height="8" fill="#555" />
      <circle cx="7" cy="27" r="4" fill="#1a1a1a" stroke="#444" strokeWidth="0.6" />
      <circle cx="7" cy="27" r="1.5" fill="#666" />
      <circle cx="22" cy="27" r="4" fill="#1a1a1a" stroke="#444" strokeWidth="0.6" />
      <circle cx="22" cy="27" r="1.5" fill="#666" />
      <rect x="32" y="10" width="5" height="10" rx="0.5" fill="#888" />
    </g>
  );
}

function Excavator({ x, y, flip = false, size = 1 }: { x: number; y: number; flip?: boolean; size?: number }) {
  const s = size;
  return (
    <g transform={`translate(${x}, ${y}) scale(${flip ? -s : s}, ${s})`}>
      <rect x="0" y="12" width="24" height="9" rx="2" fill="#e8b020" stroke="#c99200" strokeWidth="0.5" />
      <rect x="3" y="6" width="10" height="8" rx="1" fill="#f5d060" />
      <path d="M10 4 L22 -2 L24 4 L12 12 Z" fill="#3d3d3d" stroke="#555" strokeWidth="0.4" />
      <path d="M22 2 L30 8 L28 10 L20 4 Z" fill="#555" />
      <path d="M28 8 L32 12 L30 14 L26 10 Z" fill="#777" />
      <circle cx="6" cy="23" r="3.2" fill="#1a1a1a" stroke="#444" strokeWidth="0.5" />
      <circle cx="18" cy="23" r="3.2" fill="#1a1a1a" stroke="#444" strokeWidth="0.5" />
    </g>
  );
}

function Compactor({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="0" y="10" width="20" height="8" rx="2" fill="#d4a843" stroke="#b8922f" strokeWidth="0.5" />
      <rect x="3" y="5" width="8" height="7" rx="1" fill="#f0d060" />
      <rect x="12" y="6" width="7" height="12" rx="3" fill="#666" stroke="#888" strokeWidth="0.4" />
      <circle cx="5" cy="20" r="2.8" fill="#1a1a1a" />
      <circle cx="15" cy="20" r="2.8" fill="#1a1a1a" />
    </g>
  );
}

function HaulTruck({ x, y, direction }: { x: number; y: number; direction: "out" | "in" }) {
  const fill = direction === "out" ? "#c45c1a" : "#2b7ab0";
  const bed = direction === "out" ? "#a04e18" : "#1e5a7a";
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x="0" y="10" width="20" height="9" rx="1.5" fill={fill} stroke="#fff" strokeWidth="0.3" opacity="0.95" />
      <rect x="15" y="11" width="11" height="10" rx="1" fill={bed} />
      <rect x="16" y="12" width="9" height="4" rx="0.5" fill={direction === "out" ? "#8b4010" : "#164a66"} opacity="0.6" />
      <circle cx="4" cy="22" r="2.8" fill="#1a1a1a" stroke="#444" strokeWidth="0.4" />
      <circle cx="18" cy="22" r="2.8" fill="#1a1a1a" stroke="#444" strokeWidth="0.4" />
      <text x="10" y="8" textAnchor="middle" fill="#fff" fontSize="4.5" fontWeight="bold">
        {direction === "out" ? "OUT" : "IN"}
      </text>
    </g>
  );
}

function GraphicOverlay({
  eduId,
  stats,
  expansionPct,
  shrinkPct,
  padY,
  padL,
  padR,
  isExport,
  isImport,
  exportBcy,
  hasExportVolumes,
  hasImportVolumes,
  hasDualVolumes,
}: {
  eduId: EduId;
  stats: TerrainStats;
  expansionPct: number;
  shrinkPct: number;
  padY: number;
  padL: number;
  padR: number;
  isExport: boolean;
  isImport: boolean;
  exportBcy: number;
  hasExportVolumes: boolean;
  hasImportVolumes: boolean;
  hasDualVolumes: boolean;
}) {
  const cx = VIEW_CX;

  if (eduId === "expansion" && isExport && stats.mag > 0) {
    const calloutY = exportCalloutY(padY);
    return (
      <g>
        <path d={`M${padL + 24} ${padY + 6} L${padL + 24} ${calloutY + 40}`} stroke="#f97316" strokeWidth="1.2" markerEnd="url(#arrowUp)" />
        <path d={`M${padR - 24} ${padY + 6} L${padR - 24} ${calloutY + 40}`} stroke="#f97316" strokeWidth="1.2" markerEnd="url(#arrowUp)" />
        <CalloutBox x={CALLOUT_X} y={calloutY} width={CALLOUT_W} height={40} stroke="#f97316">
          <CalloutTitle x={cx} y={calloutY + 13} fill="#fdba74">SWELL ON EXCAVATION</CalloutTitle>
          <CalloutLine x={cx} y={calloutY + 26} fill="#fff" size={7}>
            {stats.bcy.toLocaleString()} BCY → {stats.lcyExport.toLocaleString()} LCY
          </CalloutLine>
          <CalloutLine x={cx} y={calloutY + 36} fill="#fdba74" size={6}>
            +{expansionPct}% expansion increases haul quantities
          </CalloutLine>
        </CalloutBox>
      </g>
    );
  }

  if (eduId === "shrinkage" && isImport && stats.mag > 0) {
    return (
      <g>
        <path d={`M${padL + 36} ${padY - 4} L${padL + 36} ${padY + 12}`} stroke="#38bdf8" strokeWidth="1.2" markerEnd="url(#arrowDown)" />
        <CalloutBox x={CALLOUT_X} y={CALLOUT_Y} width={CALLOUT_W} height={40} stroke="#38bdf8">
          <CalloutTitle x={cx} y={CALLOUT_Y + 13} fill="#7dd3fc">SHRINK ON COMPACTION</CalloutTitle>
          <CalloutLine x={cx} y={CALLOUT_Y + 26} fill="#fff" size={7}>
            {stats.lcyImport.toLocaleString()} LCY → {stats.ccyImport.toLocaleString()} CCY
          </CalloutLine>
          <CalloutLine x={cx} y={CALLOUT_Y + 36} fill="#7dd3fc" size={6}>
            −{shrinkPct}% shrink on structural fill import
          </CalloutLine>
        </CalloutBox>
      </g>
    );
  }

  if (eduId === "reports") {
    return (
      <g>
        <rect x="288" y="78" width="96" height="58" rx="5" fill="rgba(255,255,255,0.94)" stroke="#d4a843" strokeWidth="1" />
        <rect x="294" y="84" width="84" height="5" rx="1" fill="#d4a843" opacity="0.45" />
        <CalloutTitle x={336} y={100} fill="#3a2818">GEOTECH REPORT</CalloutTitle>
        <CalloutLine x={336} y={112} fill="#5c4228" size={5.5}>Swell {expansionPct}% · Shrink {shrinkPct}%</CalloutLine>
        <CalloutLine x={336} y={122} fill="#5c4228" size={5.5}>Over-excavation depth</CalloutLine>
        <CalloutLine x={336} y={132} fill="#5c4228" size={5.5}>Compaction specification</CalloutLine>
        <line x1="288" y1="108" x2={padR - 8} y2={padY + 2} stroke="#d4a843" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.65" />
      </g>
    );
  }

  if (eduId === "volumes" && (stats.mag > 0 || hasDualVolumes)) {
    const lineCount =
      (hasExportVolumes ? 2 : 0) + (hasImportVolumes ? 2 : 0) + (hasDualVolumes ? 1 : 0);
    const boxH = 18 + Math.max(lineCount, 2) * 10;
    return (
      <g>
        <CalloutBox x={10} y={78} width={96} height={boxH} stroke="#d4a843">
          <CalloutTitle x={58} y={92} fill="#d4a843">VOLUME TYPES</CalloutTitle>
          {hasExportVolumes && (
            <CalloutLine x={58} y={104} fill="#fdba74" size={5.5}>
              Export BCY: {exportBcy.toLocaleString()}
            </CalloutLine>
          )}
          {hasExportVolumes && (
            <CalloutLine x={58} y={114} fill="#fff" size={5.5}>
              Export LCY: {stats.lcyExport.toLocaleString()}
            </CalloutLine>
          )}
          {hasImportVolumes && (
            <CalloutLine x={58} y={hasExportVolumes ? 124 : 104} fill="#7dd3fc" size={5.5}>
              Import CCY: {stats.ccyImport.toLocaleString()}
            </CalloutLine>
          )}
          {hasImportVolumes && (
            <CalloutLine x={58} y={hasExportVolumes ? 134 : 114} fill="#fff" size={5.5}>
              Import LCY: {stats.lcyImport.toLocaleString()}
            </CalloutLine>
          )}
        </CalloutBox>
      </g>
    );
  }

  if (eduId === "changeorders" && isExport && stats.mag > 0 && stats.exportLoads > stats.naiveLoads) {
    const calloutY = exportCalloutY(padY);
    return (
      <CalloutBox x={CALLOUT_X} y={calloutY} width={CALLOUT_W} height={44} stroke="#ef4444" fill="rgba(120,40,20,0.92)">
        <CalloutTitle x={cx} y={calloutY + 13} fill="#fca5a5">CHANGE ORDER RISK</CalloutTitle>
        <CalloutLine x={cx} y={calloutY + 26} fill="#fff" size={6.5}>
          Naive: {stats.naiveLoads} loads · Actual: {stats.exportLoads} loads
        </CalloutLine>
        <CalloutLine x={cx} y={calloutY + 37} fill="#fecaca" size={6}>
          +{stats.exportLoads - stats.naiveLoads} extra hauls without swell factor
        </CalloutLine>
      </CalloutBox>
    );
  }

  if (eduId === "changeorders") {
    return (
      <CalloutBox x={CALLOUT_X} y={CALLOUT_Y} width={CALLOUT_W} height={36} stroke="#ef4444" fill="rgba(120,40,20,0.9)">
        <CalloutTitle x={cx} y={CALLOUT_Y + 13} fill="#fca5a5">DOCUMENT BID ASSUMPTIONS</CalloutTitle>
        <CalloutLine x={cx} y={CALLOUT_Y + 26} fill="#fff" size={6}>
          Select export cut to see haul variance on graphic
        </CalloutLine>
      </CalloutBox>
    );
  }

  if (eduId === "expansion" && !isExport) {
    return (
      <CalloutBox x={CALLOUT_X} y={CALLOUT_Y} width={CALLOUT_W} height={36} stroke="#f97316">
        <CalloutTitle x={cx} y={CALLOUT_Y + 13} fill="#fdba74">SOIL EXPANSION</CalloutTitle>
        <CalloutLine x={cx} y={CALLOUT_Y + 26} fill="#fdba74" size={6}>
          Select export cut to visualize swell on haul quantities
        </CalloutLine>
      </CalloutBox>
    );
  }

  if (eduId === "shrinkage" && !isImport) {
    return (
      <CalloutBox x={CALLOUT_X} y={CALLOUT_Y} width={CALLOUT_W} height={36} stroke="#38bdf8">
        <CalloutTitle x={cx} y={CALLOUT_Y + 13} fill="#7dd3fc">SOIL SHRINKAGE</CalloutTitle>
        <CalloutLine x={cx} y={CALLOUT_Y + 26} fill="#7dd3fc" size={6}>
          Select import fill to visualize shrink on compaction
        </CalloutLine>
      </CalloutBox>
    );
  }

  return null;
}

function GradingTerrain({
  balance,
  squareFeet,
  eduId,
  stats,
  expansionPct,
  shrinkPct,
  exportBcy,
  hasExportVolumes,
  hasImportVolumes,
  hasDualVolumes,
}: {
  balance: number;
  squareFeet: number;
  eduId: EduId;
  stats: TerrainStats;
  expansionPct: number;
  shrinkPct: number;
  exportBcy: number;
  hasExportVolumes: boolean;
  hasImportVolumes: boolean;
  hasDualVolumes: boolean;
}) {
  const isExport = balance < 0;
  const isImport = balance > 0;
  const mag = Math.abs(balance);
  const depthPx = mag * PX_PER_FT;

  // Animate land-mass width + pad elevation so area changes feel physical, not snapped.
  const targetPadWidth = padWidthFromSquareFeet(squareFeet);
  const padWidth = useSmoothValue(targetPadWidth, 650);
  const targetPadY = GROUND_Y - balance * PX_PER_FT;
  const padY = useSmoothValue(targetPadY, 500);

  const padL = VIEW_CX - padWidth / 2;
  const padR = VIEW_CX + padWidth / 2;
  const loads = isExport ? stats.exportLoads : isImport ? stats.importLoads : 0;
  const truckCount = Math.min(4, Math.max(1, Math.ceil(loads / 40) || Math.ceil(mag / 2)));
  const slopeDrop = Math.min(depthPx * 0.45, 18);
  const outerL = padL - SLOPE_OUT;
  const outerR = padR + SLOPE_OUT;
  /** Keep machines on pad edges — never stacked over center label */
  const leftEquipX = padL + 6;
  const rightEquipX = padR - 58;
  const depthDimX = Math.max(28, padL - 16);
  const padLabelW = Math.min(padWidth - 8, 72);
  const areaLabel = `${squareFeet.toLocaleString()} sq ft`;
  const areaLabelW = Math.max(70, areaLabel.length * 4.2 + 12);

  const padSurfaceMarks = (() => {
    const count = Math.max(3, Math.min(7, Math.round(padWidth / 36)));
    const step = padWidth / (count + 1);
    return Array.from({ length: count }, (_, i) => padL + step * (i + 1));
  })();

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
        <linearGradient id="landMassGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4a843" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#d4a843" stopOpacity="0.05" />
        </linearGradient>
        <pattern id="cutHatch" width="5" height="5" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#d4a843" strokeWidth="1" opacity="0.35" />
        </pattern>
        <marker id="arrowUp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,6 L3,0 L6,6 Z" fill="#f97316" />
        </marker>
        <marker id="arrowDown" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L3,6 L6,0 Z" fill="#38bdf8" />
        </marker>
      </defs>

      <rect x="0" y="0" width="400" height="72" fill="url(#skyGrad)" />
      <rect x="0" y="72" width="400" height="148" fill="url(#fieldSoil)" />

      {/* Soft land-mass footprint — expands/contracts with sq ft under the pad */}
      <rect
        x={padL}
        y={Math.min(GROUND_Y, padY)}
        width={padWidth}
        height={Math.abs(GROUND_Y - padY) + 28}
        fill="url(#landMassGlow)"
        opacity={0.55}
      />

      <line x1="0" y1={GROUND_Y} x2={outerL} y2={GROUND_Y} stroke="#7a5c38" strokeWidth="2" opacity="0.6" />
      <line x1={outerR} y1={GROUND_Y} x2="400" y2={GROUND_Y} stroke="#7a5c38" strokeWidth="2" opacity="0.6" />
      <text x="12" y={GROUND_Y - 6} fill="#c9b896" fontSize="7" letterSpacing="1" opacity="0.7">
        EXISTING GRADE
      </text>

      {isExport && depthPx > 0 && (
        <g>
          <path d={`M${padL} ${GROUND_Y} L${padL} ${padY} L${padR} ${padY} L${padR} ${GROUND_Y} Z`} fill="url(#cutFace)" />
          <path d={`M${padL} ${GROUND_Y} L${padL} ${padY} L${padR} ${padY} L${padR} ${GROUND_Y} Z`} fill="url(#cutHatch)" opacity="0.5" />
          <line x1={padL} y1={GROUND_Y} x2={padL} y2={padY} stroke="#4a3520" strokeWidth="1.5" opacity="0.8" />
          <line x1={padR} y1={GROUND_Y} x2={padR} y2={padY} stroke="#4a3520" strokeWidth="1.5" opacity="0.8" />
        </g>
      )}

      {isImport && depthPx > 0 && (
        <g>
          <path d={`M${padL} ${GROUND_Y} L${padL} ${padY} L${padR} ${padY} L${padR} ${GROUND_Y} Z`} fill="url(#importFill)" />
          <line x1={padL} y1={GROUND_Y} x2={padL} y2={padY} stroke="#a08055" strokeWidth="1.5" opacity="0.7" />
          <line x1={padR} y1={GROUND_Y} x2={padR} y2={padY} stroke="#a08055" strokeWidth="1.5" opacity="0.7" />
        </g>
      )}

      {mag > 0 && (
        <g>
          <path d={`M${outerL} ${GROUND_Y} L${padL} ${padY + slopeDrop} L${padL} ${isExport ? GROUND_Y : padY} Z`} fill={isImport ? "#b8956a" : "#4a3520"} opacity={isImport ? 0.85 : 0.7} />
          <path d={`M${outerR} ${GROUND_Y} L${padR} ${padY + slopeDrop} L${padR} ${isExport ? GROUND_Y : padY} Z`} fill={isImport ? "#b8956a" : "#4a3520"} opacity={isImport ? 0.85 : 0.7} />
        </g>
      )}

      <rect x={padL} y={padY} width={padWidth} height="4" fill="#d4a843" />
      <line x1={padL} y1={padY} x2={padR} y2={padY} stroke="#f0d060" strokeWidth="1" opacity="0.6" />

      {padSurfaceMarks.map((x) => (
        <ellipse
          key={Math.round(x * 10)}
          cx={x}
          cy={padY - 1}
          rx="14"
          ry={mag <= 1.5 ? 3 : 1.5}
          fill="#b8956a"
          opacity={mag <= 1.5 ? 0.55 : 0.25}
        />
      ))}

      <path d="M 30 160 Q 50 158 70 160" fill="none" stroke="#4a3520" strokeWidth="1.5" opacity="0.25" />
      <path d="M 330 165 Q 350 163 370 165" fill="none" stroke="#4a3520" strokeWidth="1.5" opacity="0.25" />
      <rect x="0" y="100" width="52" height="10" rx="2" fill="#5a5a5a" opacity="0.25" />
      <rect x="348" y="100" width="52" height="10" rx="2" fill="#5a5a5a" opacity="0.25" />

      {mag > 0 && (
        <g>
          <line x1={depthDimX} y1={GROUND_Y} x2={depthDimX} y2={padY} stroke="#d4a843" strokeWidth="1.2" />
          <polygon points={`${depthDimX - 3},${GROUND_Y} ${depthDimX + 3},${GROUND_Y} ${depthDimX},${GROUND_Y + (isImport ? -4 : 4)}`} fill="#d4a843" />
          <polygon points={`${depthDimX - 3},${padY} ${depthDimX + 3},${padY} ${depthDimX},${padY + (isImport ? 4 : -4)}`} fill="#d4a843" />
          <text
            x={depthDimX - 10}
            y={(GROUND_Y + padY) / 2 + 2}
            textAnchor="middle"
            fill="#d4a843"
            fontSize="8"
            fontWeight="bold"
            transform={`rotate(-90 ${depthDimX - 10} ${(GROUND_Y + padY) / 2})`}
          >
            {mag.toFixed(1)} ft
          </text>
        </g>
      )}

      {/* Project area dimension — land mass width tracks animated pad */}
      <g>
        <line x1={padL} y1={CALLOUT_Y + 8} x2={padR} y2={CALLOUT_Y + 8} stroke="#d4a843" strokeWidth="1.4" />
        <polygon points={`${padL},${CALLOUT_Y + 8} ${padL + 5},${CALLOUT_Y + 4} ${padL + 5},${CALLOUT_Y + 12}`} fill="#d4a843" />
        <polygon points={`${padR},${CALLOUT_Y + 8} ${padR - 5},${CALLOUT_Y + 4} ${padR - 5},${CALLOUT_Y + 12}`} fill="#d4a843" />
        <rect
          x={VIEW_CX - areaLabelW / 2}
          y={CALLOUT_Y + 14}
          width={areaLabelW}
          height={14}
          rx={3}
          fill="rgba(20,14,6,0.9)"
          stroke="#d4a843"
          strokeWidth="0.8"
        />
        <text x={VIEW_CX} y={CALLOUT_Y + 24} textAnchor="middle" fill="#d4a843" fontSize="7" fontWeight="bold" letterSpacing="0.4">
          {areaLabel}
        </text>
      </g>

      <g>
        {isImport ? (
          <>
            <Bulldozer x={rightEquipX} y={padY - 28} flip />
            <Excavator x={rightEquipX - 36} y={padY - 26} flip size={0.9} />
            <Compactor x={padL + 24} y={padY - 22} />
          </>
        ) : isExport ? (
          <>
            <Bulldozer x={leftEquipX} y={padY - 28} />
            <Excavator x={leftEquipX + 34} y={padY - 26} size={0.9} />
          </>
        ) : (
          <>
            <Compactor x={padL + 40} y={padY - 22} />
            <Compactor x={padR - 58} y={padY - 22} />
          </>
        )}
      </g>

      {isImport &&
        Array.from({ length: truckCount }).map((_, i) => (
          <HaulTruck key={`in-${i}`} x={340 - i * 30} y={84} direction="in" />
        ))}

      <GraphicOverlay
        eduId={eduId}
        stats={stats}
        expansionPct={expansionPct}
        shrinkPct={shrinkPct}
        padY={padY}
        padL={padL}
        padR={padR}
        isExport={isExport}
        isImport={isImport}
        exportBcy={exportBcy}
        hasExportVolumes={hasExportVolumes}
        hasImportVolumes={hasImportVolumes}
        hasDualVolumes={hasDualVolumes}
      />

      {isExport &&
        Array.from({ length: truckCount }).map((_, i) => (
          <HaulTruck key={`out-${i}`} x={8 + i * 30} y={EXPORT_TRUCK_Y} direction="out" />
        ))}

      {/* Pad label on top layer so equipment never covers it */}
      <g>
        <rect x={VIEW_CX - padLabelW / 2} y={padY - 18} width={padLabelW} height="11" rx="3" fill="rgba(20,14,6,0.72)" />
        <text x={VIEW_CX} y={padY - 10} textAnchor="middle" fill="#d4a843" fontSize="7" fontWeight="bold" letterSpacing="1">
          FINISHED PAD
        </text>
      </g>

      {(() => {
        const badge = isExport
          ? { lines: ["EXPORTING", "HAUL OFF-SITE"] as const, width: 118, height: 30 }
          : isImport
            ? { lines: ["IMPORTING", "BUILD PAD"] as const, width: 118, height: 30 }
            : { lines: ["BALANCED", "AT DESIGN ELEVATION"] as const, width: 136, height: 30 };
        const badgeX = VIEW_CX - badge.width / 2;
        return (
          <>
            <rect x={badgeX} y={8} width={badge.width} height={badge.height} rx={badge.height / 2} fill="rgba(20,14,6,0.82)" stroke="#d4a843" strokeWidth="0.8" />
            <text x={VIEW_CX} y={18} textAnchor="middle" fill="#d4a843" fontSize="6.5" fontWeight="bold" letterSpacing="0.6">
              <tspan x={VIEW_CX} dy="0">{badge.lines[0]}</tspan>
              <tspan x={VIEW_CX} dy="9">{badge.lines[1]}</tspan>
            </text>
          </>
        );
      })()}
    </svg>
  );
}

export function GradeBalanceSimulator() {
  const [squareFeet, setSquareFeet] = useState(10_000);
  const [squareFeetDraft, setSquareFeetDraft] = useState("10000");
  const [excavationDepthFt, setExcavationDepthFt] = useState(4);
  const [excavationDraft, setExcavationDraft] = useState("4");
  const [importDepthFt, setImportDepthFt] = useState(0);
  const [importDraft, setImportDraft] = useState("0");
  const [expansionPct, setExpansionPct] = useState(25);
  const [shrinkPct, setShrinkPct] = useState(10);
  const [eduTab, setEduTab] = useState(0);

  const volumes = useMemo(
    () =>
      calcEarthworkVolumes({
        squareFeet,
        excavationDepthFt,
        importDepthFt,
        expansionPct,
        shrinkPct,
      }),
    [squareFeet, excavationDepthFt, importDepthFt, expansionPct, shrinkPct],
  );

  const graphicBalance = useMemo(
    () => graphicBalanceFromDepths(excavationDepthFt, importDepthFt),
    [excavationDepthFt, importDepthFt],
  );

  const stats = useMemo(
    () => terrainStatsFromVolumes(volumes, graphicBalance),
    [volumes, graphicBalance],
  );

  const edu = EDUCATION[eduTab];
  const EduIcon = edu.icon;

  const commitSquareFeet = (raw: string) => {
    const digits = raw.replace(/[^0-9]/g, "");
    if (!digits) {
      setSquareFeetDraft(String(squareFeet));
      return;
    }
    const next = clampSquareFeet(Number(digits));
    setSquareFeet(next);
    setSquareFeetDraft(String(next));
  };

  const handleSquareFeetTyping = (raw: string) => {
    // Allow free typing of digits only; do not clamp until blur/Enter.
    const cleaned = raw.replace(/[^0-9]/g, "");
    setSquareFeetDraft(cleaned);
    if (cleaned === "") return;
    const parsed = Number(cleaned);
    if (!Number.isFinite(parsed)) return;
    // Live-update graphic when within range; keep draft as typed if below min mid-entry.
    if (parsed >= SQ_FT_MIN && parsed <= SQ_FT_MAX) {
      setSquareFeet(parsed);
    }
  };

  const commitDepth = (
    raw: string,
    setter: (value: number) => void,
    draftSetter: (value: string) => void,
    current: number,
  ) => {
    const cleaned = raw.replace(/[^0-9.]/g, "");
    if (!cleaned || cleaned === ".") {
      draftSetter(String(current));
      return;
    }
    const next = clampDepth(Number(cleaned));
    setter(next);
    draftSetter(String(next));
  };

  const handleDepthTyping = (
    raw: string,
    setter: (value: number) => void,
    draftSetter: (value: string) => void,
  ) => {
    const cleaned = raw.replace(/[^0-9.]/g, "");
    // Keep at most one decimal point
    const parts = cleaned.split(".");
    const normalized = parts.length > 2 ? `${parts[0]}.${parts.slice(1).join("")}` : cleaned;
    draftSetter(normalized);
    if (normalized === "" || normalized === ".") return;
    const parsed = Number(normalized);
    if (!Number.isFinite(parsed)) return;
    if (parsed >= DEPTH_MIN && parsed <= DEPTH_MAX) {
      setter(clampDepth(parsed));
    }
  };

  const applyDepthPreset = (excavation: number, fill: number) => {
    setExcavationDepthFt(excavation);
    setImportDepthFt(fill);
    setExcavationDraft(String(excavation));
    setImportDraft(String(fill));
  };

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Education tabs + summary — above the graphic */}
      <div className="border-b border-border bg-secondary/30">
        <div className="flex flex-wrap gap-1 p-3">
          {EDUCATION.map((e, i) => (
            <button
              key={e.id}
              type="button"
              onClick={() => setEduTab(i)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider transition ${i === eduTab ? "bg-gold text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`}
            >
              {e.title}
            </button>
          ))}
        </div>
        <div className="px-6 pb-5 lg:px-8 lg:pb-6">
          <div className="flex items-start gap-4">
            <div className="rounded-lg bg-gold/15 p-3 shrink-0">
              <EduIcon className="h-5 w-5 text-gold" />
            </div>
            <div className="min-w-0">
              <h4 className="font-display text-base tracking-wide text-foreground">{edu.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{edu.body}</p>
              <ul className="mt-3 grid sm:grid-cols-3 gap-2">
                {edu.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-foreground/85">
                    <Minus className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] text-gold/90 uppercase tracking-wider">
                ↓ See this concept reflected in the site graphic below
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive terrain graphic */}
      <div className="relative bg-[#3a2818]/30 min-h-[260px] lg:min-h-[300px] border-b border-border">
        <GradingTerrain
          balance={graphicBalance}
          squareFeet={squareFeet}
          eduId={edu.id}
          stats={stats}
          expansionPct={expansionPct}
          shrinkPct={shrinkPct}
          exportBcy={volumes.exportBcy}
          hasExportVolumes={volumes.hasExport}
          hasImportVolumes={volumes.hasImport}
          hasDualVolumes={volumes.hasExport && volumes.hasImport}
        />
      </div>

      <div className="p-6 lg:p-8 bg-secondary/20 space-y-8">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-wider">
          Conceptual planning tool — enter your project area and depths to estimate earthwork quantities
        </p>
        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          CY = Square Footage × Depth (ft) ÷ 27 · {TRUCK_LABEL} trucks haul {TRUCK_CY} CY per load
          (example: 1,000 CY ≈ 100 {TRUCK_LABEL} loads). Adjust soil type below — expansive dirt changes export and import math.
        </p>

        <div className="max-w-3xl mx-auto rounded-xl border border-gold/30 bg-card/50 p-5 space-y-5">
          <h4 className="font-display text-sm tracking-wide text-gold uppercase">Project Dimensions</h4>

          <div>
            <label htmlFor="project-area" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Project Area / Square Footage
            </label>
            <div className="flex items-center gap-3">
              <input
                id="project-area"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="off"
                value={squareFeetDraft}
                onChange={(e) => handleSquareFeetTyping(e.target.value)}
                onBlur={() => commitSquareFeet(squareFeetDraft)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.currentTarget.blur();
                  }
                }}
                placeholder="e.g. 10000"
                aria-describedby="project-area-hint"
                className="w-full rounded-md bg-input border border-border px-4 py-3 text-lg font-display text-foreground tabular-nums focus:outline-none focus:ring-2 focus:ring-gold/60"
              />
              <span className="text-sm text-muted-foreground whitespace-nowrap shrink-0">sq. ft.</span>
            </div>
            <p id="project-area-hint" className="mt-1.5 text-[11px] text-muted-foreground">
              Type any project area ({SQ_FT_MIN.toLocaleString()}–{SQ_FT_MAX.toLocaleString()} sq. ft.) — the pad graphic scales with your land mass.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="excavation-depth" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Excavation / Over-Ex Depth (ft)
              </label>
              <div className="flex items-center gap-3 mb-2">
                <input
                  id="excavation-depth"
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  value={excavationDraft}
                  onChange={(e) => handleDepthTyping(e.target.value, setExcavationDepthFt, setExcavationDraft)}
                  onBlur={() => commitDepth(excavationDraft, setExcavationDepthFt, setExcavationDraft, excavationDepthFt)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                  className="w-24 rounded-md bg-input border border-border px-3 py-2 text-base font-display text-foreground tabular-nums focus:outline-none focus:ring-2 focus:ring-gold/60"
                />
                <span className="text-sm text-orange-300 font-medium">Export / cut</span>
              </div>
              <input
                type="range"
                min={DEPTH_MIN}
                max={DEPTH_MAX}
                step={0.5}
                value={excavationDepthFt}
                onChange={(e) => {
                  const next = clampDepth(Number(e.target.value));
                  setExcavationDepthFt(next);
                  setExcavationDraft(String(next));
                }}
                className="w-full accent-orange-500 cursor-pointer"
              />
            </div>

            <div>
              <label htmlFor="import-depth" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                Import / Fill Depth (ft)
              </label>
              <div className="flex items-center gap-3 mb-2">
                <input
                  id="import-depth"
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  value={importDraft}
                  onChange={(e) => handleDepthTyping(e.target.value, setImportDepthFt, setImportDraft)}
                  onBlur={() => commitDepth(importDraft, setImportDepthFt, setImportDraft, importDepthFt)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                  className="w-24 rounded-md bg-input border border-border px-3 py-2 text-base font-display text-foreground tabular-nums focus:outline-none focus:ring-2 focus:ring-gold/60"
                />
                <span className="text-sm text-sky-300 font-medium">Import / fill</span>
              </div>
              <input
                type="range"
                min={DEPTH_MIN}
                max={DEPTH_MAX}
                step={0.5}
                value={importDepthFt}
                onChange={(e) => {
                  const next = clampDepth(Number(e.target.value));
                  setImportDepthFt(next);
                  setImportDraft(String(next));
                }}
                className="w-full accent-sky-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {DEPTH_PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => applyDepthPreset(p.excavation, p.import)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  excavationDepthFt === p.excavation && importDepthFt === p.import
                    ? "border-gold bg-gold/15 text-gold"
                    : "border-border text-muted-foreground hover:border-gold/40"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="rounded-xl border border-border bg-card/50 p-5 space-y-5">
            <h4 className="font-display text-sm tracking-wide text-gold uppercase">Soil Factors</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Soil type changes expansion and shrink. Clay and wet soils are more expansive; sandy and granular imports shrink more under compaction — use the presets or sliders to match geotech assumptions.
            </p>
            <div>
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Expansion (swell on export)</span>
                <span className="text-gold font-semibold">{expansionPct}%</span>
              </div>
              <input type="range" min={5} max={40} step={1} value={expansionPct} onChange={(e) => setExpansionPct(Number(e.target.value))} className="w-full accent-gold cursor-pointer" />
            </div>
            <div>
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Shrink (on import compaction)</span>
                <span className="text-gold font-semibold">{shrinkPct}%</span>
              </div>
              <input type="range" min={5} max={25} step={1} value={shrinkPct} onChange={(e) => setShrinkPct(Number(e.target.value))} className="w-full accent-gold cursor-pointer" />
            </div>
            <div className="flex flex-wrap gap-2">
              {SOIL_PRESETS.map((p) => (
                <button key={p.label} type="button" onClick={() => { setExpansionPct(p.expansion); setShrinkPct(p.shrink); }} className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground hover:border-gold/50 hover:text-gold transition">
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/50 p-5">
            <h4 className="font-display text-sm tracking-wide text-gold uppercase mb-4">Volume & Haul Estimate</h4>
            {!volumes.hasExport && !volumes.hasImport ? (
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enter excavation and/or import depth above to calculate cubic yards for your project area.
              </p>
            ) : (
              <div className="space-y-5">
                {volumes.hasExport && (
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-orange-300 font-semibold mb-3">
                      Excavation / Export ({excavationDepthFt} ft depth)
                    </p>
                    <dl className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-lg border border-border px-3 py-2">
                        <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Excavation BCY</dt>
                        <dd className="font-display text-lg text-foreground mt-0.5">{volumes.exportBcy.toLocaleString()}</dd>
                      </div>
                      <div className="rounded-lg border border-orange-500/30 bg-orange-500/5 px-3 py-2">
                        <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Loose CY (LCY)</dt>
                        <dd className="font-display text-lg text-foreground mt-0.5">{volumes.lcyExport.toLocaleString()}</dd>
                      </div>
                      <div className="rounded-lg border border-border px-3 py-2 col-span-2">
                        <dt className="text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                          <Truck className="h-3 w-3" /> Export {TRUCK_LABEL} loads ({TRUCK_CY} LCY each)
                        </dt>
                        <dd className="font-display text-lg text-orange-300 mt-0.5">{volumes.exportLoads.toLocaleString()} loads</dd>
                        <p className="text-[11px] text-muted-foreground mt-1">
                          Without expansion factor: ~{volumes.naiveLoads} loads — underestimates haul by{" "}
                          {volumes.exportLoads - volumes.naiveLoads} loads at {expansionPct}% swell
                        </p>
                      </div>
                    </dl>
                  </div>
                )}

                {volumes.hasImport && (
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-sky-300 font-semibold mb-3">
                      Import / Fill ({importDepthFt} ft depth)
                    </p>
                    <dl className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-lg border border-sky-500/30 bg-sky-500/5 px-3 py-2">
                        <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Compacted CY (CCY)</dt>
                        <dd className="font-display text-lg text-foreground mt-0.5">{volumes.importCcy.toLocaleString()}</dd>
                      </div>
                      <div className="rounded-lg border border-border px-3 py-2">
                        <dt className="text-[10px] uppercase tracking-wider text-muted-foreground">Loose CY delivered</dt>
                        <dd className="font-display text-lg text-foreground mt-0.5">{volumes.lcyImport.toLocaleString()}</dd>
                      </div>
                      <div className="rounded-lg border border-border px-3 py-2 col-span-2">
                        <dt className="text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                          <Truck className="h-3 w-3" /> Import {TRUCK_LABEL} loads ({TRUCK_CY} LCY each)
                        </dt>
                        <dd className="font-display text-lg text-sky-300 mt-0.5">{volumes.importLoads.toLocaleString()} loads</dd>
                      </div>
                    </dl>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="max-w-4xl mx-auto text-xs text-muted-foreground leading-relaxed border-l-2 border-gold/40 pl-4">
          {EARTHWORK_DISCLAIMER}
        </p>
      </div>
    </div>
  );
}
