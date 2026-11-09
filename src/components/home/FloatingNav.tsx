import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    setOpen(false);
    if (to.startsWith("/#")) {
      if (location.pathname === "/") {
        e.preventDefault();
        const id = to.replace("/#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", to);
        }
      }
    }
  };

  const navLinks = [
    { label: "About", to: "/#about" },
    { label: "Questions", to: "/#questions" },
    { label: "Library", to: "/library" },
    { label: "Discussions", to: "/#discussions" },
    { label: "Events", to: "/events" },
  ];

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Primary Navigation"
        className={`pointer-events-auto w-full max-w-4xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#070707]/95 shadow-[0_12px_32px_rgba(0,0,0,0.85)] border border-white/10"
            : "bg-[#0A0A0A]/90 shadow-[0_4px_24px_rgba(0,0,0,0.5)] border border-white/8"
        } backdrop-blur-md px-4 sm:px-5 py-2 flex items-center justify-between gap-4`}
      >
        {/* Left: Logo & Wordmark */}
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2.5 group flex-shrink-0"
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-white/15 flex-shrink-0">
            <img
              src="/logo.jpeg"
              alt="CoM Emblem"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-sans text-xs sm:text-sm font-semibold tracking-tight text-[#F2EEE8] group-hover:text-white transition-colors whitespace-nowrap">
            Collegium of Minds
          </span>
        </Link>

        {/* Right Desktop Nav Links + Join CoM CTA */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={(e) => handleLinkClick(e, item.to)}
              className="text-xs font-sans font-medium text-[#A3A3A3] hover:text-[#F2EEE8] transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}

          {/* Join CoM CTA Button (Clean high-contrast minimal pill) */}
          <Link
            to="/#join"
            onClick={(e) => handleLinkClick(e, "/#join")}
            className="text-xs font-sans font-semibold tracking-tight px-3.5 py-1.5 rounded-full bg-[#F2EEE8] text-[#030303] hover:bg-white transition-all duration-150 shadow-sm"
          >
            Join CoM
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1 rounded-full text-[#A3A3A3] hover:text-[#F2EEE8] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-auto absolute top-14 left-4 right-4 max-w-sm mx-auto bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2.5 z-50"
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={(e) => handleLinkClick(e, item.to)}
                className="text-xs font-sans font-medium text-[#A3A3A3] hover:text-[#F2EEE8] py-1.5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/8">
              <Link
                to="/#join"
                onClick={(e) => handleLinkClick(e, "/#join")}
                className="block text-center text-xs font-sans font-semibold py-2 rounded-full bg-[#F2EEE8] text-[#030303] hover:bg-white transition-colors"
              >
                Join CoM
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
