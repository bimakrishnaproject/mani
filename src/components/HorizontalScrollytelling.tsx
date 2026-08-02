"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HorizontalScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll progress into horizontal translation percentage (-0% to -66.66%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  const panels = [
    {
      num: "01",
      badge: "PHYSICAL SYSTEM",
      title: "Bye Bye Narcissist Collection",
      subtitle: "Reading creates understanding. Workbooks create action. Journals create calm.",
      description: "A 5-part connected physical ecosystem designed to guide you through emotional dynamics, boundary work, and daily habit integration.",
      ctaText: "Explore Collection System — $119.99",
      ctaLink: "/collections/bye-bye-narcissist",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png",
      bgColor: "bg-deep-green text-editorial-white",
      textColor: "text-cream-logo",
    },
    {
      num: "02",
      badge: "VIDEO LIBRARY",
      title: "Daily Micro-Video Reels",
      subtitle: "500+ expert-led daily videos explaining complex psychology in 3 minutes.",
      description: "Short, grounded, actionable videos to help you process overthinking, recognize relationship patterns, and practice self-reflection.",
      ctaText: "Browse 500+ Free Micro-Videos",
      ctaLink: "/watch-learn",
      image: "/assets/Video Thumbnails/How Emotionally Intelligent People Handle Hurt.jpeg",
      bgColor: "bg-[#081F14] text-cream-logo",
      textColor: "text-cream-logo",
    },
    {
      num: "03",
      badge: "GUIDED MOBILE TECHNOLOGY",
      title: "Private MANI App Beta",
      subtitle: "Real-time reflection technology right from your phone.",
      description: "Beyond passive listening, MANI guides you toward understanding and practical next steps when you need emotional clarity most.",
      ctaText: "Join Private Beta Access",
      ctaLink: "/#app",
      image: "/assets/Chat Conversation.png",
      bgColor: "bg-editorial-white text-ink-black",
      textColor: "text-deep-green",
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-deep-green w-full border-t border-mist-grey">
      {/* DESKTOP VIEW: Pinned Horizontal Scrollytelling (100% Intact & Unchanged for Laptop/Desktop) */}
      <div className="hidden lg:block relative h-[300vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          
          {/* Top Header Badge & Navigation Indicator */}
          <div className="absolute top-8 left-8 right-8 z-30 flex items-center justify-between pointer-events-none">
            <div className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-deep-green px-4 py-2 rounded-full shadow-md">
              THE MANI ECOSYSTEM
            </div>
            <div className="text-xs font-bold tracking-widest text-sage-grey">
              ACT 01 — 03
            </div>
          </div>

          {/* Animated Horizontal Track */}
          <motion.div style={{ x }} className="flex w-[300vw] h-full">
            {panels.map((panel, idx) => (
              <div
                key={idx}
                className={`w-[100vw] h-full flex items-center px-8 sm:px-16 md:px-24 lg:px-32 relative ${panel.bgColor}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full max-w-[1400px] mx-auto">
                  
                  {/* Text Content */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-extrabold px-3.5 py-1.5 rounded-full ${idx === 2 ? "bg-deep-green text-editorial-white" : "bg-editorial-white/15 text-cream-logo"}`}>
                        {panel.num}
                      </span>
                      <span className={`text-xs font-bold tracking-widest uppercase ${idx === 2 ? "text-deep-green" : "text-sage-grey"}`}>
                        {panel.badge}
                      </span>
                    </div>

                    <h2 className={`font-serif-heading text-5xl sm:text-7xl md:text-8xl leading-[0.95] ${panel.textColor}`}>
                      {panel.title}
                    </h2>

                    <p className={`font-serif-italic text-2xl sm:text-3xl leading-snug ${idx === 2 ? "text-[#4A524D]" : "text-[#E5EBE7]"}`}>
                      "{panel.subtitle}"
                    </p>

                    <p className={`text-base sm:text-lg font-light leading-relaxed max-w-xl ${idx === 2 ? "text-[#626A64]" : "text-[#C3CDC6]"}`}>
                      {panel.description}
                    </p>

                    <div className="pt-4">
                      <Link
                        href={panel.ctaLink}
                        className={`inline-flex px-10 py-5 font-semibold rounded-md transition-all transform hover:scale-105 shadow-2xl text-base ${
                          idx === 2 ? "bg-deep-green text-editorial-white hover:bg-[#143d28]" : "bg-cream-logo text-deep-green hover:bg-[#f2e1bd]"
                        }`}
                      >
                        {panel.ctaText} &rarr;
                      </Link>
                    </div>
                  </div>

                  {/* Visual Asset Stage */}
                  <div className="lg:col-span-6 flex justify-center items-center">
                    <div className="relative w-full max-w-[600px] h-[460px] sm:h-[520px] flex items-center justify-center">
                      
                      {/* Panel 01: Physical Collection Mockup */}
                      {idx === 0 && (
                        <Image
                          src={panel.image}
                          alt={panel.title}
                          width={650}
                          height={480}
                          className="w-full h-auto object-contain max-h-[440px] drop-shadow-[0_35px_50px_rgba(0,0,0,0.5)] animate-float"
                          priority
                        />
                      )}

                      {/* Panel 02: Vertical Portrait Video Reel Aspect Ratio (aspect-[9/13]) */}
                      {idx === 1 && (
                        <div className="relative w-[300px] sm:w-[320px] h-[450px] sm:h-[480px] rounded-3xl overflow-hidden border-2 border-cream-logo/40 shadow-2xl bg-ink-black flex items-center justify-center">
                          <img
                            src={encodeURI(panel.image)}
                            alt={panel.title}
                            className="w-full h-full object-contain object-center"
                          />
                          <div className="absolute inset-0 bg-ink-black/25 flex items-center justify-center">
                            <div className="w-20 h-20 bg-cream-logo text-deep-green rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <polygon points="9,6 18,12 9,18" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-bold text-cream-logo z-10 bg-ink-black/85 px-4 py-2.5 rounded-xl backdrop-blur-md">
                            <span>EMOTIONAL INTELLIGENCE</span>
                            <span>1:30 min</span>
                          </div>
                        </div>
                      )}

                      {/* Panel 03: EXACT MATCH TO THREEWAYSSECTION */}
                      {idx === 2 && (
                        <Image
                          src="/assets/Chat Conversation.png"
                          alt={panel.title}
                          width={460}
                          height={920}
                          quality={100}
                          priority
                          className="w-auto h-[460px] sm:h-[520px] md:h-[580px] object-contain drop-shadow-2xl animate-float"
                        />
                      )}

                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* MOBILE VIEW: Clean Responsive Vertical Stack (Non-Overlapping, Zero Clipping) */}
      <div className="block lg:hidden py-12 px-6 space-y-16">
        
        {/* Header Badge */}
        <div className="flex items-center justify-between border-b border-editorial-white/20 pb-4">
          <span className="text-[11px] font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-3.5 py-1.5 rounded-full border border-editorial-white/20">
            THE MANI ECOSYSTEM
          </span>
          <span className="text-xs font-bold tracking-widest text-sage-grey">
            ACT 01 — 03
          </span>
        </div>

        {/* Panels Stack */}
        <div className="space-y-16">
          {panels.map((panel, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border border-editorial-white/15 space-y-6 ${panel.bgColor}`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${idx === 2 ? "bg-deep-green text-editorial-white" : "bg-editorial-white/15 text-cream-logo"}`}>
                  {panel.num}
                </span>
                <span className={`text-[11px] font-bold tracking-widest uppercase ${idx === 2 ? "text-deep-green" : "text-sage-grey"}`}>
                  {panel.badge}
                </span>
              </div>

              <h2 className={`font-serif-heading text-3xl sm:text-5xl leading-tight ${panel.textColor}`}>
                {panel.title}
              </h2>

              <p className={`font-serif-italic text-lg sm:text-xl leading-snug ${idx === 2 ? "text-[#4A524D]" : "text-[#E5EBE7]"}`}>
                "{panel.subtitle}"
              </p>

              <p className={`text-sm font-light leading-relaxed ${idx === 2 ? "text-[#626A64]" : "text-[#C3CDC6]"}`}>
                {panel.description}
              </p>

              {/* Visual Image */}
              <div className="pt-2 flex justify-center items-center">
                {idx === 0 && (
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    width={500}
                    height={360}
                    className="w-full h-auto object-contain max-h-[280px] drop-shadow-xl"
                  />
                )}
                {idx === 1 && (
                  <div className="relative w-[260px] h-[380px] rounded-2xl overflow-hidden border-2 border-cream-logo/40 shadow-xl bg-ink-black flex items-center justify-center">
                    <img
                      src={encodeURI(panel.image)}
                      alt={panel.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-ink-black/25 flex items-center justify-center">
                      <div className="w-16 h-16 bg-cream-logo text-deep-green rounded-full flex items-center justify-center shadow-lg">
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
                    alt={panel.title}
                    width={320}
                    height={640}
                    className="w-auto h-[360px] object-contain drop-shadow-xl"
                  />
                )}
              </div>

              <div className="pt-2">
                <Link
                  href={panel.ctaLink}
                  className={`block w-full py-4 text-center font-semibold rounded-xl transition-all shadow-lg text-sm ${
                    idx === 2 ? "bg-deep-green text-editorial-white" : "bg-cream-logo text-deep-green"
                  }`}
                >
                  {panel.ctaText} &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

