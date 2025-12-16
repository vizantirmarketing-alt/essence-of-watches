import { getWatchBySlug } from '@/sanity/lib/watches';
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

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const watch = await getWatchBySlug(slug);

  if (!watch) {
    notFound();
  }

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
      <ProductPageClient watch={watch} />
    </>
  );
}
