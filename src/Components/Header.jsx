import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          chromo<span className="text-gray-900">Pay</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {["Products", "Solutions", "Developers", "Resources", "Pricing"].map(
            (item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-indigo-600 text-sm font-medium transition"
              >
                {item}
              </NavLink>
            )
          )}
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/signin"
            className="text-gray-700 hover:text-indigo-600 text-sm font-medium"
          >
            Sign in
          </Link>
          <button className="bg-indigo-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-indigo-700 transition">
            Contact Sales
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4 space-y-4">
          {["Products", "Solutions", "Developers", "Resources", "Pricing"].map(
            (item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-indigo-600 text-base font-medium transition"
              >
                {item}
              </NavLink>
            )
          )}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <Link
              to="/signin"
              className="text-gray-700 hover:text-indigo-600 text-sm font-medium"
            >
              Sign in
            </Link>
            <button className="bg-indigo-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-indigo-700 transition">
              Contact Sales
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
