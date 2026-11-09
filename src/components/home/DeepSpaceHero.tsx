import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function DeepSpaceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking across the hero track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // ==========================================================================
  // DEEP-SPACE DEPARTURE: COORDINATED SCROLL-LINKED TIMELINE
  // ==========================================================================
  // 1. Initial State (0 to 0.10): Full original scale, natural floating position
  // 2. Descent Begins (0.10 to 0.50): Translates downward and drifts slightly toward center
  // 3. Progressive Distance (0.50 to 0.85): Scale contracts sharply (1.0 -> 0.12)
  // 4. Departure into Void (0.80 to 0.95): Opacity dissolves to 0 into pure carbon black
  const astronautY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.55, 0.92],
    [0, 40, 280, 560]
  );
  const astronautX = useTransform(
    scrollYProgress,
    [0, 0.12, 0.55, 0.92],
    [0, -15, -70, -140]
  );
  const astronautScale = useTransform(
    scrollYProgress,
    [0, 0.12, 0.55, 0.92],
    [1, 0.96, 0.48, 0.12]
  );
  const astronautOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.65, 0.88],
    [1, 1, 0.7, 0]
  );
  const astronautRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 0.92],
    [0, -2, -6]
  );

  // Typography transitions
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.55], [1, 0.85, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.55], [0, -45]);

  // Scroll indicator: visible initially, fades out immediately on scroll
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08, 0.16], [1, 0.5, 0]);
  const indicatorY = useTransform(scrollYProgress, [0, 0.16], [0, 15]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[190vh] bg-[#030303]"
      aria-label="Hero — Beyond What We Know"
    >
      {/* Sticky Fullscreen Environment */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-[#030303]">
        {/* Main Composition Wrapper */}
        <div className="my-auto w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 pt-20 lg:pt-0">
          
          {/* Confident Typographic Left Column */}
          <motion.div
            style={shouldReduceMotion ? {} : { opacity: textOpacity, y: textY }}
            className="flex-1 z-20 text-left max-w-2xl select-none"
          >
            {/* Primary Display Title: Georgia Bold ("Collegium") + Georgia Italic ("of Minds") */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.25rem] tracking-tight text-[#F2EEE8] leading-[0.96]"
              style={{ fontFamily: "Georgia, 'Cormorant Garamond', serif" }}
            >
              <span className="block font-bold">Collegium</span>
              <span className="block italic font-normal text-[#E5E0D8]/95 mt-1 sm:mt-2">
                of Minds
              </span>
            </motion.h1>

            {/* Secondary Motto: "Think. Explore. Discover." in high-contrast editorial serif */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl text-[#E5E0D8]/90 tracking-wide font-normal italic"
              style={{ fontFamily: "'Instrument Serif', 'Cormorant Garamond', Georgia, serif" }}
            >
              Think. Explore. Discover.
            </motion.p>
          </motion.div>

          {/* Cinematic Astronaut Deep-Space Departure Wrapper */}
          <motion.div
            style={
              shouldReduceMotion
                ? {}
                : {
                    x: astronautX,
                    y: astronautY,
                    scale: astronautScale,
                    opacity: astronautOpacity,
                    rotate: astronautRotate,
                  }
            }
            className="flex-1 flex justify-center lg:justify-end items-center relative z-10 pointer-events-none"
          >
            {/* Subtle natural idle float */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [-6, 6, -6],
                      rotate: [-0.4, 0.6, -0.4],
                    }
              }
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[300px] sm:w-[400px] md:w-[480px] lg:w-[560px] xl:w-[620px] aspect-[1536/1024] flex items-center justify-center"
            >
              <img
                src="/assets/astronaut.png"
                alt="Astronaut floating in deep space"
                className="w-full h-auto object-contain select-none"
                loading="eager"
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Minimal Mouse Scroll Indicator */}
        <motion.div
          style={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: indicatorOpacity, y: indicatorY }
          }
          className="w-full flex flex-col items-center justify-center pb-8 z-20 pointer-events-none select-none"
        >
          {/* Outlined mouse icon */}
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
            <motion.div
              animate={{
                y: [0, 6, 0],
                opacity: [0.8, 0.3, 0.8],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 rounded-full bg-[#F2EEE8]"
            />
          </div>

          {/* Minimal scroll label */}
          <span className="font-mono text-[9px] uppercase tracking-[3px] text-[#A3A3A3] mt-2.5 font-light">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
