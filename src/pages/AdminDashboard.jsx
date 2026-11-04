
import { Link } from "react-router-dom";
import { products } from "../data";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">

        {/* Dashboard heading */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold uppercase tracking-widest text-green-700">
              Shelly Auto
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Admin Dashboard
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your spare parts store.
            </p>
          </div>

          <Link
            to="/"
            className="rounded-lg bg-black px-5 py-3 font-semibold text-white hover:bg-pink-600"
          >
            View Website
          </Link>
        </div>

        {/* Summary cards */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border-l-4 border-green-600 bg-white p-6 shadow-sm">
            <p className="text-gray-500">Total Products</p>
            <h2 className="mt-2 text-3xl font-bold">
              {products.length}
            </h2>
          </div>

          <div className="rounded-xl border-l-4 border-pink-500 bg-white p-6 shadow-sm">
            <p className="text-gray-500">Customer Orders</p>
            <h2 className="mt-2 text-3xl font-bold">0</h2>
            <p className="mt-1 text-sm text-gray-500">
              Order tracking will be connected later.
            </p>
          </div>

          <div className="rounded-xl border-l-4 border-gray-800 bg-white p-6 shadow-sm">
            <p className="text-gray-500">Store Status</p>
            <h2 className="mt-2 text-2xl font-bold text-green-700">
              Active
            </h2>
          </div>
        </div>

        {/* Products table */}
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="border-b p-5">
            <h2 className="text-xl font-bold text-gray-900">
              Store Products
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Products currently listed in Shelly Auto.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-sm text-gray-600">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Product ID</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t">
                    <td className="p-4 font-semibold text-gray-900">
                      {product.name}
                    </td>

                    <td className="p-4 text-gray-600">
                      {product.category}
                    </td>

                    <td className="p-4 font-medium">
                      KSh {product.price.toLocaleString()}
                    </td>

                    <td className="p-4 text-gray-500">
                      #{product.id}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
