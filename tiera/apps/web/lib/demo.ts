import { allocateWeek, formatNaira, naira, type Tier } from "@tiera/engine";

/**
 * Sample week shown on the website. Every figure on the page comes from the engine, not hand-typed.
 * Matches the brand design: ₦920,000 in, Restock and salary funded, Family part funded, Growth waits.
 */
export const demoTiers: Tier[] = [
  { id: "restock", name: "Restock", weeklyTarget: naira(450_000) },
  { id: "salary", name: "Your salary", weeklyTarget: naira(300_000) },
  { id: "family", name: "Family pot", weeklyTarget: naira(250_000) },
  { id: "growth", name: "Growth", weeklyTarget: naira(100_000) },
];

export const demoPlan = allocateWeek({ income: naira(920_000), tiers: demoTiers });

const by = Object.fromEntries(demoPlan.allocations.map((a) => [a.tierId, a]));
export const demo = {
  income: demoPlan.income,
  restock: by.restock!,
  salary: by.salary!,
  family: by.family!,
  growth: by.growth!,
  /** What's left to give from the family pot this week. */
  familyLeft: by.family!.allocated, // nothing approved yet in the demo
  voiceAmount: naira(45_000),
};

export { formatNaira, naira };
