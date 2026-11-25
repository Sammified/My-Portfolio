import { Eyebrow, H2, Section } from "./ui";

const faqs = [
  [
    "Most of my sales are cash. Does Tiera still work?",
    "Yes. Log cash sales with a quick voice note or by typing the amount. Tiera adds them to your transfers and POS so the weekly plan covers everything that came in.",
  ],
  [
    "Does Tiera move my money?",
    "No. During the pilot Tiera never holds or moves money. It shows you how much should go to each tier, you approve the plan, then you move the money yourself in your own bank app.",
  ],
  [
    "Will it work on my phone?",
    "Tiera is built for mid-range Android phones and paid data. The app is small, works on slow networks, and voice notes are short.",
  ],
  [
    "Is my money and data safe?",
    "Your money never leaves your bank. Tiera never asks for your bank PIN or password. We store the minimum data needed, protected under the Nigeria Data Protection Act 2023, and delete it if you ask.",
  ],
  [
    "How does the family pot work?",
    "You choose a weekly family amount. Family members send requests, and you approve or say “later”. If a request is bigger than what's left in the pot, Tiera won't let it through and helps you draft a kind reply.",
  ],
  [
    "What happens in a slow week?",
    "Money fills your tiers from the top. If it runs out, the lower tiers are postponed, not cancelled. Next week, they're topped up first.",
  ],
] as const;

export function FAQ() {
  return (
    <Section id="faq">
      <Eyebrow>FAQ</Eyebrow>
      <H2>
        Questions owners <em className="text-gold">ask us.</em>
      </H2>
      <div className="mt-12 divide-y divide-linen/10 border-y border-linen/10">
        {faqs.map(([q, a]) => (
          <details key={q} className="group">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg text-linen [&::-webkit-details-marker]:hidden">
              {q}
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-linen/15 text-muted transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="max-w-3xl pb-6 leading-relaxed text-muted">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
