"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedPhoneChat from "@/components/AnimatedPhoneChat";

export default function AppShowcaseSection() {
  return (
    <section
      className="py-20 sm:py-24 md:py-28 lg:py-32 bg-[#071B11] text-editorial-white w-full relative overflow-hidden border-t border-b border-editorial-white/10 select-none"
      id="app"
    >
      {/* Cinematic Ambient Lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-emerald-600/10 blur-[120px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">

          {/* Left Column: Pure Editorial Typography & Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 sm:space-y-7"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-cream-logo/80">
                <strong className="font-bold lowercase">mani</strong> APP
              </span>
            </div>

            <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-logo leading-[1.02] tracking-tight">
              Support Wherever You Are
            </h2>

            <p className="text-base sm:text-lg text-[#FAF5EB] font-normal leading-relaxed max-w-xl">
              When your thoughts won’t slow down, emotions feel overwhelming, or you need to talk something through, <strong className="font-bold lowercase">mani</strong> offers guided support to help you pause, reflect, and work through what’s on your mind.
            </p>

            <p className="text-xs sm:text-sm text-[#E0ECE5]/80 font-normal leading-relaxed max-w-xl">
              We&apos;re currently inviting beta testers to experience the app before launch and help shape future features.
            </p>

            <div className="pt-2">
              <Link
                href="/join-beta"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-full hover:bg-white active:scale-98 transition-all shadow-xl text-sm sm:text-base tracking-wide text-center"
              >
                <span>Join the App Beta</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Freestanding Apple-Grade iPhone Showcase (Never clipped, generous headroom) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center py-4 sm:py-6 overflow-visible"
          >
            {/* Ambient Radial Backlight behind the phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] bg-emerald-500/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Interactive Phone Container with Silky Apple Micro-Lift on Hover */}
            <div className="relative z-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.012] cursor-pointer group">
              <AnimatedPhoneChat />

              {/* Enhanced Soft Ambient Floor Glow on Hover */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-6 bg-emerald-500/20 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
