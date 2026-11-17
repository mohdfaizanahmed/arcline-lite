import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AccentText } from "@/components/shared/accent-text";
import { Reveal } from "@/components/shared/reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { finalCta } from "@/data/home";
import { cn } from "@/lib/utils";

type CtaProps = {
  title?: string;
  description?: string;
};

/** Closing call-to-action panel. Defaults to the homepage copy in src/data/home.ts. */
export function Cta({ title = finalCta.title, description = finalCta.description }: CtaProps = {}) {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-page">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-inverse px-6 py-16 text-center text-inverse-foreground sm:px-16 sm:py-24 dark:border dark:bg-card dark:text-foreground">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-grid opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] dark:opacity-60" />
              <div className="absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-primary/50 blur-[100px]" />
              <div className="absolute -bottom-40 left-1/4 h-60 w-96 rounded-full bg-brand-violet/30 blur-[90px]" />
            </div>
            <h2 className="mx-auto max-w-3xl font-heading text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-balance sm:text-6xl">
              <AccentText text={title} accentClassName="text-brand-violet pr-1" />
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed opacity-75">{description}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={siteConfig.cta.primary.href} className={cn(buttonVariants({ size: "xl" }), "group w-full rounded-full sm:w-auto")}>
                {siteConfig.cta.primary.label}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link
                href={siteConfig.cta.secondary.href}
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-current/20 px-5 text-[0.95rem] font-medium transition-colors hover:bg-current/10 focus-visible:outline-2 focus-visible:outline-offset-2 sm:w-auto"
              >
                {siteConfig.cta.secondary.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
