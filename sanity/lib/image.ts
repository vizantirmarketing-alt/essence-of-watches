import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { client } from './client';

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

type ImageOptions = {
  width?: number;
  height?: number;
  quality?: number;
};

export function sanityImageToUrl(source: unknown, options: ImageOptions = {}): string | null {
  if (source == null) return null;
  if (typeof source === 'string') return source;

  const { width, height, quality = 75 } = options;

  try {
    let img = urlFor(source as SanityImageSource).auto('format').quality(quality);
    if (width) img = img.width(width);
    if (height) img = img.height(height);
    return img.url();
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
