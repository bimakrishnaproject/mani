"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ChatSimulator from "@/components/ChatSimulator";

const pillars = [
  {
    id: "physical-collections",
    number: "01",
    subtitle: "PHYSICAL SYSTEM",
    title: "Physical Literature",
    tagline: "Reading creates understanding. Workbooks create action. Journals create calm.",
    description: "Connected 5-part physical systems designed to guide you through emotional dynamics, boundary work, and daily habit integration.",
    ctaText: "Explore Collections System",
    ctaLink: "/collections",
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png",
    type: "image",
  },
  {
    id: "watch-learn",
    number: "02",
    subtitle: "VIDEO LIBRARY",
    title: "Watch & Learn",
    tagline: "Bite-sized expert guidance when you need immediate perspective.",
    description: "Access daily micro-videos featuring clinical insights, real-time grounding exercises, and practical tools that build on your collections.",
    ctaText: "Explore Video Library",
    ctaLink: "/watch-learn",
    image: "/assets/Video Thumbnails/How Emotionally Intelligent People Handle Hurt.jpeg",
    type: "video",
  },
  {
    id: "guided-tech",
    number: "03",
    subtitle: "MOBILE APP BETA",
    title: "Guided Mobile Technology",
    tagline: "Private, real-time reflection right from your phone.",
    description: "An intelligent supportive companion designed to help you process feelings in the moment, reframe overwhelming thoughts, and track emotional clarity.",
    ctaText: "Request Early Access",
    ctaLink: "/join-beta",
    type: "app",
  },
];

export default function EcosystemSection() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#081F14] text-editorial-white w-full relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-radial from-[#143d28]/40 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-cream-logo/70 uppercase block mb-3">
            THE MANI ECOSYSTEM
          </span>
          <h2 className="font-serif-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-cream-logo leading-[1.1] tracking-tight">
            One System, Multiple Ways of Support
          </h2>
          <p className="mt-4 text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed">
            MANI integrates physical literature, educational video guidance, and mobile reflection tools into one connected experience.
          </p>

          {/* Connected System Flow Indicator */}
          <div className="mt-6 pt-4 border-t border-editorial-white/15 flex flex-wrap items-center gap-3 text-xs font-medium text-cream-logo/70">
            <span className="text-cream-logo font-bold uppercase tracking-wider">Connected System:</span>
            <span className="bg-editorial-white/10 px-3 py-1 rounded-full border border-editorial-white/15">01 Physical Literature</span>
            <span>&rarr;</span>
            <span className="bg-editorial-white/10 px-3 py-1 rounded-full border border-editorial-white/15">02 Video Library</span>
            <span>&rarr;</span>
            <span className="bg-editorial-white/10 px-3 py-1 rounded-full border border-editorial-white/15">03 Mobile App</span>
          </div>
        </div>

        {/* Simultaneous 3-Pillar Side-by-Side Grid (Zero Tab Clicks Required!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="bg-[#0E2E1E] border border-editorial-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-cream-logo/40 transition-all duration-300"
            >
              <div>
                {/* Pillar Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest text-cream-logo/70 uppercase">
                    {pillar.number} / {pillar.subtitle}
                  </span>
                </div>

                <h3 className="font-serif-heading text-2xl sm:text-3xl text-cream-logo mb-3 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>

                {/* Stage Preview Container */}
                {pillar.type === "app" ? (
                  <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden mb-6 bg-[#05150D] p-3 flex items-center justify-center border border-editorial-white/15 shadow-inner">
                    <div className="w-full h-full bg-[#081F14] text-editorial-white rounded-[20px] p-2.5 font-sans text-xs overflow-hidden">
                      <div className="flex items-center justify-between border-b border-editorial-white/10 pb-1.5 mb-2">
                        <div className="flex items-center gap-1.5">
                          <img src="/assets/Mani Logos/mani cream logo.png" alt="MANI" className="h-3.5 w-auto object-contain" />
                          <span className="font-semibold text-cream-logo text-[10px]">Reflection AI</span>
                        </div>
                        <span className="text-[8px] bg-editorial-white/10 px-2 py-0.5 rounded-full text-cream-logo">BETA</span>
                      </div>
                      <ChatSimulator />
                    </div>
                  </div>
                ) : pillar.type === "video" ? (
                  <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-[#05150D] to-[#0A2619] flex items-center justify-center border border-editorial-white/15 shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={encodeURI(pillar.image!)}
                      alt={pillar.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-ink-black/20 group-hover:bg-ink-black/35 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-cream-logo text-[#0E2E1E] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <polygon points="9,6 18,12 9,18" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-[#05150D] to-[#0A2619] flex items-center justify-center border border-editorial-white/15 shadow-inner p-4">
                    <img
                      src={encodeURI(pillar.image!)}
                      alt={pillar.title}
                      className="max-h-[92%] max-w-[92%] w-auto h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                <blockquote className="font-serif-italic text-sm sm:text-base text-cream-logo mb-3 leading-snug">
                  &ldquo;{pillar.tagline}&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-editorial-white/80 font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div>
                <Link
                  href={pillar.ctaLink}
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all text-xs sm:text-sm shadow-md"
                >
                  <span>{pillar.ctaText}</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
