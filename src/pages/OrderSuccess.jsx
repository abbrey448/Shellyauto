
import { Link, useLocation } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();

  const order = location.state?.order;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-lg">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-700">
          ✓
        </div>

        <h1 className="mb-3 text-3xl font-bold text-gray-900">
          Order Successful!
        </h1>

        <p className="mb-6 text-gray-600">
          Thank you for shopping with Shelly Auto.
          Your order has been received.
        </p>

        {order && (
          <div className="mb-6 rounded-lg bg-gray-50 p-5 text-left">
            <h2 className="mb-3 font-bold text-gray-900">
              Order Details
            </h2>

            <p className="mb-2 text-gray-600">
              Order Number: <strong>#{order.id}</strong>
            </p>

            <p className="mb-2 text-gray-600">
              Customer: <strong>{order.name}</strong>
            </p>

            <p className="text-gray-600">
              Total: <strong>KSh {Number(order.total).toLocaleString()}</strong>
            </p>
          </div>
        )}

        <Link
          to="/products"
          className="inline-block rounded-lg bg-pink-600 px-7 py-3 font-bold text-white hover:bg-green-700"
        >
          Continue Shopping
        </Link>

        <p className="mt-5 text-sm text-gray-500">
          Shelly Auto — Quality Parts. Better Drives.
        </p>

      </div>
    </div>
  );
}

export default OrderSuccess;
