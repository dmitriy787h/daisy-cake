import { useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';

export const useCartHydration = () => {
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
};
