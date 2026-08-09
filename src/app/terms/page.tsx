import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="8 August 2026">
      <p>
        These terms apply to work carried out by Gwent Digital Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
        for clients (&ldquo;you&rdquo;). Specific project terms — price, timeline and scope — are
        agreed in writing (email or a signed quote) before work starts; where anything in a
        project quote differs from this page, the quote takes precedence for that project.
      </p>

      <h2>Quotes and payment</h2>
      <p>
        Quotes are fixed unless the agreed scope changes. Payment terms are set out in each
        project&rsquo;s quote. We&rsquo;ll always agree a price with you before starting
        chargeable work.
      </p>

      <h2>Ownership</h2>
      <p>
        Once a project is paid for in full, you own the final deliverables — the website, its
        content, and any custom code we&rsquo;ve written for you. We may retain the right to
        display the work in our own portfolio unless you ask us not to.
      </p>

      <h2>What we ask of you</h2>
      <p>
        You&rsquo;re responsible for providing content, access, and feedback in good time so we
        can deliver on the agreed timeline. Delays on your side may push back the delivery date.
      </p>

      <h2>Liability</h2>
      <p>
        We&rsquo;ll deliver work with reasonable care and skill. To the extent permitted by law,
        our liability for any project is limited to the fees paid for that project. We&rsquo;re
        not liable for indirect or consequential losses.
      </p>

      <h2>Ending an engagement</h2>
      <p>
        Either party can end an ongoing engagement (such as a support retainer) with reasonable
        written notice, as set out in the relevant agreement. You&rsquo;ll be charged only for
        work completed up to that point.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of England and Wales.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href="mailto:hello@gwentdigital.co.uk">hello@gwentdigital.co.uk</a>.
      </p>
    </LegalPage>
  );
}
