// Google Analytics 4 event tracking helpers

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date | object,
      config?: object
    ) => void;
  }
}

export function trackAddToCart(
  productName: string,
  productId: string,
  price: number
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'USD',
      value: price,
      items: [
        {
          item_id: productId,
          item_name: productName,
          price: price,
          quantity: 1,
        },
      ],
    });
  }
}

export function trackBeginCheckout(cartTotal: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      currency: 'USD',
      value: cartTotal,
    });
  }
}

export function trackPurchase(orderId: string, total: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: orderId,
      value: total,
      currency: 'USD',
    });
  }
}


