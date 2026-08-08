const STEPS = [
  {
    n: "01",
    title: "Understand the business",
    body: "A conversation about how you actually work, not a form.",
    time: "Week 1",
  },
  {
    n: "02",
    title: "Look at the data",
    body: "Where enquiries are dropping off, and what's costing you customers.",
    time: "Week 1–2",
  },
  {
    n: "03",
    title: "Build",
    body: "Fixed price, agreed up front. No surprise invoices.",
    time: "Varies by project",
  },
  {
    n: "04",
    title: "Measure and adjust",
    body: "We show you the real numbers as they change.",
    time: "Ongoing",
  },
];

export function HowWeWork() {
  return (
    <section className="border-y border-border/60 bg-muted/40 py-20 md:py-28">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-oxide">How we work</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            Four simple steps
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li key={step.n} className="rounded border border-border bg-card p-6">
              <span className="font-mono text-sm font-medium text-oxide">{step.n}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{step.body}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-wide text-slate">
                {step.time}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
