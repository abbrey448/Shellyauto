
function ProductCard({ product, onAddToCart }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl">

      
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gray-50 p-1 sm:h-56">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-pink-100 px-3 py-1 text-xs font-bold text-pink-700 shadow-sm">
          {product.category}
        </span>
      </div>

      
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-pink-700">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        <div className="mt-auto pt-5">
          <div className="mb-4">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Price
            </p>

            <p className="mt-1 text-2xl font-extrabold text-green-800">
              KSh {Number(product.price || 0).toLocaleString("en-KE")}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-pink-700 px-4 py-3 font-bold text-white transition-all duration-200 hover:bg-pink-800 active:scale-95 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2"
          >
            <span aria-hidden="true">+</span>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
