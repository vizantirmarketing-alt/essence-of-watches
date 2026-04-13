import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ja', 'de', 'ko', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'always',
});
