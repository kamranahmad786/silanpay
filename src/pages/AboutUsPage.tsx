import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import Header from "../components/layout/Header";
import AboutUs from "../components/AboutUs";

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
            About Us
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get to Know{" "}
            <span className="bg-gradient-to-r from-primary-600 to-orange-500 bg-clip-text text-transparent">
              Our Story
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're a team of passionate professionals dedicated to delivering
            exceptional results and creating meaningful experiences for our
            clients.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: "📄",
                number: "100+",
                label: "Payment Modes",
                color: "bg-orange-100 text-orange-600",
              },
              {
                icon: "😊",
                number: "500+",
                label: "Happy Customers",
                color: "bg-orange-100 text-orange-600",
              },
              {
                icon: "✅",
                number: "100%",
                label: "Safe And Secure",
                color: "bg-orange-100 text-orange-600",
              },
              {
                icon: "🔄",
                number: "98%",
                label: "Transaction Success Rates",
                color: "bg-orange-100 text-orange-600",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Component */}
      <AboutUs />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">
              #SimplifyPayments
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Elevate Your Business with
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join 10,000+ businesses that trust silansoftware for lightning-fast,
            secure payment processing with QR code integration.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            {["Fast Integration", "99.9% Uptime", "24/7 Support"].map(
              (feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-white"
                >
                  <CheckCircle size={20} />
                  <span>{feature}</span>
                </div>
              )
            )}
          </div>

          <Link
            to="/register"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Products */}
            <div>
              <h4 className="text-lg font-bold text-primary-600 mb-4">
                Products
                <div className="w-8 h-0.5 bg-orange-500 mt-1"></div>
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <Link
                    to="/upi-payments"
                    className="hover:text-primary-600 transition-colors"
                  >
                    UPI Payments
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-primary-600 transition-colors"
                  >
                    IMPS Transfer
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-primary-600 transition-colors"
                  >
                    API Integration
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-primary-600 transition-colors"
                  >
                    Wallet
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-bold text-primary-600 mb-4">
                Company
                <div className="w-8 h-0.5 bg-orange-500 mt-1"></div>
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-primary-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="hover:text-primary-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-primary-600 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-primary-600 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund-policy"
                    className="hover:text-primary-600 transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h4 className="text-lg font-bold text-primary-600 mb-4">
                Developers
                <div className="w-8 h-0.5 bg-orange-500 mt-1"></div>
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <Link
                    to="#"
                    className="hover:text-primary-600 transition-colors"
                  >
                    API Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="bg-primary-600 rounded-full p-2">
                  <span className="font-bold text-white">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  silansoftware
                </span>
              </div>
              <div className="text-sm text-gray-600 text-center md:text-right">
                <p>📍 Plot No-741, 2nd Floor, Jayadev Vihar, 751013</p>
                <p>📍 Bhubaneswar, Odisha</p>
                <p>📞 Call: +91-89842 89279</p>
                <p>🏢 silansoftware Technology Private Limited</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>
              &copy; 2025 silansoftware Technology Private Limited. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
