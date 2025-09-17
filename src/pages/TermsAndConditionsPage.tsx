import React from "react";
import Header from "../components/layout/Header";

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Header />
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 mb-8">Last updated: September 2025</p>

          <div className="space-y-6 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-gray-700">
              These Terms & Conditions govern your access to and use of the
              products and services provided by silansoftware Technology Private
              Limited. By using our services, you agree to these terms.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Use of Services
            </h2>
            <p className="text-gray-700">
              You agree to use the services in compliance with applicable laws
              and regulations.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. Accounts & Security
            </h2>
            <p className="text-gray-700">
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Fees & Payments
            </h2>
            <p className="text-gray-700">
              Applicable fees will be communicated and may change with prior
              notice.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              4. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              To the maximum extent permitted by law, our liability is limited.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">5. Contact</h2>
            <p className="text-gray-700">
              For queries, contact support@silansoftware.com or +91-8984289279.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
