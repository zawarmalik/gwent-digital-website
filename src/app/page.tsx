import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { ServicesGrid } from "@/components/home/services-grid";
import { WhatWeBuild } from "@/components/home/what-we-build";
import { OperatorStory } from "@/components/home/operator-story";
import { HowWeWork } from "@/components/home/how-we-work";
import { Timelines } from "@/components/home/timelines";
import { PricingBlurb } from "@/components/home/pricing-blurb";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gwent Digital",
  url: "https://gwentdigital.co.uk/",
  email: "hello@gwentdigital.co.uk",
  telephone: "+447405376702",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Newport",
    addressRegion: "Wales",
    addressCountry: "GB",
  },
  areaServed: ["Newport", "Gwent", "South Wales", "Cardiff"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a website cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on scope. We quote a fixed price after a free consultation, once we understand what you actually need.",
      },
    },
    {
      "@type": "Question",
      name: "Who owns the code and content once it's built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You do. Everything we build for you is yours — no lock-in, no ongoing licence fee to keep using it.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <WhatWeBuild />
      <OperatorStory />
      <HowWeWork />
      <Timelines />
      <PricingBlurb />
      <Faq />
      <FinalCta />
    </>
  );
}
