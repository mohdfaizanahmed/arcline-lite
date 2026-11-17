import { useId } from "react";

import { areaPath, linePath, toPoints } from "@/lib/svg-chart";
import { cn } from "@/lib/utils";

type SparklineProps = {
  values: number[];
  className?: string;
  /** Tailwind text color class — the line uses `currentColor`. */
  tone?: string;
};

export function Sparkline({ values, className, tone = "text-primary" }: SparklineProps) {
  const id = useId();
  const w = 120;
  const h = 36;
  const pts = toPoints(values, w, h, 3);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={cn("h-9 w-full", tone, className)} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath(pts, h)} fill={`url(#${id})`} />
      <path d={linePath(pts)} fill="none" stroke="currentColor" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
