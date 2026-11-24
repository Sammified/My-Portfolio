import { describe, expect, it } from "vitest";
import { colors, contrastRatio, statusText } from "../src";

const bgs = [colors.ink, colors.midnight, colors.surfaceRaised, colors.evergreen];

describe("contrast (WCAG AA 4.5:1 for body text)", () => {
  for (const bg of bgs) {
    it(`text, muted text, gold and status text pass on ${bg}`, () => {
      for (const fg of [colors.text, colors.textMuted, colors.gold, ...Object.values(statusText)]) {
        if (bg === colors.evergreen && fg === colors.textMuted) continue; // muted is not used on evergreen
        expect(contrastRatio(fg, bg), `${fg} on ${bg}`).toBeGreaterThanOrEqual(4.5);
      }
    });
  }
  it("ink text on gold buttons passes", () => {
    expect(contrastRatio(colors.ink, colors.gold)).toBeGreaterThanOrEqual(4.5);
  });
});
