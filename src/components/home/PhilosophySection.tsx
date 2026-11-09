import React from "react";

export function PhilosophySection() {
  return (
    <section
      id="about"
      className="relative z-10 py-28 sm:py-36 lg:py-44 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto border-t border-white/10 bg-[#030303]"
      aria-label="Our Philosophy"
    >
      {/* Editorial Section Indicator */}
      <div className="flex items-center gap-3 mb-12 sm:mb-16">
        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <span className="font-mono text-xs tracking-[3px] uppercase text-[#A3A3A3]">
          01 / Our Philosophy
        </span>
      </div>

      {/* Main Editorial Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-6">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F2EEE8] leading-[1.08]">
            We do not gather to settle opinions, but to venture beyond what we know.
          </h2>

          <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-[#080808] border border-white/10">
            <blockquote className="font-serif italic text-xl sm:text-2xl text-[#F2EEE8] leading-relaxed">
              "Curiosity is not a casual pastime. It is an instinctual refusal to accept the boundaries of conventional consensus."
            </blockquote>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-[#A3A3A3] font-sans font-light text-base sm:text-lg leading-relaxed pt-2">
          <p>
            The Collegium of Minds exists as an independent intellectual guild. It was created for thinkers, autodidacts, and researchers who recognize that the most transformative breakthroughs occur when curiosity precedes conformity.
          </p>
          <p>
            We inhabit an era saturated with fragmented data yet starved of deep contemplation. CoM functions as a decentralized laboratory of ideas—a calm, rigorous space where deep questions are celebrated rather than dismissed for lack of an immediate answer.
          </p>
          <p>
            Here, theoretical physics converses with philosophy of mind, pure mathematics intersects with generative technology, and biological emergence informs existential inquiries. We believe understanding is a lifelong pursuit, and the horizon is always expanding.
          </p>

          {/* Minimalist Ledger */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-left">
            <div>
              <span className="font-serif text-2xl sm:text-3xl text-[#F2EEE8] block">10</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#716E6B]">Societies</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl text-[#F2EEE8] block">60+</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#716E6B]">Fellows</span>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-3xl text-[#F2EEE8] block">∞</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#716E6B]">Inquiries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
