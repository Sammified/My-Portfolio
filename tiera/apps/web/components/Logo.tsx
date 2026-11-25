export function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  // A "T" of three stacked bars: widest on top in gold, two smaller below in linen.
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <rect x="2" y="4" width="28" height="7" rx="2" fill="#C8A45D" />
      <rect x="9" y="13.5" width="14" height="6" rx="2" fill="#F4F2EC" />
      <rect x="12" y="22" width="8" height="6" rx="2" fill="#F4F2EC" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="text-sm font-semibold tracking-[0.32em] text-linen">TIERA</span>
    </span>
  );
}
