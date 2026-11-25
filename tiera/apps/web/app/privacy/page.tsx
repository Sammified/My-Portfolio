import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy notice: Tiera",
  description: "How Tiera handles the details you share when you join the Lagos pilot.",
};

const h2: React.CSSProperties = { margin: "40px 0 12px", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", color: "#F7F5EF" };
const p: React.CSSProperties = { margin: "0 0 14px", fontSize: "16px", lineHeight: 1.7, color: "#C9D3D0" };
const li: React.CSSProperties = { margin: "0 0 8px", fontSize: "16px", lineHeight: 1.7, color: "#C9D3D0" };

/**
 * DRAFT privacy notice for the pilot sign-up, written to the Nigeria Data Protection Act 2023.
 * Have a Nigerian data protection lawyer review it before launch. Fill every [BRACKET].
 */
export default function Privacy() {
  return (
    <div className="t-site" style={{ minHeight: "100vh", background: "#050A0B", color: "#F4F2EC" }}>
      <div className="t-wrap" style={{ maxWidth: "760px", margin: "0 auto", padding: "32px 32px 96px" }}>
        <a href="/" className="t-tap" style={{ gap: "12px", color: "#F4F2EC", textDecoration: "none" }}>
          <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true"><rect x="4" y="9" width="40" height="7" rx="1" fill="#C8A45D" /><rect x="15" y="20.5" width="18" height="7" rx="1" fill="#F4F2EC" /><rect x="20" y="32" width="8" height="7" rx="1" fill="#F4F2EC" /></svg>
          <span style={{ fontSize: "16px", fontWeight: 500, letterSpacing: "0.3em" }}>TIERA</span>
        </a>

        <p role="note" style={{ margin: "40px 0 0", padding: "14px 18px", borderRadius: "14px", border: "1px dashed rgba(224,166,92,0.6)", fontSize: "14px", color: "#E0A65C" }}>
          Draft. To be reviewed by a Nigerian data protection lawyer before launch.
        </p>

        <h1 style={{ margin: "28px 0 8px", fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 500, letterSpacing: "-0.05em", lineHeight: 1.05 }}>
          Privacy notice
        </h1>
        <p style={{ ...p, color: "#8FA29D" }}>Last updated: [DATE]</p>

        <h2 style={h2}>Who we are</h2>
        <p style={p}>
          Tiera is run by [COMPANY NAME] Ltd, RC [NUMBER], [REGISTERED ADDRESS], Lagos, Nigeria. We decide how your
          details are used, which makes us the data controller. Contact us at [SUPPORT EMAIL] or on WhatsApp at
          [WHATSAPP NUMBER].
        </p>

        <h2 style={h2}>What we collect on this website</h2>
        <ul style={{ margin: 0, paddingLeft: "20px", listStyle: "disc" }}>
          <li style={li}>Your name</li>
          <li style={li}>Your WhatsApp number</li>
          <li style={li}>The kind of business you run</li>
          <li style={li}>That you agreed to be contacted, and when</li>
        </ul>
        <p style={p}>
          That is all. This website uses no advertising or tracking cookies and no analytics. We never ask for your
          BVN, bank PIN, OTP or passwords.
        </p>

        <h2 style={h2}>Why we use it</h2>
        <p style={p}>
          Only to contact you about joining the Lagos pilot and to set up your account if you join. We rely on your
          consent, which you give by ticking the box on the form. You can withdraw it at any time.
        </p>

        <h2 style={h2}>Who we share it with</h2>
        <p style={p}>
          We never sell your details. They are stored by our hosting provider, [HOSTING PROVIDER], whose servers may
          be outside Nigeria. Where that happens, we rely on the safeguards the Nigeria Data Protection Act 2023
          allows for transfers abroad. We share details with authorities only when the law requires it.
        </p>

        <h2 style={h2}>How long we keep it</h2>
        <p style={p}>
          Until the pilot ends and [NUMBER] months after, unless you join Tiera or ask us to delete it sooner.
        </p>

        <h2 style={h2}>Your rights</h2>
        <ul style={{ margin: 0, paddingLeft: "20px", listStyle: "disc" }}>
          <li style={li}>Ask what we hold about you and get a copy</li>
          <li style={li}>Ask us to correct it</li>
          <li style={li}>Ask us to delete it</li>
          <li style={li}>Withdraw your consent or object to how we use it</li>
          <li style={li}>Complain to the Nigeria Data Protection Commission (NDPC)</li>
        </ul>
        <p style={p}>Message [SUPPORT EMAIL] and we will reply within [NUMBER] days.</p>

        <h2 style={h2}>Keeping it safe</h2>
        <p style={p}>[SECURITY DETAILS: encryption, who on the team can access sign-ups, how access is controlled.]</p>

        <h2 style={h2}>Changes</h2>
        <p style={p}>If we change this notice, we will update the date above and tell pilot members on WhatsApp.</p>

        <p style={{ ...p, marginTop: "48px" }}>
          <a href="/">Back to Tiera</a>
        </p>
      </div>
    </div>
  );
}
