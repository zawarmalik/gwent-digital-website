import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DEPARTMENTS } from "@/lib/departments";
import { DEPARTMENT_ICONS } from "@/lib/department-icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Eight departments — web design, e-commerce, AI & automation, custom systems, data & analytics, SEO, branding and support — run by Gwent Digital for businesses in Newport and South Wales.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="container-site py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow text-oxide">Services</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          Eight departments, one point of contact
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Whatever the job needs — a new site, a stock system, or the automation that saves you
          three hours a week — it comes from the same two people. Pick a department below for
          what&rsquo;s included, how it works, and what it typically involves.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DEPARTMENTS.map((dept) => {
          const Icon = DEPARTMENT_ICONS[dept.slug];
          return (
            <Link
              key={dept.slug}
              href={`/services/${dept.slug}`}
              className="group flex flex-col rounded border border-border bg-card p-6 transition-[border-color,box-shadow] hover:border-oxide hover:shadow-[0_4px_20px_-8px_rgba(16,23,28,0.18)]"
            >
              <Icon className="size-6 text-oxide" aria-hidden />
              <h2 className="mt-4 font-display text-base font-bold text-ink">{dept.name}</h2>
              <p className="mt-2 text-sm text-ink/70">{dept.summary}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate">
                {dept.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <span className="mt-4 text-xs font-medium text-oxide opacity-0 transition-opacity group-hover:opacity-100">
                See details &rarr;
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-16 rounded border border-border bg-muted/40 p-8 text-center">
        <h2 className="font-display text-xl font-bold text-ink">Not sure which one fits?</h2>
        <p className="mt-2 text-ink/70">
          Most projects touch more than one department. Tell us what you&rsquo;re dealing with
          and we&rsquo;ll work out the right scope together.
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
