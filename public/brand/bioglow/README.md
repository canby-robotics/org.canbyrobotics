# BIOGLOW™ logo assets

This directory contains 11 official RGB PNGs for BIOGLOW™ web design: six
general marks, three partner lockups, and two Founders Edition marks. Founders
is the only approved project edition.

## Sources of truth

- [`src/brand/bioglow.assets.json`](../../../src/brand/bioglow.assets.json)
  provides stable IDs, public paths, intrinsic dimensions, usage metadata,
  source filenames, and SHA-256 digests.
- [`docs/brand/bioglow.md`](../../../docs/brand/bioglow.md) contains the
  official usage rules and project guidance.
- `npm run brand:check` verifies that every PNG is present and byte-identical
  to the approved manifest entry.

## Approved asset checklist

Before replacing or adding a logo file:

1. Obtain it from an official FIRST or LEGO asset package. Do not extract,
   trace, screenshot, or recreate artwork from a style-guide PDF.
2. Confirm that it is a source-provided RGB PNG and is appropriate for the
   Founders Edition project.
3. Preserve the file contents, aspect ratio, transparent canvas, and built-in
   safety zone. Renaming the file is allowed; modifying the artwork is not.
4. Do not optimize, resize, trim, or re-encode the repository original.
5. Add or update its manifest entry with exact dimensions, byte count, and
   SHA-256 digest.
6. Run `npm run brand:check`.

## File naming

The approved files use these patterns:

```text
bioglow-base-{horizontal|vertical}-{full-color|one-color}.png
bioglow-founders-{horizontal|vertical}-full-color.png
bioglow-lockup-{canopy|first|first-lego-league}-full-color.png
bioglow-wordmark-{black|white}.png
```

The filename describes the official source file. It does not authorize
converting one variant into another.

## Choosing an asset

Use the manifest ID rather than parsing filenames.

| Manifest ID | Intended use | Background |
| --- | --- | --- |
| `founders-horizontal-full-color` | Preferred wide Founders Edition season mark | Any |
| `founders-vertical-full-color` | Founders Edition mark for a taller or stacked region | Any |
| `base-horizontal-full-color` | General season mark in a wide composition | Any |
| `base-vertical-full-color` | General season mark in a taller composition | Any |
| `base-horizontal-one-color` | One-color general fallback | Light |
| `base-vertical-one-color` | One-color general fallback in a taller composition | Light |
| `wordmark-black` | Text-only mark | Light |
| `wordmark-white` | Text-only reverse mark | Dark |
| `lockup-canopy-full-color` | Communication specifically representing FIRST Canopy | Any |
| `lockup-first-full-color` | Communication specifically paired with FIRST | Any |
| `lockup-first-lego-league-full-color` | Communication specifically paired with FIRST LEGO League | Any |

Background entries are project layout recommendations, not additional
official brand rules.

Full-color artwork remains the default. Partner lockups are for their named
communication context, not interchangeable decoration.

## Transparent canvases

Several official exports intentionally place the visible artwork inside a
larger transparent canvas. In particular, the horizontal general marks,
wordmarks, partner lockups, and vertical Founders mark include substantial
transparent space.

That canvas is part of the approved file and protects the logo safety zone.
Do not trim it, crop it with `overflow: hidden`, calculate a replacement crop
from alpha bounds, or export a tighter derivative. Size and position the full
intrinsic image box.

## Next.js usage

The manifest provides the exact dimensions required by `next/image`:

```jsx
import Image from "next/image";
import logoCatalog from "@/brand/bioglow.assets.json";

const logo = logoCatalog.assets["founders-horizontal-full-color"];

export function SeasonLogo() {
  return (
    <Image
      src={logo.publicPath}
      alt="BIOGLOW™ Founders Edition"
      width={logo.width}
      height={logo.height}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
```

Keep the rendered width at or above 72 CSS pixels and let the browser preserve
the manifest aspect ratio.

## Rendering rules

- Never apply CSS `filter`, forced color, blend mode, skew, or
  non-proportional sizing.
- Keep neighboring content outside clear space equal to one quarter of the
  complete lockup height on every side.
- Do not crop the transparent safety zone from the source file.
- Use meaningful alternative text when the logo conveys content. Use empty
  alternative text only when adjacent text conveys the same information and
  the image is decorative.
- Do not use logo artwork in place of a text mention in body copy.

## Excluded package files

The repository intentionally excludes all EPS and PDF print assets, macOS
metadata, and Future Edition artwork. Future teal remains in the canonical
color JSON as reference-only metadata, but it is not approved for project UI
or logo use.
