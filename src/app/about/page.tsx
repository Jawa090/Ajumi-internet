import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Server,
  Building2,
  Home as HomeIcon,
  Landmark,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  Users,
  Award,
  Radio,
} from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import networkImg from "@/assets/network-rack.jpg";

export const metadata: Metadata = {
  title: "About Ajumi Internet — ISP Division of Ajumi Networks LLC",
  description:
    "Ajumi Internet combines fiber infrastructure, fixed wireless and managed networking with the engineering expertise of Ajumi Networks LLC.",
  openGraph: {
    title: "About Ajumi Internet — Engineering-Led ISP",
    description:
      "Our mission, core values, and the Ajumi Networks LLC engineering relationship behind our physical broadband network.",
  },
};

const values = [
  {
    num: "01",
    title: "Technical Excellence",
    desc: "We perform optical fiber route design, fusion splicing, and OTDR testing in-house instead of relying on third-party scripts.",
  },
  {
    num: "02",
    title: "Uncompromising Reliability",
    desc: "Built with redundant core routing, proactive NOC telemetry, and binding uptime SLAs.",
  },
  {
    num: "03",
    title: "Pricing Integrity",
    desc: "No hidden equipment rental traps, no data caps, and zero price-gouge promotional tricks.",
  },
  {
    num: "04",
    title: "Community Impact",
    desc: "We build fiber and fixed wireless into rural and underserved regions larger telecom incumbents ignore.",
  },
  {
    num: "05",
    title: "In-House Accountability",
    desc: "When a field issue occurs, customer support directly escalates to engineers who know the physical plant.",
  },
  {
    num: "06",
    title: "Digital Inclusion",
    desc: "Ensuring schools, families, and small businesses have equal access to symmetrical multi-gigabit speeds.",
  },
  {
    num: "07",
    title: "Public-Private Partnership",
    desc: "Collaborating with municipalities, utilities, and counties to build sustainable broadband infrastructure.",
  },
  {
    num: "08",
    title: "Modern Innovation",
    desc: "Deploying Wi-Fi 6E/7 gateways, 10G DIA circuits, and smart city telemetry networks.",
  },
];

const audiences = [
  {
    title: "Homes & Renters",
    desc: "Homeowners, renters, and multi-family residential communities needing reliable symmetrical fiber.",
    icon: HomeIcon,
  },
  {
    title: "Businesses & SMBs",
    desc: "Retail storefronts, offices, clinics, and restaurants requiring POS reliability and static IP options.",
    icon: Building2,
  },
  {
    title: "Public Sector & Government",
    desc: "Municipalities, counties, school districts, universities, healthcare systems, and public safety hubs.",
    icon: Landmark,
  },
  {
    title: "Property & Real Estate",
    desc: "Property managers, real estate developers, hospitality venues, and commercial office parks.",
    icon: Layers,
  },
  {
    title: "Underserved Communities",
    desc: "Rural agricultural corridors, mountain regions, and towns seeking sustainable high-speed broadband.",
    icon: Radio,
  },
  {
    title: "Partner ISPs & Wholesale",
    desc: "Regional operators seeking dark fiber strand leasing, IP transit, or engineering consulting.",
    icon: Globe,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/80 via-background to-background py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 size-96 rounded-full bg-signal/5 blur-3xl" />

        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Cpu className="size-3.5" />
              <span>Engineering-Led Infrastructure Provider</span>
            </div>

            <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
              The ISP division of a <span className="text-primary underline decoration-primary/20 underline-offset-8">telecom engineering</span> company.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Ajumi Internet delivers high-speed broadband — and executes the physical engineering required to design, deploy, maintain, and upgrade physical optical plant networks.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="mx-auto max-w-[84rem] px-5 py-16 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-ink p-8 shadow-2xl text-ink-foreground sm:p-12">
          <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wider uppercase">
            <Award className="size-4" />
            <span>Our Mission</span>
          </div>
          <blockquote className="mt-4 font-display text-2xl font-medium leading-relaxed tracking-tight text-white sm:text-3xl">
            “To provide reliable, symmetrical, high-speed internet access while expanding digital opportunity for homes, businesses, institutions, and underserved communities across the region.”
          </blockquote>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="border-y border-border bg-surface/60 py-20 lg:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <ShieldCheck className="size-3.5" />
              <span>Foundational Principles</span>
            </div>
            <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
              Eight principles we build by.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              How our engineering background changes how we build and support internet circuits.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.num}
                className="group rounded-3xl border border-border/80 bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
              >
                <span className="eyebrow text-xs font-bold text-primary">{v.num}</span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ajumi Networks LLC Relationship */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-2xl transition-all duration-300">
            <Image
              src={networkImg}
              alt="Network switches with fiber patch cabling in an Ajumi network facility"
              width={1200}
              height={912}
              className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-ink/90 p-5 text-white backdrop-blur-md">
              <p className="eyebrow text-primary text-xs font-bold tracking-wider">Vertical Integration</p>
              <p className="mt-1 text-sm font-medium text-white/90">
                Full-stack control from physical fiber splice enclosures to subscriber Wi-Fi.
              </p>
            </div>
          </div>

          <div className="lg:pl-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Server className="size-3.5" />
              <span>Parent Company Backing</span>
            </div>

            <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
              What Ajumi Networks LLC brings to your circuit.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Ajumi Internet operates as the ISP division of Ajumi Networks LLC. That means one unified team plans the physical fiber route, fusion-splices the optical strands, installs active electronics, monitors network telemetry 24/7, and responds when support is needed.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "In-house optical time-domain reflectometry (OTDR) testing",
                "Direct escalation to network infrastructure software engineers",
                "Dark fiber strand leasing & wholesale IP transit capacity",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/network-engineering"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
              >
                <span>Explore Network Engineering Services</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve — 6 Cards */}
      <section className="border-t border-border bg-surface/60 py-20 lg:py-28">
        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="flex flex-col items-start max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Users className="size-3.5" />
              <span>Diverse Footprint</span>
            </div>
            <h2 className="display-md mt-4 font-semibold tracking-tight text-foreground">
              Residential to procurement, on the same core plant.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Our fiber and fixed wireless networks serve households, business parks, municipalities, and regional partners.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a) => {
              const AIcon = a.icon;
              return (
                <div
                  key={a.title}
                  className="group rounded-3xl border border-border/80 bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <AIcon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
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
