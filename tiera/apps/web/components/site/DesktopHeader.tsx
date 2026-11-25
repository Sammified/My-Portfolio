"use client";
import type React from "react";
import { useRef, useState } from "react";
import { demo, formatNaira } from "@/lib/demo";

export function DesktopHeader() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const tiltX = tilt.x;
  const tiltY = tilt.y;
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const { clientX, clientY } = e;
    if (raf.current !== null) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = null;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r = el.getBoundingClientRect();
      const px = (clientX - r.left) / r.width - 0.5;
      const py = (clientY - r.top) / r.height - 0.5;
      setTilt({ x: Math.round(-py * 900) / 100, y: Math.round(px * 1200) / 100 });
    });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });
  return (
<>
<header style={{ position: 'relative', color: '#F4F2EC', overflow: 'hidden', background: '#050A0B' }}>
<div aria-hidden="true" style={{ animation: 'tBreath 9s ease-in-out infinite', position: 'absolute', left: '0', right: '0', top: '0', height: '760px', background: 'radial-gradient(ellipse 62% 75% at 50% 0%, rgba(130,220,188,0.60) 0%, rgba(30,110,94,0.60) 38%, rgba(5,10,11,0) 78%), radial-gradient(ellipse 38% 45% at 88% 0%, rgba(232,200,130,0.40), rgba(5,10,11,0) 70%), radial-gradient(ellipse 30% 40% at 10% 0%, rgba(232,200,130,0.22), rgba(5,10,11,0) 70%)' }}></div>
<div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '210px', width: '2400px', height: '1700px', transform: 'translateX(-50%)', borderRadius: '50%', background: '#050A0B', boxShadow: '0 -2px 0 0 rgba(236,216,168,0.65), 0 -22px 80px 8px rgba(88,196,160,0.60), 0 -90px 220px 70px rgba(30,110,94,0.50)' }}></div>
<div aria-hidden="true" style={{ position: 'absolute', left: '0', right: '0', top: '0', bottom: '0', opacity: '0.55', backgroundImage: 'radial-gradient(rgba(244,242,236,0.25) 1px, rgba(244,242,236,0) 1.5px), radial-gradient(rgba(244,242,236,0.14) 1px, rgba(244,242,236,0) 1.5px)', backgroundSize: '97px 89px, 53px 61px', backgroundPosition: '0 0, 23px 41px' }}></div>
<div aria-hidden="true" style={{ position: 'absolute', left: '50%', bottom: '-1160px', width: '2600px', height: '1400px', transform: 'translateX(-50%)', borderRadius: '50%', borderTop: '1.5px solid rgba(236,216,168,0.70)', boxShadow: '0 -30px 140px 24px rgba(46,150,120,0.50), inset 0 50px 140px rgba(46,150,120,0.40)' }}></div>
<div aria-hidden="true" style={{ position: 'absolute', left: '50%', bottom: '-1250px', width: '2100px', height: '1400px', transform: 'translateX(-50%)', borderRadius: '50%', borderTop: '1px solid rgba(130,220,188,0.45)', boxShadow: '0 -20px 90px 10px rgba(200,164,93,0.25)' }}></div>
<nav style={{ position: 'relative', zIndex: '5', maxWidth: '1200px', margin: '0 auto', padding: '22px 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
<a href="#top" aria-label="Tiera home" className="t-tap" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#F4F2EC' }}>
<svg width="32" height="32" viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="9" width="40" height="7" rx="1" fill="#C8A45D"></rect><rect x="15" y="20.5" width="18" height="7" rx="1" fill="#F4F2EC"></rect><rect x="20" y="32" width="8" height="7" rx="1" fill="#F4F2EC"></rect></svg>
<span style={{ fontSize: '20px', fontWeight: '500', letterSpacing: '0.3em' }}>TIERA</span>
</a>
<div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '28px', fontSize: '15px' }}>
<a href="#how" className="t-tap" style={{ color: '#DCE7E3', textDecoration: 'none' }}>How it works</a>
<a href="#why" className="t-tap" style={{ color: '#DCE7E3', textDecoration: 'none' }}>Why Tiera</a>
<a href="#trust" className="t-tap" style={{ color: '#DCE7E3', textDecoration: 'none' }}>Trust</a>
<a href="#pricing" className="t-tap" style={{ color: '#DCE7E3', textDecoration: 'none' }}>Pricing</a>
<a href="#faq" className="t-tap" style={{ color: '#DCE7E3', textDecoration: 'none' }}>FAQ</a>
<a href="#join" className="t-tap" style={{ padding: '11px 20px', borderRadius: '999px', background: '#C8A45D', color: '#0B1416', fontWeight: '600', textDecoration: 'none' }}>Join the pilot</a>
</div>
</nav>

