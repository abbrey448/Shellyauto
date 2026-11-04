
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black px-6 py-10 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 md:grid-cols-4">

        {/* Business information */}
        <div>
          <h2 className="mb-4 text-2xl font-extrabold">
            Shelly <span className="text-fuchsia-500">Auto</span>
          </h2>

          <p className="text-sm leading-6 text-gray-300">
            Your trusted partner for quality car spare parts.
            Find reliable automotive parts at affordable prices.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 text-lg font-bold">Quick Links</h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-fuchsia-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-fuchsia-400">
                All Products
              </Link>
            </li>

            <li>
              <Link to="/cart" className="hover:text-fuchsia-400">
                Shopping Cart
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-fuchsia-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer service */}
        <div>
          <h3 className="mb-4 text-lg font-bold">Customer Service</h3>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>Help and Support</li>
            <li>Delivery Information</li>
            <li>Returns and Refunds</li>
            <li>Frequently Asked Questions</li>
          </ul>
        </div>

        {/* Contact information */}
        <div>
          <h3 className="mb-4 text-lg font-bold">Contact Us</h3>

          <p className="mb-3 text-sm text-gray-300">
            Email: support@shellyauto.example
          </p>

          <p className="mb-4 text-sm text-gray-300">
            Phone: Add your business number
          </p>

          <div className="flex gap-4 text-sm font-semibold">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"
              className="hover:text-fuchsia-400">
              Facebook
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"
              className="hover:text-fuchsia-400">
              Instagram
            </a>

            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer"
              className="hover:text-fuchsia-400">
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Shelly Auto Spare Parts. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
