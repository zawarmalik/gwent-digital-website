import Link from "next/link";
import { Button } from "@/components/ui/button";

// No case study is written up with client permission yet (PRD v2 §8.3), and the only
// "work" images inherited from the legacy site turned out to be generic stock renders
// with no connection to actual client work — so this stays text-only rather than
// showing visuals that would misleadingly imply real screenshots. Replace with named,
// permissioned case studies (and real screenshots) in Phase 2.
export function WhatWeBuild() {
  return (
    <section id="work" className="on-ink bg-background py-20 text-foreground md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-oxide">What we&rsquo;ve built</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Real work, coming soon
          </h2>
          <p className="mt-4 text-foreground/70">
            We&rsquo;re writing up full case studies with client permission — real
            screenshots, real problems, what actually changed. Rather than show you
            placeholder images in the meantime, we&rsquo;d rather just tell you: ask us
            directly and we&rsquo;ll walk you through recent work.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-foreground/30 text-foreground">
            <Link href="/contact">Ask to see our work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
