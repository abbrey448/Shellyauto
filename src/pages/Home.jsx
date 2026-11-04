
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

function Home() {
  const featuredProducts = products.slice(0, 8);

  const categories = [
    "Braking System",
    "Engine Parts",
    "Filters",
    "Suspension",
    "Electrical System",
    "Cooling System",
    "Lighting",
    "Transmission",
  ];

  return (
    <main>
      {/* Main banner */}
      <Hero />

      {/* Categories section */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-fuchsia-600">
              FIND YOUR PART
            </p>
            <h2 className="mt-1 text-2xl font-extrabold">
              Shop by Category
            </h2>
          </div>

          <Link
            to="/products"
            className="font-semibold text-fuchsia-600 hover:underline"
          >
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
              className="rounded-xl border border-gray-200 bg-white p-5 text-center font-bold transition hover:border-fuchsia-600 hover:bg-fuchsia-50"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-fuchsia-600">
                CUSTOMER FAVOURITES
              </p>
              <h2 className="mt-1 text-2xl font-extrabold">
                Featured Products
              </h2>
            </div>

            <Link
              to="/products"
              className="rounded-lg bg-fuchsia-600 px-5 py-3 font-semibold text-white hover:bg-fuchsia-700"
            >
              Shop All Parts →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-xl bg-green-50 p-6">
          <h3 className="mb-2 font-bold">✓ Quality Parts</h3>
          <p className="text-sm text-gray-600">
            Browse our selection of automotive spare parts.
          </p>
        </div>

        <div className="rounded-xl bg-fuchsia-50 p-6">
          <h3 className="mb-2 font-bold">✓ Easy Shopping</h3>
          <p className="text-sm text-gray-600">
            Find the parts you need with simple navigation.
          </p>
        </div>

        <div className="rounded-xl bg-gray-100 p-6">
          <h3 className="mb-2 font-bold">✓ Customer Support</h3>
          <p className="text-sm text-gray-600">
            Contact us when you need assistance.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
