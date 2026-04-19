import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import islaLogo from "../../imports/Isla (3).png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/routes", label: "Routes" },
    { path: "/services", label: "Services" },
    { path: "/loyalty", label: "Loyalty" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--isla-sand)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={islaLogo}
              alt="Isla Jet Airlines"
              className="h-18 md:h-24 w-auto group-hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors relative ${
                  isActive(link.path)
                    ? "text-[var(--isla-turquoise-dark)]"
                    : "text-gray-600 hover:text-[var(--isla-turquoise)]"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--isla-turquoise)]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Book Now Button - Desktop */}
          <Link
            to="/booking"
            className="hidden md:inline-flex px-6 py-2.5 bg-[var(--isla-orange)] text-white rounded-full hover:bg-[var(--isla-orange)]/90 transition-colors"
          >
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-[var(--isla-turquoise)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--isla-sand)] bg-white"
          >
            <nav className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? "bg-[var(--isla-sand)] text-[var(--isla-turquoise-dark)]"
                      : "text-gray-600 hover:bg-[var(--isla-sand)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 bg-[var(--isla-orange)] text-white rounded-lg text-center hover:bg-[var(--isla-orange)]/90 transition-colors"
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}