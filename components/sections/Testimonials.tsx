"use client";

import React from 'react';
import { Quotes, ChatCircleText } from 'phosphor-react';
import { motion } from "framer-motion";

import GridPattern from '../ui/GridPattern';

const testimonials = [
    {
        name: "Marcus Aurelius",
        role: "Architecture Lead // Employer",
        testimonial: "TalentMesh understood our cultural needs instantly. They found architects that weren't just skilled, but perfectly aligned with our vision.",
    },
    {
        name: "Lyra Belacqua",
        role: "DevOps Engineer // Candidate",
        testimonial: "They didn't just find me a job; they accelerated my trajectory with a firm that genuinely shares my mission and values.",
    },
    {
        name: "Soren Kierkegaard",
        role: "Ops Director // Employer",
        testimonial: "Removing the guesswork from scaling. Their vetted pipeline saved us months of screening time for our high-intensity team.",
    },
];

export default function TestimonialsSection() {

    return (
        <section
            id="testimonials"
            className="py-12 md:py-20 relative overflow-hidden min-h-screen flex flex-col justify-center bg-white scroll-mt-24"
        >
            {/* Background Ambience */}
            <GridPattern opacity={0.5} />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    className="mb-12 md:mb-20 max-w-5xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#044396]/10 bg-[#044396]/5 text-[#044396] text-[11px] font-mono font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-sm shadow-sm ring-1 ring-white/50">
                        <ChatCircleText size={18} weight="bold" className="animate-pulse" />
                        Success Stories
                    </div>

                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                        Client & Candidate <br />
                        <span className="text-[#044396]">Feedback.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-0 border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                    {testimonials.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.15,
                                duration: 1,
                                type: "spring",
                                stiffness: 50,
                                damping: 15
                            }}
                            viewport={{ once: true }}
                            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                            className="p-6 md:p-8 bg-white/60 backdrop-blur-sm border border-slate-100/50 hover:z-10 transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="mb-8 flex justify-between items-start">
                                    <Quotes size={48} weight="duotone" className="text-[#044396]/20 group-hover:text-[#044396] transition-colors duration-500" />
                                    <div className="flex gap-1.5 pt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover:bg-[#044396] transition-colors duration-500" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-slate-900 mb-8 text-base font-bold leading-relaxed tracking-tight group-hover:text-[#044396] transition-colors">
                                    &ldquo;{client.testimonial}&rdquo;
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-4 pt-8 border-t border-slate-100/50 group-hover:border-[#044396]/10 transition-colors">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#044396] font-bold text-xl shadow-sm border border-slate-100 group-hover:bg-[#044396] group-hover:text-white group-hover:scale-110 transition-all duration-500">
                                    {client.name[0]}
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900 tracking-tight leading-none mb-1">{client.name}</h3>
                                    <p className="text-[9px] font-bold font-mono text-[#044396] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">{client.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
