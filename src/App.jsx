
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Receipt from "./components/Receipt";
import Footer from "./components/Footer";

// ==============================
// REGISTER PAGE
// ==============================

function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister(e) {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("shellyUsers") || "[]"
    );

    const existingUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (existingUser) {
      setError("This email is already registered. Please sign in.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      password,
    };

    localStorage.setItem(
      "shellyUsers",
      JSON.stringify([...users, newUser])
    );

    alert("Account created successfully! Please sign in.");
    navigate("/login");
  }

  return (
    <section className="flex min-h-[550px] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md border border-gray-200 bg-white p-8">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Join Shelly Auto today
        </p>

        {error && (
          <p className="mt-5 bg-red-100 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <form onSubmit={handleRegister} className="mt-7 space-y-5">
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-700 px-6 py-3 font-bold text-white transition hover:bg-pink-800"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-pink-700 underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}

// ==============================
// LOGIN PAGE
// ==============================

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    setError("");

    const users = JSON.parse(
      localStorage.getItem("shellyUsers") || "[]"
    );

    const user = users.find(
      (item) =>
        item.email.toLowerCase() === email.trim().toLowerCase() &&
        item.password === password
    );

    if (!user) {
      setError("Incorrect email or password. Please check your details or register.");
      return;
    }

    localStorage.setItem(
      "shellyCurrentUser",
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
      })
    );

    navigate("/");
  }

  return (
    <section className="flex min-h-[550px] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md border border-gray-200 bg-white p-8">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Sign in to your Shelly Auto account
        </p>

        {error && (
          <p className="mt-5 bg-red-100 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="mt-7 space-y-5">
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-700 px-6 py-3 font-bold text-white transition hover:bg-pink-800"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-pink-700 underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

// ==============================
// CONTACT PAGE
// ==============================

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="bg-gray-50">
      <div className="bg-green-900 px-6 py-16 text-center text-white sm:py-20">
        <p className="font-semibold uppercase tracking-widest text-green-200">
          We're Here to Help
        </p>

        <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
          Contact Shelly Auto
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-green-100">
          Looking for the right spare part? Have a question about
          your order? Our team is ready to help you find what you need.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border border-gray-200 bg-white p-6">
            <Phone size={24} className="mb-4 text-green-800" />
            <h3 className="font-bold text-gray-900">Call Us</h3>
            <p className="mt-2 text-sm text-gray-500">
              Speak to our customer support team.
            </p>
            <p className="mt-3 font-semibold text-green-800">
              Add your business phone
            </p>
          </div>

          <div className="border border-gray-200 bg-white p-6">
            <Mail size={24} className="mb-4 text-green-800" />
            <h3 className="font-bold text-gray-900">Email Us</h3>
            <p className="mt-2 text-sm text-gray-500">
              Send us your questions and enquiries.
            </p>
            <p className="mt-3 font-semibold text-green-800">
              Add your business email
            </p>
          </div>

          <div className="border border-gray-200 bg-white p-6">
            <MapPin size={24} className="mb-4 text-green-800" />
            <h3 className="font-bold text-gray-900">Our Location</h3>
            <p className="mt-2 text-sm text-gray-500">
              Find us and get the spare parts you need.
            </p>
            <p className="mt-3 font-semibold text-green-800">
              Add your business location
            </p>
          </div>

          <div className="border border-gray-200 bg-white p-6">
            <Clock size={24} className="mb-4 text-green-800" />
            <h3 className="font-bold text-gray-900">Opening Hours</h3>
            <p className="mt-2 text-sm text-gray-500">
              Our business hours.
            </p>
            <p className="mt-3 font-semibold text-green-800">
              Add your opening hours
            </p>
          </div>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-5">
          <div className="border border-gray-200 bg-white p-6 sm:p-8 lg:col-span-3">
            <div className="mb-7">
              <p className="font-bold uppercase tracking-widest text-green-800">
                Send Us a Message
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                We'd Love to Hear From You
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Fill in the form below with your enquiry and
                tell us how we can assist you.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 bg-green-50 p-4 text-sm text-green-900">
                Thank you for your enquiry! This form is currently
                a front-end demonstration and does not send messages yet.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like help with?"
                  required
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-y border border-gray-300 px-4 py-3 outline-none focus:border-green-700"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 bg-green-800 px-6 py-4 font-bold text-white transition hover:bg-green-900 sm:w-auto"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div className="bg-green-900 p-7 text-white sm:p-8">
              <MessageCircle size={35} />

              <h2 className="mt-5 text-2xl font-extrabold">
                Need Help Finding a Part?
              </h2>

              <p className="mt-4 leading-7 text-green-100">
                Not sure which spare part fits your vehicle?
                Contact our team with your vehicle details
                and we'll help you find the right product.
              </p>

              <Link
                to="/products"
                className="mt-6 inline-block bg-white px-5 py-3 font-bold text-green-900 transition hover:bg-green-100"
              >
                Browse Products
              </Link>
            </div>

            <div className="border border-gray-200 bg-white p-7">
              <h3 className="text-xl font-bold text-gray-900">
                Why Choose Shelly Auto?
              </h3>

              <ul className="mt-5 space-y-4 text-sm text-gray-600">
                <li>✓ Quality vehicle spare parts</li>
                <li>✓ Helpful customer support</li>
                <li>✓ Convenient online shopping</li>
                <li>✓ Easy order placement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==============================
// MAIN WEBSITE
// ==============================

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
      items: [...cart],
      total: cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      orderDate: new Date().toLocaleString(),
      status: "Pending",
    };

    const updatedOrders = [...orders, order];

    localStorage.setItem("shellyOrders", JSON.stringify(updatedOrders));
    localStorage.setItem("shellyCart", JSON.stringify([]));

    setOrders(updatedOrders);
    setCart([]);

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
          <Route path="/" element={
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

                <Link
                  to="/products"
                  className="inline-block bg-green-800 px-6 py-3 font-bold text-white"
                >
                  Shop All Products
                </Link>
              </section>
            </>
          } />

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

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="*"
            element={
              <section className="px-6 py-20 text-center">
                <h1 className="mb-4 text-3xl font-bold">
                  Page not found
                </h1>

                <Link className="text-green-800 underline" to="/">
                  Return Home
                </Link>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

// ==============================
// APP ENTRY
// ==============================

export default function App() {
  return (
    <BrowserRouter>
      <Website />
    </BrowserRouter>
  );
}
