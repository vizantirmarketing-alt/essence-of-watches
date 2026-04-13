'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { SanityListingWatch } from '@/types/sanityListingWatch';

interface RelatedWatchesProps {
  watches: SanityListingWatch[];
}

function brandAndModelFromName(name: string): { brand: string; model: string } {
  const parts = name.trim().split(/\s+/);
  const brand = parts[0] || 'Rolex';
  const model = parts.slice(1).join(' ') || name;
  return { brand, model };
}

export default function RelatedWatches({ watches }: RelatedWatchesProps) {
  const displayWatches = watches;

  return (
    <section>
      <div className="flex items-center justify-between mb-10">
        <h2 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)]">
          Explore Other Watches
        </h2>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all duration-300">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {displayWatches.map((watch) => {
          const { brand, model } = brandAndModelFromName(watch.name);
          const imgSrc = watch.image || watch.images?.[0] || '/menu-watch.jpg';
          return (
            <Link key={watch._id} href={`/shop/${watch.slug}`} className="group block">
              <div className="rounded-lg overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] transition-all duration-300 group-hover:border-[var(--card-border-hover)] group-hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden bg-[var(--card-bg-inner)]">
                  <Image
                    src={imgSrc}
                    alt={`${brand} ${model}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <p className="text-[var(--text-muted)] text-[10px] tracking-[0.2em] uppercase mb-1">
                    {brand}
                  </p>
                  <h3 className="font-serif text-sm text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors duration-300 mb-1 line-clamp-1">
                    {model}
                  </h3>
                  <p className="text-[var(--text-muted)] text-xs mb-2">{watch.reference}</p>
                  <p className="text-[var(--text-primary)] font-serif text-base">
                    ${watch.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
