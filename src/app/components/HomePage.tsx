import { Link } from "react-router";
import { motion } from "motion/react";
import { Plane, Heart, MapPin } from "lucide-react";

export function HomePage() {
  return (
    <div>
      {/* Hero Section - Full Bleed */}
      <section className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521650559166-6b588715bc62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMGlzbGFuZCUyMGJlYWNoJTIwdHJvcGljYWwlMjBwYXJhZGlzZXxlbnwxfHx8fDE3NzYwOTUyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Philippine Islands"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6" style={{ fontWeight: 700, lineHeight: 1.1 }}>
                Welcome to IslaJet
              </h1>
              <p className="text-xl sm:text-2xl text-white/95 mb-8" style={{ fontWeight: 400 }}>
                Every island holds a story. IslaJet brings you closer to it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[var(--isla-orange)] text-white rounded-full hover:bg-[var(--isla-orange)]/90 transition-all hover:scale-105"
                  style={{ fontWeight: 500 }}
                >
                  Book Your Flight
                </Link>
                <Link
                  to="/routes"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full border-2 border-white/50 hover:bg-white/30 transition-all"
                  style={{ fontWeight: 500 }}
                >
                  Explore Destinations
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
              Your Gateway to Paradise
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              IslaJet is the Philippines' premier domestic airline, connecting vibrant island communities to major hubs with unmatched Filipino hospitality.
              From the surfing capital of Siargao to the pristine lagoons of Coron, we bring you home to what matters most.
            </p>
          </motion.div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[var(--isla-turquoise)]" />
              </div>
              <h3 className="mb-2 text-[var(--isla-turquoise-dark)]">Seamless Island Connections</h3>
              <p className="text-gray-600">Connecting you to the Philippines' most beautiful destinations with convenient schedules.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center">
                <Plane className="w-8 h-8 text-[var(--isla-turquoise)]" />
              </div>
              <h3 className="mb-2 text-[var(--isla-turquoise-dark)]">Comfortable Seating</h3>
              <p className="text-gray-600">Modern ATR72 and Q400 aircraft with spacious seating and smooth island-hopping flights.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-[var(--isla-turquoise)]" />
              </div>
              <h3 className="mb-2 text-[var(--isla-turquoise-dark)]">Filipino Hospitality</h3>
              <p className="text-gray-600">Experience warm service that feels like coming home, every time you fly with us.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Destinations Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
              Discover the Islands
            </h2>
            <p className="text-lg text-gray-600">Where will your next adventure take you?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Siargao",
                desc: "Surfing Capital",
                image: "https://images.unsplash.com/photo-1721301084193-3ceb0ec20a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxTaWFyZ2FvJTIwc3VyZmluZyUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NjA5NTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                name: "Coron",
                desc: "Pristine Lagoons",
                image: "https://images.unsplash.com/photo-1758782551890-a2729fb8beee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxDb3JvbiUyMFBhbGF3YW4lMjBsYWdvb24lMjB0dXJxdW9pc2UlMjB3YXRlcnxlbnwxfHx8fDE3NzYwOTUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                name: "El Nido",
                desc: "Limestone Paradise",
                image: "https://images.unsplash.com/photo-1753482774953-e03e1f9f1397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxFbCUyME5pZG8lMjBQaGlsaXBwaW5lcyUyMGxpbWVzdG9uZSUyMGNsaWZmc3xlbnwxfHx8fDE3NzYwOTUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl mb-1" style={{ fontWeight: 600 }}>{dest.name}</h3>
                  <p className="text-white/90">{dest.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/routes"
              className="inline-flex items-center justify-center px-8 py-3 bg-[var(--isla-turquoise)] text-white rounded-full hover:bg-[var(--isla-turquoise-dark)] transition-colors"
            >
              View All Routes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
