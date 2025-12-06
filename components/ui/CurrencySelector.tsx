'use client';

import { useState, useRef, useEffect } from 'react';
import { useCurrency, currencies } from '@/contexts/CurrencyContext';

interface CurrencySelectorProps {
  className?: string;
}

export default function CurrencySelector({ className = '' }: CurrencySelectorProps) {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter currencies based on search
  const filteredCurrencies = currencies.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase()),
  );

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search when opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 transition-colors text-sm ${
          className 
            ? `${className} hover:opacity-70` 
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
        }`}
      >
        <span className="text-base">{currency.flag}</span>
        <span className="hidden sm:inline">{currency.code}</span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg shadow-xl z-50">
          {/* Search */}
          <div className="p-3 border-b border-[var(--border)]">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search country or currency..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[var(--card-bg)] border border-[var(--border)] rounded pl-9 pr-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--text-secondary)]"
              />
            </div>
          </div>

          {/* Currency List */}
          <div className="max-h-72 overflow-y-auto p-2">
            {filteredCurrencies.length > 0 ? (
              filteredCurrencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => {
                    setCurrency(curr);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-colors ${
                    currency.code === curr.code
                      ? 'bg-[var(--accent-steel)] text-white'
                      : 'hover:bg-[var(--card-bg)] text-[var(--text-primary)]'
                  }`}
                >
                  <span className="text-lg">{curr.flag}</span>
                  <span className="flex-1 text-left text-sm truncate">{curr.name}</span>
                  <span className="text-xs opacity-70">{curr.code}</span>
                </button>
              ))
            ) : (
              <p className="text-center text-[var(--text-muted)] text-sm py-4">No currencies found</p>
            )}
          </div>

          {/* Count */}
          <div className="p-2 border-t border-[var(--border)]">
            <p className="text-[var(--text-muted)] text-xs text-center">
              {currencies.length} currencies available
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
