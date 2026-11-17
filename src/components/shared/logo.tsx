import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** The Arcline mark: an arc resting on a line. Swap the SVG for your own logo. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      <rect width="32" height="32" rx="9" className="fill-primary" />
      <path
        d="M9 20.5a7 7 0 0 1 14 0"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M7.5 24h17" stroke="white" strokeOpacity=".55" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md text-[1.05rem] font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <LogoMark />
      <span>{siteConfig.name}</span>
    </Link>
  );
}
