
import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cart, onPlaceOrder }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "Cash on Delivery",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty. Please shop for products first.");
      return;
    }

    onPlaceOrder(form);
  }

  if (cart.length === 0) {
    return (
      <section className="px-6 py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold">Checkout</h1>
        <p className="mb-6 text-gray-600">
          Your cart is empty. Add products before checking out.
        </p>
        <Link
          to="/products"
          className="rounded-lg bg-green-800 px-6 py-3 font-bold text-white"
        >
          Shop Products
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-[60vh] bg-gray-50 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border bg-white p-6 shadow-sm"
        >
          <h1 className="mb-6 text-3xl font-extrabold">Checkout</h1>

          <div className="space-y-4">
            <label className="block font-semibold">
              Full Name
              <input
                className="mt-2 w-full rounded-lg border p-3 font-normal"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="block font-semibold">
              Email Address
              <input
                className="mt-2 w-full rounded-lg border p-3 font-normal"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="block font-semibold">
              Phone Number
              <input
                className="mt-2 w-full rounded-lg border p-3 font-normal"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </label>

            <label className="block font-semibold">
              Delivery Address
              <textarea
                className="mt-2 w-full rounded-lg border p-3 font-normal"
                name="address"
                value={form.address}
                onChange={handleChange}
                rows="3"
                required
              />
            </label>

            <label className="block font-semibold">
              Payment Method
              <select
                className="mt-2 w-full rounded-lg border p-3 font-normal"
                name="payment"
                value={form.payment}
                onChange={handleChange}
              >
                <option>Cash on Delivery</option>
                <option>M-Pesa on Delivery</option>
              </select>
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-green-800 px-5 py-3 font-bold text-white hover:bg-green-900"
          >
            Place Order
          </button>

          <p className="mt-3 text-sm text-gray-500">
            This demo records orders locally. It does not process online
            payments or send payment requests.
          </p>
        </form>

        <aside className="h-fit rounded-xl bg-green-50 p-6">
          <h2 className="mb-5 text-2xl font-bold">Order Summary</h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="mb-4 flex justify-between gap-4 border-b border-green-100 pb-3"
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <strong>
                KSh {(item.price * item.quantity).toLocaleString("en-KE")}
              </strong>
            </div>
          ))}

          <p className="mt-5 text-xl font-extrabold">
            Total: KSh {total.toLocaleString("en-KE")}
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;
