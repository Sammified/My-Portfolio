import { Eyebrow, H2, Section } from "./ui";

const steps = [
  ["Day 1", "Set your order", "Four tiers, four weekly targets. About ten minutes."],
  ["Week 1", "Your first Monday", "Tiera shows the plan. You approve it and move the money yourself."],
  ["Week 4", "You've paid yourself for a month", "Your salary arrived four weeks running, on purpose."],
  ["Day 60", "Family money feels calmer", "Requests come in, the limit holds, nobody is surprised."],
  ["Day 90", "A record a lender can read", "Three months of clean weekly numbers, ready to share when you choose."],
] as const;

export function Timeline() {
  return (
    <Section id="90-days">
      <Eyebrow>90 days from now</Eyebrow>
      <H2>
        What changes, <em className="text-gold">week by week.</em>
      </H2>
      <ol className="mt-12 grid gap-6 md:grid-cols-5 md:gap-4">
        {steps.map(([when, title, body], i) => (
          <li key={when} className="relative border-l border-linen/10 pl-5 md:border-l-0 md:border-t md:pl-0 md:pt-6">
            <span
              aria-hidden="true"
              className={`absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full md:-top-[5px] md:left-0 ${
                i === steps.length - 1 ? "bg-gold" : "bg-linen/40"
              }`}
            />
            <p className="money text-xs uppercase tracking-wider text-muted">{when}</p>
            <h3 className="mt-2 font-semibold text-linen">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
