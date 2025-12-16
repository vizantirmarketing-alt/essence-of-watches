'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const conditions = [
  {
    grade: 'Excellent',
    description:
      'Minimal signs of wear. Crystal is clean and free of scratches. Case and bezel are sharp with only light marks visible under close inspection. Fully functional.',
  },
  {
    grade: 'Very Good',
    description:
      'Light wear consistent with age and occasional use. Minor surface marks on case or bracelet. Crystal may have light hairlines. Mechanically sound.',
  },
  {
    grade: 'Good',
    description:
      'Visible wear from regular use. Noticeable scratches or marks on case, bracelet, or crystal. Fully functional and keeps accurate time.',
  },
];

export default function ConditionGuidePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-transparent opacity-50" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
              Our Standards
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mt-3 leading-tight">
              Condition Grading Guide
            </h1>
            <p className="text-lg text-[var(--text-secondary)] mt-6 leading-relaxed">
              Understanding Our Watch Condition Standards
            </p>
          </motion.div>
        </div>
      </section>

      {/* Condition Grades */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {conditions.map((condition, idx) => (
              <motion.div
                key={condition.grade}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] p-6 sm:p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[var(--bg-primary)] dark:bg-[#0f0f0f] border border-[var(--border)] dark:border-[#333] flex items-center justify-center">
                      <span className="text-2xl font-serif text-[var(--text-primary)]">
                        {idx + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] mb-4">
                      {condition.grade}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 sm:py-24 bg-[var(--bg-secondary)] dark:bg-[#141414]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                All watches are thoroughly inspected and authenticated before listing. If you have
                questions about a specific timepiece's condition, please{' '}
                <Link
                  href="/contact"
                  className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] underline"
                >
                  contact us
                </Link>
                .
              </p>
              <Link
                href="/shop"
                className="inline-block bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
              >
                Browse Watches
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

