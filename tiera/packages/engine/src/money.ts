/**
 * Money is always an integer number of kobo (1 naira = 100 kobo).
 * No floating-point arithmetic is ever applied to money values.
 */
export type Kobo = number;

export class MoneyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MoneyError";
  }
}

/** Throws unless `value` is a non-negative safe integer number of kobo. */
export function assertKobo(value: unknown, label = "amount"): asserts value is Kobo {
  if (typeof value !== "number" || !Number.isSafeInteger(value)) {
    throw new MoneyError(`${label} must be an integer number of kobo, got ${String(value)}`);
  }
  if (value < 0) {
    throw new MoneyError(`${label} must not be negative, got ${value}`);
  }
}

/** Whole naira to kobo. Accepts integers only. */
export function naira(whole: number): Kobo {
  if (!Number.isSafeInteger(whole)) throw new MoneyError(`naira() takes whole naira, got ${whole}`);
  const k = whole * 100;
  if (!Number.isSafeInteger(k)) throw new MoneyError(`amount too large: ${whole}`);
  return k;
}

/**
 * Parse a user-typed naira string into kobo without using floats.
 * Accepts "45000", "45,000", "₦45,000.50", "N 1,200.5". Rejects more than 2 decimals.
 */
export function parseNaira(input: string): Kobo {
  const cleaned = input.trim().replace(/^(₦|NGN|N)\s*/i, "").replace(/[,\s]/g, "");
  const m = /^(\d+)(?:\.(\d{1,2}))?$/.exec(cleaned);
  if (!m) throw new MoneyError(`not a naira amount: "${input}"`);
  const whole = m[1]!;
  const frac = (m[2] ?? "").padEnd(2, "0");
  const k = Number(whole + frac);
  if (!Number.isSafeInteger(k)) throw new MoneyError(`amount too large: "${input}"`);
  return k;
}

function groupThousands(digits: string): string {
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Format kobo as naira for display, e.g. 4500050 -> "₦45,000.50".
 * Kobo are shown only when non-zero unless `showKobo` is "always".
 */
export function formatNaira(k: Kobo, opts: { showKobo?: "auto" | "always" | "never"; sign?: boolean } = {}): string {
  if (!Number.isSafeInteger(k)) throw new MoneyError(`formatNaira needs integer kobo, got ${k}`);
  const neg = k < 0;
  const abs = Math.abs(k);
  const rem = abs % 100;
  const whole = (abs - rem) / 100; // exact: abs - rem is a multiple of 100
  const showKobo = opts.showKobo ?? "auto";
  let out = "₦" + groupThousands(String(whole));
  if (showKobo === "always" || (showKobo === "auto" && rem !== 0)) {
    out += "." + String(rem).padStart(2, "0");
  }
  if (neg) return "−" + out;
  if (opts.sign && k > 0) return "+" + out;
  return out;
}

export function sum(values: readonly Kobo[]): Kobo {
  let total = 0;
  for (const v of values) {
    total += v;
    if (!Number.isSafeInteger(total)) throw new MoneyError("sum overflowed safe integer range");
  }
  return total;
}
