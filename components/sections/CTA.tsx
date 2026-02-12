"use client";

import React from 'react';
import { ArrowRight, Broadcast, RocketLaunch } from 'phosphor-react';
import { motion } from "framer-motion";

import GridPattern from '../ui/GridPattern';

export default function CTASection() {


    return (
        <section
            className="py-20 md:py-80 relative overflow-hidden bg-white flex items-center justify-center"
        >
            {/* Background Ambience */}
            <GridPattern opacity={0.5} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />


            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#044396]/10 bg-white text-[#044396] text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-12 shadow-2xl backdrop-blur-sm">
                        <Broadcast size={16} weight="bold" className="animate-pulse" />
                        Next Steps
                    </div>

                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-tight tracking-tight mb-16">
                        Scale Your <br />
                        <span className="text-[#044396]">Vision.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed mb-24">
                        Exceptional <span className="text-slate-900 font-bold">Candidates</span>. Visionary <span className="text-slate-900 font-bold">Partners</span>. <br className="hidden sm:block" /> One cohesive ecosystem.
                    </p>

                    <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
                        <motion.button
                            whileHover={{ y: -8, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center gap-6 bg-[#044396] px-14 py-7 rounded-2xl text-white font-black font-mono text-[13px] uppercase tracking-[0.3em] transition-all shadow-[0_30px_60px_rgba(4,67,150,0.3)] hover:shadow-none"
                        >
                            Start Hiring
                            <RocketLaunch size={24} weight="bold" className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                        </motion.button>

                        <motion.button
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-4 text-[#000000]/50 hover:text-[#044396] font-black font-mono text-sm uppercase tracking-[0.3em] transition-all"
                        >
                            Connect With Us
                            <ArrowRight size={20} weight="bold" />
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
