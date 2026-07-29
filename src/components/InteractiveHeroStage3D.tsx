"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InteractiveHeroStage3D() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.92, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-stretch w-full mt-20"
    >
      {/* 01. Physical System Exhibition Object */}
      <motion.div variants={itemVariants} className="md:col-span-4 h-full">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-full"
        >
          <Link
            href="/collections/bye-bye-narcissist"
            className="group block relative bg-gradient-to-br from-[#F7F8F6] via-[#E9ECE8] to-[#DFE3DD] border-2 border-mist-grey rounded-3xl p-8 flex flex-col justify-between h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-soft-signal-green/40 rounded-bl-full pointer-events-none" />

            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full inline-block mb-6">
                01 / PHYSICAL SYSTEM
              </span>

              <div className="h-[280px] flex items-center justify-center relative my-4">
                <Image
                  src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
                  alt="Bye Bye Narcissist Collection"
                  width={440}
                  height={280}
                  className="w-full h-auto object-contain max-h-[260px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] group-hover:scale-108 transition-all duration-500"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-mist-grey/80 flex items-end justify-between">
              <div>
                <h3 className="font-serif-heading text-3xl md:text-4xl text-deep-green group-hover:text-[#143d28] transition-colors mb-1">
                  Bye Bye Narcissist
                </h3>
                <p className="text-xs text-[#626A64]">
                  5-Resource System • <span className="font-semibold text-deep-green">$119.99</span>
                </p>
              </div>
              <span className="text-sm font-bold text-deep-green underline underline-offset-4 group-hover:translate-x-1.5 transition-all">
                Explore &rarr;
              </span>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* 02. Video Reel Cinema Portal Object */}
      <motion.div variants={itemVariants} className="md:col-span-4 h-full">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="h-full"
        >
          <Link
            href="/watch-learn"
            className="group block relative bg-deep-green text-editorial-white border-2 border-deep-green rounded-3xl p-8 flex flex-col justify-between h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-cream-logo/10 rounded-bl-full pointer-events-none" />

            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-3.5 py-1.5 rounded-full inline-block mb-6 backdrop-blur-xs">
                02 / VIDEO REEL PORTAL
              </span>

              <div className="h-[280px] rounded-2xl relative flex items-center justify-center my-4 overflow-hidden shadow-2xl border-2 border-editorial-white/15 group-hover:border-cream-logo/40 transition-colors bg-ink-black/40">
                <img
                  src={encodeURI("/assets/Video Thumbnails/How Emotionally Intelligent People Handle Hurt.jpeg")}
                  alt="Understanding Boundaries Video"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-108 transition-all duration-500"
                />
                <div className="w-20 h-20 bg-cream-logo text-deep-green rounded-full flex items-center justify-center shadow-2xl relative z-10 transform group-hover:scale-115 transition-transform animate-pulse">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <polygon points="9,6 18,12 9,18" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-bold text-cream-logo z-10 bg-ink-black/85 px-4 py-2.5 rounded-xl backdrop-blur-md">
                  <span>EMOTIONAL INTELLIGENCE</span>
                  <span>1:30 min</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-editorial-white/15 flex items-end justify-between">
              <div>
                <h4 className="font-serif-heading text-3xl md:text-4xl text-cream-logo mb-1">
                  Understanding Boundaries
                </h4>
                <p className="text-xs text-[#C3CDC6]">
                  500+ Videos • <span className="font-semibold text-cream-logo">Free Access</span>
                </p>
              </div>
              <span className="text-sm font-bold text-cream-logo underline underline-offset-4 group-hover:translate-x-1.5 transition-all">
                Watch &rarr;
              </span>
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* 03. Guided Mobile App Showcase Object */}
      <motion.div variants={itemVariants} className="md:col-span-4 h-full">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="h-full"
        >
          <Link
            href="#app"
            className="group block relative bg-editorial-white border-2 border-mist-grey rounded-3xl p-8 flex flex-col justify-between h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-radial from-soft-signal-green/30 via-transparent to-transparent pointer-events-none" />

            <div>
              <span className="text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full inline-block mb-6">
                03 / GUIDED APP
              </span>

              <div className="h-[280px] rounded-2xl overflow-hidden bg-gradient-to-b from-soft-signal-green/20 to-transparent border border-mist-grey flex items-center justify-center relative my-4 p-4">
                <div className="absolute inset-0 bg-radial from-soft-signal-green/40 via-transparent to-transparent pointer-events-none rounded-full blur-xl" />
                <img
                  src="/assets/Chat Conversation.png?v=3"
                  alt="MANI App Chat Conversation"
                  className="w-auto h-[260px] object-contain mix-blend-multiply drop-shadow-2xl group-hover:scale-108 transition-all duration-500 relative z-10"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-mist-grey flex items-end justify-between relative z-10">
              <div>
                <h4 className="font-serif-heading text-3xl md:text-4xl text-deep-green group-hover:text-[#143d28] transition-colors mb-1">
                  Guided Support
                </h4>
                <p className="text-xs text-[#626A64]">
                  Real-Time Reflection • <span className="font-semibold text-deep-green">Private Beta</span>
                </p>
              </div>
              <span className="text-sm font-bold text-deep-green underline underline-offset-4 group-hover:translate-x-1.5 transition-all">
                Join Beta &rarr;
              </span>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
