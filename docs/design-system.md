# Canby Robotics design system

The Canby Robotics design system uses
[Primer Brand](https://primer.style/brand) for React components, layout
primitives, typography, and accessibility behavior. Project-owned wrappers and
semantic tokens apply Canby Robotics and BIOGLOW™ visual direction without
presenting GitHub's brand as the site's identity.

## Sources and boundaries

| Concern | Source |
| --- | --- |
| UI components and responsive primitives | `@primer/react-brand` |
| Project semantic tokens and Primer mappings | `src/design-system/tokens.css` |
| Shared page-layout components | `src/design-system/` |
| Official BIOGLOW colors | `src/brand/bioglow.tokens.json` |
| Official BIOGLOW artwork | `src/brand/bioglow.assets.json` |
| Official season usage rules | `docs/brand/bioglow.md` |

Primer Brand is an experimental dependency. Its version is pinned, and
application pages should consume project-owned components where one exists.
Primer's public ESM barrel eagerly imports the entire experimental library, so
`jsconfig.json` exposes a project-local `@primer-brand/*` alias to the pinned
package's ESM modules. Import only the components in use through this alias.
Keep those imports inside the client-side design-system or page preview
boundary so package upgrades remain contained.

Primer's `SubdomainNavBar` and `MinimalFooter` are intentionally not used:
both contain GitHub-specific marks, labels, or destinations. `SiteHeader` and
`SiteFooter` use Primer typography and controls inside project-owned semantic
shells instead.

## Theme

The first theme is deliberately light-only. `CanbyThemeProvider` selects
Primer's light mode, while `tokens.css` maps project semantic roles to the
canonical BIOGLOW variables.

Use semantic variables such as:

- `--canby-color-canvas`
- `--canby-color-surface-subtle`
- `--canby-color-text`
- `--canby-color-text-muted`
- `--canby-color-rule`
- `--canby-color-action`
- `--canby-color-focus`

Do not use a BIOGLOW HEX value directly in application CSS. Neutral surfaces
and assignments such as "primary action" are Canby project decisions, not
official FIRST or LEGO brand rules.

## Gridline layout

- Keep page content on the shared 80rem frame.
- Use `GridSection` for full-width section rules and aligned content rails.
- Use `ConnectedGrid` for zero-gap repeated cells with one shared divider.
- Let horizontal rules reach the viewport edges.
- Draw vertical rails only where the viewport is wider than the shared frame.
- Keep adjacent sections flush so rule intersections remain continuous.
- Round outer media or groups only; do not round connected internal cells.
- Avoid floating card shadows, gradients, glass effects, and decorative
  alternating backgrounds.

## Artwork

Use `SeasonLogo` for manifest-backed `next/image` rendering. Select assets by
manifest ID, preserve their intrinsic ratio and transparent safety zone, and
never place them in a cropped or `overflow: hidden` wrapper.

Founders is the only active project edition. Add
`data-bioglow-edition="founders"` to the relevant section before using
`--bioglow-edition-accent`. Future Edition teal is reference-only.

## Current reusable surface

- `CanbyThemeProvider`
- `GridSection`
- `ConnectedGrid` and `ConnectedGridCell`
- `SeasonLogo`
- `SiteHeader`
- `SiteFooter`

The root homepage is the current visual acceptance surface. Add broader
components only when a real page requires them; forms, alerts, tabs, tables,
and dark mode are outside the initial scope.
