"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { pricingPlans, type PricingPlan } from "@/config/pricing";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "yearly";

/** Pricing grid with a monthly / yearly switch. Used on the homepage and /pricing. */
export function PricingCards({
  plans = pricingPlans,
  headingLevel = "h3",
}: {
  plans?: PricingPlan[];
  /** Use "h2" when the cards sit directly under the page's <h1>. */
  headingLevel?: "h2" | "h3";
}) {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <div className="flex flex-col items-center">
      <div role="radiogroup" aria-label="Billing period" className="inline-flex items-center gap-1 rounded-full border bg-card p-1 shadow-soft">
        {(["monthly", "yearly"] as const).map((b) => (
          <button
            key={b}
            type="button"
            role="radio"
            aria-checked={billing === b}
            onClick={() => setBilling(b)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
              billing === b ? "bg-inverse text-inverse-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {b}
            {b === "yearly" && (
              <span className={cn("rounded-full px-1.5 py-0.5 text-[10px] font-semibold", billing === b ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground")}>
                −20%
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-12 grid w-full items-stretch gap-4 lg:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} billing={billing} headingLevel={headingLevel} />
        ))}
      </div>
    </div>
  );
}

function PlanCard({ plan, billing, headingLevel: Heading }: { plan: PricingPlan; billing: Billing; headingLevel: "h2" | "h3" }) {
  const featured = plan.featured;
  const price = plan.price?.[billing];

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border p-7 sm:p-8",
        featured
          ? "border-transparent bg-inverse text-inverse-foreground shadow-float lg:-my-3 lg:py-11 dark:border-primary/40 dark:bg-card dark:text-foreground"
          : "bg-card shadow-soft",
      )}
    >
      {featured && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute -top-20 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
        </div>
      )}
      <div className="relative flex items-center justify-between">
        <Heading className="text-lg font-semibold">{plan.name}</Heading>
        {plan.badge && (
          <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">{plan.badge}</span>
        )}
      </div>
      <p className={cn("relative mt-2 text-sm", featured ? "opacity-70" : "text-muted-foreground")}>{plan.description}</p>

      <p className="relative mt-7 flex h-14 items-end gap-1.5">
        {price === undefined ? (
          <span className="text-5xl font-semibold tracking-[-0.04em]">Custom</span>
        ) : (
          <>
            <span className="text-5xl font-semibold tracking-[-0.04em] tabular-nums">${price}</span>
            <span className={cn("pb-1.5 text-sm", featured ? "opacity-70" : "text-muted-foreground")}>
              {price === 0 ? "forever" : "/ seat / month"}
            </span>
          </>
        )}
      </p>
      <p className={cn("relative mt-1 h-5 text-xs", featured ? "opacity-60" : "text-muted-foreground")}>
        {price ? (billing === "yearly" ? "Billed annually" : "Billed monthly") : price === 0 ? "No credit card needed" : "Volume discounts available"}
      </p>

      <Link
        href={plan.cta.href}
        className={cn(
          buttonVariants({ variant: featured ? "default" : "outline", size: "xl" }),
          "relative mt-7 w-full rounded-full",
          !featured && "bg-card",
        )}
      >
        {plan.cta.label}
      </Link>

      <ul className="relative mt-8 flex flex-col gap-3 border-t border-current/10 pt-7 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <Check className={cn("mt-0.5 size-4 shrink-0", featured ? "text-brand-violet" : "text-primary")} aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}
