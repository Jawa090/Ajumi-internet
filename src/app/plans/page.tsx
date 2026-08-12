"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Check,
  Zap,
  ShieldCheck,
  Server,
  Wifi,
  PhoneCall,
  Network,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Globe,
  Radio,
  Building2,
} from "lucide-react";
import { AvailabilityChecker } from "@/components/site/AvailabilityChecker";
import { CtaBand } from "@/components/site/CtaBand";

type Tier = {
  name: string;
  speed: string;
  best: string;
  summary: string;
  badge?: string;
  features: string[];
  featured?: boolean;
};

const residential: Tier[] = [
  {
    name: "Home Fiber 300",
    speed: "300 Mbps Symmetrical",
    best: "1–3 people, daily streaming & browsing",
    summary:
      "HD streaming, video calls, and everyday browsing without buffering, data caps, or peak-hour slowdowns.",
    features: [
      "300 Mbps Download = 300 Mbps Upload",
      "Managed Optical Network Terminal (ONT) included",
      "Unlimited data — zero data caps or overages",
      "Local in-house support & dispatch",
    ],
  },
  {
    name: "Home Pro 1 Gig",
    speed: "1,000 Mbps Symmetrical",
    best: "Remote work, 4K streaming, gaming households",
    summary:
      "Ultra-low latency for simultaneous 4K streaming, heavy uploads, remote work video calls, and gaming.",
    badge: "Most Popular",
    featured: true,
    features: [
      "1,000 Mbps Symmetrical Fiber",
      "Whole-Home Wi-Fi 6 router included",
      "Priority latency routing for remote work & gaming",
      "Optional cellular backup failover link",
      "Zero data caps & zero price-hike contracts",
    ],
  },
  {
    name: "Ultra Fiber 2.5G",
    speed: "2,500 Mbps Symmetrical",
    best: "Power users, creators & smart homes",
    summary:
      "Multi-gigabit capacity for heavy content creators, NAS backups, smart home hubs, and demanding tech setups.",
    badge: "Extreme Speed",
    features: [
      "2,500 Mbps Symmetrical Fiber Core",
      "Multi-Gig Wi-Fi 6E / 7 gateway option",
      "Dedicated high-speed upload channel",
      "Direct engineer escalation line",
      "Unlimited data with zero throttling",
    ],
  },
];

const business: Tier[] = [
  {
    name: "Business Fiber 1G",
    speed: "1 Gbps Symmetrical",
    best: "Retail, offices, clinics & restaurants",
    summary:
      "Reliable connectivity that carries POS payments, cloud applications, VoIP phones, and guest Wi-Fi effortlessly.",
    features: [
      "1,000 Mbps Symmetrical Business Fiber",
      "1 Static IPv4 address included",
      "Priority 4-hour response SLA support",
      "Separate staff & guest Wi-Fi VLANs",
    ],
  },
  {
    name: "Enterprise DIA",
    speed: "Up to 10 Gbps Dedicated",
    best: "Multi-site, institutional, mission-critical",
    summary:
      "Dedicated Internet Access (DIA) with non-contended symmetrical bandwidth and binding SLA performance guarantees.",
    badge: "Mission Critical",
    featured: true,
    features: [
      "100% Non-contended dedicated bandwidth",
      "99.99% Guaranteed uptime SLA with credits",
      "Custom BGP routing & multiple static IPv4/v6",
      "24/7/365 Proactive NOC monitoring & engineering",
      "Redundant fiber path failover available",
    ],
  },
  {
    name: "Custom Campus Link",
    speed: "Custom Multi-Gig Mesh",
    best: "Municipalities, schools & enterprise campuses",
    summary:
      "Tailored Dark Fiber, Layer-2 Ethernet Private Line (EPL), and multi-location dark strand leasing.",
    badge: "Custom Build",
    features: [
      "Custom optical route construction & splicing",
      "Point-to-Point & Point-to-Multipoint topology",
      "Turnkey equipment management & rack mounting",
      "Detailed optical OTDR as-built documentation",
    ],
  },
];

