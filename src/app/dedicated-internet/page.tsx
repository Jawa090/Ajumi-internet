import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  ArrowRight,
  Lock,
  Globe,
  Radio,
} from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Dedicated Internet Access (DIA) | Ajumi Internet",
  description:
    "1:1 Non-contended fiber dedicated internet access with guaranteed symmetrical bandwidth, binding 99.99% uptime SLAs, and BGP routing.",
  openGraph: {
    title: "Dedicated Internet Access (DIA) | Ajumi Internet",
    description:
      "Private optical circuits directly connected to core POP routing for mission-critical enterprise operations.",
  },
};

export default function DedicatedInternetPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/80 via-background to-background py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 size-96 rounded-full bg-signal/5 blur-3xl" />

        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Server className="size-3.5" />
              <span>1:1 Non-Contended Optical Circuits</span>
            </div>

            <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
              Dedicated Internet Access <span className="text-primary underline decoration-primary/20 underline-offset-8">(DIA)</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Private 1:1 fiber connections reserved exclusively for your organization — guaranteeing full symmetrical speed 24/7/365 with binding uptime SLAs.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
              >
                <span>Request DIA Proposal</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DIA Features Grid */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "100% Guaranteed 1:1 Ratio",
              desc: "Your circuit bandwidth is never oversubscribed or shared with neighboring customers.",
              icon: Zap,
            },
            {
              title: "99.99% Guaranteed SLA",
              desc: "Binding uptime commitments backed by financial service credits and sub-4 hour repair dispatch.",
              icon: ShieldCheck,
            },
            {
              title: "BGP Peering & Static IPv4/v6",
              desc: "Multi-homed BGP routing, custom AS routing support, and full static IP allocation.",
              icon: Globe,
            },
            {
              title: "24/7/365 NOC Monitoring",
              desc: "Proactive telemetry monitoring at our Network Operations Center with automated outage escalation.",
              icon: Activity,
            },
            {
              title: "Redundant Secondary Paths",
              desc: "Dual physical fiber entrances or fixed wireless backup links ensuring 100% continuity.",
              icon: Radio,
            },
            {
              title: "As-Built OTDR Documentation",
              desc: "Full optical splice documentation and optical time-domain reflectometry test results.",
              icon: Lock,
            },
          ].map((f) => {
            const FIcon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-3xl border border-border/80 bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <FIcon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
