"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

/**
 * Light / dark switch. Icons are swapped with CSS (via the `.dark` class)
 * so there is no hydration flash and no "mounted" check needed.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "relative inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2",
        className,
      )}
    >
      <Sun className="size-[1.1rem] scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" aria-hidden="true" />
      <Moon className="absolute size-[1.1rem] scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" aria-hidden="true" />
      <span className="sr-only">Toggle colour theme</span>
    </button>
  );
}
