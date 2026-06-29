# Ktech Việt Nam Website

Technical foundation for the bilingual Ktech Việt Nam corporate profile website.

## Prerequisites

- Node.js 22 or newer
- npm 10 or newer

## Commands

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server after building:

```bash
npm run start
```

Run ESLint:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npm run typecheck
```

Generate website image assets:

```bash
npm run assets:build
```

## Source Assets And Generated Assets

Approved originals live in `assets/source-approved/`. These files are immutable and must not be deleted, moved, renamed, overwritten, recompressed, or otherwise modified.

Website-ready assets are generated under `public/images/`:

- `public/images/brand/`
- `public/images/hero/`
- `public/images/capabilities/`

The asset pipeline is defined in `scripts/process-assets.mjs`. It verifies the expected source files, auto-orients responsive images, avoids upscaling, and generates deterministic WebP and AVIF variants for the website. The logo is copied with a normalized filename.

## Bilingual Routes

Vietnamese is the default locale.

- `/` redirects to `/vi`
- `/vi` serves the Vietnamese foundation page
- `/en` serves the English foundation page

Supported locales are defined in `src/i18n/locales.ts`. Dictionaries live in `src/content/vi/` and `src/content/en/`, and page components load user-facing placeholder copy from those dictionaries.

## Project Shape

```text
src/
├── app/
│   ├── [locale]/
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
├── content/
├── i18n/
├── lib/
├── styles/
└── types/
```
