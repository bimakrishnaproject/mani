"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { VIDEOS_DATA, getStreamableVideoUrl } from "@/data/videos";
import { trackVideoView } from "@/lib/analytics";

// Use the newest 5 videos from the data (newest first)
const newestVideos = VIDEOS_DATA.slice(0, 5).map((v) => ({
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
      className="py-20 sm:py-28 bg-[#FBF9F5] text-ink-black w-full relative overflow-hidden border-t border-b border-mist-grey/60"
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase block">
              WATCH &amp; LEARN
            </span>
            <h2 className="font-serif-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-[1.08] tracking-tight">
              Support In Minutes
            </h2>
            <p className="text-base sm:text-lg text-[#1C2826] font-normal leading-relaxed">
              Some days you need perspective. Some days you need clarity. Some days you just need a reminder that you&apos;re not alone.
            </p>
            <p className="text-base text-[#1C2826] font-normal leading-relaxed">
              Our daily videos bring clarity to the emotions, patterns, and experiences shaping your life.
            </p>
            <p className="text-sm font-medium text-[#22332A] leading-relaxed pt-1">
              Psychology. Relationships. Emotional Intelligence. Shadow Work. Self-Sabotage. Stress and Overwhelm. Inner Child. Narcissistic Abuse. And more.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/watch-learn"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-xs sm:text-sm shadow-md whitespace-nowrap"
            >
              <span>Watch Videos</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Clean, Compact Video Grid with Calm Vertical Entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 max-w-[1360px] mx-auto">
          {newestVideos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleOpenVideo(video)}
              className="group relative bg-[#0E2E1E] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-editorial-white/10 flex flex-col justify-between aspect-[9/15] w-full cursor-pointer select-none"
            >
              {/* Actual Supplied Video Thumbnail */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={encodeURI(video.thumbnail)}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 opacity-70 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Top: Duration Badge */}
              <div className="relative z-10 p-2.5 flex items-center justify-end">
                <span className="text-[9px] font-bold text-cream-logo bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-full border border-editorial-white/15">
                  {video.duration}
                </span>
              </div>

              {/* Center Play Button */}
              <div className="relative z-10 flex items-center justify-center my-auto">
                <div className="w-10 h-10 rounded-full bg-cream-logo text-[#0E2E1E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-0.5">
                    <polygon points="8,5 19,12 8,19" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Bottom: Supplied Title & Summary */}
              <div className="relative z-10 p-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                <h3 className="font-serif-heading text-xs sm:text-sm text-cream-logo leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-[9.5px] text-[#D8E6DE] font-normal leading-tight mt-1 line-clamp-2 opacity-90">
                  {video.summary}
                </p>
              </div>
            </motion.div>
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
                  className="w-9 h-9 rounded-full bg-editorial-white/10 text-cream-logo flex items-center justify-center hover:bg-editorial-white/20 text-sm font-bold flex-shrink-0"
                >
                  ✕
                </button>
              </div>

              <div className="relative w-full aspect-[9/15] max-h-[460px] bg-ink-black rounded-xl overflow-hidden flex flex-col items-center justify-center border border-editorial-white/15">
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
                  Stream on Dropbox &rarr;
                </a>
                <Link
                  href="/watch-learn"
                  className="text-xs font-semibold text-cream-logo bg-editorial-white/10 px-4 py-2 rounded-full hover:bg-editorial-white/20 transition-colors"
                >
                  Explore All Videos &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
