"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trackCommunitySignup } from "@/lib/analytics";

// Apple-style smooth kinetic easing
const appleEase = [0.16, 1, 0.3, 1] as const;

// Stagger container for coordinated kinetic reveals
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

// Smooth upward kinetic reveal with subtle unblur
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

// Soft fade for secondary or horizontal elements
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

const specialists: {
  name: string;
  role: string;
  bio: React.ReactNode;
  image: string;
}[] = [
  {
    name: "Michaela Katz",
    role: "Somatic Healing & Mind-Body Specialist",
    bio: (
      <>
        Michaela Katz specializes in somatic healing, emotional well-being, and mind-body practices. Through her work, she helps individuals cultivate greater self-awareness, emotional resilience, and a deeper connection with themselves. As the founder of Mindful Michaela, she brings valuable insight, compassion, and expertise to the work behind <strong className="font-bold lowercase">mani</strong>.
      </>
    ),
    image: "/assets/Team Photos/Michaela Katz.png",
  },
  {
    name: "Stephen Coghill",
    role: "Award-Winning Composer, Producer & Audio Engineer",
    bio: (
      <>
        Stephen Coghill is an award-winning composer, producer, and founder of COG Productions with decades of experience in music production, recording, and audio storytelling. He creates the original music and soundscapes behind <strong className="font-bold lowercase">mani</strong>&apos;s breathing exercises, meditations, visualizations, and stories, helping shape the emotional experience behind everything we create.
      </>
    ),
    image: "/assets/Team Photos/Stephen CogHill.png",
  },
  {
    name: "Michelle Falanga",
    role: "Emmy Award-Winning Voice Artist, Actor & Meditation Teacher",
    bio: (
      <>
        Michelle Falanga is an Emmy Award-winning voice artist whose work spans national commercial campaigns, animation, corporate productions, and brand storytelling. As the voice behind <strong className="font-bold lowercase">mani</strong>&apos;s breathing exercises, meditations, visualizations, and stories, she helps bring every experience to life in a way that feels calming, supportive, and deeply human.
      </>
    ),
    image: "/assets/Team Photos/Michelle Falanga.png",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Identify",
    desc: "We focus on the real issues people need help understanding and navigating.",
  },
  {
    step: "02",
    title: "Research",
    desc: "We draw upon decades of professional experience, established research, and expert insight.",
  },
  {
    step: "03",
    title: "Develop",
    desc: "We turn insight and expertise into practical resources people can use in everyday life.",
  },
  {
    step: "04",
    title: "Evaluate",
    desc: "We review and strengthen our resources to ensure they remain accurate, relevant, and useful.",
  },
];

