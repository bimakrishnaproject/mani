"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function AppPage() {
  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">

        {/* SECTION 1: Not Just Someone To Talk To */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeIn} className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
                THE MANI&trade; APP
              </span>
              <h1 className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#0E2E1E] leading-[0.96] tracking-tight">
                Not Just Someone To Talk To
              </h1>
              <p className="text-lg sm:text-xl text-[#1C2826] font-normal leading-relaxed">
                Most support stops at listening.
              </p>
              <p className="text-lg sm:text-xl text-[#1C2826] font-normal leading-relaxed">
                The MANI&trade; App goes further.
              </p>
              <p className="text-base sm:text-lg text-[#1C2826] font-normal leading-relaxed">
                Guided conversations help you understand what you are facing. Breathwork, meditations, visualizations, and stories help you move through it.
              </p>
              <p className="text-base sm:text-lg text-[#22332A] font-medium leading-relaxed italic">
                Because feeling heard is only the beginning.
              </p>
              <div className="pt-2">
                <Link
                  href="/join-beta"
                  className="inline-flex px-8 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all text-sm shadow-md cursor-pointer"
                >
                  Join Beta &rarr;
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-[360px] flex justify-center items-center group">
                <img
                  src="/assets/Chat Conversation.png"
                  alt="MANI™ App Conversation Interface"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] group-hover:scale-[1.02] transition-transform duration-500 rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: For The Moments You Need It Most */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto bg-[#0E2E1E] text-editorial-white rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-xl border border-emerald-500/20">
            <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
              For The Moments You Need It Most
            </h2>
            <p className="text-base sm:text-lg text-[#E8F0EC] font-normal leading-relaxed max-w-2xl mx-auto">
              Most people do not fall apart on a schedule. Hard moments happen at midnight, on a lunch break, in the middle of a conversation you were not ready for.
            </p>
            <p className="text-base sm:text-lg text-[#E8F0EC] font-normal leading-relaxed max-w-2xl mx-auto">
              The MANI&trade; App exists for those moments.
            </p>
          </motion.div>
        </section>

        {/* SECTION 3: Why It's Different */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto mb-12">
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              Why It&apos;s Different
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "More Than A Chat",
                body: "Most apps listen. Mani helps you understand what you are feeling and guides you toward what comes next.",
              },
              {
                title: "Support In Different Ways",
                body: "Conversations, breathwork, meditations, visualizations, and stories because different moments call for different kinds of support.",
              },
              {
                title: "Built For Where You Actually Are",
                body: "Not where you should be. Not where you were. Where you are right now.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 bg-soft-white border border-mist-grey rounded-2xl space-y-3"
              >
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                  {item.title}
                </h3>
                <p className="text-base text-[#1C2826] font-normal leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: What It Will Do */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto mb-14 text-center space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
              APP CAPABILITIES
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              What It Will Do
            </h2>
            <p className="text-base sm:text-lg text-[#1C2826] font-normal max-w-xl mx-auto">
              Intelligent features crafted to guide, ground, and build lasting resilience.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Guided Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0E2E1E] text-editorial-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl border border-emerald-500/20 group hover:border-cream-logo/40 transition-all"
            >
              {/* Visual 1: Guided Support Dialogue & Clarity Compass */}
              <div className="w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-b from-[#143D28] to-[#081F14] border border-emerald-500/20 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,233,215,0.08)_0,transparent_70%)]" />
                <svg width="180" height="110" viewBox="0 0 180 110" fill="none" className="relative z-10">
                  <circle cx="90" cy="55" r="45" stroke="#F4E9D7" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                  <circle cx="90" cy="55" r="30" stroke="#F4E9D7" strokeWidth="1" opacity="0.5" />
                  <circle cx="90" cy="55" r="14" fill="#F4E9D7" fillOpacity="0.15" stroke="#F4E9D7" strokeWidth="1.5" />
                  <circle cx="90" cy="55" r="5" fill="#F4E9D7" />
                  
                  {/* Guided Wave Lines */}
                  <path d="M30 55 C 50 35, 70 35, 90 55 C 110 75, 130 75, 150 55" stroke="#F4E9D7" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                  <path d="M45 55 C 60 42, 75 42, 90 55 C 105 68, 120 68, 135 55" stroke="#77E2A8" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                  
                  {/* Dialogue Node Accents */}
                  <circle cx="45" cy="55" r="3" fill="#77E2A8" />
                  <circle cx="135" cy="55" r="3" fill="#77E2A8" />
                </svg>
                <span className="absolute bottom-3 left-4 text-[10px] font-mono uppercase tracking-widest text-cream-logo/70">
                  Clarity &bull; Dialogue Engine
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-3 py-1 rounded-full inline-block">
                  01 &bull; GUIDED SUPPORT
                </span>
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-cream-logo">
                  Guided Support
                </h3>
                <p className="text-sm sm:text-base text-[#E8F0EC] font-normal leading-relaxed">
                  Guidance that helps bring clarity when things feel uncertain.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Practical Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0E2E1E] text-editorial-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl border border-emerald-500/20 group hover:border-cream-logo/40 transition-all"
            >
              {/* Visual 2: Breathwork & Somatic Pacer Visual */}
              <div className="w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-b from-[#143D28] to-[#081F14] border border-emerald-500/20 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(119,226,168,0.08)_0,transparent_70%)]" />
                <svg width="180" height="110" viewBox="0 0 180 110" fill="none" className="relative z-10">
                  {/* Breath Ring Expansion Layers */}
                  <circle cx="90" cy="55" r="42" stroke="#77E2A8" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                  <circle cx="90" cy="55" r="32" stroke="#F4E9D7" strokeWidth="1.5" opacity="0.6" />
                  <circle cx="90" cy="55" r="20" fill="#143D28" stroke="#77E2A8" strokeWidth="2" />
                  
                  {/* Petals / Calming Mandala Nodes */}
                  <circle cx="90" cy="23" r="3.5" fill="#F4E9D7" />
                  <circle cx="90" cy="87" r="3.5" fill="#F4E9D7" />
                  <circle cx="58" cy="55" r="3.5" fill="#F4E9D7" />
                  <circle cx="122" cy="55" r="3.5" fill="#F4E9D7" />
                  
                  <text x="90" y="59" fill="#F4E9D7" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">
                    CALM
                  </text>
                </svg>
                <span className="absolute bottom-3 left-4 text-[10px] font-mono uppercase tracking-widest text-cream-logo/70">
                  Somatic &bull; Breath &bull; Meditation
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-3 py-1 rounded-full inline-block">
                  02 &bull; PRACTICAL TOOLS
                </span>
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-cream-logo">
                  Practical Tools
                </h3>
                <p className="text-sm sm:text-base text-[#E8F0EC] font-normal leading-relaxed">
                  Practical experiences designed to calm, reflect, and refocus.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Meaningful Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0E2E1E] text-editorial-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl border border-emerald-500/20 group hover:border-cream-logo/40 transition-all"
            >
              {/* Visual 3: Upward Trajectory & Milestone Progression */}
              <div className="w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-b from-[#143D28] to-[#081F14] border border-emerald-500/20 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,233,215,0.08)_0,transparent_70%)]" />
                <svg width="200" height="110" viewBox="0 0 200 110" fill="none" className="relative z-10">
                  {/* Grid Lines */}
                  <line x1="30" y1="85" x2="170" y2="85" stroke="#F4E9D7" strokeWidth="1" opacity="0.2" />
                  <line x1="30" y1="55" x2="170" y2="55" stroke="#F4E9D7" strokeWidth="1" strokeDasharray="3 3" opacity="0.15" />
                  <line x1="30" y1="25" x2="170" y2="25" stroke="#F4E9D7" strokeWidth="1" strokeDasharray="3 3" opacity="0.15" />
                  
                  {/* Upward Momentum Arc */}
                  <path d="M35 80 Q 80 75 110 50 T 165 25" stroke="#77E2A8" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Milestone Points */}
                  <circle cx="35" cy="80" r="4" fill="#F4E9D7" stroke="#0E2E1E" strokeWidth="1.5" />
                  <circle cx="85" cy="65" r="4" fill="#F4E9D7" stroke="#0E2E1E" strokeWidth="1.5" />
                  <circle cx="125" cy="42" r="4" fill="#F4E9D7" stroke="#0E2E1E" strokeWidth="1.5" />
                  <circle cx="165" cy="25" r="6" fill="#77E2A8" stroke="#0E2E1E" strokeWidth="1.5" />
                  <circle cx="165" cy="25" r="10" stroke="#77E2A8" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                </svg>
                <span className="absolute bottom-3 left-4 text-[10px] font-mono uppercase tracking-widest text-cream-logo/70">
                  Resilience &bull; Milestone Arc
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-3 py-1 rounded-full inline-block">
                  03 &bull; MEANINGFUL PROGRESS
                </span>
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-cream-logo">
                  Meaningful Progress
                </h3>
                <p className="text-sm sm:text-base text-[#E8F0EC] font-normal leading-relaxed">
                  Small steps that build confidence, resilience, and momentum.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Always Accessible */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0E2E1E] text-editorial-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl border border-emerald-500/20 group hover:border-cream-logo/40 transition-all"
            >
              {/* Visual 4: 24/7 Celestial Support Visual */}
              <div className="w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-b from-[#143D28] to-[#081F14] border border-emerald-500/20 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,233,215,0.08)_0,transparent_70%)]" />
                <svg width="180" height="110" viewBox="0 0 180 110" fill="none" className="relative z-10">
                  {/* 24/7 Orbital Ring */}
                  <ellipse cx="90" cy="55" rx="55" ry="24" stroke="#F4E9D7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" transform="rotate(-15 90 55)" />
                  <circle cx="90" cy="55" r="26" stroke="#77E2A8" strokeWidth="1.5" fill="#143D28" />
                  
                  {/* Clock / Hour & Minute Accents */}
                  <line x1="90" y1="55" x2="90" y2="40" stroke="#F4E9D7" strokeWidth="2" strokeLinecap="round" />
                  <line x1="90" y1="55" x2="102" y2="55" stroke="#F4E9D7" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="90" cy="55" r="3" fill="#F4E9D7" />
                  
                  {/* Orbiting Satellite Star */}
                  <circle cx="138" cy="42" r="3" fill="#77E2A8" />
                  <circle cx="42" cy="68" r="3" fill="#F4E9D7" />
                  
                  <text x="90" y="96" fill="#F4E9D7" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
                    24/7 ALWAYS ON
                  </text>
                </svg>
                <span className="absolute bottom-3 left-4 text-[10px] font-mono uppercase tracking-widest text-cream-logo/70">
                  Direct Access &bull; No Waitlist
                </span>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-3 py-1 rounded-full inline-block">
                  04 &bull; ALWAYS ACCESSIBLE
                </span>
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-cream-logo">
                  Always Accessible
                </h3>
                <p className="text-sm sm:text-base text-[#E8F0EC] font-normal leading-relaxed">
                  Available whenever you need it. No appointment. No waitlist. No judgment.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5: Beta CTA */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto bg-[#081F14] text-editorial-white rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl border border-emerald-500/20">
            <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
              Help Shape What&apos;s Next
            </h2>
            <p className="text-base sm:text-lg text-[#E8F0EC] font-normal leading-relaxed max-w-2xl mx-auto">
              We are inviting a small group of people to experience the Mani App before public launch.
            </p>
            <p className="text-base sm:text-lg text-[#E8F0EC] font-normal leading-relaxed max-w-2xl mx-auto">
              Get early access, explore new features, and help shape the future of the app.
            </p>
            <div className="pt-4">
              <Link
                href="/join-beta"
                className="inline-flex px-10 py-5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all shadow-xl text-base cursor-pointer"
              >
                Join Beta
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
