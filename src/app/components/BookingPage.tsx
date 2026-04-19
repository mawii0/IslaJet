import { motion } from "motion/react";
import { Search, Calendar, Users, Mail, Phone, Heart, Home } from "lucide-react";
import { useState } from "react";
import { BookingFlowPage } from "./BookingFlowPage";

export function BookingPage() {
  const [showBookingFlow, setShowBookingFlow] = useState(false);
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    passengers: "1",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const destinations = [
    "Manila (MNL)",
    "Siargao (IAO)",
    "Coron (USU)",
    "El Nido (ENI)",
    "Bohol (TAG)",
    "Boracay (MPH)",
    "Cebu (CEB)",
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search flights:", formData);
    setShowBookingFlow(true);
    window.scrollTo(0, 0);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", contactForm);
    alert("Thank you for contacting IslaJet! We'll get back to you soon.");
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  if (showBookingFlow) {
    return (
      <BookingFlowPage
        searchParams={{
          from: formData.from,
          to: formData.to,
          departDate: formData.departDate,
          returnDate: formData.returnDate,
          passengers: parseInt(formData.passengers),
        }}
        onBack={() => setShowBookingFlow(false)}
      />
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--isla-turquoise)] to-[var(--isla-turquoise-dark)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6" style={{ fontWeight: 700 }}>
              Book Your Flight
            </h1>
            <p className="text-xl text-white/90">
              Your island adventure starts here
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flight Search */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center">
                <Search className="w-6 h-6 text-[var(--isla-turquoise)]" />
              </div>
              <h2 className="text-2xl text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                Search Flights
              </h2>
            </div>

            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* From */}
                <div>
                  <label htmlFor="from" className="block mb-2 text-gray-700">
                    From
                  </label>
                  <select
                    id="from"
                    value={formData.from}
                    onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)] bg-white"
                    required
                  >
                    <option value="">Select departure city</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>

                {/* To */}
                <div>
                  <label htmlFor="to" className="block mb-2 text-gray-700">
                    To
                  </label>
                  <select
                    id="to"
                    value={formData.to}
                    onChange={(e) => setFormData({ ...formData, to: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)] bg-white"
                    required
                  >
                    <option value="">Select destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Departure Date */}
                <div>
                  <label htmlFor="departDate" className="block mb-2 text-gray-700">
                    Departure Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      id="departDate"
                      value={formData.departDate}
                      onChange={(e) => setFormData({ ...formData, departDate: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                      required
                    />
                  </div>
                </div>

                {/* Return Date */}
                <div>
                  <label htmlFor="returnDate" className="block mb-2 text-gray-700">
                    Return Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      id="returnDate"
                      value={formData.returnDate}
                      onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                      required
                    />
                  </div>
                </div>

                {/* Passengers */}
                <div>
                  <label htmlFor="passengers" className="block mb-2 text-gray-700">
                    Passengers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="passengers"
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)] bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Passenger" : "Passengers"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[var(--isla-orange)] text-white rounded-full hover:bg-[var(--isla-orange)]/90 transition-all hover:scale-[1.02] text-lg"
                style={{ fontWeight: 500 }}
              >
                Search Flights
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Promotional Message */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--isla-sand)] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1760548759043-44de2ad650c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxQaGlsaXBwaW5lcyUyMGlzbGFuZCUyMGJlYWNoJTIwdHJvcGljYWwlMjBwYXJhZGlzZXxlbnwxfHx8fDE3NzYwOTUyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Family at beach"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
              <div className="max-w-2xl px-8 md:px-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl text-white" style={{ fontWeight: 700 }}>
                      Fly Home to What Matters
                    </h2>
                  </div>
                  <p className="text-lg text-white/95 mb-6">
                    We don't just take you places. We bring you home. Whether it's reuniting with family, discovering ancestral roots, or celebrating life's milestones together, IslaJet connects you to the moments that matter most.
                  </p>
                  <div className="flex items-center gap-2 text-white/90">
                    <Home className="w-5 h-5" />
                    <span>Every journey is a homecoming</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600">Have questions? We're here to help</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl mb-6 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[var(--isla-turquoise)]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <a
                        href="mailto:support@islajet.com"
                        className="text-[var(--isla-turquoise-dark)] hover:text-[var(--isla-turquoise)] transition-colors"
                      >
                        support@islajet.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--isla-orange)]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[var(--isla-orange)]" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <a
                        href="tel:+6309695206076"
                        className="text-[var(--isla-turquoise-dark)] hover:text-[var(--isla-turquoise)] transition-colors"
                      >
                        +63 0969 520 6076
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[var(--isla-sand)] rounded-2xl">
                <h4 className="mb-3 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  Customer Service Hours
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleContact} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)] resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[var(--isla-turquoise)] text-white rounded-full hover:bg-[var(--isla-turquoise-dark)] transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}