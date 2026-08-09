import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "How much does a website cost?",
    a: "It depends on scope. We quote a fixed price after a free consultation, once we understand what you actually need — not a generic package.",
  },
  {
    q: "How long does a project take?",
    a: "A straightforward marketing site typically takes a few weeks. Custom systems and e-commerce builds take longer and are scoped individually. We'll give you a realistic timeline before you commit.",
  },
  {
    q: "Are there ongoing fees?",
    a: "Only if you want them. Hosting, updates and monitoring are available as an optional monthly retainer. There's no obligation to sign up for one.",
  },
  {
    q: "Who owns the code and content once it's built?",
    a: "You do. Everything we build for you is yours — no lock-in, no ongoing licence fee to keep using it.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Mostly just time for a conversation about how your business works. We'll ask for logins, existing content, and any brand materials you already have — nothing you don't already own.",
  },
  {
    q: "Do you only work with businesses in Wales?",
    a: "We're based in Newport and most of our clients are in South Wales, but we work with businesses anywhere in the UK.",
  },
  {
    q: "I already have a website — can you just fix parts of it?",
    a: "Yes. Not every site needs a full rebuild. We'll audit what you have and tell you honestly whether it needs fixing, rebuilding, or leaving alone.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="container-site py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-oxide">FAQ</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          Questions we get asked a lot
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <Accordion type="single" collapsible>
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-bold text-ink">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink/70">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
