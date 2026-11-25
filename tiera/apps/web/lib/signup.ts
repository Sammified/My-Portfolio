/** Pilot sign-up: validation and storage. Pure functions here; I/O in lib/store.ts. */

export const businessTypes = [
  "Retail or wholesale trade",
  "Food or hospitality",
  "Fashion or beauty",
  "Pharmacy",
  "Services",
  "Something else",
] as const;

export type BusinessType = (typeof businessTypes)[number];

export interface Signup {
  name: string;
  /** E.164, e.g. +2348031234567 */
  whatsapp: string;
  businessType: BusinessType;
}

export type SignupErrors = Partial<Record<"name" | "whatsapp" | "businessType" | "consent" | "form", string>>;

/**
 * Normalise a Nigerian mobile number to E.164 (+234XXXXXXXXXX).
 * Accepts 0803 123 4567, 803-123-4567, +234 803 123 4567, 2348031234567.
 * Nigerian mobile numbers are 10 digits after the country code and start with 7, 8 or 9.
 */
export function normaliseNigerianMobile(raw: string): string | null {
  let d = raw.replace(/[\s\-().]/g, "");
  if (d.startsWith("+")) d = d.slice(1);
  if (!/^\d+$/.test(d)) return null;
  if (d.startsWith("234")) d = d.slice(3);
  else if (d.startsWith("0")) d = d.slice(1);
  if (!/^[789][01]\d{8}$/.test(d)) return null;
  return "+234" + d;
}

export function maskPhone(e164: string): string {
  return e164.slice(0, 7) + "****" + e164.slice(-3);
}

export function validateSignup(input: {
  name?: unknown;
  whatsapp?: unknown;
  businessType?: unknown;
  consent?: unknown;
}): { ok: true; value: Signup } | { ok: false; errors: SignupErrors } {
  const errors: SignupErrors = {};
  const name = typeof input.name === "string" ? input.name.trim().replace(/\s+/g, " ") : "";
  if (name.length < 2) errors.name = "Please tell us your name.";
  else if (name.length > 80) errors.name = "That name is a bit long. 80 characters max.";

  const phone = typeof input.whatsapp === "string" ? normaliseNigerianMobile(input.whatsapp) : null;
  if (!phone) errors.whatsapp = "Enter a Nigerian WhatsApp number, like 0803 123 4567.";

  const bt = input.businessType;
  if (typeof bt !== "string" || !(businessTypes as readonly string[]).includes(bt)) {
    errors.businessType = "Pick the closest business type.";
  }

  if (input.consent !== "on" && input.consent !== true) {
    errors.consent = "We need your OK to contact you on WhatsApp.";
  }

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, value: { name, whatsapp: phone!, businessType: bt as BusinessType } };
}
