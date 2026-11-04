
import { Link, useLocation } from "react-router-dom";

function Receipt() {
  const location = useLocation();

  let savedOrders = [];

  try {
    savedOrders = JSON.parse(localStorage.getItem("shellyOrders")) || [];
  } catch {
    savedOrders = [];
  }

  const order =
    location.state?.order ||
    (savedOrders.length > 0
      ? savedOrders[savedOrders.length - 1]
      : null);

  if (!order) {
    return (
      <section className="px-6 py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold">No Receipt Found</h1>
        <p className="mb-6 text-gray-600">
          Please place an order before viewing your receipt.
        </p>
        <Link
          to="/products"
          className="rounded-lg bg-green-800 px-6 py-3 font-bold text-white"
        >
          Shop Products
        </Link>
      </section>
    );
  }

  const items = order.items || [];
  const total = order.total ??
    items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="min-h-[60vh] bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-3xl rounded-xl border bg-white p-6 shadow-sm sm:p-10">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">
            Shelly<span className="text-green-800">Auto</span>
          </h1>
          <p className="mt-2 text-gray-500">Order Receipt</p>
          <h2 className="mt-5 text-2xl font-bold text-green-800">
            Order Placed Successfully!
          </h2>
        </div>

        <div className="my-8 grid gap-5 border-y py-6 sm:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Order Number</p>
            <p className="font-bold">{order.id}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Order Date</p>
            <p>{order.orderDate || "Not provided"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Customer</p>
            <p className="font-semibold">{order.name}</p>
            <p>{order.email}</p>
            <p>{order.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Delivery Address</p>
            <p>{order.address}</p>
            <p className="mt-2 text-sm text-gray-500">Payment Method</p>
            <p className="font-semibold">{order.payment}</p>
          </div>
        </div>

        <h2 className="mb-4 text-xl font-bold">Items Ordered</h2>

        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between gap-4 border-b py-3"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">
                Quantity: {item.quantity}
              </p>
            </div>
            <p className="font-semibold">
              KSh {(item.price * item.quantity).toLocaleString("en-KE")}
            </p>
          </div>
        ))}

        <div className="mt-6 text-right">
          <p className="text-2xl font-extrabold">
            Total: KSh {total.toLocaleString("en-KE")}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Order status: {order.status || "Pending"}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-lg bg-green-800 px-6 py-3 font-bold text-white"
          >
            Print Receipt
          </button>
          <Link
            to="/products"
            className="rounded-lg border border-green-800 px-6 py-3 font-bold text-green-900"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Receipt;
