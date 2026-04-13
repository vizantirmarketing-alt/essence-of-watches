'use client';

import { useMemo } from 'react';

export function parseMarketRange(marketValue: string): { low: number; high: number } | null {
  const trimmed = marketValue.trim();
  if (!trimmed) return null;
  const normalized = trimmed.replace(/,/g, '');
  const parts = normalized.split(/\s*[–—-]\s*/);
  if (parts.length < 2) return null;
  const low = parseFloat(parts[0].replace(/[^0-9.]/g, ''));
  const high = parseFloat(parts[1].replace(/[^0-9.]/g, ''));
  if (!Number.isFinite(low) || !Number.isFinite(high) || low <= 0 || high <= 0 || low > high) {
    return null;
  }
  return { low, high };
}

interface PriceContextProps {
  listingPrice: number;
  retailPrice?: number | null;
  marketValue?: string | null;
  formatPrice: (amount: number) => string;
}

export default function PriceContext({
  listingPrice,
  retailPrice,
  marketValue,
  formatPrice,
}: PriceContextProps) {
  const marketTrimmed = marketValue?.trim() ?? '';
  const showRetail =
    retailPrice != null && Number.isFinite(retailPrice) && retailPrice > 0;
  const showMarket = marketTrimmed.length > 0;

  const range = useMemo(
    () => (showMarket ? parseMarketRange(marketTrimmed) : null),
    [marketTrimmed, showMarket],
  );

  const fairLabel = useMemo(() => {
    if (!range) return null;
    if (listingPrice < range.low) return 'below' as const;
    if (listingPrice >= range.low && listingPrice <= range.high) return 'fair' as const;
    return null;
  }, [listingPrice, range]);

  const hasContext = showRetail || showMarket || fairLabel;

  return (
    <div className="space-y-2">
      <p className="font-serif text-3xl text-[var(--text-primary)]">{formatPrice(listingPrice)}</p>

      {hasContext ? (
        <div className="space-y-1.5 pt-1">
          {showRetail ? (
            <p className="text-sm text-[var(--text-muted)]">
              Original retail:{' '}
              <span className="text-[var(--text-secondary)]">{formatPrice(retailPrice!)}</span>
            </p>
          ) : null}

          {showMarket ? (
            <div className="text-sm">
              <p className="text-[var(--text-muted)]">
                Current market range:{' '}
                <span className="text-[var(--text-secondary)]">{marketTrimmed}</span>
              </p>
              <p className="mt-1 text-[11px] leading-snug text-[var(--text-muted)]">
                Based on recent secondary market sales for comparable listings; ranges vary by
                condition, box &amp; papers, and timing—not a guarantee of appraisal value.
              </p>
            </div>
          ) : null}

          {fairLabel === 'below' ? (
            <p className="text-[10px] tracking-[0.12em] uppercase font-medium text-green-600 dark:text-green-400">
              Below Market
            </p>
          ) : fairLabel === 'fair' ? (
            <p className="text-[10px] tracking-[0.12em] uppercase font-medium text-[var(--accent-gold)]">
              Fair Market Price
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
