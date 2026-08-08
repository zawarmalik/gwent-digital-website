import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Gwent Digital for a free, no-obligation consultation about your website or business automation.",
  alternates: { canonical: "/contact" },
};

type Props = {
  searchParams: Promise<{ service?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams;

  return (
    <div className="container-site py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow text-oxide">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          Get your free website audit
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          Tell us what you need. We&rsquo;ll reply within one working day with honest advice —
          not a sales script.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <ContactForm defaultService={service} />

        <aside className="space-y-8">
          <div>
            <h2 className="font-display text-lg font-bold text-ink">Direct contact</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-oxide" aria-hidden />
                <a href="mailto:hello@gwentdigital.co.uk" className="hover:text-oxide">
                  hello@gwentdigital.co.uk
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-oxide" aria-hidden />
                <a href="tel:+447405376702" className="hover:text-oxide">
                  07405 376702
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-oxide" aria-hidden />
                Newport &amp; South Wales
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-oxide" aria-hidden />
                We reply within one working day
              </li>
            </ul>
          </div>

          <div className="rounded border border-border bg-muted/40 p-5 text-sm text-ink/70">
            We only use your details to reply to your enquiry — no marketing lists. See our{" "}
            <a href="/privacy" className="underline hover:text-oxide">
              Privacy Policy
            </a>
            .
          </div>
        </aside>
      </div>
    </div>
  );
}
