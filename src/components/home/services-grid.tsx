import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Bot,
  Database,
  BarChart3,
  Search,
  Palette,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { DEPARTMENTS } from "@/lib/departments";

const ICONS: Record<string, LucideIcon> = {
  "web-design": Globe,
  ecommerce: ShoppingCart,
  "ai-automation": Bot,
  "custom-systems-erp": Database,
  "data-analytics": BarChart3,
  "seo-local-search": Search,
  "branding-design": Palette,
  "support-maintenance": LifeBuoy,
};

export function ServicesGrid() {
  return (
    <section id="services" className="container-site py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-oxide">What we do</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Eight departments, one point of contact
        </h2>
        <p className="mt-4 text-ink/70">
          Whatever the job needs — a new site, a stock system, or the automation that saves you
          three hours a week — it comes from the same two people.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DEPARTMENTS.map((dept) => {
          const Icon = ICONS[dept.slug];
          return (
            <Link
              key={dept.slug}
              href={`/contact?service=${dept.slug}`}
              className="group flex flex-col rounded border border-border bg-card p-6 transition-[border-color,box-shadow] hover:border-oxide hover:shadow-[0_4px_20px_-8px_rgba(16,23,28,0.18)]"
            >
              <Icon className="size-6 text-oxide" aria-hidden />
              <h3 className="mt-4 font-display text-base font-bold text-ink">{dept.name}</h3>
              <p className="mt-2 text-sm text-ink/70">{dept.summary}</p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate">
                {dept.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <span className="mt-4 text-xs font-medium text-oxide opacity-0 transition-opacity group-hover:opacity-100">
                Ask about this &rarr;
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
