"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { VIDEOS_DATA, CATEGORIES, VideoItem } from "@/data/videos";

export default function WatchLearnPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filteredVideos = useMemo(() => {
    return VIDEOS_DATA.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === "All Categories" || video.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-editorial-white selection:bg-soft-signal-green selection:text-deep-green">
      <Header />

      <main className="flex-grow pt-32 pb-28 md:pt-40 md:pb-36">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          {/* Header Block */}
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full mb-4">
              WATCH & LEARN LIBRARY
            </div>
            <h1 className="font-serif-heading text-5xl md:text-7xl text-deep-green mb-4">
              Support in Minutes
            </h1>
            <p className="text-base md:text-xl text-[#4A524D] leading-relaxed mb-6">
              Short videos designed to help you better understand your emotions, relationships, and the experiences shaping your life.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-deep-green bg-soft-white border border-mist-grey px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              500+ videos and growing. New videos added daily.
            </div>
          </div>

          {/* Search Field */}
          <div className="max-w-[640px] mx-auto mb-10">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What would you like to understand today?"
                className="w-full px-6 py-4 pr-12 text-sm bg-soft-white border border-mist-grey rounded-full focus:outline-none focus:border-deep-green shadow-xs transition-colors"
              />
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-sage-grey hover:text-ink-black"
                >
                  Clear
                </button>
              ) : (
                <svg
                  className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-sage-grey"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-deep-green text-cream-logo shadow-xs"
                    : "bg-soft-white text-ink-black border border-mist-grey hover:bg-mist-grey"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          {filteredVideos.length === 0 ? (
            <div className="text-center py-20 bg-soft-white border border-mist-grey rounded-2xl">
              <h3 className="font-serif-heading text-2xl text-deep-green mb-2">
                No videos found
              </h3>
              <p className="text-sm text-sage-grey mb-6">
                Try searching for another topic or clear your filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All Categories");
                }}
                className="px-6 py-2.5 bg-deep-green text-editorial-white text-xs font-semibold rounded-md"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className="bg-editorial-white border border-mist-grey rounded-2xl overflow-hidden group cursor-pointer hover:-translate-y-1.5 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="relative aspect-video bg-mist-grey overflow-hidden">
                    <img
                      src={encodeURI(video.thumbnailUrl)}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-ink-black/20 group-hover:bg-ink-black/40 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-cream-logo text-deep-green flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <polygon points="9,6 18,12 9,18" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 text-[10px] font-bold bg-ink-black/75 text-editorial-white px-2 py-0.5 rounded-sm backdrop-blur-xs">
                      {video.duration}
                    </span>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider text-deep-green uppercase bg-soft-signal-green px-2.5 py-0.5 rounded-sm inline-block mb-2">
                        {video.category}
                      </span>
                      <h3 className="font-semibold text-base text-ink-black group-hover:text-deep-green transition-colors leading-snug line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Video Modal Player */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />

      <Footer />
    </div>
  );
}
