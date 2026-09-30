"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

import MaskedReveal from "@/components/MaskedReveal";

export default function ChallengeSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F6F3EC] text-ink-black w-full relative overflow-hidden border-y border-[#0E2E1E]/10">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 text-center">
        <motion.div {...fadeIn} className="space-y-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#0E2E1E]/80 uppercase block">
            THE CHALLENGE
          </span>
          <h2 className="font-serif-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#0E2E1E] leading-[1.08] tracking-tight">
            No One Should Have To Struggle Alone
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#0B1710] font-normal leading-relaxed max-w-3xl mx-auto">
            Stress, self-doubt, relationship challenges, uncertainty, and overwhelming emotions are part of being human. Yet finding meaningful support is not always easy.
          </p>
          <p className="text-xl sm:text-2xl font-serif-heading text-[#0E2E1E] leading-relaxed pt-1">
            <strong className="font-bold lowercase">mani</strong>{" "}was built to change that.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
