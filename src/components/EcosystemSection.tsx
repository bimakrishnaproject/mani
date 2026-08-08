"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ChatSimulator from "@/components/ChatSimulator";
import { VIDEOS_DATA } from "@/data/videos";

const newestVideo = VIDEOS_DATA[0];

const pillars = [
  {
    id: "collections",
    number: "01",
    subtitle: "COLLECTIONS",
    title: "Collections",
    tagline: "Reading creates understanding. Workbooks create action. Journals create calm.",
    description: "Complete collections designed to help you better understand and navigate specific life challenges.",
    ctaText: "Explore Collections",
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
    description: "Daily videos that turn psychology, relationships, and personal growth into practical insights you can use every day.",
    ctaText: "Explore Video Library",
    ctaLink: "/watch-learn",
    image: newestVideo.thumbnailUrl,
    type: "video",
  },
  {
    id: "app",
    number: "03",
    subtitle: "APP BETA",
    title: "App",
    tagline: "Private, real-time support right from your phone.",
    description: "Guided conversations, breathwork, meditations, stories, and expert-created resources designed to support you whenever you need it.",
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
            HOW MANI HELPS
          </span>
          <h2 className="font-serif-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-cream-logo leading-[1.1] tracking-tight">
            Three Ways We Can Help
          </h2>
          <p className="mt-4 text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed">
            MANI integrates physical collections, educational video guidance, and mobile support tools into one connected experience.
          </p>
        </div>

        {/* 3-Pillar Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pillars.map((pillar, idx) => {
            if (pillar.type === "video") {
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="h-full"
                >
                  <Link
                    href="/watch-learn"
                    className="group relative block w-full h-full min-h-[520px] sm:min-h-[560px] bg-[#05150D] border border-editorial-white/15 rounded-3xl overflow-hidden p-6 sm:p-8 shadow-2xl hover:border-cream-logo/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Full 9:16 Reel Thumbnail Background */}
                    <img
                      src={encodeURI(newestVideo.thumbnailUrl)}
                      alt={newestVideo.title}
                      className="absolute inset-0 w-full h-full object-cover object-top rounded-3xl group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/25 group-hover:from-black/90 transition-all rounded-3xl" />

                    {/* Top Header: Pillar Subtitle + Category Tag & Duration */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-[#0E2E1E]/90 text-cream-logo px-3 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md shadow-md">
                        {pillar.number} / {pillar.subtitle}
                      </span>
                      <span className="text-[10px] font-bold text-cream-logo bg-black/75 px-2.5 py-1 rounded-full backdrop-blur-md border border-editorial-white/20 shadow-md">
                        ⏱ {newestVideo.duration}
                      </span>
                    </div>

                    {/* Center Play Button Overlay */}
                    <div className="relative z-10 flex items-center justify-center my-auto">
                      <div className="w-14 h-14 rounded-full bg-cream-logo text-[#0E2E1E] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <polygon points="9,6 18,12 9,18" fill="currentColor" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Text Overlay: Approved Title, Summary & CTA */}
                    <div className="relative z-10 space-y-2 pt-4 border-t border-editorial-white/15">
                      <h3 className="font-serif-heading text-xl sm:text-2xl text-cream-logo leading-snug group-hover:text-white transition-colors">
                        {newestVideo.title}
                      </h3>
                      <p className="text-xs text-editorial-white/80 font-light leading-relaxed line-clamp-2">
                        {newestVideo.summary}
                      </p>
                      <div className="pt-3 border-t border-editorial-white/10 flex items-center justify-between text-xs text-cream-logo/80 font-semibold">
                        <span>500+ views</span>
                        <span className="text-cream-logo font-bold group-hover:underline flex items-center gap-1">
                          Explore Video Library &rarr;
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            }

            return (
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
                    <div className="relative w-full aspect-[9/15] sm:h-[440px] rounded-2xl overflow-hidden mb-6 bg-[#05150D] p-3 flex items-center justify-center border border-editorial-white/15 shadow-inner">
                      <div className="w-full h-full bg-[#081F14] text-editorial-white rounded-[20px] p-2.5 font-sans text-xs overflow-hidden">
                        <div className="flex items-center justify-between border-b border-editorial-white/10 pb-1.5 mb-2">
                          <div className="flex items-center gap-1.5">
                            <img src="/assets/Mani Logos/mani cream logo.png" alt="MANI" className="h-3.5 w-auto object-contain" />
                            <span className="font-semibold text-cream-logo text-[10px]">MANI App</span>
                          </div>
                          <span className="text-[8px] bg-editorial-white/10 px-2 py-0.5 rounded-full text-cream-logo">BETA</span>
                        </div>
                        <ChatSimulator />
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[9/15] sm:h-[440px] rounded-2xl overflow-hidden mb-6 bg-[#0E2E1E] flex items-center justify-center border border-editorial-white/15 shadow-inner p-4">
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
