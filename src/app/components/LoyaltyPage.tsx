import { motion } from "motion/react";
import { Waves, Award, Gift, Star, Sparkles, Plane, Check, TrendingUp } from "lucide-react";
import { Link } from "react-router";

const tiers = [
  {
    name: "Silver",
    icon: Waves,
    color: "text-gray-500",
    bgColor: "bg-gradient-to-br from-gray-100 to-white",
    borderColor: "border-gray-300",
    requirement: "0 - 4,999 WavePoints",
    benefits: [
      "Earn 1 WavePoint per ₱50 spent",
      "Exclusive member promotions",
      "Priority email support",
      "Birthday bonus points",
    ],
  },
  {
    name: "Gold",
    icon: Award,
    color: "text-[var(--isla-orange)]",
    bgColor: "bg-gradient-to-br from-[var(--isla-orange)]/10 to-white",
    borderColor: "border-[var(--isla-orange)]",
    requirement: "5,000 - 14,999 WavePoints",
    popular: true,
    benefits: [
      "Earn 1.5 WavePoints per ₱50 spent",
      "Priority check-in",
      "Free seat selection on all flights",
      "10% discount on baggage fees",
      "Exclusive lounge access (select airports)",
      "Complimentary flight changes (1 per year)",
    ],
  },
  {
    name: "Platinum",
    icon: Sparkles,
    color: "text-[var(--isla-turquoise)]",
    bgColor: "bg-gradient-to-br from-[var(--isla-turquoise)]/10 to-white",
    borderColor: "border-[var(--isla-turquoise)]",
    requirement: "15,000+ WavePoints",
    benefits: [
      "Earn 2x WavePoints per ₱50 spent",
      "Priority boarding on all flights",
      "Free premium seat selection",
      "Free checked baggage (up to 30kg)",
      "Dedicated 24/7 Platinum support line",
      "Unlimited complimentary flight changes",
      "Access to all partner lounges",
      "Companion upgrade vouchers",
    ],
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Earn Points",
    description: "Collect WavePoints every time you fly. 1 Point = ₱50 spent on flights.",
    icon: Plane,
  },
  {
    step: "2",
    title: "Climb Tiers",
    description: "Reach higher tiers for exclusive benefits and faster point accumulation.",
    icon: TrendingUp,
  },
  {
    step: "3",
    title: "Redeem Rewards",
    description: "Use your points for free flights, upgrades, and special island experiences.",
    icon: Gift,
  },
];

export function LoyaltyPage() {
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <Waves className="w-12 h-12" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl" style={{ fontWeight: 700 }}>
                WavePoints
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Earn rewards with every journey. The more you fly, the more you save.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl mb-6 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
              1 WavePoint = ₱50 Value
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Join IslaJet's WavePoints loyalty program and turn your island adventures into rewards.
              Every flight brings you closer to free travel, exclusive perks, and VIP experiences across the Philippines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--isla-sand)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                How It Works
              </h2>
              <p className="text-lg text-gray-600">Start earning rewards in three simple steps</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--isla-turquoise)] text-white flex items-center justify-center text-lg" style={{ fontWeight: 600 }}>
                  {item.step}
                </div>
                <div className="w-16 h-16 mx-auto mb-4 mt-2 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[var(--isla-turquoise)]" />
                </div>
                <h3 className="text-xl mb-3 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                Membership Tiers
              </h2>
              <p className="text-lg text-gray-600">Unlock exclusive benefits as you reach new heights</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-2xl border-2 ${tier.borderColor} ${tier.bgColor} p-8 ${
                  tier.popular ? "ring-4 ring-[var(--isla-orange)]/20" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[var(--isla-orange)] text-white rounded-full text-sm flex items-center gap-1" style={{ fontWeight: 500 }}>
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white flex items-center justify-center ${tier.popular ? "ring-2 ring-[var(--isla-orange)]/30" : ""}`}>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <h3 className={`text-2xl mb-2 ${tier.color}`} style={{ fontWeight: 700 }}>
                    {tier.name}
                  </h3>
                  <p className="text-sm text-gray-600">{tier.requirement}</p>
                </div>

                <div className="space-y-3">
                  {tier.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-700">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.color}`} />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redemption Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[var(--isla-sand)] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                Redeem Your Points
              </h2>
              <p className="text-lg text-gray-600">Turn WavePoints into unforgettable experiences</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Free Flights",
                points: "Starting at 2,000 points",
                description: "Redeem points for complimentary domestic flights to any IslaJet destination.",
                icon: Plane,
              },
              {
                title: "Cabin Upgrades",
                points: "From 500 points",
                description: "Upgrade to premium seating with extra legroom and priority boarding.",
                icon: Award,
              },
              {
                title: "Baggage Allowance",
                points: "300 points per 10kg",
                description: "Add extra checked baggage to your booking using WavePoints.",
                icon: Gift,
              },
              {
                title: "Island Experiences",
                points: "1,000+ points",
                description: "Book exclusive tours, diving trips, and resort packages with partner hotels.",
                icon: Sparkles,
              },
            ].map((option, i) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[var(--isla-turquoise)] transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--isla-turquoise)]/10 flex items-center justify-center flex-shrink-0">
                    <option.icon className="w-6 h-6 text-[var(--isla-turquoise)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-1 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                      {option.title}
                    </h3>
                    <p className="text-sm text-[var(--isla-orange)] mb-2" style={{ fontWeight: 500 }}>
                      {option.points}
                    </p>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join WavePoints today and make every journey count
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-10 py-4 bg-[var(--isla-orange)] text-white rounded-full hover:bg-[var(--isla-orange)]/90 transition-all hover:scale-105 text-lg"
                style={{ fontWeight: 500 }}
              >
                Book Your First Flight
              </Link>
              <button className="inline-flex items-center justify-center px-10 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full border-2 border-white/50 hover:bg-white/30 transition-all text-lg" style={{ fontWeight: 500 }}>
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                Smart Travel Tips
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Pack Light",
                tip: "Stay within 7kg for carry-on to avoid extra fees. Roll clothes to maximize space.",
              },
              {
                title: "Arrive Early",
                tip: "Check in 2-3 hours before departure for domestic flights to ensure smooth boarding.",
              },
              {
                title: "Check-in Online",
                tip: "Save time at the airport by checking in online 24 hours before your flight.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[var(--isla-sand)] rounded-2xl p-6"
              >
                <h3 className="mb-3 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
