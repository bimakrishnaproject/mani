"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";
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
  const [visibleCount, setVisibleCount] = useState<number>(30);

  const topics = CATEGORIES;

  // Display newest videos first directly from curated order
  const videos = VIDEOS_DATA.map((v) => ({
    id: v.id,
    title: v.title,
    category: v.category,
    duration: v.duration,
    thumbnail: v.thumbnailUrl,
    description: v.summary,
    driveVideoUrl: v.driveVideoUrl,
  }));

  useEffect(() => {
    setVisibleCount(30);
  }, [selectedTopic, searchQuery]);

  const filteredVideos = videos.filter((v) => {
    const matchesTopic =
      selectedTopic === "All Categories" || selectedTopic === "All"
        ? true
        : v.category.trim().toLowerCase() === selectedTopic.trim().toLowerCase();
    const matchesQuery =
      searchQuery.trim() === "" ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesQuery;
  });

  const visibleVideos = filteredVideos.slice(0, visibleCount);

  const handleOpenVideo = (video: any) => {
    setActiveVideoModal(video);
    trackVideoView(video.title, video.duration);
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">

        {/* HERO & BROWSE BY TOPIC */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-14">
          <div className="bg-[#0E2E1E] text-editorial-white rounded-3xl p-8 sm:p-12 border border-editorial-white/10 shadow-xl space-y-8">
            <div className="max-w-3xl space-y-4">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cream-logo">
                WATCH &amp; LEARN
              </span>

              <h1 className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl lg:text-8xl text-cream-logo leading-[0.96] tracking-tight">
                Watch &amp; Learn
              </h1>

              <p className="text-lg sm:text-xl text-[#E8F0EC] font-normal leading-relaxed max-w-2xl">
                Short videos designed to help you better understand your emotions, relationships and experiences shaping your life.
              </p>

              <p className="text-sm text-[#D8E6DE] font-normal leading-relaxed max-w-2xl">
                500+ videos and growing. New videos added daily.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md pt-2">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-cream-logo/80">
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
                  className="w-full pl-11 pr-10 py-3 rounded-xl bg-editorial-white/10 text-cream-logo text-xs placeholder-cream-logo/70 border border-editorial-white/20 focus:outline-none focus:border-cream-logo transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-3 flex items-center text-xs text-cream-logo/80 hover:text-cream-logo"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Stationary Browse by Topic */}
            <div className="pt-2 border-t border-editorial-white/15 space-y-3">
              <span className="text-xs font-bold text-cream-logo uppercase tracking-widest block">
                Browse by Topic
              </span>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTopic(topic)}
                    className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors cursor-pointer ${
                      selectedTopic === topic
                        ? "bg-cream-logo text-[#0E2E1E] shadow-sm font-bold"
                        : "bg-editorial-white/10 text-cream-logo border border-editorial-white/15 hover:bg-editorial-white/20"
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION HEADER */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
              {searchQuery ? `Search Results for "${searchQuery}" (${filteredVideos.length})` : `${selectedTopic === "All Categories" || selectedTopic === "All" ? "All Videos" : selectedTopic}`}
            </h2>
          </div>
          <span className="text-xs font-bold text-[#0E2E1E] hidden sm:inline-block bg-soft-white border border-mist-grey px-3.5 py-1.5 rounded-full">
            {filteredVideos.length} {filteredVideos.length === 1 ? "VIDEO" : "VIDEOS"}
          </span>
        </section>

        {/* VIDEO GRID (5 columns on desktop) */}
        {filteredVideos.length > 0 ? (
          <section className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {visibleVideos.map((video, idx) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 5) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleOpenVideo(video)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-lg border border-mist-grey transition-all aspect-[9/14] flex flex-col justify-between bg-[#05150D]"
                >
                  <img
                    src={encodeURI(video.thumbnail)}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 rounded-2xl" />

                  {/* Top: Category & Duration */}
                  <div className="relative z-10 p-3 flex items-center justify-between">
                    <span className="text-[8px] font-bold tracking-wider uppercase bg-[#0E2E1E]/80 text-cream-logo px-2 py-0.5 rounded-full border border-editorial-white/15">
                      {video.category}
                    </span>
                    <span className="text-[8px] font-bold text-editorial-white bg-black/60 px-2 py-0.5 rounded-full">
                      {video.duration}
                    </span>
                  </div>

                  {/* Center Play */}
                  <div className="relative z-10 flex items-center justify-center my-auto">
                    <div className="w-10 h-10 rounded-full bg-cream-logo text-[#0E2E1E] flex items-center justify-center shadow-md transition-all duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-0.5">
                        <polygon points="8,5 19,12 8,19" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom: Title */}
                  <div className="relative z-10 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xs font-semibold text-editorial-white leading-snug group-hover:text-cream-logo transition-colors line-clamp-2">
                      {video.title}
                    </h3>
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
          <div className="max-w-[1360px] mx-auto px-6 py-16 text-center space-y-4">
            <h3 className="font-serif-heading text-3xl text-[#0E2E1E]">No videos found matching &ldquo;{searchQuery}&rdquo;</h3>
            <p className="text-sm text-[#1C2826] max-w-md mx-auto font-normal">
              Try searching for different keywords or select &ldquo;All&rdquo; topics to view our full video library.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTopic("All Categories");
              }}
              className="px-6 py-2.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-full text-xs hover:bg-[#143d28] transition-colors"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}

        {/* BOTTOM CTA */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mt-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#0E2E1E] text-editorial-white rounded-2xl p-10 sm:p-14 text-center space-y-6 shadow-xl">
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
                Looking for deeper support?
              </h2>
              <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed max-w-2xl mx-auto">
                Explore our structured collections or join the app beta.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/collections"
                  className="px-8 py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all shadow-md text-sm"
                >
                  Explore Collections &rarr;
                </Link>
                <Link
                  href="/join-beta"
                  className="px-8 py-4 bg-editorial-white/10 text-cream-logo border border-editorial-white/20 font-semibold rounded-xl hover:bg-editorial-white/20 transition-all text-sm"
                >
                  Join App Beta &rarr;
                </Link>
              </div>
            </div>
          </div>
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

              <p className="text-xs text-editorial-white/70 font-light leading-relaxed">
                {activeVideoModal.description}
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
                  href="/collections"
                  className="text-xs font-semibold text-cream-logo bg-editorial-white/10 px-4 py-2 rounded-full hover:bg-editorial-white/20 transition-colors"
                >
                  Explore Collections &rarr;
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
