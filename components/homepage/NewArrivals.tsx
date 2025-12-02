'use client';

import Link from 'next/link';
import Image from 'next/image';
import { watches } from '@/data/watches';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function NewArrivals() {
  const { formatPrice } = useCurrency();
  // Get the 4 most recent new arrivals
  const newArrivals = watches
    .filter((w) => w.newArrival)
    .sort((a, b) => b.year - a.year)
    .slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="text-[var(--text-muted)] text-[11px] tracking-[0.2em] uppercase mb-2">
              Just In
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
              New Arrivals
            </h2>
          </div>
          <Link
            href="/shop?filter=new"
            className="text-[var(--text-secondary)] text-[11px] tracking-[0.15em] uppercase hover:text-[var(--text-primary)] transition-colors duration-300 flex items-center gap-2 group"
          >
            View All
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.map((watch) => (
            <Link key={watch.id} href={`/shop/${watch.slug}`} className="group block">
              {/* Card */}
              <div className="rounded-lg overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] transition-all duration-300 group-hover:border-[var(--card-border-hover)] group-hover:shadow-lg">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-[var(--card-bg-inner)]">
                  <Image
                    src={watch.image}
                    alt={`${watch.brand} ${watch.model}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* New Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="text-[9px] tracking-[0.15em] uppercase bg-white text-black px-2.5 py-1 font-medium">
                      New
                    </span>
                  </div>

                  {/* Quick View */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center z-10">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-[10px] tracking-[0.2em] uppercase border border-white px-5 py-2.5">
                      View
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-[var(--text-muted)] text-[10px] tracking-[0.2em] uppercase mb-1">
                    {watch.brand}
                  </p>
                  <h3 className="font-serif text-sm sm:text-base text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors duration-300 mb-1 line-clamp-1">
                    {watch.model}
                  </h3>
                  <p className="text-[var(--text-muted)] text-xs mb-2">{watch.reference}</p>
                  <p className="text-[var(--text-primary)] font-serif text-base sm:text-lg">
                    {formatPrice(watch.price)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