<section id="top" className="t-sec" style={{ position: 'relative', zIndex: '2', maxWidth: '1240px', margin: '0 auto', padding: '120px 32px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '28px' }}>
<p style={{ margin: '0', padding: '9px 18px', borderRadius: '999px', border: '1px solid rgba(236,216,168,0.35)', background: 'rgba(5,10,11,0.55)', fontSize: '12px', fontWeight: '500', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#E9D3A0' }}>For owners who are tired of guessing</p>
<h1 style={{ margin: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', fontWeight: '400' }}>
<span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '500', fontSize: 'clamp(46px, 8.2vw, 122px)', letterSpacing: '-0.06em', lineHeight: '0.98', color: '#F7F5EF' }}>Your business</span>
<span style={{ fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontSize: 'clamp(52px, 9.2vw, 136px)', letterSpacing: '-0.02em', lineHeight: '0.98', padding: '0 12px', background: 'linear-gradient(95deg, #8E7034 0%, #E9D3A0 28%, #FFF6DD 46%, #C8A45D 66%, #7A5F2C 100%)', backgroundSize: '220% 100%', animation: 'tShine 5s ease-in-out infinite alternate', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>makes money.</span>
<span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '500', fontSize: 'clamp(46px, 8.2vw, 122px)', letterSpacing: '-0.06em', lineHeight: '1.02', paddingBottom: '6px', background: 'linear-gradient(180deg, #DCE7E3 0%, #7E948E 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Tiera makes it stay.</span>
</h1>
<p style={{ margin: '6px 0 0', fontSize: '20px', lineHeight: '1.55', color: '#DCE7E3', maxWidth: '640px' }}>Tiera splits every naira that comes in, cash or transfer, in the order you choose: restock, your salary, family, then growth.</p>
<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
<a href="#join" style={{ padding: '16px 30px', borderRadius: '999px', background: 'linear-gradient(140deg, #F3E3B8 0%, #C8A45D 60%, #A8853F 100%)', boxShadow: '0 0 40px rgba(232,200,130,0.35)', color: '#0B1416', fontWeight: '600', fontSize: '16px', textDecoration: 'none' }}>Join the Lagos pilot</a>
<a href="#how" style={{ padding: '16px 30px', borderRadius: '999px', border: '1px solid rgba(236,216,168,0.35)', background: 'rgba(5,10,11,0.5)', color: '#F4F2EC', fontWeight: '500', fontSize: '16px', textDecoration: 'none' }}>See how it works</a>
</div>
<p style={{ margin: '0', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#B9CCC6' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7FC4A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="10" width="14" height="10" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg>Your money stays in your own bank. Nothing moves until you approve it.</p>
</section>

<div onMouseMove={onMove} onMouseLeave={onLeave} className="t-wrap" style={{ position: 'relative', zIndex: '2', maxWidth: '1180px', height: '820px', margin: '72px auto 0', padding: '0 32px', boxSizing: 'border-box' }}>
<div style={{ position: 'absolute', left: '0', right: '0', top: '0', bottom: '0', transformStyle: 'preserve-3d', transform: `perspective(2000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`, transition: 'transform 0.35s ease-out' }}>



<div className="t-float" aria-hidden="true" style={{ position: 'absolute', zIndex: '1', left: 'calc(50% + 70px)', top: '120px', width: '340px', height: '210px', boxSizing: 'border-box', padding: '28px', borderRadius: '30px', background: 'linear-gradient(150deg, #1B2A2C 0%, #0B1416 100%)', border: '1px solid #2B3C3E', boxShadow: '0 40px 100px rgba(0,0,0,0.6)', transform: 'rotate(18deg)', '--r': '18deg', '--z': '-40px', animation: 'tBob 10s ease-in-out infinite', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' } as React.CSSProperties}>
<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#C8A45D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-7 9 7"></path><path d="M5 10v10h14V10"></path><path d="M10 20v-5h4v5"></path></svg>
<span style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '130px' }}><span style={{ fontSize: '16px', color: '#A9B7B3' }}>Family pot</span><span style={{ fontSize: '38px', fontWeight: '600', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>{formatNaira(demo.family.due - demo.family.allocated)}</span></span>
</div>

<div className="t-lite" style={{ position: 'absolute', zIndex: '2', left: '50%', top: '0', transform: 'translateX(-50%)', animation: 'tPhone 9s ease-in-out infinite', width: 'min(372px, 88vw)', height: '780px', boxSizing: 'border-box', padding: '4px', borderRadius: '64px', background: 'linear-gradient(160deg, #8A9896 0%, #2A3436 30%, #10191A 60%, #5E6B6A 100%)', boxShadow: '0 60px 140px rgba(0,0,0,0.75), 0 0 80px rgba(88,196,160,0.18)', textAlign: 'left' }}>
<div style={{ position: 'relative', height: '100%', boxSizing: 'border-box', padding: '10px', borderRadius: '60px', background: '#030606' }}>
<div style={{ position: 'absolute', zIndex: '3', left: '50%', top: '22px', transform: 'translateX(-50%)', width: '118px', height: '34px', borderRadius: '20px', background: '#000000' }}></div>
<div style={{ position: 'relative', height: '100%', borderRadius: '50px', background: '#070D0E', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
<div style={{ position: 'absolute', zIndex: '4', left: '10px', right: '10px', top: '64px', padding: '12px 14px', borderRadius: '20px', background: 'rgba(18,30,31,0.96)', border: '1px solid rgba(236,216,168,0.35)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', gap: '10px', animation: 'tToast 8s ease-out infinite' }}>
<span style={{ width: '34px', height: '34px', flexShrink: '0', borderRadius: '10px', background: '#0E3B34', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="9" width="40" height="7" rx="1" fill="#C8A45D"></rect><rect x="15" y="20.5" width="18" height="7" rx="1" fill="#F4F2EC"></rect><rect x="20" y="32" width="8" height="7" rx="1" fill="#F4F2EC"></rect></svg></span>
<span style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}><span style={{ fontSize: '13px', fontWeight: '600' }}>{formatNaira(demo.voiceAmount, { sign: true })} logged from your voice note</span><span style={{ fontSize: '12px', color: '#A9B7B3' }}>Restock is now 80% funded</span></span>
</div>
<div style={{ padding: '70px 16px 16px', borderRadius: '0 0 34px 34px', background: 'linear-gradient(165deg, #7CCDB2 0%, #2C8A74 34%, #145247 68%, #0E3B34 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
<span style={{ width: '42px', height: '42px', borderRadius: '21px', background: 'linear-gradient(135deg, #F3E3B8, #C8A45D)', color: '#0B1416', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '600' }}>AO</span>
<span style={{ display: 'flex', flexDirection: 'column' }}><span style={{ fontSize: '17px', fontWeight: '600', letterSpacing: '-0.01em' }}>Good morning</span><span style={{ fontSize: '12px', color: '#DCEFE8' }}>Ada's Provisions</span></span>
</div>
<span style={{ display: 'flex', gap: '8px' }}>
<span style={{ width: '40px', height: '40px', borderRadius: '20px', background: 'rgba(5,10,11,0.22)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F5EF" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="M20 20l-4.2-4.2"></path></svg></span>
<span style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '20px', background: 'rgba(5,10,11,0.22)', border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F5EF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg><span style={{ position: 'absolute', top: '9px', right: '10px', width: '7px', height: '7px', borderRadius: '4px', background: '#E9D3A0' }}></span></span>
</span>
</div>
<div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '4px' }}>
<span style={{ fontSize: '13px', color: '#DCEFE8' }}>Came in this week</span>
<span style={{ fontSize: '42px', fontWeight: '600', letterSpacing: '-0.04em', lineHeight: '1.1', fontVariantNumeric: 'tabular-nums' }}>{formatNaira(demo.income, { showKobo: "always" })}</span>
</div>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '7px' }}>
<div style={{ padding: '14px 4px', borderRadius: '16px', background: 'rgba(5,10,11,0.28)', border: '1px solid rgba(255,255,255,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '500' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7F5EF" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>Log sale</div>
<div style={{ padding: '14px 4px', borderRadius: '16px', background: 'rgba(5,10,11,0.28)', border: '1px solid rgba(255,255,255,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '500' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7F5EF" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4"></path></svg>Order</div>
<div style={{ padding: '14px 4px', borderRadius: '16px', background: 'rgba(5,10,11,0.28)', border: '1px solid rgba(255,255,255,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '500' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7F5EF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 11l9-7 9 7"></path><path d="M5 10v10h14V10"></path></svg>Family</div>
<div style={{ padding: '14px 4px', borderRadius: '16px', background: 'rgba(5,10,11,0.28)', border: '1px solid rgba(255,255,255,0.10)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '500' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F7F5EF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 18l6-6 4 4 6-8"></path><path d="M14 8h6v6"></path></svg>Grow</div>
</div>
</div>
<div style={{ flex: '1', padding: '20px 14px 0', display: 'flex', flexDirection: 'column', gap: '9px', fontVariantNumeric: 'tabular-nums' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 4px 2px' }}><span style={{ fontSize: '17px', fontWeight: '600' }}>This week's order</span><span style={{ fontSize: '13px', color: '#E9D3A0' }}>See all</span></div>
<div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '18px', background: '#0F191A', border: '1px solid #1B2729' }}>
<span style={{ width: '40px', height: '40px', borderRadius: '20px', background: '#132B27', color: '#E9D3A0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>01</span>
<span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2px' }}><span style={{ fontSize: '15px', fontWeight: '600' }}>Restock</span><span style={{ fontSize: '12px', color: '#8FA29D' }}>Funded Mon, 09:12</span></span>
<span style={{ fontSize: '15px', fontWeight: '600', color: '#7FC4A1' }}>{formatNaira(demo.restock.allocated)}</span>
</div>
<div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '18px', background: '#0F191A', border: '1px solid #1B2729' }}>
<span style={{ width: '40px', height: '40px', borderRadius: '20px', background: '#132B27', color: '#E9D3A0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>02</span>
<span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2px' }}><span style={{ fontSize: '15px', fontWeight: '600' }}>Your salary</span><span style={{ fontSize: '12px', color: '#8FA29D' }}>Paid to you, Mon</span></span>
<span style={{ fontSize: '15px', fontWeight: '600', color: '#7FC4A1' }}>{formatNaira(demo.salary.allocated)}</span>
</div>
<div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '18px', background: '#0F191A', border: '1px solid #1B2729' }}>
<span style={{ width: '40px', height: '40px', borderRadius: '20px', background: '#132B27', color: '#E9D3A0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '600' }}>03</span>
<span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '2px' }}><span style={{ fontSize: '15px', fontWeight: '600' }}>Family pot</span><span style={{ fontSize: '12px', color: '#8FA29D' }}>{formatNaira(demo.family.allocated)} of {formatNaira(demo.family.due)}</span></span>
<span style={{ fontSize: '15px', fontWeight: '600' }}>{formatNaira(demo.family.allocated)}</span>
</div>
</div>
<div style={{ margin: '10px 14px 16px', padding: '7px', borderRadius: '999px', background: 'rgba(24,36,38,0.95)', border: '1px solid #243335', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
<span style={{ width: '46px', height: '46px', borderRadius: '23px', background: '#F7F5EF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="#0B1416" aria-hidden="true"><path d="M12 3l9 7.5V21h-6v-6H9v6H3V10.5z"></path></svg></span>
<span style={{ width: '46px', height: '46px', borderRadius: '23px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A9B7B3" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4"></path></svg></span>
<span style={{ width: '58px', height: '58px', borderRadius: '29px', background: 'linear-gradient(140deg, #F3E3B8 0%, #C8A45D 55%, #8E7034 100%)', boxShadow: '0 0 28px rgba(232,200,130,0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B1416" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5 11a7 7 0 0 0 14 0M12 18v3"></path></svg></span>
<span style={{ width: '46px', height: '46px', borderRadius: '23px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A9B7B3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12h4l3-7 4 14 3-7h4"></path></svg></span>
<span style={{ width: '46px', height: '46px', borderRadius: '23px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A9B7B3" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path></svg></span>
</div>
</div>
</div>
</div>

<div className="t-float" style={{ position: 'absolute', zIndex: '3', right: 'calc(50% + 110px)', top: '390px', '--z': '60px', animation: 'tBob 7s ease-in-out -2s infinite', width: '340px', boxSizing: 'border-box', padding: '22px', borderRadius: '26px', background: 'rgba(14,22,23,0.94)', border: '1px solid #2B3C3E', boxShadow: '0 40px 100px rgba(0,0,0,0.65)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px' } as React.CSSProperties}>
<span style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8FA29D' }}>Live demo · Voice note in Pidgin</span>
<div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
<span style={{ width: '40px', height: '40px', flexShrink: '0', borderRadius: '20px', background: 'linear-gradient(140deg, #F3E3B8, #C8A45D)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="#0B1416" aria-hidden="true"><path d="M7 4l13 8-13 8z"></path></svg></span>
<div className="t-wave" aria-hidden="true" style={{ flex: '1', display: 'flex', alignItems: 'center', gap: '3px', height: '34px' }}>
<span style={{ flex: '1', height: '30%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '55%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '80%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '45%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '95%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '60%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '35%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '70%', borderRadius: '2px', background: '#C8A45D' }}></span><span style={{ flex: '1', height: '50%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '85%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '40%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '65%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '30%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '55%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '25%', borderRadius: '2px', background: '#3A4E50' }}></span><span style={{ flex: '1', height: '45%', borderRadius: '2px', background: '#3A4E50' }}></span>
</div>
<span style={{ fontSize: '12px', color: '#8FA29D', fontVariantNumeric: 'tabular-nums' }}>0:06</span>
</div>
<span style={{ display: 'block', height: '26px', fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontSize: '21px', lineHeight: '1.2', whiteSpace: 'nowrap', overflow: 'hidden', animation: 'tType 8s steps(32) infinite' }}>"I don sell 10 bags of rice, 45k."</span>
<div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '12px', borderTop: '1px solid #1F2D2F', animation: 'tShow 8s ease-out infinite' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#A9B7B3' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7FC4A1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg>Logged to sales</span><span style={{ fontSize: '16px', fontWeight: '600', color: '#7FC4A1', fontVariantNumeric: 'tabular-nums' }}>{formatNaira(demo.voiceAmount, { sign: true })}</span></div>
<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#8FA29D' }}><span>01 Restock</span><span style={{ color: '#E9D3A0' }}>80% funded</span></div>
<div style={{ height: '6px', borderRadius: '3px', background: '#142123' }}><div style={{ height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg, #2C8A74, #7CCDB2)', animation: 'tFill 8s ease-out infinite' }}></div></div>
</div>
</div>

<div className="t-float" style={{ position: 'absolute', zIndex: '3', left: 'calc(50% + 120px)', top: '470px', '--z': '90px', animation: 'tBob 8s ease-in-out -4s infinite', width: '380px', boxSizing: 'border-box', padding: '22px', borderRadius: '28px', background: 'rgba(14,22,23,0.95)', border: '1px solid #2B3C3E', boxShadow: '0 40px 100px rgba(0,0,0,0.65)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '14px' } as React.CSSProperties}>
<div style={{ display: 'flex', gap: '6px', fontSize: '11px', fontWeight: '500' }}>
<span style={{ padding: '6px 12px', borderRadius: '999px', background: '#C8A45D', color: '#0B1416' }}>1W</span>
<span style={{ padding: '6px 12px', borderRadius: '999px', background: '#1B2729', color: '#A9B7B3' }}>1M</span>
<span style={{ padding: '6px 12px', borderRadius: '999px', background: '#1B2729', color: '#A9B7B3' }}>3M</span>
<span style={{ padding: '6px 12px', borderRadius: '999px', background: '#1B2729', color: '#A9B7B3' }}>1Y</span>
<span style={{ padding: '6px 12px', borderRadius: '999px', background: '#1B2729', color: '#A9B7B3' }}>All</span>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}><span style={{ fontSize: '13px', color: '#8FA29D' }}>Real profit</span><span style={{ fontSize: '26px', fontWeight: '600', letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums' }}>₦212,000</span></div>
<svg width="100%" height="120" viewBox="0 0 340 120" preserveAspectRatio="none" aria-hidden="true">
<defs><linearGradient id="tieraArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#C8A45D" stopOpacity="0.55"></stop><stop offset="100%" stopColor="#C8A45D" stopOpacity="0"></stop></linearGradient></defs>
<path d="M0 92 L20 84 L40 88 L60 72 L80 76 L100 62 L120 68 L140 52 L160 58 L180 44 L200 50 L220 36 L240 42 L260 26 L280 34 L300 22 L320 28 L340 16 L340 120 L0 120 Z" fill="url(#tieraArea)"></path>
<path d="M0 92 L20 84 L40 88 L60 72 L80 76 L100 62 L120 68 L140 52 L160 58 L180 44 L200 50 L220 36 L240 42 L260 26 L280 34 L300 22 L320 28 L340 16" fill="none" stroke="#E9D3A0" strokeWidth="2"></path>
<line x1="260" y1="26" x2="260" y2="120" stroke="#E9D3A0" strokeWidth="1" strokeDasharray="3 3" opacity="0.6"></line>
<circle cx="260" cy="26" r="4.5" fill="#FFF6DD"></circle>
</svg>
<div aria-hidden="true" style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '34px' }}>
<span style={{ flex: '1', height: '20%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '30%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '24%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '40%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '33%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '46%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '30%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '52%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '40%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '60%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '50%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '66%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '44%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '72%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '56%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '80%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '62%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '86%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '70%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '92%', borderRadius: '2px', background: '#2E4A46' }}></span><span style={{ flex: '1', height: '100%', borderRadius: '2px', background: '#C8A45D' }}></span>
</div>
<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', letterSpacing: '0.08em', color: '#8FA29D' }}><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div>
</div>
</div>
</div>

<div aria-hidden="true" style={{ height: '140px' }}></div>
</header>
</>
  );
}
