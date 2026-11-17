import { Quote } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { stats, testimonials } from "@/data/home";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export function Testimonials() {
  const [featured, ...rest] = testimonials.items;
  return (
    <section id="customers" className="scroll-mt-20 border-t bg-muted/30 py-20 sm:py-28">
      <div className="container-page">
        {/* Stats band */}
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1 bg-card p-6 sm:p-8">
              <dt className="text-sm text-muted-foreground">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-[-0.03em] tabular-nums sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>

        <SectionHeading className="mt-20 sm:mt-28" eyebrow={testimonials.eyebrow} title={testimonials.title} />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-inverse p-8 text-inverse-foreground shadow-float sm:p-10 dark:border dark:border-primary/30 dark:bg-card dark:text-foreground">
              <div aria-hidden="true" className="absolute -top-24 -right-24 size-64 rounded-full bg-primary/40 blur-3xl" />
              <Quote className="relative size-8 text-brand-violet" aria-hidden="true" />
              <blockquote className="relative mt-6 font-serif text-2xl leading-snug sm:text-[1.7rem]">
                “{featured.quote}”
              </blockquote>
              <figcaption className="relative mt-10 flex items-center gap-3">
                <Avatar name={featured.name} className="size-11" />
                <span>
                  <span className="block font-semibold">{featured.name}</span>
                  <span className="block text-sm opacity-70">
                    {featured.role}, {featured.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          {rest.map((t, i) => (
            <Reveal key={t.name} delay={0.05 * (i + 1)}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border bg-card p-7 shadow-soft">
                <blockquote className="text-[0.975rem] leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Avatar name={t.name} index={i + 1} />
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-sm text-muted-foreground">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Initials avatar — replace with <Image> once you have real, licensed photos. */
function Avatar({ name, index = 0, className }: { name: string; index?: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white", className)}
      style={{ background: `color-mix(in oklab, var(--primary) ${100 - (index % 4) * 20}%, var(--avatar-shade))` }}
    >
      {initials(name)}
    </span>
  );
}
