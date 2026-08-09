import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PricingBlurb } from "@/components/home/pricing-blurb";
import { DEPARTMENTS } from "@/lib/departments";
import { DEPARTMENT_CONTENT } from "@/lib/department-content";
import { DEPARTMENT_ICONS } from "@/lib/department-icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return DEPARTMENTS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dept = DEPARTMENTS.find((d) => d.slug === slug);
  if (!dept) return {};

  return {
    title: dept.name,
    description: dept.summary,
    alternates: { canonical: `/services/${dept.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const dept = DEPARTMENTS.find((d) => d.slug === slug);
  const content = DEPARTMENT_CONTENT[slug];

  if (!dept || !content) notFound();

  const Icon = DEPARTMENT_ICONS[dept.slug];

  return (
    <div>
      {/* Hero */}
      <div className="container-site py-16 md:py-24">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate transition-colors hover:text-oxide"
        >
          <ArrowLeft className="size-3.5" aria-hidden /> All services
        </Link>
        <div className="mt-6 max-w-2xl">
          <div className="flex items-center gap-3">
            <Icon className="size-8 text-oxide" aria-hidden />
            <p className="eyebrow text-oxide">Services</p>
          </div>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
            {dept.name}
          </h1>
          <p className="mt-4 text-lg text-ink/75">{content.outcome}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-oxide text-paper hover:bg-oxide/90">
              <Link href={`/contact?service=${dept.slug}`}>Ask about this</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-ink/20 text-ink">
              <Link href="/work">See our work</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* The problem it solves */}
      <div className="container-site pb-16 md:pb-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-xl font-bold text-ink">The problem it solves</h2>
          <div className="mt-4 space-y-4 text-ink/75">
            {content.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* What's included */}
      <div className="border-y border-border/60 bg-muted/40 py-16 md:py-24">
        <div className="container-site">
          <h2 className="font-display text-xl font-bold text-ink">What&rsquo;s included</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.deliverables.map((item) => (
              <li
                key={item}
                className="rounded border border-border bg-card p-5 text-sm text-ink/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* How it works */}
      <div className="on-ink bg-background py-16 text-foreground md:py-24">
        <div className="container-site">
          <h2 className="font-display text-xl font-bold">How it works</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {content.process.map((step, i) => (
              <li key={step} className="rounded border border-foreground/15 p-5">
                <span className="font-mono text-sm font-medium text-oxide">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm text-foreground/85">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Tools & tech */}
      <div className="container-site py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-xl font-bold text-ink">Tools &amp; tech</h2>
          <p className="mt-4 text-ink/75">{content.tools}</p>
        </div>
      </div>

      {/* Pricing */}
      <PricingBlurb serviceSlug={dept.slug} />

      {/* Related work */}
      <div className="container-site py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-xl font-bold text-ink">Related work</h2>
          <p className="mt-4 text-ink/75">{content.relatedWork.blurb}</p>
          <div className="mt-6">
            <Button asChild variant="outline" className="border-ink/20 text-ink">
              <Link href="/work">{content.relatedWork.linkLabel}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container-site pb-20 md:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-oxide">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Questions about {dept.name}
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion type="single" collapsible>
            {content.faqs.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-bold text-ink">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink/70">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="on-ink bg-background py-20 text-foreground md:py-28">
        <div className="container-site text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Thinking about {dept.name}?
          </h2>
          <p className="mt-4 text-foreground/70">
            Ask us directly — a free, no-obligation conversation about what you actually need.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-oxide text-paper hover:bg-oxide/90">
              <Link href={`/contact?service=${dept.slug}`}>Ask about this</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