export default function AboutPage() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);

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

        {/* SECTION 1: ABOUT MANI (Clear, Authoritative Grand Editorial Spread) */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-24 sm:mb-32">
          <div className="max-w-[1850px] w-full mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-start"
            >
              {/* Left Column: Eyebrow + Main Headline */}
              <div className="lg:col-span-6 space-y-6">
                <motion.span
                  variants={itemFadeUp}
                  className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#0E2E1E]/70 block"
                >
                  ABOUT <strong className="font-bold lowercase">mani</strong>
                </motion.span>
                <motion.h1
                  variants={itemFadeUp}
                  className="font-serif-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0E2E1E] leading-[0.98] tracking-tight"
                >
                  Built To Make A Difference
                </motion.h1>
              </div>

              {/* Right Column: Clean, Unbroken Unified Body Copy */}
              <div className="lg:col-span-6 space-y-6 lg:pt-8">
                <motion.p
                  variants={itemFadeUp}
                  className="text-xl sm:text-2xl lg:text-3xl text-[#0B1710] font-normal leading-relaxed"
                >
                  Too many people struggle in silence, unsure where to turn or what to do next.
                </motion.p>
                <motion.p
                  variants={itemFadeUp}
                  className="text-xl sm:text-2xl lg:text-3xl text-[#0E2E1E] font-medium leading-relaxed"
                >
                  <strong className="font-bold lowercase">mani</strong> was created to make emotional support simple, accessible, and practical for everyday life.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: BUILT BY EXPERTS (Balanced Editorial Statement Across Full Width) */}
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
                  BUILT BY EXPERTS
                </motion.span>
                <motion.h2
                  variants={itemFadeUp}
                  className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#0E2E1E] leading-[1.05] tracking-tight"
                >
                  The People Behind <strong className="font-bold lowercase">mani</strong>
                </motion.h2>
              </div>

              {/* Right Column: Unified Statement Without Fractured Borders */}
              <div className="lg:col-span-6 space-y-6 lg:pt-8">
                <motion.p
                  variants={itemFadeUp}
                  className="text-xl sm:text-2xl lg:text-3xl text-[#0B1710] font-normal leading-relaxed"
                >
                  Decades of experience. Different areas of expertise.
                </motion.p>
                <motion.p
                  variants={itemFadeUp}
                  className="text-xl sm:text-2xl lg:text-3xl text-[#0E2E1E] font-medium leading-relaxed"
                >
                  One shared purpose: creating emotional support people can understand, trust, and use in their everyday lives.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: OUR FOUNDER (Full-Bleed Deep Forest Green Editorial Band) */}
        <section className="w-full bg-[#081F14] text-[#FAF5EB] py-24 sm:py-36 border-y border-[#0E2E1E]/30 mb-24 sm:mb-32 relative overflow-hidden">
          <div className="max-w-[1850px] w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center"
            >
              {/* Founder Portrait: Architectural Editorial Frame */}
              <motion.div variants={itemFadeUp} className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden bg-[#0a2317] border border-editorial-white/20 shadow-2xl group">
                  <img
                    src="/assets/Team Photos/Manasa Reddy.png"
                    alt="Manasa Reddy, Founder of mani"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081F14]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>

              {/* Founder Narrative: Complete 4 Paragraphs From Docs */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <motion.span
                    variants={itemFadeUp}
                    className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-cream-logo block"
                  >
                    OUR FOUNDER
                  </motion.span>

                  <motion.h2
                    variants={itemFadeUp}
                    className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-cream-logo leading-[1.05] tracking-tight"
                  >
                    Meet Manasa Reddy
                  </motion.h2>
                </div>

                <div className="space-y-6 text-base sm:text-lg lg:text-xl text-[#FAF5EB]/90 font-normal leading-relaxed">
                  <motion.p variants={itemFadeUp}>
                    Manasa founded <strong className="font-bold lowercase">mani</strong> after experiencing firsthand what it feels like to need emotional support and struggle to find it. That experience stayed with her. As she learned, listened, and spoke with others, she realized how many people were facing life’s challenges without knowing where to turn or what to do next.
                  </motion.p>
                  <motion.p variants={itemFadeUp}>
                    When Manasa finally found the guidance and expertise that helped her, she became committed to making meaningful support more accessible to others.
                  </motion.p>
                  <motion.p variants={itemFadeUp}>
                    <strong className="font-bold lowercase">mani</strong> grew from a simple belief: emotional support should be simple, practical, and available when people need it. What began with one person’s experience became a mission to create trusted guidance and practical tools that help people better understand themselves and what they are going through.
                  </motion.p>
                  <motion.p
                    variants={itemFadeUp}
                    className="font-serif-heading text-xl sm:text-2xl text-cream-logo pt-2"
                  >
                    That belief continues to guide everything <strong className="font-bold lowercase">mani</strong> creates.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: MEET OUR TEAM */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-24 sm:mb-32">
          <div className="max-w-[1850px] w-full mx-auto space-y-16 sm:space-y-24">
            
            {/* Section Header */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-4"
            >
              <motion.span
                variants={itemFadeUp}
                className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#0E2E1E]/70 block"
              >
                MEET OUR TEAM
              </motion.span>
              <motion.h2
                variants={itemFadeUp}
                className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#0E2E1E] leading-[1.05] tracking-tight"
              >
                Meet The Experts Behind <strong className="font-bold lowercase">mani</strong>
              </motion.h2>
            </motion.div>

            {/* DEDICATED EDITORIAL FEATURE FOR LOLLY DASKAL (Per Designer Note: High Prominence, Substantial Treatment) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="border-t-2 border-[#0E2E1E] pt-12 sm:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-center"
            >
              {/* Lolly Daskal Portrait */}
              <motion.div variants={itemFadeUp} className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden bg-[#0E2E1E] border border-mist-grey shadow-xl group">
                  <img
                    src="/assets/Team Photos/Lolly Daskal.png"
                    alt="Lolly Daskal, Strategic Advisor, Behavioral Expert & Bestselling Author"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </motion.div>

              {/* Lolly Daskal Editorial Bio: Verbatim to docs line 958 */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <motion.span
                    variants={itemFadeUp}
                    className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#0E2E1E]/70 block"
                  >
                    STRATEGIC ADVISOR, BEHAVIORAL EXPERT &amp; BESTSELLING AUTHOR
                  </motion.span>
                  <motion.h3
                    variants={itemFadeUp}
                    className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-tight"
                  >
                    Lolly Daskal
                  </motion.h3>
                </div>

                <div className="space-y-5 text-base sm:text-lg lg:text-xl text-[#0B1710] font-normal leading-relaxed">
                  <motion.p variants={itemFadeUp}>
                    Lolly Daskal has studied human behavior and helped people navigate growth, relationships, leadership, and life&apos;s challenges. As founder and CEO of Lead From Within and bestselling author of <em>The Leadership Gap</em>, she has spent her career helping individuals and organizations gain clarity, build resilience, strengthen relationships, and create meaningful change.
                  </motion.p>
                  <motion.p variants={itemFadeUp}>
                    Drawing from decades of research, coaching, and real-world experience, Lolly helps shape the vision, content, and frameworks behind <strong className="font-bold lowercase">mani</strong>. Her work draws on behavioral science, psychology, and practical wisdom to help people better understand themselves, strengthen their relationships, and navigate life&apos;s challenges with greater confidence and clarity.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* SEAMLESS TRANSITION INTO THE THREE SPECIALISTS (Per Designer Note: Transition without another headline) */}
            <div className="pt-8 sm:pt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {specialists.map((expert, idx) => (
                  <motion.div
                    key={expert.name}
                    initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.7, delay: idx * 0.12, ease: appleEase }}
                    className="bg-white border-t-2 border-t-[#0E2E1E] border-x border-b border-mist-grey/80 rounded-2xl p-7 sm:p-9 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
                  >
                    <div className="space-y-6">
                      <div className="w-full aspect-[4/4.5] rounded-xl overflow-hidden bg-[#0E2E1E] border border-mist-grey">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                          {expert.name}
                        </h4>
                        <p className="text-xs sm:text-sm font-bold tracking-wider text-[#0E2E1E]/80 uppercase leading-snug">
                          {expert.role}
                        </p>
                        <p className="text-sm sm:text-base text-[#0B1710] leading-relaxed font-normal pt-1">
                          {expert.bio}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: HOW WE CREATE (Clean Horizontal Progression per designer note) */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-24 sm:mb-32">
          <div className="max-w-[1850px] w-full mx-auto pt-20 sm:pt-28 border-t border-[#0E2E1E]/15 space-y-12 sm:space-y-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-4"
            >
              <motion.span
                variants={itemFadeUp}
                className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#0E2E1E]/70 block"
              >
                HOW WE CREATE
              </motion.span>
              <motion.h2
                variants={itemFadeUp}
                className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#0E2E1E] leading-[1.05] tracking-tight"
              >
                How We Turn Expertise Into Support
              </motion.h2>
            </motion.div>

            {/* Clean Connected Horizontal Progression: Identify → Research → Develop → Evaluate (Slide 40) */}
            <div className="relative pt-6">
              {/* Horizontal Connecting Progression Line on Desktop */}
              <div
                className="hidden lg:block absolute top-[42px] left-[6%] right-[6%] h-[1.5px] bg-gradient-to-r from-[#0E2E1E]/20 via-[#0E2E1E]/40 to-[#0E2E1E]/20 pointer-events-none"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
                {processSteps.map((step, idx) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.65, delay: idx * 0.1, ease: appleEase }}
                    className="space-y-4 pt-2 relative group"
                  >
                    {/* Step Number with Sequence Dot */}
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#0E2E1E] text-cream-logo text-xs font-mono font-bold flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </span>
                      <span className="text-xs font-mono font-semibold tracking-widest text-[#0E2E1E]/60 uppercase">
                        Stage {idx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E] tracking-tight group-hover:text-[#143d28] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#0B1710] leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: THERE’S MORE TO MANI (Expansive Editorial Invitation - Slide 41) */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 border-t border-[#0E2E1E]/15 pt-28 sm:pt-40 pb-28 sm:pb-40 bg-gradient-to-b from-[#FDFCFA] to-[#F5F2EB]/50">
          <div className="max-w-[1850px] w-full mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="max-w-4xl mx-auto text-center space-y-10"
            >
              <motion.h2
                variants={itemFadeUp}
                className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] leading-[1.05] tracking-tight"
              >
                There’s More To <strong className="font-bold lowercase">mani</strong>
              </motion.h2>

              <motion.p
                variants={itemFadeUp}
                className="text-xl sm:text-2xl text-[#0B1710] font-normal leading-relaxed max-w-3xl mx-auto"
              >
                Join our community and stay connected as new collections, videos, app features, and resources are released.
              </motion.p>

              {/* Action Buttons: Exact Docs CTAs (Expansive Open Presence per Slide 41) */}
              <motion.div
                variants={itemFadeUp}
                className="pt-4 flex flex-wrap justify-center items-center gap-4 sm:gap-6"
              >
                <button
                  type="button"
                  onClick={() => setIsCommunityModalOpen(true)}
                  className="px-10 py-4.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-full hover:bg-[#143d28] active:scale-98 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Join Our Community
                </button>
                <a
                  href="mailto:contact@mymani.ai"
                  className="px-10 py-4.5 bg-white text-[#0E2E1E] border-2 border-[#0E2E1E] font-semibold rounded-full hover:bg-soft-white active:scale-98 transition-all shadow-xs hover:shadow-md text-base sm:text-lg cursor-pointer"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>

      {/* EXPANSIVE COMMUNITY MODAL (Per Slide 41 & Website Copy) */}
      {isCommunityModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md transition-all duration-300"
          onClick={() => setIsCommunityModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white border-2 border-[#0E2E1E]/20 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsCommunityModalOpen(false)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-[#0E2E1E]/5 hover:bg-[#0E2E1E]/10 text-[#0E2E1E] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]/70 block">
                COMMUNITY INVITATION
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-[#0E2E1E] leading-tight">
                Join The <strong className="font-bold lowercase">mani</strong> Community
              </h2>
              <p className="text-lg sm:text-xl text-[#0B1710] font-normal leading-relaxed">
                Be the first to hear about new collections, videos, app updates, and resources.
              </p>
            </div>

            {joined ? (
              <div className="p-6 bg-[#0E2E1E] text-cream-logo rounded-2xl space-y-3 shadow-md">
                <span className="text-3xl block">✓</span>
                <h3 className="font-serif-heading text-xl sm:text-2xl text-cream-logo">Welcome to the Community</h3>
                <p className="text-sm text-[#FAF5EB] leading-relaxed font-medium">
                  We&apos;ve reserved your place. Watch your inbox for incoming resources and early release updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleJoin} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#0E2E1E] uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-4 bg-[#F8F9FA] border border-mist-grey rounded-xl text-base text-[#0B1710] font-medium placeholder-neutral-400 focus:outline-none focus:border-[#0E2E1E] focus:bg-white transition-all shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0E2E1E] text-cream-logo font-semibold text-base sm:text-lg rounded-xl hover:bg-[#143d28] active:scale-98 transition-all shadow-lg cursor-pointer"
                >
                  Join The Community
                </button>
              </form>
            )}

            <div className="pt-2 border-t border-mist-grey/60 flex items-center justify-between text-xs text-[#0B1710]/70">
              <span>Emotional Support Made Simple&trade;</span>
              <Link href="/join-community" className="underline hover:text-[#0E2E1E] transition-colors">
                Dedicated Community Page
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
