import { Eyebrow, H2, Section } from "./ui";
import { VoiceChips } from "./VoiceChips";

const features = [
  {
    title: "Your salary, every week",
    body: "You work the hardest. Your salary is a tier with its own target, not whatever is left at the end of the month.",
  },
  {
    title: "A family pot with a limit",
    body: "Set a weekly family amount. Requests come to you through [YOUR REQUEST LINK]. If a request is bigger than what's left, Tiera helps you draft a kind reply.",
  },
  {
    title: "Postponed, never forgotten",
    body: "In a slow week, lower tiers wait. Next week they get topped up first, before anything else.",
  },
  {
    title: "Grow what's left",
    body: "Once every tier is funded, the surplus is yours to grow. Later, through [LICENSED PARTNER].",
  },
];

export function WhyTiera() {
  return (
    <Section id="why">
      <Eyebrow>Why Tiera</Eyebrow>
      <H2 className="max-w-3xl">
        Every naira gets a job, <em className="text-gold">in your order.</em>
      </H2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {features.map((f) => (
          <article key={f.title} className="card p-6">
            <h3 className="text-lg font-semibold text-linen">{f.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
          </article>
        ))}
      </div>

      <div className="card mt-4 grid gap-8 p-6 md:grid-cols-[1fr_1.3fr] md:p-10">
        <div>
          <h3 className="font-display text-3xl text-linen md:text-4xl">Talk to it like you talk to your customers.</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Log a cash sale with a voice note in English, Pidgin, Yorùbá, Igbo or Hausa. Tiera confirms the amount
            before saving. Voice can explain your week, but the numbers always come from your records, never a guess.
          </p>
        </div>
        <VoiceChips />
      </div>
    </Section>
  );
}
