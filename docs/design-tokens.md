# Winnebago Parts Direct: design variables from the mockup

Source: the 20 clickable-prototype screens in `main` (`*.dc.html`, desktop and mobile pairs).
Target: the Horizon-based theme in `Shopify/` (live theme "winnebago-parts-pilot v6").

The mockup has no CSS variables. Every style is inline, so these values were extracted by tallying what the screens actually use. "Uses" is the number of occurrences across all 20 screens, so it shows relative weight, not an exact count of components. Roles marked *(inferred)* are my reading of how the value is used, not something written in the mockup.

Frames: desktop 1440px wide with a 1280px content max-width and 40px side padding; mobile 390px wide.

---

## 1. Color

### Text and ink

| Proposed token | Hex | Role | Uses |
|---|---|---|---|
| `--wgo-ink-900` | `#131518` | Strongest text: card titles, outline-button text and border | 211 |
| `--wgo-ink-800` | `#23262a` | Primary body text, labels *(inferred)* | 567 |
| `--wgo-ink-700` | `#34393e` | Page text color, product titles, icon strokes | 220 |
| `--wgo-grey-700` | `#545454` | Secondary text, descriptions | 387 |
| `--wgo-grey-500` | `#8a8f94` | Muted text, placeholders, helper text | 362 |
| `--wgo-grey-400` | `#a3a8ac` | Disabled and faint text *(inferred)* | 30 |

### Surfaces and borders

| Proposed token | Hex | Role | Uses |
|---|---|---|---|
| `--wgo-white` | `#ffffff` | Cards, header, inputs | 562 |
| `--wgo-page` | `#f1f2f2` | Page background | 74 |
| `--wgo-surface-100` | `#f5f6f6` | Panels, light sections | 175 |
| `--wgo-surface-200` | `#e4e5e6` | Subtle fills, dividers, inactive progress bars | 354 |
| `--wgo-border` | `#d5d7d9` | Default border (cards, inputs, pill buttons) | 431 |
| `--wgo-border-strong` | `#c2c6c9` | Stronger border, dot separators | 57 |

### Brand

| Proposed token | Hex | Role | Uses |
|---|---|---|---|
| `--wgo-red` | `#cd0e2d` | Links, accents, active progress bar, chat Send button | 492 |
| `--wgo-red-dark` | `#a80c24` | Hover on the red chat launcher | 1 |
| `--wgo-navy` | `#07263f` | Section headings (h2), cart icon button, user chat bubbles | 310 |
| `--wgo-black` | `#000000` | Primary button fill | 88 |

### Status

| Meaning | Text | Background | Border |
|---|---|---|---|
| Success / fits | `#145c3d` (icons and "In stock" use `#1e7a52`) | `#eaf6ee` | `#b9e0c3` |
| Warning / check fit | `#b5751a` (dark `#8a5a14`) | `#fbf1e4` | `#e9c88b` |
| Error | `#b23a2e` (dark `#7a241b`) | `#fbedeb` | `#eac0b8` |

### Overlays

| Value | Use |
|---|---|
| `rgba(2,10,20,0.22)` | Standard shadow color (42 uses) |
| `rgba(20,22,24,0.45)` | Modal backdrop |
| `rgba(255,255,255,0.72)` | Frosted overlays on imagery |
| `rgba(205,14,45,0.35)` | Red glow under red buttons |

The mockup has near-duplicate greys (`#23262a`, `#34393e`, `#131518`). Treat the table above as the canonical set. Decide with design whether to collapse the three inks into two before they become theme settings.

---

## 2. Typography

**Families**

- **United Sans** is the display face: headings, buttons, labels, prices. Five weights are used: 300, 500, 700, 800, 900. The mockup loads them from five OpenType files in its `_blob/` folder.
- **Lato** (Google Fonts, 400/700/900) appears in 155 inline declarations.
- **Arial** is the default UI and body face, with 839 declarations. The mockup mixes Arial and Lato for body text, so the intended body font needs confirming.

