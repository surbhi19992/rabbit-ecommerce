import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const fetchCartCount = async () => {
    const guestId = localStorage.getItem("guestId");
    try {
      const res = await axios.get(`http://localhost:5001/api/cart?guestId=${guestId}`);
      if (res.data.products) {
        const totalCount = res.data.products.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(totalCount);
      }
    } catch (err) {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalCount = localCart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalCount);
    }
  };

  const updateCartCount = () => {
    fetchCartCount(); // call whenever cart is updated
  };

  useEffect(() => {
    fetchCartCount(); // page load pe bhi count fetch karo
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
