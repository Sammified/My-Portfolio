import { assertKobo, MoneyError, type Kobo } from "./money";

export type FamilyRequestStatus = "pending" | "approved" | "later" | "declined";

export interface FamilyRequest {
  id: string;
  /** Who asked, e.g. "Mum", "Tunde (school fees)". */
  from: string;
  amount: Kobo;
  note?: string;
  status: FamilyRequestStatus;
}

export interface FamilyPot {
  /** What the Family pot tier actually received this week (from allocateWeek). */
  received: Kobo;
  /** The owner's weekly family limit (the tier's target). Informational. */
  limit: Kobo;
  requests: readonly FamilyRequest[];
}

export interface FamilyPotSummary {
  received: Kobo;
  limit: Kobo;
  approved: Kobo;
  /** received − approved. Never negative. */
  left: Kobo;
  pending: Kobo;
}

function validate(pot: FamilyPot): void {
  assertKobo(pot.received, "family pot received");
  assertKobo(pot.limit, "family limit");
  const ids = new Set<string>();
  for (const r of pot.requests) {
    if (ids.has(r.id)) throw new MoneyError(`duplicate request id "${r.id}"`);
    ids.add(r.id);
    assertKobo(r.amount, `request "${r.id}" amount`);
  }
}

export function summariseFamilyPot(pot: FamilyPot): FamilyPotSummary {
  validate(pot);
  let approved = 0;
  let pending = 0;
  for (const r of pot.requests) {
    if (r.status === "approved") approved += r.amount;
    if (r.status === "pending" || r.status === "later") pending += r.amount;
  }
  if (approved > pot.received) {
    // Only reachable if data was edited outside approveFamilyRequest.
    throw new MoneyError("approved family requests exceed what the pot received");
  }
  return { received: pot.received, limit: pot.limit, approved, left: pot.received - approved, pending };
}

export type ApprovalCheck =
  | { ok: true; leftAfter: Kobo }
  | { ok: false; reason: "too_big"; left: Kobo; shortBy: Kobo }
  | { ok: false; reason: "not_found" | "already_approved" | "declined" };

export function canApproveFamilyRequest(pot: FamilyPot, requestId: string): ApprovalCheck {
  const { left } = summariseFamilyPot(pot);
  const r = pot.requests.find((x) => x.id === requestId);
  if (!r) return { ok: false, reason: "not_found" };
  if (r.status === "approved") return { ok: false, reason: "already_approved" };
  if (r.status === "declined") return { ok: false, reason: "declined" };
  if (r.amount > left) return { ok: false, reason: "too_big", left, shortBy: r.amount - left };
  return { ok: true, leftAfter: left - r.amount };
}

/** Returns a new pot with the request approved, or throws if it cannot be. */
export function approveFamilyRequest(pot: FamilyPot, requestId: string): FamilyPot {
  const check = canApproveFamilyRequest(pot, requestId);
  if (!check.ok) throw new MoneyError(`cannot approve "${requestId}": ${check.reason}`);
  return setStatus(pot, requestId, "approved");
}

/** Mark a request "later" (postponed). Allowed from pending only. */
export function postponeFamilyRequest(pot: FamilyPot, requestId: string): FamilyPot {
  const r = pot.requests.find((x) => x.id === requestId);
  if (!r) throw new MoneyError(`no request "${requestId}"`);
  if (r.status !== "pending") throw new MoneyError(`cannot postpone a request that is ${r.status}`);
  return setStatus(pot, requestId, "later");
}

function setStatus(pot: FamilyPot, id: string, status: FamilyRequestStatus): FamilyPot {
  return { ...pot, requests: pot.requests.map((r) => (r.id === id ? { ...r, status } : r)) };
}
