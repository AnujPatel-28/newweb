'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SuperGlowUp = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // --- ANIMATION CONFIG ---

  // 1. TEXT 1 ("Noisy")
  const op1 = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.4], [0, -200]);
  // Base Text: Slate -> White
  const col1 = useTransform(scrollYProgress, [0.75, 0.85], ["#1e293b", "#ffffff"]);
  // Highlight ("noisy"): Blue -> White
  const col1Highlight = useTransform(scrollYProgress, [0.75, 0.85], ["#044396", "#ffffff"]);

  // 2. TEXT 2 ("Smarter Bridge")
  const op2 = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.6], [50, -100]);
  // Base Text: Slate -> White
  const col2 = useTransform(scrollYProgress, [0.65, 0.75], ["#1e293b", "#ffffff"]);
  // Highlight ("smarter bridge"): Blue -> White
  const col2Highlight = useTransform(scrollYProgress, [0.65, 0.75], ["#044396", "#ffffff"]);

  // 3. TEXT 3 ("TalentMesh")
  const op3 = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.8], [100, 0]);
  const scale3 = useTransform(scrollYProgress, [0.65, 0.9], [0.9, 1.1]);
  // Main Title: Transitions to #1e293b (Dark Slate) at the end
  const col3 = useTransform(scrollYProgress, [0.65, 0.8], ["#1e293b", "#ffffffde"]);


  // 4. RISING BLUE GRADIENT BACKGROUND
  const bgHeight = useTransform(scrollYProgress, [0.4, 0.9], ["0%", "100%"]);
  const bgRound = useTransform(scrollYProgress, [0.4, 0.9], ["50% 50% 0 0", "0% 0% 0 0"]);


  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-transparent"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        {/* RISING GRADIENT LAYER */}
        <motion.div
          style={{ height: bgHeight, borderRadius: bgRound }}
          className="absolute bottom-0 left-0 right-0 z-0 bg-gradient-to-b from-blue-100 to-blue-900 shadow-[0_-20px_60px_-15px_rgba(37,99,235,0.5)]"
        />

        {/* CONTAINER FOR STACKED TEXT */}
        <div className="mt-20 relative z-10 w-full max-w-4xl px-4 flex flex-col items-center justify-center h-full">

          {/* TEXT 1: TOP STACK */}
          <motion.div
            style={{ opacity: op1, y: y1, color: col1 }}
            className="absolute text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              The job market is <motion.span style={{ color: col1Highlight }}>noisy.</motion.span>
            </h2>
          </motion.div>

          {/* TEXT 2: MIDDLE STACK */}
          <motion.div
            style={{ opacity: op2, y: y2, color: col2 }}
            className="absolute text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              You need a <motion.span style={{ color: col2Highlight }}>smarter bridge.</motion.span>
            </h2>
          </motion.div>

          {/* TEXT 3: HERO REVEAL */}
          <motion.div
            style={{ opacity: op3, y: y3, scale: scale3 }}
            className="absolute text-center pt-24"
          >
            <motion.h1
              style={{ color: col3 }}
              className="mt-7 text-6xl md:text-9xl font-black tracking-tighter drop-shadow-2xl"
            >
              TalentMesh
            </motion.h1>

            <motion.p
              style={{ color: col3 }}
              className="text-xl md:text-2xl font-light mt-4 max-w-2xl mx-auto leading-relaxed"
            >
              Find your dream job with <b className="font-bold">AI Recruiting</b> that actually works.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SuperGlowUp;