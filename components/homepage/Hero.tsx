'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Full-bleed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-[position:65%_center] bg-no-repeat"
        style={{ backgroundImage: "url('/eow-sub-hero.jpg')" }}
      />
      
      {/* Subtle gradient for text area */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase mb-6">
              Curated Collection
            </p>
            
            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 tracking-[-0.02em]">
              Where Time<br />
              Meets Legacy
            </h1>
            
            {/* Subtle Divider */}
            <div className="w-12 h-[1px] bg-white/30 mb-8" />
            
            {/* Subtext */}
            <p className="text-white/60 text-base leading-relaxed mb-12 max-w-sm">
              Authenticated pre-owned timepieces from the world's most distinguished houses.
            </p>

            {/* CTA - Minimal */}
            <div className="flex items-center gap-8">
              <Link
                href="/shop"
                className="group flex items-center gap-3 text-white text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
              >
                Explore Collection
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/sell"
                className="text-white/50 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors"
              >
                Sell Your Watch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Watch Crown Inspired */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/30 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="relative w-8 h-8">
            {/* Outer ring like watch bezel */}
            <div className="absolute inset-0 rounded-full border border-white/20" />
            {/* Inner dot that pulses like lume */}
            <div className="absolute inset-2 rounded-full bg-white/40 animate-ping" />
            <div className="absolute inset-2 rounded-full bg-white/60" />
            {/* Animated hand */}
            <div className="absolute top-1/2 left-1/2 w-[1px] h-3 bg-white/60 origin-bottom -translate-x-1/2 -translate-y-full animate-[spin_3s_linear_infinite]" />
          </div>
        </div>
      </div>
    </section>
  );
}