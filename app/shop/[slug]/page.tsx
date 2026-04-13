import { getWatchBySlug, getRelatedWatches } from '@/sanity/lib/watches';
import { notFound } from 'next/navigation';
import ProductPageClient from './ProductPageClient';
import ProductJsonLd from '@/components/product/ProductJsonLd';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const watch = await getWatchBySlug(slug);

  if (!watch) {
    return { title: 'Watch Not Found' };
  }

  return {
    title: `${watch.name} | Essence of Watches`,
    description: watch.description || `Pre-owned ${watch.name} for sale`,
  };
}

function brandPrefixFromWatchName(name: string): string {
  const first = name.trim().split(/\s+/)[0];
  return first || 'Rolex';
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const watch = await getWatchBySlug(slug);

  if (!watch) {
    notFound();
  }

  const relatedWatches = await getRelatedWatches(slug, brandPrefixFromWatchName(watch.name));

  return (
    <>
      <ProductJsonLd
        product={{
          name: watch.name,
          slug: watch.slug,
          reference: watch.reference,
          price: watch.price,
          status: watch.status,
          images: watch.images || [],
        }}
      />
      <ProductPageClient watch={watch} relatedWatches={relatedWatches ?? []} />
    </>
  );
}
