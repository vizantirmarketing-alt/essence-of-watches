import type { SanityListingWatch } from '@/types/sanityListingWatch';
import { client } from './client';
import {
  allWatchesQuery,
  singleWatchQuery,
  featuredWatchesQuery,
  relatedWatchesQuery,
} from './queries';

export async function getAllWatches() {
  return client.fetch(allWatchesQuery);
}

export async function getWatch(slug: string) {
  return client.fetch(singleWatchQuery, { slug });
}

export async function getWatchBySlug(slug: string) {
  return client.fetch(singleWatchQuery, { slug });
}

export async function getFeaturedWatches() {
  return client.fetch(featuredWatchesQuery);
}

export async function getRelatedWatches(
  slug: string,
  brandPrefix: string
): Promise<SanityListingWatch[]> {
  const prefix = brandPrefix.trim() || 'Rolex';
  const brandGlob = `${prefix}*`;
  return client.fetch<SanityListingWatch[]>(relatedWatchesQuery, { slug, brandGlob });
}

