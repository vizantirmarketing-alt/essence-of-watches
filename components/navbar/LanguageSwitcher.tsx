'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LOCALE_OPTIONS: {
  code: (typeof routing.locales)[number];
  flag: string;
  short: string;
}[] = [
  { code: 'en', flag: '🇺🇸', short: 'EN' },
  { code: 'ja', flag: '🇯🇵', short: 'JA' },
  { code: 'de', flag: '🇩🇪', short: 'DE' },
  { code: 'ko', flag: '🇰🇷', short: 'KO' },
  { code: 'zh', flag: '🇨🇳', short: 'ZH' },
];

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const t = useTranslations('LanguageSwitcher');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LOCALE_OPTIONS.find((o) => o.code === locale) ?? LOCALE_OPTIONS[0];
  const path = pathname === '' ? '/' : pathname;

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const select = (code: string) => {
    if (code === locale) {
      setOpen(false);
      return;
    }
    router.replace(path, { locale: code });
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('ariaLabel')}
        className={`flex items-center gap-2 transition-colors text-sm ${
          className ? `${className} hover:opacity-70` : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline tracking-[0.08em] font-medium">{current.short}</span>
        <svg
          className={`w-3 h-3 transition-transform shrink-0 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 min-w-[10rem] bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg shadow-xl z-50 py-1"
          role="listbox"
        >
          {LOCALE_OPTIONS.map((opt) => (
            <button
              key={opt.code}
              type="button"
              role="option"
              aria-selected={opt.code === locale}
              onClick={() => select(opt.code)}
              className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2 transition-colors ${
                opt.code === locale
                  ? 'bg-[var(--card-bg)] text-[var(--text-primary)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--card-bg)] hover:text-[var(--text-primary)]'
              }`}
            >
              <span className="text-base leading-none">{opt.flag}</span>
              <span className="tracking-[0.08em] font-medium">{opt.short}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
