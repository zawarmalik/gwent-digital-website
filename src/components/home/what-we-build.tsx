import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLIENT_PROJECTS } from "@/lib/work";

// Short, factual entries only — no invented problem/outcome narrative until real
// write-ups and (where needed) client permission exist. See src/lib/work.ts and
// PRD v2 §8.3.
export function WhatWeBuild() {
  return (
    <section id="work" className="on-ink bg-background py-20 text-foreground md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-oxide">Recent work</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Real businesses, real builds
          </h2>
          <p className="mt-4 text-foreground/70">
            Full write-ups with screenshots are coming. For now, here&rsquo;s who we&rsquo;ve
            built for.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CLIENT_PROJECTS.map((p) => (
            <div
              key={p.slug}
              className="rounded border border-foreground/15 p-6 transition-colors hover:border-oxide"
            >
              <p className="eyebrow text-silt">{p.sector}</p>
              <h3 className="mt-2 font-display text-lg font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-foreground/70">{p.description}</p>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-oxide hover:underline"
                >
                  Visit site <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-foreground/30 text-foreground">
            <Link href="/work">See all work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
