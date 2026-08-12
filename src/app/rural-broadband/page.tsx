import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Radio,
  Zap,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Globe,
  Trees,
} from "lucide-react";
import { AvailabilityChecker } from "@/components/site/AvailabilityChecker";
import { CtaBand } from "@/components/site/CtaBand";
import ruralImg from "@/assets/rural.jpg";

export const metadata: Metadata = {
  title: "Rural & Community Broadband Solutions | Ajumi Internet",
  description:
    "Bringing high-speed fiber and fixed wireless internet to rural, agricultural, and underserved communities across the US and Canada.",
  openGraph: {
    title: "Rural & Community Broadband Solutions | Ajumi Internet",
    description:
      "Bridging the digital divide in unserved areas with hybrid fiber and fixed wireless network architecture.",
  },
};

export default function RuralBroadbandPage() {
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
                <Trees className="size-3.5" />
                <span>Bridging The Digital Divide</span>
              </div>

              <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
                Rural &amp; community <span className="text-primary underline decoration-primary/20 underline-offset-8">broadband expansion.</span>
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We go where legacy incumbents skip — bringing symmetrical fiber and carrier-grade fixed wireless broadband to agricultural corridors, small towns, and mountain communities.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/coverage"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
                >
                  <span>Check Regional Availability</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/partnerships"
                  className="inline-flex h-12 items-center rounded-xl border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  Community Partnerships
                </Link>
              </div>
            </div>

            {/* Right Rural Image Banner */}
            <div className="relative">
              <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-2xl transition-all duration-300">
                <Image
                  src={ruralImg}
                  alt="Small rural main street with fixed wireless antenna mounted on grain silo"
                  width={1200}
                  height={912}
                  priority
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-ink/90 p-5 text-white backdrop-blur-md">
                  <p className="eyebrow text-primary text-xs font-bold tracking-wider">Sustainable Expansion</p>
                  <p className="mt-1 text-sm font-medium text-white/90">
                    Hybrid fiber &amp; fixed wireless built for long-term regional reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rural Capabilities Grid */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Hybrid Fiber + Wireless",
              desc: "Combines high-capacity fiber backbone transport with point-to-multipoint wireless to reach remote properties instantly.",
            },
            {
              title: "Public-Private Funding",
              desc: "Collaborating with local counties, agricultural co-ops, and BEAD grant programs to expand coverage.",
            },
            {
              title: "Community Growth List",
              desc: "We prioritize network buildouts based on demand aggregation from local residents and business owners.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-border/80 bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
            >
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
