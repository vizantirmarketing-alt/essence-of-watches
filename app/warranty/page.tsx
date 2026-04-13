'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
            Policy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text-primary)] mt-3">
            Warranty
          </h1>
          <p className="text-[var(--text-muted)] text-sm mt-4">
            Last updated: April 2026
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
              Every watch we sell is backed by a{' '}
              <strong className="text-[var(--text-primary)]">two-year Essence of Watches warranty</strong>{' '}
              from the date of purchase. This document explains what we stand behind, what we do
              not cover, and how we resolve legitimate issues—clearly, without fine print meant to
              confuse you.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">What&apos;s covered</h2>
            <p className="mb-4">
              During the warranty period, we cover{' '}
              <strong className="text-[var(--text-primary)]">mechanical defects</strong> that arise
              in the movement, case, and bracelet under{' '}
              <strong className="text-[var(--text-primary)]">normal use</strong>—provided the watch
              has not been subjected to excluded conditions below.
            </p>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex gap-2">
                <span className="text-[var(--text-primary)] flex-shrink-0">—</span>
                <span>Faults in the movement affecting timekeeping or function traceable to manufacturing or assembly, when the watch has been worn and stored as intended.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--text-primary)] flex-shrink-0">—</span>
                <span>Mechanical issues with the case or bracelet attributable to defects in materials or workmanship—not cosmetic aging alone.</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              Coverage runs for <strong className="text-[var(--text-primary)]">two years from your purchase date</strong>{' '}
              with Essence of Watches. Keep your order confirmation or receipt; we may ask for it to
              confirm eligibility.
            </p>
          </section>

          <section className="grid sm:grid-cols-1 gap-6">
            <div className="p-6 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-sm">
              <h2 className="font-serif text-lg text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                What&apos;s not covered
              </h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <strong className="text-[var(--text-primary)]">Accidental damage</strong> — drops,
                  impacts, or any physical damage from misuse or negligence.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Water damage</strong> — including
                  immersion or moisture ingress beyond the watch&apos;s rated use or after gasket
                  aging; we do not warranty against flooding, steam, or hot-tub exposure.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Unauthorized repairs</strong> — work
                  performed by anyone other than Essence of Watches or our authorized service partners
                  voids coverage for affected components.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Normal wear and tear</strong> — the
                  gradual patina, bracelet stretch, clasp wear, and finish changes that come with
                  wearing a mechanical watch daily.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">Cosmetic issues alone</strong> — scratches,
                  dings, dial spotting from age, or appearance complaints where the movement and seals
                  remain within specification.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">How to make a claim</h2>
            <div className="space-y-4">
              <p>
                Email{' '}
                <a
                  href="mailto:warranty@essenceofwatches.com"
                  className="text-[var(--text-primary)] underline hover:opacity-70"
                >
                  warranty@essenceofwatches.com
                </a>{' '}
                with your <strong className="text-[var(--text-primary)]">order number</strong>, the{' '}
                <strong className="text-[var(--text-primary)]">reference and serial</strong> (if
                applicable), and a clear <strong className="text-[var(--text-primary)]">description of the issue</strong>.
                Photos or short video help us triage faster.
              </p>
              <p>
                We will review your message and, if the claim falls within this warranty, arrange{' '}
                <strong className="text-[var(--text-primary)]">inspection</strong>. After inspection,
                we may elect to <strong className="text-[var(--text-primary)]">repair or replace</strong>{' '}
                the timepiece—or the affected components—at our sole discretion. That judgment is
                based on what restores the watch properly, not what is cheapest in the short term.
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                Do not ship a watch until we confirm instructions. Unauthorized returns may delay or
                complicate your claim.
              </p>
            </div>
          </section>

          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">Turnaround</h2>
            <p>
              Warranty service typically takes{' '}
              <strong className="text-[var(--text-primary)]">four to six weeks</strong>, depending on
              parts availability, manufacturer lead times, and the complexity of the repair. We will
              communicate realistic timelines once your watch is in our hands—not a black hole.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">Transferability</h2>
            <p>
              This warranty is{' '}
              <strong className="text-[var(--text-primary)]">issued to the original purchaser</strong>{' '}
              named on the order and is <strong className="text-[var(--text-primary)]">non-transferable</strong>.
              A subsequent owner is not covered under Essence of Watches warranty terms, though they
              may still benefit from any remaining manufacturer warranty where applicable and valid.
            </p>
          </section>

          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] border border-[var(--border)] text-center">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-2">Related policies</h2>
            <p className="mb-6 text-sm">
              Returns and general conditions are governed separately. If you are inside the return
              window, start there first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/returns"
                className="inline-block bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
              >
                Returns &amp; Refunds
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-[var(--border)] dark:border-[#444] text-[var(--text-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition"
              >
                Contact
              </Link>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
