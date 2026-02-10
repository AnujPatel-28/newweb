"use client";

import React, { useState } from "react";
import {
  Envelope,
  MapPin,
  PhoneCall,
  PaperPlaneTilt,
  Globe
} from "phosphor-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [userType, setUserType] = useState<"client" | "candidate">("client");



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Transmission complete to ${userType} protocol.`);
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden min-h-screen flex flex-col justify-center bg-zinc-50/30 scroll-mt-24"
    >

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] mb-12 shadow-sm backdrop-blur-sm">
              <Globe size={18} weight="bold" className="text-slate-400" />
              Neural Connection
            </div>

            <h3 className="text-6xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight mb-16">
              Talk <br />
              <span className="text-slate-500">Talent.</span>
            </h3>

            <div className="space-y-12">
              {[
                { icon: MapPin, title: "Neural Hub", info: "Global Autonomous Operations" },
                { icon: Envelope, title: "Direct Link", info: "logic@talentmesh.ai" },
                { icon: PhoneCall, title: "Voice Node", info: "+1 (888) MESH-LOGIC" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-8 group">
                  <div className="p-6 bg-slate-50 rounded-3xl text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-700 border border-slate-100">
                    <item.icon size={32} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                    <p className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-slate-600 transition-colors duration-500">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Modern Compact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "circOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-12 lg:p-20 border border-zinc-200 shadow-[0_40px_80px_rgba(0,0,0,0.06)] relative overflow-hidden w-full lg:max-w-2xl mx-auto lg:mx-0"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-slate-100 blur-[120px] rounded-full" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
              <div className="bg-zinc-50 p-2 rounded-[2rem] flex border border-zinc-200">
                {["client", "candidate"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setUserType(type as any)}
                    className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-700 ${userType === type
                      ? "bg-slate-900 text-white shadow-xl"
                      : "text-slate-400 hover:text-slate-600"
                      }`}
                  >
                    {type === "client" ? "Hiring Entity" : "Career Specialist"}
                  </button>
                ))}
              </div>

              <div className="space-y-8">
                <div className="group border-b-2 border-zinc-100 focus-within:border-slate-900 transition-colors">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Identification</p>
                  <input
                    type="text"
                    className="w-full bg-transparent pb-6 text-2xl font-bold text-slate-900 placeholder-slate-400 outline-none transition-all tracking-tight"
                    placeholder="Full Name / Brand"
                    required
                  />
                </div>
                <div className="group border-b-2 border-zinc-100 focus-within:border-slate-900 transition-colors">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Sync Endpoint</p>
                  <input
                    type="email"
                    className="w-full bg-transparent pb-6 text-2xl font-bold text-slate-900 placeholder-slate-400 outline-none transition-all tracking-tight"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="group border-b-2 border-zinc-100 focus-within:border-slate-900 transition-colors">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Core Mission</p>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent pb-6 text-2xl font-bold text-slate-900 placeholder-slate-400 outline-none transition-all tracking-tight resize-none"
                    placeholder="Mission Parameters / Key Requirements"
                    required
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-slate-900 text-white font-black py-7 rounded-full shadow-[0_20px_40px_rgba(15,23,42,0.2)] hover:shadow-none flex items-center justify-center gap-6 uppercase tracking-[0.3em] transition-all text-sm"
              >
                Initialize Link
                <PaperPlaneTilt size={20} weight="bold" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;