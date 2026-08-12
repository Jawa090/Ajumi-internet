"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Loader2, MapPin, Check, Radio, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { z } from "zod";

const addressSchema = z
  .string()
  .trim()
  .min(3, { message: "Enter a street address or ZIP code." })
  .max(160, { message: "That address is too long." });

export type CoverageResult = {
  status: "available" | "planned" | "waitlist";
  query: string;
  technology: string;
  detail: string;
};

export async function lookupCoverage(query: string): Promise<CoverageResult> {
  await new Promise((r) => setTimeout(r, 1100));
  const digits = query.replace(/\D/g, "");
  const seed = digits ? Number(digits.slice(-1)) : query.trim().length;
  if (seed % 3 === 0) {
    return {
      status: "available",
      query,
      technology: "Fiber to the Home",
      detail:
        "Symmetrical fiber is live on this route. Installation windows are typically available within 7-10 business days.",
    };
  }
  if (seed % 3 === 1) {
    return {
      status: "planned",
      query,
      technology: "Fixed Wireless, fiber planned",
      detail:
        "Fixed wireless service can be delivered here now, with fiber construction under evaluation for this service area.",
    };
  }
  return {
    status: "waitlist",
    query,
    technology: "Expansion candidate",
    detail:
      "We don't serve this address yet. Join the list and we'll include it in our next feasibility and partnership review.",
  };
}

const labels: Record<CoverageResult["status"], string> = {
  available: "Service available",
  planned: "Service can be delivered",
  waitlist: "Not yet served",
};

export function AvailabilityChecker({ compact = false }: { compact?: boolean }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CoverageResult | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = addressSchema.safeParse(value);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Enter a valid address.");
      setResult(null);
      return;
    }
    setError(null);
    setLoading(true);
    setResult(null);
    const res = await lookupCoverage(parsed.data);
    setLoading(false);
    setResult(res);
  }

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} noValidate className="relative">
        <label htmlFor="coverage-address" className="eyebrow mb-2.5 flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          <MapPin className="size-3.5 text-primary" aria-hidden="true" />
          Check availability at your address
        </label>
        
        <div
          className={`group flex flex-col gap-2.5 p-2 bg-background border border-border/80 rounded-2xl shadow-lg shadow-black/5 hover:shadow-xl hover:border-primary/40 transition-all duration-300 sm:flex-row sm:items-center sm:gap-2 ${
            compact ? "p-1.5 rounded-xl" : ""
          }`}
        >
          <div className="relative flex-1 flex items-center">
            <MapPin
              className="pointer-events-none absolute left-4 size-5 text-muted-foreground transition-colors group-focus-within:text-primary"
              aria-hidden="true"
            />
            <input
              id="coverage-address"
              name="address"
              type="text"
              autoComplete="street-address"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              maxLength={160}
              aria-invalid={!!error}
              aria-describedby={error ? "coverage-error" : undefined}
              placeholder="Enter street address or ZIP code (e.g. 314 E State St)..."
              className="h-12 w-full rounded-xl bg-transparent pl-12 pr-4 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.99] disabled:opacity-75"
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                <span>Checking...</span>
              </>
            ) : (
              <>
                <span>Check Availability</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Feature tags underneath */}
      {!compact && (
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Check className="size-3.5 text-primary" /> Symmetrical Fiber Speeds
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-primary" /> Zero Data Caps
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="size-3.5 text-primary" /> In-House Engineering
          </span>
        </div>
      )}

      {/* Response Box */}
      <div aria-live="polite" className="mt-5">
        {error && (
          <p id="coverage-error" className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-sm font-medium text-destructive">
            {error}
          </p>
        )}
        {loading && (
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-5 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin text-primary" />
            <span>Checking fiber routes and wireless coverage near <strong className="text-foreground">{value}</strong>…</span>
          </div>
        )}
        {result && (
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-md transition-all">
            <div className="flex items-center gap-2">
              {result.status === "available" ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                  {labels[result.status]}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-signal/10 px-3 py-1 text-xs font-semibold text-signal">
                  <Radio className="size-3.5" aria-hidden="true" />
                  {labels[result.status]}
                </span>
              )}
            </div>
            <p className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground">
              {result.technology}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {result.detail}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">Checked: {result.query}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
              >
                {result.status === "waitlist" ? "Join Expansion List" : "Contact Us"}
              </Link>
              <Link
                href="/coverage"
                className="inline-flex h-11 items-center rounded-xl border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                How We Expand Coverage
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
