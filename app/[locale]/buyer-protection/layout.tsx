import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buyer Protection | Essence of Watches',
  description:
    'Purchase protection at Essence of Watches: 7-day inspection window, pre-shipment authentication, insured shipping, secure payments, warranty, and direct access to specialists.',
  openGraph: {
    title: 'Buyer Protection | Essence of Watches',
    description:
      'How we protect every purchase—from inspection and authentication to delivery and support.',
  },
};

export default function BuyerProtectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
