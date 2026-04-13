'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function BuyerProtectionPage() {
  const t = useTranslations('BuyerProtection');

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
            {t('eyebrow')}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text-primary)] mt-3">
            {t('title')}
          </h1>
          <p className="text-[var(--text-muted)] text-sm mt-4">{t('subtitle')}</p>
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
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">{t('inspectionTitle')}</h2>
            <p>{t('inspectionBody')}</p>
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              {t.rich('inspectionPolicyRich', {
                returns: (chunks) => (
                  <Link href="/returns" className="text-[var(--text-primary)] underline hover:opacity-70">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">{t('authTitle')}</h2>
            <p className="mb-4">{t('authBody')}</p>
            <p className="text-sm sm:text-base">
              {t.rich('authClosingRich', {
                auth: (chunks) => (
                  <Link href="/authenticity" className="text-[var(--text-primary)] underline hover:opacity-70">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </section>

          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626]">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">{t('shippingTitle')}</h2>
            <p>{t('shippingBody')}</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">{t('paymentTitle')}</h2>
            <p>{t('paymentBody')}</p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">{t('warrantyTitle')}</h2>
            <p>
              {t.rich('warrantyBodyRich', {
                warranty: (chunks) => (
                  <Link href="/warranty" className="text-[var(--text-primary)] underline hover:opacity-70">
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-4">{t('directTitle')}</h2>
            <p>{t('directBody')}</p>
          </section>

          <section className="p-6 sm:p-8 bg-[var(--bg-secondary)] border border-[var(--border)] text-center">
            <h2 className="font-serif text-xl text-[var(--text-primary)] mb-2">{t('questionsTitle')}</h2>
            <p className="mb-6 text-sm">{t('questionsBody')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
              >
                {t('contactUs')}
              </Link>
              <Link
                href="/shop"
                className="inline-block border border-[var(--border)] dark:border-[#444] text-[var(--text-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:bg-[var(--bg-secondary)] dark:hover:bg-[#1a1a1a] transition"
              >
                {t('shopCollection')}
              </Link>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
