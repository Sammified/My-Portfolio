import { demoPlan, formatNaira } from "@/lib/demo";
import type { TierStatus } from "@tiera/engine";

const statusLabel: Record<TierStatus, { text: string; cls: string; bar: string }> = {
  funded: { text: "Funded", cls: "text-funded-text bg-funded/15", bar: "bg-funded" },
  part_funded: { text: "Part funded", cls: "text-attention-text bg-attention/15", bar: "bg-attention" },
  waiting: { text: "Waiting", cls: "text-muted bg-linen/5", bar: "bg-linen/20" },
};

/** Weekly order on a phone. All figures come from the engine (lib/demo.ts). */
export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] rounded-[2.6rem] border border-linen/15 bg-midnight p-3 shadow-2xl shadow-black/60 md:w-[300px]">
      <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-ink" aria-hidden="true" />
      <div className="rounded-[2rem] bg-ink px-4 pb-5 pt-4">
        <p className="text-xs text-muted">Good morning, Ada</p>
        <p className="mt-3 text-[11px] uppercase tracking-wider text-muted">Came in this week</p>
        <p className="money font-display text-4xl text-linen">{formatNaira(demoPlan.income)}</p>

        <p className="mb-2 mt-5 text-[11px] uppercase tracking-wider text-muted">This week’s order</p>
        <ol className="space-y-2">
          {demoPlan.allocations.map((a, i) => {
            const s = statusLabel[a.status];
            const pct = a.due === 0 ? 100 : Math.round((a.allocated * 100) / a.due);
            return (
              <li key={a.tierId} className="rounded-2xl border border-linen/[0.08] bg-midnight p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <span className="money text-xs text-faint">{i + 1}</span>
                    {a.name}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${s.cls}`}>{s.text}</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-linen/[0.06]">
                  <div className={`h-full rounded-full ${s.bar}`} style={{ width: `${pct}%` }} />
                </div>
                <p className="money mt-1.5 text-right text-xs text-muted">
                  {formatNaira(a.allocated)} <span className="text-faint">of {formatNaira(a.due)}</span>
                </p>
              </li>
            );
          })}
        </ol>
        <div className="mt-4 flex h-11 items-center justify-center rounded-full bg-gold text-sm font-semibold text-ink">
          Approve this order
        </div>
      </div>
    </div>
  );
}
