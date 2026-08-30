/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * Single file to edit for the Chinderhof brand.
 *
 * Colors flow into  → src/styles/theme.css  (CSS custom properties)
 * Fonts flow into   → astro.config.mjs      (Astro built-in font optimizer)
 * Meta flows into   → src/layouts/BaseLayout.astro
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: 'Chinderhof',
  tagline: 'Emmentaler Familie & Freilandeier im Herzen des Emmentals',
  description:
    'Der Chinderhof bei Langnau im Emmental – ein Familienbetrieb mit Freilandeiern, Milchvieh, Ackerbau, Kindernachmittagen und viel Liebe zu Tieren und Land.',
  url: 'https://www.chinderhof.ch',
  locale: 'de_CH',

  // ── Fonts ──────────────────────────────────────────────────────────────────
  fonts: {
    body: 'Inter',
    display: 'Oswald',
  },

  // ── Colour Palette ─────────────────────────────────────────────────────────
  // Warm, natural farm colours: forest green + hay gold.
  colors: {
    primary:      '#2F5D2A',
    primaryLight: '#4E7F3E',
    primaryFg:    '#ffffff',

    accent:       '#D99E2B',
    accentFg:     '#3A2A00',

    background:   '#ffffff',
    surface:      '#F6F3EC',
    border:       '#E7E1D4',

    text:         '#211D15',
    textMuted:    '#5C564A',

    dark:         '#1E2A18',
    darkSurface:  '#2A3A22',
  },

  // ── Border radius ──────────────────────────────────────────────────────────
  radius: {
    sm:   '0.375rem',
    md:   '0.625rem',
    lg:   '1rem',
    full: '9999px',
  },
} as const;

export type Brand = typeof brand;