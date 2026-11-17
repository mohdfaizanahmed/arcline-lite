/**
 * Homepage content.
 *
 * Every word on the homepage lives in this file. Tip: wrap words in
 * *asterisks* inside any title to render them in the italic serif accent font.
 */
import {
  Boxes,
  ChartSpline,
  Gem,
  Hexagon,
  Layers,
  LockKeyhole,
  Mountain,
  Orbit,
  Shapes,
  Triangle,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const hero = {
  announcement: {
    label: "New",
    text: "Workflow automations are here",
    href: "#features",
  },
  title: "See every signal. Ship every *decision.*",
  description:
    "Arcline brings product analytics, automations and team workflows into one calm workspace — so you spend less time stitching tools together and more time building.",
  note: "Free 14-day trial · No credit card required",
};

/** Heading above the logo strip. */
export const logoCloudTitle = "Trusted by 12,000+ fast-moving product teams";

/** Fictional brands — replace with your customers' logos (SVG recommended). */
export const logos: { name: string; icon: LucideIcon }[] = [
  { name: "Halcyon", icon: Orbit },
  { name: "Quartzly", icon: Gem },
  { name: "Mosaic", icon: Shapes },
  { name: "Ferrous", icon: Hexagon },
  { name: "Summit", icon: Mountain },
  { name: "Layerly", icon: Layers },
  { name: "Prism", icon: Triangle },
  { name: "Boxwood", icon: Boxes },
];

export type FeatureVisual = "chart" | "automation" | "team" | "security" | "speed" | null;

export const features = {
  eyebrow: "Platform",
  title: "Everything you need to *grow,* nothing you don't",
  description:
    "A focused set of tools that work together out of the box — no plugins to configure, no data to reconcile.",
  items: [
    {
      icon: ChartSpline,
      title: "Real-time analytics",
      description:
        "Track activation, retention and revenue as it happens. Build a dashboard in minutes, not sprints.",
      visual: "chart" as FeatureVisual,
    },
    {
      icon: Workflow,
      title: "No-code automations",
      description:
        "Trigger onboarding emails, Slack alerts and CRM updates from any event your product emits.",
      visual: "automation" as FeatureVisual,
    },
    {
      icon: Users,
      title: "Built for teams",
      description:
        "Shared workspaces, comments and granular roles keep product, growth and support aligned.",
      visual: "team" as FeatureVisual,
    },
    {
      icon: LockKeyhole,
      title: "Secure by default",
      description: "Role-based access, single sign-on and audit logs on every plan that needs them.",
      visual: "security" as FeatureVisual,
    },
    {
      icon: Zap,
      title: "Fast everywhere",
      description: "Edge-cached queries return in under 100ms, even across billions of events.",
      visual: "speed" as FeatureVisual,
    },
  ],
};

export const stats = [
  { value: "12k+", label: "teams shipping with Arcline" },
  { value: "3.2B", label: "events processed every month" },
  { value: "80+", label: "native integrations" },
  { value: "4.9/5", label: "average customer rating" },
];

/** Fictional customers — replace with real, approved testimonials. */
export const testimonials = {
  eyebrow: "Customers",
  title: "Loved by teams who *ship*",
  items: [
    {
      quote:
        "We replaced four tools with Arcline in a single afternoon. Our weekly metrics review went from an hour of spreadsheet wrangling to ten minutes of actual decisions.",
      name: "Maya Okafor",
      role: "VP Product",
      company: "Halcyon",
      featured: true,
    },
    {
      quote: "The automations alone paid for the subscription in the first month.",
      name: "Daniel Reyes",
      role: "Head of Growth",
      company: "Quartzly",
    },
    {
      quote:
        "Finally, a dashboard our engineers and our sales team both actually open every morning.",
      name: "Priya Raman",
      role: "Co-founder & CTO",
      company: "Mosaic",
    },
    {
      quote: "Setup took fifteen minutes. The onboarding is the best I've seen in a B2B tool.",
      name: "Tom Lindqvist",
      role: "Engineering Manager",
      company: "Summit",
    },
    {
      quote:
        "Comment threads on charts changed how we run planning. Every decision now has context.",
      name: "Aisha Bello",
      role: "Product Lead",
      company: "Layerly",
    },
  ],
};

export const faqs = {
  eyebrow: "FAQ",
  title: "Questions, *answered*",
  description: "Can't find what you're looking for? Our team usually replies within an hour.",
  items: [
    {
      question: "How long does it take to get started?",
      answer:
        "Most teams are up and running in under fifteen minutes. Install the SDK or connect an existing data source, and your first dashboard is generated automatically.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Yes. You can upgrade, downgrade or cancel at any time from your billing settings. Changes are prorated to the day.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Every workspace has role-based permissions and two-factor authentication. Enterprise plans add single sign-on, audit logs and data residency options.",
    },
    {
      question: "Do you offer discounts for startups or non-profits?",
      answer:
        "We do. Early-stage startups and registered non-profits get 50% off the Growth plan for the first year — just reach out to our team.",
    },
    {
      question: "What happens when my trial ends?",
      answer:
        "You'll be moved to the free Starter plan automatically. Nothing is deleted, and you can upgrade whenever you're ready.",
    },
  ],
};

export const finalCta = {
  title: "Ready to see your product *clearly?*",
  description:
    "Join 12,000+ teams using Arcline to understand their users and grow faster. Set up in minutes.",
};
