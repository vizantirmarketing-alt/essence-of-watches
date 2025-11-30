'use client';

import Link from 'next/link';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/brands', label: 'Brands' },
  { href: '/collections', label: 'Collections' },
  { href: '/sell', label: 'Sell Your Watch' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-[#1A1A1A] dark:text-[#F8F8F8] hover:text-[#C9A962] dark:hover:text-[#D4B872] transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

