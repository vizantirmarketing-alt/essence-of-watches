import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/** Locale-aware `Link` / `useRouter` prepend the active locale to internal paths. `usePathname` omits the locale prefix. */
export const { Link, usePathname, useRouter } = createNavigation(routing);
