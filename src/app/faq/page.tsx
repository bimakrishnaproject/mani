"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";
import {
  ScrollReveal,
  KineticTextReveal,
  SplitSlideCombine,
  DiagonalSlideIn,
  PerspectiveFlipIn,
  CurtainClipExpand,
  CascadingZoomStagger,
  MagneticElement,
} from "@/components/ScrollAnimations";

export default function FAQPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Sanctuary FAQ"
        description="This page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const faqs = [
    {
      category: "About MANI",
      question: "What is MANI?",
      answer: "MANI is a platform that brings together expert-led collections, daily educational videos, community, and a guided app to help people better understand themselves and navigate life's challenges. Our approach combines physical tools, digital content, and guided technology into one connected ecosystem.",
    },
    {
      category: "About MANI",
      question: "Is MANI therapy?",
      answer: "No. MANI is not a substitute for professional clinical therapy, medical diagnosis, or emergency mental health crisis intervention. Our resources are designed for educational and self-reflection purposes. MANI may be used alongside therapy or coaching, but it does not replace professional care.",
    },
    {
      category: "Collections",
      question: "What is included in the Bye Bye Narcissist Collection?",
      answer: "The collection includes five connected tools: (1) The Foundation Book ($24.99), (2) The Action Workbook ($29.99), (3) Colouring Book & Journal for calm ($14.99), (4) 10 Frameable Poster Collection for reinforcement ($29.99), and (5) The 52 Affirmation Card Deck for daily practice.",
    },
    {
      category: "Collections",
      question: "Can I buy individual items without purchasing the full collection?",
      answer: "Yes! While the complete collection bundle is available at $119.99, every item can be purchased individually. We designed the collection as a connected system, but each resource works on its own too.",
    },
    {
      category: "Collections",
      question: "What other collections are coming?",
      answer: "We are developing additional collections including Emotional Intelligence, Love Done Right, Boundaries That Stick, Purpose Starts Here, Beyond the Anxiety, Running on Empty, Meeting Your Shadow, Healing Your Inner Child, Stop Self Sabotage, Own Your Worth, and When Panic Hits.",
    },
    {
      category: "Products & Orders",
      question: "Do you ship internationally?",
      answer: "Yes, we ship physical collections worldwide. Domestic US orders typically arrive in 3-5 business days, while international shipping takes 7-12 business days. Digital products are available immediately after purchase.",
    },
    {
      category: "Products & Orders",
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy. If you feel our physical collection does not provide value, return it within 30 days for a full refund. Digital products are non-refundable once accessed.",
    },
    {
      category: "App & Beta",
      question: "How do I get access to the MANI app beta?",
      answer: "You can join the beta by submitting your name and email through the beta signup form on our website. Beta invites are sent out in batches to ensure quality and stability.",
    },
    {
      category: "App & Beta",
      question: "What can the app do?",
      answer: "The MANI app is currently in beta and focuses on guided support through a conversational interface. It provides personalised guidance to help users reflect, understand, and take practical next steps. Additional features are in development.",
    },
    {
      category: "App & Beta",
      question: "Is my data in the app private?",
      answer: "Absolutely. Your privacy is a priority. Your conversations and reflections in the app are kept private and secure. We do not sell or share your personal data with third parties.",
    },
    {
      category: "Watch & Learn",
      question: "How many videos are available?",
      answer: "Our Watch & Learn library currently includes 500+ short videos and is growing daily. New videos are added regularly, covering topics from psychology and emotional intelligence to relationships, stress management, and self-understanding.",
    },
    {
      category: "Watch & Learn",
      question: "Are the videos free?",
      answer: "Yes, the Watch & Learn video library is freely accessible. We believe educational content should be available to everyone who needs it.",
    },
    {
      category: "Community",
      question: "How do I join the MANI community?",
      answer: "You can join by entering your email on our website. As a community member, you'll be the first to hear about new collections, videos, app updates, and resources.",
    },
    {
      category: "Professional Support",
      question: "Who is MANI designed for?",
      answer: "Most MANI resources are designed for people aged 18 and above. Our content is created for anyone seeking to better understand themselves and navigate emotional challenges with practical, accessible tools.",
    },
    {
      category: "Professional Support",
      question: "Can I use MANI alongside therapy?",
      answer: "Yes. MANI is designed to complement professional support, not replace it. Many people find our resources helpful alongside therapy or coaching. If you are experiencing a mental health emergency, please contact your local healthcare providers or emergency services immediately.",
    },
  ];

  const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];

  const filteredFaqs = faqs.filter((f) => {
    const matchesCategory = activeCategory === "All" || f.category === activeCategory;
    const matchesSearch = searchQuery
      ? f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catName: string) => {
    if (catName === "All") return faqs.length;
    return faqs.filter((f) => f.category === catName).length;
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">

        {/* FULL WIDTH HERO SECTION */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-20">
          <SplitSlideCombine className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Search & Intro */}
            <div className="lg:col-span-7 space-y-6">
              <DiagonalSlideIn from="top-left" distance={30}>
                <div className="inline-block text-xs font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-4 py-2 rounded-full shadow-xs">
                  SANCTUARY HELP CENTER • FREQUENTLY ASKED QUESTIONS
                </div>
              </DiagonalSlideIn>

              <KineticTextReveal
                text="Answers & Clarity. Everything You Need to Know."
                tag="h1"
                className="font-serif-heading text-5xl sm:text-7xl lg:text-8xl text-deep-green leading-[0.95] tracking-tight"
              />

              <ScrollReveal direction="up" distance={30} delay={0.2}>
                <p className="text-xl text-[#4A524D] font-light leading-relaxed max-w-2xl">
                  Find detailed answers regarding our collections, shipping policies, app beta program, Watch & Learn video library, and clinical principles.
                </p>
              </ScrollReveal>

              {/* Search Bar */}
              <ScrollReveal direction="up" distance={30} delay={0.3}>
                <div className="relative max-w-2xl">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions (e.g., shipping, collection, app beta, therapy)..."
                    className="w-full px-6 py-4 border-2 border-mist-grey rounded-2xl text-base bg-soft-white text-ink-black focus:outline-none focus:border-deep-green shadow-sm transition-all focus:shadow-lg pl-14"
                  />
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-sage-grey text-lg">
                    🔍
                  </span>
                </div>
              </ScrollReveal>

              {/* Filter Pills */}
              <ScrollReveal direction="up" distance={20} delay={0.4}>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-xs font-semibold px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${activeCategory === cat
                          ? "bg-[#0E2E1E] text-editorial-white shadow-md scale-105"
                          : "bg-soft-white text-ink-black border border-mist-grey hover:border-[#0E2E1E]"
                        }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeCategory === cat ? "bg-cream-logo/30 text-cream-logo" : "bg-mist-grey text-sage-grey"}`}>
                        {getCategoryCount(cat)}
                      </span>
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: 3D Help Card Visual Stage */}
            <div className="lg:col-span-5">
              <PerspectiveFlipIn angle={-25}>
                <div className="p-8 bg-[#081F14] text-editorial-white border-2 border-editorial-white/15 rounded-3xl shadow-2xl space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-60 h-60 bg-radial from-cream-logo/20 via-soft-signal-green/10 to-transparent pointer-events-none rounded-full blur-2xl" />

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cream-logo uppercase tracking-widest">
                      ✨ QUICK SANCTUARY KNOWLEDGE
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/30">
                      {filteredFaqs.length} ANSWERS FOUND
                    </span>
                  </div>

                  <div className="space-y-4 pt-2 border-t border-editorial-white/15">
                    <div className="p-4 bg-editorial-white/10 rounded-2xl space-y-1">
                      <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider block">
                        MOST FREQUENT QUESTION
                      </span>
                      <h4 className="font-serif-heading text-xl text-cream-logo">Is MANI clinical therapy?</h4>
                      <p className="text-xs text-[#C3CDC6] font-light leading-relaxed">
                        MANI provides self-reflection tools and educational systems. It complements therapy but is not a substitute for clinical care.
                      </p>
                    </div>

                    <div className="p-4 bg-editorial-white/5 rounded-2xl flex items-center justify-between text-xs">
                      <span className="text-[#C3CDC6]">Have a specific inquiry?</span>
                      <Link href="/#community" className="font-bold text-cream-logo underline hover:text-emerald-300">
                        Contact Support &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </PerspectiveFlipIn>
            </div>

          </SplitSlideCombine>
        </section>

        {/* FULL WIDTH MAIN FAQ SECTION — 12 Column Layout */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column (4 cols): Sticky Sidebar Navigation */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <DiagonalSlideIn from="bottom-left" distance={40}>
                <div className="bg-soft-white border-2 border-mist-grey rounded-2xl p-6 space-y-4 shadow-sm">
                  <h3 className="font-serif-heading text-2xl text-deep-green">Browse Categories</h3>
                  <div className="space-y-2">
                    {categories.map((cat, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full text-left p-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-all ${activeCategory === cat
                            ? "bg-[#0E2E1E] text-cream-logo shadow-md"
                            : "bg-editorial-white text-ink-black border border-mist-grey hover:border-[#0E2E1E]"
                          }`}
                      >
                        <span>{cat}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeCategory === cat ? "bg-cream-logo/20 text-cream-logo" : "bg-mist-grey text-sage-grey"}`}>
                          {getCategoryCount(cat)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </DiagonalSlideIn>

              <DiagonalSlideIn from="bottom-left" distance={50} delay={0.2}>
                <div className="bg-[#081F14] text-editorial-white rounded-2xl p-6 space-y-3 shadow-md border border-editorial-white/10">
                  <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-950 px-3 py-1 rounded-full border border-emerald-500/30 inline-block">
                    DIRECT SUPPORT
                  </span>
                  <h4 className="font-serif-heading text-xl text-cream-logo">Need Additional Assistance?</h4>
                  <p className="text-xs text-[#C3CDC6] font-light leading-relaxed">
                    Our sanctuary team is dedicated to supporting your experience.
                  </p>
                  <Link
                    href="/#community"
                    className="block text-center py-3 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-colors text-xs shadow-md"
                  >
                    Reach Out to Us &rarr;
                  </Link>
                </div>
              </DiagonalSlideIn>
            </div>

            {/* Right Column (8 cols): Full-Width Accordion List */}
            <div className="lg:col-span-8 space-y-4">
              <CascadingZoomStagger className="space-y-4" stagger={0.08}>
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={`${faq.category}-${idx}`}
                      className="bg-soft-white border-2 border-mist-grey rounded-2xl overflow-hidden transition-all shadow-sm hover:border-deep-green hover:shadow-md"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-6 font-serif-heading text-xl sm:text-2xl text-deep-green"
                      >
                        <span>{faq.question}</span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-2xl font-sans text-sage-grey font-bold flex-shrink-0 w-8 h-8 rounded-full bg-mist-grey/50 flex items-center justify-center"
                        >
                          +
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 sm:px-8 pb-8 pt-2 text-sm sm:text-base text-[#626A64] font-light leading-relaxed border-t border-mist-grey/60 space-y-3">
                              <span className="text-[10px] font-bold tracking-widest text-deep-green uppercase bg-soft-signal-green px-3 py-1 rounded-full inline-block">
                                {faq.category}
                              </span>
                              <p>{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </CascadingZoomStagger>

              {filteredFaqs.length === 0 && (
                <ScrollReveal direction="up">
                  <div className="text-center py-16 bg-soft-white rounded-2xl border border-mist-grey">
                    <p className="text-lg text-sage-grey font-light">No questions match your search &ldquo;{searchQuery}&rdquo;. Try a different term or clear filters.</p>
                    <button
                      onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                      className="mt-4 text-xs font-bold text-deep-green underline"
                    >
                      Clear Search &amp; Filters
                    </button>
                  </div>
                </ScrollReveal>
              )}
            </div>

          </div>
        </section>

        {/* FULL WIDTH BOTTOM CTA — Curtain Clip Expand */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mt-28">
          <CurtainClipExpand>
            <div className="bg-[#081F14] text-editorial-white rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full inline-block">
                ALWAYS HERE FOR YOU
              </span>
              <h2 className="font-serif-heading text-4xl sm:text-6xl text-cream-logo">
                Still Have Questions?
              </h2>
              <p className="text-base sm:text-lg text-[#C3CDC6] font-light max-w-2xl mx-auto leading-relaxed">
                Our team is here to support you. Reach out anytime and we&apos;ll respond as quickly as possible.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <MagneticElement strength={0.2}>
                  <Link
                    href="/#community"
                    className="px-10 py-5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all transform hover:scale-105 shadow-xl text-base inline-block"
                  >
                    Contact Us &rarr;
                  </Link>
                </MagneticElement>
                <MagneticElement strength={0.2}>
                  <Link
                    href="/collections"
                    className="px-10 py-5 bg-editorial-white/10 text-cream-logo border border-editorial-white/20 font-semibold rounded-xl hover:bg-editorial-white/20 transition-all text-base inline-block"
                  >
                    Explore Collections &rarr;
                  </Link>
                </MagneticElement>
              </div>
            </div>
          </CurtainClipExpand>
        </section>

      </main>

      <Footer />
    </div>
  );
}
