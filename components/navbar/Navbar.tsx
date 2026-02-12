"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';
import { UserCircleGear, Buildings, LinkSimple, List, CaretDown, X } from 'phosphor-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'Our Process', href: '#how-it-works', description: 'The TalentMesh Method' },
        { name: 'Practice Areas', href: '#industries', description: 'Strategic domain alignment' },
      ]
    },
    {
      name: 'Expertise',
      href: '#',
      dropdown: [
        { name: 'Success Stories', href: '#testimonials', description: 'Client & Candidate Impact' },
        { name: 'Insights', href: '#insights', description: 'Market intelligence' },
        { name: 'About Us', href: '#about', description: 'Our mission & team' },
      ]
    },
    { name: 'Connect', href: '#contact' },
  ];

  // Prevent hydration mismatch by not rendering dynamic styles until mounted
  if (!mounted) {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-[100] py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-0">
            <div className="flex items-center justify-between px-8 py-5 rounded-full bg-transparent border-transparent">
              {/* Simplified SSR-safe navbar */}
            </div>
          </div>
        </nav>
      </>
    );
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'py-6' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div
            className={`
              flex items-center justify-between px-8 py-5 rounded-full transition-all duration-500
              ${isScrolled
                ? 'bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(4,67,150,0.05)]'
                : 'bg-transparent border-transparent'
              }
            `}
          >

            {/* Logo + Name */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-14 w-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-removebg-preview.png"
                  alt="TalentMesh Solutions"
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Desktop Nav - Absolutely Centered */}
            <div className="hidden lg:flex items-center justify-center gap-2 xl:gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group px-1">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 font-sans text-sm font-bold uppercase tracking-widest ${isScrolled
                      ? 'text-slate-800 hover:bg-slate-100'
                      : 'text-slate-800 hover:bg-white/50 hover:text-black'
                      }`}
                  >
                    {link.name}
                    {link.dropdown && <CaretDown size={12} weight="bold" className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                  </Link>

                  {link.dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500">
                      <div className="bg-white rounded-[2rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-zinc-100 w-[280px] backdrop-blur-3xl bg-white/95 ring-1 ring-black/5">
                        <div className="flex flex-col gap-6">
                          {link.dropdown.map((item) => (
                            <Link key={item.name} href={item.href} className="flex flex-col gap-1 group/item">
                              <span className="text-xs font-sans font-bold text-slate-900 uppercase tracking-widest group-hover/item:text-[#044396] transition-colors">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-slate-500 font-medium leading-relaxed">
                                {item.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-6 sm:gap-10">
              <div className="hidden sm:flex items-center gap-8">
                <button className="flex items-center gap-2 group transition-all py-1">
                  <UserCircleGear size={18} weight="bold" className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                  <span className={`text-xs font-mono uppercase tracking-[0.2em] transition-colors ${isScrolled ? 'text-slate-900 group-hover:text-slate-500' : 'text-slate-700 group-hover:text-slate-900'}`}>Candidates</span>
                </button>
                <button className="flex items-center gap-2 group transition-all py-1">
                  <Buildings size={18} weight="bold" className="text-slate-400 group-hover:text-slate-900 transition-colors" />
                  <span className={`text-xs font-mono uppercase tracking-[0.2em] transition-colors ${isScrolled ? 'text-slate-900 group-hover:text-slate-500' : 'text-slate-700 group-hover:text-slate-900'}`}>Employers</span>
                </button>
              </div>

              <Link href="#contact" className="hidden md:flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full text-xs font-mono uppercase tracking-[0.2em] hover:bg-slate-700 transition-all shadow-xl group overflow-hidden relative">
                <span className="relative z-10 font-black tracking-widest">Connect</span>
                <LinkSimple size={20} weight="bold" className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
                <div className="absolute inset-0 bg-slate-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-4 bg-slate-100 rounded-full text-slate-900 hover:bg-slate-200 transition-all"
              >
                {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
              </button>
            </div>
          </div>
        </div>


        {/* Mobile Menu */}
        <AnimatePresence>
          {
            isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden fixed inset-x-4 top-32 z-50 pointer-events-auto"
              >
                <div className="bg-white/95 backdrop-blur-2xl rounded-[3rem] p-10 shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-slate-100 flex flex-col gap-8 w-full">
                  <div className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <div key={link.name} className="flex flex-col gap-4">
                        <Link
                          href={link.href}
                          onClick={() => !link.dropdown && setIsOpen(false)}
                          className="text-[14px] font-sans font-black uppercase tracking-[0.3em] text-slate-900 flex items-center justify-between"
                        >
                          {link.name}
                          {link.dropdown && <CaretDown size={14} weight="bold" />}
                        </Link>
                        {link.dropdown && (
                          <div className="flex flex-col gap-4 pl-6 border-l-2 border-slate-50">
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="flex flex-col gap-1"
                              >
                                <span className="text-[11px] font-sans font-bold text-slate-500 uppercase tracking-widest">{sub.name}</span>
                                <span className="text-[9px] text-slate-400 font-medium">{sub.description}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="h-px bg-slate-50 w-full" />
                  <div className="flex flex-col gap-6">
                    <button className="flex items-center gap-4 text-[11px] font-mono font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors">
                      <UserCircleGear size={20} weight="bold" />
                      Candidates
                    </button>
                    <button className="flex items-center gap-4 text-[11px] font-mono font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors">
                      <Buildings size={20} weight="bold" />
                      Employers
                    </button>
                  </div>
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-slate-900 text-white py-6 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-center shadow-xl flex items-center justify-center gap-4"
                  >
                    Connect
                    <LinkSimple size={20} weight="bold" />
                  </Link>
                </div>
              </motion.div>
            )
          }
        </AnimatePresence >
      </nav >
    </>
  );
};

export default Navbar;