import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { colors, statusText } from "@tiera/ui-tokens";

const css = readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
const get = (name: string) => new RegExp(`--color-${name}:\\s*(#[0-9A-Fa-f]{6})`).exec(css)?.[1]?.toUpperCase();

describe("globals.css matches @tiera/ui-tokens", () => {
  it.each([
    ["evergreen", colors.evergreen], ["midnight", colors.midnight], ["ink", colors.ink], ["linen", colors.linen],
    ["gold", colors.gold], ["gold-light", colors.goldLight], ["muted", colors.textMuted], ["raised", colors.surfaceRaised],
    ["funded", colors.funded], ["attention", colors.attention], ["overdue", colors.overdue],
    ["funded-text", statusText.funded], ["attention-text", statusText.attention], ["overdue-text", statusText.overdue],
  ])("%s", (name, hex) => expect(get(name)).toBe(hex.toUpperCase()));
});
