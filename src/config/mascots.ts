/**
 * MASCOTS – Sub-Branding-Maskottchen je Route (Design-System §9).
 * Mapping: Route → Maskottchen-Icon aus dem Hof-Icon-Satz.
 */
import type { IconName } from '../components/Icon.astro';

export const mascots: Record<string, IconName> = {
  '/': 'clover',
  '/ueber-uns': 'clover',
  '/freilandeier': 'chicken',
  '/milchproduktion': 'cow',
  '/ackerbau': 'potato',
  '/kinderprogramm': 'dog',
};

export function mascotFor(pathname: string): IconName {
  return mascots[pathname] ?? 'clover';
}
