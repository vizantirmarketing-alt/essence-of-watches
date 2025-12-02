'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useCurrency } from '@/contexts/CurrencyContext';

export function CartSummary() {
  const { total, itemCount } = useCart();
  const { formatPrice } = useCurrency();

  const shipping = total > 0 ? 0 : 0; // Free shipping threshold logic can be added
  const finalTotal = total + shipping;

  return (
    <div className="border-t border-[var(--border)] pt-4 mt-4">
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-[var(--text-secondary)]">
          <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
          <span>{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between text-sm text-[var(--text-secondary)]">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-[var(--text-primary)] pt-2 border-t border-[var(--border)]">
          <span>Total</span>
          <span>{formatPrice(finalTotal)}</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Link
          href="/checkout"
          className="block w-full bg-[var(--text-primary)] text-[var(--bg-primary)] text-center py-3 px-6 font-medium hover:opacity-90 transition-opacity"
        >
          Proceed to Checkout
        </Link>
        <Link
          href="/cart"
          className="block w-full border border-[var(--border)] text-[var(--text-primary)] text-center py-3 px-6 font-medium hover:border-[var(--text-secondary)] transition-colors"
        >
          View Cart
        </Link>
      </div>

      <p className="text-xs text-[var(--text-secondary)] mt-4 text-center">
        Secure checkout with SSL encryption
      </p>
    </div>
  );
}

