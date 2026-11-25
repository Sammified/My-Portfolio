// Builds a static, dependency-free copy of the site for Netlify drag-and-drop.
// Usage: pnpm --filter @tiera/web build && pnpm --filter @tiera/web start   (in another terminal)
//        node scripts/export-netlify.mjs [baseUrl] [outDir]
import { mkdir, readFile, writeFile, copyFile, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const web = join(here, "..");
const base = process.argv[2] ?? "http://localhost:3000";
const out = process.argv[3] ?? join(web, "../../dist/netlify");

const client = await readFile(join(here, "netlify-client.js"), "utf8");
await rm(out, { recursive: true, force: true });
await mkdir(join(out, "fonts"), { recursive: true });

const fonts = new Set();
async function inlineCss(html) {
  const links = [...html.matchAll(/<link rel="stylesheet" href="([^"]+\.css)"[^>]*>/g)];
  for (const [tag, href] of links) {
    let css = await (await fetch(base + href)).text();
    css = css.replace(/url\(\/_next\/static\/media\/([^)]+)\)/g, (_, f) => (fonts.add(f), `url(fonts/${f})`));
    html = html.replace(tag, () => `<style>${css}</style>`);
  }
  return html;
}

function strip(html) {
  return html
    .replace(/<script(?![^>]*type="application\/json")[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/<link rel="preload"[^>]*as="script"[^>]*\/?>/g, "")
    .replace(/<link rel="(?:modulepreload|preload)"[^>]*href="\/_next\/static\/chunks[^>]*\/?>/g, "")
    .replace(/<link rel="preload" href="\/_next\/static\/media\/([^"]+)"/g, (_, f) => (fonts.add(f), `<link rel="preload" href="fonts/${f}"`))
    .replace(/<link rel="icon"[^>]*\/?>/g, "");
}

function netlifyForm(html) {
  // Turn the server-action form into a Netlify Form; JS submits it with fetch, plain POST is the fallback.
  html = html.replace(/<form data-signup="[^"]*"[^>]*>/, (tag) => {
    const style = (tag.match(/ style="[^"]*"/) || [""])[0];
    const cls = (tag.match(/ class="[^"]*"/) || [""])[0];
    return `<form data-signup="" name="pilot-signup" method="POST" action="index.html?joined=1#join" data-netlify="true" netlify-honeypot="company" novalidate=""${cls}${style}><input type="hidden" name="form-name" value="pilot-signup"/>`;
  });
  return html.replace(/<input type="hidden" name="\$ACTION[^>]*>/g, "");
}

const head = `<meta name="robots" content="noindex, nofollow"/>`;
const pages = [
  ["/", "index.html"],
  ["/privacy", "privacy.html"],
];
for (const [path, file] of pages) {
  let html = await (await fetch(base + path)).text();
  html = await inlineCss(html);
  html = strip(html);
  if (file === "index.html") html = netlifyForm(html);
  html = html
    .replace(/src="\/photos\//g, 'src="photos/')
    .replace(/href="\/privacy"/g, 'href="privacy.html"')
    .replace(/href="\/"/g, 'href="index.html"')
    .replace("</head>", () => `${head}</head>`)
    .replace("</body>", () => `<script>${client}</script></body>`);
  if (/\/_next\//.test(html)) console.warn(`warning: ${file} still references /_next/`);
  await writeFile(join(out, file), html);
}
for (const f of fonts) await copyFile(join(web, ".next/static/media", f), join(out, "fonts", basename(f)));

// Owner photos for the stories row (optional): apps/web/public/photos/*.jpg
const photos = join(web, "public/photos");
await mkdir(join(out, "photos"), { recursive: true });
if (existsSync(photos)) for (const f of await readdir(photos)) if (/\.(jpe?g|png|webp)$/i.test(f)) await copyFile(join(photos, f), join(out, "photos", f));

await writeFile(join(out, "robots.txt"), "User-agent: *\nDisallow: /\n");
await writeFile(
  join(out, "_headers"),
  `/*\n  X-Robots-Tag: noindex, nofollow\n  X-Frame-Options: DENY\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n`,
);
console.log(`Exported ${pages.length} pages and ${fonts.size} font files to ${out}`);
