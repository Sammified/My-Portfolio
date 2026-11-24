import { assertKobo, MoneyError, type Kobo } from "./money";

export interface Tier {
  id: string;
  name: string;
  /** Weekly target in kobo. 0 is allowed (tier exists but asks for nothing this week). */
  weeklyTarget: Kobo;
}

export interface WeekInput {
  /** Everything that came in this week, cash and transfer, in kobo. */
  income: Kobo;
  /** Tiers in the owner's priority order, highest priority first. */
  tiers: readonly Tier[];
  /** Unfunded amounts carried over from last week, keyed by tier id. */
  carriedShortfalls?: Readonly<Record<string, Kobo>>;
}

export type TierStatus = "funded" | "part_funded" | "waiting";

export interface TierAllocation {
  tierId: string;
  name: string;
  /** Shortfall carried in from last week. */
  carriedIn: Kobo;
  /** How much of `carriedIn` was paid this week. */
  carriedPaid: Kobo;
  /** This week's target. */
  target: Kobo;
  /** How much of this week's target was paid. */
  targetPaid: Kobo;
  /** carriedPaid + targetPaid: what the owner should move into this tier. */
  allocated: Kobo;
  /** carriedIn + target: the full amount this tier asked for this week. */
  due: Kobo;
  /** Unpaid remainder, carried to next week. Postponed, never cancelled. */
  shortfall: Kobo;
  status: TierStatus;
}

export interface WeekPlan {
  income: Kobo;
  allocations: TierAllocation[];
  totalDue: Kobo;
  totalAllocated: Kobo;
  totalShortfall: Kobo;
  /** Income left after every tier is fully funded. */
  surplus: Kobo;
  /** Feed this into next week's `carriedShortfalls`. Only tiers with a shortfall appear. */
  nextCarriedShortfalls: Record<string, Kobo>;
}

/**
 * The priority engine.
 *
 * 1. Pay carried-over shortfalls first, in tier order.
 * 2. Then pay this week's targets, top to bottom.
 * 3. Any tier not fully paid records its shortfall for next week.
 * 4. Anything left after every tier is surplus.
 *
 * Pure function: no I/O, no clock, no randomness. All values are integer kobo.
 */
export function allocateWeek(input: WeekInput): WeekPlan {
  const { income, tiers } = input;
  const carried = input.carriedShortfalls ?? {};
  assertKobo(income, "income");

  const ids = new Set<string>();
  for (const t of tiers) {
    if (!t.id) throw new MoneyError("every tier needs an id");
    if (ids.has(t.id)) throw new MoneyError(`duplicate tier id "${t.id}"`);
    ids.add(t.id);
    assertKobo(t.weeklyTarget, `weeklyTarget for "${t.id}"`);
  }
  for (const [id, amount] of Object.entries(carried)) {
    if (!ids.has(id)) {
      throw new MoneyError(`carried shortfall for unknown tier "${id}". Remove or reassign it before planning.`);
    }
    assertKobo(amount, `carried shortfall for "${id}"`);
  }

  let remaining = income;
  const take = (want: Kobo): Kobo => {
    const paid = want <= remaining ? want : remaining;
    remaining -= paid;
    return paid;
  };

  // Pass 1: carried shortfalls in tier order.
  const carriedPaid = new Map<string, Kobo>();
  for (const t of tiers) carriedPaid.set(t.id, take(carried[t.id] ?? 0));

  // Pass 2: this week's targets in tier order.
  const allocations: TierAllocation[] = tiers.map((t) => {
    const carriedIn = carried[t.id] ?? 0;
    const cPaid = carriedPaid.get(t.id) ?? 0;
    const tPaid = take(t.weeklyTarget);
    const due = carriedIn + t.weeklyTarget;
    const allocated = cPaid + tPaid;
    const shortfall = due - allocated;
    const status: TierStatus = shortfall === 0 ? "funded" : allocated > 0 ? "part_funded" : "waiting";
    return {
      tierId: t.id,
      name: t.name,
      carriedIn,
      carriedPaid: cPaid,
      target: t.weeklyTarget,
      targetPaid: tPaid,
      allocated,
      due,
      shortfall,
      status,
    };
  });

  const nextCarriedShortfalls: Record<string, Kobo> = {};
  let totalDue = 0;
  let totalAllocated = 0;
  let totalShortfall = 0;
  for (const a of allocations) {
    totalDue += a.due;
    totalAllocated += a.allocated;
    totalShortfall += a.shortfall;
    if (a.shortfall > 0) nextCarriedShortfalls[a.tierId] = a.shortfall;
  }

  return {
    income,
    allocations,
    totalDue,
    totalAllocated,
    totalShortfall,
    surplus: remaining,
    nextCarriedShortfalls,
  };
}

/** Move a tier up (-1) or down (+1) in the order. Returns a new array. */
export function moveTier<T extends { id: string }>(tiers: readonly T[], id: string, direction: -1 | 1): T[] {
  const i = tiers.findIndex((t) => t.id === id);
  if (i === -1) throw new MoneyError(`no tier "${id}"`);
  const j = i + direction;
  const next = [...tiers];
  if (j < 0 || j >= next.length) return next;
  [next[i], next[j]] = [next[j]!, next[i]!];
  return next;
}
