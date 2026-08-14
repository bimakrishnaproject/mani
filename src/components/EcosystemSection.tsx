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
    title: "Collections",
    description: "Complete collections designed to help you better understand and navigate specific life challenges.",
    ctaText: "Explore Collections",
    ctaLink: "/collections",
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png",
    type: "image",
  },
  {
    id: "app",
    number: "02",
    title: "App",
    description: "Guided conversations, breathwork, meditations, stories, and expert-created resources designed to support you whenever you need it.",
    ctaText: "Join Beta",
    ctaLink: "/join-beta",
    type: "app",
  },
  {
    id: "watch-learn",
    number: "03",
    title: "Watch & Learn",
    description: "Daily videos that turn psychology, relationships, and personal growth into practical insights you can use every day.",
    ctaText: "Watch Videos",
    ctaLink: "/watch-learn",
    image: newestVideo.thumbnailUrl,
    type: "video",
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
          <span className="text-xs font-bold tracking-widest text-cream-logo uppercase block mb-3">
            HOW MANI&trade; HELPS
          </span>
          <h2 className="font-serif-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-cream-logo leading-[1.1] tracking-tight">
            Three Ways We Can Help
          </h2>
        </div>

        {/* 3-Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0E2E1E] border border-editorial-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between group hover:border-cream-logo/40 transition-all duration-300"
            >
              <div>
                {/* Pillar Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest text-cream-logo uppercase">
                    {pillar.number} / {pillar.title}
                  </span>
                  {pillar.type === "video" && (
                    <span className="text-[10px] font-bold text-cream-logo bg-black/60 px-2.5 py-0.5 rounded-full border border-editorial-white/20">
                      {newestVideo.duration}
                    </span>
                  )}
                  {pillar.type === "app" && (
                    <span className="text-[9px] bg-editorial-white/10 px-2 py-0.5 rounded-full text-cream-logo font-bold">
                      BETA
                    </span>
                  )}
                </div>

                <h3 className="font-serif-heading text-2xl sm:text-3xl text-cream-logo mb-4 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>

                {/* Stage Preview Container */}
                {pillar.type === "image" && (
                  <div className="relative w-full h-[340px] sm:h-[380px] rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-[#143D28] via-[#0E2E1E] to-[#081F14] flex items-center justify-center border border-editorial-white/15 shadow-inner p-6 group">
                    <div className="absolute bottom-4 w-4/5 h-6 bg-black/40 blur-lg rounded-full pointer-events-none" />
                    <img
                      src={encodeURI(pillar.image!)}
                      alt={pillar.title}
                      className="relative z-10 max-h-[270px] sm:max-h-[300px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {pillar.type === "app" && (
                  <div className="relative w-full h-[340px] sm:h-[380px] rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-[#0B2418] to-[#05150D] p-3 sm:p-4 flex items-center justify-center border border-editorial-white/15 shadow-inner group">
                    {/* Modern Smartphone Frame with Official Chat */}
                    <div className="relative w-full max-w-[270px] h-full bg-[#020A06] border-2 border-emerald-500/30 rounded-[28px] p-2 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)] overflow-hidden">
                      {/* Top App Header with Get Help Now */}
                      <div className="w-full flex items-center justify-between px-2.5 pt-1 pb-1.5 border-b border-editorial-white/10 shrink-0">
                        <div className="flex items-center gap-1">
                          <img src="/assets/Mani Logos/mani cream logo.png" alt="MANI™" className="h-3 w-auto object-contain" />
                        </div>
                        <span className="text-[7.5px] font-bold tracking-wide text-cream-logo bg-[#0E2E1E] border border-emerald-400/30 px-2 py-0.5 rounded-full">
                          Get Help Now
                        </span>
                      </div>
                      {/* Live Crisp Official Conversation */}
                      <div className="flex-1 overflow-hidden py-1">
                        <ChatSimulator />
                      </div>
                    </div>
                  </div>
                )}

                {pillar.type === "video" && (
                  <div className="relative w-full h-[340px] sm:h-[380px] rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-[#143D28] via-[#0E2E1E] to-[#081F14] flex items-center justify-center p-3 sm:p-4 border border-editorial-white/15 shadow-inner group">
                    {/* 100% Full Uncropped 9:16 Vertical Video Reel Card */}
                    <div className="relative h-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-editorial-white/25 flex flex-col justify-between group-hover:scale-105 transition-transform duration-500 bg-black">
                      {/* Full Clean Vertical Artwork Thumbnail */}
                      <img
                        src={encodeURI(newestVideo.thumbnailUrl)}
                        alt={newestVideo.title}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />

                      {/* Top duration badge */}
                      <div className="relative z-10 p-2.5 flex justify-end">
                        <span className="text-[9px] font-bold text-cream-logo bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-editorial-white/20 shadow-md">
                          {newestVideo.duration}
                        </span>
                      </div>

                      {/* Center play button */}
                      <div className="relative z-10 flex items-center justify-center my-auto">
                        <div className="w-13 h-13 rounded-full bg-cream-logo/95 text-[#0E2E1E] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="ml-0.5">
                            <polygon points="8,5 19,12 8,19" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-[#E8F0EC] font-normal leading-relaxed mb-6">
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
