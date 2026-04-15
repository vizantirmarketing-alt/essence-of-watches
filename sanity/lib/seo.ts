import { sanityImageToUrl } from './image';
import { sanityFetch } from './live';
import { seoQuery } from './queries';

export type PageSeoDocument = {
  title?: string;
  slug?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    noIndex?: boolean;
    ogImage?: string;
  };
} | null;

export async function getPageSeo(slug: string): Promise<PageSeoDocument> {
  const { data: page } = await sanityFetch({
    query: seoQuery,
    params: { slug },
    tags: ['page-seo', `page:${slug}`],
  });

  if (!page || typeof page !== 'object') return null;

  const p = page as {
    title?: string;
    slug?: string;
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
      canonicalUrl?: string;
      noIndex?: boolean;
      ogImage?: unknown;
    };
  };

  const rawOg = p.seo?.ogImage;
  if (rawOg == null) return p as PageSeoDocument;

  if (typeof rawOg === 'string') return p as PageSeoDocument;

  const ogUrl = sanityImageToUrl(rawOg);
  return {
    ...p,
    seo: {
      ...p.seo,
      ogImage: ogUrl ?? undefined,
    },
  } as PageSeoDocument;
}
