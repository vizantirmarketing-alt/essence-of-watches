'use client';

import { useState, useMemo } from 'react';
import FilterBar from '@/components/shop-page/FilterBar';
import ProductGrid from '@/components/shop-page/ProductGrid';
import { Watch, normalizeWatchStatus } from '@/data/watches';

interface SanityWatch {
  _id?: string;
  id?: string;
  slug: string | { current: string };
  brand: string;
  model: string;
  reference: string;
  year: number;
  price: number;
  condition: string;
  status?: string;
  caseSize: string;
  caseMaterial: string;
  dialColor: string;
  movement: string;
  image?: string;
  images?: string[];
  featured?: boolean;
}

interface ShopPageClientProps {
  watches: SanityWatch[];
}

export default function ShopPageClient({ watches }: ShopPageClientProps) {
  const [selectedCollection, setSelectedCollection] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);

  // Transform Sanity data to match expected format
  const transformedWatches = useMemo((): Watch[] => {
    return watches.map((watch) => ({
      id: watch._id || watch.id || '',
      slug: typeof watch.slug === 'object' ? watch.slug.current : watch.slug,
      brand: watch.brand,
      model: watch.model,
      reference: watch.reference,
      year: watch.year,
      price: watch.price,
      condition: watch.condition as Watch['condition'],
      caseSize: watch.caseSize,
      caseMaterial: watch.caseMaterial,
      dialColor: watch.dialColor,
      movement: watch.movement,
      image: watch.image || watch.images?.[0] || '',
      images: watch.images || (watch.image ? [watch.image] : []),
      featured: watch.featured || false,
      newArrival: false, // Can be added to Sanity schema if needed
      boxPapers: 'Full Set' as const, // Default value, can be added to Sanity if needed
      originalMSRP: undefined,
      status: normalizeWatchStatus(watch.status),
    }));
  }, [watches]);

  const filteredWatches = useMemo(() => {
    let result = [...transformedWatches];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (w) =>
          w.model.toLowerCase().includes(query) ||
          w.reference.toLowerCase().includes(query) ||
          w.dialColor.toLowerCase().includes(query) ||
          w.caseMaterial.toLowerCase().includes(query) ||
          w.caseSize.toLowerCase().includes(query),
      );
    }

    // Filter by collection (model name)
    if (selectedCollection) {
      result = result.filter((w) => w.model.includes(selectedCollection));
    }

    // Filter by price range
    if (priceRange[0] > 0 || priceRange[1] < Infinity) {
      result = result.filter((w) => w.price >= priceRange[0] && w.price <= priceRange[1]);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        result.sort((a, b) => b.year - a.year);
    }

    return result;
  }, [transformedWatches, selectedCollection, sortBy, searchQuery, priceRange]);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-[var(--text-secondary)] text-[11px] tracking-[0.2em] uppercase mb-2">
            Pre-Owned Rolex
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[var(--text-primary)] mb-2">
            Our Collection
          </h1>
          <p className="text-[var(--text-secondary)] text-sm">
            {filteredWatches.length} authenticated timepieces
          </p>
        </div>

        {/* Filters */}
        <FilterBar
          selectedCollection={selectedCollection}
          onCollectionChange={setSelectedCollection}
          sortBy={sortBy}
          onSortChange={setSortBy}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />

        {/* Product Grid */}
        <div className="mt-8 sm:mt-10">
          <ProductGrid watches={filteredWatches} />
        </div>
      </div>
    </main>
  );
}

