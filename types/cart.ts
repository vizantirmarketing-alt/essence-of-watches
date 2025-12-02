import type { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number; // Usually 1 for watches
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}