export default function PlansPage() {
  const [tab, setTab] = useState<"residential" | "business">("residential");
  const tiers = tab === "residential" ? residential : business;

  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/80 via-background to-background py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 size-96 rounded-full bg-signal/5 blur-3xl" />

        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Zap className="size-3.5" />
              <span>Transparent Symmetrical Broadband</span>
            </div>

            <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
              Internet plans built around <span className="text-primary underline decoration-primary/20 underline-offset-8">what you do.</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              No hidden fees, no promotional tricks, and zero data caps. Check availability at your address to see exact fiber and wireless tiers.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/coverage"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
              >
                <span>Check Service Availability</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-xl border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tier Selection */}
      <section className="mx-auto max-w-[84rem] px-5 py-16 sm:px-8 lg:py-24">
        {/* Tab Switcher */}
        <div className="flex flex-col items-center justify-center">
          <div
            role="tablist"
            aria-label="Plan audience"
            className="inline-flex rounded-2xl border border-border bg-surface p-1.5 shadow-sm"
          >
            <button
              role="tab"
              type="button"
              aria-selected={tab === "residential"}
              onClick={() => setTab("residential")}
              className={`inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold transition-all ${
                tab === "residential"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Zap className="size-4" />
              <span>Residential Fiber</span>
            </button>
            <button
              role="tab"
              type="button"
              aria-selected={tab === "business"}
              onClick={() => setTab("business")}
              className={`inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold transition-all ${
                tab === "business"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="size-4" />
              <span>Business &amp; Enterprise</span>
            </button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {tab === "residential"
              ? "Designed for homes, remote workers & gaming households."
              : "Designed for offices, multi-site businesses, retail & public sector."}
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`group relative flex flex-col justify-between rounded-3xl border bg-background p-8 transition-all duration-300 ${
                tier.featured
                  ? "border-primary shadow-2xl shadow-primary/10 ring-2 ring-primary/20"
                  : "border-border/80 shadow-sm hover:border-primary/40 hover:shadow-xl"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 right-6 rounded-full bg-primary px-3.5 py-1 text-xs font-bold text-primary-foreground shadow-sm">
                  {tier.badge}
                </div>
              )}

              <div>
                <span className="eyebrow text-xs font-bold text-primary uppercase">
                  {tier.speed}
                </span>

                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground mt-2">
                  {tier.name}
                </h2>

                <p className="mt-2 text-xs font-semibold text-signal">{tier.best}</p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {tier.summary}
                </p>

                <ul className="mt-8 space-y-3.5 border-t border-border/60 pt-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs font-medium text-foreground">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6">
                <Link
                  href="/coverage"
                  className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all ${
                    tier.featured
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/95"
                      : "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <span>Check Availability</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl border border-input bg-background text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  Contact Sales Team
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Transparent Pricing Promises */}
        <div className="mt-16 rounded-3xl border border-border/80 bg-surface/60 p-8 shadow-sm sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Why our pricing is straightforward.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We operate our own physical network plant instead of reselling third-party capacity.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Zero Data Caps",
                desc: "Unlimited upload & download bandwidth every day of the month without throttling.",
                icon: Zap,
              },
              {
                title: "No Surprise Fees",
                desc: "Clear itemized billing with zero hidden equipment rental surprises.",
                icon: ShieldCheck,
              },
              {
                title: "No Mandatory Contracts",
                desc: "Residential plans are contract-free with freedom to upgrade or adjust any time.",
                icon: Lock,
              },
            ].map((p) => {
              const PIcon = p.icon;
              return (
                <div key={p.title} className="flex flex-col items-center text-center p-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <PIcon className="size-6" />
                  </div>
                  <h4 className="mt-4 font-display text-base font-semibold text-foreground">
                    {p.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Add-on Services Grid */}
        <div className="mt-20">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="size-3.5" />
              <span>Managed Add-Ons</span>
            </div>
            <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
              Add to any plan level.
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Turnkey managed networking hardware, failover backup links, and structured field cabling.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Managed Wi-Fi Mesh",
                desc: "Professional access point placement, coverage heatmapping, and 24/7 equipment support.",
                icon: Wifi,
              },
              {
                title: "Backup Wireless Failover",
                desc: "Secondary wireless or cellular links ensuring 100% network uptime if physical lines drop.",
                icon: Radio,
              },
              {
                title: "VoIP Business Phone",
                desc: "Cloud PBX, auto-attendant, extensions, mobile app access, and HD voice quality.",
                icon: PhoneCall,
              },
              {
                title: "Structured Field Cabling",
                desc: "Cat6/Cat6A ethernet runs, fiber backbones, patch panel installation, and OTDR certification.",
                icon: Network,
              },
            ].map((item) => {
              const AddonIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-border/80 bg-background p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-black/5"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <AddonIcon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
