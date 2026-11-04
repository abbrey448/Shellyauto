
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="bg-green-50 px-6 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 font-bold uppercase tracking-widest text-green-800">
            Welcome to Shelly Auto
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            Quality Parts.
            <span className="block text-green-800">Better Drives.</span>
          </h1>

          <p className="my-6 max-w-lg leading-7 text-gray-600">
            Find dependable spare parts for your vehicle, all in one place.
            Shop with confidence at Shelly Auto.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="rounded-lg bg-green-800 px-6 py-3 font-bold text-white hover:bg-green-900"
            >
              Shop Products
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-green-800 px-6 py-3 font-bold text-green-900 hover:bg-white"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=80"
          alt="Car mechanic working on a vehicle"
          className="h-72 w-full rounded-2xl object-cover shadow-lg md:h-96"
        />
      </div>
    </section>
  );
}

export default Hero;
