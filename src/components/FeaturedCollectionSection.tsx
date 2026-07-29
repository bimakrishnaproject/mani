"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function FeaturedCollectionSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Automatically switch active tab 0 -> 1 -> 2 -> 3 -> 4 as user scrolls through the pinned viewport
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) {
      setActiveTab(0);
    } else if (latest >= 0.2 && latest < 0.4) {
      setActiveTab(1);
    } else if (latest >= 0.4 && latest < 0.6) {
      setActiveTab(2);
    } else if (latest >= 0.6 && latest < 0.8) {
      setActiveTab(3);
    } else {
      setActiveTab(4);
    }
  });

  const items = [
    {
      num: "01",
      badge: "FOUNDATION",
      title: "The Book",
      subtitle: "Name It. Face It. Own It.",
      description: "A comprehensive 240-page guide dissecting covert manipulation, gaslighting dynamics, trauma bonds, and boundary rebuilding strategies.",
      price: "$24.99",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
      details: ["240 Pages", "Hardcover & Digital", "Deep Psychology Breakdown"],
    },
    {
      num: "02",
      badge: "ACTION",
      title: "The Workbook",
      subtitle: "Practical Recovery Exercises",
      description: "Step-by-step practical exercises, script templates for setting boundaries, emotional processing worksheets, and self-trust trackers.",
      price: "$29.99",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Workbook.png",
      details: ["180 Worksheets", "Boundary Script Templates", "Self-Assessment Grids"],
    },
    {
      num: "03",
      badge: "CALM",
      title: "Colouring Book & Daily Journal",
      subtitle: "Somatic Grounding & Daily Reflection",
      description: "Art therapy grounding prompts combined with structured daily journaling to calm your nervous system during overthinking spirals.",
      price: "$14.99",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Coloring Book.png",
      details: ["Art Therapy Prompts", "Somatic Calming Tools", "Daily Reflection Grid"],
    },
    {
      num: "04",
      badge: "REINFORCEMENT",
      title: "Poster Set",
      subtitle: "Visual Boundary Reminders",
      description: "10 high-resolution frameable posters featuring core emotional reminders, boundary rules, and self-compassion affirmations.",
      price: "$29.99",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/1 Framed.png",
      details: ["10 Premium Art Prints", "Frameable 8x10 Design", "Daily Sanctuary Reminders"],
    },
    {
      num: "05",
      badge: "DAILY PRACTICE",
      title: "Affirmation Card Deck",
      subtitle: "Micro-Actions for Self-Trust",
      description: "52 premium micro-reflection cards providing immediate grounded perspective whenever you experience self-doubt or emotional triggers.",
      price: "$19.99",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Affirmation Cards/Box Display.png",
      details: ["52 Micro-Reflection Cards", "Luxe Card Box Display", "Instant Trigger Grounding"],
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-[#F4EFE6] w-full border-t border-mist-grey"
      id="collections"
    >
      {/* Sticky Full-Screen Viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex w-full">
        
        {/* LEFT COLUMN (45% Width): Editorial Narrative Header */}
        <div className="w-full lg:w-[45%] h-full bg-[#F4EFE6] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between z-10 border-r border-mist-grey">
          
          {/* Top Badge & Progress Indicator */}
          <div>
            <div className="flex items-center gap-2.5 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#8C7659]">
                FEATURED COLLECTION • 0{activeTab + 1} / 05
              </span>
            </div>

            <h2 className="font-serif-heading text-5xl sm:text-7xl md:text-8xl text-deep-green leading-[0.95] mb-6">
              Bye Bye<br />Narcissist.
            </h2>

            <p className="text-lg sm:text-xl text-[#626A64] font-light leading-relaxed max-w-lg mb-8">
              A 5-part connected recovery system designed to help you understand toxic dynamics, reclaim your boundaries, and rebuild self-trust step by step.
            </p>
          </div>

          {/* Numbered Quick Selector & Bundle CTA */}
          <div className="space-y-6">
            {/* Quick Number Selector Chips */}
            <div className="flex flex-wrap gap-2">
              {items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === idx
                      ? "bg-deep-green text-editorial-white shadow-md scale-105"
                      : "bg-editorial-white text-ink-black border border-mist-grey hover:border-deep-green opacity-70"
                  }`}
                >
                  {item.num}. {item.badge}
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-[#D8C7AD] flex items-center justify-between">
              <div>
                <span className="text-xs text-sage-grey block font-medium">COMPLETE 5-PART BUNDLE</span>
                <span className="text-2xl font-serif-heading text-deep-green">$119.99</span>
              </div>
              <Link
                href="/collections/bye-bye-narcissist"
                className="px-8 py-4 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-all transform hover:scale-105 shadow-xl text-xs"
              >
                Shop Full System &rarr;
              </Link>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (55% Width): Full-Bleed Imagery with Dark Glassmorphism Overlay */}
        <div className="hidden lg:block lg:w-[55%] h-full relative overflow-hidden bg-ink-black">
          
          {/* Full-Bleed Background Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              initial={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              src={encodeURI(items[activeTab].image)}
              alt={items[activeTab].title}
              className="w-full h-full object-cover object-center"
            />
          </AnimatePresence>

          {/* Dark Glassmorphism Overlay Card (Exactly like Reference Image) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-10 left-10 right-10 bg-[#05150D]/85 backdrop-blur-xl border border-editorial-white/15 p-8 sm:p-10 rounded-2xl text-editorial-white shadow-2xl z-20 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif-heading text-4xl sm:text-5xl text-cream-logo font-light">
                  {items[activeTab].num}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase bg-soft-signal-green text-deep-green px-3.5 py-1 rounded-full">
                  {items[activeTab].badge}
                </span>
              </div>

              <h3 className="font-serif-heading text-3xl sm:text-4xl text-editorial-white leading-tight">
                {items[activeTab].title}
              </h3>

              <p className="text-sm text-[#C3CDC6] font-light leading-relaxed max-w-xl">
                {items[activeTab].description}
              </p>

              {/* Feature Chips & Buy Button */}
              <div className="pt-4 border-t border-editorial-white/15 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {items[activeTab].details.map((detail, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[11px] font-semibold text-cream-logo bg-editorial-white/10 px-3 py-1 rounded-full border border-editorial-white/15"
                    >
                      ✓ {detail}
                    </span>
                  ))}
                </div>

                <Link
                  href="/collections/bye-bye-narcissist"
                  className="px-6 py-2.5 bg-cream-logo text-deep-green font-semibold rounded-md hover:bg-[#f2e1bd] transition-all text-xs shadow-md"
                >
                  Buy {items[activeTab].price} &rarr;
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
