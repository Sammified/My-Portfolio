/** Mobile-only sticky join button. */
export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-linen/[0.08] bg-ink/90 p-3 backdrop-blur-md md:hidden">
      <a href="#join" className="flex min-h-12 items-center justify-center rounded-full bg-gold text-base font-semibold text-ink">
        Join the Lagos pilot
      </a>
    </div>
  );
}
