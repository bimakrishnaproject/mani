"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";

export default function CommunityGuidelinesPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Community Guidelines"
        description="This page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 max-w-4xl mx-auto space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-4 py-2 rounded-full">
              COMMUNITY RULES
            </div>
            <h1 className="font-serif-heading text-5xl sm:text-7xl text-[#0E2E1E]">
              Community Guidelines
            </h1>
            <p className="text-sm text-sage-grey uppercase tracking-wider font-semibold">
              SAFE & RESPECTFUL SPACE FOR EMOTIONAL GROWTH
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8 text-base text-[#4A524D] font-light leading-relaxed border-t border-mist-grey pt-8"
          >
            <div className="p-8 bg-[#0E2E1E] text-editorial-white rounded-3xl space-y-4 shadow-xl">
              <h2 className="font-serif-heading text-3xl text-cream-logo">
                Support Without Judgment
              </h2>
              <p className="text-sm text-[#C3CDC6] leading-relaxed">
                The MANI community exists to provide a calm, respectful, and encouraging environment. We prioritize emotional safety, constructive discussion, and mutual respect.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">1. Respect Privacy & Confidentiality</h3>
              <p>
                What is shared in the community stays in the community. Respect the privacy of fellow members and never share personal experiences or names outside the platform.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">2. No Unsolicited Advice or Diagnosis</h3>
              <p>
                Members are encouraged to share personal insights and progress. However, diagnosing others or offering medical/clinical advice is strictly prohibited.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">3. Zero Tolerance for Harassment</h3>
              <p>
                Toxic behavior, hate speech, victim-blaming, or aggressive communication will result in immediate removal from MANI community channels.
              </p>
            </div>

            <div className="pt-8 border-t border-mist-grey flex justify-between items-center text-xs font-bold text-[#0E2E1E]">
              <Link href="/join-community" className="underline hover:text-emerald-700">
                &larr; Join Our Community
              </Link>
              <Link href="/beta-terms" className="underline hover:text-emerald-700">
                View Beta Program Terms &rarr;
              </Link>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
