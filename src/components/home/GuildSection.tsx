import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ExternalLink, Globe, Github, Linkedin, Mail, BookOpen } from "lucide-react";
import TeamAvatar from "../TeamAvatar";

export interface TeamMember {
  role: string;
  name: string;
  emoji?: string;
  image?: string;
  roleDesc: string;
  bio: string;
  quote?: string;
  links?: Array<{ type: string; url: string }>;
}

export const operationsMembers: TeamMember[] = [
  {
    role: "Publications Coordinator",
    name: "Ankur Chakraborty",
    emoji: "📰",
    roleDesc: "Reviews articles, proofreads scientific submissions, and preserves the editorial caliber of Collegium publications.",
    bio: "Physics enthusiast and Quantum Mechanics specialist exploring the intersections of theoretical modeling and scientific prose.",
    quote: "Life is unfair, so strive to be fair.",
  },
  {
    role: "Documentation Coordinator",
    name: "Saumya NL",
    emoji: "📚",
    roleDesc: "Curates canonical guidelines, maintains institutional archives, and organizes intellectual records across societies.",
    bio: "Engineering graduate from BITS Dubai with deep interests in fundamental physics, optimization theory, and technological innovation.",
    quote: "The imagination of nature is far, far greater than the imagination of man. — Richard Feynman",
  },
  {
    role: "Website & Systems Coordinator",
    name: "Joel Mendonca",
    emoji: "🌐",
    roleDesc: "Develops and evolves digital interfaces, interactive tools, and experimental software systems for the Collegium.",
    bio: "Programmer specializing in complex systems, procedural mechanics, and interactive tools. Passionate about translating speculative ideas into tactile code.",
    quote: "Yesterday is history, tomorrow is a mystery. Today is a gift.",
  },
  {
    role: "Outreach Coordinator",
    name: "M. Bavyadharshini",
    emoji: "🌱",
    roleDesc: "Fosters academic partnerships, welcomes incoming fellows, and expands interdisciplinary initiatives.",
    bio: "Physics scholar focused on space science, scientific literacy, and educational outreach. Dedicated to awakening cosmic curiosity.",
    quote: "Somewhere, something incredible is waiting to be known. — Carl Sagan",
  },
];

export const developmentMembers: TeamMember[] = [
  {
    role: "Research Lead",
    name: "Shatakshita Shekhar",
    emoji: "🔬",
    roleDesc: "Directs research tools, monitors scientific publications, and guides empirical methodologies for fellows.",
    bio: "Aerospace engineering researcher exploring space science and founder of The Redshift Asterism publication.",
    quote: "Research is what I'm doing when I don't know what I'm doing. — Wernher von Braun",
    links: [
      { type: "linkedin", url: "https://www.linkedin.com/in/shatakshitashekhar/" },
      { type: "github", url: "https://github.com/shatakshita" },
      { type: "substack", url: "https://shyrixv.substack.com/" },
    ],
  },
  {
    role: "Initiatives Lead",
    name: "Shalmali",
    emoji: "💡",
    roleDesc: "Curates multidisciplinary inquiries, design competitions, and symposium formats that push intellectual boundaries.",
    bio: "Curious thinker investigating the boundaries of knowledge, creative systems, and conceptual problem-solving.",
    quote: "Knowledge knows no age. — Socrates",
  },
  {
    role: "Events Lead",
    name: "Shahaan",
    emoji: "🎤",
    roleDesc: "Orchestrates structured debate assemblies, high-signal workshops, and guest lectures across the societies.",
    bio: "Debater and lifelong student of history, politics, and scientific inquiry dedicated to elevating collaborative discourse.",
    quote: "An investment in knowledge always pays the best return. — Benjamin Franklin",
  },
];

