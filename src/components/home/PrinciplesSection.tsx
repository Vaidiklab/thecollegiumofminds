import React from "react";

export function PrinciplesSection() {
  const principles = [
    {
      numeral: "Ⅰ",
      title: "Primacy of the Question",
      description:
        "An unexamined answer is a premature conclusion. We evaluate intellectual progress not by the speed of agreement, but by the caliber and depth of the questions we dare to formulate.",
    },
    {
      numeral: "Ⅱ",
      title: "Interdisciplinary Synthesis",
      description:
        "Intellectual silos breed dogmatic blindness. The most fertile insights emerge when theoretical physicists engage moral philosophers, and mathematicians converse with artists.",
    },
    {
      numeral: "Ⅲ",
      title: "Radical Independence",
      description:
        "Consensus is no guarantor of truth. We foster an environment of respectful dissent, fearless debate, and the intellectual courage to re-examine foundational axioms.",
    },
    {
      numeral: "Ⅳ",
      title: "Lifelong Fellowship",
      description:
        "Curiosity is neither a degree nor a finite project; it is an enduring posture toward existence. We cultivate a decentralized guild dedicated to mutual discovery.",
    },
  ];

  return (
    <section
      id="principles"
      className="relative z-10 py-28 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/10 bg-[#030303]"
      aria-label="What Drives Us"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-12 sm:mb-16">
        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <span className="font-mono text-xs tracking-[3px] uppercase text-[#A3A3A3]">
          03 / What Drives Us
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-20">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#F2EEE8] tracking-tight leading-[1.08]">
            Convictions that guide our inquiry.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-[#A3A3A3] font-sans font-light text-base sm:text-lg leading-relaxed pt-2">
            The Collegium of Minds is anchored not by bureaucratic rules, but by shared philosophical commitments. These tenets shape every debate, essay, and collaboration across our societies.
          </p>
        </div>
      </div>

      {/* Asymmetrical 4-Pillar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {principles.map((p, i) => (
          <div
            key={i}
            className="p-8 sm:p-10 rounded-2xl bg-[#080808] border border-white/10 hover:border-white/25 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif text-2xl text-[#F2EEE8]/60 group-hover:text-[#F2EEE8] transition-colors">
                  {p.numeral}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[3px] text-[#716E6B]">
                  Principle 0{i + 1}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F2EEE8] group-hover:text-white mb-4">
                {p.title}
              </h3>
              <p className="font-sans font-light text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                {p.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#716E6B]">
              <span>Collegium Standard</span>
              <span className="text-[#A3A3A3] group-hover:text-[#F2EEE8] transition-colors">Verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
