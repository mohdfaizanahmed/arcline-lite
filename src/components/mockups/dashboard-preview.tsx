import {
  BarChart3,
  Bot,
  ChevronDown,
  Download,
  LayoutDashboard,
  Search,
  Settings,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Users,
  FileText,
} from "lucide-react";

import { Sparkline } from "@/components/mockups/sparkline";
import { LogoMark } from "@/components/shared/logo";
import { areaPath, linePath, toPoints } from "@/lib/svg-chart";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------------------
   Static, decorative product screenshot built from HTML + SVG.
   It inherits the theme tokens, so it re-colours itself in dark mode and
   whenever you change --primary in globals.css.
   ------------------------------------------------------------------------- */

const nav = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Analytics", icon: BarChart3 },
  { label: "Automations", icon: Bot },
  { label: "Customers", icon: Users },
  { label: "Reports", icon: FileText },
  { label: "Settings", icon: Settings },
];

const kpis = [
  { label: "Monthly revenue", value: "$84,210", delta: "+12.4%", up: true, good: true, data: [8, 9, 8.5, 10, 11, 10.6, 12, 13, 12.6, 14.2] },
  { label: "Active users", value: "12,480", delta: "+8.1%", up: true, good: true, data: [5, 6, 5.6, 6.4, 7, 7.4, 7.1, 8, 8.6, 9] },
  { label: "Trial conversion", value: "4.8%", delta: "+0.6pt", up: true, good: true, data: [3, 3.2, 3.1, 3.6, 3.5, 3.9, 4.2, 4.1, 4.5, 4.8] },
  { label: "Churn", value: "1.9%", delta: "−0.4pt", up: false, good: true, data: [3, 2.9, 3, 2.7, 2.6, 2.5, 2.3, 2.2, 2, 1.9] },
];

const revenue = [42, 48, 45, 53, 58, 55, 63, 68, 64, 72, 79, 76, 84, 91];
const previous = [38, 40, 42, 41, 45, 47, 46, 50, 52, 51, 55, 57, 58, 60];

const channels = [
  { label: "Organic search", value: 42 },
  { label: "Referral", value: 27 },
  { label: "Paid social", value: 18 },
  { label: "Partners", value: 13 },
];

