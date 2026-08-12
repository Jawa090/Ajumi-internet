import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Zap, Server, Activity, Globe, CheckCircle2, Home as HomeIcon, Building2, Landmark, Layers, Radio, Star, Quote, UserCheck } from "lucide-react";
import { AvailabilityChecker } from "@/components/site/AvailabilityChecker";
import { CtaBand } from "@/components/site/CtaBand";
import heroImg from "@/assets/hero-fiber.jpg";
import splicingImg from "@/assets/splicing.jpg";
import ruralImg from "@/assets/rural.jpg";
import civicImg from "@/assets/civic.jpg";

export const metadata: Metadata = {
  title: "Ajumi Internet — Fiber & Fixed Wireless Broadband for Every Community",
  description:
    "High-speed fiber and fixed wireless internet for homes, businesses, enterprises and governments across the US and Canada. Check availability at your address.",
  openGraph: {
    title: "Ajumi Internet — Fiber & Fixed Wireless Broadband",
    description:
      "Reliable connectivity for homes, businesses, institutions and underserved communities. Check availability at your address.",
  },
};

const paths = [
  {
    label: "Residential Internet",
    badge: "Homes & Families",
    icon: HomeIcon,
    to: "/residential",
    copy: "Fiber built for streaming, 4K video, remote work, gaming, and everything else your household runs at once.",
    highlights: ["Symmetrical Upload/Download", "Zero Data Caps", "Managed Router Included"],
  },
  {
    label: "Business Internet",
    badge: "Offices & Retail",
    icon: Building2,
    to: "/business",
    copy: "High-capacity bandwidth, static IP options, managed equipment and priority support for daily operations.",
    highlights: ["Priority SLA Support", "Static IP Options", "Failover Internet Available"],
  },
  {
    label: "Enterprise Solutions",
    badge: "Mission Critical",
    icon: Server,
    to: "/enterprise",
    copy: "Dedicated Internet Access (DIA), multi-site campus connectivity and failover for enterprise networks.",
    highlights: ["Non-Contended Bandwidth", "99.99% Guaranteed SLA", "24/7 Proactive Monitoring"],
  },
  {
    label: "Government & Municipal",
    badge: "Public Sector",
    icon: Landmark,
    to: "/government",
    copy: "Municipal, education and healthcare broadband — from feasibility studies to live public Wi-Fi infrastructure.",
    highlights: ["Procurement Ready", "Smart City Wi-Fi", "Grant & Funding Support"],
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/80 via-background to-background">
        {/* Subtle decorative background ambient glows */}
        <div className="pointer-events-none absolute -top-40 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-40 size-96 rounded-full bg-signal/5 blur-3xl" />

        <div className="mx-auto max-w-[84rem] px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col items-start">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-3.5 py-1.5 shadow-sm transition-all hover:border-primary/30">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="eyebrow text-[0.6875rem] font-semibold text-foreground tracking-wider">
                  Network Active · US &amp; Canada Coverage
                </span>
              </div>

              {/* Tagline / Eyebrow */}
              <p className="eyebrow mt-6 text-xs font-semibold tracking-widest text-primary uppercase">
                Ajumi Networks LLC · ISP Division
              </p>

              {/* Main Headline */}
              <h1 className="display-xl mt-4 max-w-3xl text-foreground font-semibold tracking-tight">
                Internet that <span className="text-primary underline decoration-primary/20 underline-offset-8">holds up.</span>
                <br />
                For every address we reach.
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground font-normal">
                Fiber-optic infrastructure, fixed wireless and managed networking — engineered for
                homes, businesses, institutions and the communities larger providers skip.
              </p>

              {/* Availability Checker Form */}
              <div className="mt-8 w-full max-w-2xl">
                <AvailabilityChecker />
              </div>
            </div>

            {/* Right Media Card */}
            <div className="relative">
              <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-2xl transition-all duration-300">
                <Image
                  src={heroImg}
                  alt="Ajumi technician feeding fiber conduit into a trench along a residential street at sunset"
                  width={1600}
                  height={1104}
                  priority
                  className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />



                {/* Bottom Overlay Card */}
                <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-ink/95 p-6 text-ink-foreground backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Server className="size-5" />
                    </div>
                    <div>
                      <p className="eyebrow text-primary text-xs font-bold tracking-wider">Built, Not Resold</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-foreground/80 font-normal">
                        We design, splice, test and maintain the physical fiber networks we sell service on.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics / Highlights Strip */}
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-border/80 bg-background p-6 shadow-sm md:grid-cols-4 lg:mt-20">
            <div className="flex flex-col border-r border-border/60 pr-4 last:border-0 md:pr-6">
              <span className="font-display text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                10 Gbps
              </span>
              <span className="mt-1 text-xs text-muted-foreground font-medium">
                Symmetrical Fiber Tiers
              </span>
            </div>
            <div className="flex flex-col border-r border-border/60 px-4 last:border-0 md:px-6">
              <span className="font-display text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                99.99%
              </span>
              <span className="mt-1 text-xs text-muted-foreground font-medium">
                Network Reliability SLA
              </span>
            </div>
            <div className="flex flex-col border-r border-border/60 px-4 last:border-0 md:px-6">
              <span className="font-display text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                24/7/365
              </span>
              <span className="mt-1 text-xs text-muted-foreground font-medium">
                In-House Network Support
              </span>
            </div>
            <div className="flex flex-col pl-4 md:pl-6">
              <span className="font-display text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                US &amp; CA
              </span>
              <span className="mt-1 text-xs text-muted-foreground font-medium">
                Regional Footprint
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-surface/80 py-5">
        <div className="mx-auto flex max-w-[84rem] flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-2">
            <Globe className="size-4 text-primary" />
            <p className="eyebrow text-xs font-semibold text-muted-foreground">
              Serving homes, businesses, municipalities &amp; institutions across the US &amp; Canada
            </p>
          </div>
          <p className="eyebrow text-xs font-semibold text-muted-foreground">
            Fiber · Fixed Wireless · Dedicated Access · Managed Wi-Fi
          </p>
        </div>
      </section>

      {/* Four paths — Redesigned Feature Cards */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <Layers className="size-3.5" />
              <span>Tailored Solutions</span>
            </div>
            <h2 className="display-md mt-4 max-w-lg font-semibold tracking-tight text-foreground">
              Four ways to connect with Ajumi.
            </h2>
          </div>
          <p className="max-w-md text-base text-muted-foreground">
            Whether you need home fiber, business bandwidth, multi-site enterprise connectivity, or municipal infrastructure.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.to}
                href={p.to}
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

                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {p.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>

                  <ul className="mt-6 space-y-2 border-t border-border/60 pt-5">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
                  <span>Explore Solutions</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why Ajumi — Redesigned Editorial */}
      <section className="border-y border-border bg-gradient-to-b from-surface/50 via-surface to-surface/50 py-20 lg:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <ShieldCheck className="size-3.5" />
              <span>Engineering Heritage</span>
            </div>
            <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
              A telecom engineering company that happens to sell you internet.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We design, build, splice, and maintain physical network infrastructure. That means no finger-pointing, no outsourced call centers, and no middleman markup.
            </p>
          </div>

          <div className="mt-16 space-y-24">
            {/* Feature 01 */}
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-background shadow-2xl transition-all duration-500 hover:shadow-primary/5">
                <Image
                  src={splicingImg}
                  alt="Technician fusion-splicing fiber strands inside a field enclosure"
                  width={1200}
                  height={912}
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 rounded-xl border border-white/20 bg-ink/90 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  In-House Fiber Splicing &amp; OTDR Testing
                </div>
              </div>
              <div className="lg:pl-6">
                <span className="eyebrow inline-block rounded-full bg-signal/10 px-3.5 py-1 text-xs font-bold text-signal">
                  01 — Technical Depth
                </span>
                <h3 className="display-md mt-4 font-semibold text-foreground">
                  The people who fix it built it.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Fiber route planning, fusion splicing, optical testing, structured cabling and network design are in-house disciplines here — not subcontracted afterthoughts. When something degrades, the diagnosis starts with people who know the plant.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Fusion splicing & OTDR optical testing performed in-house",
                    "Zero subcontracted field diagnosis or remote scripts",
                    "Direct escalation to network infrastructure engineers",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 02 */}
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="lg:order-2">
                <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-background shadow-2xl transition-all duration-500 hover:shadow-primary/5">
                  <Image
                    src={ruralImg}
                    alt="Small rural main street with a fixed wireless antenna mounted on a grain silo"
                    width={1200}
                    height={912}
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-xl border border-white/20 bg-ink/90 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    Rural &amp; Municipal Broadband Expansion
                  </div>
                </div>
              </div>
              <div className="lg:order-1 lg:pr-6">
                <span className="eyebrow inline-block rounded-full bg-signal/10 px-3.5 py-1 text-xs font-bold text-signal">
                  02 — Community Focus
                </span>
                <h3 className="display-md mt-4 font-semibold text-foreground">
                  We go where the map runs out.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Rural, underserved and unserved areas are a core market, not a rounding error. We work with municipalities, counties, utilities, property owners and funding partners to build broadband that is actually sustainable after the grant closes.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Public-private partnerships with counties & municipalities",
                    "BEAD & federal grant deployment feasibility planning",
                    "Hybrid fiber & fixed wireless for immediate regional coverage",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <CheckCircle2 className="size-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 03 & Stats */}
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <span className="eyebrow inline-block rounded-full bg-signal/10 px-3.5 py-1 text-xs font-bold text-signal">
                  03 — Ajumi Networks Backing
                </span>
                <h3 className="display-md mt-4 font-semibold text-foreground">
                  Service and infrastructure from the same team.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  As the ISP division of Ajumi Networks LLC, we carry the engineering, software and broadband infrastructure expertise of the parent company. That means we can deliver internet service and the technical work required to design, deploy, maintain and improve the network underneath it.
                </p>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
                  >
                    <span>About Ajumi Networks</span>
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Upgraded Modern Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Symmetrical",
                    sub: "1:1 Upload = Download",
                    desc: "Fiber upload speeds match download speeds exactly for high-speed sending & video.",
                    icon: Zap,
                  },
                  {
                    title: "24/7 Monitoring",
                    sub: "Proactive NOC Oversight",
                    desc: "Real-time circuit telemetry and automatic latency monitoring around the clock.",
                    icon: Activity,
                  },
                  {
                    title: "Multi-Site DIA",
                    sub: "Campus & Branch Mesh",
                    desc: "Enterprise layer-2/3 interconnectivity bridging multiple operational locations.",
                    icon: Server,
                  },
                  {
                    title: "Auto Failover",
                    sub: "Redundant Path Backup",
                    desc: "Secondary wireless or cellular links ensuring 100% operational continuity.",
                    icon: ShieldCheck,
                  },
                ].map((stat) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={stat.title}
                      className="group rounded-2xl border border-border/80 bg-background p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-black/5"
                    >
                      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <StatIcon className="size-5" />
                      </div>
                      <h4 className="mt-4 font-display text-xl font-bold tracking-tight text-foreground">
                        {stat.title}
                      </h4>
                      <p className="mt-1 text-xs font-semibold text-primary">{stat.sub}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {stat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Teaser & Network Architecture */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Globe className="size-3.5" />
              <span>Multi-Tech Delivery</span>
            </div>
            <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
              Three ways we reach an address.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              We deploy the right connectivity medium based on geography, density, and local infrastructure constraints.
            </p>

            {/* 3 Interactive Delivery Cards */}
            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Fiber to the Home & Business",
                  badge: "Direct Symmetrical",
                  desc: "Direct optical fiber placement for maximum speed, lowest latency, and unlimited capacity.",
                  icon: Zap,
                  iconColor: "bg-primary/10 text-primary",
                },
                {
                  title: "Fixed Wireless Broadband",
                  badge: "Rapid Deployment",
                  desc: "High-speed wireless links for rural & tough terrain where fiber construction is under evaluation.",
                  icon: Radio,
                  iconColor: "bg-signal/10 text-signal",
                },
                {
                  title: "Partnerships & Wholesale",
                  badge: "Public-Private",
                  desc: "Municipal initiatives, utility collaborations, and local ISP wholesale agreements.",
                  icon: Building2,
                  iconColor: "bg-foreground/10 text-foreground",
                },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-border/80 bg-background p-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`flex size-10 items-center justify-center rounded-xl ${item.iconColor}`}>
                          <ItemIcon className="size-5" />
                        </div>
                        <h3 className="font-display text-base font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <span className="rounded-full bg-surface px-2.5 py-0.5 text-[0.6875rem] font-medium text-muted-foreground">
                        {item.badge}
                      </span>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground pl-13">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href="/coverage"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
              >
                <span>See Coverage &amp; Check Your Address</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Right Network Architecture Graphic Box */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink p-8 shadow-2xl text-ink-foreground sm:p-10">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-signal/20 blur-3xl" />

            {/* Header inside graphic box */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="eyebrow text-primary text-xs font-bold tracking-wider">Infrastructure Topology</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-white">Core Network Architecture</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[0.7rem] font-medium text-emerald-400">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                NOC Telemetry Active
              </span>
            </div>

            {/* SVG Diagram */}
            <div className="relative z-10 my-6">
              <NetworkDiagram />
            </div>

            {/* Footer Legend */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-ink-foreground/70">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-primary" /> Fiber Path
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-signal" /> Fixed Wireless
                </span>
              </div>
              <span className="font-mono text-[0.6875rem] text-primary">100 Gbps Core Backbone</span>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions & Government — Upgraded Feature Banner */}
      <section className="mx-auto max-w-[84rem] px-5 py-12 sm:px-8">
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink shadow-2xl text-ink-foreground">
          <div className="grid gap-0 lg:grid-cols-2 lg:items-center">
            {/* Image Container with Ambient Shadow */}
            <div className="relative h-72 min-h-full w-full overflow-hidden sm:min-h-96 lg:min-h-[32rem]">
              <Image
                src={civicImg}
                alt="Fiber distribution cabinet on the sidewalk outside a municipal city hall"
                width={1200}
                height={912}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ink/40 lg:to-ink" />
              <div className="absolute top-4 left-4 rounded-xl border border-white/20 bg-ink/90 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md">
                Municipal &amp; Civic Infrastructure
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Landmark className="size-3.5" />
                <span>Public Sector Procurement</span>
              </div>

              <h2 className="display-md mt-5 font-semibold tracking-tight text-white">
                Procurement-ready broadband for the public sector.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-foreground/80">
                Municipalities, counties, school districts, universities, healthcare organizations, and nonprofits work with us on dedicated access, public Wi-Fi, smart community infrastructure, feasibility assessments, and grant-supported deployments.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Dedicated DIA & Multi-Facility Ring Connectivity",
                  "Public Wi-Fi for Parks, Centers & Campuses",
                  "BEAD & Grant-Supported Deployment & Feasibility Studies",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink-foreground/90">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/government"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
                >
                  <span>Government Solutions</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/partnerships"
                  className="inline-flex h-12 items-center rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Partnership Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Testimonials — Redesigned Cards */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
            <Quote className="size-3.5" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
            What customers say after the install crew leaves.
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Real feedback from facilities directors, municipal administrators, and remote workers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "The install crew documented every splice and left us with a real as-built. That never happens with traditional telecom providers.",
              author: "Facilities Director",
              role: "Multi-Site Enterprise Employer",
              stars: 5,
            },
            {
              quote:
                "We had one provider and constant outages. Now the town office, library, and fire hall all run on the same managed fiber link.",
              author: "Municipal Administrator",
              role: "County Government Operations",
              stars: 5,
            },
            {
              quote:
                "Upload speed is the whole job for us in software engineering. Symmetrical fiber changed how our entire household works.",
              author: "Residential Customer",
              role: "Remote Software Engineer",
              stars: 5,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
            >
              <div>
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <blockquote className="mt-6 font-display text-base font-medium leading-relaxed tracking-tight text-foreground">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-border/60 pt-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <UserCheck className="size-5" />
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm">
            <ShieldCheck className="size-4 text-primary" />
            <span>Representative customer feedback. Named references available on request for procurement review.</span>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function NetworkDiagram() {
  return (
    <svg
      viewBox="0 0 500 320"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram showing core fiber backbone routing to residential, business, tower, and municipal nodes"
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Connecting Circuit Lines */}
      <g strokeWidth="2.5" opacity="0.6">
        {/* Core to Wireless Tower */}
        <line x1="250" y1="165" x2="250" y2="70" stroke="var(--color-signal)" strokeDasharray="4 4" />
        {/* Core to Homes */}
        <line x1="250" y1="165" x2="95" y2="85" stroke="var(--color-primary)" strokeDasharray="6 4" />
        {/* Core to Business */}
        <line x1="250" y1="165" x2="405" y2="85" stroke="var(--color-primary)" />
        {/* Core to Rural */}
        <line x1="250" y1="165" x2="95" y2="245" stroke="var(--color-signal)" strokeDasharray="4 4" />
        {/* Core to Municipal */}
        <line x1="250" y1="165" x2="405" y2="245" stroke="var(--color-primary)" />
      </g>

      {/* Center Core Node Glow & Circle */}
      <circle cx="250" cy="165" r="50" fill="url(#coreGlow)" />
      <circle cx="250" cy="165" r="32" fill="#0f172a" stroke="var(--color-primary)" strokeWidth="3" />
      <text
        x="250"
        y="169"
        textAnchor="middle"
        fontSize="12"
        fontWeight="800"
        fontFamily="Montserrat, sans-serif"
        letterSpacing="2"
        fill="#ffffff"
      >
        CORE
      </text>

      {/* 1. Wireless Tower (Top Center) */}
      <g>
        <circle cx="250" cy="65" r="16" fill="#1e293b" stroke="var(--color-signal)" strokeWidth="2.5" />
        <circle cx="250" cy="65" r="5" fill="var(--color-signal)" />
        <text x="250" y="24" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif" fill="#ffffff">
          Wireless Tower
        </text>
        <text x="250" y="38" textAnchor="middle" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif" fill="var(--color-signal)">
          5G Base
        </text>
      </g>

      {/* 2. Homes (Top Left) */}
      <g>
        <circle cx="95" cy="85" r="16" fill="#1e293b" stroke="var(--color-primary)" strokeWidth="2.5" />
        <circle cx="95" cy="85" r="5" fill="var(--color-primary)" />
        <text x="95" y="44" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif" fill="#ffffff">
          Homes
        </text>
        <text x="95" y="58" textAnchor="middle" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif" fill="var(--color-primary)">
          FTTH Fiber
        </text>
      </g>

      {/* 3. Business (Top Right) */}
      <g>
        <circle cx="405" cy="85" r="16" fill="#1e293b" stroke="var(--color-primary)" strokeWidth="2.5" />
        <circle cx="405" cy="85" r="5" fill="var(--color-primary)" />
        <text x="405" y="44" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif" fill="#ffffff">
          Business
        </text>
        <text x="405" y="58" textAnchor="middle" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif" fill="var(--color-primary)">
          10G DIA
        </text>
      </g>

      {/* 4. Rural (Bottom Left) */}
      <g>
        <circle cx="95" cy="245" r="16" fill="#1e293b" stroke="var(--color-signal)" strokeWidth="2.5" />
        <circle cx="95" cy="245" r="5" fill="var(--color-signal)" />
        <text x="95" y="280" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif" fill="#ffffff">
          Rural
        </text>
        <text x="95" y="294" textAnchor="middle" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif" fill="var(--color-signal)">
          Fixed Wireless
        </text>
      </g>

      {/* 5. Municipal (Bottom Right) */}
      <g>
        <circle cx="405" cy="245" r="16" fill="#1e293b" stroke="var(--color-primary)" strokeWidth="2.5" />
        <circle cx="405" cy="245" r="5" fill="var(--color-primary)" />
        <text x="405" y="280" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Inter, sans-serif" fill="#ffffff">
          Municipal
        </text>
        <text x="405" y="294" textAnchor="middle" fontSize="10" fontWeight="500" fontFamily="Inter, sans-serif" fill="var(--color-primary)">
          Civic Ring
        </text>
      </g>
    </svg>
  );
}
