import { describe, expect, it } from "vitest";
import {
  approveFamilyRequest,
  canApproveFamilyRequest,
  MoneyError,
  naira,
  postponeFamilyRequest,
  summariseFamilyPot,
  type FamilyPot,
} from "../src";

const pot: FamilyPot = {
  received: naira(20_000),
  limit: naira(20_000),
  requests: [
    { id: "r1", from: "Mum", amount: naira(8_000), status: "pending" },
    { id: "r2", from: "Tunde", amount: naira(15_000), note: "school fees", status: "pending" },
    { id: "r3", from: "Aunty Bisi", amount: naira(5_000), status: "pending" },
  ],
};

describe("family pot", () => {
  it("summarises received, approved and left", () => {
    expect(summariseFamilyPot(pot)).toEqual({
      received: naira(20_000),
      limit: naira(20_000),
      approved: 0,
      left: naira(20_000),
      pending: naira(28_000),
    });
  });

  it("approves requests that fit and reduces what is left", () => {
    const after = approveFamilyRequest(pot, "r1");
    expect(summariseFamilyPot(after).left).toBe(naira(12_000));
    expect(pot.requests[0]!.status).toBe("pending"); // immutable
  });

  it("refuses a request bigger than what is left and says by how much", () => {
    const after = approveFamilyRequest(pot, "r1");
    expect(canApproveFamilyRequest(after, "r2")).toEqual({
      ok: false,
      reason: "too_big",
      left: naira(12_000),
      shortBy: naira(3_000),
    });
    expect(() => approveFamilyRequest(after, "r2")).toThrow(MoneyError);
  });

  it("allows an exact fit", () => {
    const p: FamilyPot = { ...pot, received: naira(8_000) };
    expect(canApproveFamilyRequest(p, "r1")).toEqual({ ok: true, leftAfter: 0 });
  });

  it("uses what the pot received, not the limit, when the week was short", () => {
    const shortWeek: FamilyPot = { ...pot, received: naira(5_000) };
    expect(canApproveFamilyRequest(shortWeek, "r1").ok).toBe(false);
    expect(canApproveFamilyRequest(shortWeek, "r3").ok).toBe(true);
  });

  it("will not double-approve, and handles unknown ids", () => {
    const after = approveFamilyRequest(pot, "r3");
    expect(canApproveFamilyRequest(after, "r3")).toEqual({ ok: false, reason: "already_approved" });
    expect(canApproveFamilyRequest(pot, "zzz")).toEqual({ ok: false, reason: "not_found" });
  });

  it("postpones with Later, and a later request can still be approved", () => {
    const later = postponeFamilyRequest(pot, "r2");
    expect(later.requests[1]!.status).toBe("later");
    expect(() => postponeFamilyRequest(later, "r2")).toThrow(MoneyError);
    expect(approveFamilyRequest(later, "r2").requests[1]!.status).toBe("approved");
  });

  it("detects tampered data where approvals exceed the pot", () => {
    const bad: FamilyPot = {
      ...pot,
      received: naira(1_000),
      requests: [{ id: "x", from: "X", amount: naira(2_000), status: "approved" }],
    };
    expect(() => summariseFamilyPot(bad)).toThrow(/exceed/);
  });
});
