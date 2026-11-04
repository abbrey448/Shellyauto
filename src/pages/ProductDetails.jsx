
import { Link, useParams } from "react-router-dom";
import { products } from "../data";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="min-h-screen px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>

        <Link
          to="/products"
          className="mt-5 inline-block font-semibold text-fuchsia-600"
        >
          Return to All Products
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/products"
          className="mb-8 inline-block font-semibold text-fuchsia-600 hover:underline"
        >
          ← Back to Products
        </Link>

        <div className="grid gap-10 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          {/* Product image */}
          <div className="flex min-h-72 items-center justify-center rounded-xl bg-gray-100 p-4">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-96 w-full object-contain"
            />
          </div>

          {/* Product information */}
          <div className="flex flex-col items-start justify-center">
            <p className="mb-3 font-semibold text-fuchsia-600">
              {product.category}
            </p>

            <h1 className="mb-4 text-3xl font-extrabold md:text-4xl">
              {product.name}
            </h1>

            <p className="mb-5 leading-7 text-gray-600">
              {product.description}
            </p>

            <p className="mb-6 text-3xl font-extrabold">
              KSh {Number(product.price).toLocaleString("en-KE")}
            </p>

            <button
              type="button"
              disabled
              title="We will connect this button to your shopping cart in a later step."
              className="w-full cursor-not-allowed rounded-lg bg-fuchsia-300 px-6 py-4 font-bold text-white sm:w-auto"
            >
              Add to Cart — coming next
            </button>

            <p className="mt-4 text-sm text-gray-500">
              Please confirm that this part is compatible with your vehicle before ordering.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
