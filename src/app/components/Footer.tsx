import { Mail, Phone, Plane } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[var(--isla-turquoise-dark)] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Plane className="w-5 h-5 text-white -rotate-45" />
              </div>
              <span className="text-xl tracking-tight" style={{ fontWeight: 600 }}>
                IslaJet
              </span>
            </div>
            <p className="text-sm text-white/80">
              Every island holds a story. IslaJet brings you closer to it.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/routes" className="text-white/80 hover:text-white transition-colors">
                  Routes
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/loyalty" className="text-white/80 hover:text-white transition-colors">
                  Loyalty Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/booking" className="text-white/80 hover:text-white transition-colors">
                  Book a Flight
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Check-in Online
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Travel Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@islajet.com" className="hover:text-white transition-colors">
                  support@islajet.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4" />
                <a href="tel:+6309695206076" className="hover:text-white transition-colors">
                  +63 0969 520 6076
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>&copy; 2026 IslaJet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
