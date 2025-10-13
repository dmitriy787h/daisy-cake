import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  type: 'cake' | 'custom';
  // Для кастомных тортов
  configuration?: {
    size: string;
    layers: string[];
    fillings: string[];
    decorations: string[];
    packaging: string;
    candles: number;
    customText?: string;
  };
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        const existingItem = get().items.find(i => i.id === item.id);
        if (existingItem) {
          set((state) => ({
            items: state.items.map(i =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            )
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: 1 }]
          }));
        }
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== id)
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    }
  )
);
