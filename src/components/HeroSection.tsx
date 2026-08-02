"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TypewriterStory from "./TypewriterStory";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const narrativePhrases = [
    "Understanding comes before change.",
    "Support comes before solutions.",
    "People are not problems to be fixed.",
    "Emotional support made simple."
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="pt-28 pb-16 sm:pt-40 sm:pb-36 md:pt-52 md:pb-44 bg-gradient-to-b from-editorial-white via-soft-white/60 to-soft-white min-h-[92vh] flex items-center justify-center overflow-hidden w-full relative [perspective:1400px]">
      
      {/* Dynamic 3D Parallax Lighting Ambient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          transform: `translate3d(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px, -100px)`,
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-radial from-soft-signal-green/40 via-cream-logo/20 to-transparent pointer-events-none rounded-full blur-3xl"
      />

      <div className="w-full px-4 sm:px-12 md:px-16 lg:px-24 relative z-10">
        
        {/* Floating 3D Micro-Badges Surrounding Hero (Always Animated & Levitating) */}
        <div className="relative text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Floating Pill Badge Left */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute -left-12 top-10 items-center gap-2 bg-editorial-white border-2 border-mist-grey px-4 py-2 rounded-full shadow-lg text-xs font-semibold text-deep-green"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>✨ 5-Resource Physical Systems</span>
          </motion.div>

          {/* Floating Pill Badge Right */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden lg:flex absolute -right-12 top-10 items-center gap-2 bg-deep-green border-2 border-deep-green px-4 py-2 rounded-full shadow-lg text-xs font-semibold text-cream-logo"
          >
            <span className="w-2 h-2 rounded-full bg-cream-logo animate-pulse" />
            <span>▶ 500+ Daily Micro-Videos</span>
          </motion.div>

          {/* Badge Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xs">
              THE LIVING EDITORIAL SYSTEM
            </div>
          </motion.div>

          {/* Oversized Kinetic Headline with Shimmer Glow */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-deep-green leading-[0.96] sm:leading-[0.92] tracking-tight"
          >
            Emotional Support<br />
            <span className="font-serif-italic bg-gradient-to-r from-deep-green via-[#1c5c3b] to-deep-green bg-clip-text text-transparent">
              Made Simple.
            </span>
          </motion.h1>

          {/* Interactive Typewriter Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="min-h-12 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0"
          >
            <span className="text-base sm:text-lg md:text-2xl font-serif-italic text-sage-grey sm:mr-3">Core Belief:</span>
            <TypewriterStory
              phrases={narrativePhrases}
              className="text-base sm:text-lg md:text-3xl font-serif-italic text-deep-green font-semibold"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl md:text-3xl text-[#4A524D] leading-relaxed max-w-4xl mx-auto font-light px-2"
          >
            MANI brings together expert-guided collections, daily videos and a new app in development to help you better understand yourself and navigate life's challenges.
          </motion.p>

          {/* Interactive CTAs with Floating Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              href="/collections"
              className="w-full sm:w-auto px-10 py-5 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-all transform hover:-translate-y-1 shadow-lg text-center text-base"
            >
              Explore Collections
            </Link>
            <Link
              href="#app"
              className="w-full sm:w-auto px-10 py-5 border-2 border-ink-black text-ink-black font-semibold rounded-md hover:bg-soft-white transition-all transform hover:-translate-y-1 text-center text-base"
            >
              Get Early Access
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
