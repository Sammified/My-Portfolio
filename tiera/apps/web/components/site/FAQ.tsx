import type React from "react";

export function FAQ() {
  return (
<>
<section id="faq" className="t-sec" style={{ position: 'relative', overflow: 'hidden', padding: '128px 0' }}>
<div className="t-wrap" style={{ position: 'relative', maxWidth: '860px', margin: '0 auto', padding: '0 32px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '22px' }}>
<p style={{ margin: '0', padding: '8px 16px', borderRadius: '999px', border: '1px solid rgba(236,216,168,0.3)', background: 'rgba(14,22,23,0.7)', fontSize: '12px', fontWeight: '500', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E9D3A0' }}>Questions</p>
<h2 style={{ margin: '0', fontWeight: '500', fontSize: 'clamp(36px, 4.6vw, 62px)', letterSpacing: '-0.05em', lineHeight: '1.04', color: '#F7F5EF' }}>What owners ask <span style={{ fontFamily: '\'Instrument Serif\', serif', fontStyle: 'italic', fontWeight: '400', letterSpacing: '-0.01em', color: '#E9D3A0', paddingRight: '8px' }}>before they join.</span></h2>
</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
<details style={{ padding: '24px 28px', borderRadius: '22px', background: 'linear-gradient(180deg, rgba(20,32,33,0.95), rgba(10,17,18,0.95))', border: '1px solid #1F2D2F' }}>
<summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>Most of my sales are cash. Can I still use Tiera?</summary>
<p style={{ margin: '14px 0 0', fontSize: '16px', lineHeight: '1.65', color: '#A9B7B3' }}>Yes. Send a voice note or type the amount, and Tiera logs cash the same way it logs transfers and POS payments. Your order works on all of it.</p>
</details>
<details style={{ padding: '24px 28px', borderRadius: '22px', background: 'linear-gradient(180deg, rgba(20,32,33,0.95), rgba(10,17,18,0.95))', border: '1px solid #1F2D2F' }}>
<summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>If Tiera doesn't hold my money, how does it move?</summary>
<p style={{ margin: '14px 0 0', fontSize: '16px', lineHeight: '1.65', color: '#A9B7B3' }}>During the pilot, Tiera shows you exactly what goes where each week, and you move it in your own bank app. Automatic moves come later through [LICENSED BANK PARTNER], and even then nothing moves until you tap approve.</p>
</details>
<details style={{ padding: '24px 28px', borderRadius: '22px', background: 'linear-gradient(180deg, rgba(20,32,33,0.95), rgba(10,17,18,0.95))', border: '1px solid #1F2D2F' }}>
<summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>Do I need an expensive phone?</summary>
<p style={{ margin: '14px 0 0', fontSize: '16px', lineHeight: '1.65', color: '#A9B7B3' }}>No. Tiera works in the app and on WhatsApp. If you can send a WhatsApp voice note, you can use Tiera.</p>
</details>
<details style={{ padding: '24px 28px', borderRadius: '22px', background: 'linear-gradient(180deg, rgba(20,32,33,0.95), rgba(10,17,18,0.95))', border: '1px solid #1F2D2F' }}>
<summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>Is my money and information safe?</summary>
<p style={{ margin: '14px 0 0', fontSize: '16px', lineHeight: '1.65', color: '#A9B7B3' }}>Your money stays in your own bank. Tiera will never ask for your PIN or password. [SECURITY AND DATA PROTECTION DETAILS]</p>
</details>
<details style={{ padding: '24px 28px', borderRadius: '22px', background: 'linear-gradient(180deg, rgba(20,32,33,0.95), rgba(10,17,18,0.95))', border: '1px solid #1F2D2F' }}>
<summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>Will Tiera say no to my family for me?</summary>
<p style={{ margin: '14px 0 0', fontSize: '16px', lineHeight: '1.65', color: '#A9B7B3' }}>No. You always decide. Tiera shows what's left in the family pot and can help you write a kind "not this month" reply if you want one.</p>
</details>
<details style={{ padding: '24px 28px', borderRadius: '22px', background: 'linear-gradient(180deg, rgba(20,32,33,0.95), rgba(10,17,18,0.95))', border: '1px solid #1F2D2F' }}>
<summary style={{ cursor: 'pointer', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>What happens in a slow week?</summary>
<p style={{ margin: '14px 0 0', fontSize: '16px', lineHeight: '1.65', color: '#A9B7B3' }}>The top tiers get funded first. Whatever can't be funded waits in line and gets topped up first when money comes back. Nothing is forgotten.</p>
</details>
</div>
</div>
</section>
</>
  );
}
