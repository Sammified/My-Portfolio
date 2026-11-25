# Tiera

Money, in the right order. A money app for small business owners, starting with a Lagos pilot.

> **Pilot rule:** Tiera never holds or moves money. It shows the plan; the owner moves money in their own bank app.

## Layout

```
tiera/
  apps/
    web/          Next.js marketing site + pilot sign-up
    mobile/       Expo app, Android first           (Phases 3–5, not built yet)
  packages/
    engine/       Priority engine: pure TS, integer kobo, Vitest
    ui-tokens/    Colours, fonts, spacing, contrast checker
    i18n/         Language strings (Yorùbá/Igbo/Hausa/Pidgin: NEEDS NATIVE REVIEW)
  supabase/
    migrations/   SQL for the sign-up table with row-level security
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

### Website

Built from the **Tiera Brand Identity** design canvas (artboards "Website: home page" and "Website: mobile").
The desktop hero with the 3D phone shows from 860px wide; below that, the mobile hero from the mobile artboard.
Section components live in `apps/web/components/site/`. Every naira figure in the hero comes from the engine
(`apps/web/lib/demo.ts`), except the "Real profit" chart card, which is decorative sample data.

```bash
pnpm --filter @tiera/web dev      # http://localhost:3000
pnpm --filter @tiera/web build && pnpm --filter @tiera/web start   # production build
```

**Sign-ups without Supabase:** the form works, validates, and logs each sign-up to the server console with the
phone number masked. Nothing is saved.

**To save sign-ups for real:**
1. Create a free project at supabase.com.
2. In the SQL editor, run `supabase/migrations/0001_pilot_signups.sql`.
3. Copy `apps/web/.env.example` to `apps/web/.env.local` and fill in `SUPABASE_URL` and `SUPABASE_ANON_KEY`
   (Project Settings → API). On Vercel, add the same two variables.
4. Read sign-ups in the Supabase dashboard (Table editor → `pilot_signups`). The anon key can insert but never read.

**Static preview for Netlify (drag and drop):**
```bash
pnpm --filter @tiera/web build && pnpm --filter @tiera/web start   # terminal 1
node apps/web/scripts/export-netlify.mjs                           # terminal 2 → dist/netlify/
```
`dist/netlify/` is plain HTML (React replaced by `scripts/netlify-client.js`), self-hosted fonts, `noindex`
headers and a Netlify Forms sign-up. Drag the folder onto app.netlify.com/drop, then in the site's settings
enable **Forms → form detection** and redeploy so sign-ups are captured.

**Deploy to Vercel:** import the repo, set Root Directory to `tiera/apps/web`. Vercel detects Next.js and pnpm.

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
5. Each tier carries at most 2× its weekly target into next week. Anything above that is reported as `dropped`
   (`carryCapMultiple` changes or disables this).
6. Family pot: a request bigger than what the pot has left cannot be approved (`canApproveFamilyRequest`).
7. All money is integer kobo. `parseNaira` parses strings without floats; inputs that aren't integer kobo throw.

**Numbers come from code, never from AI.** Any AI or voice feature may explain a plan but must read figures from the engine.

## Placeholders to fill before launch

Legal/company: `[COMPANY NAME] Ltd, RC [NUMBER], [REGISTERED ADDRESS]`, `[SUPPORT EMAIL]`, `[SUPPORT CONTACT]`,
`[WHATSAPP NUMBER]`, `[YOUR WHATSAPP LINK]`, `[HOSTING PROVIDER]`, `[DATE]`, retention and reply periods in the
privacy notice (`/privacy`, a draft for lawyer review), and `[incl. / excl.] 7.5% VAT` under pricing.

`[LICENSED BANK PARTNER]`, `[LICENSED PARTNER]`, `[YOUR REQUEST LINK]`, `[Terms]`, `[Privacy Policy]`,
testimonials, and security details all appear on the site as visible placeholders. The Moniepoint figures
(65% / 47%) in the Pain section are cited by report title only, by choice. Pricing plan features follow the design and still need sign-off.
