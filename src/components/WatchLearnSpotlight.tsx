"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { VIDEOS_DATA, getStreamableVideoUrl } from "@/data/videos";
import { trackVideoView } from "@/lib/analytics";
import MaskedReveal from "@/components/MaskedReveal";

// Use the newest 5 videos starting from the last number (newest first)
const newestVideos = [...VIDEOS_DATA].reverse().slice(0, 5).map((v) => ({
  id: v.id,
  title: v.title,
  category: v.category.toUpperCase(),
  duration: v.duration,
  summary: v.summary,
  thumbnail: v.thumbnailUrl,
  driveVideoUrl: v.driveVideoUrl,
}));

export default function WatchLearnSpotlight() {
  const [activeVideoModal, setActiveVideoModal] = useState<any | null>(null);

  const handleOpenVideo = (video: any) => {
    setActiveVideoModal(video);
    trackVideoView(video.title, video.duration);
  };

  return (
    <section
      id="watch-learn"
      className="py-20 sm:py-24 lg:py-28 bg-[#FBF9F5] text-ink-black w-full relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#0E2E1E]" />
              <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase">
                WATCH &amp; LEARN
              </span>
            </div>

            <MaskedReveal>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E2E1E] leading-[1.12] tracking-tight">
                Support In Minutes
              </h2>
            </MaskedReveal>

            <p className="text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed">
              Understand why you react the way you do, recognize patterns in your relationships, and learn new ways to respond through short, practical videos.
            </p>

            <p className="text-xs sm:text-sm font-semibold text-[#0E2E1E]/80 leading-relaxed pt-1">
              Psychology. Relationships. Emotional Intelligence. Shadow Work. Self-Sabotage. Stress and Overwhelm. Inner Child. Narcissistic Abuse. And more.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/watch-learn"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-xs sm:text-sm shadow-md whitespace-nowrap cursor-pointer"
            >
              <span>Watch Videos</span>
            </Link>
          </div>
        </div>

        {/* 5-Column Responsive Grid (No Horizontal Scroll or Overlapping Fan) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-start">
          {newestVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleOpenVideo(video)}
              className="group flex flex-col cursor-pointer select-none"
            >
              {/* 9:16 Uncut Video Thumbnail Poster */}
              <div className="relative w-full aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0E2E1E] border border-[#0E2E1E]/15 shadow-md group-hover:shadow-2xl group-hover:border-cream-logo/50 group-hover:-translate-y-1.5 transition-all duration-300">
                <img
                  src={encodeURI(video.thumbnail)}
                  alt={video.title}
                  className="w-full h-full object-cover object-center select-none"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/20 group-hover:from-black/90 group-hover:via-black/35 transition-colors" />

                {/* Center Play Button on hover */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cream-logo/95 text-[#0E2E1E] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-cream-logo transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-0.5">
                      <polygon points="8,5 19,12 8,19" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* VIDEO PLAYER MODAL */}
      <AnimatePresence>
        {activeVideoModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideoModal(null)}
              className="absolute inset-0 bg-ink-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-[#081F14] text-editorial-white rounded-2xl border border-editorial-white/20 p-5 sm:p-6 shadow-2xl z-10 space-y-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-cream-logo uppercase tracking-widest block">
                    {activeVideoModal.category} &bull; {activeVideoModal.duration}
                  </span>
                  <h3 className="font-serif-heading text-xl sm:text-2xl text-cream-logo mt-0.5">
                    {activeVideoModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="w-9 h-9 rounded-full bg-editorial-white/10 text-cream-logo flex items-center justify-center hover:bg-editorial-white/20 text-sm font-bold flex-shrink-0 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="relative w-full aspect-[9/16] max-h-[520px] bg-ink-black rounded-xl overflow-hidden flex flex-col items-center justify-center border border-editorial-white/15">
                <video
                  controls
                  autoPlay
                  playsInline
                  poster={encodeURI(activeVideoModal.thumbnail)}
                  src={getStreamableVideoUrl(activeVideoModal)}
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>

              <p className="text-xs text-[#E8F0EC] font-normal leading-relaxed">
                {activeVideoModal.summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={getStreamableVideoUrl(activeVideoModal).replace("raw=1", "dl=0")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-cream-logo bg-[#0E2E1E] border border-editorial-white/20 px-4 py-2 rounded-full hover:bg-[#143d28] transition-colors"
                >
                  Stream on Dropbox
                </a>
                <Link
                  href="/watch-learn"
                  className="text-xs font-semibold text-cream-logo bg-editorial-white/10 px-4 py-2 rounded-full hover:bg-editorial-white/20 transition-colors"
                >
                  Explore All Videos
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
