import { createContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [productCart, setProductCart] = useState([
    { id: 1, bg: false },
    { id: 2, bg: false },
    { id: 3, bg: false },
  ]);

  const funDelete = (index) => {
    setProductCart((prev) =>
      prev.map((item, i) => (i === index ? { ...item, bg: false } : item)),
    );
  };

  const funAdd = (image) => {
    setProductCart((prev) => {
      const index = prev.findIndex((item) => item.bg === false);

      if (index === -1) return prev;

      return prev.map((item, i) =>
        i === index ? { ...item, bg: image } : item,
      );
    });
  };

  const clear = () => {
    setProductCart((prev) => prev.map((item) => ({ ...item, bg: false })));
  };

  return (
    <CartContext.Provider
      value={{
        productCart,
        funDelete,
        funAdd,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
