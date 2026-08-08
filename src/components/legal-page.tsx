export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container-site py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-slate">Last updated: {updated}</p>
        <div className="prose-legal mt-10 space-y-6 text-ink/80 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_a]:text-oxide [&_a]:underline">
          {children}
        </div>
      </div>
    </div>
  );
}
