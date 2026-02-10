'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Cube, Wind, Cpu, ShieldCheck } from 'phosphor-react';

export default function PoweredBy() {
    return (
        <section className="relative w-full bg-white py-48 text-[#000000] overflow-hidden">
            <div className="container relative z-10 mx-auto px-6">

                {/* HEADER */}
                <div className="mb-32 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#044396]/10 bg-[#044396]/5 text-[#044396] text-[11px] font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-sm shadow-2xl">
                        <Cpu size={18} weight="bold" className="animate-pulse" />
                        Infrastructure Layer
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tight leading-tight"
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
                    <div className="relative z-20 grid w-full max-w-7xl grid-cols-1 gap-12 md:grid-cols-3 pt-24">

                        <FeatureCard
                            icon={<Atom size={48} weight="duotone" />}
                            title="Neural React"
                            description="Leveraging the latest Server Component architectures to deliver high-performance, real-time recruiting interfaces with precision hooks."
                            delay={0.2}
                        />

                        <FeatureCard
                            icon={<Cube size={48} weight="duotone" />}
                            title="Logic Rust"
                            description="Infrastructure compiled with Rust-based tooling for extreme reliability, ensuring your hiring pipelines never stall under load."
                            delay={0.4}
                        />

                        <FeatureCard
                            icon={<Wind size={48} weight="duotone" />}
                            title="Velocity Engine"
                            description="Optimized routing and autonomous caching layers that reduce latency to near-zero, enabling instant candidate matching across global nodes."
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
            <div className="absolute inset-0 rounded-full bg-[#044396]/10 blur-[80px]" />

            {/* The Chip Body */}
            <div className="relative h-28 w-80 rounded-[3rem] border border-zinc-100 bg-white shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-3xl">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="relative z-10 flex items-center gap-5">
                    <div className="h-3 w-3 rounded-full bg-[#044396] animate-ping" />
                    <span className="text-2xl font-bold text-slate-900 tracking-tight">Core Engine</span>
                </div>
                {/* Pins */}
                <div className="absolute -left-1 top-1/2 h-12 w-2.5 -translate-y-1/2 bg-[#044396]/20 rounded-r-full" />
                <div className="absolute -right-1 top-1/2 h-12 w-2.5 -translate-y-1/2 bg-[#044396]/20 rounded-l-full" />
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
            className="group relative rounded-[4rem] border border-zinc-100 bg-white p-14 shadow-2xl hover:shadow-[0_50px_100px_rgba(4,67,150,0.1)] transition-all duration-700"
        >
            <div className="relative z-10 text-center flex flex-col items-center">
                <div className="mb-10 w-24 h-24 flex items-center justify-center bg-zinc-50 rounded-[2rem] group-hover:bg-[#044396] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-inner">
                    {icon}
                </div>
                <h3 className="mb-6 text-2xl font-bold text-slate-900 group-hover:text-[#044396] transition-colors">{title}</h3>
                <p className="text-slate-500 font-medium text-base leading-relaxed group-hover:text-slate-800 transition-colors">
                    {description}
                </p>
            </div>
            <div className="absolute top-10 right-10">
                <ShieldCheck size={24} weight="bold" className="text-zinc-100 group-hover:text-[#044396]/20 transition-all" />
            </div>
        </motion.div>
    );
}
