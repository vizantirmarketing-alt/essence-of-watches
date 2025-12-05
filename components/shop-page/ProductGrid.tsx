'use client';

import { Watch } from '@/data/watches';
import ProductCard from './ProductCard';

interface ProductGridProps {
  watches: Watch[];
}

export default function ProductGrid({ watches }: ProductGridProps) {
  if (watches.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-[var(--text-secondary)] font-serif text-xl">No watches found</p>
        <p className="text-[var(--text-muted)] text-sm mt-2">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {watches.map((watch) => (
        <ProductCard key={watch.id} watch={watch} />
      ))}
    </div>
  );
}




