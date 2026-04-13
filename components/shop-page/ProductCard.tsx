'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Watch, type WatchStatus } from '@/data/watches';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { watchToProduct } from '@/lib/watchToProduct';

interface ProductCardProps {
  watch: Watch;
}

export default function ProductCard({ watch }: ProductCardProps) {
  const { formatPrice } = useCurrency();
  const { toggleItem, isInWishlist } = useWishlist();
  const status: WatchStatus = watch.status ?? 'available';
  const inWishlist = isInWishlist(watch.id);

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
            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${status === 'sold' ? 'opacity-60' : ''}`}
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

          <div
            className={
              status === 'reserved'
                ? 'absolute top-3 right-3 z-[25] flex items-center gap-2 flex-row-reverse'
                : 'absolute top-3 right-3 z-[25]'
            }
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleItem(watchToProduct(watch));
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[var(--text-primary)] shadow-sm backdrop-blur-sm transition hover:bg-white"
              aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
              aria-pressed={inWishlist}
            >
              <Heart
                className="h-[18px] w-[18px]"
                strokeWidth={1.5}
                fill={inWishlist ? 'currentColor' : 'none'}
              />
            </button>
            {status === 'reserved' && (
              <span className="text-[9px] tracking-[0.15em] uppercase bg-[var(--accent)] text-black px-2.5 py-1 font-medium">
                Reserved
              </span>
            )}
          </div>

          {status === 'sold' && (
            <div
              className="absolute inset-0 z-[18] flex items-center justify-center bg-black/50 pointer-events-none"
              aria-hidden
            >
              <span className="text-white text-[11px] tracking-[0.25em] uppercase font-medium border border-white/80 px-4 py-2">
                Sold
              </span>
            </div>
          )}

          {/* Quick View on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center z-10">
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
