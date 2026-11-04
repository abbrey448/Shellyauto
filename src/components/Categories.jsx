
import { Link } from "react-router-dom";

const categories = [
  { name: "Braking System", icon: "🛞" },
  { name: "Engine Parts", icon: "⚙️" },
  { name: "Suspension", icon: "🔧" },
  { name: "Electrical Parts", icon: "🔋" },
];

function Categories() {
  return (
    <section id="categories" className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <p className="font-bold uppercase tracking-widest text-green-800">
            Browse by type
          </p>
          <h2 className="mt-2 text-3xl font-extrabold">Our Categories</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              to="/products"
              key={category.name}
              className="rounded-xl border border-gray-200 bg-green-50 p-7 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-4xl">{category.icon}</span>
              <h3 className="mt-4 font-bold">{category.name}</h3>
              <p className="mt-2 text-sm text-green-800">Explore parts →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
