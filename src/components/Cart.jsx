
import { Link } from "react-router-dom";

function Cart({ cart, onChangeQuantity, onRemove }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-[60vh] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-extrabold">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="rounded-xl bg-green-50 p-10 text-center">
            <p className="mb-5 text-gray-600">Your cart is empty.</p>
            <Link
              to="/products"
              className="inline-block rounded-lg bg-green-800 px-6 py-3 font-bold text-white"
            >
              Shop Products
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-full rounded-lg bg-green-50 object-contain sm:w-28"
                  />

                  <div className="flex-1">
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="mt-2 font-semibold">
                      KSh {item.price.toLocaleString("en-KE")}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() => onChangeQuantity(item.id, item.quantity - 1)}
                      className="rounded border px-3 py-1"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => onChangeQuantity(item.id, item.quantity + 1)}
                      className="rounded border px-3 py-1"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="font-semibold text-red-600"
                  >
                    Remove
                  </button>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-green-50 p-6 text-right">
              <p className="text-lg">
                Total:{" "}
                <strong>KSh {total.toLocaleString("en-KE")}</strong>
              </p>
              <Link
                to="/checkout"
                className="mt-5 inline-block rounded-lg bg-green-800 px-6 py-3 font-bold text-white"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