**Weights used:** 700 (611 uses), 900 (522), 800 (223), 600 (105), 300 and 500 (17 each), 400 (7).

**Case and tracking:** almost all United Sans text is uppercase (532 uses) with letter-spacing from 0.5px to 2.5px. The common values are 1.5px (195), 1px (126) and 0.5px (85).

**Observed type scale (px):** 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 30, 34, 54, plus half-pixel values (10.5, 11.5, 12.5, 13.5). 14px is the body size (715 uses). Normalize the half-pixel sizes when these become theme settings.

| Element | Desktop | Mobile | Family, weight |
|---|---|---|---|
| Hero h1 | 54px, line-height 1.03 | 30px | United Sans 800 |
| Section h2 | 30px | 22px | United Sans 800, navy `#07263f` |
| PDP title | 34px, line-height 1.05 | 22px | United Sans 800, `#34393e` |
| PDP price | 34px | n/a | United Sans 800 |
| Body | 14px, line-height 1.45 to 1.5 | 14px | Arial |
| Button label | 12 to 16px, tracking 1 to 1.5px | 11 to 14px | United Sans 900, uppercase |
| Small label / eyebrow | 10 to 13px | 10 to 12px | United Sans 900 |

**Line heights:** 1.45 (144 uses), 1.5 (95), 1.25 (24), 1.2 (21); headings run 1.03 to 1.08.

---

## 3. Shape, borders, shadows

**Radii:** `999px` pills (640 uses: buttons, chips, inputs in the footer signup, progress bars), `12px` cards (399), `10px` (303), `8px` (102), `14px` (37), `5px` (25), `16px` (14). Bottom sheets use `16px 16px 0 0`.

**Border widths:** 1px for cards and inputs; 2px for outline buttons.

**Shadows:**

| Value | Use |
|---|---|
| `0 6px 16px rgba(2,10,20,0.22)` | Hover lift on clickable elements |
| `0 10px 24px rgba(2,10,20,0.22)` | Hover lift on product and category cards |
| `-16px 0 40px rgba(2,10,20,0.22)` | Drawer sliding in from the right *(inferred from the shadow direction)* |
| `16px 0 40px rgba(2,10,20,0.22)` | Drawer sliding in from the left, e.g. the mobile menu *(inferred)* |
| `0 -12px 30px rgba(2,10,20,0.2)` | Bottom sheet *(inferred)* |
| `0 18px 40px rgba(2,10,20,0.16)` | Large popovers *(inferred)* |
| `0 3px 8px rgba(205,14,45,0.35)` | Red button glow |

---

## 4. Spacing

Observed gaps: 10px (181 uses), 6px (116), 14px (92), 16px (89), 12px (66), 8px (61), plus 3 to 7px and 20 to 24px for tight and loose groups. The mockup is not on a strict grid.

Common paddings: `13px 15px` (250), `14px 16px` (197), `11px 16px` (92), `9px 14px` (48), `20px 22px` (27). Page gutter is 40px on desktop (the footer signup band, for example, uses `36px 40px`).

Suggested theme scale, snapped to a 4px grid: 4, 8, 12, 16, 20, 24, 32, 40. Confirm the snapping with design, because several button paddings (`13px 15px`) would shift by a pixel.

---

## 5. Components

### Buttons

All are pills (`border-radius: 999px`), United Sans 900, uppercase.

| Variant | Fill | Text | Border | Size | Example |
|---|---|---|---|---|---|
| Primary | `#000` | `#fff` | none | 13 to 16px, tracking 1 to 1.2px, padding 12 to 15px | Add to cart, Look up my motorhome, Sign in |
| Primary on dark | `#000` | `#fff` | 1px `#3a3f45` | 14px, tracking 1.2px | Add new vehicle |
| Secondary | `#fff` | `#131518` or `#000` | 2px solid, same as text | 13px, tracking 1px, padding 11 to 12px | Not my RV, Create account |
| Chat send | `#cd0e2d` | `#fff` | none | 12px, padding 12 x 20px | Send |
| Small outline | transparent or `#fff` | `#545454` | 1px `#d5d7d9` | 10 to 11px, tracking 0.5px | Ask about this part, Talk to a person |
| Text link | none | `#cd0e2d` | none | 13px, tracking 1px | View all parts › |

