import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <p className="eyebrow text-primary">{eyebrow}</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <h1 className="display-lg max-w-3xl text-foreground">{title}</h1>
          {intro && (
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">{intro}</p>
          )}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

export function StubPage({
  eyebrow,
  title,
  intro,
  points,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  points: string[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="display-md text-foreground">What this covers</h2>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {points.map((p) => (
              <li key={p} className="py-5 text-base leading-relaxed text-muted-foreground">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex h-13 items-center bg-primary px-7 py-4 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a quote
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-13 items-center border border-input px-7 py-4 text-base font-medium text-foreground transition-colors hover:bg-surface"
          >
            Contact our team
          </Link>
        </div>
      </section>
    </>
  );
}
