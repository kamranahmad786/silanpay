import React from "react";
import Header from "../components/layout/Header";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Header />
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: September 2025</p>

          <div className="space-y-6 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-gray-700">
              We value your privacy. This policy explains what data we collect,
              how we use it, and your rights.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Information We Collect
            </h2>
            <p className="text-gray-700">
              Account details, contact information, and usage data necessary to
              provide our services.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. How We Use Information
            </h2>
            <p className="text-gray-700">
              To deliver and improve services, provide support, ensure security,
              and comply with laws.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Data Sharing
            </h2>
            <p className="text-gray-700">
              We do not sell personal data. Limited sharing with processors
              under strict agreements.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              4. Your Rights
            </h2>
            <p className="text-gray-700">
              You may access, correct, or delete your data, subject to legal
              requirements.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">5. Contact</h2>
            <p className="text-gray-700">
              For privacy inquiries, contact support@silansoftware.com or
              +91-8984289279.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
