/**
 * Everything the business still has to fill in, in one place.
 * Empty values are hidden on the site, never shown as [BRACKETS].
 */
export const site = {
  /** wa.me link with the pilot WhatsApp number, e.g. "https://wa.me/2348031234567". Empty hides WhatsApp buttons. */
  whatsappUrl: "https://wa.me/2340000000000", // TODO: replace with the real pilot number before sharing
  company: {
    name: "", // e.g. "Tiera Technologies Ltd"
    rc: "", // CAC registration number
    address: "", // registered address
    email: "", // support email
  },
  /** Who stores sign-ups. "Netlify" for the static preview, "Supabase" for the Next.js app. */
  hostingProvider: "Netlify",
  /** Privacy notice policy choices (confirm with your lawyer). */
  privacy: { updated: "25 November 2026", retentionMonths: 12, replyDays: 30 },
  /** Whether listed prices include 7.5% VAT. null = not decided yet (sentence hidden). */
  vat: null as null | "included" | "excluded",
  /** Real pilot quotes only, with written permission. Empty hides the quotes. */
  testimonials: [] as { quote: string; name: string; business: string; area: string }[],
  /** Licensed partners once signed. Empty = the site says none are live in the pilot. */
  partners: [] as string[],
} as const;

export const companyLine = (() => {
  const c = site.company;
  if (!c.name) return "";
  return [c.name, c.rc && `RC ${c.rc}`, c.address].filter(Boolean).join(", ") + ".";
})();
