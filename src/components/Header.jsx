
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  Search,
  UserRound,
} from "lucide-react";

function Header({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function closeMenu() {
    setMenuOpen(false);
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Products", path: "/products" },
    { name: "Braking System", path: "/products" },
    { name: "Suspension", path: "/products" },
    { name: "Electrical Parts", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  function handleSearch(e) {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      closeMenu();
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-black">

      {/* Announcement Bar */}
      <div className="bg-green-800 px-4 py-2 text-center text-xs font-semibold text-white sm:text-sm">
        Quality Parts. Better Drives.
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-200">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center gap-2"
          >
            <img
              src="/shelly-logo.jpg"
              alt="Shelly Auto logo"
              className="h-12 w-12 object-contain"
            />

            <span className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
              Shelly<span className="text-pink-700">Auto</span>
            </span>
          </Link>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden h-12 max-w-3xl flex-1 items-center border border-gray-300 bg-gray-50 px-4 md:flex lg:mx-8"
          >
            <Search size={20} className="shrink-0 text-gray-500" />

            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for spare parts..."
              className="w-full min-w-0 bg-transparent px-3 text-sm outline-none"
            />

            <button
              type="submit"
              className="h-full bg-pink-700 px-6 font-bold text-white transition hover:bg-pink-800"
            >
              Search
            </button>
          </form>

          {/* Account and Cart */}
          <div className="hidden shrink-0 items-center gap-6 md:flex">

            <Link
              to="/login"
              className="flex items-center gap-2 font-semibold text-gray-700 hover:text-pink-700"
            >
              <UserRound size={21} />
              Sign In
            </Link>

            <Link
              to="/cart"
              className="flex items-center gap-2 bg-pink-700 px-4 py-3 font-bold text-white transition hover:bg-pink-800"
            >
              <ShoppingCart size={20} />
              Cart

              <span className="bg-white px-2 py-1 text-sm text-pink-700">
                {cartCount}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center border border-gray-300 text-gray-800 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Search */}
        <form
          onSubmit={handleSearch}
          className="flex gap-2 px-4 pb-4 md:hidden"
        >
          <div className="flex h-11 flex-1 items-center gap-2 border border-gray-300 bg-gray-50 px-3">
            <Search size={19} />

            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search spare parts..."
              className="w-full min-w-0 bg-transparent text-sm outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-pink-700 px-4 font-bold text-white"
          >
            Search
          </button>
        </form>
      </div>

      
      <nav className="hidden border-b border-gray-200 md:block">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-5 overflow-x-auto px-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex h-14 shrink-0 items-center whitespace-nowrap text-sm font-semibold text-gray-700 transition hover:text-pink-700 lg:text-base"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      
      {menuOpen && (
        <nav className="border-b border-gray-200 bg-white md:hidden">
          <div className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="border-b border-gray-200 px-4 py-4 font-semibold text-gray-700 transition hover:text-pink-700 last:border-0"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={closeMenu}
              className="flex items-center gap-2 px-4 py-4 font-semibold text-gray-700 hover:text-pink-700"
            >
              <UserRound size={20} />
              Sign In
            </Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className="flex items-center justify-between bg-pink-700 px-4 py-4 font-bold text-white"
            >
              <span className="flex items-center gap-2">
                <ShoppingCart size={20} />
                Shopping Cart
              </span>

              <span className="bg-white px-2 py-1 text-sm text-pink-700">
                {cartCount}
              </span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
