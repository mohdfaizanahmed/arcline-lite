import Link from "next/link";

import { CurrentYear } from "@/components/shared/current-year";
import { Logo } from "@/components/shared/logo";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/shared/social-icons";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

const socials = [
  { label: "X (Twitter)", href: siteConfig.links.x, icon: XIcon },
  { label: "GitHub", href: siteConfig.links.github, icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedInIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-[1.2fr_2fr] lg:gap-16">
        <div className="flex max-w-xs flex-col gap-5">
          <Logo />
          <p className="text-sm leading-relaxed text-muted-foreground">{siteConfig.tagline}</p>
          <ul className="flex items-center gap-1" aria-label="Social media">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Icon className="size-4" />
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {footerNav.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold">{group.title}</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © <CurrentYear /> {siteConfig.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
