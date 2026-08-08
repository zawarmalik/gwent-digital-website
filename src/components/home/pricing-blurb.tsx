import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PricingBlurb() {
  return (
    <section id="pricing" className="on-ink bg-background py-20 text-foreground md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-oxide">Pricing</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            Fixed quotes, no surprises
          </h2>
          <p className="mt-6 text-foreground/75">
            We price in ranges, agreed before any work starts, so you know the cost of a small
            fix versus a full rebuild before you commit. We&rsquo;re finalising our published
            price bands — until then, every project starts with a free, no-obligation
            consultation and a quote in writing.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-oxide text-paper hover:bg-oxide/90">
              <Link href="/contact">Get a free quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
