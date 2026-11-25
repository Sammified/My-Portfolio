import type React from "react";

export function Interlude() {
  return (
<>
<section className="t-sec" style={{ position: 'relative', overflow: 'hidden', padding: '150px 32px' }}>
<div aria-hidden="true" style={{ animation: 'tRing 8s ease-in-out infinite', position: 'absolute', left: '50%', top: '50%', width: '1100px', height: '520px', transform: 'translate(-50%, -50%)', borderRadius: '50%', border: '1px solid rgba(236,216,168,0.25)', boxShadow: '0 0 120px rgba(46,150,120,0.30), inset 0 0 120px rgba(46,150,120,0.18)' }}></div>
<div className="t-float" aria-hidden="true" style={{ position: 'relative', height: '360px', margin: '-60px auto 24px', perspective: '1300px' }}>
<div style={{ position: 'absolute', left: '50%', bottom: '30px', width: '420px', height: '90px', transform: 'translateX(-50%)', borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(46,150,120,0.45), rgba(5,10,11,0) 70%)' }}></div>
<div style={{ position: 'absolute', left: '50%', top: '62%', width: '0', height: '0', transformStyle: 'preserve-3d', transform: 'rotateX(62deg)' }}>
<div style={{ position: 'absolute', left: '0', top: '0', transformStyle: 'preserve-3d', animation: 'tSpinZ 24s linear infinite' }}>
<div style={{ position: 'absolute', left: '-140px', top: '-140px', width: '280px', height: '280px', borderRadius: '52px', background: '#08211D', transform: 'translateZ(-12px)' }}></div>
<div style={{ position: 'absolute', left: '-140px', top: '-140px', width: '280px', height: '280px', borderRadius: '52px', background: '#0C2E28', transform: 'translateZ(-6px)' }}></div>
<div style={{ position: 'absolute', left: '-140px', top: '-140px', width: '280px', height: '280px', borderRadius: '52px', background: 'linear-gradient(135deg, rgba(88,196,160,0.6), rgba(14,59,52,0.96))', border: '1px solid rgba(130,220,188,0.6)', boxShadow: '0 0 90px rgba(46,150,120,0.55)' }}></div>
<div style={{ position: 'absolute', left: '0', top: '0', transformStyle: 'preserve-3d', '--lz': '80px', animation: 'tLift 6s ease-in-out infinite' } as React.CSSProperties}>
<div style={{ position: 'absolute', left: '-96px', top: '-96px', width: '192px', height: '192px', borderRadius: '38px', background: '#1A4A41', transform: 'translateZ(-12px)' }}></div>
<div style={{ position: 'absolute', left: '-96px', top: '-96px', width: '192px', height: '192px', borderRadius: '38px', background: '#22594E', transform: 'translateZ(-6px)' }}></div>
<div style={{ position: 'absolute', left: '-96px', top: '-96px', width: '192px', height: '192px', borderRadius: '38px', background: 'linear-gradient(135deg, rgba(180,238,214,0.6), rgba(30,110,94,0.95))', border: '1px solid rgba(200,240,225,0.65)', boxShadow: '0 0 60px rgba(88,196,160,0.45)' }}></div>
</div>
<div style={{ position: 'absolute', left: '0', top: '0', transformStyle: 'preserve-3d', '--lz': '160px', animation: 'tLift 6s ease-in-out -3s infinite' } as React.CSSProperties}>
<div style={{ position: 'absolute', left: '-58px', top: '-58px', width: '116px', height: '116px', borderRadius: '26px', background: '#5C4618', transform: 'translateZ(-12px)' }}></div>
<div style={{ position: 'absolute', left: '-58px', top: '-58px', width: '116px', height: '116px', borderRadius: '26px', background: '#8E7034', transform: 'translateZ(-6px)' }}></div>
<div style={{ position: 'absolute', left: '-58px', top: '-58px', width: '116px', height: '116px', borderRadius: '26px', background: 'linear-gradient(135deg, #FFF6DD 0%, #E9D3A0 35%, #C8A45D 70%, #8E7034 100%)', boxShadow: '0 0 80px rgba(232,200,130,0.75)' }}></div>
</div>
</div>
</div>
</div>
<p style={{ position: 'relative', margin: '0 auto', maxWidth: '980px', textAlign: 'center', fontWeight: '500', fontSize: 'clamp(32px, 4.6vw, 64px)', letterSpacing: '-0.05em', lineHeight: '1.08', color: '#F7F5EF' }}>Tiera doesn't tell you to spend less. <span style={{ fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontWeight: '400', letterSpacing: '-0.01em', background: 'linear-gradient(95deg, #8E7034 0%, #E9D3A0 30%, #FFF6DD 48%, #C8A45D 68%, #7A5F2C 100%)', backgroundSize: '220% 100%', animation: 'tShine 6s ease-in-out infinite alternate', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '8px' }}>It tells every naira where to go first.</span></p>
</section>
</>
  );
}
