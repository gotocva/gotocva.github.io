# CLAUDE.md

Guidance for Claude Code working in this repo.

## What this is

**Siva Labs** — the static site served at https://gotocva.github.io. Plain
HTML / CSS / vanilla JS. **No build step, no framework, no npm, no
dependencies.** What's committed to `main` is exactly what ships.

Five pages: `index.html`, `work.html`, `diary.html`, `about.html`,
`contact.html`. Shared assets in `assets/` (`styles.css`, `script.js`,
`diary.js`, `favicon.ico`).

## Ground rules

- Keep it dependency-free. Do **not** add a bundler, framework, package.json, or
  any npm tooling.
- The nav header and footer are duplicated in all five HTML files. If you change
  one, change all five so they stay in sync.
- Theme toggle (light/dark, persisted in `localStorage`) and the responsive
  hamburger nav live in `assets/script.js`.
- Preview locally with `python3 -m http.server 8123` → http://localhost:8123.

## Deployment

GitHub Pages serves the repository **root of `main` directly** (static, no
build). To publish anything: commit and `git push origin main`. The live site
updates in ~1 minute. There is no Actions/build workflow — don't add one.

---

## ★ Daily activity → Public Diary (primary workflow)

When Siva sends a daily activity, journal note, or "add this to my diary,"
follow these steps exactly, then commit and push.

### 1. Pick the date

Use **today's date** in `YYYY-MM-DD` form (the current system date) unless Siva
names a specific date — then use that. Multiple notes for the same day are fine
(add multiple entries with the same date).

### 2. Pick the category

Exactly one of: **`Life`**, **`Travel`**, **`Learning`**, **`Stories`**.
Infer the best fit from the note. Only ask if it's genuinely ambiguous.

- `Life` — everyday happenings, errands, family, health, work life
- `Travel` — trips, places, journeys
- `Learning` — something learned, built, read, or figured out
- `Stories` — a story someone told, or a small narrative worth keeping

### 3. Add the entry to `assets/diary.js`

Append one object to the `ENTRIES` array (near the top of the file):

```js
const ENTRIES = [
  { date: "2026-08-06", category: "Life", body: "…existing entry…" },
  { date: "2026-08-07", category: "Learning", body: "Your new entry text." },
];
```

Rules for `body`:

- It is a **double-quoted JavaScript string**. Escape any `"` as `\"` and any
  backslash `\` as `\\`. Keep it on one line (no raw line breaks — use a period
  or `\n` if you must).
- Do **not** HTML-escape it. The renderer escapes `& < > "` at display time, so
  writing `&amp;` here would show the literal text.
- Array order does not matter — entries are sorted by date, newest first.

Do not touch anything else in `diary.js` (the grouping/render code below the
array is stable).

### 4. Bump the cache-buster in `diary.html`

Near the bottom of `diary.html`:

```html
<script src="assets/diary.js?v=20260806"></script>
```

Change `?v=YYYYMMDD` to today's date (e.g. `?v=20260807`). This forces browsers
to fetch the updated `diary.js`. **This is the only place to change it.**

### 5. Sanity-check the JS

```bash
node --check assets/diary.js
```

Must pass (valid JavaScript) before committing.

### 6. Refresh the sitemap date (SEO)

In `sitemap.xml`, update the `<lastmod>` for the `diary.html` `<url>` entry to
today's date (`YYYY-MM-DD`). Leave the other entries alone.

### 7. Commit and push

```bash
git add assets/diary.js diary.html sitemap.xml
git commit -m "diary: add entry for 2026-08-07"
git push origin main
```

### 8. Confirm

Tell Siva the entry was added and pushed, and that it'll be live at
https://gotocva.github.io/diary.html in about a minute. Quote the entry's date,
category, and text back so he can confirm it's right.
