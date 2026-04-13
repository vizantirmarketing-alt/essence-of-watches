import { getPageSeo } from '@/sanity/lib/seo';
import { getFeaturedWatches } from '@/sanity/lib/watches';
import type { Metadata } from 'next';
import Hero from '@/components/homepage/Hero';
import TrustStrip from '@/components/homepage/TrustStrip';
import NewArrivals from '@/components/homepage/NewArrivals';
import WhyEssence from '@/components/homepage/WhyEssence';
import NewsletterSignup from '@/components/homepage/NewsletterSignup';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageSeo('home');

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

export default async function Home() {
  const featuredWatches = await getFeaturedWatches();

  return (
    <main>
      <Hero />
      <TrustStrip />
      <NewArrivals watches={featuredWatches || []} />
      <WhyEssence />
      <NewsletterSignup />
    </main>
  );
}