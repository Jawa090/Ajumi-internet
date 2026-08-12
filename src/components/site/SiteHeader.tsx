"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Zap,
  Home as HomeIcon,
  Building2,
  Server,
  Radio,
  Wifi,
  Network,
  FileText,
  Trees,
  ArrowRight,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT } from "./nav-data";

const megaServices = [
  {
    label: "Residential Internet",
    to: "/residential",
    desc: "Symmetrical fiber for streaming, gaming, & remote work",
    icon: HomeIcon,
  },
  {
    label: "Business Internet",
    to: "/business",
    desc: "POS protection, static IPs, & commercial SLAs",
    icon: Building2,
  },
  {
    label: "Enterprise Solutions",
    to: "/enterprise",
    desc: "Dedicated 1:1 fiber up to 10 Gbps with 99.99% SLA",
    icon: Server,
  },
  {
    label: "Fixed Wireless Internet",
    to: "/fixed-wireless",
    desc: "Rapid deployment broadband for tough terrain",
    icon: Radio,
  },
  {
    label: "Managed Wi-Fi Systems",
    to: "/managed-wifi",
    desc: "Wi-Fi 6 access points, heatmaps, & captive portals",
    icon: Wifi,
  },
  {
    label: "Fiber Installation & Engineering",
    to: "/network-engineering",
    desc: "In-house fusion splicing & OTDR trace certification",
    icon: Network,
  },
  {
    label: "Broadband Consulting",
    to: "/broadband-consulting",
    desc: "Feasibility studies & BEAD grant applications",
    icon: FileText,
  },
  {
    label: "Rural & Community Broadband",
    to: "/rural-broadband",
    desc: "Expanding broadband to unserved communities",
    icon: Trees,
  },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="hidden border-b border-border/60 bg-ink px-5 py-2 text-xs text-ink-foreground/80 sm:block">
        <div className="mx-auto flex max-w-[84rem] items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white">Network Status:</span> All Systems 100% Operational
            </span>
            <span className="text-white/20">|</span>
            <span className="inline-flex items-center gap-1">
              <Globe className="size-3.5 text-primary" /> US &amp; Canada Regional Footprint
            </span>
          </div>

          <div className="flex items-center gap-5 font-medium">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-1.5 text-white transition-colors hover:text-primary"
            >
              <Phone className="size-3.5 text-primary" />
              <span>{CONTACT.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <Link href="/about" className="transition-colors hover:text-white">
              Why Ajumi Engineering
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-border/80 bg-background/95 backdrop-blur-md shadow-md shadow-black/5"
            : "border-b border-border/40 bg-background/90 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[84rem] items-center gap-8 px-5 sm:px-8">
          <Link href="/" className="text-foreground transition-opacity hover:opacity-90" aria-label="Ajumi Internet home">
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                  servicesOpen || pathname.startsWith("/residential") || pathname.startsWith("/business") || pathname.startsWith("/enterprise")
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:bg-surface hover:text-foreground"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`size-4 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-primary" : ""}`} />
              </button>

              {/* Mega Menu Dropdown Box */}
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-[42rem] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="rounded-3xl border border-border/80 bg-background p-6 shadow-2xl shadow-black/10">
                    <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
                      <span className="eyebrow text-xs font-bold text-primary uppercase">
                        Our Broadband Services
                      </span>
                      <Link
                        href="/plans"
                        onClick={() => setServicesOpen(false)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        View All Plans &amp; Pricing <ArrowRight className="size-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {megaServices.map((s) => {
                        const SIcon = s.icon;
                        return (
                          <Link
                            key={s.to}
                            href={s.to}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-start gap-3.5 rounded-2xl p-3 transition-colors hover:bg-surface"
                          >
                            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                              <SIcon className="size-4" />
                            </div>
                            <div>
                              <p className="font-display text-sm font-semibold text-foreground group-hover:text-primary">
                                {s.label}
                              </p>
                              <p className="mt-0.5 text-[0.6875rem] leading-tight text-muted-foreground">
                                {s.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/plans"
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                isActive("/plans")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-surface hover:text-foreground"
              }`}
            >
              Plans
            </Link>

            <Link
              href="/government"
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                isActive("/government")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-surface hover:text-foreground"
              }`}
            >
              Government
            </Link>

            <Link
              href="/about"
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                isActive("/about")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-surface hover:text-foreground"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                isActive("/contact")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-surface hover:text-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg sm:inline-flex"
            >
              <span>Get Started</span>
              <ArrowRight className="size-4" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors hover:bg-surface lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu Drawer */}
        {open && (
          <div className="border-t border-border bg-background shadow-xl lg:hidden">
            <nav aria-label="Mobile" className="mx-auto max-w-[84rem] px-5 py-6 sm:px-8">
              <p className="eyebrow mb-3 text-xs font-bold text-primary uppercase">Services</p>
              <div className="mb-6 grid gap-1.5">
                {megaServices.map((s) => {
                  const SIcon = s.icon;
                  return (
                    <Link
                      key={s.to}
                      href={s.to}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
                    >
                      <SIcon className="size-4 text-primary" />
                      <span>{s.label}</span>
                    </Link>
                  );
                })}
              </div>

              <p className="eyebrow mb-3 text-xs font-bold text-primary uppercase">Main Menu</p>
              <div className="mb-6 grid gap-1.5">
                {[
                  { label: "Internet Plans & Pricing", to: "/plans" },
                  { label: "Government & Municipal", to: "/government" },
                  { label: "About Ajumi Networks", to: "/about" },
                  { label: "Contact Us", to: "/contact" },
                ].map((l) => (
                  <Link
                    key={l.to}
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="grid gap-3 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20"
                >
                  <span>Get Started</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
