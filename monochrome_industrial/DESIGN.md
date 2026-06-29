---
name: Monochrome Industrial
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3938'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a29'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e0'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e0'
  inverse-on-surface: '#31302f'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c6'
  primary: '#c8c6c6'
  on-primary: '#303030'
  primary-container: '#333333'
  on-primary-container: '#9c9b9b'
  inverse-primary: '#5f5e5e'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b3'
  tertiary: '#cac6c2'
  on-tertiary: '#32302e'
  tertiary-container: '#353331'
  on-tertiary-container: '#9f9b98'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e4e2e2'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e4e2e0'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1c1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e7e1de'
  tertiary-fixed-dim: '#cac6c2'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#494644'
  background: '#141313'
  on-background: '#e5e2e0'
  surface-variant: '#353434'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin: 24px
---

# Design System: Monochrome Industrial

## Brand & Style
The brand identity is characterized by a "Monochrome Industrial" style. It is a sophisticated, dark-mode first approach that emphasizes utility, precision, and architectural stability. The personality is professional and focused, utilizing a desaturated palette to highlight content through subtle tonal shifts. The design style draws from Minimalism and Corporate Modern aesthetics, evoking a sense of reliability and understated power.

## Colors
The system utilizes a disciplined, desaturated dark theme to ensure focus and reduce visual fatigue.

*   **Color Mode:** Dark
*   **Primary (#787777):** The main interactive anchor, used for key actions and highlights.
*   **Secondary (#787776):** Used for subtle grouping and secondary UI elements.
*   **Tertiary (#353331):** A deep charcoal for structural grounding and backgrounds.
*   **Neutral (#797776):** Used for surfaces and non-interactive components to maintain hierarchy.

## Typography
The system uses **Inter** for all typographic roles to ensure maximum legibility on digital screens. This typeface reinforces the precise, technical nature of the brand.

*   **Headlines:** Inter, Semi-Bold (600), utilizing a 1.25 to 1.3 line height.
*   **Body:** Inter, Regular (400), with a 1.5 line height for comfortable long-form reading.
*   **Labels:** Inter, Medium (500), for clear, concise functional text.

## Layout & Spacing
A fluid grid model is employed, governed by a strict 8px base unit. This ensures consistency across all components and screen sizes.

*   **Margins:** 24px (Mobile), scaling to 32px (Desktop).
*   **Gutters:** 16px.
*   **Philosophy:** Content relies on proximity and generous whitespace to create organization in a low-contrast environment.

## Elevation & Depth
Depth is conveyed primarily through **Tonal Layers**. In the dark-mode environment, surfaces "rise" toward the user by becoming lighter in value. Subtle 1px outlines are used to define boundaries where tonal shifts are minimal. Ambient shadows are desaturated and soft, used sparingly to indicate stack order.

## Shapes
The shape language follows a **Soft** (1) roundedness philosophy. This introduces a 4px (0.25rem) corner radius to standard UI elements, providing a modern feel that balances industrial precision with approachable usability. Larger containers like cards utilize an 8px or 12px radius.

## Components
*   **Buttons:** Primary actions feature the #787777 primary grey. Secondary actions use subtle outlines or lower-contrast fills.
*   **Inputs:** Feature dark backgrounds with 4px rounded corners and 1px borders.
*   **Cards:** Defined by a slightly lighter surface color than the background and an 8px radius.
*   **Chips & Labels:** Small-scale elements with medium-grey fills to categorize information without breaking the monochrome harmony.