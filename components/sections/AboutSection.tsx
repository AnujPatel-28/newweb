"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  Users,
  Lightning,
  CheckCircle,
  ArrowRight
} from "phosphor-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Precision Matching",
    description: "We don't just match keywords. We match culture, vision, and long-term potential.",
    icon: <Target size={24} weight="fill" className="text-[#044396]" />,
  },
  {
    title: "Human-Centric Approach",
    description: "Technology aids us, but humans drive us. We build relationships, not databases.",
    icon: <Users size={24} weight="fill" className="text-[#044396]" />,
  },
  {
    title: "Rapid Turnaround",
    description: "Time is money. Our agile process ensures you get top talent without the wait.",
    icon: <Lightning size={24} weight="fill" className="text-[#044396]" />,
  },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden relative">
      {/* Background Ambience - Lighter for Clean Theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Column: Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Blob behind image */}
            <div className="absolute -top-12 -left-12 w-96 h-96 bg-[#044396]/5 rounded-full filter blur-3xl" />

            {/* Main Image Container */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] border-8 border-white group">
              <div className="aspect-[4/5] bg-slate-50 relative">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="TalentMesh Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Floating Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-100 max-w-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-50 rounded-2xl">
                    <CheckCircle size={28} weight="fill" className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#044396] font-mono font-bold uppercase tracking-[0.2em]">Neural Verification</p>
                    <p className="text-lg font-bold font-mono text-slate-900 tracking-tight">Active Alignment</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#044396]/10 bg-[#044396]/5 text-[#044396] text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-10 backdrop-blur-sm">
                The Architecture
              </div>

              {/* Heading */}
              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
                Bridging <br />
                <span className="text-[#044396]">Potential.</span>
              </h2>

              <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium max-w-xl">
                We don't just fill roles. We engineer the neural connections between elite talent and game-changing visionaries.
              </p>
            </motion.div>

            {/* Feature List (Cards) */}
            <div className="space-y-6 mb-16">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex gap-6 items-center group p-6 rounded-[2rem] bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(4,67,150,0.08)] hover:border-blue-100 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#044396] transition-all duration-500 shadow-inner group-hover:shadow-lg">
                    <div className="text-[#044396] group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-[#044396] transition-colors">{item.title}</h4>
                    <p className="text-slate-500 mt-1 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-4 text-[#044396] font-bold font-mono text-sm uppercase tracking-[0.2em] group hover:text-blue-700 transition-colors"
            >
              System Overview
              <div className="w-12 h-0.5 bg-[#044396] group-hover:w-20 transition-all duration-500 group-hover:bg-blue-700" />
              <ArrowRight size={20} weight="bold" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;