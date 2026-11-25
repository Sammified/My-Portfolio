"use client";
import type React from "react";
import { useState } from "react";
import { languages, voiceExamples, type LanguageCode } from "@tiera/i18n";

export function WhyTiera() {
  const [lang, setLang] = useState<LanguageCode>("pcm");
  const ex = voiceExamples[lang];
  const voice = `"${ex.said}" · 0:06`;
  const reply = ex.reply;
  const langCode = lang;
  return (
<>
<script type="application/json" id="voice-data" dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceExamples) }} />
<section id="why" className="t-sec" style={{ position: 'relative', overflow: 'hidden', padding: '128px 0' }}>
<div aria-hidden="true" className="t-glow" style={{ position: 'absolute', left: '50%', top: '-260px', width: '1800px', height: '900px', transform: 'translateX(-50%)', borderRadius: '50%', background: 'radial-gradient(ellipse at center, rgba(30,110,94,0.32), rgba(5,10,11,0) 65%)' }}></div>
<div className="t-wrap" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '22px' }}>
<p style={{ margin: '0', padding: '8px 16px', borderRadius: '999px', border: '1px solid rgba(236,216,168,0.3)', background: 'rgba(14,22,23,0.7)', fontSize: '12px', fontWeight: '500', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E9D3A0' }}>Why Tiera</p>
<h2 style={{ margin: '0', fontWeight: '500', fontSize: 'clamp(40px, 6vw, 84px)', letterSpacing: '-0.055em', lineHeight: '1', color: '#F7F5EF' }}>Take care of everyone.<br /><span style={{ fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontWeight: '400', letterSpacing: '-0.01em', background: 'linear-gradient(95deg, #8E7034 0%, #E9D3A0 30%, #FFF6DD 48%, #C8A45D 68%, #7A5F2C 100%)', backgroundSize: '220% 100%', animation: 'tShine 6s ease-in-out infinite alternate', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', padding: '0 8px' }}>Including you.</span></h2>
</div>

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
<div className="t-card t-reveal t-tilt" style={{ flex: '999 1 520px', minWidth: '0', padding: '34px', borderRadius: '30px', background: 'radial-gradient(ellipse 70% 90% at 100% 0%, rgba(46,150,120,0.28), rgba(5,10,11,0) 70%), linear-gradient(180deg, rgba(20,32,33,0.95) 0%, rgba(10,17,18,0.95) 100%)', border: '1px solid #1F2D2F', display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'center' }}>
<div style={{ flex: '1 1 240px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
<h3 style={{ margin: '0', fontSize: '26px', fontWeight: '600', letterSpacing: '-0.03em' }}>Pay yourself like an employee</h3>
<p style={{ margin: '0', fontSize: '16px', lineHeight: '1.65', color: '#A9B7B3' }}>A fixed salary, on a fixed day. No more dipping into the till and hoping.</p>
</div>
<div className="t-hide-m" style={{ flex: '1 1 240px', minWidth: '0', padding: '22px', borderRadius: '22px', background: '#0A1112', border: '1px solid #22302F', display: 'flex', flexDirection: 'column', gap: '14px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8FA29D' }}><span>Owner's salary</span><span style={{ color: '#7FC4A1' }}>Planned</span></div>
<span style={{ fontSize: '34px', fontWeight: '600', letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}>₦300,000</span>
<span style={{ fontSize: '13px', color: '#A9B7B3' }}>Every Monday, before anything optional.</span>
<div aria-hidden="true" style={{ display: 'flex', gap: '6px' }}><span style={{ flex: '1', height: '6px', borderRadius: '3px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '6px', borderRadius: '3px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '6px', borderRadius: '3px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '6px', borderRadius: '3px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '6px', borderRadius: '3px', background: '#2B3C3E' }}></span><span style={{ flex: '1', height: '6px', borderRadius: '3px', background: '#2B3C3E' }}></span></div>
</div>
</div>
<div className="t-card t-reveal t-tilt" style={{ flex: '1 1 340px', minWidth: '0', padding: '34px', borderRadius: '30px', background: 'linear-gradient(180deg, rgba(20,32,33,0.95) 0%, rgba(10,17,18,0.95) 100%)', border: '1px solid #1F2D2F', display: 'flex', flexDirection: 'column', gap: '18px' }}>
<h3 style={{ margin: '0', fontSize: '26px', fontWeight: '600', letterSpacing: '-0.03em' }}>A family pot with a limit</h3>
<p style={{ margin: '0', fontSize: '16px', lineHeight: '1.65', color: '#A9B7B3' }}>Relatives request through a link. You approve what fits. "The pot is empty this month" is an answer, not an argument.</p>
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#A9B7B3', fontVariantNumeric: 'tabular-nums' }}><span>₦170,000 used</span><span>₦250,000 limit</span></div>
<div style={{ height: '10px', borderRadius: '5px', background: '#142123' }}><div style={{ width: '68%', height: '100%', borderRadius: '5px', background: 'linear-gradient(90deg, #8E7034, #E9D3A0)' }}></div></div>
</div>
</div>
</div>

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
<div className="t-card t-reveal t-tilt" style={{ flex: '1 1 340px', minWidth: '0', padding: '34px', borderRadius: '30px', background: 'linear-gradient(180deg, rgba(20,32,33,0.95) 0%, rgba(10,17,18,0.95) 100%)', border: '1px solid #1F2D2F', display: 'flex', flexDirection: 'column', gap: '18px' }}>
<h3 style={{ margin: '0', fontSize: '26px', fontWeight: '600', letterSpacing: '-0.03em' }}>Postponed, never forgotten</h3>
<p style={{ margin: '0', fontSize: '16px', lineHeight: '1.65', color: '#A9B7B3' }}>When a slow week can't fund everything, lower tiers wait in line and catch up first when cash comes back.</p>
<div className="t-hide-m" style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 14px', borderRadius: '14px', background: '#0A1112', border: '1px solid #22302F' }}><span>Growth top-up</span><span style={{ color: '#E9D3A0' }}>Waiting · 1st in line</span></div>
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 14px', borderRadius: '14px', background: '#0A1112', border: '1px solid #22302F' }}><span>New shelf</span><span style={{ color: '#A9B7B3' }}>Waiting · 2nd</span></div>
</div>
</div>
<div className="t-card t-reveal t-tilt" style={{ flex: '999 1 520px', minWidth: '0', padding: '34px', borderRadius: '30px', background: 'radial-gradient(ellipse 70% 90% at 0% 100%, rgba(200,164,93,0.20), rgba(5,10,11,0) 70%), linear-gradient(180deg, rgba(20,32,33,0.95) 0%, rgba(10,17,18,0.95) 100%)', border: '1px solid #1F2D2F', display: 'flex', flexWrap: 'wrap', gap: '28px', alignItems: 'center' }}>
<div style={{ flex: '1 1 240px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
<h3 style={{ margin: '0', fontSize: '26px', fontWeight: '600', letterSpacing: '-0.03em' }}>Grow what's left</h3>
<p style={{ margin: '0', fontSize: '16px', lineHeight: '1.65', color: '#A9B7B3' }}>Once every tier is covered, Tiera shows what's left to grow. Saving and investing through licensed partners come after the pilot, and only when you say so.</p>
</div>
<div className="t-hide-m" style={{ flex: '1 1 260px', minWidth: '0', padding: '22px', borderRadius: '22px', background: '#0A1112', border: '1px solid #22302F', display: 'flex', flexDirection: 'column', gap: '10px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8FA29D' }}><span>Growth pot</span><span>Sample</span></div>
<svg width="100%" height="90" viewBox="0 0 300 90" preserveAspectRatio="none" aria-hidden="true">
<defs><linearGradient id="tieraGrow" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#C8A45D" stopOpacity="0.5"></stop><stop offset="100%" stopColor="#C8A45D" stopOpacity="0"></stop></linearGradient></defs>
<path d="M0 80 L30 76 L60 72 L90 70 L120 62 L150 58 L180 48 L210 42 L240 30 L270 22 L300 10 L300 90 L0 90 Z" fill="url(#tieraGrow)"></path>
<path d="M0 80 L30 76 L60 72 L90 70 L120 62 L150 58 L180 48 L210 42 L240 30 L270 22 L300 10" fill="none" stroke="#E9D3A0" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="t-card" style={{ position: 'relative', overflow: 'hidden', padding: '44px', borderRadius: '34px', background: 'radial-gradient(ellipse 60% 120% at 50% 0%, rgba(46,150,120,0.35), rgba(5,10,11,0) 70%), #0A1112', border: '1px solid rgba(236,216,168,0.25)', display: 'flex', flexWrap: 'wrap', gap: '36px', alignItems: 'center' }}>
<div style={{ flex: '999 1 440px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
<h3 style={{ margin: '0', fontWeight: '500', fontSize: 'clamp(30px, 3.6vw, 46px)', letterSpacing: '-0.045em', lineHeight: '1.05' }}>Just say it. <span style={{ fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontWeight: '400', letterSpacing: '-0.01em', background: 'linear-gradient(95deg, #8E7034 0%, #E9D3A0 30%, #FFF6DD 48%, #C8A45D 68%, #7A5F2C 100%)', backgroundSize: '220% 100%', animation: 'tShine 6s ease-in-out infinite alternate', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '8px' }}>Tiera writes it down.</span></h3>
<p style={{ margin: '0', fontSize: '17px', lineHeight: '1.65', color: '#A9B7B3' }}>Send a voice note, type it, or forward a bank alert. Tiera shows you what it heard before anything is saved.</p>
<div role="group" aria-label="Choose a language" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
{languages.map((l) => {
  const on = l.code === lang;
  return (
<button key={l.code} data-lang={l.code} type="button" onClick={() => setLang(l.code)} aria-pressed={on} className="t-tap" style={{ padding: '9px 16px', borderRadius: '999px', border: `1px solid ${on ? '#E9D3A0' : '#2B3C3E'}`, background: on ? '#E9D3A0' : 'transparent', color: on ? '#0B1416' : '#F4F2EC', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>{l.label}</button>
  );
})}
</div>
<p style={{ margin: '0', fontSize: '13px', color: '#8FA29D' }}>Tap a language to see Tiera understand it.</p>
</div>
<div aria-live="polite" style={{ flex: '1 1 300px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
<div style={{ alignSelf: 'flex-start', maxWidth: '300px', padding: '14px 18px', borderRadius: '20px 20px 20px 6px', background: '#162224', border: '1px solid #22302F', fontSize: '14px', lineHeight: '1.5', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ width: '30px', height: '30px', flexShrink: '0', borderRadius: '15px', background: 'linear-gradient(140deg, #F3E3B8, #C8A45D)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="#0B1416" aria-hidden="true"><path d="M7 4l13 8-13 8z"></path></svg></span><span data-voice lang={langCode}>{voice}</span></div>
<div style={{ alignSelf: 'flex-end', maxWidth: '300px', padding: '14px 18px', borderRadius: '20px 20px 6px 20px', background: 'linear-gradient(160deg, #1D6457, #0E3B34)', fontSize: '14px', lineHeight: '1.5' }}><span data-reply lang={langCode}>{reply}</span></div>
</div>
</div>
</div>
</section>
</>
  );
}
