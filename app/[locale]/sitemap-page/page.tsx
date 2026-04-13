import fs from 'node:fs';
import path from 'node:path';
import SitemapPageClient, { type SitemapSection } from './SitemapPageClient';

const CONDITION_GUIDE_PAGE = path.join(process.cwd(), 'app', 'condition-guide', 'page.tsx');

function buildSections(includeConditionGuide: boolean): SitemapSection[] {
  const learnLinks: SitemapSection['links'] = [
    { label: 'Rolex Reference Guide', href: '/references' },
    { label: 'Blog', href: '/blog' },
    { label: 'Authenticity Guarantee', href: '/authenticity' },
  ];
  if (includeConditionGuide) {
    learnLinks.push({ label: 'Watch Condition Guide', href: '/condition-guide' });
  }

  return [
    {
      title: 'Shop',
      links: [
        { label: 'All Watches', href: '/shop' },
        { label: 'Sell Your Watch', href: '/sell' },
        { label: 'Source a Watch', href: '/source' },
        { label: 'Track Your Order', href: '/track-order' },
      ],
    },
    { title: 'Learn', links: learnLinks },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Book an Appointment', href: '/appointment' },
        { label: 'FAQ', href: '/faq' },
        { label: 'ID Verification', href: '/verify' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { label: 'Buyer Protection', href: '/buyer-protection' },
        { label: 'Warranty', href: '/warranty' },
        { label: 'Returns & Refunds', href: '/returns' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
    {
      title: 'Company',
      links: [{ label: 'About Us', href: '/about' }],
    },
  ];
}

export default function SitemapPage() {
  const hasConditionGuide = fs.existsSync(CONDITION_GUIDE_PAGE);
  const sections = buildSections(hasConditionGuide);
  return <SitemapPageClient sections={sections} />;
}
