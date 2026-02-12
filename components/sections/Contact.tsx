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

import GridPattern from '../ui/GridPattern';

const ContactSection = () => {
  const [userType, setUserType] = useState<"client" | "candidate">("client");
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Basic validation
    const newErrors: { [key: string]: string } = {};
    if (!name || name.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Valid email required";
    if (!message || message.trim().length < 10) newErrors.message = "Message must be at least 10 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormStatus("error");
      return;
    }

    // Clear errors and show success
    setErrors({});
    setFormStatus("success");

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormStatus("idle");
      e.currentTarget.reset();
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden flex flex-col justify-center bg-zinc-50/30 scroll-mt-24"
    >
      <GridPattern opacity={0.3} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-900 text-[11px] font-mono font-black uppercase tracking-[0.2em] mb-12 shadow-sm backdrop-blur-sm">
              <Globe size={18} weight="bold" className="text-slate-400" />
              Get in Touch
            </div>

            <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 leading-tight tracking-tight mb-12 md:mb-16">
              Talk <br />
              <span className="text-slate-500">Talent.</span>
            </h3>

            <div className="space-y-8 md:space-y-12">
              {[
                { icon: MapPin, title: "Headquarters", info: "Global Operations Center" },
                { icon: Envelope, title: "Email Us", info: "hello@talentmesh.ai" },
                { icon: PhoneCall, title: "Call Us", info: "+1 (888) MESH-HQ" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-6 md:gap-8 group">
                  <div className="p-6 bg-slate-50 rounded-3xl text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all duration-700 border border-slate-100">
                    <item.icon size={32} weight="duotone" />
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-xs font-mono font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.title}</h4>
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
            className="bg-white/80 backdrop-blur-xl rounded-[2rem] md:rounded-[4rem] p-6 md:p-12 lg:p-20 border border-zinc-200 shadow-[0_40px_80px_rgba(0,0,0,0.06)] relative overflow-hidden w-full lg:max-w-2xl mx-auto lg:mx-0"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-slate-100 blur-[120px] rounded-full pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8 md:space-y-10">
              <div className="bg-zinc-50 p-1.5 md:p-2 rounded-[2rem] flex flex-col sm:flex-row border border-zinc-200">
                {["client", "candidate"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setUserType(type as any)}
                    className={`flex-1 py-4 text-[10px] font-mono font-black uppercase tracking-[0.2em] rounded-full transition-all duration-700 ${userType === type
                      ? "bg-slate-900 text-white shadow-xl"
                      : "text-slate-400 hover:text-slate-600"
                      }`}
                  >
                    {type === "client" ? "Employers" : "Candidates"}
                  </button>
                ))}
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className={`group border-b-2 ${errors.name ? 'border-red-300' : 'border-zinc-100'} focus-within:border-slate-900 transition-colors`}>
                  <p className="text-xs font-mono font-black text-slate-500 uppercase tracking-[0.2em] mb-2 md:mb-4">Name</p>
                  <input
                    name="name"
                    type="text"
                    className="w-full bg-transparent pb-4 md:pb-6 text-xl md:text-2xl font-bold text-slate-900 placeholder-slate-400 outline-none transition-all tracking-tight"
                    placeholder="Full Name / Company"
                    required
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-2">{errors.name}</p>}
                </div>
                <div className={`group border-b-2 ${errors.email ? 'border-red-300' : 'border-zinc-100'} focus-within:border-slate-900 transition-colors`}>
                  <p className="text-xs font-mono font-black text-slate-500 uppercase tracking-[0.2em] mb-2 md:mb-4">Email</p>
                  <input
                    name="email"
                    type="email"
                    className="w-full bg-transparent pb-4 md:pb-6 text-xl md:text-2xl font-bold text-slate-900 placeholder-slate-400 outline-none transition-all tracking-tight"
                    placeholder="Email Address"
                    required
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-2">{errors.email}</p>}
                </div>
                <div className={`group border-b-2 ${errors.message ? 'border-red-300' : 'border-zinc-100'} focus-within:border-slate-900 transition-colors`}>
                  <p className="text-xs font-mono font-black text-slate-500 uppercase tracking-[0.2em] mb-2 md:mb-4">Message</p>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-transparent pb-4 md:pb-6 text-xl md:text-2xl font-bold text-slate-900 placeholder-slate-400 outline-none transition-all tracking-tight resize-none"
                    placeholder="How can we help?"
                    required
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-2">{errors.message}</p>}
                </div>
              </div>


              {formStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
                  <p className="text-green-700 font-medium text-sm text-center">✓ Message sent successfully! We'll be in touch soon.</p>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={formStatus === "success"}
                className="w-full bg-slate-900 text-white font-black font-mono py-6 md:py-7 rounded-full shadow-[0_20px_40px_rgba(15,23,42,0.2)] hover:shadow-none flex items-center justify-center gap-4 md:gap-6 uppercase tracking-[0.3em] transition-all text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === "success" ? "Message Sent!" : "Send Message"}
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