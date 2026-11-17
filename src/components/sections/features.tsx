import { ArrowUpRight, Clock, KeyRound, Mail, MessageSquare, ScrollText, ShieldCheck, UserPlus } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { features, type FeatureVisual } from "@/data/home";
import { cn } from "@/lib/utils";

// Bento layout: column spans for each card on large screens (6-column grid).
const spans = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={features.eyebrow} title={features.title} description={features.description} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {features.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.05}
                className={cn(spans[i] ?? "lg:col-span-2", i === 0 && "sm:col-span-2")}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-soft transition-shadow hover:shadow-float sm:p-7">
                  {item.visual && <FeatureArt visual={item.visual} />}
                  <div className={cn("flex flex-col gap-3", item.visual && "mt-6")}>
                    <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <Icon className="size-[1.1rem]" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --- Small illustrations for the large feature cards ----------------------- */

function FeatureArt({ visual }: { visual: Exclude<FeatureVisual, null> }) {
  return (
    <div aria-hidden="true" className="relative h-44 overflow-hidden rounded-xl border bg-muted/40 sm:h-48">
      {visual === "chart" && <ChartArt />}
      {visual === "automation" && <AutomationArt />}
      {visual === "team" && <TeamArt />}
      {visual === "security" && <SecurityArt />}
      {visual === "speed" && <SpeedArt />}
    </div>
  );
}

function ChartArt() {
  const bars = [32, 44, 38, 52, 47, 58, 54, 66, 61, 72, 69, 84];
  return (
    <div className="absolute inset-0 flex flex-col p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] text-muted-foreground">Weekly active users</p>
          <p className="text-xl font-semibold tracking-tight tabular-nums">24,816</p>
        </div>
        <span className="inline-flex items-center gap-0.5 rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-medium text-success">
          <ArrowUpRight className="size-3" /> 24% MoM
        </span>
      </div>
      <div className="mt-auto flex h-24 items-end gap-1.5 sm:gap-2">
        {bars.map((h, i) => (
          <span
            key={i}
            className={cn(
              "flex-1 rounded-t-md transition-all duration-500 group-hover:opacity-100",
              i === bars.length - 1 ? "bg-primary" : "bg-primary/20 group-hover:bg-primary/30",
            )}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function AutomationArt() {
  const steps = [
    { icon: UserPlus, label: "User signs up", tag: "Trigger" },
    { icon: Clock, label: "Wait 1 day", tag: "Delay" },
    { icon: Mail, label: "Send welcome tips", tag: "Action" },
  ];
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-0 p-4">
      {steps.map(({ icon: Icon, label, tag }, i) => (
        <div key={label} className="flex flex-col items-center">
          {i > 0 && <span className="h-4 w-px bg-border" />}
          <div
            className={cn(
              "flex w-52 items-center gap-2.5 rounded-lg border bg-card px-3 py-2 shadow-soft",
              i === 0 && "border-primary/40 ring-2 ring-primary/10",
            )}
          >
            <Icon className="size-3.5 text-primary" />
            <span className="text-xs font-medium">{label}</span>
            <span className="ml-auto font-mono text-[9px] tracking-wider text-muted-foreground uppercase">{tag}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function TeamArt() {
  const people = ["MO", "DR", "PR", "TL", "AB"];
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-4 p-5">
      <div className="flex -space-x-2">
        {people.map((p, i) => (
          <span
            key={p}
            className="flex size-8 items-center justify-center rounded-full border-2 border-card text-[10px] font-semibold text-white"
            style={{ background: `color-mix(in oklab, var(--primary) ${100 - i * 14}%, var(--avatar-shade))` }}
          >
            {p}
          </span>
        ))}
        <span className="flex size-8 items-center justify-center rounded-full border-2 border-card bg-muted text-[10px] font-medium text-muted-foreground">
          +8
        </span>
      </div>
      <div className="rounded-lg border bg-card p-3 shadow-soft">
        <div className="flex items-center gap-1.5 text-[11px]">
          <MessageSquare className="size-3 text-primary" />
          <span className="font-semibold">Priya</span>
          <span className="text-muted-foreground">commented on Retention</span>
        </div>
        <p className="mt-1.5 text-xs leading-snug">
          <span className="font-medium text-primary">@Daniel</span> can we dig into the EU spike before Friday?
        </p>
      </div>
    </div>
  );
}

function SecurityArt() {
  const rows = [
    { icon: KeyRound, label: "SAML single sign-on", status: "Enforced" },
    { icon: ScrollText, label: "Audit log streaming", status: "Active" },
    { icon: ShieldCheck, label: "Two-factor authentication", status: "Required" },
  ];
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 p-5">
      {rows.map(({ icon: Icon, label, status }) => (
        <div key={label} className="flex items-center gap-2.5 rounded-lg border bg-card px-3 py-2 shadow-soft">
          <Icon className="size-3.5 text-primary" />
          <span className="text-xs font-medium">{label}</span>
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-medium text-success">
            <span className="size-1.5 rounded-full bg-success" />
            {status}
          </span>
        </div>
      ))}
    </div>
  );
}

function SpeedArt() {
  const regions = [
    { label: "us-east", ms: 41 },
    { label: "eu-west", ms: 58 },
    { label: "ap-south", ms: 82 },
  ];
  return (
    <div className="absolute inset-0 flex flex-col justify-center p-5">
      <p className="text-[11px] text-muted-foreground">p95 query latency</p>
      <p className="mt-0.5 text-3xl font-semibold tracking-tight tabular-nums">
        82<span className="ml-0.5 text-base text-muted-foreground">ms</span>
      </p>
      <ul className="mt-4 flex flex-col gap-2">
        {regions.map((r) => (
          <li key={r.label} className="flex items-center gap-3 text-[11px]">
            <span className="w-14 font-mono text-muted-foreground">{r.label}</span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <span className="block h-full rounded-full bg-primary" style={{ width: `${r.ms}%` }} />
            </span>
            <span className="w-9 text-right tabular-nums">{r.ms}ms</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
