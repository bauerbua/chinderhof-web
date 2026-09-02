/**
 * ─────────────────────────────────────────────────────────────────────────────
 * IMAGE CONFIGURATION — Oberhusers
 * ─────────────────────────────────────────────────────────────────────────────
 * This is the single file to edit when swapping the placeholder photos for
 * the farm's real pictures. Astro optimizes every local image at build time
 * (WebP/AVIF, srcset, CLS-safe dimensions).
 *
 * FOLDER STRUCTURE
 *   src/assets/images/
 *     hero/      ← landscape image for the homepage Hero section
 *     about/     ← image for the About section and Über-uns page
 *     gallery/   ← all farm photos (drop any number of files here)
 *
 * TODO: Replace with real Oberhusers photos before going live.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ImageMetadata } from 'astro';

import heroImage from '../assets/images/hero/barn.jpg';
import aboutImage from '../assets/images/about/farm-family.jpg';

export interface GalleryImage {
  src: ImageMetadata | string;
  alt: string;
}

const discovered = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/gallery/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
).map(([path, mod]): GalleryImage => ({
  src: mod.default,
  alt: path
    .split('/').pop()!
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()),
}));

export const galleryImages: GalleryImage[] =
  discovered.length > 0 ? discovered : [];

export { heroImage, aboutImage };