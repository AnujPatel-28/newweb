"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Scroll
} from "phosphor-react";
import { motion, Variants } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Neural Advantage: AI-Native Recruiting in 2026",
    excerpt: "How companies are leveraging cognitive alignment to secure elite architects and innovators.",
    category: "Market Intelligence",
    author: "Manya (Founder)",
    date: "Feb 08, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=800",
    slug: "future-of-remote-work-2026",
  },
  {
    id: 2,
    title: "Trajectory Scaling: A Guide for Elite Talent",
    excerpt: "Strategic career maneuvering in a world dominated by human-AI hybrid performance metrics.",
    category: "Career Scaling",
    author: "David Chen",
    date: "Jan 25, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    slug: "5-skills-tech-recruiters-look-for",
  },
  {
    id: 3,
    title: "Engineering Alignment: Solving the Hiring Gap",
    excerpt: "Why traditional recruiting fails and how the Pulse Protocol bridges the gap for both sides.",
    category: "Leadership",
    author: "Sarah Jenkins",
    date: "Jan 10, 2026",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    slug: "scaling-startup-team-guide",
  },
];

const InsightsSection: React.FC = () => {



  const headerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "circOut" }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 1,
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    })
  };

  return (
    <section
      id="insights"
      className="relative overflow-hidden py-32 min-h-screen flex flex-col justify-center bg-white scroll-mt-24"
    >

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-40 max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#044396]/10 bg-[#044396]/5 text-[#044396] text-[11px] font-bold uppercase tracking-[0.2em] mb-12 backdrop-blur-sm">
            <Scroll size={18} weight="bold" className="animate-pulse" />
            Neural Analytics
          </div>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-tight tracking-tight">
            Network <br />
            <span className="text-[#044396] inline-block relative">
              Signals.
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                className="absolute -bottom-3 left-0 h-2 bg-[#709de9]/20 rounded-full"
              />
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="bg-white rounded-[4rem] overflow-hidden border border-zinc-100 hover:border-[#044396]/20 transition-all duration-700 group shadow-[0_30px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_50px_100px_rgba(4,67,150,0.08)] flex flex-col h-full"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="absolute top-8 left-8 bg-white/95 backdrop-blur-md text-[#044396] text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-[0.4em] shadow-2xl">
                  {post.category}
                </span>
              </div>

              <div className="p-12 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-6 leading-tight tracking-tight group-hover:text-[#044396] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-slate-700 text-base leading-relaxed mb-12 line-clamp-3 font-medium">
                    &ldquo;{post.excerpt}&rdquo;
                  </p>
                </div>

                <div className="pt-10 border-t border-zinc-50 flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-[#044396] font-black text-2xl shadow-inner group-hover:bg-[#044396] group-hover:text-white transition-all duration-500">
                      {post.author[0]}
                    </div>
                    <span className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.3em] group-hover:text-black transition-colors">{post.author}</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: "#044396", color: "#fff" }}
                    className="p-4 rounded-full bg-zinc-50 text-zinc-400 transition-all duration-500 shadow-sm"
                  >
                    <ArrowRight size={24} weight="bold" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;