/**
 * Renders the link preview card used by SMS/iMessage, social, and search
 * into public/og-preview.jpg at the 1200x630 size those scrapers expect.
 *
 * Run after changing the logo, phone number, license, or headline copy:
 *   npm run og:image
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const dataUrl = (relPath, mime) =>
  `data:${mime};base64,${readFileSync(path.join(root, relPath)).toString("base64")}`;

const logo = dataUrl("src/assets/logo.png", "image/png");
const backdrop = dataUrl("src/assets/hero-bulldozer.jpg", "image/jpeg");

const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        width: 1200px;
        height: 630px;
        position: relative;
        overflow: hidden;
        background: #1a171b;
        font-family: "Inter", system-ui, sans-serif;
        color: #f7f7f7;
      }
      .backdrop {
        position: absolute;
        inset: 0;
        background-image: url("${backdrop}");
        background-size: cover;
        background-position: center 40%;
      }
      .scrim {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(100deg, #1a171b 0%, rgba(26, 23, 27, 0.94) 42%, rgba(26, 23, 27, 0.55) 70%, rgba(26, 23, 27, 0.35) 100%),
          linear-gradient(to top, rgba(26, 23, 27, 0.9) 0%, transparent 55%);
      }
      .stripes {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 10px;
        background: repeating-linear-gradient(
          -45deg,
          #d4a017 0 14px,
          transparent 14px 28px
        );
      }
      .content {
        position: absolute;
        inset: 0;
        padding: 62px 70px 58px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .brand { display: flex; align-items: center; gap: 22px; }
      .brand img { width: 104px; height: 104px; object-fit: contain; }
      .wordmark { display: flex; flex-direction: column; gap: 3px; line-height: 1; }
      .wordmark .top {
        font-family: "Oswald", Impact, sans-serif;
        font-weight: 600;
        font-size: 30px;
        letter-spacing: 0.2em;
        color: #d4a017;
      }
      .wordmark .bottom {
        font-family: "Oswald", Impact, sans-serif;
        font-weight: 500;
        font-size: 21px;
        letter-spacing: 0.2em;
        color: rgba(247, 247, 247, 0.88);
      }
      .eyebrow {
        font-size: 17px;
        font-weight: 600;
        letter-spacing: 0.26em;
        text-transform: uppercase;
        color: #d4a017;
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .eyebrow::before {
        content: "";
        width: 48px;
        height: 2px;
        background: #d4a017;
      }
      h1 {
        margin-top: 20px;
        font-family: "Oswald", Impact, sans-serif;
        font-weight: 700;
        font-size: 76px;
        line-height: 0.98;
        letter-spacing: 0.012em;
        text-transform: uppercase;
        max-width: 21ch;
        text-shadow: 0 2px 24px rgba(0, 0, 0, 0.45);
      }
      h1 .gold { color: #e0af22; }
      .services {
        margin-top: 22px;
        font-size: 25px;
        font-weight: 500;
        color: rgba(247, 247, 247, 0.9);
      }
      .footer-row {
        display: flex;
        align-items: center;
        gap: 18px;
        flex-wrap: wrap;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        font-size: 21px;
        font-weight: 600;
        padding: 13px 24px;
        border-radius: 9px;
        border: 1.5px solid rgba(212, 160, 23, 0.55);
        background: rgba(26, 23, 27, 0.72);
        letter-spacing: 0.02em;
      }
      .pill.solid {
        background: #d4a017;
        border-color: #d4a017;
        color: #1a171b;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <div class="backdrop"></div>
    <div class="scrim"></div>
    <div class="stripes"></div>
    <div class="content">
      <div class="brand">
        <img src="${logo}" alt="" />
        <div class="wordmark">
          <div class="top">MENDOZER&nbsp;X</div>
          <div class="bottom">EARTHWORKS INC.</div>
        </div>
      </div>

      <div>
        <div class="eyebrow">Southern California</div>
        <h1>Commercial <span class="gold">Earthwork</span> Contractor</h1>
        <div class="services">Grading · Excavation · Concrete · Asphalt</div>
      </div>

      <div class="footer-row">
        <span class="pill solid">(951) 427-4904</span>
        <span class="pill">Licensed #1069854</span>
        <span class="pill">Inland Empire · OC · LA County</span>
      </div>
    </div>
  </body>
</html>`;

// Output must be exactly 1200x630 to match the dimensions declared in the
// og:image meta tags, and small enough for messaging apps to fetch inline.
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});

await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);

const out = path.join(root, "public/og-preview.jpg");
const buffer = await page.screenshot({ type: "jpeg", quality: 90 });
writeFileSync(out, buffer);

await browser.close();

console.log(`Wrote ${out} (${(buffer.length / 1024).toFixed(0)} KB)`);
