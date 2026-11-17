import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <Logo />
      <p className="mt-12 font-mono text-sm tracking-[0.2em] text-primary">ERROR 404</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
        This page took a <em className="font-serif font-normal text-primary italic">detour.</em>
      </h1>
      <p className="mt-5 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className={cn(buttonVariants({ size: "xl" }), "mt-9 rounded-full")}>
        <ArrowLeft aria-hidden="true" /> Back to home
      </Link>
    </main>
  );
}
