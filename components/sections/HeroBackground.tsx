'use client';

import React from 'react';
import { motion } from 'framer-motion';

import NeuralNetwork from '../ui/NeuralNetwork';

export default function HeroBackground() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="absolute inset-0 bg-white" />;
    }

    return (
        <div className="absolute inset-0 overflow-hidden select-none bg-white">

            {/* 1. Animated Grid (Base Layer) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none">
                <motion.div
                    animate={{ backgroundPosition: ["0px 0px", "24px 24px"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
                />
            </div>

            {/* 2. Interactive Neural Constellation */}
            <div className="absolute inset-0 opacity-60">
                <NeuralNetwork />
            </div>

            {/* 3. Breathing Neural Gradient */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.4, 0.6]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-[#044396]/10 via-[#709de9]/5 to-transparent rounded-full blur-[120px] mix-blend-multiply pointer-events-none"
            />

            {/* Optional: Very subtle secondary glow for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-[80px] mix-blend-multiply pointer-events-none" />
        </div>
    );
}
