# Samuel Nnubaonye, Portfolio

This version uses separate files instead of one giant HTML file. That earlier single-file approach was making the page heavy enough to freeze on click for some visitors; this structure fixes that by letting the browser load images normally instead of as embedded text.

## Exact file structure

```
index.html
styles.css
script.js
pepper-email-audit-report.html
assets/
  favicon.svg
  portrait.jpg
  evidence/
    fintech-cro-message.png
    linkedin-job-title.png
    linkedin-location-1.png
    linkedin-location-2.png
    linkedin-seniority.png
    murals-instagram-dashboard.jpeg
    murals-website-review.png
    pukecast-19-8m.jpg
    pukecast-21-7m.jpg
    pukecast-834k.png
```

This must match exactly. `index.html` refers to every one of these files by its exact name and folder path.

Your `index.html` already has the real live URL (`https://sammified.github.io/My-Portfolio/`) built in. You should never need to open or edit `index.html` inside GitHub's web editor again.

---

## Steps

**1. Delete everything currently in your repository.**
Open `Sammified/My-Portfolio` on GitHub. Delete every file you see there (click each file, trash icon, commit). Start from empty.

**2. Unzip the file I gave you.**
You were given a single `portfolio-files.zip`. Unzip it on your computer. Inside, you'll find a folder called `portfolio_final` containing everything listed above.

**3. Upload it to GitHub.**
Click **Add file → Upload files** on your repository page. Open the unzipped `portfolio_final` folder on your computer, select everything inside it (`index.html`, `styles.css`, `script.js`, `pepper-email-audit-report.html`, and the `assets` folder), and drag all of it into the GitHub upload box at once. GitHub will preserve the folder structure automatically as long as you drag the `assets` folder itself, not just the files inside it.

**4. Wait for the upload to finish completely**, then click **Commit changes**.

**5. Confirm GitHub Pages is still set correctly.**
Settings → Pages → Source should already say "Deploy from a branch," branch `main`, folder `/ (root)`. If so, leave it alone.

**6. Test it.**
Wait a minute, then visit `https://sammified.github.io/My-Portfolio/` with a hard refresh (Ctrl+Shift+R or Cmd+Shift+R) to clear any cached old version. Click "Book a call" in the nav; it should open Calendly in a new browser tab. Scroll through the whole page and confirm nothing freezes.

## If something looks broken after this

Tell me exactly what you see and on which step. Do not try to fix it by editing files directly inside GitHub's web editor; that's what caused the corruption before. Come back here and I'll give you a corrected replacement file instead.
