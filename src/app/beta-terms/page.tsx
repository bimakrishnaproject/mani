"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";

export default function BetaTermsPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="App Beta Program Terms"
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
              PROGRAM SPECIFICATIONS
            </div>
            <h1 className="font-serif-heading text-5xl sm:text-7xl text-[#0E2E1E]">
              MANI Beta Program Terms
            </h1>
            <p className="text-sm text-sage-grey uppercase tracking-wider font-semibold">
              EARLY ACCESS & TESTER AGREEMENT
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8 text-base text-[#4A524D] font-light leading-relaxed border-t border-mist-grey pt-8"
          >
            <div className="p-8 bg-soft-white border-2 border-mist-grey rounded-3xl space-y-4 shadow-sm">
              <h2 className="font-serif-heading text-3xl text-[#0E2E1E]">
                Beta App Program Overview
              </h2>
              <p className="text-sm text-[#626A64]">
                The MANI mobile app is currently in early-access beta development. By signing up for beta access, you agree to participate in testing guided conversation features and providing confidential feedback.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">1. Confidentiality of Unreleased Features</h3>
              <p>
                Beta testers agree not to publish, screenshot, or distribute unreleased app features, interface designs, or guided algorithms outside the official beta testing portal.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">2. Feedback & Improvements</h3>
              <p>
                Your feedback helps shape the final App Store release. All suggestions and usability reports provided during the beta testing program may be used by MANI to improve technology performance.
              </p>
            </div>

            <div className="pt-8 border-t border-mist-grey flex justify-between items-center text-xs font-bold text-[#0E2E1E]">
              <Link href="/join-beta" className="underline hover:text-emerald-700">
                &larr; Join Private App Beta
              </Link>
              <Link href="/privacy" className="underline hover:text-emerald-700">
                View Privacy Policy &rarr;
              </Link>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
