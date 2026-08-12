import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Landmark,
  ShieldCheck,
  Zap,
  Server,
  Wifi,
  FileText,
  Building2,
  CheckCircle2,
  ArrowRight,
  Radio,
  Activity,
  Award,
  Users,
  Lock,
} from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import civicImg from "@/assets/civic.jpg";

export const metadata: Metadata = {
  title: "Government & Municipal Broadband Solutions | Ajumi Internet",
  description:
    "Dedicated access, public Wi-Fi, smart community infrastructure, BEAD grant compliance, and municipal broadband deployment for public sector entities across the US and Canada.",
  openGraph: {
    title: "Government & Municipal Broadband Solutions | Ajumi Internet",
    description:
      "Procurement-ready dedicated internet, municipal facility connectivity, and public Wi-Fi for cities, counties, schools, and healthcare networks.",
  },
};

const pillars = [
  {
    title: "Municipal Facility Networks",
    badge: "Multi-Facility Ring",
    icon: Building2,
    desc: "Connect town halls, fire stations, libraries, water facilities, and public works with high-availability fiber or dedicated fixed wireless rings.",
    highlights: [
      "Layer-2/3 Ethernet Private Line (EPL)",
      "Zero public internet exposure option for sensitive data",
      "Redundant secondary path failover",
    ],
  },
  {
    title: "Public & Community Wi-Fi",
    badge: "Smart City",
    icon: Wifi,
    desc: "High-capacity outdoor and indoor Wi-Fi coverage for downtown business districts, public parks, transit hubs, and civic centers.",
    highlights: [
      "Custom branded captive portals & landing pages",
      "Bandwidth shaping & content filtering compliance",
      "Vandal-resistant outdoor access points",
    ],
  },
  {
    title: "BEAD & Grant Deployment",
    badge: "Grant Ready",
    icon: FileText,
    desc: "End-to-end feasibility studies, optical route engineering, and grant-compliant network construction for unserved & underserved areas.",
    highlights: [
      "Comprehensive route mapping & cost estimates",
      "Federal & state grant compliance reporting",
      "Post-grant long-term operational sustainability",
    ],
  },
  {
    title: "Smart Infrastructure & IoT",
    badge: "Mission Critical",
    icon: Activity,
    desc: "Dedicated telemetry channels for traffic control, SCADA water management, security camera feeds, and emergency communications.",
    highlights: [
      "Low-latency real-time telemetry",
      "Isolated VLANs for municipal utility networks",
      "24/7/365 Proactive NOC monitoring",
    ],
  },
] as const;

