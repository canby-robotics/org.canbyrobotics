# org.canbyrobotics

Website for Canby Robotics

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/canby-robotics/org.canbyrobotics)

The committed [`netlify.toml`](netlify.toml) configures the production build and
publish directory. Netlify automatically provides its maintained OpenNext
adapter for Next.js, so no Netlify-specific runtime dependency is required.

To deploy manually, import this repository in Netlify and deploy it with the
settings detected from `netlify.toml`.

## Local development

Use Node.js 24 (see [`.nvmrc`](.nvmrc)), then install and start the app:

```sh
npm ci
npm run dev
```

## Brand system

The 2026-2027 BIOGLOW™ palette and usage rules are codified for application
code and contributors. Founders is the project's only approved edition;
Future teal is retained as reference-only source metadata.

- [`docs/brand/bioglow.md`](docs/brand/bioglow.md) is the implementation guide.
- [`src/brand/bioglow.tokens.json`](src/brand/bioglow.tokens.json) is the
  canonical color source.
- [`src/brand/bioglow.assets.json`](src/brand/bioglow.assets.json) catalogs
  approved web artwork and its exact intrinsic dimensions.
- [`public/brand/bioglow/README.md`](public/brand/bioglow/README.md) governs
  official logo selection, use, and intake.
- [`AGENTS.md`](AGENTS.md) contains concise rules for automated contributors.

After changing tokens, regenerate the committed CSS. After changing tokens or
artwork, run the complete brand check:

```sh
npm run brand:generate
npm run brand:check
```

## Design system

The site uses Primer Brand through a project-owned light theme and reusable
gridline layout components. See [`docs/design-system.md`](docs/design-system.md)
for the dependency boundary, semantic tokens, layout rules, and approved
component surface.
