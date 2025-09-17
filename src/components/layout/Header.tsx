import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  CreditCard,
  Link as LinkIcon,
  QrCode,
  Repeat,
  FileText,
  Shuffle,
  Send,
  Users,
  RotateCcw,
  Wallet as WalletIcon,
  Building2,
  ShieldCheck,
  UserCheck,
  Scale,
  Circle,
  ChevronDown,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isDevelopersDropdownOpen, setIsDevelopersDropdownOpen] =
    useState(false);
  const productsCloseTimerRef = useRef<number | null>(null);
  const developersCloseTimerRef = useRef<number | null>(null);

  const handleProductsEnter = () => {
    if (productsCloseTimerRef.current) {
      window.clearTimeout(productsCloseTimerRef.current);
      productsCloseTimerRef.current = null;
    }
    setIsProductsDropdownOpen(true);
  };

  const handleProductsLeave = () => {
    if (productsCloseTimerRef.current) {
      window.clearTimeout(productsCloseTimerRef.current);
    }
    productsCloseTimerRef.current = window.setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 150);
  };

  const handleDevelopersEnter = () => {
    if (developersCloseTimerRef.current) {
      window.clearTimeout(developersCloseTimerRef.current);
      developersCloseTimerRef.current = null;
    }
    setIsDevelopersDropdownOpen(true);
  };

  const handleDevelopersLeave = () => {
    if (developersCloseTimerRef.current) {
      window.clearTimeout(developersCloseTimerRef.current);
    }
    developersCloseTimerRef.current = window.setTimeout(() => {
      setIsDevelopersDropdownOpen(false);
    }, 150);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  // Toggle stronger background/shadow after small scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const productsDropdownSections = [
    {
      heading: "Payments",
      items: [
        { name: "UPI Payments", href: "/upi-payments" },
        { name: "Payment Links", href: "/payment-links" },
        { name: "QR Code Payments", href: "/qr" },
        { name: "Subscriptions & Recurring", href: "/subscriptions" },
        { name: "Invoices", href: "/invoices" },
        { name: "Smart Routing", href: "/smart-routing" },
      ],
    },
    {
      heading: "Payouts",
      items: [
        { name: "Bulk Payouts (UPI/IMPS/NEFT)", href: "/payouts" },
        { name: "Vendor/Partner Settlements", href: "/settlements" },
        { name: "Refunds", href: "/refunds" },
      ],
    },
    {
      heading: "Accounts",
      items: [
        { name: "Virtual Accounts", href: "/virtual-accounts" },
        { name: "Escrow/Split Payments", href: "/split-payments" },
        { name: "Wallets", href: "/wallet" },
      ],
    },

    {
      heading: "Risk & Compliance",
      items: [
        { name: "Fraud & Risk Engine", href: "/risk" },
        { name: "KYC/Onboarding", href: "/kyc" },
        { name: "Disputes/Chargebacks", href: "/disputes" },
      ],
    },
  ];

  const getItemIcon = (name: string) => {
    switch (name) {
      // Payments
      case "UPI Payments":
        return <CreditCard size={16} className="text-primary-600" />;
      case "Payment Links":
        return <LinkIcon size={16} className="text-primary-600" />;
      case "QR Code Payments":
        return <QrCode size={16} className="text-primary-600" />;
      case "Subscriptions & Recurring":
        return <Repeat size={16} className="text-primary-600" />;
      case "Invoices":
        return <FileText size={16} className="text-primary-600" />;
      case "Smart Routing":
        return <Shuffle size={16} className="text-primary-600" />;
      // Payouts
      case "Bulk Payouts (UPI/IMPS/NEFT)":
        return <Send size={16} className="text-primary-600" />;
      case "Vendor/Partner Settlements":
        return <Users size={16} className="text-primary-600" />;
      case "Refunds":
        return <RotateCcw size={16} className="text-primary-600" />;
      // Accounts
      case "Virtual Accounts":
        return <Building2 size={16} className="text-primary-600" />;
      case "Escrow/Split Payments":
        return <Scale size={16} className="text-primary-600" />;
      case "Wallets":
        return <WalletIcon size={16} className="text-primary-600" />;
      // Risk & Compliance
      case "Fraud & Risk Engine":
        return <ShieldCheck size={16} className="text-primary-600" />;
      case "KYC/Onboarding":
        return <UserCheck size={16} className="text-primary-600" />;
      case "Disputes/Chargebacks":
        return <Scale size={16} className="text-primary-600" />;
      default:
        return <Circle size={16} className="text-primary-600" />;
    }
  };

  const navLinks = [
    { name: "Products", hasDropdown: true, href: "#" },
    { name: "Developers", hasDropdown: true, href: "#" },
    { name: "About Us", hasDropdown: false, href: "/about-us" },
  ];

  const headerBgClass = isScrolled
    ? "bg-white/90 shadow-md"
    : "bg-white/70 shadow-sm";

  return (
    <header
      className={`w-full sticky top-0 z-50 backdrop-blur-md border-b border-gray-200 ${headerBgClass}`}
    >
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
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

          {/* Desktop Navigation - centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.hasDropdown ? (
                    <div
                      onMouseEnter={() => {
                        if (link.name === "Products") handleProductsEnter();
                        if (link.name === "Developers") handleDevelopersEnter();
                      }}
                      onMouseLeave={() => {
                        if (link.name === "Products") handleProductsLeave();
                        if (link.name === "Developers") handleDevelopersLeave();
                      }}
                    >
                      <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                        <span>{link.name}</span>
                        <ChevronDown size={16} />
                      </button>

                      {/* Products Dropdown */}
                      {link.name === "Products" && isProductsDropdownOpen && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 w-[720px]"
                          onMouseEnter={handleProductsEnter}
                          onMouseLeave={handleProductsLeave}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                            {productsDropdownSections.map((section) => (
                              <div key={section.heading}>
                                <div className="text-sm uppercase tracking-wide mb-3 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                                  {section.heading}
                                </div>
                                <ul className="space-y-2">
                                  {section.items.map((item) => (
                                    <li key={item.name}>
                                      <div className="flex items-center gap-2 text-base text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md px-2 py-1 cursor-default">
                                        {getItemIcon(item.name)}
                                        <span>{item.name}</span>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Developers Dropdown */}
                      {link.name === "Developers" &&
                        isDevelopersDropdownOpen && (
                          <div
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 w-[360px]"
                            onMouseEnter={handleDevelopersEnter}
                            onMouseLeave={handleDevelopersLeave}
                          >
                            <div className="p-6">
                              <div className="text-sm uppercase tracking-wide mb-3 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                                Developer Tools
                              </div>
                              <ul className="space-y-2">
                                {[
                                  "API & SDKs",
                                  "Webhooks",
                                  "Plugins (Shopify/WordPress/etc.)",
                                ].map((name) => (
                                  <li key={name}>
                                    <div className="block text-base text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md px-2 py-1 cursor-default">
                                      {name}
                                    </div>
                                  </li>
                                ))}
                              </ul>
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
            </div>
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <button className="text-gray-700 hover:text-primary-600 transition-colors duration-200">
              <Search size={20} />
            </button> */}
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

        {/* Mobile Menu - Fullscreen Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[9999] bg-white overflow-y-auto min-h-screen">
            <div className="px-4 pt-4 pb-8 border-b border-gray-200 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-4 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <div className="text-gray-900 font-semibold mb-2">
                        {link.name}
                      </div>
                      {link.name === "Products" && (
                        <div className="ml-2 space-y-5">
                          {productsDropdownSections.map((section) => (
                            <div key={section.heading}>
                              <div className="text-sm uppercase tracking-wide mb-2 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                                {section.heading}
                              </div>
                              <ul className="space-y-2">
                                {section.items.map((item) => (
                                  <li key={item.name}>
                                    <div className="flex items-center gap-2 text-base text-gray-700 transition-colors duration-200 cursor-default">
                                      {getItemIcon(item.name)}
                                      <span>{item.name}</span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                      {link.name === "Developers" && (
                        <div className="ml-2 space-y-4">
                          <div className="text-sm uppercase tracking-wide mb-2 bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                            Developer Tools
                          </div>
                          <ul className="space-y-2">
                            {[
                              "API & SDKs",
                              "Webhooks",
                              "Plugins (Shopify/WordPress/etc.)",
                            ].map((name) => (
                              <li key={name}>
                                <div className="block text-base text-gray-700 transition-colors duration-200 cursor-default">
                                  {name}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-900 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-3 pt-2">
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white px-6 py-3 rounded-lg font-medium text-center transition-all duration-200 shadow-lg hover:shadow-xl"
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