The red appears on links and accents, not on the main purchase button. The current theme layer (`wgo-design-system.css`) makes the primary button red, so this is a visible change.

### Inputs

Pill-shaped in the footer signup: `border-radius: 999px`, 1px `#d5d7d9`, `#fff` fill, padding `12px 16px`, 14px text, text color `#131518`. The current theme uses 4px input radius.

### Header

White bar, 1px bottom border `#e4e5e6`, padding `20px 40px`, 32px gap.

- **Add Vehicle:** a white pill button with a 1px `#c2c6c9` border and padding `6px 16px 6px 6px`. A 32px circle on the left holds a 25px red `#cd0e2d` badge with a white plus (2px white ring). The label is 12px United Sans 900, uppercase, `#34393e`, followed by a 14px chevron.
- **Search:** not a pill. A 160px-wide box with a 1px `#c2c6c9` border, 8px radius, padding `10px 12px`, an 18px icon and 14px `#8a8f94` placeholder text.
- **Cart:** a 44px square, 8px radius, navy `#07263f` fill with a white icon.

### Cards

White, 1px `#d5d7d9` border, 12px radius, `overflow: hidden`. Hover: lift 2px, shadow `0 10px 24px`, border turns navy `#07263f`, `brightness(0.93)`.

### Progress / step bars

3px tall pill bars. Active `#cd0e2d`, inactive `#e4e5e6`. Used in the add-vehicle flow (288 uses of 3px height).

### Chat bubbles

User bubbles: navy `#07263f`, white text, 12px radius, padding `11px 16px`. Assistant text: `#23262a`, 14px, line-height 1.45, with a red `#cd0e2d` "Parts Assistant" label.

### Hover and active states

Only clickable elements get hover. Buttons and anything with a pointer cursor: `filter: brightness(0.90)`, shadow `0 6px 16px rgba(2,10,20,0.22)`, lift `translateY(-1px)`, 0.15s ease. Active: `brightness(0.82)`, no lift, no shadow. Plain nav and footer links: opacity 0.7. Not hoverable: quantity steppers and add to cart (marked decorative in the mockup), best-sellers, and anything that isn't a real destination.

---

## 6. Drop-in CSS variables

Names follow the existing `--wgo-*` convention in `Shopify/assets/wgo-design-system.css`. This is a proposal to review, not yet applied to the theme.

```css
:root {
  /* Ink and greys */
  --wgo-ink-900: #131518;
  --wgo-ink-800: #23262a;
  --wgo-ink-700: #34393e;
  --wgo-grey-700: #545454;
  --wgo-grey-500: #8a8f94;
  --wgo-grey-400: #a3a8ac;

  /* Surfaces and borders */
  --wgo-white: #ffffff;
  --wgo-page: #f1f2f2;
  --wgo-surface-100: #f5f6f6;
  --wgo-surface-200: #e4e5e6;
  --wgo-border: #d5d7d9;
  --wgo-border-strong: #c2c6c9;

  /* Brand */
  --wgo-red: #cd0e2d;
  --wgo-red-dark: #a80c24;
  --wgo-navy: #07263f;
  --wgo-black: #000000;

  /* Status */
  --wgo-success-text: #145c3d;
  --wgo-success-bg: #eaf6ee;
  --wgo-success-border: #b9e0c3;
  --wgo-warning-text: #b5751a;
  --wgo-warning-bg: #fbf1e4;
  --wgo-warning-border: #e9c88b;
  --wgo-error-text: #b23a2e;
  --wgo-error-bg: #fbedeb;
  --wgo-error-border: #eac0b8;

  /* Type */
  --wgo-font-display: 'United Sans', Arial, sans-serif;
  --wgo-font-body: Arial, sans-serif; /* confirm: Arial vs Lato */

  /* Shape */
  --wgo-radius-pill: 999px;
  --wgo-radius-card: 12px;
  --wgo-radius-md: 10px;
  --wgo-radius-sm: 8px;

  /* Shadows */
  --wgo-shadow-hover: 0 6px 16px rgb(2 10 20 / 0.22);
  --wgo-shadow-card-hover: 0 10px 24px rgb(2 10 20 / 0.22);
  --wgo-shadow-drawer-right: -16px 0 40px rgb(2 10 20 / 0.22);
  --wgo-shadow-sheet: 0 -12px 30px rgb(2 10 20 / 0.2);

  /* Layout */
  --wgo-page-max: 1280px;
  --wgo-gutter: 40px;
}
```

