/**
 * Pricing plans — shared by the homepage preview and the /pricing page.
 * Prices are per seat, per month. `yearly` is the monthly price when billed annually.
 */
export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: { monthly: number; yearly: number } | null; // null = custom / contact sales
  cta: { label: string; href: string };
  features: string[];
  featured?: boolean;
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For founders validating a new idea.",
    price: { monthly: 0, yearly: 0 },
    cta: { label: "Start for free", href: "https://arcline-omega.vercel.app/register" },
    features: [
      "Up to 3 team members",
      "1,000 tracked events / month",
      "Core dashboards",
      "5 automations",
      "Community support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    description: "For teams scaling a product with real users.",
    price: { monthly: 24, yearly: 19 },
    cta: { label: "Start 14-day trial", href: "https://arcline-omega.vercel.app/register" },
    features: [
      "Unlimited team members",
      "250k tracked events / month",
      "Custom dashboards & reports",
      "Unlimited automations",
      "All integrations",
      "Priority email support",
    ],
    featured: true,
    badge: "Most popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For organisations with advanced security needs.",
    price: null,
    cta: { label: "Talk to sales", href: "https://arcline-omega.vercel.app/contact" },
    features: [
      "Everything in Growth",
      "SAML SSO & SCIM",
      "Audit logs & data residency",
      "Invoice billing & custom terms",
      "Dedicated success manager",
    ],
  },
];

export const pricingNote = "Prices in USD. Save 20% with annual billing.";
