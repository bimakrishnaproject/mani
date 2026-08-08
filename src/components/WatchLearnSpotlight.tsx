"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { VIDEOS_DATA } from "@/data/videos";

// Use the newest 3 videos from the data (newest first)
const newestVideos = VIDEOS_DATA.slice(0, 3).map((v, idx) => ({
  id: v.id,
  title: v.title,
  category: v.category.toUpperCase(),
  duration: v.duration,
  summary: v.summary,
  thumbnail: v.thumbnailUrl,
}));

export default function WatchLearnSpotlight() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Card 1 (Left): Starts shifted right behind center card with negative rotation, fans out to x: 0
  const card1X = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const card1Rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  // Card 2 (Center): Elevated z-index, subtle scale from 0.95 to 1.0
  const card2Scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  // Card 3 (Right): Starts shifted left behind center card with positive rotation, fans out to x: 0
  const card3X = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const card3Rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <section
      ref={sectionRef}
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
            <p className="mt-4 text-base sm:text-lg text-sage-grey font-light leading-relaxed">
              Some days you need perspective. Some days you need clarity. Some days you just need a reminder that you&apos;re not alone.
            </p>
          </div>

          <div>
            <Link
              href="/watch-learn"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-xs sm:text-sm shadow-sm whitespace-nowrap"
            >
              Explore Video Library &rarr;
            </Link>
          </div>
        </div>

        {/* Scroll-Driven Deck Unstack / Fan-Out Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1180px] mx-auto relative">
          {newestVideos.map((video, idx) => {
            let motionStyles = {};

            if (!isMobile) {
              if (idx === 0) {
                motionStyles = { x: card1X, rotate: card1Rotate, zIndex: 10 };
              } else if (idx === 1) {
                motionStyles = { scale: card2Scale, zIndex: 20 };
              } else if (idx === 2) {
                motionStyles = { x: card3X, rotate: card3Rotate, zIndex: 10 };
              }
            }

            return (
              <motion.div
                key={video.id}
                style={motionStyles}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#0E2E1E] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-editorial-white/10 flex flex-col justify-between aspect-[9/15] sm:aspect-[9/16] w-full min-h-[460px] sm:min-h-[500px]"
              >
                {/* Full-Height Vertical 9:16 Reel Cover Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={encodeURI(video.thumbnail)}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlays for Ambient Lighting & Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2E1E] via-transparent to-[#0E2E1E]/40 opacity-80" />
                </div>

                {/* Top Tag & Category Badge */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-cream-logo bg-[#0E2E1E]/80 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider border border-editorial-white/15">
                    {video.category}
                  </span>
                  <span className="text-[10px] font-bold text-editorial-white bg-ink-black/60 backdrop-blur-md px-2.5 py-1 rounded-full tracking-wider">
                    {video.duration}
                  </span>
                </div>

                {/* Center Play Button Overlay */}
                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="w-14 h-14 rounded-full bg-cream-logo text-[#0E2E1E] backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="ml-0.5">
                      <polygon points="8,5 19,12 8,19" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Caption & Title + Summary */}
                <div className="relative z-10 p-6 bg-gradient-to-t from-[#0E2E1E] via-[#0E2E1E]/90 to-transparent">
                  <h3 className="font-serif-heading text-xl sm:text-2xl text-editorial-white leading-snug drop-shadow-sm group-hover:text-cream-logo transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-[11px] text-editorial-white/70 font-light leading-relaxed mt-2 line-clamp-2">
                    {video.summary}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
