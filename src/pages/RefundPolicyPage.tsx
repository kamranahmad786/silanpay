import React from "react";
import Header from "../components/layout/Header";

const RefundPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Header />
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Refund Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: September 2025</p>

          <div className="space-y-6 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-gray-700">
              This policy outlines eligibility and procedures for refunds
              relating to our products and services.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Eligibility
            </h2>
            <p className="text-gray-700">
              Refunds are considered for duplicate payments or proven service
              issues.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. Request Process
            </h2>
            <p className="text-gray-700">
              Submit a request to support@silansoftware.com with transaction
              details within 7 days.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Processing Time
            </h2>
            <p className="text-gray-700">
              Approved refunds are processed within 5-7 business days to the
              original method.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900">4. Contact</h2>
            <p className="text-gray-700">
              For refund queries, contact support@silansoftware.com or
              +91-8984289279.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicyPage;
