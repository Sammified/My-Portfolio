"use client";
import { useEffect, useState } from "react";

/** Mobile sticky join bar. Hides while the sign-up form is on screen so it never covers the real button. */
export function StickyJoin() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const el = document.getElementById("join");
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setHidden(!!e?.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
<div data-sticky className="t-sticky" aria-hidden={hidden} style={{ transition: 'transform .3s, opacity .3s', transform: hidden ? 'translateY(110%)' : 'none', opacity: hidden ? 0 : 1, pointerEvents: hidden ? 'none' : 'auto', position: 'fixed', left: '0', right: '0', zIndex: '40', bottom: '0', padding: '12px 16px 18px', background: 'linear-gradient(180deg, rgba(5,10,11,0) 0%, rgba(5,10,11,0.95) 35%)', display: 'flex' }}>
<a href="#join" tabIndex={hidden ? -1 : 0} style={{ flex: '1', textAlign: 'center', padding: '15px', borderRadius: '999px', background: 'linear-gradient(140deg, #F3E3B8 0%, #C8A45D 60%, #A8853F 100%)', boxShadow: '0 0 30px rgba(232,200,130,0.30)', color: '#0B1416', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}>Join the Lagos pilot</a>
</div>
  );
}
