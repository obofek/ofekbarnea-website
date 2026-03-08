# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Who Is The User

Ofek Barnea — criminal defense attorney, legal strategist, entrepreneur. Founder of "Armed in Our Land" (חמוש בארצנו). Former IDF Military Advocate General's Corps. Zero coding experience. Explain everything in plain, simple language.

## Communication Rules

- Respond in English unless explicitly asked otherwise
- Be direct and structured — no motivational fluff, no sales clichés
- Systems thinking, logical breakdowns, clear implementation steps
- When something breaks — explain what happened and why, simply

## Project Overview

Static marketing website for Ofek's law firm and "Armed in Our Land" project. Three-page vanilla HTML/CSS/JS site in Hebrew (RTL). No frameworks, no build tools, no package.json.

**Hosting target:** GitHub Pages + custom domain

## Development

**Dev server:** `python -m http.server 3000` (configured in `.claude/launch.json` as `static-site`)

No build step, no linting, no tests. Changes are verified visually via the preview server.

### Known Issues

- **Browser caching:** Python's http.server + browser cache causes stale CSS. Always bump `?v=N` on CSS `<link>` tags after CSS changes (e.g. `style.css?v=3`). Keep the version number consistent across all three HTML files.
- **Windows + npx:** `npx` doesn't work as `runtimeExecutable` in launch.json on Windows. Use `python` instead.
- **Always verify visually:** After editing CSS/HTML, take a preview screenshot to confirm changes actually applied. Don't trust file edits alone — check computed styles if needed.

## Architecture

### Pages and Their CSS/JS

| Page | CSS | JS | Class prefix |
|------|-----|----|-------------|
| `index.html` | `style.css` | `script.js` | (none) |
| `workshops.html` | `workshops.css` | `script.js` | `.w-` |
| `tate.html` | `tate.css` | `tate.js` + `script.js` | `.t-` |

Each page has its own CSS file. There is **no shared CSS file** — nav/header styles are duplicated across all three CSS files and must be kept identical.

### JavaScript

- `script.js`: Hamburger menu toggle (shared by all pages)
- `tate.js`: Hero title randomizer + carousel with 5 slides

## Critical Rule: Shared Header

**ALL pages share the EXACT SAME header HTML and CSS. No exceptions.**

Any header/nav change must be applied to **all three CSS files AND all three HTML files simultaneously**. This includes logo size, nav links, social icons, hamburger menu, colors, spacing, and mobile breakpoint styles.

Nav CSS locations:
- `style.css` (~line 191–306)
- `workshops.css` (~line 127–224)
- `tate.css` (~line 32–155)

### Nav Structure

- Logo: `images/משרד עורכי דין ללא רקע.png` (100px height, no border-radius)
- Links: ראשי | שירותי המשרד | פודקאסט | סדנאות והכשרות | צור קשר (green CTA `#25D366`)
- Social icons row: Spotify, WhatsApp, YouTube, Facebook, Instagram, LinkedIn
- Fixed position, 100px height, `body { padding-top: 100px }` on all pages
- Hamburger menu at `max-width: 768px`
- No top-social-bar, no nav-project-logo — both were removed

## Brand Colors (Do Not Change)

- Black `#000000` — primary background
- White `#FFFFFF` — primary text
- Orange `#F05A29` — CTA buttons, accents, key highlights
- Red `#E63B3B` — urgency emphasis
- Gray `#B5B5B5` — secondary text, dividers
- WhatsApp Green `#25D366` — contact CTA button

**No gradients, no neon, no pastels.** High contrast minimalist style. Professional, boutique, authoritative. Think: Goggins (discipline), Huberman (clarity), Rogan (real), Peterson (structure) — without theatrical drama.

## Brand Font

**Secular One** (Google Fonts) — used across all pages for all text. Do not add or switch fonts.

## Key Contact Info

- WhatsApp: `+972535824942` (used in all CTAs — old number 972548314145 is deprecated)
- Spotify: `https://open.spotify.com/show/7q9zEQTl915sBsNd84j75X`
- YouTube: `https://youtube.com/playlist?list=PLqxdzFOfiqajC1ga6WbpKCWWV9lNp_h2v`
- Facebook: `https://www.facebook.com/ofek.barnea.5/`
- Instagram: `https://www.instagram.com/ofek_barnea`
- LinkedIn: `https://www.linkedin.com/in/ofek-barnea-23609a282/`

## CSS Variables

Each CSS file defines its own variables. Key shared values:
- `--orange: #F05A29`
- `--red: #E63B3B`
- `--white: #FFFFFF`
- `--font: 'Secular One', sans-serif`
- `--border: rgba(255, 255, 255, ~0.07-0.09)`
- Black background varies slightly per page (`#0A0D12`, `#000000`, `#070A0E`)

## External Dependencies

- **Google Fonts:** Secular One (preconnected CDN)
- **Font Awesome 6.5.0:** Social icons (cdnjs CDN)

## Responsive Breakpoints

- Desktop: default (1200px max-width container)
- Tablet: `max-width: 1024px`
- Mobile: `max-width: 768px` (hamburger menu, stacked layouts)

## RTL Considerations

All pages use `<html lang="he" dir="rtl">`. Flexbox and grid handle RTL automatically. Nav link separators use `border-left` (visually on the right in RTL). Always test that new elements read correctly right-to-left.

## Screenshots Workflow

User saves screenshots to `C:\Users\ofeky\OneDrive\תמונות\צילומי מסך`. When the user shares a screenshot or asks to check current state, read from that directory.
