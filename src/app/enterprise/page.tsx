import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  ShieldCheck,
  Zap,
  Activity,
  Network,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Lock,
  Globe,
} from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Enterprise Dedicated Internet & Multi-Site Solutions | Ajumi Internet",
  description:
    "Dedicated Internet Access (DIA), 99.99% uptime SLAs, Layer-2/3 multi-site campus links, and managed optical networks for enterprise organizations.",
  openGraph: {
    title: "Enterprise Dedicated Internet & Multi-Site Solutions | Ajumi Internet",
    description:
      "Non-contended symmetrical fiber DIA up to 10 Gbps with binding SLA performance guarantees and 24/7 proactive NOC monitoring.",
  },
};

export default function EnterprisePage() {
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
              <span>Mission-Critical Infrastructure</span>
            </div>

            <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
              Enterprise DIA &amp; <span className="text-primary underline decoration-primary/20 underline-offset-8">multi-site campus</span> connectivity.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Dedicated, non-contended bandwidth up to 10 Gbps with 99.99% guaranteed uptime SLAs, BGP routing, and 24/7/365 proactive NOC monitoring.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
              >
                <span>Scope Enterprise DIA Solution</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/dedicated-internet"
                className="inline-flex h-12 items-center rounded-xl border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                Learn About DIA Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SLA & Technical Matrix Section */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <ShieldCheck className="size-3.5" />
              <span>Binding Guarantees</span>
            </div>

            <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
              Guaranteed bandwidth allocations that never share capacity.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Unlike shared consumer broadband, Dedicated Internet Access (DIA) provides a private 1:1 optical circuit directly connected to our core routing POP. Your bandwidth is 100% reserved exclusively for your enterprise.
            </p>

            <ul className="mt-6 space-y-3.5">
              {[
                "1:1 Non-contended bandwidth up to 10 Gbps Symmetrical",
                "99.99% Guaranteed network availability with MTTR < 4 hrs",
                "Sub-5ms latency commitments on core transport backbone",
                "Proactive circuit performance monitoring & automated NOC alerts",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-ink p-8 text-ink-foreground shadow-2xl sm:p-10">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="eyebrow text-primary text-xs font-bold tracking-wider">Enterprise SLA</p>
                <h3 className="mt-1 font-display text-xl font-bold text-white">Service Level Agreement</h3>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                Active 99.99% SLA
              </span>
            </div>

            <div className="mt-6 space-y-4 text-sm text-ink-foreground/80">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span>Availability SLA</span>
                <strong className="text-white font-mono">99.99% Monthly</strong>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span>Mean Time To Repair (MTTR)</span>
                <strong className="text-white font-mono">&lt; 4 Hours</strong>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span>Latency Commitment</span>
                <strong className="text-white font-mono">&lt; 15ms Regional</strong>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span>Packet Loss Guarantee</span>
                <strong className="text-white font-mono">&lt; 0.1% Core</strong>
              </div>
              <div className="flex justify-between">
                <span>BGP Peering &amp; Static Subnets</span>
                <strong className="text-white font-mono">Included</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
