import { describe, expect, it } from "vitest";
import { assertKobo, formatNaira, MoneyError, naira, parseNaira, sum } from "../src";

describe("money", () => {
  it("parses naira strings into integer kobo without floats", () => {
    expect(parseNaira("45000")).toBe(4_500_000);
    expect(parseNaira("45,000")).toBe(4_500_000);
    expect(parseNaira("₦45,000.50")).toBe(4_500_050);
    expect(parseNaira("N 1,200.5")).toBe(120_050);
    expect(parseNaira("0.1")).toBe(10);
    expect(parseNaira("0.29")).toBe(29); // 0.29 * 100 = 28.999999999999996 in floats
  });

  it("rejects junk and over-precise amounts", () => {
    expect(() => parseNaira("abc")).toThrow(MoneyError);
    expect(() => parseNaira("1.234")).toThrow(MoneyError);
    expect(() => parseNaira("-500")).toThrow(MoneyError);
    expect(() => parseNaira("")).toThrow(MoneyError);
  });

  it("formats kobo for display", () => {
    expect(formatNaira(4_500_000)).toBe("₦45,000");
    expect(formatNaira(4_500_050)).toBe("₦45,000.50");
    expect(formatNaira(4_500_000, { showKobo: "always" })).toBe("₦45,000.00");
    expect(formatNaira(4_500_000, { sign: true })).toBe("+₦45,000");
    expect(formatNaira(5)).toBe("₦0.05");
    expect(formatNaira(123_456_789_00)).toBe("₦123,456,789");
  });

  it("guards kobo values", () => {
    expect(() => assertKobo(1.5)).toThrow(MoneyError);
    expect(() => assertKobo(-1)).toThrow(MoneyError);
    expect(() => assertKobo(Number.MAX_SAFE_INTEGER + 1)).toThrow(MoneyError);
    expect(() => assertKobo("100")).toThrow(MoneyError);
    expect(() => naira(1.5)).toThrow(MoneyError);
    expect(naira(250)).toBe(25_000);
  });

  it("sums and detects overflow", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(() => sum([Number.MAX_SAFE_INTEGER, 1])).toThrow(MoneyError);
  });
});
