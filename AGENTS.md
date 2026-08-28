# Contributor and agent guidance

## BIOGLOW™ brand system

Read [`docs/brand/bioglow.md`](docs/brand/bioglow.md) before changing
BIOGLOW™ season colors, copy, or artwork.

- `src/brand/bioglow.tokens.json` is the canonical color source.
- `src/brand/bioglow.css` is generated. Never edit it directly.
- After token changes, run `npm run brand:generate` and
  `npm run brand:check`.
- Use CSS custom properties instead of duplicating BIOGLOW HEX values.
- Select Founders or Future accents explicitly with
  `data-bioglow-edition`; do not create an implicit default.
- Keep BIOGLOW uppercase, do not add periods, and include `™` on its first
  headline and body mentions.
- Only use official source-provided logo files. Never recreate or extract a
  logo from the style-guide PDF, recolor it, distort it, crop its safety zone,
  or add elements.
- Follow [`public/brand/bioglow/README.md`](public/brand/bioglow/README.md)
  when approved artwork becomes available.
