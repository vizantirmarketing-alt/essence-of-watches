'use client';

import { ShieldCheck, Award, Package, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';

const TRUST_KEYS = ['authenticity', 'certified', 'shipping', 'warranty'] as const;
const TRUST_ICONS = [ShieldCheck, Award, Package, Shield] as const;

export default function TrustStrip() {
  const t = useTranslations('TrustStrip');

  return (
    <section className="bg-[var(--bg-secondary)] dark:bg-[#141414] border-b border-[var(--border)] py-6 sm:py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_KEYS.map((key, index) => {
            const Icon = TRUST_ICONS[index];
            return (
              <div
                key={key}
                className="flex items-center gap-3 sm:gap-4 justify-center sm:justify-start"
              >
                <div className="text-[var(--text-primary)] dark:text-[#f5f5f5] flex-shrink-0">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <p className="text-[var(--text-primary)] dark:text-[#f5f5f5] text-xs sm:text-sm tracking-[0.1em] uppercase font-medium">
                  {t(key)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
