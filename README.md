# Hunter’s Collection

A living, data-driven personal collection built with React, TypeScript, and Vite. The homepage is an editorial index; every interest uses the same exhibit architecture while carrying its own visual theme.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` for a production build.

## Deploy to GitHub Pages

The app is configured for the repository subpath at `https://hctu.github.io/HistoryHunters/`. Publish a production build with:

```bash
npm run deploy
```

This updates the `gh-pages` branch. Exhibit navigation uses URL hashes so direct links and browser refreshes work on static hosting.

## Add or edit an interest

All exhibit content lives in `src/content/interests.ts`. Each entry controls:

- catalogue number, slug, title, premise, and status;
- homepage prominence and visual theme;
- optional local hero image;
- an ordered set of editorial modules;
- related-interest passages.

Available modules are `essay`, `figure`, `quote`, `timeline`, `ledger`, and `notes`. Their TypeScript definitions are in `src/content/types.ts`; rendering is centralized in `src/components/ExhibitModules.tsx`.

To add an exhibit, add one object to the `interests` array and reference the slugs of related entries. Routing, previous/next navigation, the collection rail, and homepage entry are created automatically.

## Design boundaries

The permanent collection grammar lives in `src/styles.css`: folio numbering, the collection mark, typography, rules, navigation, content rhythm, and motion. Exhibit themes may change palette, surface, image grading, and accent treatments. They should not move the navigation, replace the body typography, or invent new control behavior.

Project imagery is stored in `public/images`. The four exhibit scenes and collection-study hero were generated as original atmospheric assets; they are not historical sources and are captioned accordingly where that distinction matters.
