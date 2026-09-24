"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trackCommunitySignup } from "@/lib/analytics";

// Apple-style smooth easing curve
const appleEase = [0.16, 1, 0.3, 1] as const;

// Stagger container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

// Smooth upward kinetic reveal
const itemFadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: appleEase,
    },
  },
};

// Soft fade for secondary elements
const softFade = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: appleEase,
    },
  },
};

const approachPrinciples: { number: string; title: string; description: React.ReactNode }[] = [
  {
    number: "01",
    title: "Information Isn’t The Same As Understanding.",
    description: (
      <>
        Knowing something exists is not the same as knowing what it means for your life. <strong className="font-bold lowercase">mani</strong> helps you make sense of what you are going through.
      </>
    ),
  },
  {
    number: "02",
    title: "Learning Matters When It Can Be Applied.",
    description:
      "Everything we create is designed to be used in real life. Not just read and forgotten.",
  },
  {
    number: "03",
    title: "Simple Doesn’t Mean Simplistic.",
    description:
      "We make complex emotions and experiences easier to understand without dumbing them down.",
  },
];

export default function WhyManiPage() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
      trackCommunitySignup(email);
      try {
        await fetch("/api/klaviyo/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, type: "community" }),
        });
      } catch (err) {
        console.error("Subscribe error:", err);
      }
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFA] text-ink-black flex flex-col justify-between overflow-x-hidden selection:bg-[#0E2E1E] selection:text-white">
      <Header />

      <main className="flex-grow pt-32 sm:pt-40 md:pt-48 pb-0">

        {/* SECTION 1: WHY MANI (Kinetic Apple-style Hero Entrance) */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-24 sm:mb-32">
          <div className="max-w-[1850px] w-full mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-start"
            >
              {/* Left Column: Eyebrow + Primary Headline with Kinetic Reveal */}
              <div className="lg:col-span-6 space-y-6">
                <motion.span
                  variants={itemFadeUp}
                  className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#0E2E1E]/70 block"
                >
                  WHY <strong className="font-bold lowercase">mani</strong>
                </motion.span>
                <motion.h1
                  variants={itemFadeUp}
                  className="font-serif-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0E2E1E] leading-[0.98] tracking-tight"
                >
                  Emotional Support Should Fit Real Life
                </motion.h1>
              </div>

              {/* Right Column: Clean, Sequenced Staggered Narrative */}
              <div className="lg:col-span-6 space-y-6 lg:pt-8">
                <motion.p
                  variants={itemFadeUp}
                  className="text-xl sm:text-2xl lg:text-3xl text-[#0B1710] font-normal leading-relaxed"
                >
                  The more we learned about emotional well-being, the more we saw the same challenge.
                </motion.p>
                <motion.p
                  variants={itemFadeUp}
                  className="text-xl sm:text-2xl lg:text-3xl text-[#0B1710] font-normal leading-relaxed"
                >
                  Support was often difficult to access, difficult to understand, and difficult to apply.
                </motion.p>
                <motion.p
                  variants={itemFadeUp}
                  className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading text-[#0E2E1E] font-medium leading-relaxed pt-2"
                >
                  <strong className="font-bold lowercase">mani</strong> was created to change that.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: THE PROBLEM (Staggered Story Reveal) */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-24 sm:mb-32">
          <div className="max-w-[1850px] w-full mx-auto pt-20 sm:pt-28 border-t border-[#0E2E1E]/15">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-start"
            >
              {/* Left Column: Eyebrow + Headline */}
              <div className="lg:col-span-6 space-y-6">
                <motion.span
                  variants={itemFadeUp}
                  className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#0E2E1E]/70 block"
                >
                  THE PROBLEM
                </motion.span>
                <motion.h2
                  variants={itemFadeUp}
                  className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#0E2E1E] leading-[1.02] tracking-tight"
                >
                  Information Is Not The Same As Guidance
                </motion.h2>
              </div>

              {/* Right Column: Clean, Sequential Narrative Flow (Lines 1 -> 2 -> 3 -> 4) */}
              <div className="lg:col-span-6 space-y-6 lg:pt-6">
                <motion.p
                  variants={itemFadeUp}
                  className="text-xl sm:text-2xl lg:text-3xl text-[#0B1710] font-normal leading-relaxed"
                >
                  People have access to more information than ever before.
                </motion.p>

                <motion.div variants={itemFadeUp} className="py-1">
                  <p className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl text-[#0E2E1E] leading-snug">
                    Books. Podcasts. Videos. Experts. Endless advice.
                  </p>
                </motion.div>

                <motion.p
                  variants={itemFadeUp}
                  className="text-xl sm:text-2xl lg:text-3xl text-[#0B1710] font-normal leading-relaxed"
                >
                  Yet many people still feel confused, overwhelmed, and unsure where to begin.
                </motion.p>

                <motion.p
                  variants={itemFadeUp}
                  className="text-xl sm:text-2xl lg:text-3xl font-serif-heading text-[#0E2E1E] leading-relaxed pt-2"
                >
                  Knowing what applies to your situation can be harder than finding information in the first place.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: WHAT WE BELIEVE (Warm Luminous Chapter with Floating Focus) */}
        <section className="w-full bg-[#FAF6EE] text-ink-black py-24 sm:py-36 border-y border-[#0E2E1E]/10 mb-24 sm:mb-32 relative overflow-hidden">
          {/* Ambient gentle warm breathing aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-[1850px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <motion.span
                variants={itemFadeUp}
                className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#0E2E1E]/70 block"
              >
                WHAT WE BELIEVE
              </motion.span>
              
              <motion.h2
                variants={itemFadeUp}
                className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] leading-[1.05] tracking-tight"
              >
                People Are Not Problems To Be Fixed
              </motion.h2>

              <div className="space-y-6 text-lg sm:text-xl md:text-2xl text-[#0B1710] font-normal leading-relaxed pt-4">
                <motion.p variants={itemFadeUp}>
                  Too often, emotional support starts with quick answers, advice, or an attempt to fix what appears to be wrong.
                </motion.p>
                
                {/* Core Belief Line with subtle elevation */}
                <motion.p
                  variants={itemFadeUp}
                  className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading text-[#0E2E1E] py-3"
                >
                  We believe there is a better place to begin.
                </motion.p>

                <motion.p variants={itemFadeUp}>
                  Before people can decide what comes next, they need to understand what they are experiencing. Not fix it. Not push past it. Understand it.
                </motion.p>

                <motion.p variants={itemFadeUp}>
                  From there, they are better equipped to make decisions, respond to challenges, and choose what is right for them.
                </motion.p>

                <motion.div variants={itemFadeUp} className="pt-6">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-serif-heading text-[#0E2E1E] font-medium border-t border-[#0E2E1E]/15 pt-6 inline-block">
                    That belief shapes everything we create at <strong className="font-bold lowercase">mani</strong>.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: OUR APPROACH (Deep Forest Green with Micro-Interactive Floating Cards) */}
        <section className="w-full bg-[#0E2E1E] text-editorial-white py-24 sm:py-36 relative overflow-hidden mb-24 sm:mb-32">
          {/* Subtle cinematic ambient lights */}
          <div className="absolute top-0 right-1/4 w-[650px] h-[450px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[550px] h-[400px] bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-[1850px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 relative z-10 space-y-16">
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="max-w-4xl space-y-4"
            >
              <motion.span
                variants={itemFadeUp}
                className="text-xs sm:text-sm font-bold tracking-[0.25em] text-cream-logo uppercase block"
              >
                OUR APPROACH
              </motion.span>
              <motion.h2
                variants={itemFadeUp}
                className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-cream-logo leading-[1.02] tracking-tight"
              >
                Why Simplicity Matters
              </motion.h2>
            </motion.div>

            {/* 3 Interactive Cards with Smooth Lift & Glow */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10">
              {approachPrinciples.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.85, delay: idx * 0.18, ease: appleEase }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className="bg-[#133825]/80 backdrop-blur-sm border border-editorial-white/15 rounded-3xl p-8 sm:p-10 xl:p-12 flex flex-col justify-between shadow-2xl hover:border-cream-logo/50 hover:shadow-[0_24px_50px_rgba(0,0,0,0.35)] transition-all duration-400 group cursor-default"
                >
                  <div className="space-y-6">
                    <span className="text-xs font-bold tracking-[0.2em] text-cream-logo uppercase block group-hover:text-white transition-colors">
                      {item.number}
                    </span>
                    <h3 className="font-serif-heading text-2xl sm:text-3xl text-cream-logo leading-snug group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg text-[#FAF5EB]/90 leading-relaxed font-normal group-hover:text-white transition-colors">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 5: BUILT AROUND ONE BELIEF (Scroll-Triggered Affirmation) */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-24 sm:mb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="max-w-[1850px] w-full mx-auto text-center py-16 sm:py-24 border-y border-[#0E2E1E]/15 space-y-6"
          >
            <motion.h2
              variants={itemFadeUp}
              className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] leading-[1.05]"
            >
              Built Around One Belief
            </motion.h2>
            <motion.p
              variants={itemFadeUp}
              className="text-2xl sm:text-3xl lg:text-4xl text-[#0E2E1E] font-serif-heading font-normal leading-relaxed max-w-5xl mx-auto italic"
            >
              Understanding comes before change. Support comes before solutions. People are not problems to be fixed.
            </motion.p>
          </motion.div>
        </section>

        {/* SECTION 6: WHAT YOU'LL FIND AT MANI (Clean Architectural Pillars with Interactive Accent Lines & Arrow Glides) */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-28 sm:mb-40">
          <div className="max-w-[1850px] w-full mx-auto space-y-16">
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-4 max-w-4xl"
            >
              <motion.span
                variants={itemFadeUp}
                className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#0E2E1E]/70 block"
              >
                THE THREE PILLARS
              </motion.span>
              <motion.h2
                variants={itemFadeUp}
                className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] leading-[1.02] tracking-tight"
              >
                What You&apos;ll Find At <strong className="font-bold lowercase">mani</strong>
              </motion.h2>
            </motion.div>

            {/* Clean Architectural 3-Column Grid with Hover Micro-Interactions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16">
              
              {/* Column 1: COLLECTIONS */}
              <motion.div
                initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, delay: 0.1, ease: appleEase }}
                className="border-t-2 border-[#0E2E1E] pt-8 sm:pt-10 flex flex-col justify-between space-y-8 group transition-all duration-300"
              >
                <div className="space-y-4">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0E2E1E]/70 block group-hover:text-[#0E2E1E] transition-colors">
                    01 &middot; COLLECTIONS
                  </span>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl text-[#0E2E1E] leading-snug group-hover:translate-x-1 transition-transform duration-300">
                    Explore Life&apos;s Challenges
                  </h3>
                  <p className="text-base sm:text-lg text-[#0B1710] leading-relaxed font-normal">
                    Books, workbooks, journals, affirmation cards, posters, and other resources built around specific challenges and experiences.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/collections"
                    className="inline-flex items-center gap-2 px-7 py-4 bg-[#0E2E1E] text-cream-logo text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-sm group-hover:shadow-md"
                  >
                    <span>Explore Collections</span>
                  </Link>
                </div>
              </motion.div>

              {/* Column 2: WATCH & LEARN */}
              <motion.div
                initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, delay: 0.22, ease: appleEase }}
                className="border-t-2 border-[#0E2E1E] pt-8 sm:pt-10 flex flex-col justify-between space-y-8 group transition-all duration-300"
              >
                <div className="space-y-4">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0E2E1E]/70 block group-hover:text-[#0E2E1E] transition-colors">
                    02 &middot; WATCH &amp; LEARN
                  </span>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl text-[#0E2E1E] leading-snug group-hover:translate-x-1 transition-transform duration-300">
                    See The Patterns Shaping Your Life
                  </h3>
                  <p className="text-base sm:text-lg text-[#0B1710] leading-relaxed font-normal">
                    Short videos on psychology, relationships, emotional intelligence, stress, self-sabotage, and more.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/watch-learn"
                    className="inline-flex items-center gap-2 px-7 py-4 bg-[#0E2E1E] text-cream-logo text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-sm group-hover:shadow-md"
                  >
                    <span>Watch Videos</span>
                  </Link>
                </div>
              </motion.div>

              {/* Column 3: mani APP */}
              <motion.div
                initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, delay: 0.34, ease: appleEase }}
                className="border-t-2 border-[#0E2E1E] pt-8 sm:pt-10 flex flex-col justify-between space-y-8 group transition-all duration-300"
              >
                <div className="space-y-4">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0E2E1E]/70 block group-hover:text-[#0E2E1E] transition-colors">
                    03 &middot; <strong className="font-bold lowercase">mani</strong>
                  </span>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl text-[#0E2E1E] leading-snug group-hover:translate-x-1 transition-transform duration-300">
                    Support Wherever You Are
                  </h3>
                  <p className="text-base sm:text-lg text-[#0B1710] leading-relaxed font-normal">
                    Guided conversations, breathwork, meditations, visualizations, stories, and practical tools available whenever you need them.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/app"
                    className="inline-flex items-center gap-2 px-7 py-4 bg-[#0E2E1E] text-cream-logo text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-sm group-hover:shadow-md"
                  >
                    <span>Learn About <strong className="font-bold lowercase">mani</strong></span>
                  </Link>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* SECTION 7: THIS IS ONLY THE BEGINNING */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-24 sm:mb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="max-w-[1850px] w-full mx-auto text-center py-16 sm:py-24 border-t border-[#0E2E1E]/15 space-y-6"
          >
            <motion.h2
              variants={itemFadeUp}
              className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] leading-[1.05]"
            >
              This Is Only The Beginning
            </motion.h2>
            <div className="space-y-2 max-w-4xl mx-auto">
              <motion.p variants={itemFadeUp} className="text-xl sm:text-2xl text-[#0B1710] font-normal leading-relaxed">
                The need for emotional support doesn&apos;t stop.
              </motion.p>
              <motion.p variants={itemFadeUp} className="text-xl sm:text-2xl text-[#0B1710] font-normal leading-relaxed">
                Neither does our commitment to creating resources that are practical, accessible, and built for real life.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 8: STAY IN THE KNOW (Interactive Newsletter with Micro-Interactions) */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-28 sm:mb-40">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="max-w-[1850px] w-full mx-auto text-center py-16 sm:py-24 border-t border-[#0E2E1E]/15 space-y-8"
          >
            <div className="space-y-4 max-w-3xl mx-auto">
              <motion.h2
                variants={itemFadeUp}
                className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] leading-[1.05]"
              >
                Stay In The Know
              </motion.h2>
              <motion.p
                variants={itemFadeUp}
                className="text-lg sm:text-xl text-[#0B1710] font-normal leading-relaxed"
              >
                Receive updates on new Collections, Watch &amp; Learn videos, app releases, and practical resources.
              </motion.p>
            </div>

            <motion.div variants={itemFadeUp} className="pt-2 max-w-md mx-auto">
              {joined ? (
                <div className="p-4 bg-[#0E2E1E] text-cream-logo rounded-xl font-semibold text-sm">
                  ✓ Thank you! You&apos;re connected to <strong className="font-bold lowercase">mani</strong>{" "}updates.
                </div>
              ) : (
                <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-grow px-5 py-4 rounded-xl text-sm text-ink-black bg-white border border-[#0E2E1E]/20 focus:outline-none focus:border-[#0E2E1E] focus:ring-2 focus:ring-[#0E2E1E]/10 transition-all shadow-xs"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-colors whitespace-nowrap text-sm shadow-md cursor-pointer"
                  >
                    Join Our Community
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