---

## 7. Differences from the current theme layer

The live theme already has a design layer, `Shopify/assets/wgo-design-system.css`, extracted from winnebago.com on 2026-10-05. It differs from the mockup in these places:

| Item | Current theme | Mockup |
|---|---|---|
| Display font | Barlow Condensed (stand-in) | United Sans |
| Body font | Barlow (stand-in) | Arial, with some Lato |
| Primary button | Red `#CD0E2D`, 48px radius | Black `#000`, 999px radius |
| Secondary button | `#222` outline | `#131518` or `#000` outline, 2px |
| Main ink | `#222222` / `#34393E` | `#23262a`, `#131518`, `#34393e` |
| Light grey | `#F1F2F2` / `#D3D3D3` | `#f1f2f2` page, `#d5d7d9` border |
| Input radius | 4px | 999px (footer signup) |
| Card radius | 4px (setting `card_corner_radius`) | 12px |
| Status colors | `#B00020` error, `#2E7D4F` success | Full text / background / border triples above |

The Barlow comment in the theme says the licensed fonts were still "decision pending".

---

## 8. Mapping to Horizon theme settings

Verify each key against `Shopify/config/settings_schema.json` before changing it. These are the saved settings in `config/settings_data.json` that these tokens touch.

| Mockup value | Theme setting | Current value |
|---|---|---|
| Primary button fill and text | `palette_primary_button_background`, `palette_primary_button_text` | Foreground / background of `color_palette` |
| Button radius (pill) | `button_border_radius_primary`, `button_border_radius_secondary` | 14 |
| Input radius | `inputs_border_radius` | 4 |
| Card radius (12px) | `card_corner_radius` | 4 |
| Variant buttons | `variant_button_radius` | 14 |
| Badge pill | `badge_corner_radius` | 100 |
| Headings | `type_heading_font`, `type_size_h1` to `h6` | Inter, h1 56 / h2 48 / h3 32 |
| Page background | `page_background_color` | `color_palette.background` |

The palette itself is `color_palette` (`background #ffffff`, `foreground #000000`, `color1 #333333`, `color2 #DFDFDF`). Shopify's font picker cannot load United Sans, so the display font has to come from `@font-face` in an asset plus the `--font-heading--family` override, which is how the current layer handles Barlow.

---

## 9. Assets to carry over

- **United Sans OpenType files.** Five weights, in the mockup's `_blob/` folder. Mapping from the mockup's `@font-face` rules: 300 → `a581525d…`, 500 → `18cd1b41…`, 700 → `2e767db3…`, 800 → `110ddfa6…`, 900 → `e8fc5e3c…`. These are licensed Winnebago fonts: confirm the license covers web use before adding them to `Shopify/assets/`.
- **Footer background texture.** The footer references `_blob/650b6bde…` as a repeating background at 900px.
- **Icons.** The mockup draws its icons as inline SVG (24px viewBox, 2 to 2.6px strokes, round caps). The theme's own icons live in `assets/icon-*.svg` and `snippets/icon.liquid`.

## 10. Open questions

1. Body font: Arial or Lato?
2. Primary button: black pill (mockup) or red pill (current theme and winnebago.com)?
3. Collapse the three inks into two?
4. Do the licensed United Sans files ship in the theme, or does the Barlow stand-in stay?
5. Mobile gutter and exact breakpoints are not defined in the mockup; mobile screens are fixed 390px frames.
