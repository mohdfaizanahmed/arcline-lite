"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * Current year, read in the browser so it never goes stale in static builds.
 * (The server snapshot is empty — the year appears immediately on hydration.)
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span className="inline-block min-w-[4ch] tabular-nums">{year}</span>;
}
