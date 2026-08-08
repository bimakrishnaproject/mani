"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function FeaturedCollectionSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [scrollProgressVal, setScrollProgressVal] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track progress (0.0 to 1.0) and dynamically set active item
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgressVal(latest);
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

  // Direct click to scroll smoothly to that item's pinned viewport position
  const handlePillClick = (idx: number) => {
    setActiveTab(idx);
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const targetY = containerTop + (idx / 4) * (containerHeight - window.innerHeight);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

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
      details: ["10 Premium Art Prints", "Frameable 8x10 Design", "Daily Reminders"],
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
      className="relative bg-[#F4EFE6] w-full border-t border-mist-grey"
      id="collections"
    >
      {/* DESKTOP VIEW: 400vh Pinned Viewport */}
      <div className="hidden lg:block relative h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex w-full">

          {/* LEFT COLUMN (45% Width): Editorial Narrative Header & Step Indicators */}
          <div className="w-full lg:w-[45%] h-full bg-[#F4EFE6] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-between z-10 border-r border-mist-grey">

            {/* Top Header */}
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#8C7659] block mb-4">
                FEATURED COLLECTION • BYE BYE NARCISSIST
              </span>

              <h2 className="font-serif-heading text-3xl sm:text-5xl md:text-6xl text-deep-green leading-[1.08] mb-6">
                Bye Bye<br />Narcissist.
              </h2>

              <p className="text-base sm:text-lg text-[#626A64] font-light leading-relaxed max-w-lg mb-8">
                A 5-part connected recovery system designed to help you understand toxic dynamics, reclaim your boundaries, and rebuild self-trust step by step.
              </p>
            </div>

            {/* Step Pills & Progress Fill */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2.5">
                {items.map((item, idx) => {
                  const isActive = activeTab === idx;
                  const itemStart = idx * 0.2;
                  const itemProgress = Math.max(0, Math.min(1, (scrollProgressVal - itemStart) / 0.2));

                  return (
                    <button
                      key={idx}
                      onClick={() => handlePillClick(idx)}
                      className={`relative overflow-hidden px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-deep-green text-editorial-white shadow-md border border-editorial-white/20"
                          : "bg-editorial-white text-ink-black border border-mist-grey hover:border-deep-green opacity-85"
                      }`}
                    >
                      <span className="relative z-10">{item.num}. {item.title}</span>

                      {/* Animated Progress Line for Active Item */}
                      {isActive && (
                        <motion.span
                          className="absolute bottom-0 left-0 h-1 bg-cream-logo rounded-full"
                          style={{ width: `${itemProgress * 100}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Complete System Bundle CTA */}
              <div className="pt-6 border-t border-[#D8C7AD] flex items-center justify-between">
                <div>
                  <span className="text-xs text-sage-grey block font-medium">COMPLETE 5-PART BUNDLE</span>
                  <span className="text-2xl font-serif-heading text-deep-green">$119.99</span>
                </div>
                <Link
                  href="/collections/bye-bye-narcissist"
                  className="px-7 py-3 bg-deep-green text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-md text-xs"
                >
                  Shop Full System &rarr;
                </Link>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Luxury Studio Stage with Fixed Bottom Details Card */}
          <div className="hidden lg:block lg:w-[55%] h-full relative overflow-hidden bg-[#EBE5DB] border-l border-mist-grey">

            {/* Studio Ambient Stage Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-radial from-editorial-white/80 via-cream-logo/40 to-transparent pointer-events-none rounded-full blur-2xl" />

            {/* Product Mockup Stage (Centered in Upper Stage) */}
            <div className="absolute top-8 left-8 right-8 bottom-[240px] flex items-center justify-center z-10 p-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  src={encodeURI(items[activeTab].image)}
                  alt={items[activeTab].title}
                  className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)]"
                />
              </AnimatePresence>
            </div>

            {/* Bottom Details Card (PERFECTLY FIXED AT BOTTOM OF STAGE) */}
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full bg-[#05150D]/95 backdrop-blur-xl border border-editorial-white/15 p-6 sm:p-7 rounded-2xl text-editorial-white shadow-2xl h-[190px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif-heading text-2xl sm:text-3xl text-cream-logo font-light truncate max-w-[80%]">
                        {items[activeTab].num} / {items[activeTab].title}
                      </span>
                      <span className="text-xs font-semibold text-cream-logo whitespace-nowrap">
                        {items[activeTab].price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-editorial-white/80 font-light leading-relaxed line-clamp-2">
                      {items[activeTab].description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-editorial-white/15 flex items-center justify-between">
                    <span className="text-[11px] text-cream-logo/70 truncate max-w-[70%]">
                      Includes: {items[activeTab].details.join(" • ")}
                    </span>
                    <Link
                      href="/collections/bye-bye-narcissist"
                      className="px-5 py-2 bg-cream-logo text-deep-green font-semibold rounded-xl hover:bg-white transition-all text-xs shadow-sm whitespace-nowrap"
                    >
                      View Item &rarr;
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>

      {/* MOBILE VIEW: Clean Responsive Stack */}
      <div className="block lg:hidden py-16 px-6 space-y-10">

        {/* Mobile Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#8C7659]">
              FEATURED COLLECTION • 0{activeTab + 1} / 05
            </span>
          </div>

          <h2 className="font-serif-heading text-4xl text-deep-green leading-tight">
            Bye Bye Narcissist.
          </h2>

          <p className="text-sm text-[#626A64] font-light leading-relaxed">
            A 5-part connected recovery system designed to help you understand toxic dynamics and rebuild self-trust.
          </p>
        </div>

        {/* Item Selector Chips */}
        <div className="flex flex-wrap gap-2">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === idx
                  ? "bg-deep-green text-editorial-white shadow-md"
                  : "bg-editorial-white text-ink-black border border-mist-grey"
              }`}
            >
              {item.num}. {item.badge}
            </button>
          ))}
        </div>

        {/* Mobile Active Product Card */}
        <div className="p-6 bg-[#05150D] text-editorial-white rounded-3xl border border-editorial-white/15 shadow-2xl space-y-5">
          <div className="flex items-center justify-between">
            <span className="font-serif-heading text-3xl text-cream-logo font-light">
              {items[activeTab].num}
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase bg-soft-signal-green text-deep-green px-3 py-1 rounded-full">
              {items[activeTab].badge}
            </span>
          </div>

          <div className="w-full h-[220px] rounded-2xl bg-ink-black/40 overflow-hidden flex items-center justify-center p-4">
            <img
              src={encodeURI(items[activeTab].image)}
              alt={items[activeTab].title}
              className="w-auto h-full object-contain drop-shadow-xl"
            />
          </div>

          <h3 className="font-serif-heading text-2xl text-editorial-white leading-tight">
            {items[activeTab].title}
          </h3>

          <p className="text-xs text-[#C3CDC6] font-light leading-relaxed">
            {items[activeTab].description}
          </p>

          <div className="space-y-2 pt-2 border-t border-editorial-white/15">
            <div className="flex flex-wrap gap-1.5">
              {items[activeTab].details.map((detail, dIdx) => (
                <span
                  key={dIdx}
                  className="text-[10px] font-semibold text-cream-logo bg-editorial-white/10 px-2.5 py-0.5 rounded-full"
                >
                  ✓ {detail}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-editorial-white/15 flex items-center justify-between">
            <span className="text-2xl font-serif-heading text-cream-logo">
              {items[activeTab].price}
            </span>
            <Link
              href="/collections/bye-bye-narcissist"
              className="px-6 py-3 bg-cream-logo text-deep-green font-bold rounded-xl text-xs shadow-md"
            >
              Shop Tool &rarr;
            </Link>
          </div>
        </div>

        {/* Bundle CTA Card */}
        <div className="p-6 bg-editorial-white rounded-3xl border-2 border-deep-green flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div>
            <span className="text-[10px] text-sage-grey block font-bold uppercase tracking-wider">COMPLETE 5-PART BUNDLE</span>
            <span className="text-3xl font-serif-heading text-deep-green">$119.99</span>
          </div>
          <Link
            href="/collections/bye-bye-narcissist"
            className="w-full sm:w-auto px-8 py-4 bg-deep-green text-editorial-white font-semibold rounded-xl text-center text-xs shadow-md"
          >
            Shop Full System &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
