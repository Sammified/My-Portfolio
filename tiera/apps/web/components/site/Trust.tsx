import type React from "react";
import { site } from "@/lib/site";

export function Trust() {
  return (
<>
<section id="trust" className="t-sec" style={{ position: 'relative', overflow: 'hidden', padding: '128px 0' }}>
<div aria-hidden="true" className="t-glow" style={{ position: 'absolute', left: '-15%', top: '20%', width: '60%', height: '70%', background: 'radial-gradient(ellipse at center, rgba(30,110,94,0.25), rgba(5,10,11,0) 70%)' }}></div>
<div className="t-wrap" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '860px' }}>
<p style={{ margin: '0', alignSelf: 'flex-start', padding: '8px 16px', borderRadius: '999px', border: '1px solid rgba(236,216,168,0.3)', background: 'rgba(14,22,23,0.7)', fontSize: '12px', fontWeight: '500', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E9D3A0' }}>Trust</p>
<h2 style={{ margin: '0', fontWeight: '500', fontSize: 'clamp(38px, 5.2vw, 72px)', letterSpacing: '-0.05em', lineHeight: '1.02', color: '#F7F5EF' }}>Built for the money <span style={{ fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontWeight: '400', letterSpacing: '-0.01em', background: 'linear-gradient(95deg, #8E7034 0%, #E9D3A0 30%, #FFF6DD 48%, #C8A45D 68%, #7A5F2C 100%)', backgroundSize: '220% 100%', animation: 'tShine 6s ease-in-out infinite alternate', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '8px' }}>that matters most.</span></h2>
</div>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', borderRadius: '30px', overflow: 'hidden', background: '#1F2D2F', border: '1px solid #1F2D2F' }}>
<div className="t-card" style={{ padding: '34px', background: '#0A1112', display: 'flex', flexDirection: 'column', gap: '14px' }}>
<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10l9-6 9 6"></path><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"></path></svg>
<h3 style={{ margin: '0', fontSize: '19px', fontWeight: '600', letterSpacing: '-0.02em' }}>Your money never leaves your bank</h3>
<p style={{ margin: '0', fontSize: '15px', lineHeight: '1.65', color: '#A9B7B3' }}>Tiera plans and guides. Your bank holds the money. Tiera is not a bank.</p>
</div>
<div className="t-card" style={{ padding: '34px', background: '#0A1112', display: 'flex', flexDirection: 'column', gap: '14px' }}>
<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M8 12.5l3 3 5-6"></path></svg>
<h3 style={{ margin: '0', fontSize: '19px', fontWeight: '600', letterSpacing: '-0.02em' }}>Nothing moves without you</h3>
<p style={{ margin: '0', fontSize: '15px', lineHeight: '1.65', color: '#A9B7B3' }}>Every weekly plan waits for your approval. In the pilot, you make every transfer yourself.</p>
</div>
<div className="t-card" style={{ padding: '34px', background: '#0A1112', display: 'flex', flexDirection: 'column', gap: '14px' }}>
<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"></path></svg>
<h3 style={{ margin: '0', fontSize: '19px', fontWeight: '600', letterSpacing: '-0.02em' }}>Licensed partners only</h3>
<p style={{ margin: '0', fontSize: '15px', lineHeight: '1.65', color: '#A9B7B3' }}>Automatic transfers, saving and investing will only launch through licensed partners{site.partners.length ? <>: {site.partners.join(", ")}</> : null}. None are part of the pilot.</p>
</div>
<div className="t-card" style={{ padding: '34px', background: '#0A1112', display: 'flex', flexDirection: 'column', gap: '14px' }}>
<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg>
<h3 style={{ margin: '0', fontSize: '19px', fontWeight: '600', letterSpacing: '-0.02em' }}>Your data, protected</h3>
<p style={{ margin: '0', fontSize: '15px', lineHeight: '1.65', color: '#A9B7B3' }}>We collect the minimum, follow the Nigeria Data Protection Act 2023, and delete your data when you ask.</p>
</div>
</div>
<div role="note" className="t-card" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', padding: '24px 28px', borderRadius: '24px', background: 'rgba(185,119,42,0.10)', border: '1px solid rgba(224,166,92,0.45)' }}>
<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E0A65C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M12 3l9 16H3z"></path><path d="M12 10v4M12 17h.01"></path></svg>
<p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#F4F2EC' }}><strong>Tiera will never ask for your BVN, bank PIN, OTP or password.</strong> <span style={{ color: '#A9B7B3' }}>Not by phone, SMS or WhatsApp. If anyone asks, it is not us. {site.whatsappUrl ? <>Report it to us <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">on WhatsApp</a>.</> : <>Report it to us.</>}</span></p>
</div>
{site.testimonials.length > 0 && (
<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
{site.testimonials.map((t) => (
<figure key={t.name} className="t-card t-reveal t-tilt" style={{ flex: '1 1 340px', minWidth: '0', margin: '0', padding: '36px', borderRadius: '30px', background: 'radial-gradient(ellipse 80% 100% at 0% 0%, rgba(46,150,120,0.22), rgba(5,10,11,0) 70%), linear-gradient(180deg, rgba(20,32,33,0.95), rgba(10,17,18,0.95))', border: '1px solid #1F2D2F', display: 'flex', flexDirection: 'column', gap: '20px' }}>
<span aria-hidden="true" style={{ fontFamily: '\'Instrument Serif\', serif', fontSize: '64px', lineHeight: '0.6', color: '#C8A45D' }}>&ldquo;</span>
<blockquote style={{ margin: '0', fontFamily: '\'Instrument Serif\', serif', fontSize: '28px', lineHeight: '1.3' }}>{t.quote}</blockquote>
<figcaption style={{ fontSize: '14px', color: '#8FA29D' }}>{t.name}, {t.business}, {t.area}</figcaption>
</figure>
))}
</div>
)}
</div>
</section>
</>
  );
}
