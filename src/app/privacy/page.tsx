"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";

export default function PrivacyPolicyPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Privacy Policy"
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
              PRIVACY & DATA PROTECTION
            </div>
            <h1 className="font-serif-heading text-5xl sm:text-7xl text-[#0E2E1E]">
              Privacy Policy
            </h1>
            <p className="text-sm text-sage-grey uppercase tracking-wider font-semibold">
              RADICAL DATA PRIVACY & CONFIDENTIALITY STANDARDS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8 text-base text-[#4A524D] font-light leading-relaxed border-t border-mist-grey pt-8"
          >
            <div className="p-8 bg-[#0E2E1E] text-editorial-white rounded-3xl space-y-4 shadow-xl border border-emerald-500/20">
              <h2 className="font-serif-heading text-3xl text-cream-logo">
                Privacy Assurance
              </h2>
              <p className="text-sm text-[#C3CDC6] leading-relaxed">
                At MANI, we believe your emotional processing, boundary work, and reflection belong exclusively to you. We do not sell your personal data, run invasive third-party ad trackers, or exploit sensitive reflection entries.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">1. Data Collection & Usage</h3>
              <p>
                We collect minimal personal data required to deliver physical purchases and manage your account access (such as email address, shipping destination, and order details processed through Klaviyo and secure commerce gateways).
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">2. Mobile App Reflection Privacy</h3>
              <p>
                As specified in our architecture blueprint, the MANI mobile app experience is engineered around end-to-end privacy standards. Your chat entries and guided reflections are stored privately.
              </p>
            </div>

            {/* Client Action Note */}
            <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl space-y-2">
              <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block">
                CLIENT COPY / ACTION REQUESTED
              </span>
              <p className="text-xs text-[#626A64] italic">
                This page reflects the core brand privacy commitment outlined in `docs.md`. If your legal counsel requires specific GDPR, CCPA, or regional state privacy clauses to be appended, please supply the text to be added here.
              </p>
            </div>

            <div className="pt-8 border-t border-mist-grey flex justify-between items-center text-xs font-bold text-[#0E2E1E]">
              <Link href="/disclaimer" className="underline hover:text-emerald-700">
                &larr; View Disclaimer
              </Link>
              <Link href="/terms" className="underline hover:text-emerald-700">
                View Terms of Use &rarr;
              </Link>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
