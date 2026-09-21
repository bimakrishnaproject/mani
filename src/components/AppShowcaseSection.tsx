"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedPhoneChat from "@/components/AnimatedPhoneChat";

import MaskedReveal from "@/components/MaskedReveal";

export default function AppShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Phone glides with smooth scroll-driven vertical parallax (Flyhyer & 14islands)
  const phoneParallaxY = useTransform(scrollYProgress, [0, 1], [35, -35]);

  return (
    <section
      ref={sectionRef}
      className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-36 sm:pb-48 bg-[#071B11] text-editorial-white w-full relative overflow-hidden select-none"
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

            <MaskedReveal>
              <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream-logo leading-[1.02] tracking-tight">
                Support Wherever You Are
              </h2>
            </MaskedReveal>

            <p className="text-base sm:text-lg text-[#FAF5EB] font-normal leading-relaxed max-w-xl">
              When your thoughts won’t slow down, emotions feel overwhelming, or you need to talk something through, <strong className="font-bold lowercase">mani</strong> offers guided support to help you pause, reflect, and work through what’s on your mind.
            </p>

            <p className="text-xs sm:text-sm text-[#E0ECE5]/80 font-normal leading-relaxed max-w-xl">
              We&apos;re currently inviting beta testers to experience the app before launch and help shape future features.
            </p>

            <div className="pt-2">
              <Link
                href="/join-beta"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-full hover:bg-white hover:-translate-y-0.5 hover:shadow-2xl active:scale-[0.97] active:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-logo transition-all shadow-xl text-sm sm:text-base tracking-wide text-center cursor-pointer group"
              >
                <span>Join the App Beta</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-2">&rarr;</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Freestanding Apple-Grade iPhone Showcase with Scroll Parallax */}
          <motion.div
            style={{ y: phoneParallaxY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center py-4 sm:py-6 overflow-visible"
          >
            {/* Ambient Radial Backlight behind the phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] bg-emerald-500/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="w-full flex justify-center">
              <div className="relative z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 cursor-pointer group">
                <AnimatedPhoneChat />

                {/* Enhanced Soft Ambient Floor Glow on Hover */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-6 bg-emerald-500/20 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
