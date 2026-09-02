import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Die vier Angebotsseiten des Oberhusers werden content-driven aus
 * Markdown-Dateien unter src/content/angebote/*.md erzeugt.
 * Slugs → Routen: freilandeier → /freilandeier, etc.
 */
const angebote = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/angebote' }),
  schema: z.object({
    title: z.string(),
    topper: z.string(),
    description: z.string(),
    hero: z.string(),
    highlights: z.array(z.string()).default([]),
    form: z
      .enum(['eier-abo', 'kinderprogramm', 'b2b', 'none'])
      .default('none'),
  }),
});

export const collections = { angebote };