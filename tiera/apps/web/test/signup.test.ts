import { describe, expect, it } from "vitest";
import { maskPhone, normaliseNigerianMobile, validateSignup } from "../lib/signup";

describe("normaliseNigerianMobile", () => {
  it.each([
    ["0803 123 4567", "+2348031234567"],
    ["08031234567", "+2348031234567"],
    ["+234 803 123 4567", "+2348031234567"],
    ["2348031234567", "+2348031234567"],
    ["803-123-4567", "+2348031234567"],
    ["0905 555 0101", "+2349055550101"],
    ["07012345678", "+2347012345678"],
  ])("%s → %s", (input, out) => expect(normaliseNigerianMobile(input)).toBe(out));

  it.each(["", "12345", "0603 123 4567", "+44 7700 900123", "0803123456", "080312345678", "0803abc4567"])(
    "rejects %s",
    (input) => expect(normaliseNigerianMobile(input)).toBeNull(),
  );
});

describe("validateSignup", () => {
  const good = { name: "  Ada   Obi ", whatsapp: "0803 123 4567", businessType: "Fashion / tailoring", consent: "on" };
  it("accepts and cleans a good sign-up", () => {
    expect(validateSignup(good)).toEqual({
      ok: true,
      value: { name: "Ada Obi", whatsapp: "+2348031234567", businessType: "Fashion / tailoring" },
    });
  });
  it("reports every bad field", () => {
    const r = validateSignup({ name: "A", whatsapp: "123", businessType: "Crypto", consent: undefined });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(Object.keys(r.errors).sort()).toEqual(["businessType", "consent", "name", "whatsapp"]);
  });
  it("masks phones for logs", () => expect(maskPhone("+2348031234567")).toBe("+234803****567"));
});
