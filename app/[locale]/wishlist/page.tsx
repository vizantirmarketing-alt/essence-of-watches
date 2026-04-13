'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import { useCart } from '@/contexts/CartContext';
import { useCartDrawer } from '@/components/cart/CartDrawer';

export default function WishlistPage() {
  const { items, removeItem } = useWishlist();
  const { formatPrice } = useCurrency();
  const { addItem } = useCart();
  const { openDrawer } = useCartDrawer();

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
            Your Collection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text-primary)] mt-3">
            Wishlist
          </h1>
          <p className="text-[var(--text-secondary)] mt-4">
            {items.length} {items.length === 1 ? 'timepiece' : 'timepieces'} saved
          </p>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--bg-primary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-[var(--text-muted)]"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-3">
              Your Wishlist is Empty
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
              Save your favorite timepieces to keep track of watches you&apos;re interested in.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
            >
              Explore Collection
            </Link>
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {items.map((item, idx) => {
                const image = item.images?.[0];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    className="group bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] overflow-hidden"
                  >
                    <div className="relative aspect-square bg-[var(--bg-primary)] dark:bg-[#0a0a0a] overflow-hidden">
                      {image ? (
                        <Image
                          src={image}
                          alt={`${item.brand} ${item.model}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="w-16 h-16 text-[var(--text-muted)]/30"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="0.5"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white dark:bg-[#1a1a1a] border border-[var(--border)] flex items-center justify-center text-red-500 opacity-100 hover:bg-red-50 dark:hover:bg-red-500/20 hover:border-red-300 dark:hover:border-red-500/50 transition-all shadow-sm"
                        aria-label="Remove from wishlist"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>

                      <Link
                        href={`/shop/${item.slug}`}
                        className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300"
                      >
                        <span className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg">
                          View Details
                        </span>
                      </Link>
                    </div>

                    <div className="p-5">
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                        {item.brand}
                      </p>
                      <h3 className="font-serif text-lg text-[var(--text-primary)] mb-1">
                        {item.model}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mb-3">
                        Ref. {item.reference} • {item.condition} • {item.year}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-medium text-[var(--text-primary)]">
                            {formatPrice(item.price)}
                          </span>
                          {item.originalMSRP != null && (
                            <span className="text-sm text-[var(--text-muted)] line-through">
                              {formatPrice(item.originalMSRP)}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-[var(--border)] dark:border-[#262626] flex gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            addItem(item);
                            openDrawer();
                          }}
                          className="flex-1 bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] py-2.5 text-xs tracking-[0.1em] uppercase hover:opacity-90 transition"
                        >
                          Add to Cart
                        </button>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="px-3 py-2.5 border border-[var(--border)] dark:border-[#444] text-[var(--text-muted)] hover:text-red-500 hover:border-red-500 transition"
                          aria-label="Remove"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Continue Shopping
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </main>
  );
}
