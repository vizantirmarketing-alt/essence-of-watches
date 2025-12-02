'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { CurrencyProvider } from '@/contexts/CurrencyContext';
import { CartProvider } from '@/contexts/CartContext';
import { WishlistProvider } from '@/contexts/WishlistContext';
import { CartDrawerProvider } from '@/components/cart/CartDrawer';
import AuthProvider from '@/components/providers/AuthProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CurrencyProvider>
          <CartProvider>
            <WishlistProvider>
              <CartDrawerProvider>
                {children}
              </CartDrawerProvider>
            </WishlistProvider>
          </CartProvider>
        </CurrencyProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

