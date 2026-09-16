"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { VIDEOS_DATA, CATEGORIES, TOPIC_GROUPS, getStreamableVideoUrl, VideoItem } from "@/data/videos";
import { trackVideoView } from "@/lib/analytics";

export default function WatchLearnPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>("All Videos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(30);

  const videos: VideoItem[] = VIDEOS_DATA;

  useEffect(() => {
    setVisibleCount(30);
  }, [selectedTopic, searchQuery]);

  const filteredVideos = videos.filter((v) => {
    const topicLower = selectedTopic.trim().toLowerCase();
    const matchesTopic =
      selectedTopic === "All Videos" || selectedTopic === "All"
        ? true
        : v.category.trim().toLowerCase() === topicLower ||
          v.keywords.some((k) => k.trim().toLowerCase() === topicLower);
    const queryLower = searchQuery.trim().toLowerCase();
    const matchesQuery =
      queryLower === "" ||
      v.title.toLowerCase().includes(queryLower) ||
      v.category.toLowerCase().includes(queryLower) ||
      v.keywords.some((k) => k.toLowerCase().includes(queryLower));
    return matchesTopic && matchesQuery;
  });

  const visibleVideos = filteredVideos.slice(0, visibleCount);

  const handleOpenVideo = (video: VideoItem) => {
    setActiveVideoModal(video);
    trackVideoView(video.title, video.duration);
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden selection:bg-[#0E2E1E] selection:text-white">
      <Header />

      <main className="flex-grow pt-32 sm:pt-40 md:pt-48 pb-32">

        {/* HERO & BROWSE BY TOPIC (Full-Bleed Edge-to-Edge Deep Green Banner, Centered & Balanced) */}
        <section className="w-full bg-[#081F14] text-editorial-white py-16 sm:py-24 border-b border-editorial-white/10 mb-14 relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 relative z-10 space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-6 flex flex-col items-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cream-logo/85 bg-cream-logo/10 border border-cream-logo/20 px-4 py-1.5 rounded-full shadow-xs">
                SHORT VIDEOS
              </span>

              <h1 className="font-serif-heading text-5xl sm:text-7xl lg:text-8xl text-cream-logo leading-[0.96] tracking-tight">
                Watch &amp; Learn
              </h1>

              <p className="text-lg sm:text-xl text-[#FAF5EB] font-medium leading-relaxed max-w-2xl mx-auto">
                Short videos designed to help you understand your emotions, relationships, and the experiences shaping your life.
              </p>

              <div className="inline-flex items-center gap-2 bg-[#0E271B] border border-emerald-500/30 px-5 py-2 rounded-full shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-cream-logo">
                  500+ Videos. New Videos Added Daily.
                </span>
              </div>

              {/* Centered Search Bar */}
              <div className="relative w-full max-w-xl pt-2">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-cream-logo/70">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search topics or titles..."
                  className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-[#0E271B] text-cream-logo text-xs sm:text-sm placeholder-cream-logo/60 border border-emerald-500/30 focus:outline-none focus:border-cream-logo focus:bg-[#133524] transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-3 flex items-center text-xs text-cream-logo/80 hover:text-cream-logo cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* BROWSE BY TOPIC: 13 Categorized Topics across 4 Pillars */}
            <div className="pt-8 border-t border-editorial-white/15 space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <span className="text-xs font-bold text-cream-logo uppercase tracking-widest">
                  Browse by Topic:
                </span>
                <button
                  onClick={() => setSelectedTopic("All Videos")}
                  className={`text-xs font-semibold px-5 py-2 rounded-full transition-all cursor-pointer ${
                    selectedTopic === "All Videos"
                      ? "bg-cream-logo text-[#0E2E1E] font-bold shadow-md"
                      : "bg-[#0E271B] text-cream-logo border border-emerald-500/30 hover:bg-[#133524]"
                  }`}
                >
                  All Videos
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                {TOPIC_GROUPS.map((group) => (
                  <div key={group.pillar} className="space-y-2.5 bg-[#0A2417]/60 p-4 rounded-2xl border border-white/5">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-cream-logo/80 border-b border-editorial-white/10 pb-2 text-center">
                      {group.pillar}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {group.topics.map((topic) => (
                        <button
                          key={topic}
                          onClick={() => setSelectedTopic(topic)}
                          className={`text-xs px-3 py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                            selectedTopic === topic
                              ? "bg-cream-logo text-[#0E2E1E] font-bold shadow-xs"
                              : "text-[#E8F0EC] hover:text-cream-logo bg-[#0E271B]/80 hover:bg-[#133524] border border-white/5"
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION HEADER WITH SELECTED TOPIC DYNAMIC TITLE (Centered) */}
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-10 text-center">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#0E2E1E] uppercase tracking-wider block">
              {searchQuery ? "Search Results" : "Topic View"}
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl text-[#0E2E1E]">
              {searchQuery ? `"${searchQuery}"` : selectedTopic}
            </h2>
            <div className="pt-1">
              <span className="inline-block text-xs font-bold text-[#0E2E1E] bg-soft-white border border-mist-grey px-4 py-1.5 rounded-full shadow-xs">
                {filteredVideos.length} {filteredVideos.length === 1 ? "Video" : "Videos"}
              </span>
            </div>
          </div>
        </section>

        {/* VIDEO GRID (Strictly 5 columns on desktop in responsive layout per docs) */}
        {filteredVideos.length > 0 ? (
          <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-4 md:gap-6 w-full">
              {visibleVideos.map((video, idx) => (
                <motion.div
                  key={`${video.id}-${idx}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 5) * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleOpenVideo(video)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-mist-grey/80 transition-all aspect-[9/15] flex flex-col justify-between bg-[#0E2E1E]"
                >
                  {/* Thumbnail Image */}
                  <img
                    src={encodeURI(video.thumbnailUrl)}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors rounded-2xl" />

                  {/* Top: Category & Duration Badge (clean, no overlap) */}
                  <div className="relative z-10 p-2.5 flex items-center justify-between gap-1">
                    <span className="text-[8px] font-bold tracking-wider uppercase bg-[#0E2E1E]/85 text-cream-logo px-2 py-0.5 rounded-full border border-editorial-white/15 truncate max-w-[65%] shadow-xs">
                      {video.category}
                    </span>
                    <span className="text-[8px] font-bold text-cream-logo bg-black/70 backdrop-blur-xs px-2 py-0.5 rounded-full shrink-0 shadow-xs">
                      {video.duration}
                    </span>
                  </div>

                  {/* Center Play Icon */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="w-11 h-11 rounded-full bg-cream-logo/90 text-[#0E2E1E] flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-cream-logo transition-all">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-0.5">
                        <polygon points="8,5 19,12 8,19" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {visibleCount < filteredVideos.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 30)}
                  className="px-10 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-md text-sm cursor-pointer"
                >
                  Load More Videos ({visibleCount} of {filteredVideos.length}) &rarr;
                </button>
              </div>
            )}
          </section>
        ) : (
          <div className="w-full px-6 py-16 text-center space-y-4">
            <h3 className="font-serif-heading text-3xl text-[#0E2E1E]">
              No videos found matching &ldquo;{searchQuery}&rdquo;
            </h3>
            <p className="text-sm text-[#1C2826] max-w-md mx-auto font-normal">
              Try searching for different keywords or select &ldquo;All Videos&rdquo; to view our full video library.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTopic("All Videos");
              }}
              className="px-6 py-2.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-full text-xs hover:bg-[#143d28] transition-colors cursor-pointer"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}

        {/* BOTTOM SECTION: TAKE WHAT YOU LEARN FURTHER */}
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mt-8">
          <div className="w-full">
            <div className="bg-[#0E2E1E] text-editorial-white rounded-3xl p-10 sm:p-16 lg:p-20 text-center space-y-6 shadow-xl">
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
                Take What You Learn Further
              </h2>
              <p className="text-base sm:text-lg text-[#FAF5EB] font-medium leading-relaxed max-w-3xl mx-auto">
                Stay connected to new Watch &amp; Learn videos, practical guidance from <strong className="font-bold lowercase">mani</strong> Collections, and opportunities to experience the app.
              </p>
              <div className="pt-2">
                <Link
                  href="/join-community"
                  className="inline-flex px-8 py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all text-sm shadow-md cursor-pointer"
                >
                  Join Our Community &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      {/* Video Modal Player */}
      {activeVideoModal && (
        <VideoModal
          video={activeVideoModal}
          onClose={() => setActiveVideoModal(null)}
        />
      )}
    </div>
  );
}
