import { Eyebrow, H2, Section } from "./ui";

const cards = [
  {
    title: "Restock ate the profit",
    body: "You bought more stock because sales were good. Then sales slowed, and the money was sitting on your shelves.",
  },
  {
    title: "You never paid yourself",
    body: "Your own salary comes last, after the shop, the staff and everyone else. Some months it doesn't come at all.",
  },
  {
    title: "Family asked, and you said yes",
    body: "School fees, a hospital bill, a wedding. Each one was fair. Together they emptied the till.",
  },
];

export function Pain() {
  return (
    <Section id="pain">
      <Eyebrow>The problem</Eyebrow>
      <H2 className="max-w-3xl">
        Sales were good this month. <em className="text-gold">So where did the money go?</em>
      </H2>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <article key={c.title} className="card p-6">
            <h3 className="text-lg font-semibold text-linen">{c.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
          </article>
        ))}
      </div>
      {/* TODO(before launch): verify these figures against the published Moniepoint report. */}
      <figure className="card mt-4 grid items-center gap-6 p-6 md:grid-cols-[auto_auto_1fr] md:p-8">
        <div>
          <p className="money font-display text-6xl text-linen">65%</p>
          <p className="text-sm text-muted">grew revenue</p>
        </div>
        <div>
          <p className="money font-display text-6xl text-muted">47%</p>
          <p className="text-sm text-muted">grew profit</p>
        </div>
        <figcaption className="text-muted md:pl-6">
          In 2025, most Nigerian informal businesses sold more, but far fewer kept more.
          <span className="mt-2 block text-xs text-faint">Source: Moniepoint Informal Economy Report 2025</span>
        </figcaption>
      </figure>
    </Section>
  );
}
