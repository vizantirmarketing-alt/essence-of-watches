'use client';

import Link from 'next/link';
import Image from 'next/image';
import { watches } from '@/data/watches';

export default function Hero() {
  // Get a featured watch for the hero
  const featuredWatch = watches.find((w) => w.featured) || watches[0];

  return (
    <section className="relative min-h-screen bg-[var(--bg-primary)] pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-[var(--text-muted)] text-xs sm:text-[11px] tracking-[0.2em] uppercase mb-3 sm:mb-4">
              Authenticated Pre-Owned
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[var(--text-primary)] leading-[1.1] mb-4 sm:mb-6">
              Rolex<br />
              {featuredWatch.model.split(' ')[0]}
            </h1>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg mb-2">
              {featuredWatch.model} · {featuredWatch.caseSize} · {featuredWatch.dialColor} Dial ·{' '}
              {featuredWatch.year}
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-8 sm:mb-10">
              ${featuredWatch.price.toLocaleString()}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href={`/shop/${featuredWatch.slug}`}
                className="bg-[var(--text-primary)] text-[var(--bg-primary)] px-8 py-4 text-center text-sm sm:text-[11px] tracking-[0.2em] uppercase font-medium hover:opacity-90 transition"
              >
                View Watch
              </Link>
              <Link
                href="/shop"
                className="border border-[var(--text-primary)] text-[var(--text-primary)] px-8 py-4 text-center text-sm sm:text-[11px] tracking-[0.2em] uppercase hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition"
              >
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Right - Watch Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <Image
                src={featuredWatch.image}
                alt={`${featuredWatch.brand} ${featuredWatch.model}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-[var(--text-muted)] rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[var(--text-muted)] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
