'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';
import type { CartItem as CartItemType } from '@/types/cart';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem } = useCart();
  const { formatPrice } = useCurrency();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-4 border-b border-[var(--border)] last:border-b-0">
      <Link href={`/shop/${product.slug}`} className="flex-shrink-0">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-[var(--bg-elevated)] rounded overflow-hidden">
          {product.images && product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.model}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--text-secondary)] text-xs">
              No Image
            </div>
          )}
        </div>
      </Link>

      <div className="flex-1 min-w-0">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
            {product.brand} {product.model}
          </h3>
        </Link>
        <p className="text-sm text-[var(--text-secondary)] mt-1">
          Reference: {product.reference}
        </p>
        <p className="text-sm text-[var(--text-secondary)]">
          Condition: {product.condition}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-semibold text-[var(--text-primary)]">
            {formatPrice(product.price)}
          </span>
          {quantity > 1 && (
            <span className="text-sm text-[var(--text-secondary)]">
              Qty: {quantity}
            </span>
          )}
        </div>
      </div>

      <button
        onClick={() => removeItem(product.id)}
        className="flex-shrink-0 p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        aria-label="Remove item"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

