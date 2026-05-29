'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export type SitemapLink = { label: string; href: string };
export type SitemapSection = { title: string; links: SitemapLink[] };

export default function SitemapPageClient({ sections }: { sections: SitemapSection[] }) {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-24 sm:pt-32 lg:pt-40 mobile-landscape:pt-20 pb-16 sm:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)] mb-3 block">
            Navigate
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--text-primary)] leading-tight tracking-[-0.01em]">
            Sitemap
          </h1>
          <p className="text-base text-[var(--text-secondary)] mt-4 max-w-xl mx-auto leading-relaxed">
            Every public page on Essence of Watches, grouped by topic. Use the main navigation and
            footer for quick access from anywhere on the site.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="space-y-10"
        >
          {sections.map((section, idx) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * (idx + 1) }}
              className="p-6 sm:p-8 bg-[var(--bg-secondary)] border border-[var(--border)]"
            >
              <h2 className="font-serif text-xl text-[var(--text-primary)] mb-5 tracking-tight">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm sm:text-base text-[var(--text-muted)] hover:text-[var(--text-primary)] transition border-b border-transparent hover:border-[var(--text-primary)] pb-0.5 inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
