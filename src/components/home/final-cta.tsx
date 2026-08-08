import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="on-ink bg-background py-24 text-foreground">
      <div className="container-site text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Tell us what&rsquo;s not working.
        </h2>
        <p className="mt-4 text-foreground/70">
          A free, no-obligation conversation about your website or your data.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-oxide text-paper hover:bg-oxide/90">
            <Link href="/contact">Start a project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
