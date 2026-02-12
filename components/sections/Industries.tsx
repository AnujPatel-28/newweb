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
import GridPattern from "../ui/GridPattern";

const industries = [
  {
    title: "Software Engineering",
    description: "Firms: Sourcing elite developers. Talent: Accessing top-tier tech roles.",
    icon: <Code size={36} weight="duotone" className="text-[#044396]" />,
  },
  {
    title: "HealthTech & Bio",
    description: "Firms: Specialist acquisition. Talent: Bridging scientific innovations.",
    icon: <Heartbeat size={36} weight="duotone" className="text-[#044396]" />,
  },
  {
    title: "FinTech & Capital",
    description: "Firms: Staffing financial leaders. Talent: Scaling capital market careers.",
    icon: <Graph size={36} weight="duotone" className="text-[#044396]" />,
  },
  {
    title: "Robotics & Auto",
    description: "Firms: Connecting automation experts. Talent: Powering manufacturing giants.",
    icon: <Cpu size={36} weight="duotone" className="text-[#044396]" />,
  },
  {
    title: "Marketing & Growth",
    description: "Firms: Building brand teams. Talent: High-scale execution roles.",
    icon: <Megaphone size={36} weight="duotone" className="text-[#044396]" />,
  },
  {
    title: "Supply Chain",
    description: "Firms: Optimization experts. Talent: Directing global operations.",
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
      className="py-16 md:py-32 relative overflow-hidden min-h-screen flex flex-col justify-center bg-white scroll-mt-24"
      id="industries"
    >
      {/* Background Ambience */}
      <GridPattern opacity={0.5} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          className="text-center mb-20 md:mb-40"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#044396]/10 bg-[#044396]/5 text-[#044396] text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-sm shadow-sm ring-1 ring-white/50">
            <div className="h-2 w-2 rounded-full bg-[#044396] animate-pulse shadow-[0_0_10px_#044396]" />
            Practice Areas
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-slate-900 leading-tight tracking-tight">
            Strategic <br />
            <span className="text-[#044396]">Domains.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-slate-100 hover:border-blue-200 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(4,67,150,0.12)] overflow-hidden"
            >
              {/* Hover Glow Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-10 w-20 h-20 flex items-center justify-center bg-white border border-slate-100 rounded-[1.5rem] group-hover:bg-[#044396] transition-all duration-500 shadow-sm group-hover:shadow-blue-900/20 group-hover:scale-110">
                  <div className="text-[#044396] group-hover:text-white transition-colors duration-500">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-[#044396] transition-colors">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed text-base font-medium group-hover:text-slate-700 transition-colors">{item.description}</p>

                <div className="mt-8 flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.1em] text-[#044396] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span>Explore Sector</span>
                  <ArrowRight size={14} weight="bold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
