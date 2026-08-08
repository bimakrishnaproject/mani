"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";
import {
  ScrollReveal,
  KineticTextReveal,
  MagneticElement,
  CurtainClipExpand,
  DiagonalSlideIn,
  CountUpOnScroll,
  HorizontalScrollTrack,
} from "@/components/ScrollAnimations";
import { VIDEOS_DATA, CATEGORIES, getStreamableVideoUrl } from "@/data/videos";
import { trackVideoView } from "@/lib/analytics";

export default function WatchLearnPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Watch & Learn"
        description="This page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  const [selectedTopic, setSelectedTopic] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeVideoModal, setActiveVideoModal] = useState<any | null>(null);
  const [activeReelIdx, setActiveReelIdx] = useState<number>(0);
  const [isReelPaused, setIsReelPaused] = useState<boolean>(false);

  const [visibleCount, setVisibleCount] = useState<number>(24);

  const topics = CATEGORIES;

  // Videos ordered newest to oldest directly from VIDEOS_DATA (271 total)
  const videos = VIDEOS_DATA.map((v) => ({
    id: v.id,
    title: v.title,
    category: v.category,
    duration: v.duration,
    thumbnail: v.thumbnailUrl,
    description: v.summary,
    driveVideoUrl: v.driveVideoUrl,
    views: "500+ views",
  }));

  // Auto-looping featured reel thumbnail engine (cycles every 3.5 seconds)
  useEffect(() => {
    if (isReelPaused) return;
    const timer = setInterval(() => {
      setActiveReelIdx((prev) => (prev + 1) % videos.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isReelPaused, videos.length]);

  // Reset pagination count on search or topic change
  useEffect(() => {
    setVisibleCount(24);
  }, [selectedTopic, searchQuery]);

  // Real-time Search & Filter logic
  const filteredVideos = videos.filter((v) => {
    const matchesTopic = selectedTopic === "All Categories" || selectedTopic === "All" || v.category === selectedTopic;
    const matchesQuery =
      searchQuery.trim() === "" ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesQuery;
  });

  const visibleVideos = filteredVideos.slice(0, visibleCount);

  const handleOpenVideo = (video: any) => {
    setActiveVideoModal(video);
    trackVideoView(video.title, video.duration);
  };

  const currentReel = videos[activeReelIdx % videos.length] || videos[0];

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">

        {/* HERO BANNER WITH SEARCH BAR & DYNAMIC RIGHT-SIDE MOVING ANIMATION */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-16">
          <CurtainClipExpand className="bg-[#05150D] text-editorial-white rounded-3xl p-8 sm:p-14 border border-editorial-white/10 shadow-2xl relative overflow-hidden">
            {/* Ambient Animated Light Orbs */}
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-radial from-[#0E2E1E]/50 via-transparent to-transparent pointer-events-none rounded-full blur-3xl opacity-80 animate-pulse" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

              {/* Left Column (7 cols): Hero Content, Search Bar & Topic Filters */}
              <div className="lg:col-span-7 space-y-6">
                <DiagonalSlideIn from="top-left" distance={30}>
                  <div className="inline-block text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-editorial-white/15">
                    WATCH &amp; LEARN
                  </div>
                </DiagonalSlideIn>

                <KineticTextReveal
                  text="Support in Minutes."
                  tag="h1"
                  className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl lg:text-8xl text-cream-logo leading-tight"
                />

                <ScrollReveal direction="up" distance={30} delay={0.2}>
                  <p className="text-lg sm:text-xl text-[#C3CDC6] font-light leading-relaxed max-w-2xl">
                    Short videos designed to help you better understand your emotions, relationships, and the experiences shaping your life.
                  </p>
                </ScrollReveal>

                {/* Real-time Search Input Field */}
                <div className="relative max-w-md pt-2">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-cream-logo/60">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics (e.g. Narcissist, Boundaries, Overthinking)..."
                    className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-editorial-white/10 text-cream-logo text-xs placeholder-cream-logo/40 border border-editorial-white/20 focus:outline-none focus:border-cream-logo backdrop-blur-md transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute inset-y-0 right-3 flex items-center text-xs text-cream-logo/60 hover:text-cream-logo"
                    >
                      ✕
                    </button>
                  )}
                </div>

                {/* Topic Filter Pills */}
                <div className="pt-2 flex flex-wrap gap-2.5">
                  {topics.map((topic, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedTopic(topic)}
                      className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                        selectedTopic === topic
                          ? "bg-cream-logo text-[#0E2E1E] shadow-md scale-105"
                          : "bg-editorial-white/10 text-cream-logo border border-editorial-white/15 hover:bg-editorial-white/20"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column (5 cols): MOVING & AUTO-LOOPING THUMBNAIL 3D STAGE */}
              <div
                onMouseEnter={() => setIsReelPaused(true)}
                onMouseLeave={() => setIsReelPaused(false)}
                className="lg:col-span-5 flex justify-center items-center relative py-6"
              >

                {/* Floating Micro Badge 1 (Top Left) */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 left-0 z-30 hidden sm:flex items-center gap-2 bg-[#0E2E1E] text-cream-logo px-4 py-2 rounded-full shadow-2xl text-xs font-bold border border-emerald-500/30"
                >
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                  <span>✨ FEATURED PREVIEWS ({activeReelIdx + 1}/{videos.length})</span>
                </motion.div>

                {/* Floating Micro Badge 2 (Bottom Right) */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 right-0 z-30 hidden sm:flex items-center gap-2 bg-editorial-white text-deep-green px-4 py-2 rounded-full shadow-2xl text-xs font-bold border border-mist-grey"
                >
                  <span>⏱ 3-Min Daily Lessons</span>
                </motion.div>

                {/* Main Floating 3D Video Stage Card */}
                <motion.div
                  animate={{
                    y: [0, -14, 0],
                    rotateZ: [0, 1.5, 0, -1.5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  onClick={() => handleOpenVideo(currentReel)}
                  className="relative w-full max-w-[340px] bg-[#081F14] border-2 border-emerald-500/40 rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.7)] group cursor-pointer"
                >
                  <div className="relative w-full h-[370px] overflow-hidden">

                    {/* FLUID THUMBNAIL AUTO-LOOP IMAGE */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        key={currentReel.id}
                        src={encodeURI(currentReel.thumbnail)}
                        alt={currentReel.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081F14] via-[#081F14]/40 to-black/40 flex flex-col justify-between p-6">
                        <div className="flex justify-between items-center z-10">
                          <span className="text-[10px] font-bold tracking-widest uppercase bg-[#0E2E1E] text-cream-logo px-3 py-1 rounded-full border border-emerald-500/30">
                            {currentReel.category}
                          </span>
                          <span className="text-xs font-bold text-cream-logo bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                            ⏱ {currentReel.duration}
                          </span>
                        </div>

                        {/* Pulsing Big Play Button */}
                        <div className="flex justify-center items-center my-auto z-10">
                          <div className="relative flex items-center justify-center">
                            <div className="absolute w-20 h-20 bg-cream-logo/30 rounded-full animate-ping" />
                            <div className="w-16 h-16 bg-cream-logo text-[#0E2E1E] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform relative z-10">
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                                <polygon points="9,6 18,12 9,18" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="z-10">
                          <h3 className="font-serif-heading text-xl text-cream-logo leading-snug group-hover:text-emerald-300 transition-colors line-clamp-2">
                            {currentReel.title}
                          </h3>
                          <span className="text-[11px] font-semibold text-emerald-400 mt-1 block">
                            Click to play this video &rarr;
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Loop Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-editorial-white/20 z-20">
                      <motion.div
                        key={activeReelIdx}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.5, ease: "linear" }}
                        className="h-full bg-cream-logo"
                      />
                    </div>

                  </div>
                </motion.div>

              </div>

            </div>
          </CurtainClipExpand>
        </section>

        {/* SECTION HEADER FOR VIDEO GRID */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#0E2E1E] tracking-widest uppercase block mb-1">
              WATCH &amp; LEARN ({selectedTopic.toUpperCase()})
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#0E2E1E]">
              {searchQuery ? `Search Results for "${searchQuery}" (${filteredVideos.length})` : "Explore the Video Library"}
            </h2>
          </div>
          <span className="text-xs font-bold text-sage-grey hidden sm:inline-block bg-soft-white border border-mist-grey px-4 py-2 rounded-full">
            {filteredVideos.length} {filteredVideos.length === 1 ? "VIDEO" : "VIDEOS"} MATCHED
          </span>
        </section>

        {/* CLEAN RESPONSIVE VIDEO GRID */}
        {filteredVideos.length > 0 ? (
          <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => handleOpenVideo(video)}
                  className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-editorial-white/15 transition-all hover:scale-[1.02] aspect-[9/15] flex flex-col justify-between p-6 bg-[#05150D]"
                >
                  {/* Full Background Thumbnail Image */}
                  <img
                    src={encodeURI(video.thumbnail)}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover object-top rounded-3xl group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />

                  {/* Soft Dark Gradient Overlay for High Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/25 group-hover:from-black/90 transition-all rounded-3xl" />

                  {/* Top Bar: Category & Duration Pills */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-[#0E2E1E]/90 text-cream-logo px-3 py-1 rounded-full border border-emerald-500/30 backdrop-blur-md shadow-md">
                      {video.category}
                    </span>
                    <span className="text-[10px] font-bold text-cream-logo bg-black/75 px-2.5 py-1 rounded-full backdrop-blur-md border border-editorial-white/20 shadow-md">
                      ⏱ {video.duration}
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
                  <div className="relative z-10 space-y-2">
                    <h3 className="font-serif-heading text-xl sm:text-2xl text-cream-logo leading-snug group-hover:text-white transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-xs text-editorial-white/80 font-light leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                    <div className="pt-2.5 border-t border-editorial-white/20 flex items-center justify-between text-xs text-cream-logo/80 font-semibold">
                      <span>{video.views}</span>
                      <span className="text-cream-logo font-bold group-hover:underline flex items-center gap-1">
                        Watch Video &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredVideos.length && (
              <div className="mt-16 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 24)}
                  className="px-10 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-xl text-sm cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Load More Videos ({visibleCount} of {filteredVideos.length})</span>
                  <span>&rarr;</span>
                </button>
              </div>
            )}
          </section>
        ) : (
          <div className="max-w-[1360px] mx-auto px-6 py-16 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-soft-white border border-mist-grey flex items-center justify-center mx-auto text-2xl">
              🔍
            </div>
            <h3 className="font-serif-heading text-3xl text-[#0E2E1E]">No videos found matching &ldquo;{searchQuery}&rdquo;</h3>
            <p className="text-sm text-[#626A64] max-w-md mx-auto font-light">
              Try searching for different keywords or select &ldquo;All&rdquo; topics to view our full video library.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTopic("All");
              }}
              className="px-6 py-2.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-full text-xs hover:bg-[#143d28] transition-colors"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}

        {/* DEEPER SUPPORT CTA */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mt-20">
          <CurtainClipExpand className="max-w-4xl mx-auto">
            <div className="bg-[#0E2E1E] text-editorial-white rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full inline-block">
                LOOKING FOR DEEPER SUPPORT?
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
                Go deeper with structured collections and guided tools.
              </h2>
              <p className="text-base sm:text-lg text-[#C3CDC6] font-light leading-relaxed max-w-2xl mx-auto">
                Videos create awareness. Collections create transformation. Explore our structured tools or join the app beta.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <MagneticElement strength={0.2}>
                  <Link
                    href="/collections"
                    className="px-8 py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all transform hover:scale-105 shadow-xl text-sm inline-block"
                  >
                    Explore Collections &rarr;
                  </Link>
                </MagneticElement>
                <MagneticElement strength={0.2}>
                  <Link
                    href="/#app"
                    className="px-8 py-4 bg-editorial-white/10 text-cream-logo border border-editorial-white/20 font-semibold rounded-xl hover:bg-editorial-white/20 transition-all text-sm inline-block"
                  >
                    Join App Beta &rarr;
                  </Link>
                </MagneticElement>
              </div>
            </div>
          </CurtainClipExpand>
        </section>

      </main>

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
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-[#081F14] text-editorial-white rounded-2xl border border-editorial-white/20 p-5 sm:p-6 shadow-2xl z-10 space-y-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-cream-logo uppercase tracking-widest block">
                    {activeVideoModal.category} • {activeVideoModal.duration}
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

              <p className="text-xs text-[#C3CDC6] font-light leading-relaxed">
                {activeVideoModal.description}
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href={getStreamableVideoUrl(activeVideoModal).replace("raw=1", "dl=0")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-cream-logo bg-[#0E2E1E] border border-editorial-white/20 px-4 py-2 rounded-full hover:bg-[#143d28] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>▶ Stream Video on Dropbox</span>
                  <span>&rarr;</span>
                </a>
                <Link
                  href="/collections"
                  className="text-xs font-semibold text-cream-logo bg-editorial-white/10 px-4 py-2 rounded-full hover:bg-editorial-white/20 transition-colors inline-block"
                >
                  Explore Collections &rarr;
                </Link>
                <Link
                  href="/#app"
                  className="text-xs font-semibold text-cream-logo bg-editorial-white/10 px-4 py-2 rounded-full hover:bg-editorial-white/20 transition-colors inline-block"
                >
                  Join Beta &rarr;
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
