import type React from "react";
import { Stories } from "./Stories";

export function Pain() {
  return (
<>
<section className="t-sec" style={{ position: 'relative', overflow: 'hidden', padding: '128px 0 120px' }}>
<div aria-hidden="true" className="t-glow" style={{ position: 'absolute', left: '-10%', top: '10%', width: '60%', height: '70%', background: 'radial-gradient(ellipse at center, rgba(30,110,94,0.28), rgba(5,10,11,0) 70%)' }}></div>
<div className="t-wrap" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '860px' }}>
<p style={{ margin: '0', alignSelf: 'flex-start', padding: '8px 16px', borderRadius: '999px', border: '1px solid rgba(236,216,168,0.3)', background: 'rgba(14,22,23,0.7)', fontSize: '12px', fontWeight: '500', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E9D3A0' }}>Sound familiar?</p>
<h2 style={{ margin: '0', fontWeight: '500', fontSize: 'clamp(38px, 5.2vw, 72px)', letterSpacing: '-0.05em', lineHeight: '1.02', color: '#F7F5EF' }}>Sales were good this month. <span style={{ fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontWeight: '400', letterSpacing: '-0.01em', background: 'linear-gradient(95deg, #8E7034 0%, #E9D3A0 30%, #FFF6DD 48%, #C8A45D 68%, #7A5F2C 100%)', backgroundSize: '220% 100%', animation: 'tShine 6s ease-in-out infinite alternate', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '8px' }}>So where did the money go?</span></h2>
</div>
<Stories />
<div className="t-card" style={{ padding: '40px', borderRadius: '32px', background: 'radial-gradient(ellipse 60% 120% at 0% 50%, rgba(30,110,94,0.35), rgba(5,10,11,0) 70%), linear-gradient(180deg, rgba(20,32,33,0.92) 0%, rgba(10,17,18,0.92) 100%)', border: '1px solid #2B3C3E', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
<div style={{ flex: '1 1 340px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '18px' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#A9B7B3' }}><span>Grew revenue</span><span style={{ color: '#F7F5EF', fontWeight: '600' }}>65%</span></div>
<div style={{ height: '10px', borderRadius: '5px', background: '#142123' }}><div style={{ width: '65%', height: '100%', borderRadius: '5px', background: 'linear-gradient(90deg, #2C8A74, #7CCDB2)' }}></div></div>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#A9B7B3' }}><span>Grew profit</span><span style={{ color: '#F7F5EF', fontWeight: '600' }}>47%</span></div>
<div style={{ height: '10px', borderRadius: '5px', background: '#142123' }}><div style={{ width: '47%', height: '100%', borderRadius: '5px', background: 'linear-gradient(90deg, #8E7034, #E9D3A0)' }}></div></div>
</div>
</div>
<div style={{ flex: '999 1 420px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
<p style={{ margin: '0', fontSize: '22px', lineHeight: '1.45', letterSpacing: '-0.01em' }}>You're not alone. In 2025, 65% of Nigerian informal businesses saw their revenue rise. <span style={{ color: '#E9D3A0' }}>Only 47% saw their profit rise.</span></p>
<p style={{ margin: '0', fontSize: '13px', color: '#8FA29D' }}>Source: Informal Economy Report 2025.</p>
</div>
</div>
</div>
</section>
</>
  );
}
