'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function WarrantyPage() {
  const t = useTranslations('Warranty');

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">{t('eyebrow')}</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text-primary)] mt-3">{t('title')}</h1>
          <p className="text-[var(--text-muted)] text-sm mt-4">{t('lastUpdated')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-10 text-[var(--text-secondary)] leading-relaxed"
        >
          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
            <p>{t('intro')}</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">{t('coveredTitle')}</h2>
            <p>{t('coveredBody')}</p>
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
                {t('excludedTitle')}
              </h2>
              <p className="text-sm">{t('excludedBody')}</p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">{t('claimTitle')}</h2>
            <div className="space-y-4">
              <p>{t('claimBody')}</p>
            </div>
          </section>

          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">{t('turnaroundTitle')}</h2>
            <p>{t('turnaroundBody')}</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">{t('transferTitle')}</h2>
            <p>{t('transferBody')}</p>
          </section>

          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] border border-[var(--border)] text-center">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-2">{t('relatedTitle')}</h2>
            <p className="mb-6 text-sm">{t('relatedBody')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/returns"
                className="inline-block bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
              >
                {t('returnsLink')}
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-[var(--border)] dark:border-[#444] text-[var(--text-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition"
              >
                {t('contactLink')}
              </Link>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
