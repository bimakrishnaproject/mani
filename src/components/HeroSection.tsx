"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen h-screen pt-24 pb-12 bg-gradient-to-b from-editorial-white via-soft-white/60 to-editorial-white flex items-center justify-center overflow-hidden w-full relative">
      
      {/* Subtle Ambient Lighting Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial from-soft-signal-green/25 via-cream-logo/15 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-deep-green leading-[0.96] sm:leading-[0.92] tracking-tight"
          >
            Emotional Support<br />
            <span className="font-serif-italic text-deep-green">
              Made Simple.
            </span>
          </motion.h1>

          {/* Calm Supporting Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-[#4A524D] leading-relaxed max-w-2xl mx-auto font-light px-2"
          >
            MANI brings together expert-guided collections, daily videos, and an app in development to help you better understand yourself and navigate life's challenges.
          </motion.p>

          {/* Single Focused CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex justify-center"
          >
            <Link
              href="/collections"
              className="px-9 py-4 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-all shadow-md text-sm sm:text-base tracking-wide"
            >
              Explore Collections &rarr;
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
