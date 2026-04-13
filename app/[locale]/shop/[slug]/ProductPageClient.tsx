'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { BadgeCheck, Shield, RotateCcw, Truck, Heart, Maximize2 } from 'lucide-react';
import 'yet-another-react-lightbox/styles.css';
import RelatedWatches from '@/components/product-page/RelatedWatches';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useCart } from '@/contexts/CartContext';
import { useCartDrawer } from '@/components/cart/CartDrawer';
import { normalizeWatchStatus } from '@/data/watches';
import { useWishlist } from '@/contexts/WishlistContext';
import { sanityWatchToProduct } from '@/lib/watchToProduct';
import AuthCertificate from '@/components/product/AuthCertificate';
import PriceContext from '@/components/product/PriceContext';
import type { SanityListingWatch } from '@/types/sanityListingWatch';

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
  serialNumber?: string;
  retailPrice?: number;
  marketValue?: string;
}

interface ProductPageClientProps {
  watch: SanityWatch;
  relatedWatches: SanityListingWatch[];
}

export default function ProductPageClient({ watch, relatedWatches }: ProductPageClientProps) {
  const t = useTranslations('ProductPage');
  // Use actual images from Sanity, or fallback to first image repeated
  const images =
    watch.images && watch.images.length > 0
      ? watch.images
      : watch.images?.[0]
        ? [watch.images[0]]
        : [];

  const { formatPrice } = useCurrency();
  const { addItem } = useCart();
  const { openDrawer } = useCartDrawer();
  const { toggleItem, isInWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);

  const serialNumberTrimmed = watch.serialNumber?.trim() ?? '';

  const lightboxSlides = useMemo(
    () => images.map((src) => ({ src, alt: watch.name })),
    [images, watch.name],
  );

  const openLightbox = useCallback(() => {
    setLightboxIndex(selectedImage);
    setLightboxOpen(true);
  }, [selectedImage]);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const status = normalizeWatchStatus(watch.status);
  const commerceDisabled = status === 'sold' || status === 'reserved';
  const inWishlist = isInWishlist(watch._id);

  const brand = t('defaultBrand');
  const model = watch.name.replace(/^Rolex\s+/i, '');

  const boxPapersDisplay = useMemo(() => {
    if (watch.box && watch.papers) return t('boxPapers.fullSet');
    if (watch.box) return t('boxPapers.boxOnly');
    if (watch.papers) return t('boxPapers.papersOnly');
    return t('boxPapers.watchOnly');
  }, [watch.box, watch.papers, t]);

  const boxPapersCart: 'Full Set' | 'Box Only' | 'Papers Only' | 'Watch Only' =
    watch.box && watch.papers ? 'Full Set' : watch.box ? 'Box Only' : watch.papers ? 'Papers Only' : 'Watch Only';

  const specifications = useMemo(
    () => [
      { label: t('spec.brand'), value: brand },
      { label: t('spec.model'), value: model },
      { label: t('spec.reference'), value: watch.reference },
      { label: t('spec.year'), value: watch.year.toString() },
      { label: t('spec.dial'), value: watch.dialColor },
      { label: t('spec.caseSize'), value: watch.caseDiameter },
      { label: t('spec.caseMaterial'), value: watch.material },
      { label: t('spec.condition'), value: watch.condition },
      { label: t('spec.boxPapers'), value: boxPapersDisplay },
    ],
    [t, brand, model, watch, boxPapersDisplay],
  );

  const toggleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  useEffect(() => {
    if (!certificateModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCertificateModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [certificateModalOpen]);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8">
          <ol className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--text-primary)] transition">
                {t('breadcrumbHome')}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/shop" className="hover:text-[var(--text-primary)] transition">
                {t('breadcrumbShop')}
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
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <button
                    type="button"
                    onClick={openLightbox}
                    className="absolute inset-0 z-[1] cursor-zoom-in bg-transparent text-left transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-secondary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--card-bg)]"
                    aria-label={t('ariaLightbox', { name: watch.name })}
                  />
                  <div
                    className="pointer-events-none absolute bottom-3 left-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)]/90 text-[var(--text-primary)] shadow-sm backdrop-blur-sm"
                    aria-hidden
                  >
                    <Maximize2 className="h-4 w-4 opacity-80" strokeWidth={1.5} />
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(sanityWatchToProduct(watch));
                    }}
                    className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-primary)] transition hover:border-[var(--text-muted)]"
                    aria-label={inWishlist ? t('ariaWishlistRemove') : t('ariaWishlistAdd')}
                    aria-pressed={inWishlist}
                  >
                    <Heart
                      className="h-[18px] w-[18px]"
                      strokeWidth={1.5}
                      fill={inWishlist ? 'currentColor' : 'none'}
                    />
                  </button>
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
                        <Image src={img} alt={t('thumbAlt', { n: index + 1 })} fill className="object-cover" />
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
              <div className="flex flex-wrap items-start gap-x-4 gap-y-3">
                <PriceContext
                  listingPrice={watch.price}
                  retailPrice={watch.retailPrice}
                  marketValue={watch.marketValue}
                  formatPrice={formatPrice}
                />
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {status === 'sold' && (
                    <span className="text-[9px] tracking-[0.15em] uppercase font-medium border border-[var(--text-primary)] text-[var(--text-primary)] px-2.5 py-1">
                      {t('statusSold')}
                    </span>
                  )}
                  {status === 'reserved' && (
                    <span className="text-[9px] tracking-[0.15em] uppercase font-medium bg-[var(--accent)] text-black px-2.5 py-1">
                      {t('statusReserved')}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Info Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-center">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                  {t('badgeCondition')}
                </p>
                <p className="text-sm text-[var(--text-primary)] font-medium">
                  {watch.condition}{' '}
                  <Link
                    href="/condition-guide"
                    className="text-[var(--text-muted)] hover:text-[var(--text-secondary)] text-[10px] font-normal underline"
                  >
                    {t('whatsThis')}
                  </Link>
                </p>
              </div>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-center">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                  {t('badgeBoxPapers')}
                </p>
                <p className="text-sm text-[var(--text-primary)] font-medium">{boxPapersDisplay}</p>
              </div>
              <div className="bg-[var(--card-bg)] border border-[var(--card-border)] px-4 py-3 text-center">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] mb-1">
                  {t('badgeYear')}
                </p>
                <p className="text-sm text-[var(--text-primary)] font-medium">{watch.year}</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="mt-6 pt-6 border-t border-[var(--border)]">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-serif text-lg text-[var(--text-primary)]">{t('includedTitle')}</h3>
                {serialNumberTrimmed ? (
                  <button
                    type="button"
                    onClick={() => setCertificateModalOpen(true)}
                    className="self-start border border-[var(--border)] px-4 py-2.5 text-[10px] tracking-[0.2em] uppercase text-[var(--text-primary)] transition hover:border-[var(--text-secondary)] hover:bg-[var(--card-bg)] sm:self-auto"
                  >
                    {t('viewCertificate')}
                  </button>
                ) : null}
              </div>
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
                  <span>{t('includedWatch')}</span>
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
                      <span>{t('includedBoxYes')}</span>
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
                      <span className="text-[var(--text-muted)]">{t('includedBoxNo')}</span>
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
                      <span>{t('includedPapersYes')}</span>
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
                      <span className="text-[var(--text-muted)]">{t('includedPapersNo')}</span>
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
                  <span>{t('includedCertificate')}</span>
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
                  <span>{t('includedPackaging')}</span>
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
                  <p className="text-xs font-medium">{t('fastDelivery')}</p>
                  <p className="text-[10px] opacity-80">{t('fastDeliveryDays')}</p>
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
                  <p className="text-xs font-medium">{t('authenticityShort')}</p>
                  <p className="text-[10px] opacity-80">{t('authenticityGuaranteed')}</p>
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
                    brand,
                    model: watch.name,
                    reference: watch.reference,
                    year: watch.year,
                    price: watch.price,
                    condition:
                      (watch.condition as 'Unworn' | 'Excellent' | 'Very Good' | 'Good' | 'Fair') ||
                      'Excellent',
                    boxPapers: boxPapersCart,
                    warranty: t('cartWarranty'),
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
                {t('addToCart')}
              </button>
              {commerceDisabled ? (
                <span
                  aria-disabled
                  className="w-full border border-[var(--border)] text-[var(--text-primary)] py-4 text-[11px] tracking-[0.2em] uppercase block text-center opacity-50 cursor-not-allowed"
                >
                  {t('makeOffer')}
                </span>
              ) : (
                <Link
                  href={`/contact?watch=${encodeURIComponent(watch.name)}&ref=${watch.reference}`}
                  className="w-full border border-[var(--border)] text-[var(--text-primary)] py-4 text-[11px] tracking-[0.2em] uppercase hover:bg-[var(--card-bg)] transition block text-center"
                >
                  {t('makeOffer')}
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
                    {t('trustAuthGuaranteed')}
                  </span>
                </Link>
                <Link
                  href="/warranty"
                  className="flex items-center gap-2 p-3 border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors group"
                >
                  <Shield size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                    {t('trustWarranty')}
                  </span>
                </Link>
                <Link
                  href="/returns"
                  className="flex items-center gap-2 p-3 border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors group"
                >
                  <RotateCcw size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                    {t('trustInspection')}
                  </span>
                </Link>
                <Link
                  href="/shipping"
                  className="flex items-center gap-2 p-3 border border-[var(--border)] hover:border-[var(--text-muted)] transition-colors group"
                >
                  <Truck size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] tracking-[0.1em] uppercase text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                    {t('trustShipping')}
                  </span>
                </Link>
              </div>
              <p className="text-[var(--text-muted)] text-[10px] text-center">
                {t('questionsPrefix')}{' '}
                <Link
                  href="/contact"
                  className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline"
                >
                  {t('questionsContact')}
                </Link>{' '}
                {t('questionsOrCall')}{' '}
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
            {t('specsTitle')}
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
            {t('warrantyReturnsTitle')}
          </h2>
          <div className="max-w-3xl">
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
              {t.rich('warrantyReturnsRich', {
                warranty: (chunks) => (
                  <Link
                    href="/warranty"
                    className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] underline"
                  >
                    {chunks}
                  </Link>
                ),
                returns: (chunks) => (
                  <Link
                    href="/returns"
                    className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] underline"
                  >
                    {chunks}
                  </Link>
                ),
                inspection: (chunks) => (
                  <strong className="text-[var(--text-primary)] font-medium">{chunks}</strong>
                ),
              })}
            </p>
          </div>
        </section>

        {/* Shipping Information */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-6">
            {t('shippingInfoTitle')}
          </h2>
          <div className="max-w-3xl">
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
              {t('shippingInfoBody')}
            </p>
          </div>
        </section>

        {/* Why Essence of Watches */}
        <section className="mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-6">
            {t('whyTitle')}
          </h2>
          <div className="max-w-3xl">
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
              {t('whyBody')}
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
                {t('accordionDescription')}
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
                      {t('descriptionFallback1', {
                        brand,
                        model,
                        dial: watch.dialColor,
                        caseSize: watch.caseDiameter,
                        material: watch.material,
                      })}
                    </p>
                    <p className="mt-4">
                      {t('descriptionFallback2', {
                        condition: watch.condition,
                        boxPapers: boxPapersDisplay,
                      })}
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
                {t('accordionWarranty')}
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
                <p>{t('accordionWarrantyBody')}</p>
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
                {t('accordionDelivery')}
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
                {t('accordionDeliveryBody')
                  .split('\n\n')
                  .map((para, i) => (
                    <p key={i} className={i > 0 ? 'mt-4' : ''}>
                      {para}
                    </p>
                  ))}
              </div>
            )}
          </div>
        </section>

        {/* Related Watches */}
        <RelatedWatches watches={relatedWatches} />

        {lightboxSlides.length > 0 && (
          <Lightbox
            open={lightboxOpen}
            close={closeLightbox}
            index={lightboxIndex}
            slides={lightboxSlides}
            plugins={[Zoom]}
            zoom={{ scrollToZoom: true }}
            controller={{ closeOnBackdropClick: true }}
            on={{ view: ({ index }) => setLightboxIndex(index) }}
            styles={{
              container: { backgroundColor: 'rgba(10, 10, 10, 0.96)' },
            }}
          />
        )}

        <AnimatePresence>
          {certificateModalOpen && serialNumberTrimmed ? (
            <motion.div
              key="certificate-overlay"
              role="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 print:static print:inset-auto print:bg-transparent print:p-0"
              onClick={() => setCertificateModalOpen(false)}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="certificate-dialog-title"
                initial={{ opacity: 0, scale: 0.97, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 16 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-[var(--border)] bg-[var(--bg-primary)] p-5 shadow-2xl print:max-h-none print:overflow-visible print:rounded-none print:border-0 print:p-0 print:shadow-none"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
                  <h2
                    id="certificate-dialog-title"
                    className="font-serif text-lg text-[var(--text-primary)]"
                  >
                    {t('certificateModalTitle')}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="border border-[var(--border)] px-4 py-2 text-[10px] tracking-[0.2em] uppercase text-[var(--text-primary)] transition hover:bg-[var(--card-bg)]"
                    >
                      {t('print')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setCertificateModalOpen(false)}
                      className="bg-[var(--text-primary)] px-4 py-2 text-[10px] tracking-[0.2em] uppercase text-[var(--bg-primary)] transition hover:opacity-90"
                    >
                      {t('close')}
                    </button>
                  </div>
                </div>
                <AuthCertificate
                  brand={brand}
                  model={model}
                  reference={watch.reference}
                  serialNumber={serialNumberTrimmed}
                  slug={watch.slug}
                />
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </main>
  );
}

