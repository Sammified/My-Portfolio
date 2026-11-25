"use client";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  ["#how", "How it works"],
  ["#why", "Why Tiera"],
  ["#trust", "Trust"],
  ["#pricing", "Pricing"],
  ["#faq", "FAQ"],
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-linen/[0.06] bg-ink/80 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" aria-label="Tiera home" className="flex min-h-11 items-center">
          <Logo />
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="inline-flex min-h-11 items-center rounded-full px-4 text-sm text-muted hover:text-linen">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#join"
            className="hidden min-h-11 items-center rounded-full bg-linen px-5 text-sm font-semibold text-ink hover:bg-white md:inline-flex"
          >
            Join the pilot
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-linen/15 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              {open ? <path d="M5 5l10 10M15 5 5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-linen/[0.06] px-5 pb-4 md:hidden">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-linen/[0.06] text-linen">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
