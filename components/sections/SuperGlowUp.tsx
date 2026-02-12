'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const SuperGlowUp = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  // --- 1. NOISE & SCANLINE ---
  // Noise opacity fades out as we "clean" the signal
  const noiseOpacity = useTransform(scrollYProgress, [0, 0.6, 0.8], [0.15, 0.05, 0]);

  // Scanline moves down the viewport
  const scanlineTop = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);
  const scanlineOpacity = useTransform(scrollYProgress, [0.1, 0.6, 0.65], [1, 1, 0]);

  // --- 2. TEXT ANIMATIONS ---

  // Text 1: "Job market is noisy" (Glitchy)
  const t1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.35], [0, 1, 0]);
  const t1Scale = useTransform(scrollYProgress, [0.1, 0.35], [0.9, 1.1]);
  const t1X = useTransform(scrollYProgress, [0.15, 0.2, 0.25, 0.3], [0, -5, 5, 0]); // Jitter

  // Text 2: "Smarter Bridge" (Clean, Scanning)
  const t2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.6], [0, 1, 0]);
  const t2Y = useTransform(scrollYProgress, [0.35, 0.6], [50, -50]);

  // Text 3: "TalentMesh" (The Signal - Burst)
  const t3Opacity = useTransform(scrollYProgress, [0.65, 0.7, 0.85], [0, 1, 1]);
  const t3Scale = useTransform(scrollYProgress, [0.65, 0.8], [2.5, 1]); // Zoom out
  const t3Filter = useTransform(scrollYProgress, [0.65, 0.8], ["blur(20px)", "blur(0px)"]);

  // Dynamic Background: Dark Noise -> Clean Deep Blue
  const bgGradient = useTransform(
    scrollYProgress,
    [0.6, 0.9],
    ["linear-gradient(to bottom, #000000, #0a0a0a)", "linear-gradient(to bottom, #020617, #0f172a)"]
  );

  return (
    <section
      ref={targetRef}
      className="relative h-[350vh] bg-black"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        {/* BACKGROUND LAYER */}
        <motion.div
          style={{ background: bgGradient }}
          className="absolute inset-0 z-0"
        />

        {/* NOISE OVERLAY */}
        <motion.div
          style={{ opacity: noiseOpacity }}
          className="absolute inset-0 z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150"
        />

        {/* SCANLINE */}
        <motion.div
          style={{ top: scanlineTop, opacity: scanlineOpacity }}
          className="absolute left-0 right-0 h-2 bg-blue-500/50 z-20 shadow-[0_0_50px_4px_rgba(59,130,246,0.6)] blur-sm"
        />

        {/* CONTENT CONTAINER */}
        <div className="relative z-30 w-full max-w-5xl px-6 text-center">

          {/* PHASE 1: NOISY TEXT */}
          <motion.div
            style={{ opacity: t1Opacity, scale: t1Scale, x: t1X }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white/90 mb-4 mix-blend-difference">
                The job market is <span className="text-red-500 line-through decoration-slice">noisy</span>.
              </h2>
              <p className="text-white/50 font-mono text-sm tracking-widest uppercase animate-pulse">
                        /// SIGNAL_LOST ///
              </p>
            </div>
          </motion.div>

          {/* PHASE 2: SCANNING TEXT */}
          <motion.div
            style={{ opacity: t2Opacity, y: t2Y }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-2 leading-tight">
              You need a <span className="text-blue-400">smarter bridge</span>.
            </h2>
          </motion.div>

          {/* PHASE 3: THE REVEAL */}
          <motion.div
            style={{ opacity: t3Opacity, scale: t3Scale, filter: t3Filter }}
            className="absolute inset-0 flex flex-col items-center justify-center pt-12"
          >
            <div className="relative">
              {/* Glow behind text */}
              <div className="absolute inset-0 bg-blue-600/30 blur-[100px] rounded-full" />

              <motion.h1 className="relative z-10 text-6xl md:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                TalentMesh
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative z-10 text-xl md:text-3xl font-light text-blue-100/80 mt-8 max-w-3xl mx-auto leading-relaxed"
            >
              Find your dream job with <span className="font-semibold text-blue-400">AI Recruiting</span> that cuts through the static.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SuperGlowUp;