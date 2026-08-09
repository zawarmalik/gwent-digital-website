import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLIENT_PROJECTS, CAPABILITIES } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Websites, systems, and automation built by Gwent Digital for real businesses in Newport and South Wales.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="container-site py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow text-oxide">Work</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          What we&rsquo;ve built
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Full case studies — the problem, what we built, what changed — are still being
          written up with client permission. Until then, here&rsquo;s who we&rsquo;ve built
          for and what else we do.
        </p>
      </div>

      <div className="mt-14">
        <h2 className="font-display text-xl font-bold text-ink">Client work</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {CLIENT_PROJECTS.map((p) => (
            <div
              key={p.slug}
              className="rounded border border-border bg-card p-6 transition-colors hover:border-oxide"
            >
              <p className="eyebrow text-slate">{p.sector}</p>
              <h3 className="mt-2 font-display text-lg font-bold text-ink">{p.name}</h3>
              <p className="mt-2 text-sm text-ink/70">{p.description}</p>
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
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl font-bold text-ink">What else we build</h2>
        <p className="mt-2 text-sm text-ink/70">
          Not tied to a single named client — capabilities we bring to any project.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {CAPABILITIES.map((c) => (
            <div key={c.slug} className="rounded border border-border bg-card p-6">
              <h3 className="font-display text-lg font-bold text-ink">{c.name}</h3>
              <p className="mt-2 text-sm text-ink/70">{c.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded border border-border bg-muted/40 p-8 text-center">
        <h2 className="font-display text-xl font-bold text-ink">Want to see more?</h2>
        <p className="mt-2 text-ink/70">
          Ask us directly and we&rsquo;ll walk you through recent work in more detail.
        </p>
        <div className="mt-6">
          <Button asChild className="bg-oxide text-paper hover:bg-oxide/90">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
