"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import { VIDEOS_DATA, CATEGORIES, VideoItem } from "@/data/videos";

export default function WatchLearnPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Topics");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filteredVideos = VIDEOS_DATA.filter((video) => {
    const matchesCategory =
      selectedCategory === "All Topics" || video.category === selectedCategory;
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-editorial-white selection:bg-soft-signal-green selection:text-deep-green">
      <Header />

      <main className="flex-grow pt-32 pb-28 md:pt-40 md:pb-36">
        {/* Header Section */}
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-12">
          <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full mb-4">
            DAILY VIDEO LIBRARY
          </div>
          <h1 className="font-serif-heading text-5xl md:text-7xl text-deep-green mb-4 leading-[0.98]">
            Watch & Learn
          </h1>
          <p className="text-base sm:text-lg text-[#4A524D] max-w-2xl leading-relaxed mb-8">
            Explore 500+ expert-led micro-videos designed to help you process emotions, spot relationship patterns, and practice self-reflection in minutes.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g., anxiety, narcissist, boundaries)..."
              className="w-full px-5 py-3.5 pl-11 border border-mist-grey rounded-xl text-sm bg-soft-white focus:outline-none focus:border-deep-green focus:bg-editorial-white transition-all"
            />
            <svg
              className="absolute left-4 top-4 text-sage-grey w-4 h-4"
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
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                  selectedCategory === cat
                    ? "bg-deep-green text-editorial-white shadow-xs"
                    : "bg-soft-white text-ink-black border border-mist-grey hover:border-deep-green"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid — Professional Vertical Video Shorts Layout (9:13 aspect ratio) */}
        <div className="max-w-[1360px] mx-auto px-6 md:px-12">
          {filteredVideos.length === 0 ? (
            <div className="py-20 text-center text-sage-grey bg-soft-white rounded-2xl border border-mist-grey">
              No videos found matching your search. Try another term or category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideo(video)}
                  className="group bg-editorial-white border border-mist-grey/80 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Vertical Portrait Video Reel Thumbnail (9:13 ratio) */}
                  <div className="relative aspect-[9/13] w-full bg-deep-green overflow-hidden">
                    <img
                      src={encodeURI(video.thumbnailUrl)}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Dark Gradient Overlay for Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                    {/* Floating Duration Badge */}
                    <div className="absolute top-3.5 right-3.5 bg-ink-black/75 text-editorial-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs">
                      {video.duration}
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-3.5 left-3.5 bg-deep-green/90 text-cream-logo text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-xs">
                      {video.category}
                    </div>

                    {/* Glowing Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-cream-logo text-deep-green rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <polygon points="9,6 18,12 9,18" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Card Info Details */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <h3 className="font-serif-heading text-xl text-deep-green group-hover:text-[#143d28] transition-colors leading-snug mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] font-medium text-sage-grey pt-3 border-t border-mist-grey/60">
                      <span>MANI Daily Video</span>
                      <span className="text-deep-green font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Watch <span className="text-xs">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Video Player Modal */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}

      <Footer />
    </div>
  );
}
