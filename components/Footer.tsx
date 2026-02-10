"use client";

import React from "react";
import Link from "next/link";
import {
    InstagramLogo,
    LinkedinLogo,
    TwitterLogo,
    GithubLogo,
    ArrowRight,
    Brain,
    Globe,
    Envelope,
    Sparkle
} from "phosphor-react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Mouse tracking for the glow effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const footerLinks = [
        {
            title: "Solutions",
            links: [
                { name: "Pulse Protocol", href: "#how-it-works" },
                { name: "Industry Nodes", href: "#industries" },
                { name: "The Hero Path", href: "#hero" },
            ],
        },
        {
            title: "Ecosystem",
            links: [
                { name: "Consensus Hub", href: "#testimonials" },
                { name: "Neural Insights", href: "#insights" },
                { name: "Alignment Origin", href: "#about" },
            ],
        },
        {
            title: "Navigation",
            links: [
                { name: "Contact Terminal", href: "#contact" },
                { name: "Mission Control", href: "#hero" },
                { name: "Privacy Protocol", href: "#" },
            ],
        },
    ];

    return (
        <footer
            className="relative bg-white pt-40 pb-16 overflow-hidden border-t border-zinc-100 group/footer"
            onMouseMove={handleMouseMove}
        >
            {/* Interactive Neural Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#044396 1px, transparent 1px), linear-gradient(90deg, #044396 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            {/* Mouse Whisper Glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover/footer:opacity-100 transition-opacity duration-500 z-0"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(4, 67, 150, 0.08), transparent 40%)`
                    )
                }}
            />

            {/* Animated Gradient Orbs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

                {/* Upper Section: Big Brand & CTA */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="#hero"
                            className="flex items-center gap-4 group mb-16"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <div className="relative h-24 w-auto">
                                <img
                                    src="/TalentMesh_Logo-removebg-preview.png"
                                    alt="TalentMesh Solutions"
                                    className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </Link>

                        <h3 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-16">
                            The Neural Bridge <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#044396] to-slate-400">Between Ambition</span> <br />
                            and Innovation.
                        </h3>

                        <div className="flex flex-col sm:flex-row gap-8 items-start">
                            <div className="space-y-4">
                                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Global Synchronization</p>
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden relative shadow-lg">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="AI Node" className="object-cover w-full h-full" />
                                        </div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-900 flex items-center justify-center text-white text-[10px] font-black shadow-lg">
                                        +2.4k
                                    </div>
                                </div>
                            </div>
                            <div className="h-20 w-px bg-slate-100 hidden sm:block mx-4" />
                            <div className="space-y-4">
                                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Network Health</p>
                                <div className="flex items-center gap-3 bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-3">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                                    <span className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">99.9% Up-time</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-zinc-50/50 backdrop-blur-3xl rounded-[4rem] p-12 lg:p-20 border border-zinc-100 flex flex-col justify-center gap-12 relative overflow-hidden group/cta shadow-[0_40px_100px_rgba(0,0,0,0.03)]"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#044396]/5 blur-3xl rounded-full" />

                        <div className="space-y-6 relative z-10">
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white border border-zinc-100 text-[#044396] text-[10px] font-black uppercase tracking-widest shadow-sm">
                                <Sparkle weight="fill" />
                                Join the Network
                            </div>
                            <h4 className="text-4xl font-bold text-slate-900 leading-tight">Ready to synchronize <br /> your career path?</h4>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="relative">
                                <Envelope className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="email"
                                    placeholder="your-neural-endpoint@link.ai"
                                    className="w-full bg-white rounded-3xl py-7 pl-16 pr-8 text-sm font-bold border border-zinc-100 outline-none focus:border-[#044396] transition-all shadow-sm"
                                />
                            </div>
                            <button className="w-full bg-slate-900 text-white py-7 rounded-3xl text-[11px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#044396] transition-all shadow-xl hover:shadow-[#044396]/20">
                                Initialize Connection
                                <ArrowRight weight="bold" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Middle Section: Bento Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-40">
                    <div className="lg:col-span-1 space-y-12 order-last lg:order-first mt-12 lg:mt-0">
                        <div className="flex items-center gap-4">
                            {[InstagramLogo, LinkedinLogo, TwitterLogo, GithubLogo].map((Icon, idx) => (
                                <Link key={idx} href="#" className="w-14 h-14 flex items-center justify-center bg-zinc-50 rounded-2xl text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-500 hover:-translate-y-2 border border-zinc-100 shadow-sm">
                                    <Icon size={24} weight="bold" />
                                </Link>
                            ))}
                        </div>
                        <p className="text-base text-slate-500 leading-relaxed font-medium max-w-xs">
                            The first AI-native recruitment protocol designed for the high-performance alignment economy.
                        </p>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-10">
                            <h5 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] flex items-center gap-4">
                                <span className="w-2 h-2 rounded-full bg-[#044396]" />
                                {section.title}
                            </h5>
                            <ul className="space-y-6">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-lg font-bold text-slate-500 hover:text-[#044396] transition-all duration-300 flex items-center group/link"
                                        >
                                            <span className="w-4 h-px bg-zinc-200 mr-4 group-hover/link:bg-[#044396] group-hover/link:w-8 transition-all" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section: Dashboard Meta */}
                <div className="pt-16 border-t border-zinc-100 flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex items-center gap-4 bg-zinc-50 px-6 py-2.5 rounded-full border border-zinc-100">
                            <div className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            </div>
                            <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Protocol v8.2.4 Active</span>
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            &copy; {currentYear} TalentMesh Autonomous Systems
                        </p>
                    </div>

                    <div className="flex items-center gap-10">
                        {["Mission Control", "Data Ethics", "Neural Terminal"].map((item) => (
                            <Link key={item} href="#" className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-slate-900 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                        <div className="flex items-center gap-3 ml-4 bg-zinc-50 px-5 py-2.5 rounded-full border border-zinc-100 shadow-inner">
                            <Globe size={16} className="text-[#044396]" />
                            <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Global Node</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
