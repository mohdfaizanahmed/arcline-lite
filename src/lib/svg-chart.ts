/**
 * Tiny helpers for drawing decorative SVG charts without a chart library.
 * (The dashboard pages use Recharts for real, interactive charts.)
 */
export type Point = [x: number, y: number];

/** Maps a list of values onto an SVG box. */
export function toPoints(
  values: number[],
  width: number,
  height: number,
  pad = 4,
  /** Optional fixed [min, max] so several series can share one scale. */
  domain?: [number, number],
): Point[] {
  const [min, max] = domain ?? [Math.min(...values), Math.max(...values)];
  const range = max - min || 1;
  const step = (width - pad * 2) / (values.length - 1);
  return values.map((v, i) => [
    +(pad + i * step).toFixed(2),
    +(height - pad - ((v - min) / range) * (height - pad * 2)).toFixed(2),
  ]);
}

/** Smooth line through points (Catmull–Rom → cubic Bézier). */
export function linePath(points: Point[], tension = 0.18): string {
  if (points.length < 2) return "";
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) * tension;
    const c1y = p1[1] + (p2[1] - p0[1]) * tension;
    const c2x = p2[0] - (p3[0] - p1[0]) * tension;
    const c2y = p2[1] - (p3[1] - p1[1]) * tension;
    d += ` C${c1x.toFixed(2)},${c1y.toFixed(2)} ${c2x.toFixed(2)},${c2y.toFixed(2)} ${p2[0]},${p2[1]}`;
  }
  return d;
}

/** Closed area under a smooth line, for gradient fills. */
export function areaPath(points: Point[], height: number, tension?: number): string {
  const first = points[0];
  const last = points[points.length - 1];
  return `${linePath(points, tension)} L${last[0]},${height} L${first[0]},${height} Z`;
}
