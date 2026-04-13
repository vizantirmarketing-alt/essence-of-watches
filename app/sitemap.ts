import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { getAllWatches } from '@/sanity/lib/watches';

const FALLBACK_SITE = 'https://www.essenceofwatches.com';

function getBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  const base = raw && raw.trim().length > 0 ? raw.trim() : FALLBACK_SITE;
  return base.replace(/\/+$/, '');
}

type SanityWatchSlug = { slug?: string | null };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getBaseUrl();
  const now = new Date();

  let watches: SanityWatchSlug[] = [];
  try {
    watches = ((await getAllWatches()) as SanityWatchSlug[]) ?? [];
  } catch {
    watches = [];
  }

  const entries: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'daily',
    },
    {
      url: `${base}/shop`,
      lastModified: now,
      changeFrequency: 'daily',
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
    },
  ];

  const staticMonthlyPaths = [
    '/references',
    '/sell',
    '/source',
    '/authenticity',
    '/buyer-protection',
    '/warranty',
    '/returns',
    '/faq',
    '/contact',
    '/appointment',
    '/about',
    '/verify',
    '/track-order',
  ];

  for (const path of staticMonthlyPaths) {
    entries.push({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: 'monthly',
    });
  }

  for (const post of blogPosts) {
    entries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly',
    });
  }

  for (const watch of watches) {
    const slug = watch.slug?.trim();
    if (!slug) continue;
    entries.push({
      url: `${base}/shop/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
    });
  }

  return entries;
}
