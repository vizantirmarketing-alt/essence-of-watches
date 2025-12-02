'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { watches } from '@/data/watches';
import RelatedWatches from '@/components/product-page/RelatedWatches';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { formatPrice } = useCurrency();

  const watch = watches.find((w) => w.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  if (!watch) {
    return (
      <main className="min-h-screen bg-[var(--bg-primary)] pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-[var(--text-primary)] mb-4">Watch not found</h1>
          <Link
            href="/shop"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
          >
            Return to shop
          </Link>
        </div>
      </main>
    );
  }

  // Mock multiple images (in real app, use watch.images array)
  const images = [watch.image, watch.image, watch.image, watch.image, watch.image];

  const specifications = [
    { label: 'Brand', value: watch.brand },
    { label: 'Model', value: watch.model },
    { label: 'Reference', value: watch.reference },
    { label: 'Year', value: watch.year.toString() },
    { label: 'Dial', value: watch.dialColor },
    { label: 'Case Size', value: watch.caseSize },
    { label: 'Case Material', value: watch.caseMaterial },
    { label: 'Movement', value: watch.movement },
    { label: 'Condition', value: watch.condition },
    { label: 'Box & Papers', value: watch.boxPapers },
  ];

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8">
          <ol className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--text-primary)] transition">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/shop" className="hover:text-[var(--text-primary)] transition">
                Shop
              </Link>
            </li>
            <li>/</li>
            <li className="text-[var(--text-secondary)]">{watch.model}</li>
          </ol>
        </nav>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Left - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-[var(--card-bg)] rounded-lg overflow-hidden">
              <Image
                src={images[selectedImage]}
                alt={`${watch.brand} ${watch.model}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-[var(--text-primary)]'
                      : 'border-transparent hover:border-[var(--text-muted)]'
                  }`}
                >
                  <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Details */}
          <div className="space-y-6">
            {/* Title & Price */}
            <div>
              <p className="text-[var(--text-muted)] text-[11px] tracking-[0.2em] uppercase mb-2">
                {watch.brand}
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[var(--text-primary)] mb-2">
                {watch.model}
              </h1>
              <p className="text-[var(--text-secondary)] text-sm mb-4">
                {watch.reference} · {watch.year}
              </p>
              <p className="font-serif text-3xl text-[var(--text-primary)]">
                {formatPrice(watch.price)}
              </p>
              {watch.originalMSRP && (
                <p className="text-[var(--text-muted)] text-sm mt-1">
                  MSRP: {formatPrice(watch.originalMSRP)}
                </p>
              )}
            </div>

            {/* Quick Info Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-center">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                  Condition
                </p>
                <p className="text-sm text-[var(--text-primary)] font-medium">{watch.condition}</p>
              </div>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-center">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                  Box & Papers
                </p>
                <p className="text-sm text-[var(--text-primary)] font-medium">{watch.boxPapers}</p>
              </div>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-center">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                  Year
                </p>
                <p className="text-sm text-[var(--text-primary)] font-medium">{watch.year}</p>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-[var(--accent-steel)] text-white px-4 py-3 rounded">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
                <div>
                  <p className="text-xs font-medium">Fast Delivery</p>
                  <p className="text-[10px] opacity-80">1-3 Working Days</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[var(--accent-steel)] text-white px-4 py-3 rounded">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div>
                  <p className="text-xs font-medium">Authenticity</p>
                  <p className="text-[10px] opacity-80">100% Guaranteed</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] py-4 text-[11px] tracking-[0.2em] uppercase font-medium hover:opacity-90 transition">
                Add to Cart
              </button>
              <button className="w-full border border-[var(--border)] text-[var(--text-primary)] py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-[var(--card-bg)] transition">
                Make an Offer
              </button>
            </div>

            {/* Contact Note */}
            <p className="text-[var(--text-muted)] text-xs text-center">
              Questions?{' '}
              <Link
                href="/contact"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline"
              >
                Contact us
              </Link>{' '}
              to discuss this timepiece.
            </p>
          </div>
        </div>

        {/* Product Specifications */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-10">
            Product Specifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-0">
            {specifications.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between items-baseline py-5 border-b border-[var(--border)]"
              >
                <span className="text-[var(--text-muted)] text-[13px] tracking-wide">
                  {spec.label}
                </span>
                <span className="text-[var(--text-primary)] text-[15px] font-medium">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Accordion Sections */}
        <section className="mb-16 border-t border-[var(--border)]">
          {/* Description */}
          <div className="border-b border-[var(--border)]">
            <button
              onClick={() => toggleAccordion('description')}
              className="w-full flex items-center justify-between py-7 text-left group"
            >
              <span className="font-serif text-xl text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors">
                Description
              </span>
              <svg
                className={`w-4 h-4 text-[var(--text-muted)] transition-transform duration-300 ${
                  activeAccordion === 'description' ? 'rotate-45' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            {activeAccordion === 'description' && (
              <div className="pb-6 text-[var(--text-secondary)] text-sm leading-relaxed">
                <p>
                  This stunning {watch.brand} {watch.model} features a {watch.dialColor.toLowerCase()}{' '}
                  dial housed in a {watch.caseSize} {watch.caseMaterial.toLowerCase()} case. Powered by
                  an {watch.movement.toLowerCase()} movement, this timepiece represents the pinnacle of
                  Swiss watchmaking excellence.
                </p>
                <p className="mt-4">
                  The watch comes in {watch.condition.toLowerCase()} condition with{' '}
                  {watch.boxPapers.toLowerCase()}, making it an exceptional addition to any collection.
                </p>
              </div>
            )}
          </div>

          {/* Warranty */}
          <div className="border-b border-[var(--border)]">
            <button
              onClick={() => toggleAccordion('warranty')}
              className="w-full flex items-center justify-between py-7 text-left group"
            >
              <span className="font-serif text-xl text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors">
                Warranty
              </span>
              <svg
                className={`w-4 h-4 text-[var(--text-muted)] transition-transform duration-300 ${
                  activeAccordion === 'warranty' ? 'rotate-45' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            {activeAccordion === 'warranty' && (
              <div className="pb-6 text-[var(--text-secondary)] text-sm leading-relaxed">
                <p>
                  Every timepiece from Essence of Watches comes with a comprehensive 2-year warranty
                  covering manufacturing defects and movement issues. Our in-house master watchmakers
                  thoroughly inspect and service each watch before shipping.
                </p>
              </div>
            )}
          </div>

          {/* Delivery */}
          <div className="border-b border-[var(--border)]">
            <button
              onClick={() => toggleAccordion('delivery')}
              className="w-full flex items-center justify-between py-7 text-left group"
            >
              <span className="font-serif text-xl text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors">
                Delivery
              </span>
              <svg
                className={`w-4 h-4 text-[var(--text-muted)] transition-transform duration-300 ${
                  activeAccordion === 'delivery' ? 'rotate-45' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            {activeAccordion === 'delivery' && (
              <div className="pb-6 text-[var(--text-secondary)] text-sm leading-relaxed">
                <p>
                  We offer fully insured, tracked shipping via FedEx Priority. Domestic orders
                  typically arrive within 1-3 business days. International shipping is available to
                  most countries with delivery times of 3-7 business days.
                </p>
                <p className="mt-4">
                  All shipments require a signature upon delivery for security purposes.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Watches */}
        <RelatedWatches currentWatch={watch} />
      </div>
    </main>
  );
}

