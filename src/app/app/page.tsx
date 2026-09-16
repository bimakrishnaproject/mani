"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedPhoneChat from "@/components/AnimatedPhoneChat";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function AppPage() {
  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden selection:bg-[#0E2E1E] selection:text-white">
      <Header />

      <main className="flex-grow pt-32 sm:pt-40 md:pt-48 pb-32">

        {/* SECTION 1: Not Just Someone To Talk To */}
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24 sm:mb-32">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div {...fadeIn} className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest lowercase text-[#0E2E1E] block">
                <strong className="font-bold lowercase">mani</strong>
              </span>

              <h1 className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#0E2E1E] leading-[0.96] tracking-tight">
                Not Just Someone To Talk To
              </h1>

              <div className="space-y-3 text-lg sm:text-xl md:text-2xl text-[#0B1710] font-medium leading-relaxed">
                <p>Most support stops at listening.</p>
                <p className="font-semibold text-[#0E2E1E]"><strong className="font-bold lowercase">mani</strong>{" "}goes further.</p>
                <p>
                  Guided conversations help you understand what you are facing. Breathwork, meditations, visualizations, and stories help you move through it.
                </p>
                <p className="text-base sm:text-lg font-semibold text-[#0E2E1E] italic pt-1">
                  Because feeling heard is only the beginning.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/join-beta"
                  className="inline-flex px-8 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all text-sm sm:text-base shadow-md cursor-pointer"
                >
                  Join the App Beta &rarr;
                </Link>
              </div>
            </motion.div>

            {/* Interactive Animated Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <AnimatedPhoneChat />
            </motion.div>

          </div>
        </section>

        {/* SECTION 2: For The Moments You Need It Most (Full-bleed edge-to-edge cinematic band) */}
        <section className="w-full bg-[#081F14] text-editorial-white py-24 sm:py-36 border-y border-editorial-white/10 mb-24 sm:mb-32 relative overflow-hidden">
          {/* Subtle ambient light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
            <motion.div
              {...fadeIn}
              className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8"
            >

              <h2 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl text-cream-logo leading-[1.08] tracking-tight">
                For The Moments You Need It Most
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#FAF5EB] font-medium leading-relaxed max-w-3xl mx-auto">
                Overwhelm does not arrive on a schedule. It can surface at midnight, during a lunch break, or in the middle of a conversation you were not ready for.
              </p>
              <div className="pt-2">
                <p className="text-xl sm:text-2xl font-medium text-cream-logo leading-relaxed">
                  <strong className="font-bold lowercase">mani</strong>{" "}exists for those moments.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: How mani Responds (Grand Full-Width Editorial Section) */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-28 sm:mb-40">
          <div className="w-full max-w-[1850px] mx-auto space-y-16 sm:space-y-20">
            
            <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto space-y-4">
              <h2 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] leading-[1.04] tracking-tight">
                How <strong className="font-bold lowercase">mani</strong>{" "}Responds
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
              {/* Point 1 */}
              <motion.div
                {...fadeIn}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="bg-white border border-mist-grey/80 rounded-3xl p-9 sm:p-11 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_48px_rgba(14,46,30,0.08)] transition-all duration-500 hover:border-[#0E2E1E]/40 flex flex-col justify-between group min-h-[300px]"
              >
                <div className="space-y-6">
                  <div className="w-12 h-1.5 bg-[#0E2E1E] rounded-full group-hover:w-24 transition-all duration-500 ease-out" />
                  <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl text-[#0E2E1E] leading-snug group-hover:text-[#143d28] transition-colors">
                    No Labels. No Judgment.
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-[#0B1710] leading-relaxed font-medium">
                    <strong className="font-bold lowercase">mani</strong>{" "}helps you understand what is happening without telling you who you are or what you should feel.
                  </p>
                </div>
              </motion.div>

              {/* Point 2 */}
              <motion.div
                {...fadeIn}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="bg-white border border-mist-grey/80 rounded-3xl p-9 sm:p-11 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_48px_rgba(14,46,30,0.08)] transition-all duration-500 hover:border-[#0E2E1E]/40 flex flex-col justify-between group min-h-[300px]"
              >
                <div className="space-y-6">
                  <div className="w-12 h-1.5 bg-[#0E2E1E] rounded-full group-hover:w-24 transition-all duration-500 ease-out" />
                  <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl text-[#0E2E1E] leading-snug group-hover:text-[#143d28] transition-colors">
                    Guidance That Fits The Moment
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-[#0B1710] leading-relaxed font-medium">
                    What you need may be a conversation, a pause, a reframe, or a guided practice. <strong className="font-bold lowercase">mani</strong>{" "}responds to what you bring.
                  </p>
                </div>
              </motion.div>

              {/* Point 3 */}
              <motion.div
                {...fadeIn}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                className="bg-white border border-mist-grey/80 rounded-3xl p-9 sm:p-11 lg:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_24px_48px_rgba(14,46,30,0.08)] transition-all duration-500 hover:border-[#0E2E1E]/40 flex flex-col justify-between group min-h-[300px]"
              >
                <div className="space-y-6">
                  <div className="w-12 h-1.5 bg-[#0E2E1E] rounded-full group-hover:w-24 transition-all duration-500 ease-out" />
                  <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl text-[#0E2E1E] leading-snug group-hover:text-[#143d28] transition-colors">
                    From Insight To Action
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-[#0B1710] leading-relaxed font-medium">
                    When you are ready, <strong className="font-bold lowercase">mani</strong>{" "}helps you turn understanding into a practical next step.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Inside mani: (Expansive Full-Width Distinct Cards Band) */}
        <section className="w-full bg-gradient-to-b from-[#F3F6F3] via-[#FAFBF9] to-editorial-white border-y border-mist-grey/70 py-28 sm:py-40 mb-28 sm:mb-40">
          <div className="w-full max-w-[1850px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 space-y-16 sm:space-y-20">
            
            <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto space-y-4">
              <h2 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] leading-[1.04] tracking-tight">
                Inside <strong className="font-bold lowercase">mani</strong>:
              </h2>
            </motion.div>

            {/* 4 Distinct Clean & Informative Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 xl:gap-10">
              
              {/* Card 1: Guided Conversations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border border-mist-grey rounded-3xl p-9 sm:p-10 lg:p-11 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(14,46,30,0.08)] hover:border-[#0E2E1E]/40 transition-all duration-500 flex flex-col justify-start space-y-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0E2E1E] text-cream-logo flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xs">
                  <svg className="w-7 h-7 text-cream-logo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E] leading-snug group-hover:text-[#143d28] transition-colors">
                    Guided Conversations
                  </h3>
                  <p className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed">
                    Talk through what is happening with prompts that help you reflect and understand what you need.
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Breathwork & Meditations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-mist-grey rounded-3xl p-9 sm:p-10 lg:p-11 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(14,46,30,0.08)] hover:border-[#0E2E1E]/40 transition-all duration-500 flex flex-col justify-start space-y-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0E2E1E] text-cream-logo flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xs">
                  <svg className="w-7 h-7 text-cream-logo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E] leading-snug group-hover:text-[#143d28] transition-colors">
                    Breathwork &amp; Meditations
                  </h3>
                  <p className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed">
                    Use guided practices to slow down, settle your thoughts, and regain focus.
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Visualizations & Stories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-mist-grey rounded-3xl p-9 sm:p-10 lg:p-11 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(14,46,30,0.08)] hover:border-[#0E2E1E]/40 transition-all duration-500 flex flex-col justify-start space-y-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0E2E1E] text-cream-logo flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xs">
                  <svg className="w-7 h-7 text-cream-logo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E] leading-snug group-hover:text-[#143d28] transition-colors">
                    Visualizations &amp; Stories
                  </h3>
                  <p className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed">
                    Experience new perspectives that help you understand a situation differently.
                  </p>
                </div>
              </motion.div>

              {/* Card 4: Practical Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white border border-mist-grey rounded-3xl p-9 sm:p-10 lg:p-11 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(14,46,30,0.08)] hover:border-[#0E2E1E]/40 transition-all duration-500 flex flex-col justify-start space-y-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0E2E1E] text-cream-logo flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xs">
                  <svg className="w-7 h-7 text-cream-logo" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E] leading-snug group-hover:text-[#143d28] transition-colors">
                    Practical Tools
                  </h3>
                  <p className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed">
                    Use exercises and frameworks to turn insight into a next step.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* SECTION 5: BETA ACCESS (Open High-End Editorial Callout) */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 border-t border-mist-grey/70 pt-28 sm:pt-40">
          <motion.div
            {...fadeIn}
            className="w-full max-w-5xl mx-auto text-center space-y-8"
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#0E2E1E] block">
              BETA ACCESS
            </span>

            <h2 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] leading-[1.05] tracking-tight">
              Shape <strong className="font-bold lowercase">mani</strong>’s Future
            </h2>

            <p className="text-lg sm:text-2xl text-[#0B1710] font-medium leading-relaxed max-w-3xl mx-auto">
              We’re inviting a small group of beta testers to use <strong className="font-bold lowercase">mani</strong>{" "}before its public launch. Test new features, share what works and what does not, and influence what we improve before release.
            </p>

            <div className="pt-2">
              <Link
                href="/join-beta"
                className="inline-flex px-10 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] active:scale-98 transition-all text-base shadow-lg cursor-pointer"
              >
                Join the App Beta &rarr;
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
