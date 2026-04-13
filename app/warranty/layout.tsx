import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Warranty | Essence of Watches',
  description:
    'Two-year Essence of Watches warranty: what is covered, what is not, how to file a claim, service turnaround, and transferability.',
  openGraph: {
    title: 'Warranty | Essence of Watches',
    description:
      'Mechanical coverage, exclusions, claims process, and turnaround for your timepiece.',
  },
};

export default function WarrantyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
