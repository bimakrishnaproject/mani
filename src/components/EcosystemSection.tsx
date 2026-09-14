"use client";

import React, { useState } from "react";
import Link from "next/link";
import ChatSimulator from "@/components/ChatSimulator";
import { VIDEOS_DATA } from "@/data/videos";

const newestVideo = VIDEOS_DATA[0];

interface CollectionBook {
  id: string;
  name: string;
  image: string;
  alt: string;
  baseRotation: string;
  hoverRotation: string;
  baseMargin: string;
  heightClass: string;
  zIndex: number;
}

const ECOSYSTEM_BOOKS: CollectionBook[] = [
  {
    id: "coloring",
    name: "Coloring Book & Journal",
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Coloring Book.png",
    alt: "The Bye Bye Narcissist Coloring Book and Daily Journal",
    baseRotation: "-rotate-[5deg]",
    hoverRotation: "-rotate-[1deg]",
    baseMargin: "-mr-3 sm:-mr-4 lg:-mr-5",
    heightClass: "h-[220px] sm:h-[255px] md:h-[285px] lg:h-[310px] xl:h-[345px] 2xl:h-[370px]",
    zIndex: 10,
  },
  {
    id: "book",
    name: "Hardcover Book",
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Book_Clean.png",
    alt: "The Bye Bye Narcissist Hardcover Book",
    baseRotation: "rotate-0",
    hoverRotation: "rotate-0",
    baseMargin: "z-20",
    heightClass: "h-[255px] sm:h-[295px] md:h-[335px] lg:h-[365px] xl:h-[400px] 2xl:h-[425px]",
    zIndex: 20,
  },
  {
    id: "workbook",
    name: "Guided Workbook",
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Workbook_Clean.png",
    alt: "The Bye Bye Narcissist Guided Workbook",
    baseRotation: "rotate-[5deg]",
    hoverRotation: "rotate-[1deg]",
    baseMargin: "-ml-3 sm:-ml-4 lg:-ml-5",
    heightClass: "h-[230px] sm:h-[265px] md:h-[300px] lg:h-[325px] xl:h-[360px] 2xl:h-[385px]",
    zIndex: 10,
  },
];

