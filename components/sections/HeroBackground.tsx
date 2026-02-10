'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBackground() {
    const [mounted, setMounted] = React.useState(false);
    const [positions, setPositions] = React.useState<{ top: string; left: string }[]>([]);

    React.useEffect(() => {
        setMounted(true);
        const newPositions = [...Array(12)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
        }));
        setPositions(newPositions);
    }, []);

    if (!mounted) {
        return <div className="absolute inset-0 bg-white" />;
    }

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-white">
            {/* Primary Neural Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-[#044396]/10 via-[#709de9]/5 to-transparent rounded-full blur-[120px] mix-blend-multiply opacity-60" />

            {/* Abstract Grid Path - High Tech Texture */}
            <div className="absolute inset-0 z-[1] opacity-[0.03]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#044396_1px,transparent_1px),linear-gradient(to_bottom,#044396_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            {/* Floating Neural Nodes */}
            {positions.map((pos, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                    }}
                    className="absolute w-2 h-2 bg-[#044396] rounded-full blur-[1px]"
                    style={{
                        top: pos.top,
                        left: pos.left,
                    }}
                >
                    {/* Connecting Path Lines */}
                    <div className="absolute top-1/2 left-1/2 w-[200px] h-px bg-gradient-to-r from-[#044396]/20 to-transparent origin-left rotate-45" />
                </motion.div>
            ))}

            {/* Spotlight Beams */}
            <div
                className="absolute top-0 left-0 w-[1000px] h-[1000px] pointer-events-none opacity-40"
                style={{
                    background: 'radial-gradient(ellipse 150% 120% at 0% 0%, rgba(4, 67, 150, 0.15) 0%, transparent 60%)',
                }}
            />
            <div
                className="absolute top-0 right-0 w-[1000px] h-[1000px] pointer-events-none opacity-40"
                style={{
                    background: 'radial-gradient(ellipse 150% 120% at 100% 0%, rgba(4, 67, 150, 0.15) 0%, transparent 60%)',
                }}
            />

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent z-[2]" />
        </div>
    );
}
