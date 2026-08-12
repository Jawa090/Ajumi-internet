import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Network,
  Zap,
  ShieldCheck,
  Server,
  CheckCircle2,
  ArrowRight,
  Cpu,
} from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import splicingImg from "@/assets/splicing.jpg";

export const metadata: Metadata = {
  title: "Fiber Installation & Network Engineering | Ajumi Internet",
  description:
    "Fusion splicing, optical route planning, OTDR certification testing, structured cabling, and outside plant (OSP) engineering by Ajumi Networks LLC.",
  openGraph: {
    title: "Fiber Installation & Network Engineering | Ajumi Internet",
    description:
      "In-house fusion splicing, optical testing, structured cabling, and network engineering for ISPs, municipalities, and commercial projects.",
  },
};

export default function NetworkEngineeringPage() {
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
                <Network className="size-3.5" />
                <span>Outside &amp; Inside Plant Engineering</span>
              </div>

              <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
                Fiber optic construction &amp; <span className="text-primary underline decoration-primary/20 underline-offset-8">network engineering.</span>
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Optical route design, fusion splicing, OTDR testing, structured ethernet cabling, and active electronics deployment engineered by Ajumi Networks LLC.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg"
                >
                  <span>Scope Engineering Project</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right Splicing Image Banner */}
            <div className="relative">
              <div className="group relative overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-2xl transition-all duration-300">
                <Image
                  src={splicingImg}
                  alt="Technician fusion-splicing fiber strands inside field enclosure"
                  width={1200}
                  height={912}
                  priority
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-ink/90 p-5 text-white backdrop-blur-md">
                  <p className="eyebrow text-primary text-xs font-bold tracking-wider">In-House Field Splicing</p>
                  <p className="mt-1 text-sm font-medium text-white/90">
                    Precision fusion splicing &amp; OTDR trace documentation for every optical strand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Capabilities Grid */}
      <section className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Fusion Splicing",
              desc: "High-precision core alignment fusion splicing for underground and aerial optical enclosures.",
            },
            {
              title: "OTDR Certification",
              desc: "Complete optical time-domain reflectometry trace testing and loss budget documentation.",
            },
            {
              title: "Structured Cabling",
              desc: "Cat6/Cat6A ethernet runs, patch panel termination, fiber backbones, and rack elevation assembly.",
            },
            {
              title: "Active Equipment Staging",
              desc: "Router configuration, GPON/XGS-PON OLT setup, BGP transit routing, and DWDM optics.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-border/80 bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-black/5"
            >
              <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
