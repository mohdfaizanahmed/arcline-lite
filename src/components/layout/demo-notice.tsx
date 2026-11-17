"use client";

import { useSyncExternalStore } from "react";
import { ArrowUpRight, X } from "lucide-react";

import { siteConfig } from "@/config/site";

const KEY = "arcline-demo-notice-dismissed";
const listeners = new Set<() => void>();

function read() {
  try {
    return sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

function dismiss() {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch {
    // Storage blocked (private mode): hide for this page view only.
  }
  hiddenForView = true;
  listeners.forEach((l) => l());
}

let hiddenForView = false;
const subscribe = (l: () => void) => {
  listeners.add(l);
  return () => listeners.delete(l);
};

/**
 * Slim "this is a demo" bar shown above the marketing header.
 * Controlled by `siteConfig.demo` — set `enabled: false` to remove it.
 */
export function DemoNotice() {
  const dismissed = useSyncExternalStore(subscribe, () => hiddenForView || read(), () => false);
  const { enabled, message, purchaseLabel, purchaseUrl } = siteConfig.demo;
  if (!enabled || dismissed) return null;

  return (
    <div role="region" aria-label="Demo notice" className="relative bg-inverse text-inverse-foreground dark:bg-accent dark:text-accent-foreground">
      <div className="container-page flex min-h-10 items-center justify-center gap-x-4 gap-y-1 py-2 pr-12 text-center text-[13px] max-sm:flex-col sm:pr-12">
        <p className="opacity-85">{message}</p>
        {purchaseUrl && (
          <a
            href={purchaseUrl}
            className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {purchaseLabel} <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="absolute top-1/2 right-3 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2"
        aria-label="Dismiss demo notice"
      >
        <X className="size-3.5" aria-hidden="true" />
      </button>
    </div>
  );
}

/** Compact badge for the dashboard and auth screens. Hidden when demo mode is off. */
export function DemoBadge() {
  if (!siteConfig.demo.enabled) return null;
  return (
    <span
      title={siteConfig.demo.message}
      className="hidden items-center rounded-full border border-dashed border-primary/40 bg-accent px-2.5 py-1 text-[11px] font-medium text-accent-foreground sm:inline-flex"
    >
      Sample data
    </span>
  );
}
