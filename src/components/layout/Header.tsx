import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Phone, Mail, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const productsDropdownItems = [
    {
      name: "UPI",
      description: "Fast, Secure, Seamless Payment Solution",
      href: "/upi-payments",
    },
    {
      name: "API",
      description: "Connect. Integrate. Build. Scale. Simplify",
      href: "/docs",
    },
    {
      name: "WALLET",
      description: "Empowering your spending, effortlessly securely",
      href: "#",
    },
  ];

  const navLinks = [
    { name: "Products", hasDropdown: true, href: "#" },
    // { name: "Pricing", hasDropdown: false, href: "/pricing" },
    // { name: "Banking Partners", hasDropdown: false, href: "#" },
    { name: "Developers", hasDropdown: true, href: "#" },
    { name: "About Us", hasDropdown: false, href: "/about-us" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary-800 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91-8984289279</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>support@silansoftware.com</span>
            </div>
          </div>
          <div className="text-sm">24/7 Support Available</div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-primary-600 rounded-full p-2">
              <span className="font-bold text-white text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              SILANSOFTWARE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() =>
                      link.name === "Products" &&
                      setIsProductsDropdownOpen(true)
                    }
                    onMouseLeave={() =>
                      link.name === "Products" &&
                      setIsProductsDropdownOpen(false)
                    }
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                      <span>{link.name}</span>
                      <ChevronDown size={16} />
                    </button>

                    {/* Products Dropdown */}
                    {link.name === "Products" && isProductsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                        <div className="p-4">
                          {productsDropdownItems.map((item, index) => (
                            <Link
                              key={index}
                              to={item.href}
                              className="block p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                            >
                              <div className="flex flex-col">
                                <h3 className="text-lg font-semibold text-primary-600 group-hover:text-primary-700 transition-colors">
                                  {item.name}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    <span>{link.name}</span>
                  </Link>
                )}
              </div>
            ))}
            <button className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              <Search size={20} />
            </button>
            <Link
              to="/login"
              className="bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <div className="text-gray-700 font-medium mb-2">
                        {link.name}
                      </div>
                      <div className="ml-4 space-y-3">
                        {link.name === "Products" &&
                          productsDropdownItems.map((item, index) => (
                            <Link
                              key={index}
                              to={item.href}
                              className="block text-gray-600 hover:text-primary-600 transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="font-medium text-primary-600">
                                {item.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {item.description}
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white px-6 py-2 rounded-lg font-medium text-center transition-all duration-200 shadow-lg hover:shadow-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
