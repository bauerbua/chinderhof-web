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
  // Headings: Fraunces via Bunny Fonts (in BaseLayout). Body: Systemschrift.
  fonts: {
    body: 'system-ui',
    display: 'Fraunces',
  },

  // ── Colour Palette (Design-System §3) ─────────────────────────────────────
  // Almenwirtschaftlich warm: Tannengrün, Rahm, Terrakotta, Heu-Gold.
  colors: {
    primary:      '#2F5D2A', // fir
    primaryDark:  '#244A1F', // fir-deep
    primaryLight: '#748F63', // salbei
    primaryFg:    '#ffffff',

    accent:       '#D9A12B', // gold
    accentSoft:   '#F1DFB0', // gold-soft
    accentFg:     '#244A1F', // fir-deep auf Gold
    terracotta:   '#C2603C', // ziegeldach

    background:   '#FDFAF2', // warm-white
    surface:      '#FAF4E8', // cream
    border:       '#E9DFC9', // line

    text:         '#2B231A', // wood
    textMuted:    '#6E6659', // stone

    dark:         '#244A1F', // Footer (fir-deep)
    darkSurface:  '#2A3A22',
  },

  // ── Border radius (organic) ────────────────────────────────────────────────
  radius: {
    sm:   '0.5rem',
    md:   '0.875rem',
    lg:   '1.25rem',
    xl:   '1.75rem',
    full: '9999px',
  },
} as const;

export type Brand = typeof brand;