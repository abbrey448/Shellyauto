
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Receipt from "./components/Receipt";
import Footer from "./components/Footer";

function Website() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shellyCart")) || [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("shellyOrders")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("shellyCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("shellyOrders", JSON.stringify(orders));
  }, [orders]);

  function addToCart(product) {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id);

      if (found) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function changeQuantity(id, quantity) {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }

    setCart((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  function placeOrder(details) {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add a product first.");
      navigate("/products");
      return;
    }

    const order = {
      ...details,
      id: `SA-${Date.now()}`,
      items: cart,
      total: cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      orderDate: new Date().toLocaleString(),
      status: "Pending",
    };

    const updatedOrders = [...orders, order];

    setOrders(updatedOrders);
    setCart([]);

    localStorage.setItem("shellyOrders", JSON.stringify(updatedOrders));
    localStorage.setItem("shellyCart", JSON.stringify([]));

    navigate("/receipt", { state: { order } });
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartCount} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
                <section className="px-6 py-12 text-center">
                  <h2 className="mb-3 text-3xl font-extrabold">
                    Ready to find your spare parts?
                  </h2>
                  <p className="mb-6 text-gray-600">
                    Explore quality parts for your vehicle.
                  </p>
                  <a
                    href="/products"
                    className="inline-block rounded-lg bg-green-800 px-6 py-3 font-bold text-white"
                  >
                    Shop All Products
                  </a>
                </section>
              </>
            }
          />

          <Route
            path="/products"
            element={<Products onAddToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                onChangeQuantity={changeQuantity}
                onRemove={removeFromCart}
              />
            }
          />

          <Route
            path="/checkout"
            element={
              <Checkout cart={cart} onPlaceOrder={placeOrder} />
            }
          />

          <Route path="/receipt" element={<Receipt />} />

          <Route
            path="/contact"
            element={
              <section className="mx-auto max-w-3xl px-6 py-16">
                <h1 className="mb-4 text-4xl font-extrabold">
                  Contact Shelly Auto
                </h1>
                <p className="mb-6 text-gray-600">
                  Need help finding the right spare part? Get in touch
                  with our team.
                </p>
                <div className="space-y-3 rounded-xl bg-green-50 p-6">
                  <p><strong>Business:</strong> Shelly Auto</p>
                  <p>
                    <strong>Email:</strong>{" "}
                    Add your business email here
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    Add your business phone number here
                  </p>
                </div>
              </section>
            }
          />

          <Route
            path="*"
            element={
              <section className="px-6 py-20 text-center">
                <h1 className="mb-4 text-3xl font-bold">
                  Page not found
                </h1>
                <a className="text-green-800 underline" href="/">
                  Return Home
                </a>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Website />
    </BrowserRouter>
  );
}