export default function GovernmentPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/80 via-background to-background py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 size-96 rounded-full bg-signal/5 blur-3xl" />

        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Header Info */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Landmark className="size-3.5" />
                <span>Public Sector &amp; Municipal Solutions</span>
              </div>

              <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
                Procurement-ready broadband for <span className="text-primary underline decoration-primary/20 underline-offset-8">the public sector.</span>
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Dedicated internet access, municipal facility fiber rings, public Wi-Fi, and BEAD grant deployment — designed and maintained by in-house telecom engineers.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
                >
                  <span>Submit RFP / Procurement Request</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center rounded-xl border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                >
                  Request Feasibility Assessment
                </Link>
              </div>

              {/* Compliance Pill Badges */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <ShieldCheck className="size-4 text-primary" /> SAM.gov Procurement Ready
                </span>
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <Award className="size-4 text-primary" /> BEAD Grant Compliant
                </span>
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <Lock className="size-4 text-primary" /> 99.99% Binding SLA
                </span>
              </div>
            </div>

            {/* Right Civic Image Banner */}
            <div className="relative">
              <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-2xl transition-all duration-300">
                <Image
                  src={civicImg}
                  alt="Fiber distribution cabinet on sidewalk outside municipal city hall building"
                  width={1200}
                  height={912}
                  priority
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-ink/90 p-5 text-white backdrop-blur-md">
                  <p className="eyebrow text-primary text-xs font-bold tracking-wider">In-House Engineering</p>
                  <p className="mt-1 text-sm font-medium text-white/90">
                    Full as-built OTDR splice documentation provided for every municipal optical route.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Public Sector Pillars */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <Server className="size-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
            Four ways we serve government entities.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            From single facility links to county-wide broadband infrastructure initiatives.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-full bg-surface px-2.5 py-1 text-[0.6875rem] font-semibold text-muted-foreground">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                  <ul className="mt-6 space-y-2 border-t border-border/60 pt-5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs font-medium text-foreground/80">
                        <CheckCircle2 className="mt-0.5 size-3.5 text-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Structured Solution Matrix / Capabilities */}
      <section className="border-y border-border bg-surface/60 py-20 lg:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Zap className="size-3.5" />
              <span>Technical Matrix</span>
            </div>
            <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
              Built for public sector SLAs and audit requirements.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Our infrastructure engineering matches the strict reliability and compliance requirements of government agencies.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-border/80 bg-background shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-foreground">
                <thead className="border-b border-border bg-surface text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th scope="col" className="px-6 py-4">Service Line</th>
                    <th scope="col" className="px-6 py-4">Deployment Model</th>
                    <th scope="col" className="px-6 py-4">SLA Commitment</th>
                    <th scope="col" className="px-6 py-4">Target Public Entity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 font-medium">
                  <tr>
                    <td className="px-6 py-5 font-bold text-foreground">Dedicated Fiber DIA</td>
                    <td className="px-6 py-5 text-muted-foreground">1:1 Non-contended Fiber Strand</td>
                    <td className="px-6 py-5 text-primary font-semibold">99.99% Uptime with MTTR &lt; 4 hrs</td>
                    <td className="px-6 py-5 text-muted-foreground">City Hall, County Admin, Emergency NOC</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-bold text-foreground">Municipal Facility Ring</td>
                    <td className="px-6 py-5 text-muted-foreground">Layer-2 / Layer-3 Private EPL</td>
                    <td className="px-6 py-5 text-primary font-semibold">Automatic Secondary Path Failover</td>
                    <td className="px-6 py-5 text-muted-foreground">Libraries, Fire Stations, Police Hubs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-bold text-foreground">Smart Public Wi-Fi</td>
                    <td className="px-6 py-5 text-muted-foreground">Managed Wi-Fi 6 Outdoor APs</td>
                    <td className="px-6 py-5 text-primary font-semibold">24/7 Monitoring &amp; Traffic Shaping</td>
                    <td className="px-6 py-5 text-muted-foreground">Parks, Downtown Districts, Transit Hubs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-5 font-bold text-foreground">Grant &amp; BEAD Deployment</td>
                    <td className="px-6 py-5 text-muted-foreground">Hybrid Fiber &amp; Fixed Wireless</td>
                    <td className="px-6 py-5 text-primary font-semibold">Federal &amp; State Compliance Audit</td>
                    <td className="px-6 py-5 text-muted-foreground">Rural Counties, School Districts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Public Sector Case Highlight Banner */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8">
        <div className="rounded-3xl border border-border bg-ink p-8 text-ink-foreground shadow-2xl sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="eyebrow text-xs font-bold text-primary uppercase">
                Case Study Highlight
              </span>
              <blockquote className="mt-4 font-display text-xl font-medium leading-relaxed tracking-tight text-white sm:text-2xl">
                “We had one legacy provider with frequent outages during storms. Ajumi built a managed fiber link connecting our town office, public library, and fire department — zero downtime since launch.”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
                  <Users className="size-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-white">Municipal IT Administrator</p>
                  <p className="text-xs text-white/70">County Public Sector Operations</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <p className="text-xs font-semibold text-primary uppercase">RFP &amp; Procurement Direct Line</p>
              <p className="text-sm text-white/80">
                Need specifications, CAGE codes, or as-built route maps for your municipality?
              </p>
              <Link
                href="/contact"
                className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                Contact Public Sector Desk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
