"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function BetaTermsPage() {
  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden selection:bg-[#0E2E1E] selection:text-white">
      <Header />

      <main className="flex-grow pt-32 sm:pt-40 md:pt-48 pb-32">
        <section className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 space-y-10">
          
          <motion.div {...fadeIn} className="space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
              LEGAL
            </span>
            <h1 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E] tracking-tight">
              Beta Program Terms
            </h1>
            <p className="text-xs text-[#1C2826]/70 uppercase tracking-wider font-semibold">
              Last Updated: June 15, 2026
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="space-y-8 text-base text-[#1C2826] font-normal leading-relaxed border-t border-mist-grey/60 pt-8"
          >
            <p>
              mani™ is owned and operated by Moose Ventures LLC.
            </p>
            <p>
              Participation in the mani™ beta program is voluntary.
            </p>
            <p>
              Beta products are experimental and may contain bugs, errors, interruptions, or incomplete functionality.
            </p>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Program Conditions
              </h2>
              <p>By participating in the beta program, you acknowledge that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Features may change at any time.</li>
                <li>Access may be modified or terminated.</li>
                <li>Feedback provided may be used to improve the platform.</li>
                <li>No compensation is provided unless expressly agreed in writing.</li>
                <li>Beta participation does not create any ownership interest in the platform or its intellectual property.</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Contact
              </h2>
              <p>
                Questions regarding the Beta Program may be directed to:{" "}
                <a href="mailto:contact@mymani.ai" className="font-semibold text-[#0E2E1E] underline">
                  contact@mymani.ai
                </a>
              </p>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
