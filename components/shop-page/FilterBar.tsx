'use client';

import { useState } from 'react';
import { collections } from '@/data/watches';

interface FilterBarProps {
  selectedCollection: string;
  onCollectionChange: (collection: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $10K', min: 0, max: 10000 },
  { label: '$10K - $20K', min: 10000, max: 20000 },
  { label: '$20K - $35K', min: 20000, max: 35000 },
  { label: '$35K - $50K', min: 35000, max: 50000 },
  { label: '$50K+', min: 50000, max: Infinity },
];

export default function FilterBar({
  selectedCollection,
  onCollectionChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
}: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [showAllCollections, setShowAllCollections] = useState(false);

  const displayedCollections = showAllCollections ? collections : collections.slice(0, 6);

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search by model, reference, or dial color..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-sm pl-12 pr-4 py-3 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)] transition-colors duration-300"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* Filters Row */}
      <div className="border-b border-[var(--border)] pb-4">
        <div className="flex flex-col gap-4">
          {/* Top Row - Collections */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Left - Filter Toggle (Mobile) & Collection Filter */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden text-[var(--text-secondary)] text-[11px] tracking-[0.15em] uppercase flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
                Filters
              </button>

              {/* Collection Pills - Desktop */}
              <div className="hidden sm:flex items-center gap-2 flex-wrap">
                {displayedCollections.map((collection) => (
                  <button
                    key={collection}
                    onClick={() => onCollectionChange(collection === 'All Models' ? '' : collection)}
                    className={`text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 border transition-colors duration-300 ${
                      (collection === 'All Models' && !selectedCollection) ||
                      selectedCollection === collection
                        ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]'
                        : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)]'
                    }`}
                  >
                    {collection}
                  </button>
                ))}

                {!showAllCollections && collections.length > 6 && (
                  <button
                    onClick={() => setShowAllCollections(true)}
                    className="text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] transition-colors duration-300"
                  >
                    +{collections.length - 6} More
                  </button>
                )}

                {showAllCollections && (
                  <button
                    onClick={() => setShowAllCollections(false)}
                    className="text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] transition-colors duration-300"
                  >
                    Less
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Row - Price Filter & Sort */}
          <div className="hidden sm:flex items-center justify-between">
            {/* Price Filter */}
            <div className="flex items-center gap-2">
              <span className="text-[var(--text-muted)] text-[10px] tracking-[0.1em] uppercase">
                Price:
              </span>
              <div className="flex items-center gap-1.5">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => onPriceRangeChange([range.min, range.max])}
                    className={`text-[10px] tracking-[0.05em] uppercase px-3 py-1.5 border transition-colors duration-300 ${
                      priceRange[0] === range.min && priceRange[1] === range.max
                        ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]'
                        : 'border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)]'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-[var(--text-muted)] text-[10px] tracking-[0.1em] uppercase">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="bg-[var(--card-bg)] text-[var(--text-primary)] text-[10px] tracking-[0.1em] uppercase border border-[var(--border)] px-3 py-1.5 outline-none cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filters Dropdown */}
        {showFilters && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[var(--border)] space-y-4">
            {/* Collections */}
            <div>
              <p className="text-[var(--text-muted)] text-[10px] tracking-[0.15em] uppercase mb-3">
                Collection
              </p>
              <div className="flex flex-wrap gap-2">
                {collections.map((collection) => (
                  <button
                    key={collection}
                    onClick={() => {
                      onCollectionChange(collection === 'All Models' ? '' : collection);
                      setShowFilters(false);
                    }}
                    className={`text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 border transition-colors duration-300 ${
                      (collection === 'All Models' && !selectedCollection) ||
                      selectedCollection === collection
                        ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]'
                        : 'border-[var(--border)] text-[var(--text-secondary)]'
                    }`}
                  >
                    {collection}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <p className="text-[var(--text-muted)] text-[10px] tracking-[0.15em] uppercase mb-3">
                Price
              </p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => onPriceRangeChange([range.min, range.max])}
                    className={`text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 border transition-colors duration-300 ${
                      priceRange[0] === range.min && priceRange[1] === range.max
                        ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)]'
                        : 'border-[var(--border)] text-[var(--text-secondary)]'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <p className="text-[var(--text-muted)] text-[10px] tracking-[0.15em] uppercase mb-3">
                Sort By
              </p>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="w-full bg-[var(--card-bg)] text-[var(--text-primary)] text-[11px] tracking-[0.1em] uppercase border border-[var(--border)] px-3 py-2 outline-none cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Apply Button */}
            <button
              onClick={() => setShowFilters(false)}
              className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-[11px] tracking-[0.15em] uppercase py-3"
            >
              Apply Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
