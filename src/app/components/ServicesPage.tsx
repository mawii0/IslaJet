import { motion } from "motion/react";
import { Check, Luggage, Armchair, RefreshCw, Trophy, Coffee, Wifi, ShoppingBag, Sparkles } from "lucide-react";
import { Link } from "react-router";

const fareTypes = [
  {
    name: "Isla Lite",
    price: "From ₱1,600",
    description: "Perfect for light travelers",
    color: "border-gray-300",
    bgColor: "bg-white",
    features: [
      { text: "7kg carry-on baggage", included: true },
      { text: "Random seat assignment", included: true },
      { text: "Web check-in available", included: true },
      { text: "Checked baggage", included: false },
      { text: "Seat selection", included: false },
      { text: "Earn WavePoints", included: false },
    ],
  },
  {
    name: "Isla Value",
    price: "From ₱2,400",
    description: "Best value for most travelers",
    color: "border-[var(--isla-turquoise)]",
    bgColor: "bg-gradient-to-br from-[var(--isla-turquoise)]/5 to-white",
    popular: true,
    features: [
      { text: "20kg checked baggage", included: true },
      { text: "Standard seat selection", included: true },
      { text: "Earn WavePoints", included: true },
      { text: "Priority web check-in", included: true },
      { text: "Flight changes (₱500 fee)", included: true },
      { text: "Free flight changes", included: false },
    ],
  },
  {
    name: "Isla Flex",
    price: "From ₱3,200",
    description: "Premium flexibility & comfort",
    color: "border-[var(--isla-orange)]",
    bgColor: "bg-gradient-to-br from-[var(--isla-orange)]/5 to-white",
    features: [
      { text: "20kg checked baggage", included: true },
      { text: "Premium seat selection", included: true },
      { text: "Earn 2x WavePoints", included: true },
      { text: "Free flight changes", included: true },
      { text: "Priority boarding", included: true },
      { text: "Complimentary snacks", included: true },
    ],
  },
];

const inflightServices = [
  {
    name: "Isla Café",
    description: "Onboard flavors of the Philippines",
    details: "Enjoy local favorites and refreshments crafted with Filipino ingredients. Coffee, snacks, and light meals available for purchase.",
    icon: Coffee,
    image: "https://images.unsplash.com/photo-1680211533939-cba54ad6615b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmRvdyUyMHZpZXclMjBjbG91ZHMlMjBzdW5zZXR8ZW58MXx8fHwxNzc2MDY3ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Isla Comfort",
    description: "Premium seating experience",
    details: "Extra legroom seats available at select rows. Book premium seats with Isla Value or Isla Flex for maximum comfort.",
    icon: Armchair,
    image: "https://images.unsplash.com/photo-1680211533911-415008dd3826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxhaXJwbGFuZSUyMHdpbmRvdyUyMHZpZXclMjBjbG91ZHMlMjBzdW5zZXR8ZW58MXx8fHwxNzc2MDY3ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Isla Wi-Fi",
    description: "Stay connected in the sky",
    details: "High-speed internet available on select aircraft. Stream, browse, and share your journey in real-time.",
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1664979603189-769f2394c7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhaXJwbGFuZSUyMHdpbmRvdyUyMHZpZXclMjBjbG91ZHMlMjBzdW5zZXR8ZW58MXx8fHwxNzc2MDY3ODY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Isla Shop",
    description: "Duty-free treasures",
    details: "Shop exclusive Philippine products, local delicacies, and travel essentials onboard at duty-free prices.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1760548759043-44de2ad650c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxQaGlsaXBwaW5lcyUyMGlzbGFuZCUyMGJlYWNoJTIwdHJvcGljYWwlMjBwYXJhZGlzZXxlbnwxfHx8fDE3NzYwOTUyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ServicesPage() {
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
              Our Services
            </h1>
            <p className="text-xl text-white/90">
              Choose the fare that fits your journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fare Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--isla-sand)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
              Fare Options
            </h2>
            <p className="text-lg text-gray-600">Select the perfect fare for your travel needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fareTypes.map((fare, i) => (
              <motion.div
                key={fare.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-2xl border-2 ${fare.color} ${fare.bgColor} p-8 flex flex-col`}
              >
                {fare.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[var(--isla-turquoise)] text-white rounded-full text-sm flex items-center gap-1" style={{ fontWeight: 500 }}>
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl mb-2 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                    {fare.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{fare.description}</p>
                  <div className="text-3xl text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 700 }}>
                    {fare.price}
                  </div>
                </div>

                <div className="flex-1 space-y-3 mb-6">
                  {fare.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 ${feature.included ? "text-gray-700" : "text-gray-400"}`}
                    >
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          feature.included ? "text-[var(--isla-turquoise)]" : "text-gray-300"
                        }`}
                      />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className={`block text-center px-6 py-3 rounded-full transition-all ${
                    fare.popular
                      ? "bg-[var(--isla-turquoise)] text-white hover:bg-[var(--isla-turquoise-dark)]"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  style={{ fontWeight: 500 }}
                >
                  Select {fare.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inflight Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
              Inflight Services
            </h2>
            <p className="text-lg text-gray-600">Elevate your journey with our premium offerings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {inflightServices.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[var(--isla-turquoise)] transition-all hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[var(--isla-turquoise)]/10 to-[var(--isla-sand)]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-10 h-10 text-[var(--isla-turquoise)]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                    {service.name}
                  </h3>
                  <p className="text-[var(--isla-orange)] mb-3" style={{ fontWeight: 500 }}>
                    {service.description}
                  </p>
                  <p className="text-gray-600">{service.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Baggage Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--isla-sand)]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
              Baggage Allowance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center">
                  <Luggage className="w-7 h-7 text-[var(--isla-turquoise)]" />
                </div>
                <h3 className="text-xl text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  Carry-On Baggage
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[var(--isla-turquoise)] flex-shrink-0 mt-0.5" />
                  <span>7kg maximum weight (all fares)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[var(--isla-turquoise)] flex-shrink-0 mt-0.5" />
                  <span>56cm x 36cm x 23cm dimensions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[var(--isla-turquoise)] flex-shrink-0 mt-0.5" />
                  <span>Must fit in overhead bin or under seat</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[var(--isla-orange)]/10 flex items-center justify-center">
                  <Luggage className="w-7 h-7 text-[var(--isla-orange)]" />
                </div>
                <h3 className="text-xl text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  Checked Baggage
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[var(--isla-orange)] flex-shrink-0 mt-0.5" />
                  <span>20kg included (Isla Value & Flex)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[var(--isla-orange)] flex-shrink-0 mt-0.5" />
                  <span>Additional baggage available for purchase</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[var(--isla-orange)] flex-shrink-0 mt-0.5" />
                  <span>Special items: sports equipment, musical instruments</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--isla-turquoise)] to-[var(--isla-turquoise-dark)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6" style={{ fontWeight: 700 }}>
              Ready to Fly?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your next island adventure with IslaJet today
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center px-10 py-4 bg-[var(--isla-orange)] text-white rounded-full hover:bg-[var(--isla-orange)]/90 transition-all hover:scale-105 text-lg"
              style={{ fontWeight: 500 }}
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
