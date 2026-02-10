"use client";

import React, { useRef } from 'react';
import {
  Database,
  BookOpen,
  Cloud,
  Globe,
  GithubLogo,
  Code,
  Cube,
  HardDrive,
  Lightning,
  CaretRight
} from 'phosphor-react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const INTEGRATIONS = [
  { icon: Database, label: "Neural DB" },
  { icon: BookOpen, label: "Knowledge" },
  { icon: Cloud, label: "Core Cloud" },
  { icon: Globe, label: "Distribution" },
  { icon: GithubLogo, label: "Source" },
  { icon: Code, label: "Intelligence" },
  { icon: Cube, label: "Execution" },
  { icon: HardDrive, label: "Persistence" },
];

const RADIUS = 250;

export default function IntegrationsSection() {
  const { scrollYProgress } = useScroll();



  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const springRotate = useSpring(rotate, { stiffness: 40, damping: 20 });

  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden py-32 min-h-screen flex items-center bg-white scroll-mt-24"
    >

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 items-center gap-32 lg:grid-cols-2">

          {/* LEFT: Abstract Orbit Hub */}
          <div className="relative flex h-[700px] w-full items-center justify-center lg:order-last">
            <motion.div
              style={{ rotate: springRotate }}
              className="relative h-full w-full flex items-center justify-center"
            >
              <IntegrationGraph />
            </motion.div>

            {/* Focal Point Glow */}
            <div className="absolute w-[500px] h-[500px] bg-[#044396]/5 rounded-full blur-[120px] animate-pulse" />
          </div>

          {/* RIGHT: Modern Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#044396]/10 bg-[#044396]/5 text-[#044396] text-[11px] font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-sm">
              <Lightning size={16} weight="fill" className="animate-pulse" />
              Pulse Protocol
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-tight mb-12">
              Neural <br />
              <span className="text-[#044396]">Orchestration</span> <br />
              System.
            </h2>

            <p className="max-w-2xl text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-20">
              A unified intelligence ecosystem bridging the entire lifecycle. We orchestrate complex workflows for <span className="text-slate-900 font-bold underline decoration-[#044396] decoration-4 underline-offset-8">Talent Sourcing</span> & <span className="text-slate-900 font-bold underline decoration-[#044396] decoration-4 underline-offset-8">Career Trajectories</span>.
            </p>

            <motion.button
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-14 py-7 rounded-3xl bg-[#000000] text-white font-black text-xs uppercase tracking-[0.3em] transition-all shadow-2xl hover:bg-[#044396] flex items-center gap-4"
            >
              Analyze Architecture
              <CaretRight size={18} weight="bold" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const IntegrationGraph = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center pointer-events-none">
      {/* Central Identity */}
      <div className="relative z-20 flex h-48 w-48 items-center justify-center rounded-[4rem] bg-white text-[#044396] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-zinc-100">
        <img
          src="/TalentMesh_Logo-removebg-preview.png"
          alt="TalentMesh Hub"
          className="w-32 h-auto object-contain relative z-20"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -inset-8 bg-[#044396] blur-3xl rounded-full -z-10"
        />
      </div>

      {/* Orbitings */}
      {INTEGRATIONS.map((item, i) => {
        const angle = (i * 360) / INTEGRATIONS.length;
        const x = RADIUS * Math.cos((angle * Math.PI) / 180);
        const y = RADIUS * Math.sin((angle * Math.PI) / 180);

        return (
          <React.Fragment key={i}>
            {/* Connector Beam */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: RADIUS }}
              transition={{ delay: 0.5 + i * 0.1, duration: 1.5 }}
              className="absolute h-[2px] bg-gradient-to-r from-[#044396]/20 via-[#044396]/5 to-transparent origin-left left-1/2 top-1/2"
              style={{ rotate: angle }}
            />

            {/* Floating Node */}
            <motion.div
              className="absolute z-20 flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-[2rem] border border-zinc-50 bg-white shadow-2xl"
              style={{ x: x, y: y }}
              animate={{
                rotate: [0, -720], // Counter-rotation
                y: [y - 15, y + 15, y - 15]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
              }}
            >
              <item.icon size={32} weight="duotone" className="text-[#044396]" />
              <span className="text-[8px] font-black uppercase text-zinc-300 tracking-tighter">{item.label}</span>
            </motion.div>
          </React.Fragment>
        );
      })}
    </div>
  );
};