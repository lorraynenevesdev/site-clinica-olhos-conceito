# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start Vite dev server
npm run build     # typecheck (tsc -b) then production build (vite build) — run this before considering any change done
npm run preview   # serve the production build locally
npm run lint       # oxlint
```

There is no test suite in this repo. There is no `lint:fix`; fix flagged issues by hand.

## Architecture

This is a single-page marketing site (React + TypeScript + Vite + Tailwind CSS v4 + lucide-react) for a real ophthalmology clinic. It has no backend, routing, or booking system — the entire conversion path is "click a button, open WhatsApp with a prefilled message."

**`src/config/clinic.ts` is the single source of truth for all content and business data** — WhatsApp number/messages, Instagram/social links, unit addresses, services, team, reviews, FAQ. Components read from this file and contain no hardcoded clinic data. When asked to change site copy, contact info, addresses, services, etc., edit this file, not the components.

**Confirmation-gated content is a deliberate pattern, not a bug.** Because this is a real clinic and much of the sourced data (addresses, phone numbers, team members, reviews) originates from Google/Instagram listings rather than the clinic itself, `clinic.ts` tracks a `confirmada`/`*Visivel` boolean per data item:
- `unidades[].confirmada` — an address/unit only renders in `Location.tsx` and `Footer.tsx` once confirmed. While none are confirmed, `Location.tsx` shows a generic "fale com a equipe" WhatsApp CTA instead of guessing.
- `equipeVisivel` (currently `false`, `equipe` empty) — `Team.tsx` renders `null` until real staff (name, photo, CRM/UF, RQE) are supplied and confirmed. Never populate this from names mentioned in reviews.
- `avaliacoesVisiveis` — gates `Reviews.tsx`; only publish reviews explicitly approved for the site.
- `pendencias` at the bottom of `clinic.ts` is a running checklist of unconfirmed data that must be resolved before real-world launch (phone numbers, hours, logo, team, reviews link, legal/technical-responsible footer info). Keep it updated when you resolve or discover a pending item — it's read by humans preparing the site for publication, not rendered on the page.

When adding a new content type that comes from an unverified external source, follow the same pattern: model it with a confirmation flag in `clinic.ts`, gate its component on that flag, and add an item to `pendencias` rather than hardcoding a guess into a component.

**Google Maps integration needs no API key**: `mapsSearchUrl()` and `mapsEmbedUrl()` in `clinic.ts` build plain `google.com/maps` search/embed URLs from an address string — don't introduce the Maps JS API or a key for this.

**WhatsApp is the only conversion mechanism.** `buildWhatsappLink()` in `clinic.ts` builds `wa.me` links from `whatsapp.numero` + a prefilled message. `WhatsAppButton.tsx` is the shared CTA component (variants: `primary`, `secondary`, `onDark`); `WhatsAppFloatButton.tsx` is the persistent floating button rendered once in `App.tsx`. Add new CTAs through `WhatsAppButton`, not raw `<a href="https://wa.me/...">` tags, so the message text stays centralized.

**Design system lives in `src/index.css`** via Tailwind v4's `@theme` block (no `tailwind.config.js` — v4 is CSS-first). Brand colors are `--color-brand-*` tokens (green, green-dark, turquoise, blue, navy, bg, bg-mint, text) consumed as Tailwind utilities (e.g. `bg-brand-green-dark`). Typography pairs a display serif (`--font-display`, Fraunces, applied via the `.font-display` class on headings) with a sans body/UI face (`--font-sans`, Manrope, the default). Reusable non-utility patterns are defined as plain CSS classes in this file: `.eyebrow` (uppercase section-label style), `.photo-frame` (applies a brand-tinted duotone overlay + saturation/contrast filter over stock photography so images from different sources read as one consistent look), and `.deco-arc` (decorative circular accents). Prefer these classes and existing Tailwind tokens over introducing new ad hoc colors or one-off typography rules.

**Section ordering** is assembled in `App.tsx`: Header → Hero → QuickLinks → Services → About → PediatricHighlight → Team (conditional) → Reviews (conditional) → Location → Faq → FinalCta → Footer → WhatsAppFloatButton (fixed, outside `<main>`). Each section is a self-contained component in `src/components/` with its own `id` used for header anchor links (scroll offset is handled globally via `scroll-margin-top` in `index.css` to clear the fixed header).

**Photography**: only three real reference photos exist (`src/assets/photos/{equipamento,consulta,pediatrico}.webp`), reused across `Hero`, `Services`, and `PediatricHighlight`. They are stock/reference images, not photos of this clinic's actual staff or premises — captions and alt text should keep saying "imagem ilustrativa" until the clinic supplies real photos (tracked in `pendencias`). `About.tsx` intentionally uses a neutral placeholder (no photo) since no real clinic-environment photo has been supplied yet.
