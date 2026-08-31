export const TRUCK_CY = 10;
export const TRUCK_LABEL = "Super 10";

export const SQ_FT_MIN = 1_000;
export const SQ_FT_MAX = 500_000;
export const DEPTH_MIN = 0;
export const DEPTH_MAX = 8;

/** Miguel's formula: square feet × depth (ft) ÷ 27 = cubic yards */
export function cubicYardsFromArea(squareFeet: number, depthFt: number): number {
  if (squareFeet <= 0 || depthFt <= 0) return 0;
  return Math.round((squareFeet * depthFt) / 27);
}

export function clampSquareFeet(value: number): number {
  return Math.min(SQ_FT_MAX, Math.max(SQ_FT_MIN, Math.round(value)));
}

export function clampDepth(value: number): number {
  return Math.min(DEPTH_MAX, Math.max(DEPTH_MIN, Math.round(value * 2) / 2));
}

export type EarthworkVolumeInput = {
  squareFeet: number;
  excavationDepthFt: number;
  importDepthFt: number;
  expansionPct: number;
  shrinkPct: number;
};

export type EarthworkVolumeResult = {
  exportBcy: number;
  importCcy: number;
  lcyExport: number;
  lcyImport: number;
  exportLoads: number;
  importLoads: number;
  naiveLoads: number;
  hasExport: boolean;
  hasImport: boolean;
};

export function calcEarthworkVolumes(input: EarthworkVolumeInput): EarthworkVolumeResult {
  const { squareFeet, excavationDepthFt, importDepthFt, expansionPct, shrinkPct } = input;

  const exportBcy = cubicYardsFromArea(squareFeet, excavationDepthFt);
  const importCcy = cubicYardsFromArea(squareFeet, importDepthFt);
  const lcyExport = exportBcy > 0 ? Math.round(exportBcy * (1 + expansionPct / 100)) : 0;
  const lcyImport = importCcy > 0 ? Math.round(importCcy / (1 - shrinkPct / 100)) : 0;
  const exportLoads = exportBcy > 0 ? Math.ceil(lcyExport / TRUCK_CY) : 0;
  const importLoads = importCcy > 0 ? Math.ceil(lcyImport / TRUCK_CY) : 0;
  const naiveLoads = exportBcy > 0 ? Math.ceil(exportBcy / TRUCK_CY) : 0;

  return {
    exportBcy,
    importCcy,
    lcyExport,
    lcyImport,
    exportLoads,
    importLoads,
    naiveLoads,
    hasExport: exportBcy > 0,
    hasImport: importCcy > 0,
  };
}

/** Drives the cut/fill terrain graphic: export is negative, import is positive. */
export function graphicBalanceFromDepths(excavationDepthFt: number, importDepthFt: number): number {
  if (excavationDepthFt > 0) return -excavationDepthFt;
  if (importDepthFt > 0) return importDepthFt;
  return 0;
}

/**
 * Maps project square footage to a pad width in SVG units so the terrain
 * graphic visually grows/shrinks with land area.
 * Tuned so common commercial pads (5k–100k sq ft) read as meaningful
 * width changes; 100k+ approaches the max footprint.
 */
export function padWidthFromSquareFeet(squareFeet: number): number {
  const sq = Math.min(SQ_FT_MAX, Math.max(SQ_FT_MIN, squareFeet));
  const minW = 88;
  const maxW = 300;
  // Cap the visual curve at 100k so mid-range jobs expand more clearly.
  const visualMax = 100_000;
  const t = Math.min(
    1,
    (Math.sqrt(sq) - Math.sqrt(SQ_FT_MIN)) /
      (Math.sqrt(visualMax) - Math.sqrt(SQ_FT_MIN)),
  );
  // Ease-out curve: small jobs stay compact; growth accelerates into mid-range.
  const eased = 1 - Math.pow(1 - t, 1.35);
  return minW + eased * (maxW - minW);
}

/** Stats shape consumed by the SVG terrain overlay. */
export function terrainStatsFromVolumes(
  volumes: EarthworkVolumeResult,
  graphicBalance: number,
): {
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
} {
  const isExport = graphicBalance < 0;
  const isImport = graphicBalance > 0;
  const mag = Math.abs(graphicBalance);

  return {
    isExport,
    isImport,
    mag,
    bcy: isExport ? volumes.exportBcy : isImport ? volumes.importCcy : 0,
    lcyExport: volumes.lcyExport,
    ccyImport: volumes.importCcy,
    lcyImport: volumes.lcyImport,
    exportLoads: volumes.exportLoads,
    importLoads: volumes.importLoads,
    naiveLoads: volumes.naiveLoads,
  };
}
