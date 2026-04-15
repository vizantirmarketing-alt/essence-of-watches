import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { dataset, projectId } from '../env';

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

/** Build a CDN URL from a Sanity image value (or pass through legacy string URLs). */
export function sanityImageToUrl(source: unknown): string | null {
  if (source == null) return null;
  if (typeof source === 'string') {
    const s = source.trim();
    return s.length > 0 ? s : null;
  }
  try {
    return urlFor(source as SanityImageSource).url();
  } catch {
    return null;
  }
}

export function sanityImagesToUrls(sources: unknown): string[] {
  if (!Array.isArray(sources)) return [];
  const out: string[] = [];
  for (const item of sources) {
    const u = sanityImageToUrl(item);
    if (u) out.push(u);
  }
  return out;
}
