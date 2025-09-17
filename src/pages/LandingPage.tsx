import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  CreditCard,
  Building2,
  Shield,
  Smartphone,
  Code,
  Tag,
  BarChart3,
  RefreshCw,
  ArrowLeftRight,
  Smile,
  Store,
  Package,
  Monitor,
  Gamepad2,
  GraduationCap,
  Zap,
  Lock,
  Rocket,
  BarChart,
  Globe,
  Wrench,
  CheckCircle as CheckIcon,
  Heart,
  Link as LinkIcon,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import Header from "../components/layout/Header";
import AboutUs from "../components/AboutUs";
import ScrollToTop from "../components/common/ScrollToTop";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-outfit">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Left Content */}
            <div className="space-y-10 text-center">
              <div className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                Empowering Digital Financial Solutions
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent">
                  Smart Payment Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience lightning-fast payments, seamless integrations, and
                enterprise-grade security. Accept 100+ payment methods including
                UPI, cards, wallets, and more with our comprehensive payment
                platform.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  { text: "Instant Settlement", icon: Zap },
                  { text: "Bank-Grade Security", icon: Lock },
                  { text: "48-Hour Integration", icon: Rocket },
                  { text: "Real-Time Analytics", icon: BarChart },
                  { text: "100+ Payment Methods", icon: CreditCard },
                  { text: "Global Reach", icon: Globe },
                ].map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center space-x-3"
                    >
                      <IconComponent className="w-5 h-5 text-primary-600 flex-shrink-0" />
                      <span className="text-lg text-gray-700">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started Free
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/docs"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View Documentation
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-6 pt-8">
                <div className="text-sm text-gray-500">Trusted by</div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm font-semibold text-gray-700">
                    10,000+
                  </div>
                  <div className="text-sm text-gray-500">Businesses</div>
                  <div className="text-sm font-semibold text-gray-700">
                    ₹2.4B+
                  </div>
                  <div className="text-sm text-gray-500">Processed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We offer a comprehensive range of services designed to meet the
              diverse needs of our clients. Our expertise spans multiple
              disciplines, allowing us to provide integrated solutions that
              address every aspect of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: "UPI Payment Collection",
                description:
                  "Efficient, secure, real-time UPI payment solutions for quick and hassle-free transactions. Accept payments instantly through India's most popular payment method.",
                features: [
                  "Real-time UPI payments",
                  "Instant settlement",
                  "High success rates",
                  "Easy integration",
                ],
              },
              {
                icon: Wrench,
                title: "API Integration Service",
                description:
                  "Seamless API integration solutions to enhance system functionality. We cover strategic planning, development, deployment, and maintenance for optimal performance.",
                features: [
                  "Custom API development",
                  "Strategic planning",
                  "Deployment & maintenance",
                  "Performance optimization",
                ],
              },
              {
                icon: Zap,
                title: "Payouts",
                description:
                  "Innovation, security, and efficiency in delivering seamless payout services via UPI and IMPS. Enhanced transaction speed and reliability for all your payout needs.",
                features: [
                  "Instant UPI payouts",
                  "IMPS transfers",
                  "Bulk payout processing",
                  "Real-time status tracking",
                ],
              },
              {
                icon: CheckIcon,
                title: "Payment Solution Provider",
                description:
                  "Innovative and secure payment solutions for streamlining transactions. Online and mobile payment processing for businesses of all sizes with enterprise-grade security.",
                features: [
                  "Multi-channel payments",
                  "Mobile & web solutions",
                  "Enterprise security",
                  "Scalable infrastructure",
                ],
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-primary-200"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle
                          className="text-primary-600 flex-shrink-0"
                          size={18}
                        />
                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center">
                      Learn More
                      <ArrowRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each service is tailored to your specific needs and objectives,
              ensuring that we deliver solutions that are aligned with your
              goals and drive meaningful results.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Payment Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Payment Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Accept payments through 100+ methods including QR codes, UPI, cards,
            wallets, and more.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "QR Code Payments",
              "UPI",
              "Credit/Debit Cards",
              "Digital Wallets",
              "Net Banking",
              "EMI Options",
              "NEFT/RTGS",
              "International Cards",
              "Buy Now Pay Later",
              "Cryptocurrency",
              "Bank Transfers",
              "Mobile Payments",
            ].map((method, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 border border-gray-100"
              >
                <div className="text-sm font-medium text-gray-700">
                  {method}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses that trust silansoftware for their
              payment processing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                company: "TechStart Solutions",
                role: "CEO",
                content:
                  "silansoftware transformed our payment processing. The integration was seamless and the support team is exceptional. We've seen a 40% increase in successful transactions.",
                rating: 5,
                avatar: "RK",
              },
              {
                name: "Priya Sharma",
                company: "E-commerce Plus",
                role: "Operations Head",
                content:
                  "The real-time analytics and instant settlements have been game-changers for our business. silansoftware's platform is incredibly reliable and user-friendly.",
                rating: 5,
                avatar: "PS",
              },
              {
                name: "Amit Patel",
                company: "Digital Services Co.",
                role: "CTO",
                content:
                  "The API documentation is excellent and the webhook integration works flawlessly. We were up and running in just 2 days. Highly recommended!",
                rating: 5,
                avatar: "AP",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Leading Banks */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Banks & Partners
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Partnering with India's most trusted banking institutions and
            payment networks.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              { name: "Suryoday Bank", icon: Building2, color: "bg-blue-50" },
              { name: "Yes Bank", icon: Landmark, color: "bg-red-50" },
              { name: "RBL Bank", icon: Store, color: "bg-green-50" },
              { name: "IDFC First", icon: Building, color: "bg-purple-50" },
              { name: "Fino Bank", icon: Building2, color: "bg-orange-50" },
            ].map((bank, index) => {
              const IconComponent = bank.icon;
              return (
                <div
                  key={index}
                  className={`${bank.color} rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      {bank.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Same-Day Settlement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Same-Day Settlement
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get your money faster with our same-day settlement feature. No
                more waiting for days to access your funds.
              </p>
              <div className="space-y-4">
                {[
                  "Instant settlement for QR code payments",
                  "Same-day processing for all transactions",
                  "Real-time fund availability",
                  "Automated reconciliation",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle
                      className="text-primary-600 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  T+0
                </div>
                <div className="text-lg text-gray-600 mb-4">
                  Settlement Time
                </div>
                <div className="text-sm text-gray-500">
                  Your funds are available the same day
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated with Payment Gateways */}
      {/* <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Integrated with Payment Gateways
          </h2>
          <p className="text-lg text-primary-100 mb-12">
            Seamless payment processing with industry-leading solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Razorpay", icon: CreditCard, color: "bg-blue-50" },
              { name: "PayU", icon: Coins, color: "bg-green-50" },
              { name: "Cashfree", icon: Banknote, color: "bg-purple-50" },
            ].map((gateway, index) => {
              const IconComponent = gateway.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="text-xl font-bold text-gray-900">
                      {gateway.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Get to Know Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get to Know Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We're a team of passionate professionals dedicated to delivering
            exceptional results and creating meaningful experiences for our
            clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Payment Modes", icon: CreditCard },
              { number: "500+", label: "Happy Customers", icon: Smile },
              { number: "100%", label: "Safe And Secure", icon: Shield },
              {
                number: "98%",
                label: "Transaction Success Rates",
                icon: ArrowLeftRight,
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg p-8 border border-gray-100 ${
                    index === 0 ? "border-orange-500" : ""
                  }`}
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Component */}
      <AboutUs />

      {/* Mission, Vision & Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving innovation in digital payments to create a more connected
              and efficient financial ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Our Vision */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To create a cashless economy where every business, regardless of
                size, can access secure, reliable and innovative digital payment
                solutions that drive growth and financial inclusion.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At silansoftware Technology Private Limited, our mission is to
                revolutionize the payment ecosystem by providing secure,
                seamless, and innovative payment solutions that empower
                businesses to grow, expand, and succeed in the digital economy.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Innovative Payment Solutions",
                description:
                  "We are committed to delivering cutting-edge, reliable payment gateway services that cater to the evolving needs of businesses of all sizes. By leveraging advanced technology, we ensure fast and secure transactions.",
                icon: Rocket,
                color: "from-purple-50 to-violet-50",
              },
              {
                title: "Focus on Security",
                description:
                  "Security is at the core of everything we do. Our top priority is safeguarding every transaction, ensuring that all payment data is encrypted and protected against fraud and cyber threats.",
                icon: Lock,
                color: "from-red-50 to-pink-50",
              },
              {
                title: "Customer-Centric Approach",
                description:
                  "We aim to build long-lasting relationships with our clients by providing personalized, user-friendly payment solutions that enhance customer experience.",
                icon: Heart,
                color: "from-blue-50 to-cyan-50",
              },
              {
                title: "Seamless Integration",
                description:
                  "Our platform is designed to integrate effortlessly with a wide range of business models, offering easy API integrations for merchants, retailers, and developers.",
                icon: LinkIcon,
                color: "from-green-50 to-teal-50",
              },
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${value.color} rounded-2xl p-8 border border-gray-100`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary-600 text-white rounded-lg py-2 px-6 inline-block mb-6">
            <span className="font-semibold">Our Products</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Innovative solutions designed to streamline your business operations
            and enhance customer experience.
          </h2>
        </div>
      </section>

      {/* Unlock Business Growth */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unlock access to{" "}
              <span className="text-secondary-500">
                limitless business growth
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're more than a payments partner. Get smoother payment processes
              and offer an outstanding experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "Realtime Analytics",
                icon: BarChart3,
                color: "bg-blue-100",
              },
              {
                name: "Instant Refunds",
                icon: RefreshCw,
                color: "bg-green-100",
              },
              {
                name: "Advanced Fraud Protection",
                icon: Shield,
                color: "bg-red-100",
              },
              {
                name: "QR Code Payments",
                icon: Smartphone,
                color: "bg-purple-100",
              },
              {
                name: "UPI Integration",
                icon: Building2,
                color: "bg-orange-100",
              },
              { name: "Webhook Integration", icon: Link, color: "bg-cyan-100" },
              { name: "Mobile SDK", icon: Code, color: "bg-pink-100" },
              {
                name: "White-label Solutions",
                icon: Tag,
                color: "bg-indigo-100",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-gray-700" to={""} />
                  </div>
                  <h4 className="font-semibold text-gray-900">
                    {feature.name}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* Payment Dashboard Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Payment Dashboard
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">
                  Realtime transaction monitoring
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Success Rate</span>
                    <span className="font-semibold">98.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "98.5%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">
                  Revenue Analytics
                </h4>
                <div className="text-2xl font-bold text-gray-900">₹2.4M</div>
                <div className="text-sm text-green-600">
                  +12% from last month
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">
                  Active Transactions
                </h4>
                <div className="text-2xl font-bold text-gray-900">1,247</div>
                <div className="text-sm text-gray-600">Processing now</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Fintechs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for fintechs.{" "}
            <span className="text-secondary-500">Trusted by Businesses.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Lending",
                description: "Smart disbursement + automated EMI collection",
                icon: CreditCard,
              },
              {
                title: "Marketplaces",
                description:
                  "Virtual account mapping + instant vendor settlement",
                icon: Store,
              },
              {
                title: "D2C",
                description:
                  "Subscription collections + digital soundbox confirmations",
                icon: Package,
              },
              {
                title: "SaaS Platform",
                description:
                  "Invoice-based collections + bill tagging & reconciliation",
                icon: Monitor,
              },
              {
                title: "Gaming",
                description: "Payouts with fraud control and 3-sec settlement",
                icon: Gamepad2,
              },
              {
                title: "EduTech",
                description:
                  "Your data is securely encrypted. Customise dashboards to focus on what matters most to you.",
                icon: GraduationCap,
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-secondary-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
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
            className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get in touch with our team for personalized assistance and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Phone Support
              </h3>
              <p className="text-primary-100 mb-2">+91 98765 43210</p>
              <p className="text-sm text-primary-200">Mon-Fri, 9AM-6PM IST</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Email Support
              </h3>
              <p className="text-primary-100 mb-2">support@silansoftware.com</p>
              <p className="text-sm text-primary-200">24/7 Response</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Live Chat
              </h3>
              <p className="text-primary-100 mb-2">Available 24/7</p>
              <p className="text-sm text-primary-200">Instant Support</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/register"
              className="inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
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

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
