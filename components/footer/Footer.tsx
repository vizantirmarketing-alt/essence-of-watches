import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] dark:bg-[#141414] border-t border-[var(--border)] dark:border-[#262626]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Shop */}
          <div>
            <h4 className="text-[var(--text-primary)] text-[11px] tracking-[0.2em] uppercase font-medium mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/shop"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  All Watches
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?collection=Submariner"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Submariner
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?collection=Daytona"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Daytona
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?collection=GMT-Master"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  GMT-Master II
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?collection=Datejust"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Datejust
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--text-primary)] text-[11px] tracking-[0.2em] uppercase font-medium mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sell"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Sell Your Watch
                </Link>
              </li>
              <li>
                <Link
                  href="/source"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Source a Watch
                </Link>
              </li>
              <li>
                <Link
                  href="/authenticity"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Authenticity Guarantee
                </Link>
              </li>
              <li>
                <Link
                  href="/verify"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  ID Verification
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[var(--text-primary)] text-[11px] tracking-[0.2em] uppercase font-medium mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  href="/track-order"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[var(--text-primary)] text-[11px] tracking-[0.2em] uppercase font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[var(--text-muted)] text-sm hover:text-[var(--text-primary)] transition"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-8 border-t border-b border-[var(--border)]">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span className="text-xs">Authenticated</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-xs">Secure Payments</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            <span className="text-xs">Insured Shipping</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-xs">2-Year Warranty</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-xs">
            © {new Date().getFullYear()} Essence of Watches. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
