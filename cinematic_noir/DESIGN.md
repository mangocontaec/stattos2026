---
name: Cinematic Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e3e2e2'
  on-tertiary-container: '#636465'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  pure-black: '#000000'
  deep-charcoal: '#0A0A0A'
  obsidian: '#121212'
  metallic-gold: '#D4AF37'
  brushed-silver: '#E5E5E5'
typography:
  display-lg:
    fontFamily: anybody
    fontSize: 96px
    fontWeight: '900'
    lineHeight: 100%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: anybody
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 110%
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: anybody
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 110%
  headline-md:
    fontFamily: anybody
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 120%
  body-lg:
    fontFamily: hankenGrotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: hankenGrotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-bold:
    fontFamily: hankenGrotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 100%
    letterSpacing: 0.1em
spacing:
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  section-gap-lg: 160px
  section-gap-md: 80px
---

## Brand & Style

The design system for this product is rooted in an "Exquisite Underground" aesthetic. It balances the raw, aggressive energy of tattoo culture with the refined polish of a luxury fashion house. The visual narrative is cinematic and high-stakes, focusing on the "friends not clients" ethos by humanizing the technical excellence of the craft.

The style is a hybrid of **Minimalism** and **High-Contrast/Bold**. It utilizes deep, ink-like blacks and charcoal textures to create a sense of infinite depth, allowing high-quality photography and crisp white typography to "pop" with intense clarity. The mood is uncompromising, professional, and intimate.

## Colors

This design system employs a strictly dark-mode palette designed to mimic the environment of a high-end tattoo studio. 

- **Backgrounds:** Use `pure-black` for main canvases to ensure maximum contrast. `deep-charcoal` and `obsidian` are reserved for UI containers and section differentiation to provide subtle depth without breaking the dark immersion.
- **Typography:** `pure-white` is the standard for high-legibility. 
- **Accents:** Use `metallic-gold` for primary calls to action and premium highlights. `brushed-silver` serves as a secondary accent for utility elements, borders, or hover states, providing a cold, industrial edge that complements the warmth of the gold.

## Typography

The typography is a study in contrast between "The Mark" and "The Message."

- **Headlines:** Use **Anybody** with expanded widths and heavy weights. It captures the blocky, geometric intensity of the brand logo. Large display text should use ultra-tight letter spacing and a "justified" architectural feel.
- **Body & Labels:** Use **Hanken Grotesk**. It is a sharp, modern sans-serif that remains legible at smaller sizes. For labels and navigation, use the bold weight with increased letter spacing and uppercase styling to maintain the professional, industrial tone.

## Layout & Spacing

The layout uses a **fixed grid** approach on desktop to create a structured, gallery-like experience. 

- **Grid:** A 12-column grid with 24px gutters. Content should often span 6 or 12 columns to maintain a bold, cinematic scale.
- **Rhythm:** Generous vertical whitespace (section gaps) is essential to give the high-quality imagery room to "breathe."
- **Responsive:** On mobile, margins shrink to 20px, and the layout collapses to a single column. Imagery should remain full-bleed where possible to maintain the "big screen" feel on mobile devices.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** rather than traditional shadows. In a dark environment, depth is felt through the subtle shifting of blacks.

- **Level 0:** Pure Black (#000000) for the base background.
- **Level 1:** Deep Charcoal (#0A0A0A) for large cards or section blocks.
- **Level 2:** Obsidian (#121212) for interactive elements like inputs or dropdowns.
- **Accents:** Use a "Glow" instead of a shadow for gold elements—a very low-opacity #D4AF37 outer blur to simulate a metallic reflection under studio lighting.

## Shapes

The shape language is strictly **Sharp (0)**. 

To honor the geometric and aggressive nature of the brand logo, all buttons, image containers, and input fields must have 0px corner radii. This reinforces the "uncompromising" and "precision" aspects of the professional tattoo craft. Borders, when used, should be 1px solid brushed silver or gold.

## Components

- **Buttons:** Primary buttons are solid Gold (#D4AF37) with Black text, sharp corners. Secondary buttons are Ghost-style with a White 1px border and White text. Hover states should include a subtle metallic shimmer or "glint" effect.
- **Cards:** Cards should have no borders, using a subtle background change (Deep Charcoal) and full-width imagery to define their space.
- **Inputs:** Underlined or fully boxed in Obsidian (#121212) with sharp corners. Active states are indicated by a Gold bottom border.
- **Imagery:** All photos should have a slightly desaturated, high-contrast edit. Use "Ken Burns" style slow-zoom transitions to maintain the cinematic feel.
- **Lists:** Clean, minimal, separated by 1px low-opacity silver dividers. Use the `label-bold` style for list headers.