export function DashboardPreview({ className }: { className?: string }) {
  const W = 560;
  const H = 180;
  // Both series share one scale so they're visually comparable.
  const all = [...revenue, ...previous];
  const domain: [number, number] = [Math.min(...all), Math.max(...all)];
  const cur = toPoints(revenue, W, H, 8, domain);
  const prev = toPoints(previous, W, H, 8, domain);
  const marker = cur[10];

  return (
    <div
      role="img"
      aria-label="Preview of the Arcline analytics dashboard showing revenue, active users, conversion and churn"
      className={cn(
        "overflow-hidden rounded-2xl border bg-card text-left text-card-foreground shadow-float ring-1 ring-black/[0.02] dark:ring-white/[0.03]",
        className,
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b bg-muted/40 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-xs items-center justify-center rounded-md border bg-background/70 font-mono text-[10px] text-muted-foreground">
          app.arcline.io/overview
        </div>
        <div className="w-10" />
      </div>

      <div className="grid md:grid-cols-[188px_1fr]">
        {/* Sidebar */}
        <aside className="hidden flex-col gap-1 border-r bg-sidebar p-3 md:flex">
          <div className="mb-3 flex items-center gap-2 rounded-lg px-2 py-1.5">
            <LogoMark className="size-5" />
            <span className="text-xs font-semibold">Acme Inc.</span>
            <ChevronDown className="ml-auto size-3 text-muted-foreground" />
          </div>
          {nav.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-xs",
                active ? "bg-card font-medium text-foreground shadow-soft ring-1 ring-border" : "text-muted-foreground",
              )}
            >
              <Icon className={cn("size-3.5", active && "text-primary")} />
              {label}
            </div>
          ))}
          <div className="mt-auto rounded-lg border bg-card p-2.5">
            <div className="flex items-center gap-1.5 text-[11px] font-medium">
              <Sparkles className="size-3 text-primary" /> AI insights
            </div>
            <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
              Signups from Germany are up 34% this week.
            </p>
          </div>
        </aside>

        {/* Main */}
        <div className="min-w-0 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Overview</p>
              <p className="text-[11px] text-muted-foreground">Welcome back, Maya — here’s what changed.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden h-7 items-center gap-1.5 rounded-md border bg-background px-2 text-[11px] text-muted-foreground sm:flex">
                <Search className="size-3" /> Search
                <kbd className="ml-3 rounded border bg-muted px-1 font-mono text-[9px]">⌘K</kbd>
              </div>
              <div className="flex h-7 items-center gap-1 rounded-md border bg-background px-2 text-[11px]">
                Last 30 days <ChevronDown className="size-3 text-muted-foreground" />
              </div>
              <div className="flex h-7 items-center gap-1 rounded-md bg-primary px-2 text-[11px] font-medium text-primary-foreground">
                <Download className="size-3" /> Export
              </div>
            </div>
          </div>

          {/* KPI cards */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl border bg-background/60 p-3">
                <p className="truncate text-[10.5px] text-muted-foreground">{k.label}</p>
                <div className="mt-1 flex items-baseline justify-between gap-1">
                  <p className="text-base font-semibold tracking-tight tabular-nums">{k.value}</p>
                  <span
                    className={cn(
                      "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9.5px] font-medium",
                      k.good ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive",
                    )}
                  >
                    {k.up ? <TrendingUp className="size-2.5" /> : <TrendingDown className="size-2.5" />}
                    {k.delta}
                  </span>
                </div>
                <Sparkline values={k.data} className="mt-1.5 h-7" tone={k.good ? "text-primary" : "text-destructive"} />
              </div>
            ))}
          </div>

          {/* Chart + channels */}
          <div className="mt-2.5 grid gap-2.5 lg:grid-cols-[1fr_200px]">
            <div className="rounded-xl border bg-background/60 p-3.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-muted-foreground">Revenue</p>
                  <p className="text-lg font-semibold tracking-tight tabular-nums">$412,890</p>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-primary" /> This period
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-muted-foreground/40" /> Previous
                  </span>
                </div>
              </div>
              <div className="relative mt-2">
                <svg viewBox={`0 0 ${W} ${H}`} className="h-36 w-full sm:h-44" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="hero-rev" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[0.25, 0.5, 0.75].map((f) => (
                    <line key={f} x1="0" x2={W} y1={H * f} y2={H * f} stroke="var(--border)" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
                  ))}
                  <path d={linePath(prev)} fill="none" stroke="var(--muted-foreground)" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                  <path d={areaPath(cur, H)} fill="url(#hero-rev)" />
                  <path d={linePath(cur)} fill="none" stroke="var(--primary)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <line x1={marker[0]} x2={marker[0]} y1={marker[1]} y2={H} stroke="var(--primary)" strokeOpacity="0.35" vectorEffect="non-scaling-stroke" />
                </svg>
                {/* Tooltip, positioned in % so it tracks the stretched SVG */}
                <div
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-[calc(100%+10px)]"
                  style={{ left: `${(marker[0] / W) * 100}%`, top: `${(marker[1] / H) * 100}%` }}
                >
                  <div className="rounded-lg bg-inverse px-2 py-1 text-[10px] whitespace-nowrap text-inverse-foreground shadow-soft">
                    <span className="font-semibold tabular-nums">$79,120</span>
                    <span className="opacity-60"> · Nov 11</span>
                  </div>
                </div>
                <div
                  className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-card bg-primary"
                  style={{ left: `${(marker[0] / W) * 100}%`, top: `${(marker[1] / H) * 100}%` }}
                />
              </div>
            </div>

            <div className="hidden rounded-xl border bg-background/60 p-3.5 lg:block">
              <p className="text-[11px] text-muted-foreground">Top channels</p>
              <ul className="mt-3 flex flex-col gap-3">
                {channels.map((c, i) => (
                  <li key={c.label}>
                    <div className="flex justify-between text-[10.5px]">
                      <span>{c.label}</span>
                      <span className="text-muted-foreground tabular-nums">{c.value}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${c.value * 2}%`, opacity: 1 - i * 0.2 }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 rounded-lg bg-accent p-2.5 text-[10px] leading-snug text-accent-foreground">
                Organic search grew <span className="font-semibold">+18%</span> after last week’s launch post.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
