import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

export interface SocietyItem {
  index: string;
  name: string;
  descriptor: string;
  leadQuestion: string;
  questions: string[];
  members: number;
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
  },
];

export function DisciplinesSection() {
  const [activeSociety, setActiveSociety] = useState<SocietyItem | null>(null);

  return (
    <section
      id="disciplines"
      className="relative z-10 py-28 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/10"
      aria-label="Intellectual Disciplines"
    >
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="font-mono text-xs tracking-[3px] uppercase text-[#A3A3A3]">
              02 / Intellectual Disciplines
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F2EEE8] tracking-tight">
            The Architecture of Inquiry.
          </h2>
        </div>
        <p className="text-[#A3A3A3] font-sans font-light text-sm sm:text-base max-w-md leading-relaxed">
          Ten dedicated societies converging at the frontiers of science, philosophy, and human thought.
        </p>
      </div>

      {/* Editorial Index Layout */}
      <div className="border-t border-white/10 divide-y divide-white/10">
        {disciplinesData.map((d) => (
          <div
            key={d.index}
            onClick={() => setActiveSociety(d)}
            className="group py-6 sm:py-8 px-3 sm:px-6 -mx-3 sm:-mx-6 rounded-xl hover:bg-[#080808] transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* Left: Numeral & Discipline */}
            <div className="flex items-start sm:items-center gap-5 sm:gap-8 min-w-[280px] lg:min-w-[340px]">
              <span className="font-mono text-xs sm:text-sm text-[#716E6B] group-hover:text-[#F2EEE8] transition-colors pt-1 sm:pt-0">
                {d.index}
              </span>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F2EEE8] group-hover:text-white transition-colors">
                  {d.name}
                </h3>
                <span className="font-sans text-xs text-[#716E6B] block mt-0.5 font-light">
                  {d.descriptor}
                </span>
              </div>
            </div>

            {/* Middle: Provocation / Core Question */}
            <div className="flex-1 max-w-xl pl-8 sm:pl-0">
              <p className="font-serif italic text-sm sm:text-base text-[#A3A3A3] group-hover:text-[#F2EEE8] transition-colors leading-relaxed">
                "{d.leadQuestion}"
              </p>
            </div>

            {/* Right: Society Size & Arrow */}
            <div className="flex items-center justify-between md:justify-end gap-6 pl-8 sm:pl-0 flex-shrink-0">
              <span className="font-mono text-xs text-[#716E6B] group-hover:text-[#A3A3A3] transition-colors">
                {d.members} Fellows
              </span>
              <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center text-[#A3A3A3] group-hover:text-[#F2EEE8] transition-colors">
                <ArrowUpRight size={15} />
              </div>
            </div>
          </div>
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
              className="bg-[#0D0D0D] border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setActiveSociety(null)}
                className="absolute top-5 right-5 text-[#A5A19F] hover:text-[#F2EEE8] p-1 rounded-full border border-white/10 hover:border-white/25 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

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
                  className="font-sans font-medium uppercase tracking-wider text-[#F2EEE8] hover:underline"
                >
                  Join This Society →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
