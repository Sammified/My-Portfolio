/**
 * Language strings shared by web and mobile.
 *
 * ⚠️ NEEDS NATIVE REVIEW: every Yorùbá, Igbo and Hausa string in this file (and the Pidgin ones)
 * is a draft. A native speaker must review them before any pilot user sees them.
 * Strings with `review: "needed"` are not production-ready.
 */

export type LanguageCode = "en" | "pcm" | "yo" | "ig" | "ha";

export interface Language {
  code: LanguageCode;
  /** Name in the language itself. */
  label: string;
  review: "ok" | "needed";
}

export const languages: readonly Language[] = [
  { code: "en", label: "English", review: "ok" },
  { code: "pcm", label: "Pidgin", review: "needed" },
  { code: "yo", label: "Yorùbá", review: "needed" },
  { code: "ig", label: "Igbo", review: "needed" },
  { code: "ha", label: "Hausa", review: "needed" },
];

export interface VoiceExample {
  /** What the owner says. */
  said: string;
  /** What Tiera replies. Amounts in replies are filled in by code, never written by AI. */
  reply: string;
}

/**
 * Example voice notes for the website's language chips.
 * The amount ₦45,000 here is a fixed demo value. In the app, amounts always come from the engine.
 */
export const voiceExamples: Record<LanguageCode, VoiceExample> = {
  en: { said: "Sold ten bags of rice, 45k.", reply: "Logged ₦45,000 to sales. Restock is now 80% funded." },
  // NEEDS NATIVE REVIEW
  pcm: { said: "I don sell ten bag of rice, 45k.", reply: "I don log ₦45,000 for your sales. Restock don reach 80%." },
  // NEEDS NATIVE REVIEW
  yo: { said: "Mo ta àpò ìrẹsì mẹ́wàá, 45k.", reply: "Mo ti kọ ₦45,000 sílẹ̀ fún owó títà. Restock ti dé 80%." },
  // NEEDS NATIVE REVIEW
  ig: { said: "Erela m akpa osikapa iri, 45k.", reply: "Edebela m ₦45,000 n'ego ahịa gị. Restock eruola 80%." },
  // NEEDS NATIVE REVIEW
  ha: { said: "Na sayar da buhun shinkafa goma, 45k.", reply: "Na rubuta ₦45,000 a cikin kuɗin cinikinka. Restock ya kai 80%." },
};

/** The Pidgin note used in the hero animation. NEEDS NATIVE REVIEW. */
export const heroVoiceNote = "I don sell 10 bags of rice, 45k.";