export const founderData: TeamMember = {
  role: "Founder & Executive Director",
  name: "Sarvesh Kore",
  emoji: "🧠",
  image: "/team/sarvesh.png",
  roleDesc:
    "Founded the Collegium of Minds to build a sanctuary where curiosity survives without algorithmic noise, where difficult questions are welcomed, and where inquiry is practiced as a discipline.",
  bio:
    "A thinker and builder passionate about theoretical physics, cosmology, and frontend craftsmanship. Fascinated by quantum mechanics, the arrow of time, and the topology of spacetime, Sarvesh established CoM to assemble curious minds who refuse to accept conventional boundaries.",
  quote:
    "\"Civilizations are remembered for the questions they dared to pursue. We hope to ask a few worthy ones.\"",
  links: [
    { type: "website", url: "https://sarvesh-kore.vercel.app" },
    { type: "github", url: "https://github.com/ALPHA7105" },
    { type: "linkedin", url: "https://www.linkedin.com/in/sarvesh-kore-3284363a7/" },
    { type: "substack", url: "https://substack.com/@sarveshkore" },
  ],
};

export function GuildSection() {
  const [activeCouncil, setActiveCouncil] = useState<"operations" | "development">("operations");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [showFounderModal, setShowFounderModal] = useState(false);

  const currentMembers = activeCouncil === "operations" ? operationsMembers : developmentMembers;

  return (
    <section
      id="team"
      className="relative z-10 py-28 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/10"
      aria-label="The Guild — Members"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="font-mono text-xs tracking-[3px] uppercase text-[#A3A3A3]">
              06 / The Guild
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F2EEE8] tracking-tight">
            The minds behind the Collegium.
          </h2>
        </div>
        <p className="text-[#A5A19F] font-sans font-light text-sm sm:text-base max-w-md leading-relaxed">
          The coordinators, researchers, and stewards stewarding our decentralized laboratory of ideas.
        </p>
      </div>

      {/* Featured Founder Card */}
      <div
        onClick={() => setShowFounderModal(true)}
        className="mb-16 sm:mb-20 p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#0C0C0C] border border-white/12 hover:border-white/25 transition-all duration-300 cursor-pointer group relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-4">
              <TeamAvatar
                image={founderData.image}
                name={founderData.name}
                size={74}
                className="rounded-full ring-2 ring-white/10 group-hover:ring-white/30 transition-all"
              />
              <div>
                <span className="font-mono text-xs uppercase tracking-[3px] text-[#A3A3A3] block">
                  {founderData.role}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F2EEE8] group-hover:text-white transition-colors">
                  {founderData.name}
                </h3>
              </div>
            </div>

            <blockquote className="font-serif italic text-xl sm:text-2xl text-[#F2EEE8] leading-relaxed">
              {founderData.quote}
            </blockquote>

            <p className="font-sans font-light text-sm sm:text-base text-[#A5A19F] leading-relaxed max-w-2xl">
              {founderData.roleDesc}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#F2EEE8] group-hover:underline pt-2">
              <span>Read the Founder's Statement</span>
              <ArrowRight size={14} />
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 p-6 rounded-2xl bg-[#121212] border border-white/5 text-xs">
            <span className="font-mono text-[#716E6B] uppercase tracking-wider">Direct Portals</span>
            {founderData.links?.map((link) => (
              <a
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#A5A19F] hover:text-[#F2EEE8] flex items-center justify-between py-1 transition-colors"
              >
                <span className="capitalize">{link.type}</span>
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Council Selector Tabs */}
      <div className="flex justify-center mb-10">
        <div className="p-1 rounded-full bg-[#101010] border border-white/10 inline-flex gap-1">
          <button
            onClick={() => setActiveCouncil("operations")}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeCouncil === "operations"
                ? "bg-[#F2EEE8] text-[#030303] font-semibold"
                : "text-[#A5A19F] hover:text-[#F2EEE8]"
            }`}
          >
            Operations Council
          </button>
          <button
            onClick={() => setActiveCouncil("development")}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeCouncil === "development"
                ? "bg-[#F2EEE8] text-[#030303] font-semibold"
                : "text-[#A5A19F] hover:text-[#F2EEE8]"
            }`}
          >
            Development Council
          </button>
        </div>
      </div>

      {/* Council Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentMembers.map((member) => (
          <div
            key={member.role}
            onClick={() => setSelectedMember(member)}
            className="group p-6 sm:p-7 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-white/25 hover:bg-[#121212] transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl select-none">{member.emoji || "✦"}</span>
                <span className="font-mono text-[10px] text-[#716E6B] uppercase tracking-wider">
                  Fellow
                </span>
              </div>

              <div>
                <span className="font-mono text-[11px] text-[#A3A3A3] uppercase tracking-wider block mb-1">
                  {member.role}
                </span>
                <h4 className="font-serif text-xl text-[#F2EEE8] group-hover:text-white transition-colors">
                  {member.name}
                </h4>
              </div>

              <p className="font-sans font-light text-xs text-[#A5A19F] leading-relaxed line-clamp-3">
                {member.roleDesc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#716E6B]">
              <span className="group-hover:text-[#F2EEE8] transition-colors">Profile details</span>
              <span className="text-[#F2EEE8]">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Member Details Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D0D0D] border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-5 right-5 text-[#A5A19F] hover:text-[#F2EEE8] p-1 rounded-full border border-white/10"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <span className="font-mono text-xs uppercase tracking-[3px] text-[#A3A3A3]">
                  {selectedMember.role}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F2EEE8] mt-1">
                  {selectedMember.name}
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <p className="font-sans font-light text-sm text-[#A5A19F] leading-relaxed">
                  {selectedMember.bio}
                </p>

                {selectedMember.quote && (
                  <blockquote className="p-4 rounded-xl bg-[#141414] border border-white/5 font-serif italic text-sm text-[#F2EEE8] leading-relaxed">
                    "{selectedMember.quote}"
                  </blockquote>
                )}
              </div>

              {selectedMember.links && (
                <div className="pt-4 border-t border-white/10 flex gap-4 text-xs font-mono">
                  {selectedMember.links.map((link) => (
                    <a
                      key={link.type}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F2EEE8] hover:underline capitalize flex items-center gap-1"
                    >
                      {link.type} <ExternalLink size={11} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Founder Statement Modal */}
      <AnimatePresence>
        {showFounderModal && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowFounderModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D0D0D] border border-white/15 rounded-3xl max-w-2xl w-full p-8 sm:p-10 relative shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowFounderModal(false)}
                className="absolute top-6 right-6 text-[#A5A19F] hover:text-[#F2EEE8] p-1 rounded-full border border-white/10"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <TeamAvatar
                  image={founderData.image}
                  name={founderData.name}
                  size={64}
                  className="rounded-full ring-2 ring-white/20"
                />
                <div>
                  <span className="font-mono text-xs uppercase tracking-[3px] text-[#A3A3A3]">
                    Founder & Executive Director
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F2EEE8]">
                    Sarvesh Kore
                  </h3>
                </div>
              </div>

              <blockquote className="font-serif italic text-xl text-[#F2EEE8] mb-6 p-4 rounded-xl bg-[#141414] border border-white/5">
                {founderData.quote}
              </blockquote>

              <div className="space-y-4 font-sans font-light text-sm sm:text-base text-[#A5A19F] leading-relaxed mb-8">
                <p>
                  "I didn't start the Collegium of Minds because the world lacked information. It lacked places where genuine curiosity could survive. A place where someone fascinated by black holes could debate a moral philosopher, where a programmer could collaborate with an artist, where difficult questions were welcomed instead of dismissed."
                </p>
                <p>
                  "CoM exists to become that sanctuary. In an attention economy built on fragmentation, we honor the deliberate slowness of contemplation. We do not demand compliance or uniformity; we require only the humility to ask and the rigor to investigate."
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono">
                {founderData.links?.map((link) => (
                  <a
                    key={link.type}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F2EEE8] hover:underline capitalize flex items-center gap-1"
                  >
                    {link.type} <ExternalLink size={11} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
