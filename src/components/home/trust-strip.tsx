const ITEMS = [
  "Newport & South Wales",
  "Run by business owners",
  "Fixed quotes, no surprises",
  "You own everything we build",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-muted/40">
      <div className="container-site flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6 text-center">
        {ITEMS.map((item) => (
          <p key={item} className="font-mono text-xs font-medium tracking-wide text-slate uppercase">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
