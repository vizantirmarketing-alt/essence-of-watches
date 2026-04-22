import type { SanityListingWatch } from '@/types/sanityListingWatch';
import type { SanityProductWatch } from '@/types/sanityProductWatch';
import { sanityImageToUrl, sanityImagesToUrls } from './image';
import { sanityFetch } from './live';
import {
  allWatchesQuery,
  singleWatchQuery,
  featuredWatchesQuery,
  relatedWatchesQuery,
} from './queries';

function normalizeListingWatch(row: Record<string, unknown>): SanityListingWatch {
  const images = sanityImagesToUrls(row.images);
  const primary = sanityImageToUrl(row.image) ?? images[0] ?? null;
  return {
    ...row,
    image: primary,
    images: images.length > 0 ? images : primary ? [primary] : [],
  } as SanityListingWatch;
}

function normalizeSingleWatch(row: Record<string, unknown> | null): SanityProductWatch | null {
  if (!row) return null;
  const images = sanityImagesToUrls(row.images);
  const sn = row.serialNumber;
  const serialNumber =
    sn == null || sn === '' ? undefined : String(sn);
  return {
    ...row,
    images,
    serialNumber,
  } as SanityProductWatch;
}

export async function getAllWatches(): Promise<SanityListingWatch[]> {
  const { data } = await sanityFetch({
    query: allWatchesQuery,
    tags: ['watch-list'],
  });
  const rows = (data as Record<string, unknown>[] | null) ?? [];
  return rows.map((row) => normalizeListingWatch(row));
}

export async function getWatch(slug: string): Promise<SanityProductWatch | null> {
  const { data } = await sanityFetch({
    query: singleWatchQuery,
    params: { slug },
    tags: ['watch', `watch:${slug}`],
  });
  return normalizeSingleWatch((data as Record<string, unknown> | null) ?? null);
}

export async function getWatchBySlug(slug: string): Promise<SanityProductWatch | null> {
  return getWatch(slug);
}

/** Homepage featured strip — matches `featuredWatchesQuery` fields + resolved `image` URL. */
export type FeaturedWatchCard = {
  _id: string;
  name: string;
  slug: string;
  reference: string;
  price: number;
  image: string;
};

export async function getFeaturedWatches(): Promise<FeaturedWatchCard[]> {
  const { data } = await sanityFetch({
    query: featuredWatchesQuery,
    tags: ['watch-featured'],
  });
  const rows = (data as Record<string, unknown>[] | null) ?? [];
  return rows.map((row) => ({
    _id: String(row._id ?? ''),
    name: String(row.name ?? ''),
    slug: String(row.slug ?? ''),
    reference: String(row.reference ?? ''),
    price: Number(row.price ?? 0),
    image: sanityImageToUrl(row.image, { width: 600 }) ?? '/menu-watch.jpg',
  }));
}

export async function getRelatedWatches(
  slug: string,
  brandPrefix: string
): Promise<SanityListingWatch[]> {
  const prefix = brandPrefix.trim() || 'Rolex';
  const brandGlob = `${prefix}*`;
  const { data } = await sanityFetch({
    query: relatedWatchesQuery,
    params: { slug, brandGlob },
    tags: ['watch-related', `watch-related:${slug}`],
  });
  const rows = (data as Record<string, unknown>[] | null) ?? [];
  return rows.map((row) => normalizeListingWatch(row));
}
