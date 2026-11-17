import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PricingCards } from "@/components/pricing/pricing-cards";
import { SectionHeading } from "@/components/shared/section-heading";
import { pricingNote } from "@/config/pricing";

export function PricingPreview() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that *scales* with you"
          description="Start free, upgrade when you're ready. Every plan includes unlimited dashboards and our core analytics."
        />
        <div className="mt-12">
          <PricingCards />
        </div>
        <p className="mt-10 flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground sm:flex-row">
          {pricingNote}
          <Link href="https://arcline-omega.vercel.app/pricing" className="group inline-flex items-center gap-1 font-medium text-primary hover:underline">
            Compare all plans <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
}
