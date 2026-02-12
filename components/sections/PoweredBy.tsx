'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Cube, Wind, Cpu, ShieldCheck } from 'phosphor-react';

import GridPattern from '../ui/GridPattern';

export default function PoweredBy() {
    return (
        <section className="relative w-full bg-white py-16 md:py-32 text-[#000000] overflow-hidden">
            <GridPattern opacity={0.5} />
            <div className="container relative z-10 mx-auto px-6">

                {/* HEADER */}
                <div className="mb-20 md:mb-32 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#044396]/10 bg-[#044396]/5 text-[#044396] text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-sm shadow-2xl">
                        <Cpu size={18} weight="bold" className="animate-pulse" />
                        Infrastructure Layer
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="text-4xl sm:text-6xl md:text-8xl font-bold text-slate-900 tracking-tight leading-tight"
                    >
                        Built on <br />
                        <span className="text-[#044396]">Elite Stacks.</span>
                    </motion.h2>
                </div>

                {/* MAIN CONTENT AREA */}
                <div className="relative flex flex-col items-center">

                    {/* 1. CENTRAL UNIT */}
                    <div className="relative z-20 mb-20">
                        <Chip />
                    </div>

                    {/* 2. CARDS GRID */}
                    <div className="relative z-20 grid w-full max-w-7xl grid-cols-1 gap-8 md:gap-12 md:grid-cols-3 pt-12 md:pt-24">

                        <FeatureCard
                            icon={<Atom size={48} weight="duotone" />}
                            title="Strategic Sourcing"
                            description="The cornerstone of high-performance teams. Talent Mesh identifies top-tier talent through a global network, focusing on deep technical expertise and long-term cultural alignment."
                            delay={0.2}
                        />

                        <FeatureCard
                            icon={<Cube size={48} weight="duotone" />}
                            title="Intelligent Matching"
                            description="A data-driven vetting process optimized for speed and accuracy. We utilize advanced assessment frameworks to filter for the highest caliber of candidates, integrated into your specific workflow."
                            delay={0.4}
                        />

                        <FeatureCard
                            icon={<Wind size={48} weight="duotone" />}
                            title="High-Velocity Placement"
                            description="An agile recruitment platform for the next generation of business growth. Our streamlined methodology ensures rapid talent acquisition and seamless onboarding for specialized roles."
                            delay={0.6}
                        />

                    </div>

                </div>
            </div>
        </section>
    );
}

function Chip() {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative flex items-center justify-center p-12"
        >
            {/* Glow behind chip */}
            <div className="absolute inset-0 rounded-full bg-[#044396]/15 blur-[80px]" />

            {/* The Chip Body - ENHANCED */}
            <div className="relative h-32 w-80 md:w-96 rounded-[3rem] border border-[#044396]/20 bg-white/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(4,67,150,0.15)] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#044396_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 flex items-center gap-5 px-8">
                    <div className="h-4 w-4 rounded-full bg-[#044396] shadow-[0_0_15px_rgba(4,67,150,0.5)] animate-pulse" />
                    <span className="text-xl md:text-2xl font-black font-mono text-[#044396] tracking-tight uppercase">Talent Framework</span>
                </div>

                {/* Tech Accents */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#044396]/30 rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#044396]/30 rounded-full" />

                {/* Pins */}
                <div className="absolute -left-1 top-1/2 h-12 w-3 -translate-y-1/2 bg-gradient-to-r from-[#044396] to-transparent rounded-r-full" />
                <div className="absolute -right-1 top-1/2 h-12 w-3 -translate-y-1/2 bg-gradient-to-l from-[#044396] to-transparent rounded-l-full" />
            </div>
        </motion.div>
    );
}



function FeatureCard({
    icon, title, description, delay
}: {
    icon: React.ReactNode,
    title: string,
    description: string,
    delay: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                delay,
                type: "spring",
                stiffness: 50,
                damping: 15
            }}
            whileHover={{ y: -15 }}
            className="group relative rounded-[3rem] border border-zinc-100 bg-gradient-to-br from-white to-zinc-50/50 p-8 md:p-14 shadow-[0_20px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(4,67,150,0.12)] transition-all duration-500 hover:border-[#044396]/30 overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#044396] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <div className="relative z-10 text-center flex flex-col items-center">
                <div className="mb-10 w-24 h-24 flex items-center justify-center bg-white border border-zinc-100 rounded-[2rem] group-hover:bg-[#044396] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-blue-900/20 text-[#044396]">
                    {icon}
                </div>
                <h3 className="mb-6 text-2xl font-bold text-slate-900 group-hover:text-[#044396] transition-colors tracking-tight">{title}</h3>
                <p className="text-slate-600 font-medium text-base leading-relaxed group-hover:text-slate-800 transition-colors">
                    {description}
                </p>
            </div>
            <div className="absolute top-8 right-8">
                <ShieldCheck size={24} weight="bold" className="text-zinc-200 group-hover:text-[#044396]/30 transition-all" />
            </div>
        </motion.div>
    );
}