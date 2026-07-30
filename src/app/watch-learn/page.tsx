"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ScrollReveal,
  KineticTextReveal,
  MagneticElement,
  CurtainClipExpand,
  DiagonalSlideIn,
  CountUpOnScroll,
  HorizontalScrollTrack,
} from "@/components/ScrollAnimations";

export default function WatchLearnPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [activeVideoModal, setActiveVideoModal] = useState<any | null>(null);
  const [activeReelIdx, setActiveReelIdx] = useState<number>(0);
  const [isReelPaused, setIsReelPaused] = useState<boolean>(false);

  const topics = [
    "All",
    "Psychology",
    "Emotional Intelligence",
    "Childhood",
    "Paradoxes & Effects",
    "Relationships",
    "Life & Motivation",
    "Inner Child",
    "Overthinking",
    "Self-Sabotage",
    "Shadow Work",
    "Stress",
  ];

  const videos = [
    {
      id: "1",
      title: "How Emotionally Intelligent People Handle Hurt",
      category: "Emotional Intelligence",
      duration: "3:12 min",
      thumbnail: "/assets/Video Thumbnails/How Emotionally Intelligent People Handle Hurt.jpeg",
      views: "14.2k views",
      description: "Learn how high-EQ individuals process emotional injury without reacting impulsively or internalizing toxic blame.",
    },
    {
      id: "2",
      title: "5 Signs You Struggle to Say What You Need",
      category: "Relationships",
      duration: "2:45 min",
      thumbnail: "/assets/Video Thumbnails/5 Signs You Struggle to Say What You Need.jpeg",
      views: "18.9k views",
      description: "Guilt often misinterprets self-protection as selfishness. Here is the psychological breakdown of boundary guilt.",
    },
    {
      id: "3",
      title: "How To Recognize A Narcissist",
      category: "Psychology",
      duration: "3:40 min",
      thumbnail: "/assets/Video Thumbnails/How To Recognize A Narcissist.jpeg",
      views: "24.5k views",
      description: "Covert manipulation does not look like overt aggression. Here are the subtle behavioral shifts to watch for.",
    },
    {
      id: "4",
      title: "How Self-Trust Actually Looks",
      category: "Emotional Intelligence",
      duration: "3:05 min",
      thumbnail: "/assets/Video Thumbnails/How Self-Trust Actually Looks.jpg",
      views: "19.1k views",
      description: "Practice this daily micro-validation routine to reclaim your reality and rebuild inner confidence.",
    },
    {
      id: "5",
      title: "4 Behaviors Linked to Chronic Overthinking",
      category: "Overthinking",
      duration: "1:58 min",
      thumbnail: "/assets/Video Thumbnails/4 Behaviors Linked to Chronic Overthinking.jpeg",
      views: "21.3k views",
      description: "A fast nervous system reset technique to stop overthinking loops right when they start.",
    },
    {
      id: "6",
      title: "Why You Repeat Toxic Cycles",
      category: "Psychology",
      duration: "3:50 min",
      thumbnail: "/assets/Video Thumbnails/Why You Repeat Toxic Cycles.jpg",
      views: "31.0k views",
      description: "Understand the patterns behind trauma bonds and how to safely break repetitive emotional cycles.",
    },
    {
      id: "7",
      title: "Overcoming Trauma Bond Dynamics",
      category: "Childhood",
      duration: "4:15 min",
      thumbnail: "/assets/Video Thumbnails/How To Recognize A Narcissist.jpeg",
      views: "16.8k views",
      description: "Deep dive into breaking trauma loops and establishing nervous system safety.",
    },
    {
      id: "8",
      title: "The Psychology of Unapologetic Boundaries",
      category: "Relationships",
      duration: "3:30 min",
      thumbnail: "/assets/Video Thumbnails/5 Signs You Struggle to Say What You Need.jpeg",
      views: "22.4k views",
      description: "Setting clear boundaries without anxiety, fear of abandonment, or guilt.",
    },
  ];

  // Auto-looping featured reel thumbnail engine (cycles every 3.5 seconds)
  useEffect(() => {
    if (isReelPaused) return;
    const timer = setInterval(() => {
      setActiveReelIdx((prev) => (prev + 1) % videos.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isReelPaused, videos.length]);

  const filteredVideos =
    selectedTopic === "All"
      ? videos
      : videos.filter((v) => v.category === selectedTopic);

  const currentReel = videos[activeReelIdx];

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">

        {/* HERO BANNER WITH DYNAMIC RIGHT-SIDE MOVING & LOOPING THUMBNAIL ENGINE */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-16">
          <CurtainClipExpand className="bg-[#05150D] text-editorial-white rounded-3xl p-8 sm:p-14 border border-editorial-white/10 shadow-2xl relative overflow-hidden">
            {/* Ambient Animated Light Orbs */}
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-radial from-[#0E2E1E]/50 via-transparent to-transparent pointer-events-none rounded-full blur-3xl opacity-80 animate-pulse" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Column (7 cols): Hero Content & Filters */}
              <div className="lg:col-span-7 space-y-6">
                <DiagonalSlideIn from="top-left" distance={30}>
                  <div className="inline-block text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full backdrop-blur-md border border-editorial-white/15">
                    WATCH &amp; LEARN CINEMA
                  </div>
                </DiagonalSlideIn>

                <KineticTextReveal
                  text="Support in Minutes."
                  tag="h1"
                  className="font-serif-heading text-5xl sm:text-7xl lg:text-8xl text-cream-logo leading-tight"
                />

                <ScrollReveal direction="up" distance={30} delay={0.2}>
                  <p className="text-lg sm:text-xl text-[#C3CDC6] font-light leading-relaxed max-w-2xl">
                    Short, cinematic videos designed to help you better understand your emotions, relationships, and the experiences shaping your life.
                  </p>
                </ScrollReveal>

                {/* Stats Row */}
                <div className="flex gap-8 pt-2 border-t border-editorial-white/10 max-w-md">
                  <div>
                    <div className="text-3xl font-serif-heading text-cream-logo">
                      <CountUpOnScroll end={500} suffix="+" className="text-3xl font-serif-heading text-cream-logo" />
                    </div>
                    <span className="text-[10px] text-sage-grey uppercase tracking-wider">Videos</span>
                  </div>
                  <div>
                    <div className="text-3xl font-serif-heading text-cream-logo">Daily</div>
                    <span className="text-[10px] text-sage-grey uppercase tracking-wider">New Releases</span>
                  </div>
                  <div>
                    <div className="text-3xl font-serif-heading text-cream-logo">Free</div>
                    <span className="text-[10px] text-sage-grey uppercase tracking-wider">Access</span>
                  </div>
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

                {/* Main Floating 3D Video Cinema Stage Card */}
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
                  onClick={() => setActiveVideoModal(currentReel)}
                  className="relative w-full max-w-[340px] bg-[#081F14] border-2 border-emerald-500/40 rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.7)] group cursor-pointer"
                >
                  <div className="relative w-full h-[370px] overflow-hidden">
                    
                    {/* FLUID THUMBNAIL & REEL TEXT AUTO-LOOP CROSS-FADE */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeReelIdx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <img
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
                      </motion.div>
                    </AnimatePresence>

                    {/* Progress Bar Indicator for Loop Timer */}
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

        {/* SECTION HEADER FOR HORIZONTAL CINEMA */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#0E2E1E] tracking-widest uppercase block mb-1">
              CINEMATIC HORIZONTAL SHOWCASE ({selectedTopic.toUpperCase()})
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#0E2E1E]">
              Scroll Down to Explore Video Library →
            </h2>
          </div>
          <span className="text-xs font-bold text-sage-grey hidden sm:inline-block bg-soft-white border border-mist-grey px-4 py-2 rounded-full">
            SWIPE / SCROLL HORIZONTALLY
          </span>
        </section>

        {/* PINNED HORIZONTAL SCROLL CINEMA SHOWCASE */}
        <HorizontalScrollTrack>
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideoModal(video)}
              className="w-[320px] sm:w-[380px] md:w-[420px] flex-shrink-0 group cursor-pointer bg-soft-white border-2 border-mist-grey rounded-3xl overflow-hidden hover:border-[#0E2E1E] transition-all hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-[380px] sm:h-[440px] bg-ink-black overflow-hidden flex items-center justify-center">
                <img
                  src={encodeURI(video.thumbnail)}
                  alt={video.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ink-black/85 via-ink-black/20 to-transparent group-hover:bg-ink-black/20 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 bg-cream-logo text-[#0E2E1E] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <polygon points="9,6 18,12 9,18" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-[#0E2E1E] text-cream-logo px-3 py-1 rounded-full shadow-md">
                    {video.category}
                  </span>
                  <span className="bg-ink-black/80 text-cream-logo text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md border border-editorial-white/20">
                    ⏱ {video.duration}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <h3 className="font-serif-heading text-2xl text-[#0E2E1E] leading-snug group-hover:text-[#1c5c3b] transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-[#626A64] font-light leading-relaxed line-clamp-2">
                  {video.description}
                </p>
                <div className="pt-3 border-t border-mist-grey flex items-center justify-between text-xs text-sage-grey font-medium">
                  <span>{video.views}</span>
                  <span className="text-[#0E2E1E] font-bold group-hover:underline">
                    Watch Cinema &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </HorizontalScrollTrack>

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
              className="relative w-full max-w-md bg-[#081F14] text-editorial-white rounded-2xl border border-editorial-white/20 p-6 shadow-2xl z-10 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-cream-logo uppercase tracking-widest block">
                    {activeVideoModal.category} • {activeVideoModal.duration}
                  </span>
                  <h3 className="font-serif-heading text-2xl text-cream-logo mt-0.5">
                    {activeVideoModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="w-9 h-9 rounded-full bg-editorial-white/10 text-cream-logo flex items-center justify-center hover:bg-editorial-white/20 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="relative w-full h-[480px] bg-ink-black rounded-xl overflow-hidden flex items-center justify-center border border-editorial-white/15">
                <img
                  src={encodeURI(activeVideoModal.thumbnail)}
                  alt={activeVideoModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-ink-black/30 flex flex-col items-center justify-center space-y-4">
                  <div className="w-20 h-20 bg-cream-logo text-[#0E2E1E] rounded-full flex items-center justify-center shadow-2xl animate-pulse cursor-pointer">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                      <polygon points="9,6 18,12 9,18" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-cream-logo uppercase tracking-wider bg-ink-black/85 px-4 py-1.5 rounded-full border border-editorial-white/20">
                    ▶ PLAY VIDEO
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#C3CDC6] font-light leading-relaxed">
                {activeVideoModal.description}
              </p>

              <div className="flex gap-3 pt-2">
                <Link
                  href="/collections"
                  className="text-xs font-semibold text-cream-logo bg-editorial-white/10 px-4 py-2 rounded-full hover:bg-editorial-white/20 transition-colors inline-block"
                >
                  Explore Collections →
                </Link>
                <Link
                  href="/#app"
                  className="text-xs font-semibold text-cream-logo bg-editorial-white/10 px-4 py-2 rounded-full hover:bg-editorial-white/20 transition-colors inline-block"
                >
                  Join Beta →
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
