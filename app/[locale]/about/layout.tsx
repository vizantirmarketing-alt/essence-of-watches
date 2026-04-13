import { getPageSeo } from '@/sanity/lib/seo';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageSeo('about');

  return {
    title: page?.seo?.metaTitle || 'Essence of Watches',
    description: page?.seo?.metaDescription || 'Pre-owned Rolex watches',
    openGraph: {
      title: page?.seo?.metaTitle || 'Essence of Watches',
      description: page?.seo?.metaDescription || 'Pre-owned Rolex watches',
      ...(page?.seo?.ogImage && { images: [page.seo.ogImage] }),
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}




