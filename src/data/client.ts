/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA — Chinderhof
 * ─────────────────────────────────────────────────────────────────────────────
 * Business copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and SEO components.
 *
 * TODO: Replace the placeholder contact details with the real ones before
 * going live. Kept here so no component hardcodes a number or name.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'Chinderhof',
  email: 'info@chinderhof.ch',
  phoneForTel: '000000000',
  phoneFormatted: '000 000 00 00',
  /** Lehrbetrieb-Nummer / Vereinssignal – leer = im Header/Footer ausblenden. */
  license: '',
  address: {
    lineOne: 'Musterstrasse 1',
    lineTwo: '',
    city: 'Langnau im Emmental',
    state: 'BE',
    zip: '3550',
    country: 'CH',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Langnau+im+Emmental',
  },
  socials: {
    facebook: '',
    instagram: '',
    google: '',
  },
  domain: 'https://www.chinderhof.ch',
} as const;

export type Client = typeof client;