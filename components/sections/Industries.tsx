"use client";

import React from "react";
import {
  Code,
  Heartbeat,
  Graph,
  Cpu,
  Megaphone,
  ShoppingCart,
  ArrowRight
} from "phosphor-react";
import { motion, Variants } from "framer-motion";

const industries = [
  {
    title: "Software Intelligence",
    description: "Firms: Sourcing elite engineers. Talent: Accessing AI-native career paths.",
    icon: <Code size={36} weight="duotone" className="text-[#044396]" />,
  },
  {
    title: "BioHealth Tech",
    description: "Firms: Specialist acquisition. Talent: Bridging Breakthrough innovations.",
    icon: <Heartbeat size={36} weight="duotone" className="text-[#044396]" />,
  },
  {
    title: "Venture Finance",
    description: "Firms: Staffing fintech leaders. Talent: Scaling capital market careers.",
    icon: <Graph size={36} weight="duotone" className="text-[#044396]" />,
  },
  {
    title: "Neural Robotics",
    description: "Firms: Connecting automation experts. Talent: Powering manufacturing giants.",
    icon: <Cpu size={36} weight="duotone" className="text-[#044396]" />,
  },
  {
    title: "Cognitive Growth",
    description: "Firms: AI-driven branding teams. Talent: High-scale execution roles.",
    icon: <Megaphone size={36} weight="duotone" className="text-[#044396]" />,
  },
  {
    title: "Global Commerce",
    description: "Firms: Lead supply chain optimization. Talent: Directing retail operations.",
    icon: <ShoppingCart size={36} weight="duotone" className="text-[#044396]" />,
  },
];

const IndustriesSection = () => {


  const headerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "circOut" }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    })
  };

  return (
    <section
      className="py-32 relative overflow-hidden min-h-screen flex flex-col justify-center bg-white scroll-mt-24"
      id="industries"
    >

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          className="text-center mb-40"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#044396]/10 bg-[#044396]/5 text-[#044396] text-[11px] font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-sm">
            <div className="h-2 w-2 rounded-full bg-[#044396] animate-pulse" />
            Industry Alignment
          </div>

          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 leading-tight tracking-tight">
            Strategic <br />
            <span className="text-[#044396]">Domains.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-[3rem] p-12 border border-zinc-100 hover:border-[#044396]/20 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(4,67,150,0.08)]"
            >
              <div className="mb-10 w-24 h-24 flex items-center justify-center bg-[#f8fafc] rounded-[2rem] group-hover:bg-[#044396] transition-all duration-500 shadow-inner">
                <div className="group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {item.icon}
                </div>
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight group-hover:text-[#044396] transition-colors">{item.title}</h4>
              <p className="text-slate-700 leading-relaxed text-base font-medium group-hover:text-slate-800 transition-colors">{item.description}</p>

              <motion.div
                className="absolute bottom-10 right-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0"
              >
                <ArrowRight size={24} weight="bold" className="text-[#044396]" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
