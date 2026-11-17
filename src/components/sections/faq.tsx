import Link from "next/link";
import { Plus } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { faqs } from "@/data/home";

type FaqItem = { question: string; answer: string };

type FaqProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: FaqItem[];
};

/**
 * FAQ section with heading on the left and an accordion on the right.
 * Defaults to the homepage questions in src/data/home.ts.
 */
export function Faq({
  eyebrow = faqs.eyebrow,
  title = faqs.title,
  description = faqs.description,
  items = faqs.items,
}: FaqProps = {}) {
  return (
    <section id="faq" className="scroll-mt-20 border-t py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading align="left" eyebrow={eyebrow} title={title} description={description} />
          <Link href="https://arcline-omega.vercel.app/contact" className="mt-6 inline-flex text-sm font-medium text-primary hover:underline">
            Contact support →
          </Link>
        </div>
        <FaqList items={items} />
      </div>
    </section>
  );
}

/** Accordion built on native <details> — accessible and works without JavaScript. */
export function FaqList({ items, name = "faq", openFirst = true }: { items: FaqItem[]; name?: string; openFirst?: boolean }) {
  return (
    <div className="divide-y border-y">
      {items.map((item, i) => (
        <details key={item.question} name={name} className="group" open={openFirst && i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden">
            {item.question}
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 group-open:rotate-45 group-open:border-primary/40 group-open:text-primary">
              <Plus className="size-3.5" aria-hidden="true" />
            </span>
          </summary>
          <p className="max-w-xl pb-6 leading-relaxed text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
