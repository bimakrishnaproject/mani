"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";

export default function DisclaimerPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Medical & Legal Disclaimer"
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
              LEGAL & SAFETY STATEMENT
            </div>
            <h1 className="font-serif-heading text-5xl sm:text-7xl text-[#0E2E1E]">
              Disclaimer & Safety Policy
            </h1>
            <p className="text-sm text-sage-grey uppercase tracking-wider font-semibold">
              LAST UPDATED: OFFICIAL BRAND GUIDELINES & SPECIFICATIONS
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
              <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-3 py-1 rounded-full inline-block">
                IMPORTANT MEDICAL & CLINICAL NOTICE
              </span>
              <h2 className="font-serif-heading text-3xl text-cream-logo">
                MANI Is Educational & Supportive — Not Clinical Therapy
              </h2>
              <p className="text-sm text-[#C3CDC6] leading-relaxed">
                MANI does not diagnose, treat, or position itself as a substitute for professional mental health care, clinical psychotherapy, or psychiatric medical intervention. Its role is strictly educational, informational, and supportive.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">1. Scope of Support</h3>
              <p>
                All resources provided by MANI—including physical collections, workbooks, journals, affirmation decks, daily educational videos, and our guided technology app—are designed to assist individuals in understanding emotional dynamics, establishing personal boundaries, and building self-trust.
              </p>
              <p>
                MANI resources are intended for educational self-reflection and may be used alongside formal therapy or executive coaching, but should never replace professional medical evaluation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">2. Emergency Crisis Intervention Notice</h3>
              <p>
                If you are experiencing a mental health emergency, domestic safety crisis, or thoughts of self-harm, please do not use MANI digital tools or physical workbooks as emergency intervention. Immediately contact local emergency services or national crisis hotlines:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-ink-black font-medium">
                <li>US National Suicide & Crisis Lifeline: Call or text 988</li>
                <li>The Trevor Project: Call 866-488-7386 or text START to 678-678</li>
                <li>Crisis Text Line: Text HOME to 741741</li>
                <li>International Emergency Resources: Please visit your local hospital or emergency center.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">3. Age Requirement</h3>
              <p>
                Unless explicitly specified otherwise, all MANI resources, physical collection products, and digital app features are designed for individuals aged 18 and above.
              </p>
            </div>

            <div className="pt-8 border-t border-mist-grey flex justify-between items-center text-xs">
              <Link href="/faq" className="text-[#0E2E1E] font-bold underline hover:text-emerald-700">
                &larr; Return to Sanctuary FAQ
              </Link>
              <Link href="/terms" className="text-[#0E2E1E] font-bold underline hover:text-emerald-700">
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
