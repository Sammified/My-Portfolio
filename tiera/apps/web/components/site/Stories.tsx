import type React from "react";
import { StoryPhoto } from "./StoryPhoto";

/**
 * "Sound familiar?" stories: Lagos owners, their money pain, and what Tiera does about it.
 * Illustrative, not customers. Never pair these with claims that they use Tiera.
 * Photos: put 4:5 JPGs in apps/web/public/photos/ with the names below. Missing photos fall back to a
 * designed gradient, so the section looks finished either way.
 */
const stories = [
  {
    photo: "provisions.jpg",
    who: "Provisions store, Ikeja",
    pain: "“I buy goods, sell, buy goods again. At month end, nothing is in my hand.”",
    fix: "Restock gets its weekly amount first. What’s left is protected for you, not swallowed by the next order.",
    icon: "M4 7h16l-1.5 12h-13zM8 7V5a4 4 0 0 1 8 0v2",
  },
  {
    photo: "fashion.jpg",
    who: "Fashion designer, Yaba",
    pain: "“Staff get paid. Rent gets paid. Me? Whatever is left, if anything.”",
    fix: "Your salary is a tier with its own target. Every Monday plan shows it before anything optional.",
    icon: "M6 3l3 3h6l3-3 3 5-3 2v11H6V10L3 8z",
  },
  {
    photo: "food.jpg",
    who: "Restaurant owner, Surulere",
    pain: "“School fees, hospital bills, aso-ebi. Every week, someone in the family needs money.”",
    fix: "A family pot with a weekly limit. When it’s empty, Tiera helps you write a kind “not this week”.",
    icon: "M5 3v8a3 3 0 0 0 3 3v7M8 3v6M11 3v8a3 3 0 0 1-3 3M17 3c-2 2-2 6 0 8v10",
  },
  {
    photo: "pharmacy.jpg",
    who: "Pharmacy owner, Lekki",
    pain: "“Cash, POS, transfers. By Friday I can’t tell what I made or where it went.”",
    fix: "Log cash with a voice note. Tiera shows everything that came in this week, in one place.",
    icon: "M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z",
  },
  {
    photo: "phones.jpg",
    who: "Phone accessories, Computer Village",
    pain: "“One slow week and everything scatters. Growing the shop never happens.”",
    fix: "In a slow week, lower tiers wait in line and catch up first. Surplus goes to your growth pot.",
    icon: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM11 18h2",
  },
];

export function Stories() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
      <div
        className="t-snap"
        role="region"
        aria-label="Stories from Lagos business owners. Scroll sideways for more."
        tabIndex={0}
        style={{ display: "flex", gap: "16px", overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: "8px", scrollbarWidth: "thin" }}
      >
        {stories.map((s, i) => (
          <article
            key={s.photo}
            style={{
              flex: "0 0 min(300px, 82%)",
              scrollSnapAlign: "start",
              borderRadius: "28px",
              overflow: "hidden",
              background: "linear-gradient(180deg, rgba(20,32,33,0.95) 0%, rgba(10,17,18,0.95) 100%)",
              border: "1px solid #1F2D2F",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="t-photo"
              role="img"
              aria-label={`Photo: ${s.who}`}
              style={{
                position: "relative",
                aspectRatio: "4 / 5",
                maxHeight: "300px",
                width: "100%",
                background: `radial-gradient(ellipse 90% 70% at ${i % 2 ? "80%" : "20%"} 10%, rgba(46,150,120,0.55), rgba(14,59,52,0.2) 55%, rgba(5,10,11,1) 100%)`,
              }}
            >
              <svg
                aria-hidden="true"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(233,211,160,0.35)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ position: "absolute", left: "50%", top: "42%", transform: "translate(-50%, -50%)", zIndex: 0 }}
              >
                <path d={s.icon} />
              </svg>
              {/* If the file is missing, StoryPhoto hides itself and the designed fallback shows through */}
              <StoryPhoto src={`/photos/${s.photo}`} />
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(180deg, rgba(5,10,11,0) 55%, rgba(5,10,11,0.85) 100%)" }} />
              <span
                style={{
                  zIndex: 3,
                  position: "absolute",
                  left: "16px",
                  bottom: "14px",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "rgba(5,10,11,0.7)",
                  border: "1px solid rgba(236,216,168,0.3)",
                  fontSize: "12px",
                  color: "#E9D3A0",
                }}
              >
                {s.who}
              </span>
            </div>
            <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p className="t-serif" style={{ margin: 0, fontFamily: "'Instrument Serif', serif", fontSize: "22px", lineHeight: 1.25, color: "#F7F5EF" }}>
                {s.pain}
              </p>
              <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.6, color: "#A9B7B3" }}>
                <span style={{ color: "#7FC4A1", fontWeight: 600 }}>With Tiera: </span>
                {s.fix}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p style={{ margin: 0, fontSize: "12px", color: "#8FA29D" }}>Illustrative stories, not Tiera customers. Swipe or scroll sideways for more.</p>
    </div>
  );
}
