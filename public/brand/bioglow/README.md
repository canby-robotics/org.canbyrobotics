# BIOGLOW™ logo assets

This directory is the intake location for official BIOGLOW™ artwork. It
intentionally contains no logo files today.

## Approved asset checklist

Before adding a logo file:

1. Obtain it from an official FIRST or LEGO asset package. Do not extract,
   trace, screenshot, or recreate artwork from the style-guide PDF.
2. Confirm that it is a source-provided full-color or one-color variant.
3. Preserve the file contents, aspect ratio, vector view box, and built-in
   safety zone. Renaming the file is allowed; modifying the artwork is not.
4. Do not run an optimizer that changes paths, colors, dimensions, or safety
   zone bounds.
5. Record the filename, variant, format, and official source in the inventory
   section of this document.
6. Review the asset against
   [`docs/brand/bioglow.md`](../../../docs/brand/bioglow.md).

## Naming

Use lowercase kebab-case:

```text
bioglow-{wordmark|lockup}-{base|founders|future}-{full-color|one-color}[-{black|white}].{svg|png}
```

Examples:

```text
bioglow-lockup-founders-full-color.svg
bioglow-lockup-future-full-color.svg
bioglow-wordmark-base-one-color-black.svg
```

The filename describes the official file that was received. It does not
authorize converting one variant into another. Add `black` or `white` only
when that color is an official source-provided variant.

## Rendering rules

- Prefer full-color artwork.
- Never apply CSS `filter`, forced color, blend mode, skew, or non-proportional
  sizing to a logo.
- Keep the rendered width at or above 72 CSS pixels for digital use.
- Preserve the aspect ratio. When CSS controls width, use `height: auto`.
- Keep neighboring content outside clear space equal to one quarter of the
  complete lockup height on every side.
- Do not crop the transparent safety zone from the source file.
- Use meaningful alternative text such as `BIOGLOW` when the logo conveys
  content. Use empty alternative text only when adjacent text already conveys
  the same information and the image is decorative.
- Do not use the logo artwork in place of a text mention in body copy.

Reference assets from their root-relative public path, such as
`/brand/bioglow/bioglow-lockup-future-full-color.svg`. When using Next.js
`Image`, pass the exact intrinsic width and height from the official source
file, then control display size proportionally with CSS. Never guess the
source dimensions.

## Asset inventory

No approved BIOGLOW artwork has been committed.
