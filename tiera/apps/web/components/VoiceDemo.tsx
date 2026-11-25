"use client";
import { useEffect, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}

/** A Pidgin voice note types out, then becomes a logged amount. Scripted demo, not real speech-to-text. */
export function VoiceDemo({ note, amount }: { note: string; amount: string }) {
  const reduced = usePrefersReducedMotion();
  const [chars, setChars] = useState(0);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (reduced) {
      setChars(note.length);
      setLogged(true);
      return;
    }
    let cancelled = false;
    let t: ReturnType<typeof setTimeout>;
    const run = (i: number) => {
      if (cancelled) return;
      if (i <= note.length) {
        setChars(i);
        t = setTimeout(() => run(i + 1), 38);
      } else {
        t = setTimeout(() => {
          setLogged(true);
          t = setTimeout(() => {
            setLogged(false);
            setChars(0);
            t = setTimeout(() => run(0), 700);
          }, 3200);
        }, 500);
      }
    };
    t = setTimeout(() => run(0), 900);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [note, reduced]);

  return (
    <div className="card-solid w-64 p-4 shadow-2xl shadow-black/50" role="img" aria-label={`Voice note: "${note}" logged as ${amount}`}>
      <div className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted">
        <span className="relative flex h-2.5 w-2.5">
          {!logged && <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-gold" />}
          <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${logged ? "bg-funded" : "bg-gold"}`} />
        </span>
        {logged ? "Logged" : "Voice note · Pidgin"}
      </div>
      {logged ? (
        <p className="animate-rise money text-2xl font-semibold text-funded-text" aria-hidden="true">
          {amount} <span className="text-base font-normal text-linen">logged</span>
        </p>
      ) : (
        <p className="min-h-[3.75rem] text-sm leading-relaxed text-linen" aria-hidden="true">
          “{note.slice(0, chars)}
          <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-gold-light motion-safe:animate-pulse" />”
        </p>
      )}
    </div>
  );
}
