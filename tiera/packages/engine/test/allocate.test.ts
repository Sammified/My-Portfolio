import { describe, expect, it } from "vitest";
import { allocateWeek, MoneyError, moveTier, naira, type Tier } from "../src";

const tiers: Tier[] = [
  { id: "restock", name: "Restock", weeklyTarget: naira(120_000) },
  { id: "salary", name: "Your salary", weeklyTarget: naira(40_000) },
  { id: "family", name: "Family pot", weeklyTarget: naira(20_000) },
  { id: "growth", name: "Growth", weeklyTarget: naira(15_000) },
];
// total targets: ₦195,000

describe("allocateWeek", () => {
  it("funds every tier and reports surplus in a good week", () => {
    const plan = allocateWeek({ income: naira(250_000), tiers });
    expect(plan.allocations.map((a) => a.status)).toEqual(["funded", "funded", "funded", "funded"]);
    expect(plan.allocations.map((a) => a.allocated)).toEqual(tiers.map((t) => t.weeklyTarget));
    expect(plan.surplus).toBe(naira(55_000));
    expect(plan.totalShortfall).toBe(0);
    expect(plan.nextCarriedShortfalls).toEqual({});
  });

  it("fills from the top in a short week and postpones lower tiers", () => {
    const plan = allocateWeek({ income: naira(150_000), tiers });
    const [restock, salary, family, growth] = plan.allocations;
    expect(restock).toMatchObject({ allocated: naira(120_000), status: "funded", shortfall: 0 });
    expect(salary).toMatchObject({ allocated: naira(30_000), status: "part_funded", shortfall: naira(10_000) });
    expect(family).toMatchObject({ allocated: 0, status: "waiting", shortfall: naira(20_000) });
    expect(growth).toMatchObject({ allocated: 0, status: "waiting", shortfall: naira(15_000) });
    expect(plan.surplus).toBe(0);
    expect(plan.nextCarriedShortfalls).toEqual({
      salary: naira(10_000),
      family: naira(20_000),
      growth: naira(15_000),
    });
  });

  it("pays carried shortfalls first, in tier order, before any of this week's targets", () => {
    const carried = { salary: naira(10_000), growth: naira(15_000) };
    // ₦25,000 of carry + ₦195,000 targets = ₦220,000 due. Give ₦30,000.
    const plan = allocateWeek({ income: naira(30_000), tiers, carriedShortfalls: carried });
    const by = Object.fromEntries(plan.allocations.map((a) => [a.tierId, a]));
    // Carry is paid before restock's own target, even though restock is top.
    expect(by.salary).toMatchObject({ carriedPaid: naira(10_000), targetPaid: 0 });
    expect(by.growth).toMatchObject({ carriedPaid: naira(15_000), targetPaid: 0 });
    expect(by.restock).toMatchObject({ carriedPaid: 0, targetPaid: naira(5_000), status: "part_funded" });
    expect(plan.surplus).toBe(0);
    expect(plan.totalAllocated).toBe(naira(30_000));
  });

  it("carries the full unpaid remainder (carry + target) forward", () => {
    const plan = allocateWeek({ income: 0, tiers, carriedShortfalls: { family: naira(5_000) } });
    expect(plan.nextCarriedShortfalls.family).toBe(naira(25_000));
    expect(plan.allocations.every((a) => a.status === "waiting")).toBe(true);
  });

  it("chains across weeks: a short week then a good week clears the backlog", () => {
    const week1 = allocateWeek({ income: naira(150_000), tiers });
    const week2 = allocateWeek({
      income: naira(260_000),
      tiers,
      carriedShortfalls: week1.nextCarriedShortfalls,
    });
    expect(week2.totalShortfall).toBe(0);
    // 260,000 − 45,000 carry − 195,000 targets
    expect(week2.surplus).toBe(naira(20_000));
  });

  it("partially pays a carry when even the carry cannot be covered", () => {
    const plan = allocateWeek({
      income: naira(12_000),
      tiers,
      carriedShortfalls: { salary: naira(10_000), family: naira(5_000) },
    });
    const by = Object.fromEntries(plan.allocations.map((a) => [a.tierId, a]));
    expect(by.salary!.carriedPaid).toBe(naira(10_000));
    expect(by.family!.carriedPaid).toBe(naira(2_000));
    expect(by.restock!.allocated).toBe(0);
    expect(plan.nextCarriedShortfalls.family).toBe(naira(3_000 + 20_000));
  });

  it("conserves money: allocated + surplus always equals income", () => {
    let seed = 42;
    const rand = (n: number) => {
      seed = (seed * 1103515245 + 12345) % 2 ** 31;
      return seed % n;
    };
    for (let i = 0; i < 500; i++) {
      const ts: Tier[] = Array.from({ length: 1 + rand(6) }, (_, j) => ({
        id: `t${j}`,
        name: `T${j}`,
        weeklyTarget: rand(10_000_000),
      }));
      const carriedShortfalls: Record<string, number> = {};
      for (const t of ts) if (rand(2)) carriedShortfalls[t.id] = rand(5_000_000);
      const income = rand(40_000_000);
      const p = allocateWeek({ income, tiers: ts, carriedShortfalls });
      expect(p.totalAllocated + p.surplus).toBe(income);
      expect(p.totalAllocated + p.totalShortfall).toBe(p.totalDue);
      for (const a of p.allocations) {
        expect(Number.isInteger(a.allocated)).toBe(true);
        expect(a.allocated).toBeLessThanOrEqual(a.due);
      }
      // Surplus only exists if nothing is short.
      if (p.surplus > 0) expect(p.totalShortfall).toBe(0);
    }
  });

  it("respects the order: reordering changes who gets paid", () => {
    const reordered = moveTier(moveTier(moveTier(tiers, "family", -1), "family", -1), "family", -1);
    expect(reordered.map((t) => t.id)).toEqual(["family", "restock", "salary", "growth"]);
    const plan = allocateWeek({ income: naira(30_000), tiers: reordered });
    expect(plan.allocations[0]).toMatchObject({ tierId: "family", status: "funded" });
    expect(plan.allocations[1]).toMatchObject({ tierId: "restock", allocated: naira(10_000) });
  });

  it("handles zero-target tiers and empty tier lists", () => {
    const plan = allocateWeek({ income: naira(1_000), tiers: [{ id: "a", name: "A", weeklyTarget: 0 }] });
    expect(plan.allocations[0]!.status).toBe("funded");
    expect(plan.surplus).toBe(naira(1_000));
    expect(allocateWeek({ income: 500, tiers: [] }).surplus).toBe(500);
  });

  it("rejects bad input instead of guessing", () => {
    expect(() => allocateWeek({ income: 10.5, tiers })).toThrow(MoneyError);
    expect(() => allocateWeek({ income: -1, tiers })).toThrow(MoneyError);
    expect(() =>
      allocateWeek({ income: 100, tiers: [...tiers, { id: "restock", name: "dup", weeklyTarget: 1 }] }),
    ).toThrow(/duplicate/);
    expect(() => allocateWeek({ income: 100, tiers, carriedShortfalls: { ghost: 100 } })).toThrow(/unknown tier/);
    expect(() =>
      allocateWeek({ income: 100, tiers: [{ id: "a", name: "A", weeklyTarget: 0.5 }] }),
    ).toThrow(MoneyError);
  });
});

describe("moveTier", () => {
  it("is a no-op at the edges and does not mutate", () => {
    const up = moveTier(tiers, "restock", -1);
    expect(up.map((t) => t.id)).toEqual(tiers.map((t) => t.id));
    expect(up).not.toBe(tiers);
    const down = moveTier(tiers, "restock", 1);
    expect(down.map((t) => t.id)).toEqual(["salary", "restock", "family", "growth"]);
    expect(tiers[0]!.id).toBe("restock");
    expect(() => moveTier(tiers, "nope", 1)).toThrow(MoneyError);
  });
});
