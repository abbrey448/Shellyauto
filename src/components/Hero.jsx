
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Wrench } from "lucide-react";

function Hero() {
  return (
    <section className="w-full bg-green-50">
      <div className="mx-auto grid max-w-[1600px] items-center md:min-h-[480px] md:grid-cols-2">

        
        <div className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20">

          <p className="mb-5 inline-block border-l-4 border-pink-700 bg-white px-4 py-2 text-sm font-bold uppercase tracking-wider text-pink-700">
            Your Automotive Spare Parts Store
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Quality Parts.
            <span className="mt-2 block text-pink-700">
              Better Drives.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
            Find dependable automotive spare parts for your vehicle.
            Discover quality products, convenient shopping, and a
            better way to keep your vehicle moving.
          </p>

          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-pink-700 px-7 py-4 font-bold text-white transition hover:bg-pink-800"
            >
              Shop Products
              <ArrowRight size={19} />
            </Link>

            <Link
              to="/contact"
              className="border-2 border-green-800 px-7 py-4 font-bold text-green-900 transition hover:bg-green-100"
            >
              Contact Us
            </Link>
          </div>

          
          <div className="mt-10 flex flex-wrap gap-7">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <ShieldCheck className="text-green-800" size={21} />
              Quality Parts
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Wrench className="text-green-800" size={21} />
              Automotive Solutions
            </div>
          </div>
        </div>

        
        <div className="relative h-72 bg-green-100 sm:h-96 md:h-full md:min-h-[480px]">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=85"
            alt="Mechanic working on a vehicle"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-0 right-0 bg-pink-700 px-6 py-4 text-white">
            <p className="text-sm font-bold uppercase tracking-wider">
              Shelly Auto
            </p>
            <p className="text-lg font-extrabold">
              Quality You Can Trust
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
