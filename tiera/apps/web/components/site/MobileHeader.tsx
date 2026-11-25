import type React from "react";
import { demo, formatNaira } from "@/lib/demo";

export function MobileHeader() {
  return (
<>
<header style={{ position: 'relative', overflow: 'hidden', background: 'radial-gradient(ellipse 120% 60% at 50% 0%, rgba(110,206,172,0.50) 0%, rgba(30,110,94,0.45) 40%, rgba(5,10,11,0) 80%), #050A0B' }}>
<div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '150px', width: '900px', height: '900px', transform: 'translateX(-50%)', borderRadius: '50%', background: '#050A0B', boxShadow: '0 -2px 0 0 rgba(236,216,168,0.6), 0 -18px 60px 6px rgba(88,196,160,0.5)' }}></div>
<nav style={{ position: 'relative', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
<a href="#" aria-label="Tiera home" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#F4F2EC' }}>
<svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="9" width="40" height="7" rx="1" fill="#C8A45D"></rect><rect x="15" y="20.5" width="18" height="7" rx="1" fill="#F4F2EC"></rect><rect x="20" y="32" width="8" height="7" rx="1" fill="#F4F2EC"></rect></svg>
<span style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '0.28em' }}>TIERA</span>
</a>
<a href="#join" className="t-tap" style={{ padding: '10px 16px', borderRadius: '999px', background: '#C8A45D', color: '#0B1416', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>Join the pilot</a>
</nav>
<section id="top-m" style={{ position: 'relative', padding: '64px 20px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '20px' }}>
<p style={{ margin: '0', padding: '7px 14px', borderRadius: '999px', border: '1px solid rgba(236,216,168,0.35)', background: 'rgba(5,10,11,0.6)', fontSize: '11px', fontWeight: '500', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E9D3A0' }}>For owners tired of guessing</p>
<h1 style={{ margin: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: '400' }}>
<span style={{ fontWeight: '500', fontSize: 'clamp(36px, 11vw, 46px)', letterSpacing: '-0.06em', lineHeight: '1' }}>Your business</span>
<span style={{ fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontSize: 'clamp(42px, 13vw, 54px)', lineHeight: '1', padding: '0 6px', background: 'linear-gradient(95deg, #8E7034 0%, #E9D3A0 28%, #FFF6DD 46%, #C8A45D 66%, #7A5F2C 100%)', backgroundSize: '220% 100%', animation: 'tShine 5s ease-in-out infinite alternate', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>makes money.</span>
<span style={{ fontWeight: '500', fontSize: 'clamp(36px, 11vw, 46px)', letterSpacing: '-0.06em', lineHeight: '1.04', paddingBottom: '4px', background: 'linear-gradient(180deg, #DCE7E3 0%, #7E948E 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Tiera makes it stay.</span>
</h1>
<p style={{ margin: '0', fontSize: '16px', lineHeight: '1.55', color: '#DCE7E3' }}>Tiera splits every naira that comes in, cash or transfer, in the order you choose: restock, your salary, family, then growth.</p>
<a href="#join" style={{ alignSelf: 'stretch', padding: '16px', borderRadius: '999px', background: 'linear-gradient(140deg, #F3E3B8 0%, #C8A45D 60%, #A8853F 100%)', boxShadow: '0 0 30px rgba(232,200,130,0.35)', color: '#0B1416', fontWeight: '600', fontSize: '16px', textDecoration: 'none' }}>Join the Lagos pilot</a>
<p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5', color: '#B9CCC6' }}>Your money stays in your own bank. Nothing moves until you approve it.</p>
</section>

<div style={{ position: 'relative', padding: '0 20px 48px' }}>
<div style={{ padding: '20px', borderRadius: '26px', background: 'rgba(14,22,23,0.96)', border: '1px solid #2B3C3E', boxShadow: '0 30px 70px rgba(0,0,0,0.6)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
<span style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8FA29D' }}>Live demo · Voice note in Pidgin</span>
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
<span style={{ width: '38px', height: '38px', flexShrink: '0', borderRadius: '19px', background: 'linear-gradient(140deg, #F3E3B8, #C8A45D)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="#0B1416" aria-hidden="true"><path d="M7 4l13 8-13 8z"></path></svg></span>
<div className="t-wave" aria-hidden="true" style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '3px', height: '30px' }}>
<span style={{ flex: '1', height: '40%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '75%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '55%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '95%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '50%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '80%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '35%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '70%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '45%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '60%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '30%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '50%', borderRadius: '2px', background: '#3A4E50' }}></span>
</div>
<span style={{ fontSize: '12px', color: '#8FA29D' }}>0:06</span>
</div>
<span style={{ display: 'block', height: '24px', fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontSize: '19px', lineHeight: '1.2', whiteSpace: 'nowrap', overflow: 'hidden', animation: 'tType 8s steps(32) infinite' }}>"I don sell 10 bags of rice, 45k."</span>
<div style={{ display: 'flex', flexDirection: 'column', gap: '9px', paddingTop: '12px', borderTop: '1px solid #1F2D2F', animation: 'tShow 8s ease-out infinite' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: '14px', color: '#A9B7B3' }}>Logged to sales</span><span style={{ fontSize: '16px', fontWeight: '600', color: '#7FC4A1' }}>{formatNaira(demo.voiceAmount, { sign: true })}</span></div>
<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#8FA29D' }}><span>01 Restock</span><span style={{ color: '#E9D3A0' }}>80% funded</span></div>
<div style={{ height: '6px', borderRadius: '3px', background: '#142123' }}><div style={{ height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg, #2C8A74, #7CCDB2)', animation: 'tFill 8s ease-out infinite' }}></div></div>
</div>
</div>
<div style={{ marginTop: '12px', padding: '18px 20px', borderRadius: '26px', background: 'rgba(14,22,23,0.96)', border: '1px solid #2B3C3E', display: 'flex', flexDirection: 'column', gap: '4px', fontVariantNumeric: 'tabular-nums' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: '8px' }}><span style={{ fontSize: '16px', fontWeight: '600' }}>This week's order</span><span style={{ fontSize: '12px', color: '#8FA29D' }}>{formatNaira(demo.income)} in</span></div>
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderTop: '1px solid #1F2D2F', fontSize: '14px' }}><span><span style={{ color: '#E9D3A0' }}>01</span>  Restock</span><span style={{ color: '#7FC4A1' }}>{formatNaira(demo.restock.allocated)}</span></div>
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderTop: '1px solid #1F2D2F', fontSize: '14px' }}><span><span style={{ color: '#E9D3A0' }}>02</span>  Your salary</span><span style={{ color: '#7FC4A1' }}>{formatNaira(demo.salary.allocated)}</span></div>
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderTop: '1px solid #1F2D2F', fontSize: '14px' }}><span><span style={{ color: '#E9D3A0' }}>03</span>  Family pot</span><span>{formatNaira(demo.family.allocated)}</span></div>
<div style={{ display: 'flex', justifyContent: 'space-between', padding: '11px 0', borderTop: '1px solid #1F2D2F', fontSize: '14px' }}><span><span style={{ color: '#E9D3A0' }}>04</span>  Growth</span><span style={{ color: '#8FA29D' }}>Next week</span></div>
<span style={{ paddingTop: '6px', fontSize: '11px', color: '#6F827D' }}>Sample figures.</span>
</div>
</div>
</header>
</>
  );
}
