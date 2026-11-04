
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle =
    "block py-2 font-semibold text-gray-700 hover:text-green-800";

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" onClick={closeMenu} className="text-2xl font-extrabold">
          Shelly<span className="text-green-700">Auto</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link className={linkStyle} to="/">Home</Link>
          <Link className={linkStyle} to="/products">Products</Link>
          <Link className={linkStyle} to="/contact">Contact</Link>
          <Link
            className="rounded-lg bg-green-800 px-4 py-2 font-bold text-white hover:bg-green-900"
            to="/cart"
          >
            Cart ({cartCount})
          </Link>
        </nav>

        <button
          type="button"
          className="text-3xl md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t bg-white px-6 py-4 md:hidden">
          <Link className={linkStyle} to="/" onClick={closeMenu}>Home</Link>
          <Link className={linkStyle} to="/products" onClick={closeMenu}>Products</Link>
          <Link className={linkStyle} to="/contact" onClick={closeMenu}>Contact</Link>
          <Link className={linkStyle} to="/cart" onClick={closeMenu}>
            Cart ({cartCount})
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
