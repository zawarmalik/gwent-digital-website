import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="container-site pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="max-w-3xl">
        <p className="eyebrow text-oxide">Newport &middot; Cardiff &middot; South Wales</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
          We build websites for business owners who don&rsquo;t have time for jargon.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink/75">
          Most agencies build you a website. We&rsquo;ve run the businesses that need one. We
          look at your data, find where you&rsquo;re losing customers, and build the thing that
          fixes it.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-oxide text-paper hover:bg-oxide/90">
            <Link href="/contact">Start a project</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-ink/20 text-ink">
            <Link href="#work">See our work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
