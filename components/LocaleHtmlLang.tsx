'use client';

import { useLocale } from 'next-intl';
import { useEffect } from 'react';

/** Syncs `<html lang>` with the active `[locale]` segment (root layout keeps a static shell). */
export default function LocaleHtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
