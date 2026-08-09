import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// No case study is written up with client permission yet (PRD v2 §8.3), so this section
// stays at the "what we build" fallback level: real work, generic captions, no invented
// outcomes or figures. Replace with named, permissioned case studies in Phase 2.
const DEMOS = [
  {
    image: "/work/birchwood-plumbing.jpg",
    alt: "Visual from a website redesign project for a South Wales trade business",
    label: "Trade services — website redesign",
  },
  {
    image: "/work/toast-marketing.jpg",
    alt: "Visual from a marketing site build",
    label: "Marketing site build",
  },
];

export function WhatWeBuild() {
  return (
    <section id="work" className="on-ink bg-background py-20 text-foreground md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-oxide">What we&rsquo;ve built</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Real work, in progress
          </h2>
          <p className="mt-4 text-foreground/70">
            We&rsquo;re writing up full case studies with client permission. In the meantime,
            here&rsquo;s a look at recent design work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {DEMOS.map((demo) => (
            <div
              key={demo.image}
              className="group overflow-hidden rounded border border-foreground/15"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={demo.image}
                  alt={demo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="border-t border-foreground/15 p-4 text-sm font-medium">
                {demo.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-foreground/30 text-foreground">
            <Link href="/contact">Ask to see more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
