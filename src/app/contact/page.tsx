"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Headphones,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { CONTACT } from "@/components/site/nav-data";

const schema = z.object({
  name: z.string().trim().min(1, "Enter your full name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  phone: z.string().trim().max(40).optional(),
  topic: z.string().trim().min(1, "Select a topic.").max(60),
  message: z.string().trim().min(1, "Tell us how we can help.").max(1500),
});

const fieldClass =
  "h-12 w-full rounded-xl border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground/70 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setLoading(true);

    // Simulate response delay
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    (e.target as HTMLFormElement).reset();

    toast.success("Message sent successfully!", {
      description: "A member of our local team will respond within one business day.",
    });
  }

  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-surface/80 via-background to-background py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-32 right-0 size-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 size-96 rounded-full bg-signal/5 blur-3xl" />

        <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <Headphones className="size-3.5" />
              <span>Direct In-House Communications</span>
            </div>

            <h1 className="display-xl mt-4 font-semibold tracking-tight text-foreground">
              We're here when you need <span className="text-primary underline decoration-primary/20 underline-offset-8">technical answers.</span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Connect directly with local support representatives, sales engineering consultants, or billing specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="mx-auto max-w-[84rem] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left Direct Info Column */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase">
                <MessageSquare className="size-3.5" />
                <span>Direct Lines</span>
              </div>
              <h2 className="display-md mt-2 font-semibold tracking-tight text-foreground">
                Get in touch immediately.
              </h2>
            </div>

            <div className="space-y-4">
              {/* Phone Card */}
              <div className="group rounded-2xl border border-border/80 bg-background p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Phone className="size-6" />
                  </div>
                  <div>
                    <p className="eyebrow text-xs font-semibold text-muted-foreground">Phone &amp; Technical Support</p>
                    <a
                      href={CONTACT.phoneHref}
                      className="mt-1 block font-display text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group rounded-2xl border border-border/80 bg-background p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="size-6" />
                  </div>
                  <div>
                    <p className="eyebrow text-xs font-semibold text-muted-foreground">General &amp; Sales Email</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="mt-1 block font-display text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="group rounded-2xl border border-border/80 bg-background p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <MapPin className="size-6" />
                  </div>
                  <div>
                    <p className="eyebrow text-xs font-semibold text-muted-foreground">Headquarters Office</p>
                    <address className="mt-1 not-italic font-display text-base font-semibold text-foreground">
                      314 E State Street
                      <br />
                      Ithaca, NY 14850
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Custom Scoped Quote Card */}
            <div className="rounded-3xl border border-border bg-ink p-7 text-ink-foreground shadow-xl">
              <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="size-4" />
                <span>Need Pricing or Custom Scope?</span>
              </div>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                Submit an inquiry or RFP.
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-foreground/80">
                Include your service address, required bandwidth tier, and project specifications in the message form to receive an accurate response.
              </p>
              <div className="mt-5">
                <a
                  href="#name"
                  className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95"
                >
                  <span>Fill Out Form</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Message Form */}
          <div className="rounded-3xl border border-border/80 bg-background p-8 shadow-xl sm:p-10">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Send a direct message
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Fill out the fields below and a team member will follow up promptly.
              </p>
            </div>

            <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" error={errors["name"]}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={fieldClass}
                    maxLength={100}
                    placeholder="Jane Doe"
                    required
                  />
                </Field>

                <Field label="Email Address" name="email" error={errors["email"]}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass}
                    maxLength={255}
                    placeholder="jane@company.com"
                    required
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone Number (Optional)" name="phone" error={errors["phone"]}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={fieldClass}
                    maxLength={40}
                    placeholder="(607) 555-0199"
                  />
                </Field>

                <Field label="Topic / Inquiry Area" name="topic" error={errors["topic"]}>
                  <select id="topic" name="topic" className={fieldClass} defaultValue="Support">
                    {[
                      "Technical Support",
                      "New Service Availability",
                      "Billing & Account",
                      "Government & RFP",
                      "Wholesale & Partnership",
                      "Press & Media",
                    ].map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="How Can We Help?" name="message" error={errors["message"]}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1500}
                  required
                  placeholder="Tell us about your address, timeline, or question..."
                  className="w-full rounded-xl border border-input bg-background p-4 text-base text-foreground placeholder:text-muted-foreground/70 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg disabled:opacity-75"
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="size-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 font-medium text-foreground">
                <ShieldCheck className="size-4 text-primary" /> Zero Offshore Scripts
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-primary" /> 1-Business Day Guarantee
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-2 block text-xs font-semibold text-foreground uppercase">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
