import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, X, Compass, Sparkles, Eye, ShieldCheck, ArrowRight } from "lucide-react";

export interface SocietyItem {
  index: string;
  name: string;
  descriptor: string;
  leadQuestion: string;
  questions: string[];
  members: number;
  image: string;
  coordinates: string;
  fieldCode: string;
}

export const disciplinesData: SocietyItem[] = [
  {
    index: "01",
    name: "Mathematics",
    descriptor: "The Grammar of Pattern & Structure",
    leadQuestion: "Was mathematics invented by human cognition or discovered in the cosmos?",
    questions: [
      "Was mathematics invented or discovered?",
      "Can transfinite infinity have an ultimate boundary?",
      "Are there undecidable problems that computation can never penetrate?"
    ],
    members: 28,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    coordinates: "41°23'N 02°10'E",
    fieldCode: "MAT-01"
  },
  {
    index: "02",
    name: "Theoretical Physics",
    descriptor: "The Architecture of Fundamental Reality",
    leadQuestion: "If spacetime is emergent, what fundamental substrate underlies it?",
    questions: [
      "If gravity disappeared for one second, what would happen?",
      "Can information truly escape from an evaporating black hole?",
      "Why does time flow inexorably forward and never backward?"
    ],
    members: 32,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    coordinates: "46°14'N 06°03'E",
    fieldCode: "PHY-02"
  },
  {
    index: "03",
    name: "Philosophy of Mind",
    descriptor: "Consciousness, Epistemology & Being",
    leadQuestion: "Can subjective experience ever be reduced to mechanical computation?",
    questions: [
      "What preserves identity across physical and cognitive mutation?",
      "Can something be objectively true if no mind perceives it?",
      "Is free will compatible with quantum indeterminacy or physical determinism?"
    ],
    members: 21,
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80",
    coordinates: "37°58'N 23°43'E",
    fieldCode: "PHI-03"
  },
  {
    index: "04",
    name: "Cosmology & Spacetime",
    descriptor: "The Origin, Geometry & Fate of the Universe",
    leadQuestion: "What precedes the cosmic expansion, and what lies beyond the horizon?",
    questions: [
      "Is there anything beyond the observable universe?",
      "Could multiverse topologies explain the fine-tuning of fundamental constants?",
      "Will the universe conclude in heat death, a big rip, or cyclic rebirth?"
    ],
    members: 27,
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
    coordinates: "28°18'N 16°30'W",
    fieldCode: "COS-04"
  },
  {
    index: "05",
    name: "Technology & AI",
    descriptor: "The Synthesis of Synthetic Intelligence",
    leadQuestion: "Will artificial superintelligence amplify human creativity or render it obsolete?",
    questions: [
      "What cognitive thresholds delineate genuine understanding from pattern imitation?",
      "Can synthetic systems develop genuine moral agency?",
      "What existential guardrails must precede the arrival of artificial general intelligence?"
    ],
    members: 23,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    coordinates: "37°46'N 122°25'W",
    fieldCode: "SYN-05"
  },
  {
    index: "06",
    name: "Molecular Chemistry",
    descriptor: "Thermodynamics, Catalysis & Matter",
    leadQuestion: "What energetic thresholds govern spontaneous molecular self-assembly?",
    questions: [
      "Can chemistry solve global thermodynamic energy storage?",
      "Why are certain molecular reactions instantaneous while others span eons?",
      "Could we engineer stable synthetic materials with properties nonexistent in nature?"
    ],
    members: 21,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    coordinates: "47°34'N 07°35'E",
    fieldCode: "CHM-06"
  },
  {
    index: "07",
    name: "Evolutionary Biology",
    descriptor: "Self-Organization, Genetics & Life",
    leadQuestion: "Is biological aging an unavoidable breakdown or a reprogrammable code?",
    questions: [
      "Should humanity actively rewrite its own germline genome?",
      "Could life originate and sustain itself without nucleic acids?",
      "What universal principles govern biological self-organization?"
    ],
    members: 18,
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
    coordinates: "00°54'S 90°58'W",
    fieldCode: "BIO-07"
  },
  {
    index: "08",
    name: "Civilizations & History",
    descriptor: "Power, Ideology & Historical Trajectory",
    leadQuestion: "What structural vulnerabilities cause mature civilizations to fragment?",
    questions: [
      "What systemic conditions enable institutional longevity?",
      "Do exceptional individuals bend historical arcs, or do broader material currents dictate them?",
      "How do distributed communications networks alter the stability of societies?"
    ],
    members: 15,
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1200&q=80",
    coordinates: "31°12'N 29°55'E",
    fieldCode: "HIS-08"
  },
  {
    index: "09",
    name: "Literature & Semiotics",
    descriptor: "Narrative, Archetypes & Human Meaning",
    leadQuestion: "Why do mythic narratives persist across millennia and civilizations?",
    questions: [
      "Can algorithmic language models author authentic literary art?",
      "Why is narrative fundamental to human sanity and social coherence?",
      "What gives poetic language its singular power to evoke the ineffable?"
    ],
    members: 22,
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80",
    coordinates: "51°45'N 01°15'W",
    fieldCode: "LIT-09"
  },
  {
    index: "10",
    name: "Complex Systems & Games",
    descriptor: "Emergence, Strategy & Decision Trees",
    leadQuestion: "How do elementary deterministic rules yield infinite strategic depth?",
    questions: [
      "Are games the ultimate interactive medium for philosophical inquiry?",
      "What makes a procedural rule system inherently beautiful?",
      "How do complex adaptive systems resist or succumb to catastrophic cascading failures?"
    ],
    members: 22,
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
    coordinates: "35°41'N 139°41'E",
    fieldCode: "SYS-10"
  },
];

