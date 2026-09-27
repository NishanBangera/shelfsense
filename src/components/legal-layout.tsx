import type { ReactNode } from "react";

export function LegalLayout({
  title,
  updated,
  sections,
  children,
}: {
  title: string;
  updated: string;
  sections: { id: string; title: string }[];
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Legal</p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
        <nav aria-label="Sections" className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            On this page
          </p>
          <ul className="mt-4 space-y-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <article className="max-w-3xl space-y-12 text-sm leading-relaxed text-muted-foreground">
          {children}
        </article>
      </div>
    </div>
  );
}

export function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      {children}
    </section>
  );
}
