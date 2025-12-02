'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function CheckoutSuccessPage() {
  const [orderNumber] = useState(`EOW-${new Date().getFullYear()}-${Math.floor(Math.random() * 900) + 100}`);

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full text-center"
      >
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center">
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-green-500"
          >
            <path d="M20 6L9 17l-5-5" />
          </motion.svg>
        </div>

        <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
          Order Confirmed
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mt-3">
          Thank You
        </h1>
        <p className="text-[var(--text-secondary)] mt-4">
          Your order has been placed successfully. We've sent a confirmation 
          email with your order details.
        </p>

        {/* Order Number */}
        <div className="mt-8 p-6 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-2">
            Order Number
          </p>
          <p className="text-xl font-mono text-[var(--text-primary)]">{orderNumber}</p>
        </div>

        {/* What's Next */}
        <div className="mt-8 text-left space-y-4">
          <h2 className="font-serif text-lg text-[var(--text-primary)]">What's Next?</h2>
          
          <div className="space-y-3">
            {[
              {
                step: '1',
                title: 'Order Confirmation',
                description: 'You\'ll receive an email confirmation shortly',
              },
              {
                step: '2',
                title: 'Authentication',
                description: 'Our team will verify and prepare your timepiece',
              },
              {
                step: '3',
                title: 'Shipping',
                description: 'Fully insured FedEx Priority shipping with tracking',
              },
              {
                step: '4',
                title: 'Delivery',
                description: 'Adult signature required upon delivery',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-[var(--bg-secondary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] border border-[var(--border)] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-[var(--text-muted)]">{item.step}</span>
                </div>
                <div>
                  <p className="text-sm text-[var(--text-primary)] font-medium">{item.title}</p>
                  <p className="text-xs text-[var(--text-muted)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/account"
            className="flex-1 bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition text-center"
          >
            View Order
          </Link>
          <Link
            href="/shop"
            className="flex-1 border border-[var(--border)] dark:border-[#444] text-[var(--text-primary)] py-4 text-xs tracking-[0.2em] uppercase hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition text-center"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Support */}
        <p className="mt-8 text-sm text-[var(--text-muted)]">
          Questions about your order?{' '}
          <Link href="/contact" className="text-[var(--text-primary)] underline hover:opacity-70">
            Contact us
          </Link>
        </p>
      </motion.div>
    </main>
  );
}

