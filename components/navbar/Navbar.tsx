'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/contexts/ThemeContext';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import CurrencySelector from '@/components/ui/CurrencySelector';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/sell', label: 'Sell Your Watch' },
  { href: '/source', label: 'Source a Watch' },
  { href: '/appointment', label: 'Schedule Appointment' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const footerLinks = [
  { href: '/faq', label: 'FAQ' },
  { href: '/authenticity', label: 'Authenticity' },
  { href: '/verify', label: 'ID Verification' },
  { href: '/financing', label: 'Financing' },
  { href: '/shipping', label: 'Shipping' },
  { href: '/returns', label: 'Returns' },
];

const menuVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.3 } },
};

const linkVariants = {
  closed: { opacity: 0, x: -20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isDayMode, toggleTheme } = useTheme();
  const { data: session } = useSession();
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : '';
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Top Bar - Hidden on homepage and mobile */}
      {!isHomepage && (
        <div className="hidden sm:block bg-[var(--accent-steel)] text-white fixed top-0 left-0 right-0 z-50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between h-9 text-xs">
            {/* Left - Contact */}
            <div className="flex items-center gap-6">
              <a
                href="mailto:info@essenceofwatches.com"
                className="flex items-center gap-2 hover:opacity-80 transition"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@essenceofwatches.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:opacity-80 transition"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +1 (234) 567-890
              </a>
            </div>

            {/* Right - Quick Links */}
            <div className="flex items-center gap-6">
              <Link href="/authenticity" className="flex items-center gap-2 hover:opacity-80 transition">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                Authenticity
              </Link>
              <Link href="/verify" className="flex items-center gap-2 hover:opacity-80 transition">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <circle cx="9" cy="10" r="2" />
                  <path d="M15 8h2" />
                  <path d="M15 12h2" />
                  <path d="M7 16h10" />
                </svg>
                ID Verification
              </Link>
              <Link href="/appointment" className="flex items-center gap-2 hover:opacity-80 transition">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Schedule Appointment
              </Link>
              <Link href="/track" className="hover:opacity-80 transition">
                Track Order
              </Link>
            </div>
          </div>
        </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isHomepage ? 'top-0' : 'top-0 sm:top-9'
        } ${
          isScrolled
            ? 'bg-[var(--bg-primary)]/95 dark:bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[var(--border)] dark:border-[#262626]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left - Menu Button */}
            <div className="w-12 sm:w-auto">
              <button
                onClick={() => setMenuOpen(true)}
                className="flex items-center gap-2 text-[var(--text-primary)]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
                <span className="hidden sm:inline text-xs tracking-[0.15em] uppercase">Menu</span>
              </button>
            </div>

            {/* Center - Logo */}
            <Link href="/" className="flex-1 flex justify-center px-2">
              <span className="text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-[var(--text-primary)] font-light whitespace-nowrap">
                ESSENCE OF WATCHES
              </span>
            </Link>

            {/* Right - Icons */}
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="hidden sm:block">
                <CurrencySelector />
              </div>

              <button 
                onClick={() => setSearchOpen(true)}
                className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition p-1"
                aria-label="Search"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>

              <Link
                href="/wishlist"
                className="hidden sm:block text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition p-1"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </Link>

              <Link
                href="/cart"
                className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition p-1"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </Link>

              <Link
                href={session ? '/account' : '/login'}
                className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition p-1"
              >
                {session?.user?.image ? (
                  <Image
                    src={session.user.image}
                    alt="Account"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                )}
              </Link>

              <button
                onClick={toggleTheme}
                className="text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition p-1"
              >
                {isDayMode ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[var(--bg-primary)] dark:bg-[#0a0a0a]"
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 text-[var(--text-primary)] p-2"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="h-full flex flex-col justify-center px-6 sm:px-16 lg:px-24">
              {/* Main Nav Links */}
              <nav className="space-y-5 sm:space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block font-serif text-3xl sm:text-5xl lg:text-6xl text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 sm:mt-16 flex flex-wrap gap-x-6 gap-y-3"
              >
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[var(--text-muted)] text-base sm:text-sm hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[var(--bg-primary)] dark:bg-[#0a0a0a]"
          >
            {/* Close Button */}
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 text-[var(--text-primary)] p-2"
              aria-label="Close search"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-xs tracking-[0.3em] uppercase text-[var(--text-muted)] mb-4">
                  Search Watches
                </label>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle search - redirect to shop with query
                    window.location.href = `/shop?q=${encodeURIComponent(searchQuery)}`;
                  }}
                  className="relative"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by brand, model, reference..."
                    autoFocus
                    className="w-full px-6 py-6 bg-transparent dark:bg-[#0f0f0f] border-b-2 border-[var(--border)] dark:border-[#333] text-[var(--text-primary)] text-2xl sm:text-3xl placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--text-primary)] dark:focus:border-[#555] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
                    aria-label="Submit search"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                  </button>
                </form>
                <p className="text-xs text-[var(--text-muted)] mt-4">
                  Press Enter to search or ESC to close
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
