# Samuel Nnubaonye, Portfolio

Every file lives at the top level now. No `assets` folder, no subfolders at all. The last version used a folder for images, and GitHub's drag-and-drop upload didn't preserve that folder structure reliably, which is why the images broke. Flat files removes that failure point entirely: there's no structure to lose.

## Exact file list (all in one folder, no subfolders)

```
index.html
styles.css
script.js
pepper-email-audit-report.html
favicon.svg
portrait.jpg
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

Sixteen files. `index.html` refers to every one of them by exact filename, with no folder path in front of any of them. Keep the filenames exactly as they are.

`index.html` already has your real live URL (`https://sammified.github.io/My-Portfolio/`) built into it. Don't open or edit `index.html` inside GitHub's web editor.

---

## Steps

**1. Delete everything currently in your repository.**
Open `Sammified/My-Portfolio` on GitHub. Delete every file and folder you see there. Start from empty.

**2. Unzip the file I gave you.**
Unzipping `portfolio-files.zip` puts all sixteen files (plus this README) directly into a new folder, no subfolder to open, they're sitting loose right there.

**3. Select all sixteen files and drag them in together.**
On your GitHub repository page, click **Add file → Upload files**. In the unzipped folder on your computer, select all sixteen files (Ctrl+A or Cmd+A while inside that folder), then drag that whole selection into the GitHub upload box in one motion.

**4. Wait for the upload bar to reach 100% for every file**, then click **Commit changes**.

**5. Confirm your repository's file list now shows sixteen files, all at the top level, no folder icons.**
If you see a folder icon anywhere, something went in wrong; delete it and re-drag just the files inside it.

**6. Test the live site.**
Wait a minute, then visit `https://sammified.github.io/My-Portfolio/` with a hard refresh (Ctrl+Shift+R or Cmd+Shift+R). Check that your portrait shows in the hero, every evidence screenshot opens when clicked, and "Book a call" opens Calendly in a new tab without freezing anything.

## If something's still wrong

Send a screenshot of your repository's file list first, before describing the symptom. That tells me immediately whether the upload itself went in correctly, which is faster than guessing from a description alone.
