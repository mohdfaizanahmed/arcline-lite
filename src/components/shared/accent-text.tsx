import { Fragment } from "react";

import { cn } from "@/lib/utils";

/**
 * Renders a string where words wrapped in *asterisks* use the italic serif
 * accent font. Example: "Ship every *decision.*"
 */
export function AccentText({ text, accentClassName }: { text: string; accentClassName?: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em
            key={i}
            className={cn(
              "font-serif font-normal tracking-normal italic",
              accentClassName,
            )}
          >
            {part.slice(1, -1)}
          </em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
