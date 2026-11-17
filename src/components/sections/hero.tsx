import Link from "next/link";
import { ArrowRight, Bot, Check, ChevronRight, TrendingDown } from "lucide-react";

import { DashboardPreview } from "@/components/mockups/dashboard-preview";
import { AccentText } from "@/components/shared/accent-text";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { hero } from "@/data/home";
import { cn } from "@/lib/utils";

// Hero animations use CSS (not JS) so the headline paints immediately — good for LCP.
const enter = "animate-in fade-in-0 slide-in-from-bottom-3 duration-700 fill-mode-both motion-reduce:animate-none";

export function Hero() {
  const [noteA, noteB] = hero.note.split(" · ");
  return (
    <section className="relative isolate overflow-hidden pt-14 pb-20 sm:pt-20 lg:pt-24">
      {/* Background: blueprint grid + soft brand glow */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
        <div className="absolute top-[-18rem] left-1/2 h-[40rem] w-[72rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--brand-glow),transparent)]" />
      </div>

      <div className="container-page flex flex-col items-center text-center">
        <Link
          href={hero.announcement.href}
          className={cn(
            "group inline-flex items-center gap-2 rounded-full border bg-card/70 py-1 pr-3 pl-1 text-sm shadow-soft backdrop-blur transition-colors hover:border-primary/30",
            enter,
          )}
        >
          <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
            {hero.announcement.label}
          </span>
          <span className="text-muted-foreground transition-colors group-hover:text-foreground">
            {hero.announcement.text}
          </span>
          <ChevronRight className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>

        <h1
          className={cn(
            "mt-7 max-w-4xl font-heading text-[2.7rem] leading-[1.02] font-semibold tracking-[-0.045em] text-balance sm:text-6xl lg:text-[4.6rem]",
            "animate-in slide-in-from-bottom-2 duration-700 fill-mode-both motion-reduce:animate-none",
          )}
        >
          <AccentText text={hero.title} accentClassName="text-primary pr-1" />
        </h1>

        <p className={cn("mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl", enter, "delay-150")}>
          {hero.description}
        </p>

        <div className={cn("mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row", enter, "delay-200")}>
          <Link href={siteConfig.cta.primary.href} className={cn(buttonVariants({ size: "xl" }), "group w-full rounded-full sm:w-auto")}>
            {siteConfig.cta.primary.label}
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link
            href={siteConfig.cta.secondary.href}
            className={cn(buttonVariants({ variant: "outline", size: "xl" }), "w-full rounded-full bg-card/60 sm:w-auto")}
          >
            {siteConfig.cta.secondary.label}
          </Link>
        </div>

        <ul className={cn("mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground", enter, "delay-300")}>
          {[noteA, noteB].filter(Boolean).map((n) => (
            <li key={n} className="inline-flex items-center gap-1.5">
              <Check className="size-4 text-primary" aria-hidden="true" /> {n}
            </li>
          ))}
        </ul>
      </div>

      {/* Product preview */}
      <div className="container-page relative mt-16 sm:mt-20">
        <div aria-hidden="true" className="absolute inset-x-[8%] top-10 bottom-0 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/35 via-brand-violet/25 to-transparent blur-3xl" />
        <div className={cn("relative mx-auto max-w-6xl", "animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 fill-mode-both delay-300 motion-reduce:animate-none")}>
          <div className="rounded-[1.4rem] border bg-card/50 p-1.5 shadow-float backdrop-blur sm:p-2">
            <DashboardPreview />
          </div>

          {/* Floating callouts (decorative) */}
          <div aria-hidden="true" className="absolute top-[56%] -left-10 hidden w-64 rounded-xl border bg-card/95 p-3.5 shadow-float backdrop-blur xl:block">
            <div className="flex items-start gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Bot className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold">Automation ran</p>
                <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                  Welcome series sent to 128 new sign-ups
                </p>
              </div>
              <span className="ml-auto text-[10px] text-muted-foreground">2m</span>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -right-10 -bottom-14 hidden w-56 rounded-xl border bg-card/95 p-3.5 shadow-float backdrop-blur xl:block">
            <p className="text-[11px] text-muted-foreground">Churn risk this month</p>
            <div className="mt-1 flex items-center gap-2">
              <p className="text-xl font-semibold tracking-tight">−18%</p>
              <span className="inline-flex items-center gap-0.5 rounded-full bg-success/10 px-1.5 py-0.5 text-[10px] font-medium text-success">
                <TrendingDown className="size-3" /> improving
              </span>
            </div>
            <div className="mt-2.5 flex h-8 items-end gap-1">
              {[60, 72, 55, 64, 48, 42, 36, 30].map((h, i) => (
                <span key={i} className="flex-1 rounded-sm bg-primary" style={{ height: `${h}%`, opacity: 0.25 + i * 0.1 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
