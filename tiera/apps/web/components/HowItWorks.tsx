import { Eyebrow, H2, Section } from "./ui";

const steps = [
  {
    n: "01",
    title: "Connect",
    body: "Add your bank and POS accounts, or just log cash sales with a voice note. Tiera only reads. It never moves money.",
  },
  {
    n: "02",
    title: "Set your order",
    body: "Put your tiers in the order that matters to you: Restock, Your salary, Family pot, Growth. Give each one a weekly target.",
  },
  {
    n: "03",
    title: "Approve the week",
    body: "Every Monday, Tiera shows you exactly how much goes where. You approve it, then move the money in your own bank app.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how">
      <Eyebrow>How it works</Eyebrow>
      <H2>
        Three steps. <em className="text-gold">Ten minutes a week.</em>
      </H2>
      <ol className="mt-12 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="card p-6">
            <p className="money text-sm text-faint">{s.n}</p>
            <h3 className="mt-6 font-display text-3xl text-linen">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
