
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* Business Information */}
        <div>
          <h2 className="mb-5 text-2xl font-extrabold">
            Shelly <span className="text-pink-600">Auto</span>
          </h2>

          <p className="max-w-xs text-sm leading-7 text-gray-300">
            Your trusted partner for quality car spare parts.
            Find reliable automotive parts at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 border-b border-green-700 pb-3 text-lg font-bold">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li>
              <Link to="/" className="transition hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="transition hover:text-pink-500">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="transition hover:text-pink-500">
                Shopping Cart
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-pink-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="mb-5 border-b border-green-700 pb-3 text-lg font-bold">
            Customer Service
          </h3>

          <ul className="space-y-4 text-sm text-gray-300">
            <li>Help and Support</li>
            <li>Delivery Information</li>
            <li>Returns and Refunds</li>
            <li>Frequently Asked Questions</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-5 border-b border-green-700 pb-3 text-lg font-bold">
            Contact Us
          </h3>

          <div className="space-y-4 text-sm text-gray-300">
            <p>
              Email: support@shellyauto.example
            </p>

            <p>
              Phone: Add your business number
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Shelly Auto Spare Parts.
        All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
