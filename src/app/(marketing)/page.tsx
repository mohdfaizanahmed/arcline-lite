import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { Testimonials } from "@/components/sections/testimonials";

/**
 * Homepage. Reorder, remove or duplicate sections freely — each one is
 * self-contained and reads its content from src/data/home.ts.
 *
 * Arcline Pro adds an interactive product tour and an integrations section here,
 * plus 32 more pages: https://faizancse.gumroad.com/l/arcline
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <Testimonials />
      <PricingPreview />
      <Faq />
      <Cta />
    </>
  );
}
