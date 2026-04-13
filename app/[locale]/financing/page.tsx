'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

export default function FinancingPage() {
  const [price, setPrice] = useState(5000);
  const { isDayMode } = useTheme();

  // Simple payment calculator (Affirm typically 10-36% APR, we'll show 0% promo + 15% standard)
  const months3 = (price / 3).toFixed(2);
  const months6 = (price / 6).toFixed(2);
  const months12 = ((price * 1.15) / 12).toFixed(2); // ~15% APR estimate

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pb-16 sm:pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]"
          >
            Flexible Payment Options
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mt-4"
          >
            Own Your Timepiece Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] mt-6 text-lg leading-relaxed"
          >
            Split your purchase into easy monthly payments with financing as low as 0% APR. No hidden
            fees. Real-time credit decisions. Your dream watch is within reach.
          </motion.p>
        </div>
      </section>

      {/* Partner Logos + Calculator */}
      <section className="bg-[var(--bg-secondary)] dark:bg-[#141414] py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Branding */}
            <div>
              <div className="flex items-center gap-6 mb-8">
                <span className="font-serif text-2xl text-[var(--text-primary)]">
                  Essence of Watches
                </span>
                <span className="text-[var(--text-muted)] text-2xl">+</span>
                <Image
                  src={isDayMode ? '/assets/affirm-day.svg' : '/assets/affirm-dark.svg'}
                  alt="Affirm"
                  width={100}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[var(--text-primary)] mb-6">
                As Low As 0% APR Financing*
              </h2>

              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  We've partnered with Affirm to bring you flexible financing on watches up to
                  $17,500. With easy monthly payments and real-time credit decisions, you can split
                  your purchase into 3, 6, or 12 monthly installments.
                </p>
                <p>
                  Get prequalified in less than 30 seconds—checking your eligibility will NOT
                  affect your credit score. Simply select "Pay with Affirm" during checkout.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/shop"
                  className="inline-block bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
                >
                  Shop Now
                </Link>
              </div>

              <p className="text-xs text-[var(--text-muted)] mt-8 leading-relaxed">
                *Your rate will be 0% APR or 10–36% APR based on credit, and is subject to an
                eligibility check. Payment options through Affirm are provided by these lending
                partners: affirm.com/lenders. Options depend on your purchase amount, and a down
                payment may be required.
              </p>
            </div>

            {/* Right - Payment Calculator */}
            <div className="bg-[var(--bg-primary)] dark:bg-[#0f0f0f] p-8 sm:p-10 border border-[var(--border)] dark:border-[#262626]">
              <h3 className="text-lg font-serif text-[var(--text-primary)] mb-6">
                Estimate Your Payments
              </h3>

              {/* Price Input */}
              <div className="mb-8">
                <label className="text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] mb-2 block">
                  Watch Price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
                    $
                  </span>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 bg-transparent dark:bg-[#0a0a0a] border border-[var(--border)] dark:border-[#333] text-[var(--text-primary)] text-xl focus:outline-none focus:border-[var(--text-primary)] dark:focus:border-[#555] transition"
                  />
                </div>
              </div>

              {/* Payment Options */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-[var(--border)] dark:border-[#333] hover:border-[var(--text-secondary)] dark:hover:border-[#555] transition cursor-pointer">
                  <div>
                    <span className="text-2xl font-light text-[var(--text-primary)]">
                      ${months3}
                    </span>
                    <span className="text-[var(--text-secondary)] ml-2">/month</span>
                    <p className="text-xs text-[var(--text-muted)] mt-1">0% APR</p>
                  </div>
                  <span className="text-xs tracking-[0.1em] uppercase bg-[var(--bg-secondary)] dark:bg-[#1a1a1a] px-3 py-1.5 text-[var(--text-secondary)]">
                    3 months
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 border border-[var(--border)] dark:border-[#333] hover:border-[var(--text-secondary)] dark:hover:border-[#555] transition cursor-pointer">
                  <div>
                    <span className="text-2xl font-light text-[var(--text-primary)]">
                      ${months6}
                    </span>
                    <span className="text-[var(--text-secondary)] ml-2">/month</span>
                    <p className="text-xs text-[var(--text-muted)] mt-1">0% APR</p>
                  </div>
                  <span className="text-xs tracking-[0.1em] uppercase bg-[var(--bg-secondary)] dark:bg-[#1a1a1a] px-3 py-1.5 text-[var(--text-secondary)]">
                    6 months
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 border border-[var(--border)] dark:border-[#333] hover:border-[var(--text-secondary)] dark:hover:border-[#555] transition cursor-pointer">
                  <div>
                    <span className="text-2xl font-light text-[var(--text-primary)]">
                      ${months12}
                    </span>
                    <span className="text-[var(--text-secondary)] ml-2">/month</span>
                    <p className="text-xs text-[var(--text-muted)] mt-1">~15% APR</p>
                  </div>
                  <span className="text-xs tracking-[0.1em] uppercase bg-[var(--bg-secondary)] dark:bg-[#1a1a1a] px-3 py-1.5 text-[var(--text-secondary)]">
                    12 months
                  </span>
                </div>
              </div>

              <p className="text-xs text-[var(--text-muted)] mt-6 text-center">
                Actual rate determined at checkout based on creditworthiness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-serif text-3xl text-[var(--text-primary)] text-center mb-12">
            How It Works
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Choose Your Watch',
                desc: 'Browse our authenticated collection and find your perfect timepiece.',
              },
              {
                step: '02',
                title: 'Select Affirm at Checkout',
                desc: 'Choose "Pay with Affirm" and complete a quick application.',
              },
              {
                step: '03',
                title: 'Get Instant Decision',
                desc: 'Know your rate in seconds. Complete your purchase and enjoy.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <span className="text-4xl font-serif text-[var(--accent)]">{item.step}</span>
                <h3 className="text-lg text-[var(--text-primary)] mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[var(--accent-steel)] text-white py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/affirm-dark.svg"
                alt="Affirm"
                width={80}
                height={32}
                className="h-6 w-auto"
              />
              <span className="text-sm font-medium">BUY WITH MONTHLY PAYMENTS</span>
            </div>
            <p className="text-sm text-white/80 text-center sm:text-left">
              Easy monthly payments over 3, 6, or 12 months. No hidden fees.
            </p>
            <Link
              href="/shop"
                  className="border border-white dark:border-white/20 px-6 py-2 text-xs tracking-[0.15em] uppercase hover:bg-white hover:text-[var(--accent-steel)] dark:hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

