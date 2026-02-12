'use client';

import React, { useRef } from 'react';
import { motion, Variants, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkle, Target, Cpu } from 'phosphor-react';
import HeroBackground from './HeroBackground';
import Magnetic from '../ui/Magnetic';

export default function HeroContextSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  // --- 3D TILT EFFECT ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 10 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 10 });

  function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const xPct = (clientX / windowWidth - 0.5) * 2; // -1 to 1
    const yPct = (clientY / windowHeight - 0.5) * 2; // -1 to 1
    x.set(xPct);
    y.set(yPct);
  }

  const rotateX = useTransform(mouseY, [-1, 1], [5, -5]); // Tilt up/down
  const rotateY = useTransform(mouseX, [-1, 1], [-5, 5]); // Tilt left/right

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-auto md:min-h-[95vh] w-full flex items-center justify-center pt-20 md:pt-32 pb-8 md:pb-16 overflow-hidden bg-white selection:bg-[#044396]/20 bg-slate-50"
    >

      <HeroBackground />

      <div className="max-w-7xl mx-auto mt-25 px-6 relative z-10 w-full perspective-[1000px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 text-blue-700 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md shadow-sm hover:bg-blue-50 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#044396]"></span>
              </span>
              Next-Gen Staffing & Consulting
            </div>
          </motion.div>

          {/* Main Title - 3D TILT */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="flex flex-col items-center relative z-20"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-extrabold text-slate-900 tracking-tighter leading-[0.9] mb-8 drop-shadow-sm"
            >
              Beyond Resumes. <br />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#044396] via-[#2563eb] to-[#044396] bg-[length:200%_auto] animate-gradient-x">
                Human Precision.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl text-slate-600 font-medium leading-relaxed tracking-tight"
            >
              The premier staffing partner connecting <br className="hidden sm:block" />
              <span className="text-slate-900 font-semibold">high-performance talent</span> with <span className="text-slate-900 font-semibold">world-class innovators</span>.
            </motion.p>

            {/* Magnetic Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-col sm:flex-row gap-5 items-center justify-center p-1"
            >
              <Magnetic>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-[#044396] text-white px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-[0_10px_40px_rgba(4,67,150,0.3)] hover:shadow-[0_20px_40px_rgba(4,67,150,0.2)] transition-all duration-300 overflow-hidden flex items-center gap-3"
                >
                  <span className="relative z-10">Start Hiring</span>
                  <Cpu size={18} weight="bold" className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/10 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              </Magnetic>

              <Magnetic>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:border-[#044396]/30 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
                >
                  <span className="relative z-10">Find Work</span>
                  <Target size={18} weight="bold" className="text-[#044396] group-hover:scale-110 transition-transform duration-300" />
                </motion.button>
              </Magnetic>
            </motion.div>

          </motion.div>

          {/* Bottom Branded Symbol - Enhanced "Living" Effect */}
          <motion.div
            variants={itemVariants}
            className="mt-20 relative group/logo cursor-pointer mb-10"
          >
            {/* Permanent Pulsing Glow */}
            <motion.div
              animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#044396]/20 blur-[100px] rounded-full -z-10"
            />

            {/* Floating Animation Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/logo-removebg-preview.png"
                alt="TalentMesh Symbol"
                className="w-84 h-84 md:w-126 md:h-126 object-contain opacity-90 group-hover/logo:opacity-100 group-hover/logo:scale-105 transition-all duration-500 ease-in-out drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none mix-blend-multiply"
      >
        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Scroll</div>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-300 to-transparent" />
      </motion.div>

    </section>
  );
}