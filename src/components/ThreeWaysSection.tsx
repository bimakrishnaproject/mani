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
      title: "Guided Mobile Technology",
      subtitle: "Private, real-time reflection technology currently in closed beta.",
      description: "Beyond listening, MANI guides you toward understanding and practical next steps right from your phone when you need clarity most.",
      ctaText: "Join Private Beta Access",
      ctaLink: "/#app",
      image: "/assets/Chat Conversation.png?v=3",
      badge: "MOBILE APP BETA",
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-editorial-white w-full border-t border-mist-grey">
      {/* Sticky Full-Screen Viewport for Pinned Scroll Sequence */}
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
                </div>
              ))}
            </div>

            {/* Active Territory Full-Bleed Editorial Stage (Right Column) */}
            <div className="lg:col-span-7 bg-soft-white border-2 border-mist-grey rounded-3xl p-8 md:p-12 shadow-2xl relative min-h-[440px] flex flex-col justify-between">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div>
                  <span className="text-xs font-bold tracking-widest text-deep-green bg-soft-signal-green px-3.5 py-1 rounded-full inline-block mb-3">
                    {territories[activeTab].badge}
                  </span>
                  <h3 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl text-deep-green mb-2 leading-tight">
                    {territories[activeTab].title}
                  </h3>
                  <p className="font-serif-italic text-lg text-[#4A524D] mb-4">
                    "{territories[activeTab].subtitle}"
                  </p>
                  <p className="text-sm sm:text-base text-[#626A64] leading-relaxed mb-6 font-light max-w-xl">
                    {territories[activeTab].description}
                  </p>
                </div>

                {/* Asset Preview Stage */}
                <div className="relative w-full h-[200px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#F7F8F6] to-[#E9ECE8] border border-mist-grey p-4 flex items-center justify-center">
                  {activeTab === 0 && (
                    <Image
                      src={territories[0].image}
                      alt={territories[0].title}
                      width={400}
                      height={200}
                      className="w-full h-auto object-contain max-h-[180px] drop-shadow-xl"
                    />
                  )}
                  {activeTab === 1 && (
                    <div className="relative w-[140px] h-[180px] rounded-2xl overflow-hidden border-2 border-deep-green shadow-xl bg-ink-black flex items-center justify-center">
                      <img
                        src={encodeURI(territories[1].image)}
                        alt={territories[1].title}
                        className="w-full h-full object-cover object-top opacity-90"
                      />
                      <div className="absolute inset-0 bg-ink-black/30 flex items-center justify-center">
                        <div className="w-12 h-12 bg-cream-logo text-deep-green rounded-full flex items-center justify-center shadow-lg animate-pulse">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <polygon points="9,6 18,12 9,18" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="relative w-full h-full bg-editorial-white rounded-xl p-2 flex items-center justify-center shadow-md">
                      <img
                        src={territories[2].image}
                        alt={territories[2].title}
                        className="w-auto h-[170px] object-contain drop-shadow-lg"
                      />
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <Link
                    href={territories[activeTab].ctaLink}
                    className="inline-flex px-8 py-3.5 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-all transform hover:scale-105 shadow-lg text-sm w-fit"
                  >
                    {territories[activeTab].ctaText} &rarr;
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
