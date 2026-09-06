# Canby Robotics design system

The Canby Robotics design system uses
[Primer Brand](https://primer.style/brand) for React components, layout
primitives, typography, and accessibility behavior. Project-owned wrappers and
semantic tokens apply the Build Bright year-round identity without presenting
GitHub's brand as the site's identity. BIOGLOW™ remains a separate seasonal
subsystem.

## Sources and boundaries

| Concern | Source |
| --- | --- |
| UI components and responsive primitives | `@primer/react-brand` |
| Project semantic tokens and Primer mappings | `src/design-system/tokens.css` |
| Build Bright palette and semantic assignments | `src/design-system/palettes.css` |
| Shared page-layout components | `src/design-system/` |
| Contained season presentation | `src/components/SeasonModule.js` |
| Official BIOGLOW colors | `src/brand/bioglow.tokens.json` |
| Official BIOGLOW artwork | `src/brand/bioglow.assets.json` |
| Official season usage rules | `docs/brand/bioglow.md` |

Primer Brand is an experimental dependency. Its version is pinned, and
application pages should consume project-owned components where one exists.
Primer's public ESM barrel eagerly imports the entire experimental library, so
`jsconfig.json` exposes a project-local `@primer-brand/*` alias to the pinned
package's ESM modules. Import only the components in use through this alias.
Keep those imports inside the client-side design-system or page preview
boundary so package upgrades remain contained. `CanbyThemeProvider` also loads
Primer's shared functional size tokens so directly imported controls retain
their standard dimensions and padding; project tokens override their colors.

Primer's `SubdomainNavBar` and `MinimalFooter` are intentionally not used:
both contain GitHub-specific marks, labels, or destinations. `SiteHeader` and
`SiteFooter` use Primer typography and controls inside project-owned semantic
shells instead.

## Theme

The public theme is deliberately light-only. The root layout selects
`data-canby-palette="build-bright"` in server-rendered HTML, and
`CanbyThemeProvider` selects Primer's light mode. `palettes.css` owns the raw
Build Bright colors and maps them to Canby semantic roles. `tokens.css` owns
layout tokens and maps those semantic roles into Primer Brand.

Build Bright is the only site-wide palette. There is no public theme toggle or
stored preference.

Use semantic variables such as:

- `--canby-color-canvas`
- `--canby-color-surface-subtle`
- `--canby-color-text`
- `--canby-color-text-muted`
- `--canby-color-rule`
- `--canby-color-action`
- `--canby-color-action-text`
- `--canby-color-accent`
- `--canby-color-highlight`
- `--canby-color-focus`

Application components must consume Canby semantic variables rather than raw
Build Bright values. Neutral surfaces and assignments such as "primary action"
are Canby project decisions, not official FIRST or LEGO brand rules.

### Build Bright palette

`/theme-preview` is an unlinked, `noindex` reference for the adopted raw
palette, semantic roles, contrast pairings, controls, connected cards, and
season boundary.

Build Bright is a project-owned palette inspired by the physical LEGO
Education SPIKE Prime set. Direct product imagery and the 45678-1 inventory
emphasize Bright Yellow, Medium Azur, Bright Reddish Violet, black, white, and
stone grays:

- [LEGO Education SPIKE Prime product](https://education.lego.com/en-us/products/lego-education-spike-prime-set/45678/)
- [Brickset 45678-1 inventory](https://brickset.com/inventories/45678-1)
- [LDraw color configuration](https://library.ldraw.org/library/official/LDConfig.ldr)

The HEX values in `palettes.css` come from LDraw's digital rendering
approximations. They are not official LEGO web-brand colors. Do not name the
project tokens after LEGO, use SPIKE or LEGO Education artwork, or imply that
the palette is an official or endorsed identity.

The adopted hierarchy is a mostly white and blue-black foundation with yellow
for strong surfaces, azure for signals, and magenta for primary action.

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

`SeasonModule` is the only application component that may render official
BIOGLOW artwork or apply approved season colors. It owns
`data-bioglow-edition="founders"`, but its current homepage treatment uses
Build Bright surfaces, text, links, focus, and rules around the approved
full-color logo. This keeps a short "current season" message in the main
browsing flow without introducing a visually separate mini-site.

The season palette must not influence the header, hero, program content, calls
to action, interest page, or footer. Legal attribution text may still mention
the season outside the module.

Founders is the only active project edition. Future Edition teal is
reference-only.

## Current reusable surface

- `CanbyThemeProvider`
- `GridSection`
- `ConnectedGrid` and `ConnectedGridCell`
- `SeasonLogo`
- `SeasonModule`
- `SiteHeader`
- `SiteFooter`
- Build Bright token and component reference

The root homepage is the current visual acceptance surface. Add broader
components only when a real page requires them; forms, alerts, tabs, tables,
and dark mode are outside the initial scope.
