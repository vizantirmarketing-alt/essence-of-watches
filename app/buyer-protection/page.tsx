'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BuyerProtectionPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
            Purchase protection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text-primary)] mt-3">
            Buyer Protection
          </h1>
          <p className="text-[var(--text-muted)] text-sm mt-4">
            How we stand behind every sale—plain language, no marketplace runaround.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-10 text-[var(--text-secondary)] leading-relaxed"
        >
          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
            <p>
              You are buying from a specialist dealer—not an anonymous listing. That means clear
              condition disclosure before you pay, authentication before we ship, and a defined
              window to confirm the watch matches what we promised. Below is how protection works
              from checkout to delivery and beyond.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              7-day inspection window after delivery
            </h2>
            <p>
              From the day your watch arrives, you have{' '}
              <strong className="text-[var(--text-primary)]">seven calendar days</strong> to
              inspect it against our listing and photographs. If anything material is not as
              described—condition, completeness, or specification—we arrange return shipping and a{' '}
              <strong className="text-[var(--text-primary)]">full refund</strong> once we receive
              and verify the piece. Use the window deliberately: try the watch on, check the
              bracelet and clasp, and compare to what you were sold. If it is right, you keep it.
              If it is not, you tell us early.
            </p>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              Process and exclusions for change-of-mind versus &quot;not as described&quot; claims
              are set out in our{' '}
              <Link href="/returns" className="text-[var(--text-primary)] underline hover:opacity-70">
                Returns &amp; Refunds
              </Link>{' '}
              policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              Every watch authenticated before shipment
            </h2>
            <p className="mb-4">
              Nothing leaves our hands until it clears our internal process. That includes:
            </p>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex gap-2">
                <span className="text-[var(--text-primary)] flex-shrink-0">—</span>
                <span>
                  <strong className="text-[var(--text-primary)]">Serial verification</strong> against
                  manufacturer records and known-good patterns for the reference.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--text-primary)] flex-shrink-0">—</span>
                <span>
                  <strong className="text-[var(--text-primary)]">Movement inspection</strong> by
                  qualified watchmakers—timing, function, and signs of tampering or incorrect parts.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--text-primary)] flex-shrink-0">—</span>
                <span>
                  <strong className="text-[var(--text-primary)]">Parts originality check</strong> on
                  dial, hands, case, bracelet, and crystal where applicable, consistent with the
                  stated year and configuration.
                </span>
              </li>
            </ul>
            <p className="mt-4">
              Read the full methodology on our{' '}
              <Link
                href="/authenticity"
                className="text-[var(--text-primary)] underline hover:opacity-70"
              >
                Authenticity
              </Link>{' '}
              page.
            </p>
          </section>

          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              Insured shipping on every order
            </h2>
            <p>
              Every shipment is sent{' '}
              <strong className="text-[var(--text-primary)]">fully insured</strong> for its
              journey to you. If a carrier incident occurs in transit, you are not left arguing
              with a platform—you work with us, and we work with the insurer. That is part of the
              price of doing business the right way.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              Secure payment processing
            </h2>
            <p>
              Card and checkout flows run through established payment providers built for e-commerce.
              We do <strong className="text-[var(--text-primary)]">not</strong> store your full card
              details on our servers. What we retain is what we need to fulfill your order and
              support you afterward—never more than necessary.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              2-year mechanical warranty included
            </h2>
            <p>
              Every purchase includes our{' '}
              <strong className="text-[var(--text-primary)]">two-year mechanical warranty</strong>{' '}
              from the date of sale—covering defects in the movement, case, and bracelet under
              normal use, subject to exclusions. Terms, claims, and turnaround are spelled out on
              our{' '}
              <Link href="/warranty" className="text-[var(--text-primary)] underline hover:opacity-70">
                Warranty
              </Link>{' '}
              page.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">
              Direct communication with watch specialists
            </h2>
            <p>
              Essence of Watches is not a marketplace and not a drop-ship aggregator. When you have
              a question before or after the sale, you reach{' '}
              <strong className="text-[var(--text-primary)]">our team</strong>—people who handle
              authentication, condition grading, and fulfillment in-house. That direct line is part
              of the product.
            </p>
          </section>

          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] border border-[var(--border)] text-center">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-2">Questions</h2>
            <p className="mb-6 text-sm">
              If something is unclear before you buy, ask. We prefer one thorough conversation to
              a surprise after delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
              >
                Contact us
              </Link>
              <Link
                href="/shop"
                className="inline-block border border-[var(--border)] dark:border-[#444] text-[var(--text-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition"
              >
                Shop collection
              </Link>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
