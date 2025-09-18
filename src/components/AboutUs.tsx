import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const AboutUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("who-we-are");

  const renderTabContent = () => {
    switch (activeTab) {
      case "who-we-are":
        return (
          <>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
              <div className="w-16 h-1 bg-primary-600 mt-2"></div>
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Silansoftware Private Limited is a leading fintech company
                dedicated to revolutionizing digital payments through secure,
                scalable, and innovative solutions. We are a next-generation
                payment gateway company that empowers businesses to accept and
                manage online payments effortlessly and efficiently.
              </p>
              <p>
                Founded with a vision to simplify financial transactions, we
                deliver seamless integration experience, robust security
                infrastructure, and real-time analytics to ensure transparency
                and control. Our focus on customer success, compliance, and
                continuous innovation makes us a trusted partner for businesses
                seeking reliable payment infrastructure.
              </p>
              <p>
                We provide the tools and support that startups and enterprises
                need to grow confidently in today's digital landscape.
              </p>
            </div>
            <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Why Businesses Choose Us
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Lightning-fast payment processing",
                  "Industry-leading 99.8% success rates",
                  "Enterprise-grade security & PCI compliance",
                  "24/7 dedicated merchant support",
                  "Transparent pricing, no hidden fees",
                  "Same-day settlement & real-time analytics",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle
                      className="text-primary-600 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case "our-mission":
        return (
          <>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
              <div className="w-16 h-1 bg-primary-600 mt-2"></div>
            </h3>
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To create a cashless economy where every business, regardless
                  of size, can access secure, reliable and innovative digital
                  payment solutions that drive growth and financial inclusion.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Silansoftware Private Limited, our mission is to
                  revolutionize the payment ecosystem by providing secure,
                  seamless, and innovative payment solutions that empower
                  businesses to grow, expand, and succeed in the digital
                  economy.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Core Values
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Innovative Payment Solutions",
                      description:
                        "We are committed to delivering cutting-edge, reliable payment gateway services that cater to the evolving needs of businesses of all sizes.",
                      icon: "🚀",
                      color: "from-purple-50 to-violet-50",
                    },
                    {
                      title: "Focus on Security",
                      description:
                        "Security is at the core of everything we do. Our top priority is safeguarding every transaction, ensuring that all payment data is encrypted and protected.",
                      icon: "🔒",
                      color: "from-red-50 to-pink-50",
                    },
                    {
                      title: "Customer-Centric Approach",
                      description:
                        "We aim to build long-lasting relationships with our clients by providing personalized, user-friendly payment solutions.",
                      icon: "❤️",
                      color: "from-blue-50 to-cyan-50",
                    },
                    {
                      title: "Seamless Integration",
                      description:
                        "Our platform is designed to integrate effortlessly with a wide range of business models, offering easy API integrations.",
                      icon: "🔗",
                      color: "from-green-50 to-teal-50",
                    },
                  ].map((value, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-xl p-6 border border-gray-100`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">{value.icon}</span>
                        </div>
                        <div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">
                            {value.title}
                          </h5>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );

      case "our-services":
        return (
          <>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Services
              <div className="w-16 h-1 bg-primary-600 mt-2"></div>
            </h3>
            <div className="space-y-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer a comprehensive range of services designed to meet the
                diverse needs of our clients. Our expertise spans multiple
                disciplines, allowing us to provide integrated solutions that
                address every aspect of your business.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "🌐",
                    title: "UPI Payment Collection",
                    description:
                      "Efficient, secure, real-time UPI payment solutions for quick and hassle-free transactions.",
                    features: [
                      "Real-time UPI payments",
                      "T+1 settlement",
                      "High success rates",
                      "Easy integration",
                    ],
                  },
                  {
                    icon: "🏗️",
                    title: "API Integration Service",
                    description:
                      "Seamless API integration solutions to enhance system functionality and performance.",
                    features: [
                      "Custom API development",
                      "Strategic planning",
                      "Deployment & maintenance",
                      "Performance optimization",
                    ],
                  },
                  {
                    icon: "⚡",
                    title: "Payouts",
                    description:
                      "Innovation, security, and efficiency in delivering seamless payout services via UPI and IMPS.",
                    features: [
                      "Instant UPI payouts",
                      "IMPS transfers",
                      "Bulk payout processing",
                      "Real-time status tracking",
                    ],
                  },
                  {
                    icon: "✅",
                    title: "Payment Solution Provider",
                    description:
                      "Innovative and secure payment solutions for streamlining transactions across all channels.",
                    features: [
                      "Multi-channel payments",
                      "Mobile & web solutions",
                      "Enterprise security",
                      "Scalable infrastructure",
                    ],
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle
                            className="text-primary-600 flex-shrink-0"
                            size={16}
                          />
                          <span className="text-gray-700 text-sm font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <p className="text-gray-600">
                  Each service is tailored to your specific needs and
                  objectives, ensuring that we deliver solutions that are
                  aligned with your goals and drive meaningful results.
                </p>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Navigation */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Discover Our Company
            </h2>
            <div className="space-y-3">
              {[
                {
                  name: "Who We Are",
                  key: "who-we-are",
                  icon: "👥",
                  description: "Learn about our company and values",
                },
                {
                  name: "Our Mission",
                  key: "our-mission",
                  icon: "🎯",
                  description: "Our vision and mission statement",
                },
                {
                  name: "Our Services",
                  key: "our-services",
                  icon: "💼",
                  description: "Comprehensive service offerings",
                },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(item.key)}
                  className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === item.key
                      ? "bg-primary-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-white hover:shadow-md border border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div
                        className={`text-sm ${
                          activeTab === item.key
                            ? "text-primary-100"
                            : "text-gray-500"
                        }`}
                      >
                        {item.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-3">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
