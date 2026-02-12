"use client";

import React from "react";
import {
  Code,
  FirstAid,
  ChartLineUp,
  Cpu,
  Megaphone,
  ShoppingCart,
  ArrowRight,
  Sparkle
} from "phosphor-react";
import { motion } from "framer-motion";

const industries = [
  {
    title: "IT & Software",
    description: "Sourcing elite DevOps, Full-Stack, and AI engineers for next-gen platforms.",
    icon: <Code size={32} weight="duotone" />,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Healthcare",
    description: "Connecting specialized medical professionals with top-tier institutions.",
    icon: <FirstAid size={32} weight="duotone" />,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Fintech",
    description: "Quantitative analysts and blockchain experts for the future of finance.",
    icon: <ChartLineUp size={32} weight="duotone" />,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Engineering",
    description: "Technical staffing for robotics, civil, and aerospace verticals.",
    icon: <Cpu size={32} weight="duotone" />,
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Marketing",
    description: "Data-driven marketers and creative directors who scale brands.",
    icon: <Megaphone size={32} weight="duotone" />,
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "E-commerce",
    description: "Logistics and supply chain management for the digital retail age.",
    icon: <ShoppingCart size={32} weight="duotone" />,
    gradient: "from-cyan-500 to-blue-600",
  },
];

const Industries2 = () => {
  return (
    <section className="py-64 bg-[#0a0a0b] relative overflow-hidden" id="industries-2">

      {/* Background Gradients (Subtle Glows) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#044396]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-32 md:flex md:justify-between md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-white/5 bg-white/5 text-white text-[11px] font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-sm">
              <Sparkle size={18} weight="bold" className="text-[#044396] animate-pulse" />
              Core Sectors
            </div>
            <h3 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
              Specialized <br />
              <span className="text-[#044396]">Talent Nodes.</span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:block text-zinc-500 max-w-sm text-lg font-medium leading-relaxed text-right"
          >
            We don't generalize. We specialize. Deep expertise in the fields that matter most.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/[0.05] hover:border-[#044396]/30 transition-all duration-500 overflow-hidden"
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${industry.gradient}`}
              />

              <div className="relative z-10">
                {/* Icon Box */}
                <div className={`w-20 h-20 rounded-[1.8rem] flex items-center justify-center mb-10 bg-[#111112] border border-white/5 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-white group-hover:text-[#044396] transition-colors duration-500">
                    {industry.icon}
                  </div>
                </div>

                <h4 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-[#044396] transition-all">
                  {industry.title}
                </h4>

                <p className="text-zinc-500 text-lg leading-relaxed mb-10 group-hover:text-zinc-300 transition-colors font-medium">
                  {industry.description}
                </p>

                {/* Arrow Link */}
                <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white transition-colors cursor-pointer">
                  <span>Explore Protocol</span>
                  <ArrowRight size={18} weight="bold" className="group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries2;