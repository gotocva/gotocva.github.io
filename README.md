# Siva Labs — [gotocva.github.io](https://gotocva.github.io)

Personal portfolio and public diary for **Siva Bharathy**. A static,
dependency-free site (plain HTML / CSS / vanilla JS) — no build step, no
framework, no npm. A companion to [sivabharathy.in](https://sivabharathy.in).

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, featured projects, recent writing, contact CTA |
| `work.html` | The four browser tools (Blockchain, AES, Polymarket, SQLite) |
| `diary.html` | Public diary — filterable journal grouped Month → Week → Day |
| `about.html` | Bio, stats, and tech stack |
| `contact.html` | Contact form (`mailto:` fallback) and links |

## Assets

```
assets/
├── styles.css   # all styling + light/dark theme tokens
├── script.js    # theme toggle (localStorage) + responsive nav
├── diary.js     # diary ENTRIES data + Month/Week/Day render + filters
└── favicon.ico
```

## Deploy

Push to `main` — GitHub Pages serves the repository root directly. There is no
build; what's in the repo is what ships.

## Add a diary entry

Append one object to the `ENTRIES` array in `assets/diary.js` and bump the
`?v=` cache-buster on the `diary.js` `<script>` in `diary.html`. Entries sort
by date automatically (newest first). See [CLAUDE.md](CLAUDE.md) for the exact,
repeatable steps — Claude can add an entry from a plain-text note and publish
it for you.

## Design

Warm cream / ink palette with a `#c0392b` accent · Cormorant Garamond (display),
Source Serif 4 (body), Space Mono (labels). Design language adapted from
prachalabs.com.

© 2026 Siva Bharathy.
