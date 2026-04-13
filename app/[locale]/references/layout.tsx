import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rolex Reference Guide | Essence of Watches',
  description:
    'Searchable index of Rolex reference numbers by model family — production eras, case materials, and quick specs for collectors and buyers.',
  openGraph: {
    title: 'Rolex Reference Guide | Essence of Watches',
    description:
      'Filter by Submariner, GMT-Master, Daytona, Explorer, and more. Cross-check reference numbers before you buy.',
  },
};

export default function ReferencesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
