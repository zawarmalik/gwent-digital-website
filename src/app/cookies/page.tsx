import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" updated="8 August 2026">
      <p>
        This site does not currently set any non-essential cookies — no analytics cookies, no
        advertising cookies, no third-party tracking. Because of that, no cookie consent banner
        is shown.
      </p>
      <p>
        If we add analytics or other non-essential cookies in future, we&rsquo;ll update this
        page and add a consent banner that lets you reject them as easily as you can accept them,
        in line with UK PECR requirements.
      </p>

      <h2>Strictly necessary</h2>
      <p>
        Our hosting provider (Vercel) may set technical cookies required to serve the site
        securely. These aren&rsquo;t used for tracking and don&rsquo;t require consent under UK
        law.
      </p>

      <h2>Questions</h2>
      <p>
        Email <a href="mailto:hello@gwentdigital.co.uk">hello@gwentdigital.co.uk</a> if you have
        any questions about this policy.
      </p>
    </LegalPage>
  );
}
