
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Auth() {
  const location = useLocation();

  const [isRegister, setIsRegister] = useState(
    location.pathname === "/register"
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert(
      "Your form is ready. We will implement account registration and login in a later step."
    );
  }

  function switchMode() {
    setIsRegister((previous) => !previous);
    setForm({ name: "", email: "", password: "" });
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
        <Link to="/" className="mb-8 block text-center text-2xl font-extrabold">
          Shelly <span className="text-fuchsia-600">Auto</span>
        </Link>

        <h1 className="text-center text-3xl font-extrabold">
          {isRegister ? "Create Account" : "Welcome Back"}
        </h1>

        <p className="mb-8 mt-3 text-center text-gray-600">
          {isRegister
            ? "Register to start shopping for spare parts."
            : "Sign in to your Shelly Auto account."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {isRegister && (
            <div>
              <label htmlFor="name" className="mb-2 block font-semibold">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-fuchsia-600"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="mb-2 block font-semibold">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-fuchsia-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block font-semibold">
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              required
              minLength={6}
              placeholder="At least 6 characters"
              className="w-full rounded-lg border px-4 py-3 outline-none focus:border-fuchsia-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-fuchsia-600 px-6 py-3 font-bold text-white hover:bg-fuchsia-700"
          >
            {isRegister ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          {isRegister
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={switchMode}
            className="font-bold text-fuchsia-600 hover:underline"
          >
            {isRegister ? "Sign In" : "Register"}
          </button>
        </p>

        <Link
          to="/"
          className="mt-6 block text-center text-sm text-gray-500 hover:text-fuchsia-600"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

export default Auth;
