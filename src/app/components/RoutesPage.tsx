import { motion } from "motion/react";
import { Plane, Clock, MapPin, Waves, Mountain, Camera, Palmtree } from "lucide-react";
import { Link } from "react-router";

const destinations = [
  {
    name: "Siargao",
    tagline: "Surfing Capital of the Philippines",
    flightTime: "2h 15m",
    aircraft: "ATR72",
    fareRange: "₱2,500 - ₱4,200",
    image: "https://images.unsplash.com/photo-1721301084193-3ceb0ec20a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxTaWFyZ2FvJTIwc3VyZmluZyUyMFBoaWxpcHBpbmVzfGVufDF8fHx8MTc3NjA5NTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    mustVisit: ["Cloud 9 Surf Break", "Sugba Lagoon", "Magpupungko Rock Pools"],
    icon: Waves,
  },
  {
    name: "Coron",
    tagline: "Crystal Clear Waters & Shipwrecks",
    flightTime: "1h 45m",
    aircraft: "Q400",
    fareRange: "₱2,200 - ₱3,800",
    image: "https://images.unsplash.com/photo-1758782551890-a2729fb8beee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxDb3JvbiUyMFBhbGF3YW4lMjBsYWdvb24lMjB0dXJxdW9pc2UlMjB3YXRlcnxlbnwxfHx8fDE3NzYwOTUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    mustVisit: ["Kayangan Lake", "Twin Lagoon", "Barracuda Lake"],
    icon: Waves,
  },
  {
    name: "El Nido",
    tagline: "Limestone Cliffs & Hidden Beaches",
    flightTime: "1h 30m",
    aircraft: "ATR72",
    fareRange: "₱2,400 - ₱4,000",
    image: "https://images.unsplash.com/photo-1753482774953-e03e1f9f1397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxFbCUyME5pZG8lMjBQaGlsaXBwaW5lcyUyMGxpbWVzdG9uZSUyMGNsaWZmc3xlbnwxfHx8fDE3NzYwOTUyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    mustVisit: ["Big Lagoon", "Small Lagoon", "Secret Beach"],
    icon: Mountain,
  },
  {
    name: "Bohol",
    tagline: "Chocolate Hills & Tarsier Sanctuary",
    flightTime: "1h 20m",
    aircraft: "Q400",
    fareRange: "₱1,800 - ₱3,200",
    image: "https://images.unsplash.com/photo-1594485770508-f629fb05e932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCb2hvbCUyMENob2NvbGF0ZSUyMEhpbGxzJTIwUGhpcHBpbmVzfGVufDF8fHx8MTc3NjA5NTI0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    mustVisit: ["Chocolate Hills", "Tarsier Sanctuary", "Loboc River Cruise"],
    icon: Mountain,
  },
  {
    name: "Boracay",
    tagline: "White Beach Paradise",
    flightTime: "1h 10m",
    aircraft: "ATR72",
    fareRange: "₱2,000 - ₱3,600",
    image: "https://images.unsplash.com/photo-1760815153677-d7984323db5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxQaGlsaXBwaW5lcyUyMGlzbGFuZCUyMGJlYWNoJTIwdHJvcGljYWwlMjBwYXJhZGlzZXxlbnwxfHx8fDE3NzYwOTUyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    mustVisit: ["White Beach", "Puka Shell Beach", "Ariel's Point"],
    icon: Palmtree,
  },
  {
    name: "Cebu",
    tagline: "The Queen City of the South",
    flightTime: "1h 15m",
    aircraft: "Q400",
    fareRange: "₱1,600 - ₱2,900",
    image: "https://images.unsplash.com/photo-1553195027-5168a50283c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxQaGlsaXBwaW5lcyUyMGlzbGFuZCUyMGJlYWNoJTIwdHJvcGljYWwlMjBwYXJhZGlzZXxlbnwxfHx8fDE3NzYwOTUyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    mustVisit: ["Oslob Whale Sharks", "Kawasan Falls", "Magellan's Cross"],
    icon: Camera,
  },
];

export function RoutesPage() {
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
              Our Routes
            </h1>
            <p className="text-xl text-white/90">
              Connecting you to the Philippines' most breathtaking destinations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Route Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[var(--isla-sand)]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm text-gray-600">Destination</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600">Flight Time</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600">Aircraft</th>
                    <th className="px-6 py-4 text-left text-sm text-gray-600">Fare Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {destinations.map((dest, i) => (
                    <motion.tr
                      key={dest.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="hover:bg-[var(--isla-sand)]/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center flex-shrink-0">
                            <dest.icon className="w-5 h-5 text-[var(--isla-turquoise)]" />
                          </div>
                          <div>
                            <div className="text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 500 }}>{dest.name}</div>
                            <div className="text-sm text-gray-500">{dest.tagline}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Clock className="w-4 h-4 text-gray-400" />
                          {dest.flightTime}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Plane className="w-4 h-4 text-gray-400" />
                          {dest.aircraft}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700" style={{ fontWeight: 500 }}>
                        {dest.fareRange}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destination Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
              Destination Highlights
            </h2>
            <p className="text-lg text-gray-600">Discover what makes each island special</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[var(--isla-turquoise)] transition-all hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-sm text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 500 }}>
                    {dest.flightTime}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                    {dest.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{dest.tagline}</p>

                  <div className="mb-4">
                    <h4 className="text-sm text-gray-500 mb-2">Must-Visit</h4>
                    <ul className="space-y-1">
                      {dest.mustVisit.map((place) => (
                        <li key={place} className="flex items-start gap-2 text-sm text-gray-700">
                          <MapPin className="w-4 h-4 text-[var(--isla-turquoise)] flex-shrink-0 mt-0.5" />
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm text-gray-500">From {dest.fareRange.split(' - ')[0]}</span>
                    <Link
                      to="/booking"
                      className="text-sm text-[var(--isla-turquoise)] hover:text-[var(--isla-turquoise-dark)] transition-colors"
                      style={{ fontWeight: 500 }}
                    >
                      Book Now →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--isla-sand)] to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
              Why Fly IslaJet?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-white rounded-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[var(--isla-turquoise)]" />
              </div>
              <h3 className="mb-3 text-[var(--isla-turquoise-dark)]">Seamless Island Connections</h3>
              <p className="text-gray-600">Direct flights to remote paradise destinations with convenient daily schedules.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-white rounded-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center">
                <Plane className="w-8 h-8 text-[var(--isla-turquoise)]" />
              </div>
              <h3 className="mb-3 text-[var(--isla-turquoise-dark)]">Comfortable Seating</h3>
              <p className="text-gray-600">Modern ATR72 and Q400 aircraft designed for smooth island-hopping journeys.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 bg-white rounded-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-[var(--isla-turquoise)]" />
              </div>
              <h3 className="mb-3 text-[var(--isla-turquoise-dark)]">Filipino Hospitality</h3>
              <p className="text-gray-600">Experience the warmth of home with every flight, delivered by our caring crew.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
