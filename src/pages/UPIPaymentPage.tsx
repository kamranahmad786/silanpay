import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Header from "../components/layout/Header";

const UPIPaymentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-outfit">
      {/* Top Support Bar */}

      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary-600 mb-6">
            UPI Payment Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience seamless UPI pay-in and pay-out services designed for
            businesses and consumers. Our platform ensures real-time
            transactions with enhanced security, making digital payments faster,
            more reliable, and user-friendly.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* UPI Pay-in */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              1. UPI Pay-in
            </h2>
            <div className="space-y-4">
              {[
                "Businesses can integrate UPI to accept payments instantly.",
                "Customers can pay directly from bank accounts using a UPI ID.",
                "Supports multiple payment methods (UPI apps, mobile wallets, QR codes).",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UPI Pay-out */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              2. UPI Pay-out
            </h2>
            <div className="space-y-4">
              {[
                "Enables businesses to make instant payouts to customers, vendors, or suppliers.",
                "Supports simultaneous disbursements to multiple UPI accounts for bulk payments.",
                "Allows tracking transaction statuses for smooth fund transfers.",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle
                    className="text-green-500 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How UPI Services Work
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1. Integration",
                description:
                  "Assistance with seamless integration via APIs and SDKs.",
              },
              {
                step: "2. Transaction Initiation",
                description:
                  "Customers initiate pay-ins via UPI apps; businesses initiate pay-outs via the platform.",
              },
              {
                step: "3. Authentication",
                description:
                  "Both pay-ins and pay-outs are secured with two-factor authentication, including UPI PIN.",
              },
              {
                step: "4. Processing",
                description:
                  "Real-time transaction processing facilitated by the UPI network.",
              },
              {
                step: "5. Confirmation",
                description:
                  "A confirmation message is sent to both payer and payee upon successful completion.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6"
              >
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.step}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our UPI services are designed for easy, fast, and secure payment
            management, empowering businesses to thrive in the digital economy.
            With our comprehensive solutions, you can streamline your payment
            processes and provide exceptional customer experiences.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 rounded-2xl p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">#SimplifyPayments</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Elevate Your Business with
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join 10,000+ businesses that trust silansoftware for
              lightning-fast, secure payment processing.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
              {["Fast Integration", "99.9% Uptime", "24/7 Support"].map(
                (feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle size={20} />
                    <span>{feature}</span>
                  </div>
                )
              )}
            </div>

            <Link
              to="/register"
              className="inline-flex items-center bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary-600 rounded-full p-2">
                  <span className="font-bold text-white">S</span>
                </div>
                <span className="text-xl font-bold">silansoftware</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                India's trusted payment gateway with 99.99% uptime, ensuring
                secure, fast, and reliable payment processing for businesses of
                all sizes.
              </p>
              <div className="text-sm text-gray-400 space-y-2">
                <div className="flex items-center">
                  <MapPin size={14} className="mr-2" />
                  <span>Head Office: Mumbai, Maharashtra</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-2" />
                  <span>Corporate Office: Pune, Maharashtra</span>
                </div>
                <div className="flex items-center">
                  <Phone size={14} className="mr-2" />
                  <span>+91-9876543210, +91-9876543211</span>
                </div>
                <div className="flex items-center">
                  <Mail size={14} className="mr-2" />
                  <span>support@silansoftware.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 mt-4">
                <Facebook
                  size={20}
                  className="hover:text-orange-400 cursor-pointer"
                />
                <Instagram
                  size={20}
                  className="hover:text-orange-400 cursor-pointer"
                />
                <Linkedin
                  size={20}
                  className="hover:text-orange-400 cursor-pointer"
                />
                <Youtube
                  size={20}
                  className="hover:text-orange-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-lg font-bold text-primary-400 mb-4">
                Products
                <div className="w-8 h-0.5 bg-secondary-500 mt-1"></div>
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link
                    to="/upi-payments"
                    className="hover:text-white transition-colors"
                  >
                    UPI Payments
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    IMPS Transfer
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    API Integration
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Wallet
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-bold text-primary-400 mb-4">
                Company
                <div className="w-8 h-0.5 bg-secondary-500 mt-1"></div>
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund-policy"
                    className="hover:text-white transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h4 className="text-lg font-bold text-primary-400 mb-4">
                Developers
                <div className="w-8 h-0.5 bg-secondary-500 mt-1"></div>
              </h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    API Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>©2025 Silansoftware Private Limited. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UPIPaymentPage;
