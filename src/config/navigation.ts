/**
 * Navigation for the marketing header and footer.
 * Add, remove or reorder links here — the header and footer update automatically.
 */
export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "Features", href: "/#features" },
  { label: "Customers", href: "/#customers" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export const footerNav: NavGroup[] = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "/#features" },
      { label: "Customers", href: "/#customers" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Arcline Pro",
    items: [
      { label: "Get the full template", href: "https://faizancse.gumroad.com/l/arcline", external: true },
      { label: "Live demo", href: "https://arcline-omega.vercel.app", external: true },
      { label: "Dashboard demo", href: "https://arcline-omega.vercel.app/dashboard", external: true },
    ],
  },
];
