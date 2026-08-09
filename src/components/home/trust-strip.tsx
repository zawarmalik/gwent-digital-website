const ITEMS = [
  "Newport & South Wales",
  "Run by business owners",
  "Fixed quotes, no surprises",
  "You own everything we build",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-muted/40">
      <div className="container-site grid grid-cols-2 gap-x-4 gap-y-3 py-6 text-center sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-4">
        {ITEMS.map((item) => (
          <p key={item} className="font-mono text-xs font-medium tracking-wide text-slate uppercase">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
