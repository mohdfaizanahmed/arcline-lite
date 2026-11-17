import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

/**
 * Social sharing image (Open Graph + X/Twitter), generated at build time.
 * Edit the text/colours below, or replace this file with a static
 * `opengraph-image.png` (1200×630) in the same folder.
 */
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0b0d1a",
          backgroundImage:
            "radial-gradient(circle at 50% -10%, rgba(88,71,245,0.55), transparent 55%), radial-gradient(circle at 90% 110%, rgba(167,139,250,0.35), transparent 45%)",
          color: "#f6f6fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="9" fill="#5847F5" />
            <path d="M9 20.5a7 7 0 0 1 14 0" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M7.5 24h17" stroke="#fff" strokeOpacity=".55" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1 }}>{siteConfig.name}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02, maxWidth: 900 }}>
            See every signal. Ship every decision.
          </div>
          <div style={{ fontSize: 30, color: "rgba(246,246,251,0.7)", maxWidth: 860 }}>{siteConfig.tagline}</div>
        </div>
      </div>
    ),
    size,
  );
}
