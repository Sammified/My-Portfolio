import { Eyebrow, H2, LockIcon, Section } from "./ui";

const promises = [
  ["Your money stays in your bank", "During the pilot Tiera never holds or moves money. You move it yourself, in your own bank app."],
  ["We never ask for your bank PIN", "Tiera has its own 4-digit app PIN. Never share your bank PIN or password with anyone, including us."],
  ["Nothing happens without you", "Every weekly plan waits for your approval. Approving records your decision. It does not move money."],
  ["Minimum data, protected", "We keep only what we need to run your plan, under the Nigeria Data Protection Act 2023. Ask us and we delete it."],
] as const;

const testimonials = [
  { quote: "[Placeholder testimonial: pilot owner quote goes here.]", who: "[Name], [business type], [area], Lagos" },
  { quote: "[Placeholder testimonial: pilot owner quote goes here.]", who: "[Name], [business type], [area], Lagos" },
  { quote: "[Placeholder testimonial: pilot owner quote goes here.]", who: "[Name], [business type], [area], Lagos" },
];

export function Trust() {
  return (
    <Section id="trust">
      <Eyebrow>Trust</Eyebrow>
      <H2 className="max-w-3xl">
        Built so you never have to <em className="text-gold">hand over control.</em>
      </H2>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {promises.map(([title, body]) => (
          <article key={title} className="card flex gap-4 p-6">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-linen/15 text-linen">
              <LockIcon />
            </span>
            <div>
              <h3 className="font-semibold text-linen">{title}</h3>
              <p className="mt-1 leading-relaxed text-muted">{body}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 rounded-2xl border border-dashed border-linen/15 p-4 text-sm text-muted">
        [Security details: encryption, hosting region, audits. To be completed before launch.]
      </p>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="card border-dashed p-6">
            <blockquote className="font-display text-xl italic leading-snug text-linen/80">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-muted">{t.who}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
