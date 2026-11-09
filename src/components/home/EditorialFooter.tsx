import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const randomPrompts = [
  "If you could definitively answer one unresolved question, what would it be?",
  "Is there an insurmountable ceiling to human intellectual comprehension?",
  "What will thinkers wonder about ten centuries from today?",
  "Can subjective aesthetic beauty ever be fully translated into mathematics?",
  "Is there a thought that no conscious mind has ever formulated?",
  "Does absolute silence possess an acoustic topology of its own?",
  "What lies beyond the cosmological event horizon of our expanding universe?",
];

export function EditorialFooter() {
  const [prompt, setPrompt] = useState(randomPrompts[0]);

  useEffect(() => {
    setPrompt(randomPrompts[Math.floor(Math.random() * randomPrompts.length)]);
  }, []);

  const navLinks = [
    { label: "About", to: "/#about" },
    { label: "Disciplines", to: "/#disciplines" },
    { label: "Principles", to: "/#principles" },
    { label: "Questions", to: "/#questions" },
    { label: "Library", to: "/library" },
    { label: "Discussions", to: "/#discussions" },
    { label: "Events", to: "/events" },
    { label: "Join CoM", to: "/#join" },
  ];

  const connectLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/the-collegium-of-minds/" },
    { label: "Discord", href: "https://discord.gg/bEMYvJ7eU3" },
    { label: "GitHub", href: "https://github.com/CoM-137" },
    { label: "Email the Guild", href: "mailto:collegiumofminds@gmail.com" },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050505] text-[#F2EEE8]" aria-label="Footer">
      {/* Ponder This Editorial Strip */}
      <div className="border-b border-white/5 py-6 px-6 sm:px-10 lg:px-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
          <span className="font-mono text-[10px] tracking-[3px] uppercase text-[#A3A3A3] whitespace-nowrap">
            Ponder This
          </span>
          <p className="font-serif italic text-sm sm:text-base text-[#A5A19F]">
            "{prompt}"
          </p>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                <img
                  src="/logo.jpeg"
                  alt="CoM"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-lg text-[#F2EEE8]">
                The Collegium of Minds
              </span>
            </div>

            <p className="font-mono text-[11px] tracking-[2px] uppercase text-[#716E6B]">
              Think. Explore. Discover.
            </p>

            <p className="font-sans font-light text-xs sm:text-sm text-[#A5A19F] max-w-sm leading-relaxed">
              An independent intellectual guild for curious thinkers, scholars, and lifelong learners. Where foundational questions are celebrated and ideas are explored beyond convention.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[2px] text-[#A3A3A3] mb-5">
              Repository
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="font-sans font-light text-xs sm:text-sm text-[#A5A19F] hover:text-[#F2EEE8] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[2px] text-[#A3A3A3] mb-5">
              Dialogue
            </h4>
            <ul className="space-y-2.5">
              {connectLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-light text-xs sm:text-sm text-[#A5A19F] hover:text-[#F2EEE8] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#716E6B]">
          <span>
            © 2025–2026 The Collegium of Minds. All rights reserved with Founder Sarvesh Kore.
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            Always questioning
          </span>
        </div>
      </div>
    </footer>
  );
}
