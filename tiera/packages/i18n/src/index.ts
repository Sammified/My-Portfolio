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
  en: {
    said: "Sold two bags of rice, forty-five thousand, customer paid by transfer.",
    reply: "Logged ₦45,000 transfer for rice. Restock is now fully funded.",
  },
  // NEEDS NATIVE REVIEW
  pcm: {
    said: "I don sell two bag of rice, forty-five thousand, customer pay transfer.",
    reply: "I don log ₦45,000 transfer for rice. Restock don full.",
  },
  // NEEDS NATIVE REVIEW
  yo: {
    said: "Mo ta àpò ìrẹsì méjì, ẹgbẹ̀rún márùnlélógójì, oníbàárà san nípasẹ̀ transfer.",
    reply: "Mo ti kọ ₦45,000 transfer fún ìrẹsì sílẹ̀. Owó ọjà ti pé.",
  },
  // NEEDS NATIVE REVIEW
  ig: {
    said: "Erela m akpa osikapa abụọ, puku iri anọ na ise, onye zụrụ kwụrụ site na transfer.",
    reply: "Edebela m ₦45,000 transfer maka osikapa. Ego ngwa ahịa ezuola.",
  },
  // NEEDS NATIVE REVIEW
  ha: {
    said: "Na sayar da buhun shinkafa biyu, dubu arba'in da biyar, abokin ciniki ya biya ta transfer.",
    reply: "Na rubuta ₦45,000 transfer na shinkafa. Kuɗin kaya ya cika.",
  },
};

/** The Pidgin note used in the hero animation. NEEDS NATIVE REVIEW. */
export const heroVoiceNote = "Customer don pay me forty-five thousand for provisions, cash.";
