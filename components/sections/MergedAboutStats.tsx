'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Users, CheckCircle2, ArrowRight, Target, Zap, Award } from 'lucide-react';

// --- CONFIGURATION ---

// About Features
const features = [
    {
        title: "Precision Matching",
        description: "We don't just match keywords. We match culture, vision, and long-term potential.",
        icon: <Target className="w-5 h-5 text-blue-600" />,
    },
    {
        title: "Human-Centric Approach",
        description: "Technology aids us, but humans drive us. We build relationships, not databases.",
        icon: <Users className="w-5 h-5 text-blue-600" />,
    },
    {
        title: "Rapid Turnaround",
        description: "Time is money. Our agile process ensures you get top talent without the wait.",
        icon: <Zap className="w-5 h-5 text-blue-600" />,
    },
    {
        title: "AI-Powered Insights",
        description: "Leveraging data to predict success and retention rates before hiring.",
        icon: <Award className="w-5 h-5 text-blue-600" />,
    }
];


// --- MAIN COMPONENT ---
export default function MergedAboutStats() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Animation: "SuperGlowUp Style Sequence -> Rising Curtain -> Reveal Header"

    // --- PHASE 1: TEXT SEQUENCE (0% - 70%) ---
    // Smoother, Slower Transitions with HOLD phases

    // 1. TEXT 1 ("Beyond Resumes")
    const op1 = useTransform(scrollYProgress, [0.05, 0.15, 0.2, 0.25], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.05, 0.15, 0.2, 0.25], [50, 0, 0, -50]);
    // Base Text: Blue-300 -> White
    const col1 = useTransform(scrollYProgress, [0.1, 0.2], ["#267fe4ff", "#ffffff"]);
    // Highlight: White -> Blue-200
    const col1Highlight = useTransform(scrollYProgress, [0.1, 0.2], ["#ffffff", "#bfdbfe"]);

    // 2. TEXT 2 ("Beyond Algorithms")
    const op2 = useTransform(scrollYProgress, [0.3, 0.4, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.3, 0.4, 0.45, 0.55], [50, 0, 0, -50]);
    // Base Text: Blue-300 -> White
    const col2 = useTransform(scrollYProgress, [0.35, 0.45], ["#267fe4ff", "#ffffff"]);
    // Highlight: White -> Blue-200
    const col2Highlight = useTransform(scrollYProgress, [0.35, 0.45], ["#ffffff", "#bfdbfe"]);

    // 3. TEXT 3 ("The Impact")
    // Holds longer while curtain lifts
    const op3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [50, 0, 0, -50]);
    const scale3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0.9, 1.1, 1.1, 1.2]);
    // Main Title: Blue-300 -> White
    const col3 = useTransform(scrollYProgress, [0.65, 0.8], ["#267fe4ff", "#ffffff"]);


    // --- PHASE 2: CURTAIN LIFT (70% - 90%) ---
    // Delayed to allow text reading
    const overlayHeight = useTransform(scrollYProgress, [0.7, 0.9], ["100%", "0%"]);
    const overlayRound = useTransform(scrollYProgress, [0.7, 0.9], ["0% 0% 0 0", "0 0 50% 50%"]);
    const overlayOpacity = useTransform(scrollYProgress, [0.8, 0.95], [1, 0]);


    // --- PHASE 3: CONTENT REVEAL (80% - 100%) ---

    // 1. HEADER ANIMATION (Slowed down for better visibility)
    const headerOpacity = useTransform(scrollYProgress, [0.7, 0.9, 0.95], [0, 1, 1]);
    const headerTop = useTransform(scrollYProgress, [0.85, 0.95], ["50%", "0%"]);
    const headerScale = useTransform(scrollYProgress, [0.85, 0.95], [1, 0.7]);

    // 2. BODY REVEAL (Slowed down for better visibility)
    const contentOpacity = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);
    const contentY = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);


    return (
        <section id="about" ref={containerRef} className="relative h-[300vh] scroll-mt-24">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-slate">

                {/* --- CONTENT LAYER (The "Result" underneath) --- */}
                <div className="absolute inset-0 z-8 overflow-hidden">
                    <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* 1. ABOUT HEADER (Centered Initially) */}
                        <motion.div
                            style={{ opacity: headerOpacity, top: headerTop, scale: headerScale, x: "-50%", y: "-50%" }}
                            className="absolute left-1/2 w-full max-w-4xl text-center z-20 origin-top mt-20"
                        >
                            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
                                Unlike Any Other Agency
                            </h2>
                            <h3 className="text-4xl lg:text-7xl font-black text-slate-900 leading-tight">
                                We Don&apos;t Just Fill Seats. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    We Build Legacies.
                                </span>
                            </h3>
                        </motion.div>

                        {/* 2. BODY CONTENT (Revealed Below) */}
                        <motion.div
                            style={{ opacity: contentOpacity, y: contentY }}
                            className="absolute top-[15%] left-0 right-0 flex flex-col justify-start pt-2 overflow-hidden mt-15"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto px-4">
                                {/* Left: Text Details */}
                                <div className="order-2 lg:order-1 text-left">
                                    <p className="text-base text-slate-600 mb-4 leading-relaxed">
                                        Traditional recruiting is broken. We replaced the guessing game with data-driven precision and human intuition.
                                        Our AI-powered engine analyzes millions of data points to find the perfect cultural and technical fit,
                                        ensuring long-term success for both candidates and companies.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                        {features.map((feature, idx) => (
                                            <div key={idx} className="flex gap-3">
                                                <div className="mt-1 flex-shrink-0 w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                                    {feature.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-sm">{feature.title}</h4>
                                                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="group bg-slate-900 text-white px-8 py-2.5 rounded-full font-bold hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/25">
                                        Read Our Manifesto
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                {/* Right: Image */}
                                <div className="relative order-1 lg:order-2">
                                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white z-10">
                                        <div className="aspect-[16/9] bg-slate-200 relative">
                                            <Image
                                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                                alt="TalentMesh Team"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Floating Badge */}
                                    <div className="absolute bottom-6 right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 z-20">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-400 uppercase">Status</p>
                                            <p className="text-sm font-bold text-slate-900">Verified Partner</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                    </div>
                </div>


                {/* --- OVERLAY LAYER (The "Curtain" + Text Intro) --- */}
                {/* Anchored TOP. Height shrinks. Bottom Edge Rounds. Contains Intro Text Sequence. */}
                <motion.div
                    style={{ height: overlayHeight, opacity: overlayOpacity, borderRadius: overlayRound }}
                    className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-200 flex items-center justify-center overflow-hidden shadow-[0_20px_60px_-15px_rgba(37,99,235,0.5)]"
                >
                    <div className="text-center px-4 relative w-full flex justify-center items-center h-full">

                        {/* Intro Text 1 */}
                        <motion.div
                            style={{ opacity: op1, y: y1, color: col1 }}
                            className="absolute"
                        >
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-2xl">
                                Beyond <motion.span style={{ color: col1Highlight }}>Resumes</motion.span>
                            </h2>
                        </motion.div>

                        {/* Intro Text 2 */}
                        <motion.div
                            style={{ opacity: op2, y: y2, color: col2 }}
                            className="absolute"
                        >
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-2xl">
                                Beyond <motion.span style={{ color: col2Highlight }}>Algorithms</motion.span>
                            </h2>
                        </motion.div>

                        {/* Intro Text 3 (Final) */}
                        <motion.div
                            style={{ opacity: op3, y: y3, scale: scale3 }}
                            className="absolute flex flex-col items-center"
                        >
                            <motion.h2
                                style={{ color: col3 }}
                                className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl mt-12"
                            >
                                The Impact
                            </motion.h2>
                            <motion.p
                                style={{ color: col3 }}
                                className="text-lg md:text-xl font-light max-w-xl mx-auto drop-shadow-md"
                            >
                                Scroll to uncover the numbers behind our success and the philosophy that drives us forward.
                            </motion.p>
                        </motion.div>

                    </div>

                    {/* Background Texture for Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
}
