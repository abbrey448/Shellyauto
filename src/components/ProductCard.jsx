
function ProductCard({ product, onAddToCart }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-52 items-center justify-center bg-green-50 p-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="p-5">
        <p className="text-sm font-semibold text-green-800">
          {product.category}
        </p>

        <h3 className="mt-2 text-xl font-bold">{product.name}</h3>

        <p className="mt-2 min-h-10 text-sm text-gray-600">
          {product.description}
        </p>

        <p className="mt-4 text-xl font-extrabold">
          KSh {product.price.toLocaleString("en-KE")}
        </p>

        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="mt-4 w-full rounded-lg bg-green-800 px-4 py-3 font-bold text-white hover:bg-green-900"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
