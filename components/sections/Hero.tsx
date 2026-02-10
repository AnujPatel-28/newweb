'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkle, Target, Cpu } from 'phosphor-react';
import HeroBackground from './HeroBackground';

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

  return (
    <section
      id="hero"
      className="relative min-h-[110vh] w-full flex items-center justify-center pt-32 pb-48 overflow-hidden bg-white selection:bg-[#044396]/20"
    >

      <HeroBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#044396]/10 bg-[#044396]/5 text-[#044396] text-[11px] font-black uppercase tracking-[0.4em] backdrop-blur-md shadow-2xl hover:bg-[#044396]/10 transition-colors cursor-default">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#044396] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#044396]"></span>
              </span>
              Neural Matching Engine 4.0
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="flex flex-col items-center relative"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black text-slate-900 tracking-tighter leading-[0.9] mb-10"
            >
              Engineering <br />
              <span className="text-[#044396] inline-block relative">
                Elite Alignment
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 1.2, ease: "circOut" }}
                  className="absolute -bottom-3 left-0 h-3 bg-[#044396]/10 rounded-full"
                />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-4xl text-lg sm:text-xl md:text-2xl text-slate-700 font-medium leading-relaxed"
            >
              The neural bridge connecting <br className="hidden sm:block" />
              <span className="text-slate-900">high-performance talent</span> with <span className="text-slate-900">top-tier innovators</span>.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-20 flex flex-col md:flex-row gap-8 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-[#044396] text-white px-12 py-6 rounded-2xl font-black text-[13px] uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(4,67,150,0.4)] hover:shadow-[0_10px_30px_rgba(4,67,150,0.2)] transition-all duration-500 overflow-hidden flex items-center gap-4"
              >
                <span className="relative z-10">I&apos;m Hiring</span>
                <Cpu size={20} weight="bold" className="relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white text-black border-2 border-zinc-100 px-12 py-6 rounded-2xl font-black text-[13px] uppercase tracking-[0.4em] hover:border-[#044396] transition-all duration-500 shadow-2xl flex items-center gap-4"
              >
                <span className="relative z-10">I&apos;m Seeking</span>
                <Target size={20} weight="bold" className="text-[#044396] group-hover:scale-110 transition-transform duration-500" />
              </motion.button>
            </motion.div>

            {/* Bottom Branded Symbol - Grayscale to Color Interaction */}
            <motion.div
              variants={itemVariants}
              className="mt-12 relative group/logo cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#044396]/15 blur-[120px] rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-1000 -z-10" />
              <img
                src="/logo-removebg-preview.png"
                alt="TalentMesh Symbol"
                className="w-84 h-84 md:w-126 md:h-126 object-contain filter grayscale opacity-20 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-1000 ease-in-out"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}