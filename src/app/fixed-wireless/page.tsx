import type { Metadata } from "next";
import Link from "next/link";
import {
  Radio,
  Zap,
  ShieldCheck,
  Globe,
  CheckCircle2,
  ArrowRight,
  Clock,
  Building2,
  SignalHigh,
} from "lucide-react";
import { AvailabilityChecker } from "@/components/site/AvailabilityChecker";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Fixed Wireless Broadband Solutions | Ajumi Internet",
  description:
    "High-speed fixed wireless internet delivering fast broadband to rural areas, commercial parks, and locations where fiber construction is in progress.",
  openGraph: {
    title: "Fixed Wireless Broadband Solutions | Ajumi Internet",
    description:
      "Rapid deployment fixed wireless broadband with low latency, high capacity, and primary or redundant backup connectivity.",
  },
};

export default function FixedWirelessPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/80 via-background to-background py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 size-96 rounded-full bg-signal/5 blur-3xl" />

        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Radio className="size-3.5" />
              <span>Rapid Deployment Broadband</span>
            </div>

            <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
              Fixed Wireless Broadband <span className="text-primary underline decoration-primary/20 underline-offset-8">where you are.</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              High-speed internet delivered via point-to-point wireless towers — providing immediate connectivity for rural communities, business parks, and temporary construction sites.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/coverage"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
              >
                <span>Check Wireless Coverage</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-xl border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                Request Custom Site Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wireless Advantage Cards */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Rapid Installation",
              desc: "Deployed in days instead of waiting months for physical trenching and fiber permitting.",
              icon: Clock,
            },
            {
              title: "High Throughput & Low Latency",
              desc: "Carrier-grade millimeter wave and licensed radio bands delivering speeds up to 1 Gbps.",
              icon: SignalHigh,
            },
            {
              title: "Ideal Failover Backup",
              desc: "Provides physical path diversity so subterranean fiber cuts never interrupt your network.",
              icon: ShieldCheck,
            },
          ].map((item) => {
            const FIcon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-border/80 bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <FIcon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
