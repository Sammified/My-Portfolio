import type React from "react";

export function Footer() {
  return (
<>
<footer style={{ position: 'relative', overflow: 'hidden', background: '#050A0B', color: '#A9B7B3', borderTop: '1px solid #142123' }}>
<p aria-hidden="true" style={{ margin: '0', paddingTop: '40px', textAlign: 'center', fontSize: 'clamp(90px, 20vw, 300px)', fontWeight: '500', letterSpacing: '0.12em', lineHeight: '0.9', background: 'linear-gradient(180deg, rgba(200,164,93,0.30) 0%, rgba(200,164,93,0) 85%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>TIERA</p>
<div className="t-wrap" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '40px 32px 48px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'center' }}>
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
<svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="9" width="40" height="7" rx="1" fill="#C8A45D"></rect><rect x="15" y="20.5" width="18" height="7" rx="1" fill="#F4F2EC"></rect><rect x="20" y="32" width="8" height="7" rx="1" fill="#F4F2EC"></rect></svg>
<span style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '0.3em', color: '#F4F2EC' }}>TIERA</span>
<span style={{ fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontSize: '18px', marginLeft: '8px' }}>Money, in the right order.</span>
</div>
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', fontSize: '14px' }}>
<a href="#how" style={{ color: '#A9B7B3' }}>How it works</a>
<a href="#trust" style={{ color: '#A9B7B3' }}>Trust</a>
<a href="#join" style={{ color: '#A9B7B3' }}>Join the pilot</a>
<a href="#" style={{ color: '#A9B7B3' }}>[Terms]</a>
<a href="#" style={{ color: '#A9B7B3' }}>[Privacy Policy]</a>
<span>© 2026 Tiera</span>
</div>
</div>
<p className="t-wrap" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 32px 120px', boxSizing: 'border-box', fontSize: '13px', lineHeight: '1.6', color: '#8FA29D' }}>Tiera is not a bank and does not hold or move money during the pilot. Automatic transfers will be provided by [LICENSED BANK PARTNER]. Savings and investing will be provided by [LICENSED PARTNER].</p>
</footer>
</>
  );
}
