import Link from "next/link";

const PHONE_DISPLAY = "07405 376702";
const EMAIL = "hello@gwentdigital.co.uk";

export function SiteFooter() {
  return (
    <footer className="on-ink border-t border-border bg-background text-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-display text-lg font-extrabold tracking-tight">
            Gwent<span className="text-oxide">Digital</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-foreground/70">
            Websites and business automation for independent businesses in Newport and South
            Wales.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="eyebrow text-foreground/60">Site</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/#services" className="transition-colors hover:text-oxide">Services</Link></li>
            <li><Link href="/work" className="transition-colors hover:text-oxide">Work</Link></li>
            <li><Link href="/#pricing" className="transition-colors hover:text-oxide">Pricing</Link></li>
            <li><Link href="/#about" className="transition-colors hover:text-oxide">About</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-oxide">Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="eyebrow text-foreground/60">Legal</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/privacy" className="transition-colors hover:text-oxide">Privacy policy</Link></li>
            <li><Link href="/cookies" className="transition-colors hover:text-oxide">Cookie policy</Link></li>
            <li><Link href="/terms" className="transition-colors hover:text-oxide">Terms of service</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-foreground/60">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-oxide">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href="tel:+447405376702" className="transition-colors hover:text-oxide">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>Newport, South Wales</li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="transition-colors hover:text-oxide"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Gwent Digital Ltd.</p>
          <p>Newport &middot; Cardiff &middot; South Wales</p>
        </div>
      </div>
      {/*
        UK company law requires the registered company number and registered office address
        in the footer (PRD v2 §17). Neither has been supplied yet (owner action, PRD §19 item 1) —
        add them here as soon as they're confirmed. Do not fill this with a guessed value.
      */}
    </footer>
  );
}
