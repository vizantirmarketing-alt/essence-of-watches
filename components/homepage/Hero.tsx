'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {/* Full-bleed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[position:65%_center] bg-no-repeat"
        style={{ backgroundImage: "url('/eow-sub-hero.jpg')" }}
      />

      {/* Darken hero on small viewports only — keeps text legible when the crop reads lighter */}
      <div
        className="absolute inset-0 pointer-events-none bg-black/50 sm:bg-transparent"
        aria-hidden
      />

      {/* Subtle gradient for text area */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <p className="text-white text-[10px] tracking-[0.3em] uppercase mb-6">{t('eyebrow')}</p>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 tracking-[-0.02em]">
              {t('headline1')}
              <br />
              {t('headline2')}
            </h1>

            {/* Subtle Divider */}
            <div className="w-12 h-[1px] bg-white/30 mb-8" />

            {/* Subtext */}
            <p className="text-white/60 text-base leading-relaxed mb-12 max-w-sm">{t('subtext')}</p>

            {/* CTA - Minimal */}
            <div className="flex items-center gap-8">
              <Link
                href="/shop"
                className="group flex items-center gap-3 text-white text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
              >
                {t('ctaExplore')}
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
                {t('ctaSell')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white text-[9px] tracking-[0.3em] uppercase">{t('scrollHint')}</span>
          <div className="size-8" aria-hidden>
            <style>
              {`
                @keyframes minuteHand {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
                @keyframes hourHand {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}
            </style>
            <svg
              className="block size-8"
              width={32}
              height={32}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="14" stroke="white" fill="none" strokeWidth="1" />
              <g
                style={{
                  transformOrigin: '16px 16px',
                  animation: 'hourHand 3600s linear infinite',
                }}
              >
                <line
                  x1="16"
                  y1="16"
                  x2="16"
                  y2="9"
                  stroke="white"
                  strokeWidth="1.35"
                  strokeLinecap="round"
                />
              </g>
              <g
                style={{
                  transformOrigin: '16px 16px',
                  animation: 'minuteHand 60s linear infinite',
                }}
              >
                <line
                  x1="16"
                  y1="16"
                  x2="16"
                  y2="5"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </g>
              <circle cx="16" cy="16" r="1.5" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
