'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, Shield, RotateCcw, Truck } from 'lucide-react';
import RelatedWatches from '@/components/product-page/RelatedWatches';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useCart } from '@/contexts/CartContext';
import { useCartDrawer } from '@/components/cart/CartDrawer';
import { normalizeWatchStatus } from '@/data/watches';

interface SanityWatch {
  _id: string;
  name: string;
  slug: string;
  reference: string;
  price: number;
  status?: string;
  collection: string;
  year: number;
  caseDiameter: string;
  dialColor: string;
  material: string;
  condition: string;
  box: boolean;
  papers: boolean;
  description?: string;
  featured?: boolean;
  images: string[];
}

interface ProductPageClientProps {
  watch: SanityWatch;
}

export default function ProductPageClient({ watch }: ProductPageClientProps) {
  const { formatPrice } = useCurrency();
  const { addItem } = useCart();
  const { openDrawer } = useCartDrawer();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const status = normalizeWatchStatus(watch.status);
  const commerceDisabled = status === 'sold' || status === 'reserved';

  // Use actual images from Sanity, or fallback to first image repeated
  const images = watch.images && watch.images.length > 0 
    ? watch.images 
    : watch.images?.[0] 
      ? [watch.images[0]] 
      : [];

  // Determine brand from name (assuming "Rolex" for now, can be enhanced)
  const brand = 'Rolex';
  const model = watch.name.replace('Rolex ', '');

  // Format box & papers
  const boxPapers = watch.box && watch.papers 
    ? 'Full Set' 
    : watch.box 
      ? 'Box Only' 
      : watch.papers 
        ? 'Papers Only' 
        : 'Watch Only';

  const specifications = [
    { label: 'Brand', value: brand },
    { label: 'Model', value: model },
    { label: 'Reference', value: watch.reference },
    { label: 'Year', value: watch.year.toString() },
    { label: 'Dial', value: watch.dialColor },
    { label: 'Case Size', value: watch.caseDiameter },
    { label: 'Case Material', value: watch.material },
    { label: 'Condition', value: watch.condition },
    { label: 'Box & Papers', value: boxPapers },
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
            <li className="text-[var(--text-secondary)]">{model}</li>
          </ol>
        </nav>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Left - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            {images.length > 0 && (
              <>
                <div className="relative aspect-square bg-[var(--card-bg)] rounded-lg overflow-hidden">
                  <Image
                    src={images[selectedImage]}
                    alt={watch.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Thumbnail Gallery */}
                {images.length > 1 && (
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
                )}
              </>
            )}
          </div>

          {/* Right - Details */}
          <div className="space-y-6">
            {/* Title & Price */}
            <div>
              <p className="text-[var(--text-muted)] text-[11px] tracking-[0.2em] uppercase mb-2">
                {brand}
              </p>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[var(--text-primary)] mb-2">
                {model}
              </h1>
              <p className="text-[var(--text-secondary)] text-sm mb-4">
                {watch.reference} · {watch.year}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="font-serif text-3xl text-[var(--text-primary)]">
                  {formatPrice(watch.price)}
                </p>
                {status === 'sold' && (
                  <span className="text-[9px] tracking-[0.15em] uppercase font-medium border border-[var(--text-primary)] text-[var(--text-primary)] px-2.5 py-1">
                    Sold
                  </span>
                )}
                {status === 'reserved' && (
                  <span className="text-[9px] tracking-[0.15em] uppercase font-medium bg-[var(--accent)] text-black px-2.5 py-1">
                    Reserved
                  </span>
                )}
              </div>
            </div>

            {/* Quick Info Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-center">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                  Condition
                </p>
                <p className="text-sm text-[var(--text-primary)] font-medium">
                  {watch.condition}{' '}
                  <Link
                    href="/condition-guide"
                    className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] text-[10px] font-normal underline"
                  >
                    (What's this?)
                  </Link>
                </p>
              </div>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-center">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                  Box & Papers
                </p>
                <p className="text-sm text-[var(--text-primary)] font-medium">{boxPapers}</p>
              </div>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-center">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                  Year
                </p>
                <p className="text-sm text-[var(--text-primary)] font-medium">{watch.year}</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <h3 className="font-serif text-lg text-[var(--text-primary)] mb-4">
                What's Included
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-green-500 flex-shrink-0"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>The watch itself</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  {watch.box ? (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-green-500 flex-shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>Original box included</span>
                    </>
                  ) : (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[var(--text-muted)] flex-shrink-0"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      <span className="text-[var(--text-muted)]">No original box</span>
                    </>
                  )}
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  {watch.papers ? (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-green-500 flex-shrink-0"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>Papers/warranty card included</span>
                    </>
                  ) : (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[var(--text-muted)] flex-shrink-0"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      <span className="text-[var(--text-muted)]">No papers</span>
                    </>
                  )}
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-green-500 flex-shrink-0"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Essence of Watches authentication certificate</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-green-500 flex-shrink-0"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Protective packaging</span>
                </li>
              </ul>
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
              <button
                type="button"
                disabled={commerceDisabled}
                onClick={() => {
                  if (commerceDisabled) return;
                  addItem({
                    id: watch._id,
                    slug: watch.slug,
                    brand: 'Rolex',
                    model: watch.name,
                    reference: watch.reference,
                    year: watch.year,
                    price: watch.price,
                    condition: (watch.condition as 'Excellent' | 'Very Good' | 'Good' | 'Fair') || 'Excellent',
                    boxPapers: watch.box && watch.papers ? 'Full Set' : watch.box ? 'Box Only' : watch.papers ? 'Papers Only' : 'Watch Only',
                    warranty: '2 Year Warranty',
                    specs: {
                      caseMaterial: watch.material || '',
                      caseSize: watch.caseDiameter || '',
                      dialColor: watch.dialColor || '',
                      movement: 'Automatic',
                      bracelet: 'Oyster',
                      waterResistance: '100m',
                    },
                    images: watch.images || [],
                    featured: watch.featured || false,
                    newArrival: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                  });
                  openDrawer();
                }}
                className={`w-full bg-[var(--text-primary)] text-[var(--bg-primary)] py-4 text-[11px] tracking-[0.2em] uppercase font-medium transition ${
                  commerceDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                Add to Cart
              </button>
              {commerceDisabled ? (
                <span
                  aria-disabled
                  className="w-full border border-[var(--border)] text-[var(--text-primary)] py-4 text-[11px] tracking-[0.2em] uppercase block text-center opacity-50 cursor-not-allowed"
                >
                  Make an Offer
                </span>
              ) : (
                <Link
                  href={`/contact?watch=${encodeURIComponent(watch.name)}&ref=${watch.reference}`}
                  className="w-full border border-[var(--border)] text-[var(--text-primary)] py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-[var(--card-bg)] transition block text-center"
                >
                  Make an Offer
                </Link>
              )}
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <Link
                  href="/authenticity"
                  className="flex items-center gap-2 p-3 border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors group"
                >
                  <BadgeCheck size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                    Authenticity Guaranteed
                  </span>
                </Link>
                <Link
                  href="/warranty"
                  className="flex items-center gap-2 p-3 border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors group"
                >
                  <Shield size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                    2-Year Warranty
                  </span>
                </Link>
                <Link
                  href="/returns"
                  className="flex items-center gap-2 p-3 border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors group"
                >
                  <RotateCcw size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                    14-Day Returns
                  </span>
                </Link>
                <Link
                  href="/shipping"
                  className="flex items-center gap-2 p-3 border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors group"
                >
                  <Truck size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                    Free Insured Shipping
                  </span>
                </Link>
              </div>
              <p className="text-[var(--text-muted)] text-[10px] text-center">
                Questions?{' '}
                <Link
                  href="/contact"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline"
                >
                  Contact us
                </Link>{' '}
                or call{' '}
                <a
                  href="tel:+17025551234"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline"
                >
                  (702) 555-1234
                </a>
              </p>
            </div>
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

        {/* Warranty & Returns */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-6">
            Warranty & Returns
          </h2>
          <div className="max-w-3xl">
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
              This timepiece is covered by an{' '}
              <Link
                href="/warranty"
                className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] underline"
              >
                Essence of Watches warranty
              </Link>{' '}
              for added peace of mind. Every watch is thoroughly inspected and authenticated prior to sale. Insured shipping is included.{' '}
              <Link
                href="/returns"
                className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] underline"
              >
                Returns
              </Link>{' '}
              are accepted within 14 days.
            </p>
          </div>
        </section>

        {/* Shipping Information */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-6">
            Shipping Information
          </h2>
          <div className="max-w-3xl">
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
              All orders are shipped fully insured via FedEx or UPS. Orders are typically processed within 1-2 business days. Tracking information will be provided once your order ships.
            </p>
          </div>
        </section>

        {/* Why Essence of Watches */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-6">
            Why Essence of Watches
          </h2>
          <div className="max-w-3xl">
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
              Every watch we offer is carefully curated, authenticated, and inspected to meet our standards. We focus on quality over volume, offering timepieces we would confidently wear ourselves. No marketplaces. No uncertainty. Just exceptional watches, sourced with intention.
            </p>
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
                {watch.description ? (
                  <p>{watch.description}</p>
                ) : (
                  <>
                    <p>
                      This stunning {brand} {model} features a {watch.dialColor.toLowerCase()}{' '}
                      dial housed in a {watch.caseDiameter} {watch.material.toLowerCase()} case.
                    </p>
                    <p className="mt-4">
                      The watch comes in {watch.condition.toLowerCase()} condition with{' '}
                      {boxPapers.toLowerCase()}, making it an exceptional addition to any collection.
                    </p>
                  </>
                )}
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
        <RelatedWatches currentWatch={{
          id: watch._id,
          slug: watch.slug,
          brand,
          model,
          reference: watch.reference,
          year: watch.year,
          price: watch.price,
          condition: watch.condition as any,
          boxPapers: boxPapers as any,
          dialColor: watch.dialColor,
          caseSize: watch.caseDiameter,
          caseMaterial: watch.material,
          movement: '',
          image: images[0] || '',
          images,
          featured: watch.featured || false,
          newArrival: false,
        }} />
      </div>
    </main>
  );
}

