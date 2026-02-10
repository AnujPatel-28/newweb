"use client";

import React from 'react';
import { Quotes, ChatCircleText } from 'phosphor-react';
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Marcus Aurelius",
        role: "Architecture Lead // Firm Perspective",
        testimonial: "The precision of their neural matching engine is unmatched. We found architects that simply didn't exist in traditional databases.",
    },
    {
        name: "Lyra Belacqua",
        role: "DevOps Engineer // Talent Perspective",
        testimonial: "TalentMesh didn't just find me a job; they accelerated my trajectory with a firm that aligns perfectly with my mission.",
    },
    {
        name: "Soren Kierkegaard",
        role: "Ops Director // Firm Perspective",
        testimonial: "TalentMesh removed the guesswork from scaling. The autonomous synchronization is scary accurate for our high-intensity team.",
    },
];

export default function TestimonialsSection() {



    return (
        <section
            id="testimonials"
            className="py-32 relative overflow-hidden min-h-screen flex flex-col justify-center bg-white scroll-mt-24"
        >

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    className="mb-40 max-w-5xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#044396]/10 bg-white text-[#044396] text-[11px] font-bold uppercase tracking-[0.2em] mb-12 shadow-2xl backdrop-blur-sm">
                        <ChatCircleText size={18} weight="bold" className="animate-pulse" />
                        Neural Consensus
                    </div>

                    <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 leading-tight tracking-tight">
                        Network <br />
                        <span className="text-[#044396]">Feedback.</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10">
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
                            whileHover={{ y: -15 }}
                            className="p-14 bg-white rounded-[3.5rem] border border-zinc-100 shadow-[0_30px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_50px_100px_rgba(4,67,150,0.08)] transition-all duration-700 group flex flex-col justify-between h-full"
                        >
                            <div>
                                <div className="mb-12 flex justify-between items-start">
                                    <Quotes size={48} weight="duotone" className="text-[#044396]/20 group-hover:text-[#044396] transition-colors duration-500" />
                                    <div className="flex gap-1.5 pt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover:bg-[#044396] transition-colors duration-500" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-slate-900 mb-16 text-2xl font-bold leading-relaxed tracking-tight group-hover:text-[#044396] transition-colors">
                                    &ldquo;{client.testimonial}&rdquo;
                                </p>
                            </div>

                            <div className="flex items-center gap-6 pt-12 border-t border-zinc-100">
                                <div className="w-20 h-20 rounded-[2rem] bg-zinc-50 flex items-center justify-center text-[#044396] font-bold text-3xl shadow-inner group-hover:bg-[#044396] group-hover:text-white transition-all duration-500">
                                    {client.name[0]}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-none mb-2">{client.name}</h3>
                                    <p className="text-[10px] font-bold text-[#044396]/40 uppercase tracking-[0.2em]">{client.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
