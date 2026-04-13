import { getPageSeo } from '@/sanity/lib/seo';
import { getAllWatches } from '@/sanity/lib/watches';
import type { Metadata } from 'next';
import ShopPageClient from './ShopPageClient';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageSeo('shop');

  return {
    title: page?.seo?.metaTitle || 'Shop | Essence of Watches',
    description: page?.seo?.metaDescription || 'Pre-owned Rolex watches',
    openGraph: {
      title: page?.seo?.metaTitle || 'Shop | Essence of Watches',
      description: page?.seo?.metaDescription || 'Pre-owned Rolex watches',
      ...(page?.seo?.ogImage && { images: [page.seo.ogImage] }),
    },
  };
}

export default async function ShopPage() {
  const watches = await getAllWatches();
  return <ShopPageClient watches={watches || []} />;
}
