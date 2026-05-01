---
name: Compassionate Clarity
colors:
  surface: '#fff9ec'
  surface-dim: '#dfdacd'
  surface-bright: '#fff9ec'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f3e6'
  surface-container: '#f3ede0'
  surface-container-high: '#eee8db'
  surface-container-highest: '#e8e2d5'
  on-surface: '#1d1c14'
  on-surface-variant: '#43474c'
  inverse-surface: '#333028'
  inverse-on-surface: '#f6f0e3'
  outline: '#74777c'
  outline-variant: '#c4c6cc'
  surface-tint: '#506071'
  primary: '#0a1b29'
  on-primary: '#ffffff'
  primary-container: '#20303f'
  on-primary-container: '#8798aa'
  inverse-primary: '#b7c8dc'
  secondary: '#556065'
  on-secondary: '#ffffff'
  secondary-container: '#d6e2e8'
  on-secondary-container: '#59646a'
  tertiary: '#201908'
  on-tertiary: '#ffffff'
  tertiary-container: '#352e1b'
  on-tertiary-container: '#a0957c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4f8'
  primary-fixed-dim: '#b7c8dc'
  on-primary-fixed: '#0c1d2b'
  on-primary-fixed-variant: '#384858'
  secondary-fixed: '#d8e4ea'
  secondary-fixed-dim: '#bcc8ce'
  on-secondary-fixed: '#121d22'
  on-secondary-fixed-variant: '#3d484d'
  tertiary-fixed: '#efe1c5'
  tertiary-fixed-dim: '#d2c5aa'
  on-tertiary-fixed: '#211b0a'
  on-tertiary-fixed-variant: '#4e4631'
  background: '#fff9ec'
  on-background: '#1d1c14'
  surface-variant: '#e8e2d5'
typography:
  headline-xl:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  label-lg:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 32px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
This design system is built for an NDIS-specialist accounting firm, moving away from the cold, clinical nature of traditional finance and toward a "Human-Centered Professionalism." The brand personality is grounded, supportive, and exceptionally clear, designed to reduce the cognitive load often associated with NDIS plan management and accounting.

The aesthetic follows a **Modern Minimalism** approach with **Tactile** influences. It prioritizes high-contrast legibility and generous white space to create a sense of calm and order. By utilizing a "Soft-Touch" interface style, the design system ensures that the UI feels approachable for users with varying physical and cognitive abilities, fostering an emotional response of trust and relief.

## Colors
The palette is rooted in the professional foundations of the source brand but significantly softened for the NDIS context. 
- **Primary:** A deep navy (#20303F) used sparingly for high-contrast text and critical UI anchors.
- **Secondary & Tertiary:** Sky Blue (#C8D4DA) and Muted Sand (#D6C9AE) provide the "human" warmth, used for larger surface areas and subtle structural divisions.
- **Backgrounds:** The primary background is off-white (#F1EBDE) to reduce screen glare, which can be taxing for users with light sensitivity.
- **Accents:** Light teal and sage green are introduced as functional accents for success states and positive reinforcement, ensuring a "living" and "growing" feel rather than a stagnant corporate one.

## Typography
The typography system prioritizes readability above all else. **Work Sans** is used for headlines to provide a sturdy, reliable foundation. **Public Sans** is utilized for body copy due to its exceptional clarity in institutional and health contexts.

Key rules:
- **Minimum Size:** No body text shall fall below 16px.
- **Line Spacing:** A generous 1.6x to 1.75x line height is applied to body text to prevent "crowding" and improve tracking for readers with dyslexia or visual impairments.
- **Weight:** Avoid ultra-thin weights; stick to Regular (400) and Semi-Bold (600+) to maintain WCAG AA contrast ratios against the cream backgrounds.

## Layout & Spacing
The layout uses a **Fixed Grid** system for desktop (12 columns) to create a contained, safe feeling. On mobile, a single-column fluid layout is used with increased side margins (20px) to prevent accidental taps near the bezel.

The spacing rhythm is based on an 8px base unit but favors "loose" arrangements. Large vertical gaps (stack-lg) are used between sections to allow the eye to rest. Tap targets for all interactive elements must be a minimum of 48x48px to accommodate users with limited fine motor control.

## Elevation & Depth
To maintain a "grounded" and "trustworthy" feel, this design system avoids heavy shadows and floating elements. Instead, it uses **Tonal Layers** and **Low-Contrast Outlines**.

Depth is communicated through:
- **Surface Tiers:** Using the neutral (#F1EBDE) for the base and pure White (#FFFFFF) for cards or elevated containers.
- **Soft Borders:** Instead of shadows, 1px borders in the Secondary color (#C8D4DA) define element boundaries.
- **Focus States:** High-visibility focus rings (3px width) in the primary Navy color ensure keyboard navigation is always clear and compliant.

## Shapes
A **Rounded** shape language is employed to remove "sharp edges" from the user experience, both literally and metaphorically. The 0.5rem (8px) base radius makes components feel friendly and soft while maintaining enough structure to appear professional.

- **Buttons:** 0.5rem radius.
- **Cards & Modals:** 1rem (rounded-lg) to create a soft frame for important content.
- **Input Fields:** 0.5rem radius to match buttons, creating a cohesive form-entry experience.

## Components
### Buttons
Buttons use high-contrast fills. The primary action button is Navy (#20303F) with White text. Secondary buttons use the Sage Green accent to feel inviting and "low-pressure." Hover states should involve a subtle shift in saturation rather than a dramatic color change.

### Cards
Cards are white with a 1px #C8D4DA border. They should include generous internal padding (min 32px) to ensure content does not feel cramped. Cards are used to group NDIS-specific information like funding categories or service dates.

### Input Fields
Fields feature a thick 2px border when focused. Labels always sit above the field (never as placeholder text) to ensure they remain visible during data entry. Errors are displayed in a warm terracotta (accessible red) with a supporting icon.

### Chips & Tags
Used for NDIS categories (e.g., "Core Supports", "Capacity Building"). These use the Sage and Teal accents with 50% opacity backgrounds to remain legible but visually distinct from primary action buttons.

### Imagery & Media
All photography must feature genuine, diverse representation. Images should be framed with the system's rounded-lg (1rem) corners. Use "human-moment" photography—real interactions between carers and participants—rather than staged corporate stock.