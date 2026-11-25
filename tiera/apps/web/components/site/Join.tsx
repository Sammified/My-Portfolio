"use client";
import type React from "react";
import { useActionState } from "react";
import { joinPilot, type SignupState } from "@/app/actions";
import { businessTypes } from "@/lib/signup";

const initial: SignupState = { status: "idle" };
const label: React.CSSProperties = { position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#A9B7B3' };
const err: React.CSSProperties = { fontSize: '13px', color: '#F08A80' };
const field = (bad: boolean): React.CSSProperties => ({ minHeight: '52px', boxSizing: 'border-box', padding: '15px 18px', borderRadius: '14px', border: `1px solid ${bad ? '#F08A80' : '#2B3C3E'}`, background: '#070D0E', color: '#F4F2EC', fontFamily: 'Inter, sans-serif', fontSize: '16px' });

export function Join() {
  const [state, action, pending] = useActionState(joinPilot, initial);
  const e = state.errors ?? {};
  const v = state.values;
  return (
<>
<section id="join" className="t-sec" style={{ position: 'relative', overflow: 'hidden', padding: '150px 0 170px' }}>
<div aria-hidden="true" className="t-glow" style={{ position: 'absolute', left: '0', right: '0', top: '0', height: '600px', background: 'radial-gradient(ellipse 60% 70% at 50% 0%, rgba(130,220,188,0.40) 0%, rgba(30,110,94,0.45) 40%, rgba(5,10,11,0) 78%)' }}></div>
<div aria-hidden="true" className="t-glow" style={{ position: 'absolute', left: '50%', top: '120px', width: '2400px', height: '1700px', transform: 'translateX(-50%)', borderRadius: '50%', background: '#050A0B', boxShadow: '0 -2px 0 0 rgba(236,216,168,0.6), 0 -22px 80px 8px rgba(88,196,160,0.5), 0 -90px 220px 60px rgba(30,110,94,0.40)' }}></div>
<div className="t-wrap" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '0 32px', display: 'flex', flexWrap: 'wrap', gap: '56px', alignItems: 'center' }}>
<div style={{ flex: '1 1 400px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '22px' }}>
<h2 style={{ margin: '0', fontWeight: '500', fontSize: 'clamp(40px, 5.4vw, 76px)', letterSpacing: '-0.055em', lineHeight: '1', color: '#F7F5EF' }}>Be one of the first owners <span style={{ fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontWeight: '400', letterSpacing: '-0.01em', background: 'linear-gradient(95deg, #8E7034 0%, #E9D3A0 30%, #FFF6DD 48%, #C8A45D 68%, #7A5F2C 100%)', backgroundSize: '220% 100%', animation: 'tShine 6s ease-in-out infinite alternate', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', paddingRight: '8px' }}>to run on Tiera.</span></h2>
<p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#A9B7B3' }}>We're starting with a small group in Lagos. Tell us about your business and we'll message you on WhatsApp.</p>
</div>
{state.status === "success" ? (
<div role="status" style={{ flex: '1 1 400px', minWidth: '0', padding: '36px', borderRadius: '32px', background: 'linear-gradient(180deg, rgba(20,32,33,0.92), rgba(10,17,18,0.95))', border: '1px solid rgba(130,220,188,0.35)', boxShadow: '0 40px 120px rgba(0,0,0,0.55)', display: 'flex', flexDirection: 'column', gap: '12px' }} className="t-card">
<span style={{ width: '44px', height: '44px', borderRadius: '22px', background: 'rgba(46,150,120,0.18)', border: '1px solid rgba(130,220,188,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7FC4A1" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"></path></svg></span>
<p style={{ margin: '0', fontFamily: '\'Instrument Serif\', serif', fontSize: '34px', lineHeight: '1.1' }}>You're on the list.</p>
<p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#A9B7B3' }}>{state.message}</p>
</div>
) : (
<form action={action} noValidate className="t-card" style={{ flex: '1 1 400px', minWidth: '0', padding: '36px', borderRadius: '32px', background: 'linear-gradient(180deg, rgba(20,32,33,0.92), rgba(10,17,18,0.95))', border: '1px solid #2B3C3E', boxShadow: '0 40px 120px rgba(0,0,0,0.55)', display: 'flex', flexDirection: 'column', gap: '18px' }}>
<label htmlFor="t-name" style={label}>Your name
<input id="t-name" name="name" type="text" autoComplete="name" required maxLength={80} defaultValue={v?.name} aria-invalid={!!e.name} aria-describedby={e.name ? "t-name-err" : undefined} style={field(!!e.name)} />
{e.name && <span id="t-name-err" style={err}>{e.name}</span>}
</label>
<label htmlFor="t-phone" style={label}>WhatsApp number
<input id="t-phone" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" required placeholder="0803 123 4567" defaultValue={v?.whatsapp} aria-invalid={!!e.whatsapp} aria-describedby={e.whatsapp ? "t-phone-err" : undefined} style={field(!!e.whatsapp)} />
{e.whatsapp && <span id="t-phone-err" style={err}>{e.whatsapp}</span>}
</label>
<label htmlFor="t-type" style={label}>What does your business do?
<select id="t-type" name="businessType" required defaultValue={v?.businessType ?? ""} aria-invalid={!!e.businessType} aria-describedby={e.businessType ? "t-type-err" : undefined} style={field(!!e.businessType)}>
<option value="" disabled>Choose one</option>
{businessTypes.map((b) => <option key={b} value={b}>{b}</option>)}
</select>
{e.businessType && <span id="t-type-err" style={err}>{e.businessType}</span>}
</label>
<div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
<label htmlFor="t-company">Company</label><input id="t-company" name="company" tabIndex={-1} autoComplete="off" />
</div>
<label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13px', lineHeight: '1.55', color: '#A9B7B3', minHeight: '44px' }}>
<input type="checkbox" name="consent" required aria-invalid={!!e.consent} style={{ width: '20px', height: '20px', flexShrink: '0', marginTop: '1px', accentColor: '#C8A45D' }} />
<span>Tiera can message me on WhatsApp about the pilot and keep these details as set out in the <a href="#">[Privacy Policy]</a>.</span>
</label>
{e.consent && <span style={err}>{e.consent}</span>}
{e.form && <span role="alert" style={err}>{e.form}</span>}
<button type="submit" disabled={pending} style={{ marginTop: '6px', padding: '17px', border: '0', borderRadius: '999px', background: 'linear-gradient(140deg, #F3E3B8 0%, #C8A45D 60%, #A8853F 100%)', boxShadow: '0 0 40px rgba(232,200,130,0.30)', color: '#0B1416', fontFamily: 'Inter, sans-serif', fontWeight: '600', fontSize: '16px', cursor: 'pointer', opacity: pending ? 0.6 : 1 }}>{pending ? "Saving…" : "Join the Lagos pilot"}</button>
<p style={{ margin: '0', fontSize: '13px', color: '#8FA29D' }}>No spam. Just one message when your spot is ready.</p>
</form>
)}
</div>
</section>
</>
  );
}
