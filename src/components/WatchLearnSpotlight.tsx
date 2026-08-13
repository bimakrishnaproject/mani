"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { VIDEOS_DATA } from "@/data/videos";

// Use the newest 5 videos from the data (newest first)
const newestVideos = VIDEOS_DATA.slice(0, 5).map((v) => ({
  id: v.id,
  title: v.title,
  category: v.category.toUpperCase(),
  duration: v.duration,
  summary: v.summary,
  thumbnail: v.thumbnailUrl,
}));

export default function WatchLearnSpotlight() {
  return (
    <section
      className="py-20 sm:py-28 bg-[#FBF9F5] text-ink-black w-full relative overflow-hidden border-t border-b border-mist-grey/60"
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase block mb-3">
              WATCH &amp; LEARN
            </span>
            <h2 className="font-serif-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-[1.1] tracking-tight">
              Support In Minutes
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4A524D] font-light leading-relaxed">
              Some days you need perspective. Some days you need clarity. Some days you just need a reminder that you&apos;re not alone.
            </p>
            <p className="mt-3 text-sm text-[#4A524D] font-light leading-relaxed">
              Our daily videos bring clarity to the emotions, patterns, and experiences shaping your life.
            </p>
            <p className="mt-2 text-xs text-[#626A64] font-light leading-relaxed">
              Psychology. Relationships. Emotional Intelligence. Shadow Work. Self-Sabotage. Stress and Overwhelm. Inner Child. Narcissistic Abuse. And more.
            </p>
          </div>

          <div>
            <Link
              href="/watch-learn"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-xs sm:text-sm shadow-sm whitespace-nowrap"
            >
              Watch Videos &rarr;
            </Link>
          </div>
        </div>

        {/* Clean Video Grid (no fan-out, no rotation) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-[1360px] mx-auto">
          {newestVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#0E2E1E] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-editorial-white/10 flex flex-col justify-between aspect-[9/14] w-full"
            >
              {/* Thumbnail */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={encodeURI(video.thumbnail)}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2E1E] via-transparent to-[#0E2E1E]/30 opacity-80" />
              </div>

              {/* Top: Category & Duration */}
              <div className="relative z-10 p-4 flex items-center justify-between">
                <span className="text-[9px] font-bold text-cream-logo bg-[#0E2E1E]/80 backdrop-blur-md px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-editorial-white/15">
                  {video.category}
                </span>
                <span className="text-[9px] font-bold text-editorial-white bg-ink-black/60 backdrop-blur-md px-2 py-0.5 rounded-full tracking-wider">
                  {video.duration}
                </span>
              </div>

              {/* Center Play Button */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <div className="w-11 h-11 rounded-full bg-cream-logo text-[#0E2E1E] flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-0.5">
                    <polygon points="8,5 19,12 8,19" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Bottom: Title & Summary */}
              <div className="relative z-10 p-4 bg-gradient-to-t from-[#0E2E1E] via-[#0E2E1E]/90 to-transparent">
                <h3 className="font-serif-heading text-sm sm:text-base text-editorial-white leading-snug group-hover:text-cream-logo transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-[10px] text-editorial-white/70 font-light leading-relaxed mt-1.5 line-clamp-2">
                  {video.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
