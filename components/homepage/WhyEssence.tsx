'use client';

import { Search, Shield, Award, Handshake } from 'lucide-react';
import { useTranslations } from 'next-intl';

const CARD_KEYS = ['sourcing', 'authentication', 'condition', 'service'] as const;
const CARD_ICONS = [Search, Shield, Award, Handshake] as const;

export default function WhyEssence() {
  const t = useTranslations('WhyEssence');

  return (
    <section className="py-16 sm:py-24 bg-[var(--bg-primary)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <p className="text-[var(--text-muted)] text-[11px] tracking-[0.2em] uppercase mb-2">{t('eyebrow')}</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">{t('title')}</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CARD_KEYS.map((key, index) => {
            const Icon = CARD_ICONS[index];
            return (
              <div
                key={key}
                className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 sm:p-8 hover:border-[var(--card-border-hover)] transition-all duration-300"
              >
                <div className="mb-4">
                  <Icon
                    size={24}
                    className="text-[var(--text-primary)]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[var(--text-primary)] mb-3">
                  {t(`cards.${key}.title`)}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {t(`cards.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
