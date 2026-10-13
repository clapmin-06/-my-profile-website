---
name: Sapphire Minimal Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#1d4ed8'
  on-secondary: '#ffffff'
  secondary-container: '#4069f2'
  on-secondary-container: '#fffbff'
  tertiary: '#0051b1'
  on-tertiary: '#ffffff'
  tertiary-container: '#0f69dc'
  on-tertiary-container: '#edf0ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies refined precision, calm authority, and high-craft minimalism. Tailored for an elite professional portfolio, the design prioritizes content legibility, deliberate whitespace, and purposeful micro-interactions over decorative noise.

The aesthetic fuses modern Swiss functionalism with subtle high-end digital polish:
- Architectural restraint: content is framed by delicate slate dividers and balanced grid alignments.
- Confident color accents: restrained neutral canvas punctuated by an intentional, luminous royal sapphire.
- Tactical tactility: micro-elevations, crisp borders, and buttery easing curves that communicate polish and technical competence.

## Colors

The palette relies on high contrast between pure structural backgrounds and deep slate ink, enriched with sapphire blue accents for interactive focus.

### Surface Roles
- Canvas Base: `#FFFFFF` for primary content containers and hero cards.
- Canvas Muted: `#F8FAFC` for page-level backgrounds and secondary grouped regions.
- Border Subtle: `#E2E8F0` for structural gridlines, divider rules, and resting borders.
- Border Focused: `#CBD5E1` for hover boundaries.

### Typography & Content Roles
- Primary Ink: `#0F172A` (Slate 900) for headlines, titles, and maximum legibility.
- Secondary Ink: `#334155` (Slate 700) for body narrative, lead copy, and prominent metadata.
- Tertiary Ink: `#64748B` (Slate 500) for timestamps, secondary labels, and captions.

### Accent Roles
- Sapphire Accent: `#2563EB` for primary action triggers, text links, active pill highlights, and key icons.
- Sapphire Dark: `#1D4ED8` reserved strictly for pressed states, focused outlines, and high-emphasis hover states.
- Sapphire Light: `#3B82F6` for subtle glow highlights, active indicator badges, and focus rings.

## Typography

Inter governs the typographic landscape with tight tracking on headings to evoke a precise, editorial look.

- Large titles leverage negative letter spacing (`-0.02em` to `-0.03em`) to enhance cohesion and structural impact.
- Body text remains open, balanced, and readable with relaxed vertical line height.
- Small uppercase metadata labels use expanded tracking (`+0.04em`) to establish crisp contrast against long-form text blocks.
- JetBrains Mono provides disciplined clarity for technical tags, commit hashes, metrics, and metadata.

## Layout & Spacing

The layout operates on a standard 12-column responsive fluid grid bounded by a max container width of 1200px.

### Breakpoints & Geometry
- Desktop (>= 1024px): 12 columns, 1.5rem (`24px`) gutters, 3rem (`48px`) outer horizontal margins. Content max-width: 1200px centered.
- Tablet (768px - 1023px): 8 columns, 1.25rem (`20px`) gutters, 2rem (`32px`) margins.
- Mobile (< 768px): 4 columns, 1rem (`16px`) gutters, 1.25rem (`20px`) margins.

### Rhythmic Discipline
- Macro spacing between distinct page chapters/sections uses 5rem to 8rem.
- Component-level spacing adheres strictly to 4px/8px increments.
- Whitespace is considered an active visual element; avoid filling full-width spaces needlessly.

## Elevation & Depth

Visual hierarchy uses a hybrid strategy of delicate slate outlines (`1px solid #E2E8F0`) paired with ethereal, slate-tinted ambient shadows. Avoid heavy, muddy dropshadows.

- Flat Ground (Level 0): Page canvas (`#F8FAFC`). No shadow.
- Resting Card (Level 1): Background `#FFFFFF`, border `1px solid #E2E8F0`, shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- Interactive Lift / Hover (Level 2): Background `#FFFFFF`, border `1px solid #CBD5E1`, shadow: `0 10px 25px -3px rgba(15, 23, 42, 0.07), 0 4px 6px -4px rgba(15, 23, 42, 0.03)`. Subtle vertical lift `-2px` via transform.
- Overlay / Modal (Level 3): Background `#FFFFFF`, border `1px solid #E2E8F0`, shadow: `0 20px 30px -10px rgba(15, 23, 42, 0.12), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`.
- Glass Filter Navigation: Header dock utilizes background `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(12px)` and bottom border `1px solid rgba(226, 232, 240, 0.8)`.

## Shapes

The interface balances sharp architectural lines with approachable rounded geometry.

- Base Cards, Panels, & Dialogs: `0.75rem` (`12px`) corner radius.
- Buttons & Input Fields: `0.5rem` (`8px`) corner radius.
- Badges, Tags, & Status Pills: Fully rounded pill shape (`9999px`).
- Media & Portfolio Artifacts: `0.75rem` (`12px`) with `overflow: hidden` to preserve corner profiles.

## Components

### Buttons
- Primary: Background `#2563EB`, text `#FFFFFF`, border transparent, padding `0.625rem 1.25rem`. Hover state: `#1D4ED8` with `translateY(-1px)`. Active: `#1E40AF` with `translateY(0)`.
- Secondary / Outline: Background `#FFFFFF`, text `#0F172A`, border `1px solid #E2E8F0`. Hover state: border color `#CBD5E1`, background `#F8FAFC`.
- Ghost: Background transparent, text `#334155`. Hover state: background `rgba(241, 245, 249, 0.8)`, text `#0F172A`.

### Project Cards
- Surface: `#FFFFFF` on top of `#F8FAFC` base canvas. Border: `1px solid #E2E8F0`. Padding: `1.5rem`.
- Thumbnail Wrapper: 16:10 aspect ratio, rounded `8px`, subtle inner border `inset 0 0 0 1px rgba(15, 23, 42, 0.05)`.
- Interaction: Smooth transition `all 200ms cubic-bezier(0.16, 1, 0.3, 1)`. On hover: border changes to `#CBD5E1`, elevation transitions to Level 2, card image scales to `1.02`.

### Tags & Chips
- Taxonomy Chips: Background `#F1F5F9`, text `#334155`, font size `12px`, padding `0.25rem 0.625rem`, border radius `9999px`.
- Status Indicator (e.g., "Available for work"): Dot `8px` `#2563EB` with pulse wave, wrapper background `rgba(37, 99, 235, 0.08)`, text `#2563EB`, font weight `600`.

### Form Controls & Inputs
- Text Input: Surface `#FFFFFF`, border `1px solid #E2E8F0`, placeholder `#94A3B8`, text `#0F172A`, padding `0.625rem 0.875rem`.
- Focus State: Border color `#2563EB`, outer ring `3px solid rgba(37, 99, 235, 0.15)`.

### Lists & Timelines (Experience / Education)
- Chronology items separated by `1px solid #E2E8F0` hairline rules.
- Dates rendered in `label-sm` with slate `#64748B`. Company/role headlines set in `headline-sm` with slate `#0F172A`.

### Interactive Dock / Floating Bar
- Detached quick-nav bar pinned bottom-center: Background `rgba(255, 255, 255, 0.9)`, border `1px solid #E2E8F0`, rounded `9999px`, elevation Level 3, padding `0.375rem 0.75rem`.