import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Zap,
  ShieldCheck,
  Server,
  CreditCard,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  Clock,
  Lock,
} from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Business Fiber Internet Solutions | Ajumi Internet",
  description:
    "High-speed business internet, static IP addresses, priority support SLAs, and managed equipment for offices, retail, clinics, and commercial operations.",
  openGraph: {
    title: "Business Fiber Internet Solutions | Ajumi Internet",
    description:
      "Reliable business bandwidth, static IPs, managed Wi-Fi, and priority SLAs designed for continuous daily operations.",
  },
};

const businessFeatures = [
  {
    title: "Static IP Addresses",
    desc: "Dedicated static IPv4/v6 addresses for hosting internal servers, VPN access, security cameras, and remote desktop protocols.",
    icon: Server,
  },
  {
    title: "POS & Payment Protection",
    desc: "Guaranteed low latency and optional cellular failover so credit card transactions and registers never go offline.",
    icon: CreditCard,
  },
  {
    title: "Priority SLA Support",
    desc: "Direct access to commercial support engineers with guaranteed 4-hour field dispatch response times for critical outages.",
    icon: Clock,
  },
  {
    title: "Isolated Staff & Guest Wi-Fi",
    desc: "Secure network segmentation separating internal point-of-sale systems from guest customer Wi-Fi networks.",
    icon: Lock,
  },
] as const;

export default function BusinessPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/80 via-background to-background py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 size-96 rounded-full bg-signal/5 blur-3xl" />

        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Building2 className="size-3.5" />
                <span>Commercial &amp; SMB Connectivity</span>
              </div>

              <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
                Business internet that keeps <span className="text-primary underline decoration-primary/20 underline-offset-8">operations &amp; payments</span> online.
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                High-capacity symmetrical bandwidth, static IP options, managed Wi-Fi equipment, and priority SLA support for offices, retail, clinics, and restaurants.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
                >
                  <span>Request Business Quote</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/plans"
                  className="inline-flex h-12 items-center rounded-xl border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  View Business Tiers
                </Link>
              </div>
            </div>

            {/* Right Feature Highlight Box */}
            <div className="rounded-3xl border border-border bg-ink p-8 text-ink-foreground shadow-2xl sm:p-10">
              <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                <Zap className="size-4" />
                <span>Built for Business Continuity</span>
              </div>
              <h2 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                Commercial SLAs &amp; Static IP Subnets
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-foreground/80">
                Don't let residential consumer links disrupt your daily cash flow. Our business tiers carry guaranteed bandwidth allocations and dedicated field escalation lines.
              </p>

              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {[
                  "1,000 Mbps Symmetrical Fiber options",
                  "Static IPv4 / IPv6 subnets available",
                  "Automatic wireless secondary failover link",
                  "VoIP PBX trunking & cloud phone compatibility",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-xs font-medium text-white/90">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Feature Cards */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <ShieldCheck className="size-3.5" />
            <span>Commercial Advantages</span>
          </div>
          <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
            Features engineered for daily operations.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Everything your team needs to stay productive, secure, and connected.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group rounded-3xl border border-border/80 bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
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
