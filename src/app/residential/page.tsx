import type { Metadata } from "next";
import Link from "next/link";
import {
  Home as HomeIcon,
  Zap,
  ShieldCheck,
  Wifi,
  CheckCircle2,
  ArrowRight,
  Tv,
  Gamepad2,
  Laptop,
  Users,
} from "lucide-react";
import { AvailabilityChecker } from "@/components/site/AvailabilityChecker";
import { CtaBand } from "@/components/site/CtaBand";

export const metadata: Metadata = {
  title: "Residential Fiber Internet | Ajumi Internet",
  description:
    "Reliable residential fiber with fast symmetrical speeds, low latency and dependable performance for streaming, remote work, gaming and connected homes.",
  openGraph: {
    title: "Residential Fiber Internet | Ajumi Internet",
    description:
      "Symmetrical fiber upload and download speeds, managed Wi-Fi 6, zero data caps, and local in-house support.",
  },
};

const homeFeatures = [
  {
    title: "Symmetrical Fiber Speeds",
    desc: "Upload speeds match download speeds 1:1. Send large video files, back up photos, and host 4K video calls without lag.",
    icon: Zap,
  },
  {
    title: "Zero Data Caps & Throttling",
    desc: "Unlimited monthly data allowance with zero overage charges, zero hidden surcharges, and zero evening slowdowns.",
    icon: ShieldCheck,
  },
  {
    title: "Whole-Home Managed Wi-Fi 6",
    desc: "Professional Wi-Fi router placement and mesh access points that cover every bedroom, garage, and backyard dead zone.",
    icon: Wifi,
  },
  {
    title: "Local In-House Support",
    desc: "Direct support from technicians and network engineers based in your area — zero offshore call centers or automated loops.",
    icon: Users,
  },
] as const;

export default function ResidentialPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/80 via-background to-background py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 size-96 rounded-full bg-signal/5 blur-3xl" />

        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <HomeIcon className="size-3.5" />
              <span>Residential Fiber Broadband</span>
            </div>

            <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
              Fiber built for everything your household <span className="text-primary underline decoration-primary/20 underline-offset-8">runs at once.</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Symmetrical upload &amp; download speeds, low latency, zero data caps, and whole-home Wi-Fi coverage for streaming, work, school, and gaming.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/plans"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
              >
                <span>View Residential Fiber Plans</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/coverage"
                className="inline-flex h-12 items-center rounded-xl border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                Check Address Coverage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <Zap className="size-3.5" />
            <span>Why Homeowners Choose Ajumi</span>
          </div>
          <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
            Internet that doesn't drop when everyone gets home.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Built on physical glass fiber strands capable of gigabit and multi-gigabit throughput.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeFeatures.map((f) => {
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

      {/* Household Activity Matrix */}
      <section className="border-y border-border bg-surface/60 py-20 lg:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="display-md font-semibold tracking-tight text-foreground">
              Powering modern connected living.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Whether you work from home, stream in 4K HDR, or host online gaming servers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Remote Work & Video Calls",
                desc: "High upload bandwidth ensures zero pixelation on Zoom, Microsoft Teams, and cloud backups.",
                icon: Laptop,
              },
              {
                title: "4K HDR Streaming",
                desc: "Stream movies and live sports simultaneously across smart TVs, tablets, and phones without buffering.",
                icon: Tv,
              },
              {
                title: "Low-Latency Gaming",
                desc: "Sub-15ms optical latency for competitive multiplayer gaming and instant game patch downloads.",
                icon: Gamepad2,
              },
            ].map((item) => {
              const AIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border/80 bg-background p-8 shadow-sm"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <AIcon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex items-center justify-center">
            <Link
              href="/plans"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95"
            >
              <span>Explore Residential Plans &amp; Pricing</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
