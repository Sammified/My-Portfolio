# Tiera

Money, in the right order. A money app for small business owners, starting with a Lagos pilot.

> **Pilot rule:** Tiera never holds or moves money. It shows the plan; the owner moves money in their own bank app.

## Layout

```
tiera/
  apps/
    web/          Next.js marketing site            (Phase 2, not built yet)
    mobile/       Expo app, Android first           (Phases 3–5, not built yet)
  packages/
    engine/       Priority engine: pure TS, integer kobo, Vitest
    ui-tokens/    Colours, fonts, spacing, contrast checker
```

## Requirements

- Node 20+ (tested on 22)
- pnpm 10 (`corepack enable` or `npm i -g pnpm`)

## Run

```bash
cd tiera
pnpm install
pnpm test        # engine + token tests
pnpm typecheck
```

Watch mode for the engine: `pnpm --filter @tiera/engine test:watch`

## Priority engine (`@tiera/engine`)

```ts
import { allocateWeek, naira, formatNaira } from "@tiera/engine";

const plan = allocateWeek({
  income: naira(150_000),
  tiers: [
    { id: "restock", name: "Restock",     weeklyTarget: naira(120_000) },
    { id: "salary",  name: "Your salary", weeklyTarget: naira(40_000) },
    { id: "family",  name: "Family pot",  weeklyTarget: naira(20_000) },
    { id: "growth",  name: "Growth",      weeklyTarget: naira(15_000) },
  ],
  carriedShortfalls: {}, // last week's plan.nextCarriedShortfalls
});
// restock funded, salary part funded (₦10,000 short), family + growth waiting.
// plan.nextCarriedShortfalls → feed into next week.
```

Rules:
1. Carried shortfalls are paid first, in tier order.
2. Then this week's targets, top to bottom.
3. Any unpaid remainder is carried to next week (postponed, never cancelled).
4. What's left after every tier is surplus.
5. Family pot: a request bigger than what the pot has left cannot be approved (`canApproveFamilyRequest`).
6. All money is integer kobo. `parseNaira` parses strings without floats; inputs that aren't integer kobo throw.

**Numbers come from code, never from AI.** Any AI or voice feature may explain a plan but must read figures from the engine.
