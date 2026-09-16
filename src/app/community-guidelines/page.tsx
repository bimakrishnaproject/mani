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

export default function CommunityGuidelinesPage() {
  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden selection:bg-[#0E2E1E] selection:text-white">
      <Header />

      <main className="flex-grow pt-32 sm:pt-40 md:pt-48 pb-32">
        <section className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 space-y-10">
          
          <motion.div {...fadeIn} className="space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
              COMMUNITY
            </span>
            <h1 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E] tracking-tight">
              Community Guidelines
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
              <strong className="font-bold lowercase">mani</strong>&trade; is owned and operated by Moose Ventures LLC.
            </p>
            <p className="text-lg font-medium text-[#0E2E1E]">
              We are committed to creating a respectful and supportive community.
            </p>
            <p>
              By participating in any <strong className="font-bold lowercase">mani</strong>&trade; community space, including Discord, social channels, beta programs, or future community experiences, you agree to:
            </p>

            <ul className="list-disc pl-6 space-y-3 pt-2 text-[#1C2826]">
              <li><strong>Treat others with respect.</strong> Approach conversations with empathy and thoughtful consideration.</li>
              <li><strong>Avoid harassment, bullying, discrimination, or abusive behavior.</strong> Hostility has no place in our spaces.</li>
              <li><strong>Respect privacy and confidentiality.</strong> Never share others&apos; personal stories or identifying details without permission.</li>
              <li><strong>Avoid sharing harmful, illegal, or dangerous content.</strong> Do not post materials that compromise community well-being.</li>
              <li><strong>Avoid promoting misinformation.</strong> Keep conversations grounded and credible.</li>
              <li><strong>Refrain from impersonation or deceptive behavior.</strong> Engage authentically as yourself.</li>
            </ul>

            <div className="p-6 bg-[#0E2E1E] text-editorial-white rounded-2xl space-y-2 mt-6 shadow-md">
              <p className="text-sm font-medium text-cream-logo">
                We reserve the right to remove content, suspend access, or terminate participation when community standards are violated.
              </p>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
