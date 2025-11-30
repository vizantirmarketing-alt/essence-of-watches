'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';

export function CartSummary() {
  const { total, itemCount } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const shipping = total > 0 ? 0 : 0; // Free shipping threshold logic can be added
  const finalTotal = total + shipping;

  return (
    <div className="border-t border-[#E5E5E5] dark:border-[#2A2A2A] pt-4 mt-4">
      <div className="space-y-3">
        <div className="flex justify-between text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
          <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
          <span>{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between text-sm text-[#6B6B6B] dark:text-[#A0A0A0]">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-[#1A1A1A] dark:text-[#F8F8F8] pt-2 border-t border-[#E5E5E5] dark:border-[#2A2A2A]">
          <span>Total</span>
          <span>{formatPrice(finalTotal)}</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Link
          href="/checkout"
          className="block w-full bg-[#C9A962] dark:bg-[#D4B872] text-white text-center py-3 px-6 rounded font-medium hover:opacity-90 transition-opacity"
        >
          Proceed to Checkout
        </Link>
        <Link
          href="/cart"
          className="block w-full border border-[#E5E5E5] dark:border-[#2A2A2A] text-[#1A1A1A] dark:text-[#F8F8F8] text-center py-3 px-6 rounded font-medium hover:bg-[#F5F3EF] dark:hover:bg-[#1A1814] transition-colors"
        >
          View Cart
        </Link>
      </div>

      <p className="text-xs text-[#6B6B6B] dark:text-[#A0A0A0] mt-4 text-center">
        Secure checkout with SSL encryption
      </p>
    </div>
  );
}

