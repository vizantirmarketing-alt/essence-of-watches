import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | Essence of Watches',
  description:
    'Browse every public page on Essence of Watches — shop, resources, support, policies, and company.',
};

export default function SitemapPageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
