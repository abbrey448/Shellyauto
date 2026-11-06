
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

function Products({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchText = searchTerm.toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.category.toLowerCase().includes(searchText) ||
      (product.description || "").toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  if (sortOrder === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <section className="min-h-[60vh] bg-gray-50 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">

        
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-widest text-pink-700">
            Shelly Auto Collection
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            All <span className="text-green-800">Products</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
            Find dependable automotive spare parts and keep your
            vehicle running smoothly.
          </p>
        </div>

        
        <div className="mb-10 grid gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:grid-cols-2 sm:p-6">

          <div>
            <label
              htmlFor="product-search"
              className="mb-2 block text-sm font-bold text-gray-800"
            >
              Search spare parts
            </label>

            <input
              id="product-search"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="e.g. Brake Pads, Oil Filter..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
            />
          </div>

          <div>
            <label
              htmlFor="product-sort"
              className="mb-2 block text-sm font-bold text-gray-800"
            >
              Sort products
            </label>

            <select
              id="product-sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-100"
            >
              <option value="default">Recommended</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>

        
        <div className="mb-9">
          <h2 className="mb-4 text-lg font-extrabold text-gray-900">
            Browse Categories
          </h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  selectedCategory === category
                    ? "bg-pink-700 text-white shadow-md"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-pink-600 hover:text-pink-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-gray-600">
            Showing{" "}
            <span className="font-extrabold text-pink-700">
              {filteredProducts.length}
            </span>{" "}
            of {products.length} products
          </p>

          {(searchTerm || selectedCategory !== "All" || sortOrder !== "default") && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSortOrder("default");
              }}
              className="text-sm font-bold text-pink-700 underline hover:text-pink-900"
            >
              Clear filters
            </button>
          )}
        </div>

    
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <h2 className="text-xl font-bold text-gray-900">
              No products found
            </h2>

            <p className="mt-2 text-gray-600">
              Try another search term or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSortOrder("default");
              }}
              className="mt-5 rounded-xl bg-pink-700 px-6 py-3 font-bold text-white transition hover:bg-pink-800"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
