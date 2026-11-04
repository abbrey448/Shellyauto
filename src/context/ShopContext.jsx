
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("shellyCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("shellyOrders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  // Save cart whenever it changes
  function saveCart(updatedCart) {
    setCart(updatedCart);
    localStorage.setItem("shellyCart", JSON.stringify(updatedCart));
  }

  // Add a product to the cart
  function addToCart(product) {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    saveCart(updatedCart);
  }

  // Remove a product from the cart
  function removeFromCart(productId) {
    const updatedCart = cart.filter(
      (item) => item.id !== productId
    );

    saveCart(updatedCart);
  }

  // Change product quantity
  function changeQuantity(productId, quantity) {
    const updatedCart = cart
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      );

    saveCart(updatedCart);
  }

  // Calculate cart total
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Save a new order
  function placeOrder(customerDetails) {
    const newOrder = {
      id: Date.now(),
      ...customerDetails,
      items: cart,
      total: cartTotal,
      date: new Date().toLocaleString(),
    };

    const updatedOrders = [...orders, newOrder];

    setOrders(updatedOrders);
    localStorage.setItem(
      "shellyOrders",
      JSON.stringify(updatedOrders)
    );

    saveCart([]);

    return newOrder;
  }

  const value = {
    cart,
    orders,
    cartTotal,
    addToCart,
    removeFromCart,
    changeQuantity,
    placeOrder,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
