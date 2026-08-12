import type { Metadata } from "next";
import Link from "next/link";
import {
  Wifi,
  Zap,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Users,
} from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Managed Wi-Fi Solutions | Ajumi Internet",
  description:
    "Turnkey managed Wi-Fi systems for homes, multi-family housing, office buildings, campuses, and outdoor public spaces.",
  openGraph: {
    title: "Managed Wi-Fi Solutions | Ajumi Internet",
    description:
      "Professional RF site surveys, Wi-Fi 6/6E access point placement, guest portal management, and 24/7 proactive monitoring.",
  },
};

export default function ManagedWifiPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/80 via-background to-background py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 size-96 rounded-full bg-signal/5 blur-3xl" />

        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Wifi className="size-3.5" />
              <span>Turnkey Managed Wireless</span>
            </div>

            <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
              Managed Wi-Fi systems with <span className="text-primary underline decoration-primary/20 underline-offset-8">zero dead zones.</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Professional RF heatmapping, access point installation, guest captive portal design, and 24/7/365 proactive equipment support.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
              >
                <span>Request Wi-Fi Site Survey</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Features Grid */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "RF Heatmapping & Placement",
              desc: "Predictive spectrum analysis and physical site surveys ensuring complete wall-to-wall coverage.",
              icon: Sliders,
            },
            {
              title: "Captive Guest Portals",
              desc: "Custom branded login portals for hotels, retail, restaurants, and municipal public Wi-Fi networks.",
              icon: Users,
            },
            {
              title: "24/7 Remote Telemetry",
              desc: "Proactive monitoring of access point uptime, channel interference, and connected client health.",
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
