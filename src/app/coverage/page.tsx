import type { Metadata } from "next";
import { AvailabilityChecker } from "@/components/site/AvailabilityChecker";
import { PageHero } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Coverage & Check Availability | Ajumi Internet",
  description:
    "Check whether Ajumi Internet fiber or fixed wireless service is available at your address, and see how we expand into new service areas.",
  openGraph: {
    title: "Coverage & Availability — Ajumi Internet",
    description:
      "Enter your address to check fiber and fixed wireless availability, or join our expansion list.",
  },
};

export default function CoveragePage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage"
        title="Start with your address."
        intro="Coverage depends on fiber routes, wireless line of sight and local partnerships. Checking takes a few seconds and there's a real next step either way."
      >
        <div className="max-w-3xl">
          <AvailabilityChecker />
        </div>
      </PageHero>

      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow text-primary">How we expand</p>
            <h2 className="display-md mt-5 max-w-sm text-foreground">
              An unavailable address isn't a dead end.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Ajumi Internet intends to serve any region in the United States and Canada where we
              can deliver service directly or through partnership. We prioritize areas with
              limited competition, unreliable access or inadequate infrastructure.
            </p>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {[
              [
                "Direct fiber deployment",
                "Where routes exist or construction is viable, we build fiber to the home or business, splice, test and document it.",
              ],
              [
                "Fixed wireless delivery",
                "Strategically placed network equipment delivers broadband without a fiber drop to every property — often the fastest path to service.",
              ],
              [
                "Infrastructure partnerships",
                "Municipal broadband initiatives, public-private partnerships, wholesale agreements and collaborations with local ISPs and utilities.",
              ],
              [
                "Feasibility & funding support",
                "For communities without a provider, we run feasibility assessments, cost analysis and grant-supported deployment planning.",
              ],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-6 py-6">
                <span className="eyebrow pt-1 text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {t}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-[84rem] px-5 py-16 sm:px-8">
          <p className="eyebrow text-muted-foreground">Service footprint</p>
          <p className="mt-5 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-foreground">
            Headquartered in Ithaca, New York — serving residential, business, institutional and
            community customers across the United States and Canada through direct deployment and
            operating partnerships.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
