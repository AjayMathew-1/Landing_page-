// src/components/Header.jsx
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react"; // hamburger icons

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Location Insights", href: "#location" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Analytics", href: "#analytics" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-lg font-semibold text-gray-800">
              Property Insights
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-600 hover:text-blue-500 transition-colors 
             after:content-[''] after:absolute after:-bottom-1 after:left-0 
             after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all 
             after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
              Log In
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-400 shadow hover:opacity-90 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 mt-4">
              <button className="px-4 py-2 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition cursor-pointer">
                Log In
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-400 shadow hover:opacity-90 transition cursor-pointer">
                Get Started
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
