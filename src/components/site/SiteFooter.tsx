import Link from "next/link";
import { Logo } from "./Logo";
import { serviceLinks, companyLinks, resourceLinks, legalLinks, CONTACT } from "./nav-data";

function Column({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h3 className="eyebrow mb-4 text-muted-foreground">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              href={l.to}
              className="text-sm text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[84rem] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2.6fr]">
          <div>
            <Link href="/" className="text-ink-foreground" aria-label="Ajumi Internet home">
              <Logo />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
              Ajumi Internet is the Internet Service Provider division of Ajumi Networks LLC,
              delivering fiber, fixed wireless and managed networking across the United States
              and Canada.
            </p>
            <address className="mt-6 space-y-1.5 text-sm not-italic text-ink-foreground/70">
              <div>
                <a href={CONTACT.phoneHref} className="hover:text-ink-foreground">
                  {CONTACT.phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-ink-foreground">
                  {CONTACT.email}
                </a>
              </div>
              <div>{CONTACT.address}</div>
            </address>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Column title="Services" links={serviceLinks} />
            <Column
              title="Company"
              links={[{ label: "Internet Plans", to: "/plans" }, ...companyLinks]}
            />
            <div className="space-y-10">
              <Column title="Resources" links={resourceLinks} />
              <Column
                title="Get in touch"
                links={[
                  { label: "Coverage & Availability", to: "/coverage" },
                  { label: "Request a Quote", to: "/quote" },
                  { label: "Contact Us", to: "/contact" },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-foreground/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-foreground/50">
            © {new Date().getFullYear()} Ajumi Networks LLC. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link
                  href={l.to}
                  className="text-xs text-ink-foreground/50 transition-colors hover:text-ink-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