export default function EcosystemSection() {
  const [hoveredBookId, setHoveredBookId] = useState<string | null>(null);
  return (
    <section
      id="how-mani-helps"
      className="relative bg-[#06180F] text-cream-logo py-20 sm:py-24 lg:py-28 w-full border-b border-editorial-white/10 select-none overflow-hidden"
    >
      {/* Cinematic Ambient Stage Lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] bg-radial from-emerald-500/10 via-[#0E2E1E]/15 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Full-Width Canvas: Uses maximum screen width with balanced margins */}
      <div className="w-full max-w-[1880px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-16 space-y-12 lg:space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              HOW MANI HELPS
            </span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cream-logo leading-[1.05] tracking-tight">
            Three Ways We Can Help
          </h2>
        </div>

        {/* ============================================================== */}
        {/* THREE PILLARS: VISUAL STAGE & GROUNDED SHELF (NO CARD BG)      */}
        {/* ============================================================== */}
        <div className="w-full space-y-0">
          
          {/* Visual Showcase Row: Books, Phone, Video sitting side-by-side */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 xl:gap-12 items-end">
            
            {/* Pillar 1 Visual: Collections Books */}
            <Link
              href="/collections"
              className="w-full flex flex-col items-center justify-end cursor-pointer"
            >
              <div
                onMouseLeave={() => setHoveredBookId(null)}
                className="w-full flex items-end justify-center pb-0"
              >
                {ECOSYSTEM_BOOKS.map((book) => {
                  const isHovered = hoveredBookId === book.id;
                  const isAnyHovered = hoveredBookId !== null;

                  return (
                    <div
                      key={book.id}
                      onMouseEnter={() => setHoveredBookId(book.id)}
                      onMouseLeave={() => setHoveredBookId(null)}
                      className={`relative flex flex-col items-center justify-end cursor-pointer transition-all duration-300 origin-bottom select-none ${book.baseMargin} ${
                        isHovered
                          ? "z-50 -translate-y-5 sm:-translate-y-7"
                          : `${book.zIndex} ${isAnyHovered ? "opacity-75 scale-[0.98]" : "opacity-100 scale-100"}`
                      }`}
                    >
                      {/* Ambient Shadow Behind Book */}
                      <div
                        className={`absolute inset-0 bg-black/50 blur-2xl rounded-2xl pointer-events-none transition-all duration-300 ${
                          isHovered ? "opacity-60 scale-110" : "opacity-25 scale-100"
                        }`}
                      />

                      {/* The Book Mockup */}
                      <img
                        src={encodeURI(book.image)}
                        alt={book.alt}
                        className={`${book.heightClass} w-auto object-contain transition-all duration-300 relative z-10 origin-bottom ${
                          isHovered
                            ? `${book.hoverRotation} scale-[1.06] drop-shadow-[0_30px_45px_rgba(0,0,0,0.95)]`
                            : `${book.baseRotation} drop-shadow-[0_12px_22px_rgba(0,0,0,0.7)]`
                        }`}
                      />

                      {/* Contact Shadow Grounded Directly on the Shelf Floor */}
                      <div className="w-full relative h-0 pointer-events-none z-20">
                        <div
                          className={`w-[90%] h-[4px] bg-black/95 blur-[1.5px] rounded-full mx-auto -mt-[2px] transition-all duration-300 ${
                            isHovered ? "scale-50 opacity-25" : "scale-100 opacity-95"
                          }`}
                        />
                        <div
                          className={`w-[80%] h-[8px] bg-black/50 blur-[4px] rounded-full mx-auto -mt-[2px] transition-all duration-300 ${
                            isHovered ? "scale-60 opacity-20" : "scale-100 opacity-50"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Link>

            {/* Pillar 2 Visual: App Companion Phone */}
            <Link
              href="/join-beta"
              className="w-full flex flex-col items-center justify-end cursor-pointer group"
            >
              <div className="relative w-[215px] sm:w-[240px] lg:w-[260px] xl:w-[285px] 2xl:w-[310px] h-[300px] sm:h-[340px] lg:h-[375px] xl:h-[410px] 2xl:h-[435px] bg-[#020A06] border-[2.5px] border-[#1d4a32] rounded-t-[34px] p-2.5 sm:p-3 flex flex-col justify-between shadow-[0_25px_50px_rgba(0,0,0,0.85)] group-hover:scale-[1.02] origin-bottom transition-transform duration-300 overflow-hidden">
                {/* Top App Header */}
                <div className="w-full flex items-center justify-center px-2 pt-1 pb-2 border-b border-editorial-white/10 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <img
                      src="/assets/Mani Logos/mani cream logo.png"
                      alt="mani"
                      className="h-3 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Live Conversation Simulator */}
                <div className="flex-1 overflow-hidden py-1.5">
                  <ChatSimulator />
                </div>

                {/* Contact Shadow at Phone Base */}
                <div className="w-full relative h-0 pointer-events-none z-20">
                  <div className="w-[88%] h-[4px] bg-black/95 blur-[1px] rounded-full mx-auto -mt-[2px]" />
                  <div className="w-[78%] h-[8px] bg-black/50 blur-[3px] rounded-full mx-auto -mt-[2px]" />
                </div>
              </div>
            </Link>

            {/* Pillar 3 Visual: Watch & Learn Video */}
            <Link
              href="/watch-learn"
              className="w-full flex flex-col items-center justify-end cursor-pointer group"
            >
              <div className="relative w-[215px] sm:w-[240px] lg:w-[260px] xl:w-[285px] 2xl:w-[310px] h-[300px] sm:h-[340px] lg:h-[375px] xl:h-[410px] 2xl:h-[435px] rounded-t-2xl overflow-hidden border-t border-x border-white/20 shadow-[0_25px_50px_rgba(0,0,0,0.85)] group-hover:scale-[1.02] origin-bottom transition-transform duration-300">
                <img
                  src={newestVideo.thumbnailUrl}
                  alt={newestVideo.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/40" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-13 h-13 rounded-full bg-cream-logo/90 text-[#06180F] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="translate-x-0.5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Video Title */}
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <h4 className="text-xs sm:text-sm font-serif-heading font-medium text-cream-logo line-clamp-2 leading-snug">
                    {newestVideo.title}
                  </h4>
                </div>

                {/* Contact Shadow at Video Base */}
                <div className="w-full relative h-0 pointer-events-none z-20">
                  <div className="w-[88%] h-[4px] bg-black/95 blur-[1px] rounded-full mx-auto -mt-[2px]" />
                  <div className="w-[78%] h-[8px] bg-black/50 blur-[3px] rounded-full mx-auto -mt-[2px]" />
                </div>
              </div>
            </Link>

          </div>

          {/* Continuous Architectural Shelf Ledge (Tatakan Nyata - Edge-to-Edge) */}
          <div className="relative z-20 w-full -mt-2.5 sm:-mt-3">
            {/* Shelf Floor Surface Plane */}
            <div className="w-full h-4 sm:h-5 bg-gradient-to-r from-[#0d2618] via-[#1a4028] to-[#0d2618] border-t border-cream-logo/25 shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cream-logo/50 to-transparent" />
            </div>

            {/* Shelf Front Fascia */}
            <div className="w-full h-5 sm:h-6 bg-gradient-to-b from-[#0b2114] via-[#07150d] to-[#030a06] border-t border-black/80 shadow-[0_12px_24px_rgba(0,0,0,0.8)]" />
          </div>

        </div>

        {/* ============================================================== */}
        {/* THREE VISUAL CARDS: 100% VERBATIM COPY FROM docs/website_copy.md */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 xl:gap-12 2xl:gap-14 pt-4 sm:pt-6">
          
          {/* Pillar 1: Collections */}
          <Link
            href="/collections"
            className="space-y-3 block group cursor-pointer"
          >
            <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-[2.1rem] text-cream-logo tracking-tight leading-snug group-hover:text-white transition-colors">
              Collections
            </h3>
            <p className="text-sm sm:text-base text-cream-logo/80 font-normal leading-relaxed">
              Digital books, workbooks, and tools that help you explore a specific challenge and put what you learn into practice.
            </p>
          </Link>

          {/* Pillar 2: App */}
          <Link
            href="/join-beta"
            className="space-y-3 block group cursor-pointer"
          >
            <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-[2.1rem] text-cream-logo tracking-tight leading-snug group-hover:text-white transition-colors">
              App
            </h3>
            <p className="text-sm sm:text-base text-cream-logo/80 font-normal leading-relaxed">
              Guided conversations, breathwork, meditations, stories, and expert-created resources designed to support you whenever you need it.
            </p>
          </Link>

          {/* Pillar 3: Watch & Learn */}
          <Link
            href="/watch-learn"
            className="space-y-3 block group cursor-pointer"
          >
            <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-[2.1rem] text-cream-logo tracking-tight leading-snug group-hover:text-white transition-colors">
              Watch & Learn
            </h3>
            <p className="text-sm sm:text-base text-cream-logo/80 font-normal leading-relaxed">
              Daily videos that turn psychology, relationships, and personal growth into practical insights you can use every day.
            </p>
          </Link>

        </div>

      </div>
    </section>
  );
}
