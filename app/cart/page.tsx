'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';

export default function CartPage() {
  const { items, removeItem, total: cartTotal } = useCart();
  const { formatPrice } = useCurrency();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  // Map CartContext items to display format
  const cartItems = items.map((item) => ({
    id: item.product.id,
    name: item.product.model || item.product.name || 'Watch',
    ref: item.product.reference || '',
    price: item.product.price,
    image: item.product.images?.[0] || '',
    brand: item.product.brand || 'Rolex',
    condition: item.product.condition || 'Excellent',
    year: item.product.year?.toString() || '',
    quantity: item.quantity,
  }));

  const subtotal = cartTotal; // Use total from CartContext
  const shipping = 0; // Free shipping on luxury items
  const discount = promoApplied ? subtotal * 0.05 : 0; // 5% discount example
  const tax = 0; // Calculate based on location
  const total = subtotal - discount + shipping + tax;

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'WELCOME5') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code');
      setPromoApplied(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
            Review Your Selection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text-primary)] mt-3">
            Shopping Cart
          </h1>
          <p className="text-[var(--text-secondary)] mt-4">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        {/* Empty State */}
        {cartItems.length === 0 ? (
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
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl text-[var(--text-primary)] mb-3">
              Your Cart is Empty
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
              Discover our curated collection of authenticated luxury timepieces.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
            >
              Explore Collection
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Cart Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {cartItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-4 sm:p-6"
                >
                  <div className="flex gap-4 sm:gap-6">
                    {/* Image */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-[var(--bg-primary)] dark:bg-[#0a0a0a] flex-shrink-0 relative overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-[var(--text-muted)]/30"
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
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">
                            {item.brand}
                          </p>
                          <h3 className="font-serif text-lg text-[var(--text-primary)]">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[var(--text-muted)] mt-1">
                            Ref. {item.ref}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[var(--text-muted)] hover:text-red-500 transition p-1"
                          aria-label="Remove item"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-3 text-xs text-[var(--text-secondary)]">
                        <span className="px-2 py-1 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333]">
                          {item.condition}
                        </span>
                        <span className="px-2 py-1 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333]">
                          {item.year}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border)] dark:border-[#262626]">
                        <span className="text-xs text-[var(--text-muted)]">Qty: {item.quantity}</span>
                        <span className="text-lg font-medium text-[var(--text-primary)]">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Continue Shopping */}
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition mt-4"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Continue Shopping
              </Link>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6 sticky top-32">
                <h2 className="font-serif text-xl text-[var(--text-primary)] mb-6">
                  Order Summary
                </h2>

                {/* Promo Code */}
                <div className="mb-6 pb-6 border-b border-[var(--border)] dark:border-[#262626]">
                  <label className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] block mb-2">
                    Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2.5 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] text-[var(--text-primary)] text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] dark:focus:border-[#555] transition"
                    />
                    <button
                      onClick={applyPromoCode}
                      className="px-4 py-2.5 border border-[var(--border)] dark:border-[#444] text-xs tracking-[0.1em] uppercase text-[var(--text-primary)] hover:bg-[var(--bg-primary)] dark:hover:bg-[#1a1a1a] transition"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-xs text-red-500 mt-2">{promoError}</p>
                  )}
                  {promoApplied && (
                    <p className="text-xs text-green-500 mt-2">Promo code applied! 5% discount</p>
                  )}
                </div>

                {/* Summary Lines */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Subtotal</span>
                    <span className="text-[var(--text-primary)]">{formatPrice(subtotal)}</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-green-500">
                      <span>Discount (5%)</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Shipping</span>
                    <span className="text-[var(--text-primary)]">
                      {shipping === 0 ? 'Free' : formatPrice(shipping)}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Tax</span>
                    <span className="text-[var(--text-primary)]">Calculated at checkout</span>
                  </div>
                  
                  <div className="flex justify-between pt-4 border-t border-[var(--border)] dark:border-[#262626] text-base font-medium">
                    <span className="text-[var(--text-primary)]">Total</span>
                    <span className="text-[var(--text-primary)]">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="block w-full bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] py-4 text-center text-xs tracking-[0.2em] uppercase mt-6 hover:opacity-90 transition"
                >
                  Proceed to Checkout
                </Link>

                {/* Affirm */}
                <div className="mt-4 p-4 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] text-center">
                  <p className="text-xs text-[var(--text-muted)]">
                    Or pay as low as <span className="text-[var(--text-primary)] font-medium">${Math.round(total / 12).toLocaleString()}/mo</span> with
                  </p>
                  <Link href="/financing" className="text-xs text-[var(--text-primary)] underline mt-1 inline-block">
                    Affirm financing →
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-[var(--border)] dark:border-[#262626]">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <svg
                        className="w-6 h-6 mx-auto text-[var(--text-muted)] mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                      <p className="text-xs text-[var(--text-muted)]">Authenticated</p>
                    </div>
                    <div>
                      <svg
                        className="w-6 h-6 mx-auto text-[var(--text-muted)] mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                      <p className="text-xs text-[var(--text-muted)]">Secure Payment</p>
                    </div>
                    <div>
                      <svg
                        className="w-6 h-6 mx-auto text-[var(--text-muted)] mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <p className="text-xs text-[var(--text-muted)]">Insured Shipping</p>
                    </div>
                    <div>
                      <svg
                        className="w-6 h-6 mx-auto text-[var(--text-muted)] mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      <p className="text-xs text-[var(--text-muted)]">7-Day Returns</p>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-6 pt-6 border-t border-[var(--border)] dark:border-[#262626]">
                  <p className="text-xs text-[var(--text-muted)] text-center mb-3">We Accept</p>
                  <div className="flex justify-center gap-3">
                    <div className="w-10 h-6 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] rounded flex items-center justify-center">
                      <span className="text-[8px] font-bold text-[var(--text-muted)]">VISA</span>
                    </div>
                    <div className="w-10 h-6 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] rounded flex items-center justify-center">
                      <span className="text-[8px] font-bold text-[var(--text-muted)]">MC</span>
                    </div>
                    <div className="w-10 h-6 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] rounded flex items-center justify-center">
                      <span className="text-[8px] font-bold text-[var(--text-muted)]">AMEX</span>
                    </div>
                    <div className="w-10 h-6 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] rounded flex items-center justify-center">
                      <span className="text-[8px] font-bold text-[var(--text-muted)]">WIRE</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </main>
  );
}

