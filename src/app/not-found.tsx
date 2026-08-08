import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-site flex flex-col items-center justify-center py-32 text-center">
      <p className="eyebrow text-oxide">404</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
        We couldn&rsquo;t find that page
      </h1>
      <p className="mt-4 max-w-md text-ink/70">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Button asChild size="lg" className="mt-8 bg-oxide text-paper hover:bg-oxide/90">
        <Link href="/">Back to homepage</Link>
      </Button>
    </div>
  );
}
