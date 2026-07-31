"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";

export default function TermsOfUsePage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Terms of Use"
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
              TERMS & CONDITIONS
            </div>
            <h1 className="font-serif-heading text-5xl sm:text-7xl text-[#0E2E1E]">
              Terms of Use
            </h1>
            <p className="text-sm text-sage-grey uppercase tracking-wider font-semibold">
              PLATFORM & DIGITAL CONTENT TERMS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8 text-base text-[#4A524D] font-light leading-relaxed border-t border-mist-grey pt-8"
          >
            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">1. Acceptance of Terms</h3>
              <p>
                By accessing the MANI website, purchasing our physical or digital collections, or participating in our community and beta programs, you agree to comply with these Terms of Use and our accompanying Safety & Disclaimer policies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">2. Intellectual Property & Copyright</h3>
              <p>
                All editorial content, book text, workbook exercises, art therapy mandalas, poster designs, affirmation cards, video materials, and technology code are the exclusive intellectual property of MANI and its founders. Unauthorized reproduction or resale is strictly prohibited.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">3. Non-Clinical Disclaimer</h3>
              <p>
                As detailed in our Disclaimer, MANI provides educational content and boundary-building tools. MANI does not provide clinical diagnosis, therapy, or medical treatment.
              </p>
            </div>

            {/* Client Action Note */}
            <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl space-y-2">
              <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block">
                CLIENT COPY / ACTION REQUESTED
              </span>
              <p className="text-xs text-[#626A64] italic">
                If your legal team has specific jurisdiction, arbitration, or commercial terms from your master legal document, please supply the text to be updated here.
              </p>
            </div>

            <div className="pt-8 border-t border-mist-grey flex justify-between items-center text-xs font-bold text-[#0E2E1E]">
              <Link href="/privacy" className="underline hover:text-emerald-700">
                &larr; View Privacy Policy
              </Link>
              <Link href="/disclaimer" className="underline hover:text-emerald-700">
                View Disclaimer &rarr;
              </Link>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
