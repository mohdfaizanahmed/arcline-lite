/**
 * Arcline Lite has the homepage only. Sign-in, sign-up and contact links point to those
 * pages in the Arcline Pro live demo, so you can see them. Replace them with your own URLs.
 */
const proDemo = "https://arcline-omega.vercel.app";

/**
 * Global site settings.
 *
 * Change your product name, description, URLs and social links here —
 * they are used by the header, footer, SEO metadata and Open Graph tags.
 */
export const siteConfig = {
  name: "Arcline",
  tagline: "Everything your next SaaS needs to launch beautifully.",
  description:
    "Arcline unifies product analytics, automations and team workflows in one calm workspace — so your team spends less time stitching tools together and more time shipping.",
  /**
   * Your site's public URL (used for the sitemap, robots.txt, canonical metadata and social cards).
   * Order: NEXT_PUBLIC_SITE_URL → your Vercel production domain (set automatically on Vercel) → placeholder.
   */
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://arcline.example.com"),
  /**
   * Demo mode: shows a slim notice on the website and a "Sample data" badge in the
   * dashboard and auth screens, so visitors know the content is illustrative.
   * Set `enabled: false` once you've replaced the demo content with your own.
   */
  demo: {
    enabled: true,
    message: "Arcline Lite: the free homepage of Arcline, a 33-page Next.js SaaS template. Content is fictional.",
    /** Button shown in the notice bar. Set purchaseUrl to "" to hide it. */
    purchaseLabel: "Get the full template",
    purchaseUrl: process.env.NEXT_PUBLIC_PURCHASE_URL ?? "https://faizancse.gumroad.com/l/arcline",
  },
  email: "hello@arcline.example.com",
  links: {
    x: "https://x.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  cta: {
    primary: { label: "Start free trial", href: `${proDemo}/register` },
    secondary: { label: "Book a demo", href: `${proDemo}/contact` },
    signIn: { label: "Sign in", href: `${proDemo}/login` },
  },
  /** Links to the full template (used in the footer). Remove them freely. */
  pro: {
    url: "https://faizancse.gumroad.com/l/arcline",
    demo: proDemo,
  },
} as const;

export type SiteConfig = typeof siteConfig;
