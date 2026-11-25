import { allocateWeek, formatNaira, naira, type Tier } from "@tiera/engine";

/** Demo tiers shown on the website. The numbers on the page are computed by the engine, not hand-typed. */
export const demoTiers: Tier[] = [
  { id: "restock", name: "Restock", weeklyTarget: naira(120_000) },
  { id: "salary", name: "Your salary", weeklyTarget: naira(40_000) },
  { id: "family", name: "Family pot", weeklyTarget: naira(20_000) },
  { id: "growth", name: "Growth", weeklyTarget: naira(15_000) },
];

/** A slightly short week, so the mockup shows funded, part-funded and waiting tiers. */
export const demoPlan = allocateWeek({ income: naira(172_000), tiers: demoTiers });

export const demoVoiceAmount = formatNaira(naira(45_000), { sign: true });

export { formatNaira, naira };
