/**
 * Tiera design tokens. Shared by apps/web (Tailwind) and apps/mobile (StyleSheet).
 * Rule: one gold accent per screen. Status colours are for status only. Red is never brand.
 */
export const colors = {
  evergreen: "#0E3B34",
  midnight: "#0B1416",
  ink: "#050A0B", // near-black background
  linen: "#F4F2EC",
  gold: "#C8A45D",
  goldLight: "#E9D3A0",

  // Text on dark backgrounds
  text: "#F4F2EC",
  textMuted: "#A9B3AF", // ≥ 4.5:1 on ink and midnight
  textFaint: "#7C8A86", // decorative / large text only

  border: "rgba(244,242,236,0.10)",
  borderStrong: "rgba(244,242,236,0.18)",
  surface: "#0B1416",
  surfaceRaised: "#10201F",

  // Status only
  funded: "#2E7D5B",
  attention: "#B9772A",
  overdue: "#A3261E",
} as const;

/** Lighter status tints for text on dark backgrounds (the base status colours are too dark for small text). */
export const statusText = {
  funded: "#6FC79E",
  attention: "#E0A65C",
  overdue: "#F08A80",
} as const;

export const fonts = {
  display: "Instrument Serif",
  body: "Inter",
} as const;

export const fontSizes = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 22,
  "2xl": 28,
  "3xl": 36,
  "4xl": 48,
  "5xl": 64,
} as const;

/** 4-pt spacing scale. */
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
} as const;

/** Minimum touch target in px/dp (WCAG 2.5.5 / platform guidelines). */
export const minTouchTarget = 44;

export const motion = {
  fast: 150,
  base: 250,
  slow: 450,
} as const;

export const brand = {
  name: "Tiera",
  wordmark: "TIERA",
  tagline: "Money, in the right order.",
} as const;

export type ColorToken = keyof typeof colors;

/** CSS custom properties for the web app. */
export function cssVariables(): string {
  const lines = Object.entries(colors).map(([k, v]) => `  --tiera-${kebab(k)}: ${v};`);
  for (const [k, v] of Object.entries(statusText)) lines.push(`  --tiera-${kebab(k)}-text: ${v};`);
  return `:root {\n${lines.join("\n")}\n}`;
}

function kebab(s: string): string {
  return s.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

/** WCAG relative-luminance contrast ratio between two #RRGGBB colours. */
export function contrastRatio(a: string, b: string): number {
  const lum = (hex: string) => {
    const n = parseInt(hex.slice(1), 16);
    const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
      const s = c / 255;
      return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * ch[0]! + 0.7152 * ch[1]! + 0.0722 * ch[2]!;
  };
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x) as [number, number];
  return (hi + 0.05) / (lo + 0.05);
}
