"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
];

const PHONE = "+447405376702";
const PHONE_DISPLAY = "07405 376702";

export function SiteHeader() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-[padding,background-color] duration-200 ${
        condensed
          ? "border-border/60 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80"
          : "border-transparent bg-paper"
      }`}
    >
      <div
        className={`container-site flex items-center justify-between transition-[padding] duration-200 ${
          condensed ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" className="font-display text-lg font-extrabold tracking-tight text-ink">
          Gwent<span className="text-oxide">Digital</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-oxide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="default" className="bg-oxide text-paper hover:bg-oxide/90">
            <Link href="/contact">Start a project</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-ink text-paper sm:max-w-none">
            <SheetHeader>
              <SheetTitle className="font-display text-paper">Menu</SheetTitle>
            </SheetHeader>
            <nav
              className="flex flex-1 flex-col items-start gap-6 px-6 pt-4"
              aria-label="Mobile primary"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl font-bold"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold text-oxide"
              >
                Start a project
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="mt-6 inline-flex items-center gap-2 rounded border border-paper/30 px-4 py-3 text-base font-medium"
              >
                <Phone className="size-4" /> {PHONE_DISPLAY}
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
