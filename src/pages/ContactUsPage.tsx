import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import Header from "../components/layout/Header";

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Hook this to backend or email service
    console.log("Contact form submitted:", formData);
    alert("Thanks! We have received your message.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white font-outfit">
      <Header />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              We're here to help
            </h1>
            <p className="text-lg text-gray-600 mt-3">
              Reach us via phone, email, or the form below. We respond fast.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-600"
                    placeholder="Write your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-fit">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact details
              </h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mr-3">
                    <Phone className="text-primary-600" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call us</div>
                    <div className="text-gray-600 text-sm">+91-8984289279</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mr-3">
                    <Mail className="text-primary-600" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600 text-sm">
                      info@silansoftware.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mr-3">
                    <MapPin className="text-primary-600" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Office</div>
                    <div className="text-gray-600 text-sm">
                      Plot No-741, 2nd Floor, Jayadev Vihar, Bhubaneswar, Odisha
                      751013
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mr-3">
                    <Clock className="text-primary-600" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Support hours
                    </div>
                    <div className="text-gray-600 text-sm">
                      24/7 Support Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Find us on Google Maps
            </h3>
            <div className="w-full overflow-hidden rounded-2xl border border-gray-200 shadow">
              <div
                className="relative"
                style={{ paddingBottom: "56.25%", height: 0 }}
              >
                <iframe
                  title="Silansoftware Location"
                  src={
                    "https://www.google.com/maps?q=" +
                    encodeURIComponent("7RWF+9F Bhubaneswar, Odisha") +
                    "&output=embed"
                  }
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
            <a
              href={
                "https://www.google.com/maps/search/?api=1&query=" +
                encodeURIComponent("7RWF+9F Bhubaneswar, Odisha") +
                "&query_place_id=" +
                encodeURIComponent("ChIJCYhW4RYJGToRmVLV0AHM4TU")
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-semibold"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Simple footer spacer to match other pages that include a fuller footer */}
      <div className="py-10" />
    </div>
  );
};

export default ContactUsPage;
