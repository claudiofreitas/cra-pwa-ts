import { createContext, FC, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CartContext = createContext(undefined as any);

interface CartItem {
  id: string;
  quantity: number;
}

export const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useLocalStorage<CartItem[]>('cart', []);

  const addToCart = useCallback(
    (id: string) => {
      const items = cart.slice();
      const index = items.findIndex((item) => item.id === id);
      if (index !== -1) {
        items[index].quantity += 1;

      }else {
        items.push({id, quantity: 1});
      }
      setCart(items);

    },
    [cart, setCart]
  );

  return (
    <CartContext.Provider
      value={{
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
