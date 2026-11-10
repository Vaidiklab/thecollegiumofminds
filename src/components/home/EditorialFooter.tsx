import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { ModernCtaButton } from "../ui/ModernCtaButton";

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

  const repoLinks = [
    { label: "Philosophy", to: "/#about" },
    { label: "Disciplines", to: "/#disciplines" },
    { label: "Principles", to: "/#principles" },
    { label: "Inquiries", to: "/#questions" },
    { label: "Library", to: "/library" },
    { label: "Discussions", to: "/#discussions" },
    { label: "Events", to: "/events" },
  ];

  const dialogueLinks = [
    { label: "Discord Community", href: "https://discord.gg/bEMYvJ7eU3", external: true },
    { label: "GitHub Repository", href: "https://github.com/CoM-137", external: true },
    { label: "LinkedIn Portal", href: "https://www.linkedin.com/company/the-collegium-of-minds/", external: true },
    { label: "Email the Guild", href: "mailto:collegiumofminds@gmail.com", external: true },
    { label: "Council Dossiers", to: "/#team" },
    { label: "Code of Conduct", to: "/#join" },
  ];

  const dispatchLinks = [
    { label: "Monthly Gazette", to: "/#library" },
    { label: "Digital Salon Bulletin", to: "/#discussions" },
    { label: "Question of the Week", to: "/#questions" },
    { label: "Substack Dispatch", to: "/#library" },
    { label: "Fellowship Inquiries", to: "/#join" },
    { label: "Supporters & Patrons", to: "/supporters" },
  ];

  return (
    <footer
      className="relative z-10 bg-[#030303] text-[#F2EEE8] border-t border-white/8 overflow-hidden"
      aria-label="Footer"
    >
      {/* Ponder This Contemplative Editorial Banner (CoM Signature Strip) */}
      <div className="border-b border-white/5 py-4 px-6 sm:px-10 lg:px-16 bg-[#060606]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
            <span className="font-mono text-[10px] tracking-[2.5px] uppercase text-[#A3A3A3] whitespace-nowrap">
              Ponder This
            </span>
          </div>
          <p className="font-serif italic text-[13px] sm:text-[14px] text-[#A5A19F] truncate sm:text-right">
            "{prompt}"
          </p>
        </div>
      </div>

      {/* Main 4-Column Directory (Supaste structural layout: Column 1 flex-2, Columns 2-4 flex-1) */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Identity, Dual Tagline, Mission, CTA & Leadership Credit (flex: 2 / 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            {/* Logo Row: 30x30 squircle + brand name + badge */}
            <div className="flex items-center gap-3">
              <div className="w-[30px] h-[30px] rounded-[8px] overflow-hidden border border-white/15 bg-[#121212] flex-shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="CoM Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-sans text-[15px] font-semibold tracking-[-0.02em] text-[#F2EEE8]">
                Collegium of Minds
              </span>
              <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-[#716E6B] px-2 py-0.5 rounded border border-white/8 bg-white/[0.02]">
                Guild
              </span>
            </div>

            {/* Supaste-inspired Dual Typography Tagline (Bold Display + Italic Serif) */}
            <div className="mt-1">
              <p className="font-sans font-bold text-[28px] sm:text-[32px] tracking-[-0.04em] text-[#F2EEE8] leading-[1.05]">
                Think deeply.
              </p>
              <p className="font-serif italic text-[28px] sm:text-[32px] text-[#E5E0D8] leading-[1.05] mt-0.5">
                Venture beyond.
              </p>
            </div>

            {/* Mission prose */}
            <p className="font-sans text-[13px] sm:text-[14px] text-[#A5A19F] opacity-75 max-w-sm leading-[1.55] tracking-[-0.01em]">
              An independent intellectual guild for curious thinkers, scholars, and lifelong learners. Where foundational questions are celebrated and ideas explored beyond convention.
            </p>

            {/* Action CTA Button (Supaste 8px pill button with Text Flip & Liquid Fill) */}
            <ModernCtaButton
              to="/#join"
              text="Apply for Fellowship"
              subText="Join the Guild"
              icon={<ArrowUpRight size={13} />}
              variant="ivory"
              size="sm"
              className="mt-2 self-start font-sans font-semibold tracking-[-0.02em]"
            />

            {/* Copyright & Founder Row (Supaste Solt Wagner attribution adaptation) */}
            <div className="mt-4 pt-4 border-t border-white/8 w-full flex flex-col gap-2">
              <p className="text-[12px] text-[#716E6B] tracking-tight">
                © 2025–2026 The Collegium of Minds. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-[12px] text-[#A3A3A3]">
                <span>Conceived &amp; Founded by</span>
                <a
                  href="https://linkedin.com/in/sarveshkore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#F2EEE8] hover:text-white font-medium transition-colors group"
                >
                  <div className="w-[20px] h-[20px] rounded-full overflow-hidden border border-white/20 flex-shrink-0 bg-[#171717]">
                    <img
                      src="/team/sarvesh.png"
                      alt="Sarvesh Kore"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="underline decoration-white/30 group-hover:decoration-white">Sarvesh Kore</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Repository / Menu (flex: 1 / 2-3 cols) */}
          <div className="lg:col-span-2 lg:col-start-7 flex flex-col gap-3">
            <h6 className="font-sans text-[13px] font-semibold tracking-[-0.01em] text-white/40 uppercase mb-2">
              Repository
            </h6>
            <ul className="flex flex-col gap-2.5">
              {repoLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[-0.02em] text-[#A3A3A3] hover:text-[#F2EEE8] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Dialogue / Community (flex: 1 / 2-3 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h6 className="font-sans text-[13px] font-semibold tracking-[-0.01em] text-white/40 uppercase mb-2">
              Dialogue
            </h6>
            <ul className="flex flex-col gap-2.5">
              {dialogueLinks.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[-0.02em] text-[#A3A3A3] hover:text-[#F2EEE8] transition-colors duration-150 inline-flex items-center gap-1"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={12} className="opacity-40" />
                    </a>
                  ) : (
                    <Link
                      to={item.to!}
                      className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[-0.02em] text-[#A3A3A3] hover:text-[#F2EEE8] transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Dispatches & Records (flex: 1 / 2-3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h6 className="font-sans text-[13px] font-semibold tracking-[-0.01em] text-white/40 uppercase mb-2">
              Dispatches
            </h6>
            <ul className="flex flex-col gap-2.5">
              {dispatchLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="font-sans text-[13px] sm:text-[14px] font-medium tracking-[-0.02em] text-[#A3A3A3] hover:text-[#F2EEE8] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Supaste Signature Bottom Watermark: Monumental Tone-on-Tone SVG Brand Typography */}
      <div
        className="w-full h-[90px] sm:h-[150px] md:h-[200px] lg:h-[240px] flex items-center justify-center overflow-hidden border-t border-white/[0.04] select-none pointer-events-none px-4"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 200"
          className="w-full h-full max-w-[1200px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#101010"
            fontFamily="'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
            fontWeight="800"
            letterSpacing="-0.05em"
            fontSize="148"
            className="transition-colors duration-300"
          >
            COLLEGIUM OF MINDS
          </text>
        </svg>
      </div>
    </footer>
  );
}
