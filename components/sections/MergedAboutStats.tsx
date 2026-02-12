'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Users, CheckCircle2, ArrowRight, Target, Zap, Award, Building2, Globe, Trophy } from 'lucide-react';
import { useInView } from 'framer-motion';

// --- CONFIGURATION ---

// Stats Data
const stats = [
    {
        id: 1,
        label: "Candidates Placed",
        value: 1200,
        suffix: "+",
        icon: <Users className="w-6 h-6 text-[#044396]" />,
    },
    {
        id: 2,
        label: "Partner Companies",
        value: 85,
        suffix: "+",
        icon: <Building2 className="w-6 h-6 text-[#044396]" />,
    },
    {
        id: 3,
        label: "Industries Served",
        value: 12,
        suffix: "",
        icon: <Globe className="w-6 h-6 text-[#044396]" />,
    },
    {
        id: 4,
        label: "Success Rate",
        value: 98,
        suffix: "%",
        icon: <Trophy className="w-6 h-6 text-[#044396]" />,
    }
];

// Counter Component
const Counter = ({ end, duration = 1200, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
    const [count, setCount] = React.useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(countRef, { once: true, amount: 0.5 });

    React.useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            const percentage = Math.min(progress / duration, 1);
            const easeOut = 1 - Math.pow(1 - percentage, 3);

            setCount(Math.floor(easeOut * end));

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return (
        <span ref={countRef} className="tabular-nums">
            {count}{suffix}
        </span>
    );
};


import GridPattern from '../ui/GridPattern';

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
    const op3 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [50, 0, 0, -50]);
    const scale3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0.9, 1.1, 1.1, 1.2]);
    // Main Title: Blue-300 -> White
    const col3 = useTransform(scrollYProgress, [0.65, 0.8], ["#267fe4ff", "#ffffff"]);


    // --- PHASE 2: CINEMATIC DISSOLVE (70% - 95%) ---
    // Instead of lifting like a curtain, we fade out while scaling up slightly
    // creating a feeling of moving *through* the blue layer.

    const overlayOpacity = useTransform(scrollYProgress, [0.75, 0.95], [1, 0]);
    const overlayScale = useTransform(scrollYProgress, [0.7, 0.95], [1, 1.2]); // Subtle zoom effect


    // --- PHASE 3: CONTENT REVEAL (80% - 100%) ---

    // 1. HEADER ANIMATION
    const headerOpacity = useTransform(scrollYProgress, [0.8, 0.9, 0.95], [0, 1, 1]);
    const headerTop = useTransform(scrollYProgress, [0.85, 0.95], ["40%", "12%"]); // Starts lower, ends high
    const headerY = useTransform(scrollYProgress, [0.85, 0.95], ["0%", "0%"]);
    const headerScale = useTransform(scrollYProgress, [0.85, 0.95], [0.9, 1]); // Scales up slightly

    // 2. BODY REVEAL
    const contentOpacity = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);
    const contentY = useTransform(scrollYProgress, [0.85, 0.95], [100, 0]); // Slides up from further down


    return (
        <section id="stats" ref={containerRef} className="relative h-[300vh] scroll-mt-24">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">

                {/* --- CONTENT LAYER (The "Result" underneath) --- */}
                <div className="absolute inset-0 z-8 overflow-hidden">
                    {/* Consistent Background Grid */}
                    <GridPattern opacity={0.3} />

                    <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">

                        {/* 1. STATS HEADER (Centered Initially) */}
                        <motion.div
                            style={{ opacity: headerOpacity, top: headerTop, scale: headerScale, x: "-50%", y: headerY }}
                            className="absolute left-1/2 w-full max-w-4xl text-center z-20 origin-top mt-10"
                        >
                            <h2 className="text-blue-600 font-mono font-bold tracking-widest uppercase text-xs mb-4">
                                // Proven Results
                            </h2>
                            <h3 className="text-4xl lg:text-7xl font-black text-slate-900 leading-tight">
                                Impact at  <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    Global Scale.
                                </span>
                            </h3>
                        </motion.div>

                        {/* 2. BODY CONTENT (Revealed Below) - STATS GRID */}
                        <motion.div
                            style={{ opacity: contentOpacity, y: contentY }}
                            className="absolute top-[35%] left-0 right-0 flex flex-col items-center justify-start pt-16 overflow-hidden"
                        >
                            <div className="max-w-7xl mx-auto px-4 w-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {stats.map((stat) => (
                                        <div key={stat.id} className="relative group p-8 rounded-3xl border border-slate-100 bg-white/50 backdrop-blur-sm hover:border-blue-200 hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-300 overflow-hidden">
                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            <div className="relative z-10 flex flex-col items-center">
                                                {/* Icon Bubble */}
                                                <div className="mb-6 bg-slate-50 p-4 rounded-2xl shadow-sm ring-1 ring-slate-100 group-hover:bg-[#044396] group-hover:ring-[#044396] transition-all duration-300">
                                                    {React.cloneElement(stat.icon as React.ReactElement, {
                                                        className: "w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300"
                                                    } as React.SVGProps<SVGSVGElement>)}
                                                </div>

                                                <div className="text-4xl md:text-5xl font-mono font-bold text-slate-900 tracking-tighter mb-3">
                                                    <Counter end={stat.value} suffix={stat.suffix} />
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <p className="text-slate-500 text-xs font-mono font-bold uppercase tracking-[0.2em] group-hover:text-[#044396] transition-colors">
                                                        {stat.label}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-20 text-center relative z-10">
                                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                                        Our numbers speak for themselves. We deliver consistent, high-quality results for startups and Fortune 500 companies alike.
                                    </p>
                                </div>
                            </div>

                        </motion.div>

                    </div>
                </div>


                {/* --- OVERLAY LAYER (The "Curtain" + Text Intro) --- */}
                {/* Anchored TOP. Height shrinks. Bottom Edge Rounds. Contains Intro Text Sequence. */}
                <motion.div
                    style={{ opacity: overlayOpacity, scale: overlayScale }}
                    className="absolute inset-0 z-20 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-200 flex items-center justify-center overflow-hidden shadow-[0_20px_60px_-15px_rgba(37,99,235,0.5)]"
                >
                    <div className="text-center px-4 relative w-full flex justify-center items-center h-full">

                        {/* Intro Text 1 */}
                        <motion.div
                            style={{ opacity: op1, y: y1, color: col1 }}
                            className="absolute w-full px-4"
                        >
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tight drop-shadow-2xl">
                                Beyond <motion.span style={{ color: col1Highlight }}>Resumes</motion.span>
                            </h2>
                        </motion.div>

                        {/* Intro Text 2 */}
                        <motion.div
                            style={{ opacity: op2, y: y2, color: col2 }}
                            className="absolute w-full px-4"
                        >
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tight drop-shadow-2xl">
                                Expert <motion.span style={{ color: col2Highlight }}>Placement</motion.span>
                            </h2>
                        </motion.div>

                        {/* Intro Text 3 (Final) */}
                        <motion.div
                            style={{ opacity: op3, y: y3, scale: scale3 }}
                            className="absolute flex flex-col items-center w-full px-4"
                        >
                            <motion.h2
                                style={{ color: col3 }}
                                className="text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl mt-12"
                            >
                                The Impact
                            </motion.h2>
                            <motion.p
                                style={{ color: col3 }}
                                className="text-lg md:text-xl font-light max-w-xl mx-auto drop-shadow-md px-4"
                            >
                                Scroll to uncover the results of our precision recruitment strategy.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Background Texture for Overlay - Internal CSS Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
}
