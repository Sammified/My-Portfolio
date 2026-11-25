import type { ReactNode } from "react";

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted">{children}</p>;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`font-display text-4xl leading-[1.05] text-linen md:text-6xl ${className}`}>{children}</h2>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-linen text-ink hover:bg-white"
      : "border border-linen/20 text-linen hover:border-linen/40 hover:bg-linen/5";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

export function LockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 ${className}`} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="9" width="12" height="8" rx="2" />
      <path d="M7 9V6.5a3 3 0 0 1 6 0V9" />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 shrink-0 ${className}`} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 10.5 3.2 3L15 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Decorative glow. Hidden on small screens to keep mobile light. */
export function Glow({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute hidden rounded-full blur-3xl md:block ${className}`} />;
}
