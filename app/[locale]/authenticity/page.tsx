'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const authenticationStepIds = ['01', '02', '03', '04', '05'] as const;

const authenticationIcons: Record<(typeof authenticationStepIds)[number], ReactNode> = {
  '01': (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  ),
  '02': (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  '03': (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  '04': (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  '05': (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

const guaranteeIds = ['g1', 'g2', 'g3', 'g4'] as const;

const guaranteeIcons: Record<(typeof guaranteeIds)[number], ReactNode> = {
  g1: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  g2: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  g3: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  g4: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  ),
};

const statIds = ['authenticated', 'accuracy', 'experience', 'counterfeit'] as const;

const wrongIds = [1, 2, 3, 4] as const;

const certLineKeys = ['certLine1', 'certLine2', 'certLine3', 'certLine4', 'certLine5', 'certLine6'] as const;

function statLabelKey(id: (typeof statIds)[number]): 'statsAuthenticated' | 'statsAccuracy' | 'statsExperience' | 'statsCounterfeit' {
  return (`stats${id.charAt(0).toUpperCase() + id.slice(1)}` as 'statsAuthenticated');
}

export default function AuthenticityPage() {
  const t = useTranslations('Authenticity');

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-transparent opacity-50" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 dark:bg-green-500/20 mb-8">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-green-500"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">{t('heroEyebrow')}</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mt-3 leading-tight">
              {t('heroTitle')}
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-6 leading-relaxed">{t('heroIntro')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[var(--bg-secondary)] dark:bg-[#141414] border-y border-[var(--border)] dark:border-[#262626]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statIds.map((id, idx) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
                  {t(`statsValue${idx + 1}` as 'statsValue1')}
                </p>
                <p className="text-sm text-[var(--text-muted)] mt-2">{t(statLabelKey(id))}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">{t('guaranteeEyebrow')}</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mt-3">{t('guaranteeTitle')}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guaranteeIds.map((gid, idx) => (
              <motion.div
                key={gid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6 text-center hover:border-green-500/30 dark:hover:border-green-500/50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 dark:bg-green-500/20 text-green-500 mb-4">
                  {guaranteeIcons[gid]}
                </div>
                <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">{t(`${gid}Title`)}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{t(`${gid}Description`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[var(--bg-secondary)] dark:bg-[#141414]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">{t('processEyebrow')}</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mt-3">{t('processTitle')}</h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">{t('processIntro')}</p>
          </motion.div>

          <div className="space-y-8">
            {authenticationStepIds.map((stepId, idx) => (
              <motion.div
                key={stepId}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 items-center ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full md:w-1/2 bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] p-8 sm:p-10">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-serif text-[var(--text-muted)]/30">{stepId}</span>
                    <div>
                      <h3 className="font-serif text-xl text-[var(--text-primary)] mb-3">
                        {t(`step${stepId}Title` as Parameters<typeof t>[0])}
                      </h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed">
                        {t(`step${stepId}Body` as Parameters<typeof t>[0])}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-[var(--bg-primary)] dark:bg-[#1a1a1a] dark:border dark:border-[#333] border border-[var(--border)] flex items-center justify-center text-[var(--text-primary)]">
                    {authenticationIcons[stepId]}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">{t('certEyebrow')}</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mt-3">{t('certTitle')}</h2>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed">{t('certBody')}</p>

              <ul className="mt-8 space-y-4">
                {certLineKeys.map((key) => (
                  <li key={key} className="flex items-center gap-3 text-[var(--text-secondary)]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-green-500 flex-shrink-0"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {t(key)}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
              <div className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-8 sm:p-12">
                <div className="border-2 border-[var(--border)] dark:border-[#333] p-6 sm:p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-green-500 flex items-center justify-center">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-green-500"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>

                  <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)] mb-2">{t('mockCertEyebrow')}</p>
                  <h3 className="font-serif text-2xl text-[var(--text-primary)]">{t('mockBrand')}</h3>

                  <div className="mt-6 pt-6 border-t border-[var(--border)] dark:border-[#262626]">
                    <p className="text-sm text-[var(--text-muted)]">{t('mockSerialLabel')}</p>
                    <p className="text-[var(--text-primary)] font-mono mt-1">{t('mockSerialPlaceholder')}</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-[var(--text-muted)]">{t('mockVerifiedLabel')}</p>
                    <p className="text-green-500 font-medium mt-1">{t('mockConfirmed')}</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[var(--border)] dark:border-[#262626] text-xs text-[var(--text-muted)]">
                    {t('mockCertifiedBy')}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[var(--bg-secondary)] dark:bg-[#141414]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">{t('commitmentEyebrow')}</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] mt-3">{t('wrongTitle')}</h2>
            <p className="text-[var(--text-secondary)] mt-6 leading-relaxed">{t('wrongIntro')}</p>

            <div className="mt-10 space-y-6 text-left max-w-xl mx-auto">
              {wrongIds.map((num) => (
                <div key={num} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-500 text-sm font-medium">{num}</span>
                  </div>
                  <div>
                    <h3 className="text-[var(--text-primary)] font-medium">{t(`wrong${num}Title`)}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">{t(`wrong${num}Body`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] p-8 sm:p-12 lg:p-16 text-center"
          >
            <h2 className="font-serif text-3xl sm:text-4xl">{t('ctaTitle')}</h2>
            <p className="mt-4 opacity-80 max-w-xl mx-auto">{t('ctaBody')}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-block bg-[var(--bg-primary)] dark:bg-black text-[var(--text-primary)] dark:text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
              >
                {t('ctaExplore')}
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-current px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition"
              >
                {t('ctaAsk')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