interface ParallaxSocietyRowProps {
  society: SocietyItem;
  index: number;
  onSelect: (society: SocietyItem) => void;
}

function ParallaxSocietyRow({ society, index, onSelect }: ParallaxSocietyRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  // Scroll-driven parallax tracking for this specific card
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  // Image internal vertical glide inside the masked frame
  const imageY = useTransform(scrollYProgress, [0, 1], ["-16%", "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.16, 1.08, 1.16]);

  // Floating text / question card parallax (moves slightly faster to create true depth separation)
  const floatingCardY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Translucent background numeral drift
  const numeralY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  // Reticle subtle rotation with scroll
  const reticleRotate = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <div
      ref={rowRef}
      id={`society-${society.index}`}
      className="relative py-16 sm:py-24 lg:py-32 scroll-mt-28"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
          isEven ? "" : "lg:flex-row-reverse"
        }`}
      >
        {/* Parallax Photo Window Column (7 columns) */}
        <div className={`relative ${isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}`}>
          {/* Masked Parallax Frame */}
          <div className="relative h-[360px] sm:h-[460px] lg:h-[540px] w-full rounded-3xl overflow-hidden border border-white/15 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.85)] group cursor-pointer"
            onClick={() => onSelect(society)}
          >
            {/* Smooth Scroll-Driven Parallax Image */}
            <motion.img
              style={{
                y: imageY,
                scale: imageScale,
              }}
              src={society.image}
              alt={society.name}
              className="absolute -top-[20%] left-0 w-full h-[140%] object-cover object-center filter brightness-90 saturate-90 transition-filter duration-500 group-hover:brightness-100 group-hover:saturate-100"
            />

            {/* Cinematic Gradient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-[#A78BFA]/5 mix-blend-color pointer-events-none" />

            {/* Top Coordinate Badge & Rotating Reticle */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
              <span className="font-mono text-[10px] tracking-[2px] uppercase text-[#F2EEE8] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {society.coordinates} • {society.fieldCode}
              </span>

              <motion.div
                style={{ rotate: reticleRotate }}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 backdrop-blur-sm bg-black/30"
              >
                <Compass size={14} className="text-[#A78BFA]" />
              </motion.div>
            </div>

            {/* Hover Indicator pill */}
            <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-[#A78BFA] text-[#0A0A0A] shadow-lg">
                <span>Examine Society</span>
                <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        </div>

        {/* Content & Provocation Column with Differential Parallax (5 columns) */}
        <div className={`relative ${isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"}`}>
          {/* Huge Translucent Parallax Numeral in Background */}
          <motion.div
            style={{ y: numeralY }}
            className="absolute -top-12 sm:-top-20 -left-4 sm:-left-8 font-serif text-8xl sm:text-9xl lg:text-[140px] font-bold text-white/[0.03] select-none pointer-events-none leading-none z-0"
            aria-hidden="true"
          >
            {society.index}
          </motion.div>

          {/* Floating Foreground Card */}
          <motion.div
            style={{ y: floatingCardY }}
            className="relative z-10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl bg-[#090909]/90 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
          >
            {/* Meta Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
                <span className="font-mono text-xs uppercase tracking-[2.5px] text-[#A78BFA]">
                  Society {society.index}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#716E6B]">
                {society.members} Active Fellows
              </span>
            </div>

            {/* Society Title */}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F2EEE8] tracking-tight mb-2">
              {society.name}
            </h3>

            {/* Descriptor */}
            <p className="font-sans text-xs sm:text-sm text-[#716E6B] font-light mb-6">
              {society.descriptor}
            </p>

            {/* Core Provocation Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/8 mb-6">
              <p className="font-serif italic text-base sm:text-lg text-[#F2EEE8] leading-relaxed">
                "{society.leadQuestion}"
              </p>
            </div>

            {/* Lines of Inquiry Previews */}
            <div className="space-y-2 mb-6">
              <span className="font-mono text-[10px] tracking-[2px] uppercase text-[#716E6B] block">
                Frontier Questions:
              </span>
              {society.questions.slice(0, 2).map((q, idx) => (
                <div
                  key={idx}
                  className="text-xs font-sans font-light text-[#A3A3A3] flex items-start gap-2 line-clamp-1"
                >
                  <span className="text-[#A78BFA] mt-0.5">•</span>
                  <span>{q}</span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => onSelect(society)}
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#F2EEE8] hover:text-[#A78BFA] transition-colors cursor-pointer group"
              >
                <span>Read Society Dossier</span>
                <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="font-mono text-[10px] text-[#716E6B] uppercase tracking-wider">
                {society.fieldCode}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function DisciplinesSection() {
  const [activeSociety, setActiveSociety] = useState<SocietyItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Global Section Parallax Grid Movement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundGridY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const compassAngle = useTransform(scrollYProgress, [0, 1], [0, 90]);

  const scrollToSociety = (index: string) => {
    const el = document.getElementById(`society-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="disciplines"
      className="relative z-10 py-28 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/10 overflow-hidden"
      aria-label="Intellectual Disciplines"
    >
      {/* Background Architectural Meridian Grid moving with continuous Parallax */}
      <motion.div
        style={{ y: backgroundGridY }}
        className="absolute inset-0 pointer-events-none opacity-20 select-none overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full text-white/[0.04]"
          viewBox="0 0 1200 1600"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="200" x2="1200" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="0" y1="600" x2="1200" y2="600" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="0" y1="1000" x2="1200" y2="1000" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="0" y1="1400" x2="1200" y2="1400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="250" y1="0" x2="250" y2="1600" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="600" y1="0" x2="600" y2="1600" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <line x1="950" y1="0" x2="950" y2="1600" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="250" cy="200" r="24" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="950" cy="600" r="32" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="600" cy="1000" r="28" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] shadow-[0_0_8px_rgba(167,139,250,0.8)]" />
            <span className="font-mono text-xs tracking-[3px] uppercase text-[#A3A3A3]">
              02 / Intellectual Disciplines
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F2EEE8] tracking-tight">
            The Architecture of Inquiry.
          </h2>
        </div>

        <div className="flex flex-col md:items-end gap-2">
          <p className="text-[#A3A3A3] font-sans font-light text-sm sm:text-base max-w-md leading-relaxed md:text-right">
            Ten dedicated societies converging at the frontiers of science, philosophy, and human thought.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#716E6B]">
            <motion.div style={{ rotate: compassAngle }}>
              <Compass size={13} className="text-[#A78BFA]" />
            </motion.div>
            <span>Scroll-Driven Parallax Exhibition Active</span>
          </div>
        </div>
      </div>

      {/* Sticky Fast-Navigation Society Rail */}
      <div className="sticky top-20 z-30 py-3 mb-8 -mx-6 px-6 sm:-mx-10 sm:px-10 backdrop-blur-md bg-black/40 border-y border-white/10 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[10px] font-mono uppercase text-[#716E6B] mr-2">
            Jump to Chapter:
          </span>
          {disciplinesData.map((d) => (
            <button
              key={d.index}
              onClick={() => scrollToSociety(d.index)}
              className="px-3 py-1 rounded-full text-xs font-mono text-[#A3A3A3] hover:text-[#F2EEE8] hover:bg-white/10 border border-white/5 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="text-[#A78BFA] text-[10px]">{d.index}</span>
              <span>{d.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Continuous Scrolling Parallax Gallery Exhibition */}
      <div className="divide-y divide-white/10 relative z-10">
        {disciplinesData.map((society, index) => (
          <ParallaxSocietyRow
            key={society.index}
            society={society}
            index={index}
            onSelect={setActiveSociety}
          />
        ))}
      </div>

      {/* Society Detail Modal */}
      <AnimatePresence>
        {activeSociety && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveSociety(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D0D0D] border border-white/15 rounded-3xl max-w-lg w-full overflow-hidden relative shadow-2xl"
            >
              {/* Modal Cinematic Image Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-black">
                <img
                  src={activeSociety.image}
                  alt={activeSociety.name}
                  className="w-full h-full object-cover filter brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/40" />
                <button
                  onClick={() => setActiveSociety(null)}
                  className="absolute top-4 right-4 text-[#A5A19F] hover:text-[#F2EEE8] p-1.5 rounded-full bg-black/60 border border-white/10 hover:border-white/25 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-3 left-6">
                  <span className="font-mono text-[10px] uppercase tracking-[3px] text-[#A78BFA] bg-black/60 px-2 py-0.5 rounded border border-white/10">
                    {activeSociety.coordinates} • {activeSociety.fieldCode}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <span className="font-mono text-xs uppercase tracking-[3px] text-[#A3A3A3]">
                    Society {activeSociety.index}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F2EEE8] mt-1">
                    {activeSociety.name}
                  </h3>
                  <p className="font-sans text-xs text-[#716E6B] mt-1 font-light">
                    {activeSociety.descriptor}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#A3A3A3]">
                    Lines of Inquiry
                  </h4>
                  <div className="space-y-3">
                    {activeSociety.questions.map((q, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#141414] border border-white/5 font-serif italic text-sm text-[#F2EEE8] leading-relaxed"
                      >
                        "{q}"
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-[#716E6B]">
                    Active Society Members: <strong className="text-[#F2EEE8]">{activeSociety.members}</strong>
                  </span>
                  <a
                    href="#join"
                    onClick={() => setActiveSociety(null)}
                    className="font-sans font-medium uppercase tracking-wider text-[#F2EEE8] hover:text-[#A78BFA] transition-colors"
                  >
                    Join This Society →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
