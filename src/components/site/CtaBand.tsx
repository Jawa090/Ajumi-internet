import Link from "next/link";
import { CONTACT } from "./nav-data";

export function CtaBand() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-[84rem] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:py-28">
        <div>
          <p className="eyebrow text-primary">Talk to a real engineer</p>
          <h2 className="display-lg mt-5 max-w-2xl">
            Tell us what you need connected. We'll tell you exactly how we'd build it.
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-opacity hover:opacity-90"
          >
            Contact our engineering team
          </Link>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex h-14 items-center justify-center border border-ink-foreground/25 px-8 text-base font-medium text-ink-foreground transition-colors hover:bg-ink-foreground/10"
          >
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
