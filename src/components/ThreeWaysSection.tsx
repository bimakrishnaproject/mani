"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function ThreeWaysSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Automatically switch tabs 0 -> 1 -> 2 as user scrolls down through the pinned section
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveTab(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      setActiveTab(1);
    } else {
      setActiveTab(2);
    }
  });

  const territories = [
    {
      num: "01",
      title: "Physical Collections",
      subtitle: "Connected 5-part physical systems addressing specific life challenges.",
      description: "Reading creates understanding, but workbooks create action, journals create calm, and card decks build daily practice. Each collection brings together 5 physical tools working in harmony.",
      ctaText: "Explore Collections System",
      ctaLink: "/collections",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png",
      badge: "PHYSICAL SYSTEM",
    },
    {
      num: "02",
      title: "Daily Micro-Videos",
      subtitle: "500+ expert-led daily videos explaining complex psychology in 3 minutes.",
      description: "Short, grounded, actionable daily insights helping you recognize relationship patterns, process overthinking, and practice self-reflection wherever you are.",
      ctaText: "Browse 500+ Videos Free",
      ctaLink: "/watch-learn",
      image: "/assets/Video Thumbnails/How Emotionally Intelligent People Handle Hurt.jpeg",
      badge: "VIDEO LIBRARY",
    },
    {
      num: "03",
      title: "App",
      subtitle: "Private, real-time reflection technology currently in closed beta.",
      description: "Beyond listening, MANI guides you toward understanding and practical next steps right from your phone when you need clarity most.",
      ctaText: "Join Private Beta Access",
      ctaLink: "/#app",
      image: "/assets/Chat Conversation.png",
      badge: "MOBILE APP BETA",
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-editorial-white w-full border-t border-mist-grey">
      {/* DESKTOP VIEW: Pinned Scroll Sequence (100% Intact & Unchanged for Laptop/Desktop) */}
      <div className="hidden lg:block relative h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-12">
          <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
            
            {/* Section Header */}
            <div className="max-w-4xl mb-10">
              <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-2">
                THREE WAYS MANI HELPS YOU • SCROLL DRIVEN SEQUENCE
              </div>
              <h2 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-deep-green leading-tight">
                One System, Multiple Ways of Support
              </h2>
            </div>

            {/* Editorial Sticky Accordion & Numbered Horizontal Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Numbered Territory List (Left Column) */}
              <div className="lg:col-span-5 space-y-4">
                {territories.map((t, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`p-6 rounded-3xl border-2 transition-all cursor-pointer ${
                      activeTab === idx
                        ? "bg-deep-green text-editorial-white border-deep-green shadow-xl scale-[1.02]"
                        : "bg-soft-white text-ink-black border-mist-grey hover:border-deep-green opacity-70"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold tracking-widest ${activeTab === idx ? "text-cream-logo" : "text-deep-green"}`}>
                        {t.num} / {t.badge}
                      </span>
                      <span className={`text-xs font-semibold ${activeTab === idx ? "text-cream-logo" : "text-sage-grey"}`}>
                        {activeTab === idx ? "● Active (Scrolled)" : "Scroll to switch"}
                      </span>
                    </div>
                    <h3 className={`font-serif-heading text-2xl md:text-3xl ${activeTab === idx ? "text-cream-logo" : "text-deep-green"}`}>
                      {t.title}
                    </h3>
                    {activeTab === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 space-y-3 pt-3 border-t border-editorial-white/20"
                      >
                        <p className="text-sm font-light text-[#C3CDC6] leading-relaxed">
                          {t.subtitle}
                        </p>
                        <Link
                          href={t.ctaLink}
                          className="inline-flex items-center gap-2 text-xs font-bold text-cream-logo underline hover:opacity-80"
                        >
                          {t.ctaText} &rarr;
                        </Link>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Interactive Visual Showcase Stage (Right Column) */}
              <div className="lg:col-span-7 flex justify-center items-center">
                <div className="relative w-full max-w-[650px] h-[460px] sm:h-[540px] flex items-center justify-center">
                  
                  {/* 100% High-DPI Sharp Image Display */}
                  {activeTab === 0 && (
                    <Image
                      key="tab-0"
                      src={territories[0].image}
                      alt={territories[0].title}
                      width={650}
                      height={480}
                      quality={100}
                      priority
                      className="w-full h-auto object-contain max-h-[460px] drop-shadow-2xl animate-float"
                    />
                  )}

                  {activeTab === 1 && (
                    <div key="tab-1" className="relative w-[300px] sm:w-[340px] h-[460px] sm:h-[500px] rounded-3xl overflow-hidden border-2 border-deep-green shadow-2xl bg-ink-black flex items-center justify-center">
                      <img
                        src={encodeURI(territories[1].image)}
                        alt={territories[1].title}
                        className="w-full h-full object-contain object-center"
                      />
                      <div className="absolute inset-0 bg-ink-black/20 flex items-center justify-center">
                        <div className="w-20 h-20 bg-deep-green text-cream-logo rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <polygon points="9,6 18,12 9,18" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <Image
                      key="tab-2"
                      src="/assets/Chat Conversation.png"
                      alt={territories[2].title}
                      width={460}
                      height={920}
                      quality={100}
                      priority
                      className="w-auto h-[460px] sm:h-[520px] md:h-[560px] object-contain drop-shadow-2xl animate-float"
                    />
                  )}

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* MOBILE VIEW: Clean Responsive Vertical Layout (Zero Clipping) */}
      <div className="block lg:hidden py-16 px-6 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full inline-block">
            THREE WAYS MANI HELPS YOU
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl text-deep-green leading-tight">
            One System, Multiple Ways of Support
          </h2>
        </div>

        {/* Vertical Stack of Territories */}
        <div className="space-y-10">
          {territories.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-soft-white border-2 border-mist-grey space-y-6 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-deep-green uppercase tracking-widest bg-soft-signal-green px-3 py-1 rounded-full">
                  {t.num} / {t.badge}
                </span>
              </div>

              <h3 className="font-serif-heading text-2xl sm:text-3xl text-deep-green">
                {t.title}
              </h3>

              <p className="text-sm font-serif-italic text-[#4A524D]">
                "{t.subtitle}"
              </p>

              <p className="text-xs text-[#626A64] font-light leading-relaxed">
                {t.description}
              </p>

              {/* Image Display */}
              <div className="py-2 flex justify-center items-center">
                {idx === 0 && (
                  <Image
                    src={t.image}
                    alt={t.title}
                    width={500}
                    height={360}
                    className="w-full h-auto object-contain max-h-[260px] drop-shadow-md"
                  />
                )}
                {idx === 1 && (
                  <div className="relative w-[240px] h-[350px] rounded-2xl overflow-hidden border-2 border-deep-green shadow-xl bg-ink-black flex items-center justify-center">
                    <img
                      src={encodeURI(t.image)}
                      alt={t.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-ink-black/20 flex items-center justify-center">
                      <div className="w-14 h-14 bg-deep-green text-cream-logo rounded-full flex items-center justify-center shadow-lg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <polygon points="9,6 18,12 9,18" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                {idx === 2 && (
                  <Image
                    src="/assets/Chat Conversation.png"
                    alt={t.title}
                    width={320}
                    height={640}
                    className="w-auto h-[340px] object-contain drop-shadow-xl"
                  />
                )}
              </div>

              <Link
                href={t.ctaLink}
                className="block w-full py-4 bg-deep-green text-editorial-white font-semibold rounded-xl text-center text-xs shadow-md"
              >
                {t.ctaText} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

