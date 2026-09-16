"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function ChallengeSection() {
  return (
    <section className="py-20 sm:py-28 md:py-32 bg-editorial-white text-ink-black w-full relative overflow-hidden border-b border-mist-grey/60">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase block">
            THE CHALLENGE
          </span>
          <h2 className="font-serif-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#0E2E1E] leading-[1.08] tracking-tight">
            No One Should Have To Struggle Alone
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#0B1710] font-medium leading-relaxed">
            Stress, self-doubt, relationship challenges, uncertainty, and overwhelming emotions are part of being human. Yet finding meaningful support is not always easy.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0E2E1E] leading-relaxed">
            <strong className="font-bold lowercase">mani</strong>{" "}was built to change that.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
