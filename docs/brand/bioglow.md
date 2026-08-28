# BIOGLOW™ brand guide

BIOGLOW™ is the 2026-2027 FIRST® LEGO® League season theme. This
project guide turns the official BIOGLOW Style Guide (reference FL078) into
reusable implementation guidance without redistributing the source PDF.

## Sources of truth

| Concern | Source |
| --- | --- |
| Official color values | [`src/brand/bioglow.tokens.json`](../../src/brand/bioglow.tokens.json) |
| CSS custom properties | [`src/brand/bioglow.css`](../../src/brand/bioglow.css), generated from the JSON tokens |
| Logo asset policy | [`public/brand/bioglow/README.md`](../../public/brand/bioglow/README.md) |
| Official brand rules | 2026-2027 BIOGLOW Style Guide, FL078 |

The official guide does not specify a font family or assign general UI roles
such as success, warning, or error to these colors. Do not invent those rules
and present them as official guidance.

## Official usage rules

### Name and trademark

- Always write `BIOGLOW` in capital letters.
- Do not insert periods into the name.
- Use `BIOGLOW™` for its first mention in a headline and its first mention
  in body copy. Later mentions may omit the mark.
- Do not use the wordmark artwork as a substitute for a text mention in body
  copy.

### Logo artwork

- Use only official, source-provided full-color or one-color files.
- Prefer the full-color logo whenever possible.
- Do not recolor, distort, stretch, redraw, crop, or add elements to the logo.
- Do not add photos, artwork, other logos, team numbers, or words to a logo
  file.
- Preserve the built-in safety zone in the supplied file.
- Keep clear space equal to at least one quarter of `X` on every side, where
  `X` is the height of the complete lockup.
- Render the logo at least 72 pixels wide in digital uses and 1 inch wide in
  print.
- Pair season artwork only with the appropriate official FIRST LEGO League
  program or division logo and its official program-specific color.

No approved logo artwork is currently stored in this repository. The images
inside the source PDF are examples, not reusable asset files.

## Official palette

The descriptive names below are project token handles for otherwise unlabeled
swatches. The numeric values come directly from FL078.

| Token | HEX | RGB | CMYK | PMS | CSS custom property |
| --- | --- | --- | --- | --- | --- |
| Light green | `#C6DE94` | 198, 222, 148 | 27, 0, 59, 0 | 365 C | `--bioglow-core-light-green` |
| Green | `#70A334` | 112, 163, 52 | 68, 12, 100, 1 | 369 C | `--bioglow-core-green` |
| Dark green | `#2C5535` | 44, 85, 53 | 86, 40, 91, 39 | 357 C | `--bioglow-core-dark-green` |
| Yellow | `#F0E973` | 240, 233, 115 | 8, 1, 78, 0 | 3935 C | `--bioglow-core-yellow` |
| Black | `#000000` | 0, 0, 0 | 0, 0, 0, 100 | Black 6 C | `--bioglow-core-black` |
| Founders Edition purple | `#D59CD6` | 213, 156, 214 | 16, 43, 0, 0 | 7438 C | `--bioglow-founders-purple` |
| Future Edition teal | `#22D8C2` | 34, 216, 194 | 63, 0, 35, 0 | 333 C | `--bioglow-future-teal` |

Use the CSS variables instead of repeating HEX values in application styles:

```css
.seasonCard {
  color: var(--bioglow-core-black);
  background: var(--bioglow-core-light-green);
  border-color: var(--bioglow-core-dark-green);
}
```

## Edition accents

Both edition colors are available, but neither is a global default. Set the
edition explicitly on the relevant container:

```jsx
<section data-bioglow-edition="future">
  <a className="seasonLink" href="/season">
    Learn about BIOGLOW™
  </a>
</section>
```

```css
.seasonLink {
  background: var(--bioglow-edition-accent);
}
```

Use `data-bioglow-edition="founders"` for Founders Edition purple and
`data-bioglow-edition="future"` for Future Edition teal. The accent variable
is intentionally undefined outside those contexts so an edition cannot be
selected accidentally.

## Project accessibility guidance

This section is project guidance derived from the official HEX values, not an
official FIRST or LEGO brand rule. The combinations below meet the WCAG 4.5:1
contrast threshold for normal text.

| Background | Normal text colors and contrast ratios |
| --- | --- |
| Light green | Black (14.28:1), dark green (5.81:1) |
| Green | Black (6.98:1) |
| Dark green | Light green (5.81:1), yellow (6.76:1), Future teal (4.75:1) |
| Yellow | Black (16.61:1), dark green (6.76:1) |
| Black | Light green (14.28:1), green (6.98:1), yellow (16.61:1), Founders purple (9.56:1), Future teal (11.67:1) |
| Founders purple | Black (9.56:1) |
| Future teal | Black (11.67:1), dark green (4.75:1) |

Recheck any unlisted foreground/background pair before using it for text.
Do not rely on color alone to communicate state or meaning, and preserve
visible focus indicators for interactive elements.

## Changing tokens

Edit the JSON source, regenerate the CSS, and verify that the committed output
is current:

```sh
npm run brand:generate
npm run brand:check
```

Do not edit `src/brand/bioglow.css` directly. The production build runs the
brand check and fails when the generated file is stale or token metadata is
malformed.

## Attribution

FIRST® is a trademark of For Inspiration and Recognition of Science and
Technology. LEGO® is a registered trademark of the LEGO Group. FIRST® LEGO®
League and BIOGLOW™ are jointly held trademarks of FIRST and the LEGO Group.
© 2026 FIRST and the LEGO Group. All rights reserved.
