
import { Link } from "react-router-dom";

const categories = [
  { name: "Braking System", icon: "🛞" },
  { name: "Engine Parts", icon: "⚙️" },
  { name: "Suspension", icon: "🔧" },
  { name: "Electrical Parts", icon: "🔋" },
];

function Categories() {
  return (
    <section id="categories" className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-widest text-pink-700">
            Browse by type
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Shop by <span className="text-green-800">Category</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
            Explore our range of automotive spare parts and find
            what your vehicle needs.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Link
              to="/products"
              key={category.name}
              className="group rounded-2xl border border-gray-100 bg-green-50 p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:border-pink-200 hover:bg-pink-50 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm transition duration-300 group-hover:scale-110 group-hover:bg-pink-100">
                {category.icon}
              </div>

              <h3 className="mt-6 text-lg font-extrabold text-gray-900 transition group-hover:text-pink-700">
                {category.name}
              </h3>

              <p className="mt-3 text-sm font-semibold text-green-800 transition group-hover:text-pink-700">
                Explore parts →
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;
