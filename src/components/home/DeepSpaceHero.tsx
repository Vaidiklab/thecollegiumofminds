import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function DeepSpaceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking across the hero track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Hero text stays locked in position (opacity 1.0, y: 0) while astronaut falls
  // Gently fades only at the very end (0.80 -> 1.0) as the page transitions to the next section
  const textOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.75, 1.0],
    [1.0, 1.0, 0.15]
  );
  const textY = useTransform(
    scrollYProgress,
    [0.0, 0.75, 1.0],
    [0, 0, -20]
  );

  // Minimal scroll indicator fades out immediately upon scrolling
  const indicatorOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.12],
    [1.0, 0.0]
  );
  const indicatorY = useTransform(
    scrollYProgress,
    [0.0, 0.12],
    [0, 14]
  );

  // Cinematic Astronaut Plunge into the Abyss
  // Unhurried descent: visibly falls downward and into deep space beside the stationary text
  // Zero blur — completely sharp throughout
  const astronautScale = useTransform(
    scrollYProgress,
    [0.0, 0.25, 0.55, 0.85],
    [1.0, 0.75, 0.35, 0.04]
  );
  const astronautY = useTransform(
    scrollYProgress,
    [0.0, 0.25, 0.55, 0.85],
    [0, 160, 440, 800]
  );
  const astronautX = useTransform(
    scrollYProgress,
    [0.0, 0.25, 0.55, 0.85],
    [0, -25, -75, -160]
  );
  const astronautRotate = useTransform(
    scrollYProgress,
    [0.0, 0.30, 0.85],
    [0, -3, -12]
  );
  const astronautOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.35, 0.65, 0.85],
    [1.0, 1.0, 0.7, 0.0]
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[175vh] bg-[#030303]"
      aria-label="Hero — Beyond What We Know"
    >
      {/* Sticky Fullscreen Pinned Environment */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden bg-[#030303]">
        
        {/* Main Hero Composition Wrapper */}
        <div className="relative my-auto w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 pt-20 lg:pt-0">
          
          {/* Confident Typographic Left Column (z-10, Locked in position) */}
          <motion.div
            style={shouldReduceMotion ? {} : { opacity: textOpacity, y: textY }}
            className="flex-1 z-10 text-left max-w-3xl xl:max-w-4xl select-none"
          >
            {/* Brand Eyebrow: "Collegium of Mind" in Georgia Bold + Regular */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] text-[#E5E0D8] tracking-[-0.02em] mb-2 sm:mb-4"
              style={{ fontFamily: "Georgia, 'Cormorant Garamond', serif" }}
            >
              <span className="font-bold text-[#F2EEE8]">Collegium</span>{" "}
              <span className="font-normal text-[#E5E0D8]/85 italic">of Mind</span>
            </motion.div>

            {/* Primary Headline: "Beyond What \n we Know." in custom Mileast serif */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.25rem] xl:text-[7.25rem] tracking-tight text-[#F2EEE8] leading-[0.96]"
              style={{ fontFamily: "'Mileast', Georgia, serif" }}
            >
              <span className="block whitespace-nowrap">Beyond What</span>
              <span className="block whitespace-nowrap">we Know.</span>
            </motion.h1>

            {/* Tagline Motto: "Think. Explore. Discover." in custom New York italic serif */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl text-[#E5E0D8]/90 tracking-wide font-normal italic"
              style={{
                fontFamily: "'New York', 'Instrument Serif', Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Think. Explore. Discover.
            </motion.p>
          </motion.div>

          {/* Cinematic Astronaut Foreground Layer (z-30 — in front of text, falling into the abyss) */}
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
            className="z-30 pointer-events-none flex justify-center items-center lg:absolute lg:right-4 xl:right-12 lg:top-1/2 lg:-translate-y-1/2"
          >
            {/* Subtle natural idle float */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [-8, 8, -8],
                      rotate: [-0.6, 0.8, -0.6],
                    }
              }
              transition={{
                duration: 8.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] xl:w-[520px] aspect-[745/1000] flex items-center justify-center filter drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
            >
              <img
                src="/assets/astronaut-tight.png"
                alt="Astronaut floating in deep space reaching forward"
                className="w-full h-full object-contain select-none pointer-events-none"
                loading="eager"
                draggable={false}
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
