'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Watch } from '@/data/watches';
import { useCurrency } from '@/contexts/CurrencyContext';

interface ProductCardProps {
  watch: Watch;
}

export default function ProductCard({ watch }: ProductCardProps) {
  const { formatPrice } = useCurrency();
  return (
    <Link href={`/shop/${watch.slug}`} className="group block">
      {/* Card with solid background and border */}
      <div className="rounded-lg overflow-hidden bg-[var(--card-bg)] border border-[var(--card-border)] transition-all duration-300 group-hover:border-[var(--card-border-hover)] group-hover:shadow-lg group-hover:shadow-black/30">
        {/* Image Container - lighter background so watch pops */}
        <div className="relative aspect-square overflow-hidden bg-[var(--card-bg-inner)]">
          {/* Image */}
          <Image
            src={watch.image}
            alt={`${watch.brand} ${watch.model}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
            {watch.newArrival && (
              <span className="text-[9px] tracking-[0.15em] uppercase bg-white text-black px-2.5 py-1 font-medium">
                New
              </span>
            )}
            {watch.condition === 'Excellent' && (
              <span className="text-[9px] tracking-[0.15em] uppercase bg-[#243755] text-white px-2.5 py-1 font-medium">
                Excellent
              </span>
            )}
          </div>

          {/* Quick View on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-[10px] tracking-[0.2em] uppercase border border-white px-5 py-2.5">
              View Details
            </span>
          </div>
        </div>

        {/* Info - with padding inside card */}
        <div className="p-4 space-y-1">
          <p className="text-[var(--text-muted)] text-[10px] tracking-[0.2em] uppercase font-medium">
            {watch.brand}
          </p>
          <h3 className="font-serif text-base text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors duration-300">
            {watch.model}
          </h3>
          <p className="text-[var(--text-muted)] text-xs">
            {watch.reference} · {watch.year}
          </p>
          <p className="text-[var(--text-primary)] font-serif text-base sm:text-lg pt-2">
            {formatPrice(watch.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
