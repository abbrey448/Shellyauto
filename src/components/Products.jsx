
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

function Products({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <section className="min-h-[60vh] bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="font-bold uppercase tracking-widest text-green-800">
            Shelly Auto Collection
          </p>
          <h1 className="mt-2 text-4xl font-extrabold">All Products</h1>
          <p className="mt-3 text-gray-600">
            Find spare parts for your vehicle.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 font-semibold ${
                selectedCategory === category
                  ? "bg-green-800 text-white"
                  : "border border-gray-300 bg-white hover:border-green-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mb-5 text-sm text-gray-600">
          Showing {filteredProducts.length} products
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
