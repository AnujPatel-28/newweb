'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GridPatternProps {
    opacity?: number;
    duration?: number;
}

export default function GridPattern({ opacity = 0.6, duration = 20 }: GridPatternProps) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Animated Grid Pattern */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                style={{ opacity }}
            >
                <motion.div
                    animate={{ backgroundPosition: ["0px 0px", "24px 24px"] }}
                    transition={{ duration, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
                />
            </div>
        </div>
    );
}
