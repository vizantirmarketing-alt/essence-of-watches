'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  rolexReferences,
  ROLEX_REFERENCE_FAMILIES,
  ROLEX_REFERENCE_TOTAL,
  type RolexReferenceEntry,
} from '@/lib/rolex-references';

const ALL = 'All' as const;
type FamilyFilter = typeof ALL | (typeof ROLEX_REFERENCE_FAMILIES)[number];

const FAMILY_PILLS: FamilyFilter[] = [ALL, ...ROLEX_REFERENCE_FAMILIES];

function normalizeRefQuery(s: string) {
  return s.replace(/\s+/g, '').toLowerCase();
}

function matchesSearch(entry: RolexReferenceEntry, query: string) {
  if (!query.trim()) return true;
  const q = query.toLowerCase();
  const qRef = normalizeRefQuery(query);
  const refCompact = normalizeRefQuery(entry.reference);
  return (
    entry.reference.toLowerCase().includes(q) ||
    refCompact.includes(qRef) ||
    entry.model.toLowerCase().includes(q) ||
    entry.description.toLowerCase().includes(q) ||
    entry.production.toLowerCase().includes(q)
  );
}

export default function ReferencesPage() {
  const [search, setSearch] = useState('');
  const [family, setFamily] = useState<FamilyFilter>(ALL);

  const filtered = useMemo(() => {
    return rolexReferences.filter(
      (entry) =>
        (family === ALL || entry.family === family) && matchesSearch(entry, search)
    );
  }, [family, search]);

  const count = filtered.length;

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <section className="relative pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-secondary)] to-transparent opacity-50 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--text-muted)]">
              Collectors & buyers
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] mt-3 leading-tight">
              Rolex reference guide
            </h1>
            <p className="text-[var(--text-secondary)] mt-6 leading-relaxed text-base sm:text-lg">
              Use this index to cross-check reference numbers, model names, and production eras before
              you buy. It is a condensed field guide—not a substitute for authentication, papers, or
              serial dating—but it helps you speak the same language as listings and dealers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="flex flex-col gap-6">
            <div className="w-full max-w-xl">
              <label htmlFor="ref-search" className="sr-only">
                Search references
              </label>
              <input
                id="ref-search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by reference, model, or description…"
                autoComplete="off"
                className="w-full bg-[var(--bg-secondary)] dark:bg-[#141414] border border-[var(--border)] dark:border-[#262626] px-4 py-3.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--text-muted)] transition"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {FAMILY_PILLS.map((pill) => {
                const active = family === pill;
                return (
                  <button
                    key={pill}
                    type="button"
                    onClick={() => setFamily(pill)}
                    className={`px-3.5 py-2 text-xs tracking-[0.12em] uppercase border transition ${
                      active
                        ? 'bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] border-transparent'
                        : 'bg-transparent text-[var(--text-muted)] border-[var(--border)] dark:border-[#333] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)]'
                    }`}
                  >
                    {pill}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="text-sm text-[var(--text-muted)]">
            Showing{' '}
            <span className="text-[var(--text-primary)] font-medium tabular-nums">{count}</span> of{' '}
            <span className="text-[var(--text-primary)] font-medium tabular-nums">
              {ROLEX_REFERENCE_TOTAL}
            </span>{' '}
            references
          </p>

          <AnimatePresence mode="wait">
            {count === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="border border-dashed border-[var(--border)] dark:border-[#333] bg-[var(--bg-secondary)]/40 dark:bg-[#141414]/60 px-8 py-16 text-center"
              >
                <p className="font-serif text-xl text-[var(--text-primary)] mb-2">No matches</p>
                <p className="text-[var(--text-secondary)] text-sm max-w-md mx-auto mb-8">
                  Try a shorter reference fragment, another model name, or clear filters to browse the
                  full index.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch('');
                    setFamily(ALL);
                  }}
                  className="inline-block bg-[var(--text-primary)] dark:bg-white dark:text-black text-[var(--bg-primary)] px-6 py-3 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition"
                >
                  Reset search & filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Desktop table */}
                <div className="hidden lg:block border border-[var(--border)] dark:border-[#262626] overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--bg-secondary)] dark:bg-[#141414] text-[var(--text-muted)] text-[11px] tracking-[0.18em] uppercase">
                      <tr>
                        <th className="px-5 py-4 font-medium w-[140px]">Reference</th>
                        <th className="px-5 py-4 font-medium w-[200px]">Model</th>
                        <th className="px-5 py-4 font-medium w-[160px]">Production</th>
                        <th className="px-5 py-4 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border)] dark:divide-[#262626]">
                      {filtered.map((row, i) => (
                        <motion.tr
                          key={`${row.reference}-${row.model}-${i}`}
                          initial={false}
                          className="bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)]/50 dark:hover:bg-[#141414]/80 transition-colors"
                        >
                          <td className="px-5 py-3.5 font-mono text-[var(--text-primary)] whitespace-nowrap">
                            {row.reference}
                          </td>
                          <td className="px-5 py-3.5 text-[var(--text-secondary)]">{row.model}</td>
                          <td className="px-5 py-3.5 text-[var(--text-muted)] whitespace-nowrap">
                            {row.production}
                          </td>
                          <td className="px-5 py-3.5 text-[var(--text-secondary)] leading-relaxed">
                            {row.description}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile / tablet cards */}
                <ul className="lg:hidden grid gap-3 sm:grid-cols-2">
                  {filtered.map((row, i) => (
                    <li
                      key={`${row.reference}-card-${i}`}
                      className="border border-[var(--border)] dark:border-[#262626] bg-[var(--bg-secondary)]/30 dark:bg-[#141414]/40 p-5 flex flex-col gap-2"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-mono text-[var(--text-primary)]">{row.reference}</span>
                        <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--text-muted)] shrink-0">
                          {row.family}
                        </span>
                      </div>
                      <p className="font-serif text-lg text-[var(--text-primary)] leading-snug">{row.model}</p>
                      <p className="text-xs text-[var(--text-muted)]">{row.production}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-1">
                        {row.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-xs text-[var(--text-muted)] max-w-2xl leading-relaxed">
            Reference and production ranges are summarized for convenience; Rolex has made running
            changes within references. Always verify a specific watch with inspection and documentation.
          </p>

          <Link
            href="/shop"
            className="inline-block text-xs tracking-[0.2em] uppercase text-[var(--text-primary)] border-b border-[var(--text-primary)] hover:opacity-80 transition pb-0.5"
          >
            Browse authenticated inventory
          </Link>
        </div>
      </section>
    </main>
  );
}
