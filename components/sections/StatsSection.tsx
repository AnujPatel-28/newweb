"use client";

import React, { useEffect, useState, useRef, ReactElement } from "react";
import {
  Users,
  Buildings,
  GlobeHemisphereWest,
  Medal,
  Sparkle
} from "phosphor-react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix: string;
  icon: ReactElement;
}

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    label: "Candidates Placed",
    value: 1200,
    suffix: "+",
    icon: <Users size={32} weight="duotone" />,
  },
  {
    id: 2,
    label: "Partner Companies",
    value: 85,
    suffix: "+",
    icon: <Buildings size={32} weight="duotone" />,
  },
  {
    id: 3,
    label: "Industries Served",
    value: 12,
    suffix: "",
    icon: <GlobeHemisphereWest size={32} weight="duotone" />,
  },
  {
    id: 4,
    label: "Success Rate",
    value: 98,
    suffix: "%",
    icon: <Medal size={32} weight="duotone" />,
  },
];

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });

  useEffect(() => {
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

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white/50 backdrop-blur-sm border-y border-blue-100 py-16 relative overflow-hidden">
      {/* Optional: Subtle background pattern could go here */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-blue-200">

          {stats.map((stat) => (
            <motion.div key={stat.id} className="flex flex-col items-center p-4">

              {/* Icon Bubble */}
              <div className="mb-4 bg-blue-50 p-3 rounded-full shadow-sm ring-1 ring-blue-100">
                {/* React.cloneElement allows us to inject the className into the icon 
                  defined in the config object without repeating the className string there.
                */}
                {React.cloneElement(stat.icon, {
                  className: "w-6 h-6 text-blue-600"
                } as React.SVGProps<SVGSVGElement>)}
              </div>

              <div className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-4">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>

              <div className="flex items-center gap-2">
                <Sparkle size={12} weight="fill" className="text-[#044396]" />
                <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;