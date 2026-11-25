"use client";
import { formatNaira, naira } from "@tiera/engine";
import { useState } from "react";
import { Check, Eyebrow, H2, Section } from "./ui";

type Billing = "monthly" | "yearly";

const plans = [
  {
    name: "Starter",
    monthly: naira(3_500),
    for: "One shop, just you.",
    features: ["4 tiers and the Monday plan", "Voice logging for cash sales", "1 connected account", "Family pot with a limit"],
  },
  {
    name: "Growth",
    monthly: naira(9_500),
    popular: true,
    for: "A busy shop with staff.",
    features: ["Everything in Starter", "Unlimited tiers", "Up to 4 connected accounts", "Lender-ready monthly report", "WhatsApp summaries"],
  },
  {
    name: "Pro",
    monthly: naira(24_000),
    for: "More than one branch.",
    features: ["Everything in Growth", "Multiple branches", "Unlimited connected accounts", "Priority support in your language"],
  },
] as const;

/** Yearly price = 10 months (two months free). Computed in integer kobo. */
const yearly = (monthly: number) => monthly * 10;

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  return (
    <Section id="pricing">
      <Eyebrow>Pricing</Eyebrow>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <H2>
          Simple plans. <em className="text-gold">Pilot is free.</em>
        </H2>
        <div role="radiogroup" aria-label="Billing period" className="inline-flex self-start rounded-full border border-linen/15 p-1">
          {(["monthly", "yearly"] as const).map((b) => (
            <button
              key={b}
              type="button"
              role="radio"
              aria-checked={billing === b}
              onClick={() => setBilling(b)}
              className={`min-h-11 rounded-full px-5 text-sm transition-colors ${
                billing === b ? "bg-linen text-ink" : "text-muted hover:text-linen"
              }`}
            >
              {b === "monthly" ? "Monthly" : "Yearly"}
              {b === "yearly" && <span className="ml-1.5 text-xs opacity-75">2 months free</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-evergreen bg-evergreen/30 px-5 py-4 text-sm text-linen">
        <strong className="font-semibold">Lagos pilot:</strong> your first 3 months are free on any plan. No card needed.
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {plans.map((p) => {
          const popular = "popular" in p && p.popular;
          const price = billing === "monthly" ? p.monthly : yearly(p.monthly);
          return (
            <article key={p.name} className={`card relative flex flex-col p-6 ${popular ? "border-gold/60" : ""}`}>
              {popular && (
                <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-linen">{p.name}</h3>
              <p className="text-sm text-muted">{p.for}</p>
              <p className="mt-6">
                <span className="money font-display text-5xl text-linen">{formatNaira(price)}</span>
                <span className="text-sm text-muted"> / {billing === "monthly" ? "month" : "year"}</span>
              </p>
              {billing === "yearly" && (
                <p className="money mt-1 text-xs text-muted">That’s {formatNaira(p.monthly)} × 10 months</p>
              )}
              <ul className="mt-6 flex-1 space-y-2.5 text-sm text-linen">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 text-funded-text" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#join"
                className={`mt-8 inline-flex min-h-11 items-center justify-center rounded-full text-sm font-semibold ${
                  popular ? "bg-linen text-ink hover:bg-white" : "border border-linen/20 text-linen hover:bg-linen/5"
                }`}
              >
                Start free in the pilot
              </a>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
