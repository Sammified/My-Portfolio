"use client";
import type React from "react";
import { useState } from "react";
import { formatNaira, naira } from "@tiera/engine";

const MONTHLY = { starter: naira(3_500), growth: naira(9_500), pro: naira(24_000) };

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  // Yearly = 10 months' price. Integer kobo, formatted by the engine.
  const price = (k: number) => formatNaira(annual ? k * 10 : k);
  const starter = price(MONTHLY.starter);
  const growth = price(MONTHLY.growth);
  const pro = price(MONTHLY.pro);
  const per = annual ? "/year" : "/month";
  const mBg = annual ? "transparent" : "#C8A45D";
  const mFg = annual ? "#A9B7B3" : "#0B1416";
  const aBg = annual ? "#C8A45D" : "transparent";
  const aFg = annual ? "#0B1416" : "#A9B7B3";
  return (
<>
<section id="pricing" className="t-sec" style={{ position: 'relative', overflow: 'hidden', padding: '128px 0' }}>
<div aria-hidden="true" className="t-glow" style={{ position: 'absolute', left: '50%', top: '50%', width: '900px', height: '700px', transform: 'translate(-50%, -40%)', background: 'radial-gradient(ellipse at center, rgba(200,164,93,0.18), rgba(5,10,11,0) 65%)' }}></div>
<div className="t-wrap" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px' }}>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '22px' }}>
<p style={{ margin: '0', padding: '8px 16px', borderRadius: '999px', border: '1px solid rgba(236,216,168,0.3)', background: 'rgba(14,22,23,0.7)', fontSize: '12px', fontWeight: '500', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E9D3A0' }}>Pricing</p>
<h2 style={{ margin: '0', fontWeight: '500', fontSize: 'clamp(38px, 5.2vw, 72px)', letterSpacing: '-0.05em', lineHeight: '1.02', color: '#F7F5EF' }}>Simple, and <span style={{ fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontWeight: '400', letterSpacing: '-0.01em', background: 'linear-gradient(95deg, #8E7034 0%, #E9D3A0 30%, #FFF6DD 48%, #C8A45D 68%, #7A5F2C 100%)', backgroundSize: '220% 100%', animation: 'tShine 6s ease-in-out infinite alternate', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '8px' }}>less than one bad week.</span></h2>
</div>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px' }}>
<div role="group" aria-label="Billing period" style={{ display: 'flex', gap: '4px', padding: '5px', borderRadius: '999px', background: '#0A1112', border: '1px solid #1F2D2F' }}>
<button type="button" onClick={() => setAnnual(false)} aria-pressed={!annual} className="t-tap" style={{ padding: '11px 22px', border: '0', borderRadius: '999px', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', cursor: 'pointer', background: `${mBg}`, color: `${mFg}` }}>Monthly</button>
<button type="button" onClick={() => setAnnual(true)} aria-pressed={annual} className="t-tap" style={{ padding: '11px 22px', border: '0', borderRadius: '999px', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: '600', cursor: 'pointer', background: `${aBg}`, color: `${aFg}` }}>Yearly · 2 months free</button>
</div>
<p style={{ margin: '0', padding: '10px 18px', borderRadius: '999px', background: 'rgba(46,150,120,0.14)', border: '1px solid rgba(130,220,188,0.35)', fontSize: '14px', color: '#BDE8D6' }}>Lagos pilot: your first 3 months are free on any plan.</p>
</div>
<div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'stretch' }}>

<div className="t-card t-reveal t-tilt" style={{ flex: '1 1 300px', minWidth: '0', padding: '34px', borderRadius: '30px', background: 'linear-gradient(180deg, rgba(20,32,33,0.95) 0%, rgba(10,17,18,0.95) 100%)', border: '1px solid #1F2D2F', display: 'flex', flexDirection: 'column', gap: '20px' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><h3 style={{ margin: '0', fontSize: '22px', fontWeight: '600', letterSpacing: '-0.02em' }}>Starter</h3><p style={{ margin: '0', fontSize: '14px', lineHeight: '1.55', color: '#A9B7B3' }}>For solo owners and small shops with up to 2 staff.</p></div>
<div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', fontVariantNumeric: 'tabular-nums' }}><span style={{ fontSize: '46px', fontWeight: '600', letterSpacing: '-0.045em', lineHeight: '1' }}>{starter}</span><span style={{ fontSize: '15px', color: '#8FA29D' }}>{per}</span></div>
<ul style={{ margin: '0', padding: '20px 0 0', listStyle: 'none', borderTop: '1px solid #1F2D2F', display: 'flex', flexDirection: 'column', gap: '13px', fontSize: '15px' }}>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Weekly money plan, 4 tiers</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Owner's salary</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Family pot with request link</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Voice-note logging, 5 languages</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Monday WhatsApp check-in</li>
</ul>
<a href="#join" style={{ marginTop: 'auto', textAlign: 'center', padding: '15px', borderRadius: '999px', border: '1px solid rgba(236,216,168,0.4)', color: '#F4F2EC', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}>Start with Starter</a>
</div>

<div className="t-reveal t-tilt" style={{ flex: '1 1 300px', minWidth: '0', boxSizing: 'border-box', padding: '2px', borderRadius: '32px', background: 'linear-gradient(160deg, #E9D3A0 0%, rgba(200,164,93,0.3) 45%, rgba(46,150,120,0.45) 100%)', boxShadow: '0 40px 120px rgba(0,0,0,0.6), 0 0 90px rgba(200,164,93,0.18)' }}>
<div className="t-card" style={{ height: '100%', boxSizing: 'border-box', padding: '32px', borderRadius: '30px', background: 'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(200,164,93,0.16), rgba(5,10,11,0) 70%), linear-gradient(180deg, #0F1A1B 0%, #070D0E 100%)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><h3 style={{ margin: '0', fontSize: '22px', fontWeight: '600', letterSpacing: '-0.02em' }}>Growth</h3><span style={{ padding: '6px 12px', borderRadius: '999px', background: 'linear-gradient(140deg, #F3E3B8, #C8A45D)', color: '#0B1416', fontSize: '12px', fontWeight: '600' }}>Most popular</span></div><p style={{ margin: '0', fontSize: '14px', lineHeight: '1.55', color: '#A9B7B3' }}>For growing shops with 3 to 15 staff.</p></div>
<div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', fontVariantNumeric: 'tabular-nums' }}><span style={{ fontSize: '46px', fontWeight: '600', letterSpacing: '-0.045em', lineHeight: '1' }}>{growth}</span><span style={{ fontSize: '15px', color: '#8FA29D' }}>{per}</span></div>
<ul style={{ margin: '0', padding: '20px 0 0', listStyle: 'none', borderTop: '1px solid #1F2D2F', display: 'flex', flexDirection: 'column', gap: '13px', fontSize: '15px' }}>
<li style={{ display: 'flex', gap: '10px', color: '#E9D3A0' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Everything in Starter, plus:</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Unlimited tiers and the postpone queue</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>All your bank, POS and mobile money in one view</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Real profit report every week</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Lender-ready records</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Growth pot with licensed partners</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>2 team members can log sales</li>
</ul>
<a href="#join" style={{ marginTop: 'auto', textAlign: 'center', padding: '15px', borderRadius: '999px', background: 'linear-gradient(140deg, #F3E3B8 0%, #C8A45D 60%, #A8853F 100%)', boxShadow: '0 0 40px rgba(232,200,130,0.30)', color: '#0B1416', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}>Start with Growth</a>
</div>
</div>

<div className="t-card t-reveal t-tilt" style={{ flex: '1 1 300px', minWidth: '0', padding: '34px', borderRadius: '30px', background: 'linear-gradient(180deg, rgba(20,32,33,0.95) 0%, rgba(10,17,18,0.95) 100%)', border: '1px solid #1F2D2F', display: 'flex', flexDirection: 'column', gap: '20px' }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}><h3 style={{ margin: '0', fontSize: '22px', fontWeight: '600', letterSpacing: '-0.02em' }}>Pro</h3><p style={{ margin: '0', fontSize: '14px', lineHeight: '1.55', color: '#A9B7B3' }}>For owners with 2 or more branches, or up to 30 staff.</p></div>
<div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', fontVariantNumeric: 'tabular-nums' }}><span style={{ fontSize: '46px', fontWeight: '600', letterSpacing: '-0.045em', lineHeight: '1' }}>{pro}</span><span style={{ fontSize: '15px', color: '#8FA29D' }}>{per}</span></div>
<ul style={{ margin: '0', padding: '20px 0 0', listStyle: 'none', borderTop: '1px solid #1F2D2F', display: 'flex', flexDirection: 'column', gap: '13px', fontSize: '15px' }}>
<li style={{ display: 'flex', gap: '10px', color: '#E9D3A0' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Everything in Growth, plus:</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Every branch in one plan</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Access for your accountant</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Tax pot and tax-ready reports</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Monthly call with a money coach</li>
<li style={{ display: 'flex', gap: '10px' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E9D3A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Up to 6 team members</li>
</ul>
<a href="#join" style={{ marginTop: 'auto', textAlign: 'center', padding: '15px', borderRadius: '999px', border: '1px solid rgba(236,216,168,0.4)', color: '#F4F2EC', fontWeight: '600', fontSize: '15px', textDecoration: 'none' }}>Start with Pro</a>
</div>

</div>
<p style={{ margin: '0', fontSize: '14px', color: '#8FA29D', textAlign: 'center' }}>Prices in naira. Cancel any time. No card needed for the pilot.</p>
</div>
</section>
</>
  );
}
