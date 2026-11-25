"use client";
import { languages, voiceExamples, type LanguageCode } from "@tiera/i18n";
import { useState } from "react";

export function VoiceChips() {
  const [lang, setLang] = useState<LanguageCode>("pcm");
  const ex = voiceExamples[lang];
  return (
    <div>
      <div role="radiogroup" aria-label="Example language" className="flex flex-wrap gap-2">
        {languages.map((l) => {
          const active = l.code === lang;
          return (
            <button
              key={l.code}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setLang(l.code)}
              className={`min-h-11 rounded-full border px-4 text-sm transition-colors ${
                active ? "border-linen bg-linen text-ink" : "border-linen/15 text-linen hover:border-linen/40"
              }`}
            >
              {l.label}
            </button>
          );
        })}
      </div>
      <div className="mt-5 space-y-3" aria-live="polite">
        <div className="max-w-md rounded-2xl rounded-bl-sm border border-linen/10 bg-raised p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted">You say</p>
          <p className="mt-1 text-linen" lang={lang === "pcm" ? "pcm" : lang}>
            “{ex.said}”
          </p>
        </div>
        <div className="ml-auto max-w-md rounded-2xl rounded-br-sm border border-evergreen bg-evergreen/40 p-4">
          <p className="text-[11px] uppercase tracking-wider text-muted">Tiera replies</p>
          <p className="mt-1 text-linen" lang={lang}>
            {ex.reply}
          </p>
        </div>
      </div>
    </div>
  );
}
