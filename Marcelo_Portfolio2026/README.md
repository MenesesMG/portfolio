# Marcelo Meneses — Portfolio

A fast, self-contained personal portfolio site.

## What this is (and isn't)

- **Plain static site:** `index.html` only — HTML + CSS + vanilla JavaScript, all in one file.
- **No build step, no dependencies, no React/Vite.** You do not run `npm install` or `npm run build`. You just host the file.
- Fonts load from Google Fonts; project images load from your existing repo; company logos load from their URLs (with an automatic fallback if one fails).

> Your previous portfolio was a React + TypeScript + Vite app. This is a different, simpler approach. If you ever want this design rebuilt **as React components** to match your old setup, that can be done separately.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The entire website. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is (good practice). |
| `README.md` | This file. |

## Deploy to GitHub Pages

**Option A — Brand new repo (cleanest):**
1. Create a new repository (e.g. `portfolio-site`).
2. Upload `index.html` and `.nojekyll` to the root.
3. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)`. Save.
5. Your site goes live at `https://<username>.github.io/portfolio-site/` in a minute or two.

**Option B — Reuse your existing `portfolio` repo:**
Your existing repo builds a React app, so don't drop this at the root next to it.
Instead, create a `docs/` folder, put `index.html` + `.nojekyll` inside, then set
**Settings → Pages → Source: Deploy from a branch → main → /docs**.
(Or push to a separate `static` branch and point Pages at that branch.)

## How to edit the content

Open `index.html` and search (Ctrl/Cmd-F) for the `EDIT:` markers:

- `EDIT: HERO` — headline + intro text
- `EDIT: HERO CARDS` — the fanned cards + floating stats
- `EDIT: PROJECTS` — duplicate one `<a class="proj">…</a>` block to add a project
- `EDIT: ABOUT` — your bio
- `EDIT: STATUS WIDGET` — the glowing time/availability card
- `EDIT: SERVICES` — the four "What I Do" cards
- `EDIT: STATS` — the dark numbers band
- `EDIT: EXPERIENCE` — jobs; logos are the `src="..."` inside each `xp-thumb`
- `EDIT: TOOLBOX` — skill chips
- `EDIT: CONTACT` — email + footer links

**Colors & fonts:** top of the `<style>` block, in the `:root { ... }` variables
(e.g. `--accent` is the orange).

## Company logos

If a logo doesn't appear, its URL was blocked or expired (the CYTECH one is a
temporary Google thumbnail and will likely break). To fix permanently:

1. Save the logo image into your repo (e.g. `logos/cytech.png`).
2. In `index.html`, find that company's `xp-thumb` and replace the image `src`
   with the local path, e.g. `src="logos/cytech.png"`.

If a logo fails to load, a colored monogram tile shows automatically, so the page
never looks broken.
