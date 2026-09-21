"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { VIDEOS_DATA, getStreamableVideoUrl } from "@/data/videos";
import { trackVideoView } from "@/lib/analytics";

import MaskedReveal from "@/components/MaskedReveal";

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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.15, once: true });
  const [containerWidth, setContainerWidth] = useState<number>(1200);

  // Dynamically measure container width to span 100% full width with zero side margins
  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const handleOpenVideo = (video: any) => {
    setActiveVideoModal(video);
    trackVideoView(video.title, video.duration);
  };

  const count = newestVideos.length; // 5

  // Sizing mathematics: strictly preserve exact 9:16 aspect ratio so 1080x1920 thumbnail is NEVER CUT
  // Subtle overlap (20px) creates the physical "menindih kartu setelahnya" layered deck without covering text
  const targetOverlap = Math.max(18, Math.min(26, containerWidth * 0.018));
  const rawCardWidth = (containerWidth + (count - 1) * targetOverlap) / count;
  const cardWidth = Math.max(240, Math.min(360, rawCardWidth));
  // Exact 9:16 aspect ratio: cardHeight / cardWidth = 16 / 9 (1080x1920)
  const cardHeight = Math.round(cardWidth * (16 / 9));

  // Step between card origins so Card 0 is flush left and Card (count - 1) is flush right
  const restingStep = count > 1 ? (containerWidth - cardWidth) / (count - 1) : 0;
  const actualOverlap = cardWidth - restingStep;

  return (
    <section
      id="watch-learn"
      className="pt-20 sm:pt-28 pb-36 sm:pb-48 bg-[#FBF9F5] text-ink-black w-full relative overflow-hidden select-none"
    >
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-4xl space-y-3">
            <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase block">
              WATCH &amp; LEARN
            </span>
            <MaskedReveal>
              <h2 className="font-serif-heading text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-[1.08] tracking-tight">
                Support In Minutes
              </h2>
            </MaskedReveal>
            <p className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed">
              Understand why you react the way you do, recognize patterns in your relationships, and learn new ways to respond through short, practical videos.
            </p>
            <p className="text-sm font-semibold text-[#0E2E1E] leading-relaxed pt-1">
              Psychology. Relationships. Emotional Intelligence. Shadow Work. Self-Sabotage. Stress and Overwhelm. Inner Child. Narcissistic Abuse. And more.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/watch-learn"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-xs sm:text-sm shadow-md whitespace-nowrap cursor-pointer"
            >
              <span>Watch Videos</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* DESKTOP & TABLET: 100% Full-Width Overlapping Deck (Exact 9:16 Uncut Thumbnails) */}
        <div
          ref={containerRef}
          onMouseLeave={() => setHoveredIdx(null)}
          className="hidden md:block w-full select-none relative pt-4 pb-8 overflow-visible"
        >
          <div
            className="w-full relative overflow-visible"
            style={{ height: `${cardHeight + 20}px` }}
          >
            {newestVideos.map((video, idx) => {
              const isHovered = hoveredIdx === idx;

              // Automatic scroll-triggered cascade:
              // When entering view, cards fan out from a compact cluster to their full overlapping deck
              let targetX = isInView ? idx * restingStep : idx * (restingStep * 0.45);
              let targetY = isInView ? 0 : 25;
              let targetScale = 1;
              let targetOpacity = isInView ? 1 : 0;
              let zIndex = count - idx + 10; // Card 0 has highest resting zIndex (menindih kartu setelahnya)

              if (hoveredIdx !== null && isInView) {
                if (isHovered) {
                  targetX = idx * restingStep;
                  targetY = -14;
                  targetScale = 1.04;
                  zIndex = 50; // Pop to front
                } else if (idx < hoveredIdx) {
                  // Preceding cards slide left slightly to reveal hovered card
                  const shift = Math.min(45, (hoveredIdx - idx) * 22);
                  targetX = idx * restingStep - shift;
                  targetScale = 0.98;
                  targetOpacity = 0.85;
                  zIndex = idx + 10;
                } else {
                  // Following cards slide right to completely uncover the hovered card
                  const shift = Math.max(55, actualOverlap + 30);
                  targetX = idx * restingStep + shift;
                  targetScale = 0.98;
                  targetOpacity = 0.85;
                  zIndex = count - idx + 10;
                }
              }

              return (
                <motion.div
                  key={video.id}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => handleOpenVideo(video)}
                  animate={{
                    x: targetX,
                    y: targetY,
                    scale: targetScale,
                    opacity: targetOpacity,
                  }}
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 0,
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 26,
                    mass: 0.8,
                    delay: !isInView ? 0 : idx * 0.08,
                  }}
                  className={`rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                    isHovered
                      ? "border-cream-logo shadow-[0_28px_60px_rgba(0,0,0,0.55)] ring-2 ring-cream-logo/50"
                      : "border-white/25 shadow-[8px_0_24px_rgba(0,0,0,0.32)]"
                  }`}
                >
                  {/* Exact 9:16 Thumbnail Image - 100% Full Uncut Display */}
                  <div className="relative w-full h-full bg-[#0E2E1E]">
                    <img
                      src={encodeURI(video.thumbnail)}
                      alt={video.title}
                      className="w-full h-full object-cover object-center select-none pointer-events-none"
                    />

                    {/* Gentle subtle hover overlay */}
                    <motion.div
                      animate={{ opacity: isHovered ? 0.15 : 0 }}
                      className="absolute inset-0 bg-black pointer-events-none"
                    />
                  </div>

                  {/* Center Play Button - Pops up dynamically on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                      >
                        <div className="w-14 h-14 rounded-full bg-cream-logo text-[#0E2E1E] flex items-center justify-center shadow-2xl ring-4 ring-cream-logo/30">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="ml-0.5">
                            <polygon points="8,5 19,12 8,19" fill="currentColor" />
                          </svg>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* MOBILE VIEW (Screens < 768px): Touch-Friendly Horizontal Reel (Uncut 9:16 Posters) */}
        <div className="flex md:hidden overflow-x-auto gap-4 pb-6 pt-2 px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {newestVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => handleOpenVideo(video)}
              className="group flex flex-col w-[210px] xs:w-[230px] shrink-0 snap-center cursor-pointer select-none"
            >
              {/* Exact 9:16 Card - 100% Uncut Poster */}
              <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-md border border-editorial-white/20 bg-[#0E2E1E]">
                <img
                  src={encodeURI(video.thumbnail)}
                  alt={video.title}
                  className="w-full h-full object-cover select-none"
                />

                {/* Center Play Button on mobile tap */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                  <div className="w-11 h-11 rounded-full bg-cream-logo/95 text-[#0E2E1E] flex items-center justify-center shadow-lg group-active:scale-95 transition-transform">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-0.5">
                      <polygon points="8,5 19,12 8,19" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Clean Metadata Below Card (Zero obstruction of thumbnail) */}
              <div className="mt-2 px-1">
                <div className="flex items-center justify-between text-[10px] font-bold text-[#0E2E1E]/75 uppercase tracking-wider mb-0.5">
                  <span className="truncate max-w-[70%]">{video.category}</span>
                  <span className="shrink-0">{video.duration}</span>
                </div>
                <h3 className="text-xs font-serif-heading text-[#0E2E1E] font-semibold truncate">
                  {video.title}
                </h3>
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
                  className="w-9 h-9 rounded-full bg-editorial-white/10 text-cream-logo flex items-center justify-center hover:bg-editorial-white/20 text-sm font-bold flex-shrink-0"
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
