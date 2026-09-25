"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ChatSimulator from "@/components/ChatSimulator";
import { VIDEOS_DATA } from "@/data/videos";

import MaskedReveal from "@/components/MaskedReveal";

const newestVideo = VIDEOS_DATA[VIDEOS_DATA.length - 1];

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
    baseRotation: "-rotate-[6deg]",
    hoverRotation: "-rotate-[2deg]",
    baseMargin: "-mr-4 sm:-mr-5 md:-mr-6 lg:-mr-7 xl:-mr-8",
    heightClass: "h-[240px] sm:h-[280px] md:h-[315px] lg:h-[350px] xl:h-[385px] 2xl:h-[410px]",
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
    heightClass: "h-[275px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px] 2xl:h-[465px]",
    zIndex: 20,
  },
  {
    id: "workbook",
    name: "Guided Workbook",
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Workbook_Clean.png",
    alt: "The Bye Bye Narcissist Guided Workbook",
    baseRotation: "rotate-[6deg]",
    hoverRotation: "rotate-[2deg]",
    baseMargin: "-ml-4 sm:-ml-5 md:-ml-6 lg:-ml-7 xl:-ml-8",
    heightClass: "h-[250px] sm:h-[290px] md:h-[330px] lg:h-[365px] xl:h-[405px] 2xl:h-[430px]",
    zIndex: 10,
  },
];

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: false });

  const [hoveredBookId, setHoveredBookId] = useState<string | null>(null);
  const [isPillar1Hovered, setIsPillar1Hovered] = useState(false);
  const [isPillar2Hovered, setIsPillar2Hovered] = useState(false);
  const [isPillar3Hovered, setIsPillar3Hovered] = useState(false);

  const isDeckFanned = isInView || isPillar1Hovered || hoveredBookId !== null;
  const isPillar2Active = isInView || isPillar2Hovered;
  const isPillar3Active = isInView || isPillar3Hovered;

  return (
    <section
      ref={sectionRef}
      id="how-mani-helps"
      className="w-full bg-[#06180F] text-cream-logo py-16 sm:py-20 lg:py-28 select-none relative"
    >
      {/* Internal Cinematic Ambient Stage Lighting */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] bg-radial from-emerald-500/10 via-[#0E2E1E]/20 to-transparent blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Content Container: Full Width Expansive Architectural Layout */}
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 relative z-10 space-y-12 lg:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              HOW <strong className="font-bold lowercase">mani</strong> HELPS
            </span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cream-logo leading-[1.05] tracking-tight">
            Three Ways We Can Help
          </h2>
        </div>

        {/* Three Pillars: Responsive Stage and Grounded Shelf */}
        <div className="w-full">
          
          {/* DESKTOP LAYOUT (md: and up) - Exact Slide 3 Architecture: 3 Pillars Side-by-Side on Continuous Shelf */}
          <div className="hidden md:block w-full space-y-0">
            {/* Visual Showcase Row: Books, Phone, Video sitting side-by-side */}
            <div className="grid grid-cols-3 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 items-end">
              
              {/* Pillar 1 Visual: Complete 5-Product Collection (Grounded & Tangible) */}
              <div className="w-full flex flex-col items-center justify-end">
                <div className="w-full flex items-end justify-center pb-0 relative h-[330px] sm:h-[370px] md:h-[405px] lg:h-[445px] xl:h-[480px]">
                  <Link
                    href="/collections"
                    className="relative w-full h-full max-w-[560px] flex items-end justify-center group cursor-pointer"
                    title="Explore Bye Bye Narcissist Collection"
                  >
                    <img
                      src={encodeURI(
                        "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Complete_Collection_Etsy_Bundle.png"
                      )}
                      alt="Bye Bye Narcissist Complete Collection with Poster Set"
                      className="w-auto h-full max-h-[98%] object-contain object-bottom select-none drop-shadow-[0_16px_32px_rgba(0,0,0,0.85)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                    />
                  </Link>
                </div>
              </div>

              {/* Pillar 2 Visual: App Companion Phone */}
              <div className="w-full flex flex-col items-center justify-end">
                <Link
                  href="/join-beta"
                  onMouseEnter={() => setIsPillar2Hovered(true)}
                  onMouseLeave={() => setIsPillar2Hovered(false)}
                  className="w-full flex flex-col items-center justify-end cursor-pointer group"
                >
                  <div
                    className={`relative w-[230px] sm:w-[260px] md:w-[285px] lg:w-[315px] xl:w-[345px] h-[330px] sm:h-[370px] md:h-[405px] lg:h-[445px] xl:h-[480px] bg-[#020A06] border-[2px] rounded-t-[34px] p-2.5 sm:p-3.5 flex flex-col justify-between origin-bottom transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                      isPillar2Hovered
                        ? "-translate-y-3 scale-[1.02] border-emerald-400 shadow-[0_38px_75px_rgba(16,185,129,0.3)]"
                        : "border-[#1d4a32] shadow-[0_25px_50px_rgba(0,0,0,0.85)] scale-100"
                    }`}
                  >
                    <div className="w-full flex items-center justify-center px-2 pt-1 pb-2 border-b border-editorial-white/10 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <img
                          src="/assets/Mani Logos/mani cream logo.png"
                          alt="mani"
                          className="h-3 w-auto object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden py-1.5">
                      <ChatSimulator />
                    </div>
                    <div className="w-full relative h-0 pointer-events-none z-20">
                      <div
                        className={`w-[88%] h-[4px] bg-black/95 rounded-full mx-auto -mt-[2px] transition-all duration-500 ${
                          isPillar2Hovered ? "scale-70 opacity-20 blur-[5px]" : "blur-[1px]"
                        }`}
                      />
                      <div
                        className={`w-[78%] h-[8px] bg-black/50 rounded-full mx-auto -mt-[2px] transition-all duration-500 ${
                          isPillar2Hovered ? "scale-75 opacity-15 blur-[8px]" : "blur-[3px]"
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Pillar 3 Visual: Watch & Learn Video */}
              <div className="w-full flex flex-col items-center justify-end">
                <Link
                  href="/watch-learn"
                  onMouseEnter={() => setIsPillar3Hovered(true)}
                  onMouseLeave={() => setIsPillar3Hovered(false)}
                  className="w-full flex flex-col items-center justify-end cursor-pointer group"
                >
                  <div
                    className={`relative w-[230px] sm:w-[260px] md:w-[285px] lg:w-[315px] xl:w-[345px] h-[330px] sm:h-[370px] md:h-[405px] lg:h-[445px] xl:h-[480px] rounded-t-2xl overflow-hidden border-t border-x border-white/20 origin-bottom transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isPillar3Hovered
                        ? "-translate-y-3 scale-[1.02] shadow-[0_38px_75px_rgba(0,0,0,0.95)] border-cream-logo/60"
                        : "shadow-[0_25px_50px_rgba(0,0,0,0.85)] scale-100"
                    }`}
                  >
                    <img
                      src={newestVideo.thumbnailUrl}
                      alt={newestVideo.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                        isPillar3Hovered ? "scale-106" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div
                        className={`w-14 h-14 rounded-full bg-cream-logo text-[#06180F] flex items-center justify-center shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isPillar3Hovered
                            ? "scale-120 shadow-[0_0_35px_rgba(253,240,213,0.7)] bg-white"
                            : "scale-100"
                        }`}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="translate-x-0.5"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <h4
                        className={`text-xs sm:text-sm font-serif-heading font-medium line-clamp-2 leading-snug transition-colors duration-300 ${
                          isPillar3Hovered ? "text-white" : "text-cream-logo"
                        }`}
                      >
                        {newestVideo.title}
                      </h4>
                    </div>
                    <div className="w-full relative h-0 pointer-events-none z-20">
                      <div
                        className={`w-[88%] h-[4px] bg-black/95 rounded-full mx-auto -mt-[2px] transition-all duration-500 ${
                          isPillar3Hovered ? "scale-70 opacity-20 blur-[5px]" : "blur-[1px]"
                        }`}
                      />
                      <div
                        className={`w-[78%] h-[8px] bg-black/50 rounded-full mx-auto -mt-[2px] transition-all duration-500 ${
                          isPillar3Hovered ? "scale-75 opacity-15 blur-[8px]" : "blur-[3px]"
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              </div>

            </div>

            {/* Continuous Architectural Shelf Ledge (Tatakan Nyata - Edge-to-Edge) */}
            <div className="relative z-20 w-full mt-0">
              <div className="w-full h-4 sm:h-5 bg-gradient-to-r from-[#0d2618] via-[#1a4028] to-[#0d2618] border-t border-cream-logo/25 shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cream-logo/50 to-transparent" />
              </div>
              <div className="w-full h-5 sm:h-6 bg-gradient-to-b from-[#0b2114] via-[#07150d] to-[#030a06] border-t border-black/80 shadow-[0_12px_24px_rgba(0,0,0,0.8)]" />
            </div>

            {/* Three Visual Cards Text: Verbatim from website_copy.md */}
            <div className="grid grid-cols-3 gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 pt-6 sm:pt-8">
              
              {/* Pillar 1: Collections */}
              <Link href="/collections" className="space-y-3 block group cursor-pointer">
                <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-[2.1rem] text-cream-logo tracking-tight leading-snug group-hover:text-white transition-colors">
                  Collections
                </h3>
                <p className="text-sm sm:text-base text-cream-logo/80 font-normal leading-relaxed">
                  Digital books, workbooks, and tools that help you explore a specific challenge and put what you learn into practice.
                </p>
              </Link>

              {/* Pillar 2: App */}
              <Link href="/join-beta" className="space-y-3 block group cursor-pointer">
                <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-[2.1rem] text-cream-logo tracking-tight leading-snug group-hover:text-white transition-colors">
                  App
                </h3>
                <p className="text-sm sm:text-base text-cream-logo/80 font-normal leading-relaxed">
                  Guided conversations, breathwork, meditations, stories, and expert-created resources designed to support you whenever you need it.
                </p>
              </Link>

              {/* Pillar 3: Watch & Learn */}
              <Link href="/watch-learn" className="space-y-3 block group cursor-pointer">
                <h3 className="font-serif-heading text-2xl sm:text-3xl lg:text-[2.1rem] text-cream-logo tracking-tight leading-snug group-hover:text-white transition-colors">
                  Watch & Learn
                </h3>
                <p className="text-sm sm:text-base text-cream-logo/80 font-normal leading-relaxed">
                  Daily videos that turn psychology, relationships, and personal growth into practical insights you can use every day.
                </p>
              </Link>

            </div>
          </div>

          {/* MOBILE / SMALL-SCREEN LAYOUT (< md) - Clean Self-Contained Grounded Cards */}
          <div className="block md:hidden w-full space-y-12">
            
            {/* Mobile Pillar 1: Collections */}
            <div className="w-full flex flex-col items-center">
              <div className="w-full flex items-end justify-center pb-0 relative h-[270px] sm:h-[320px]">
                <Link
                  href="/collections"
                  className="relative w-full h-full max-w-[420px] flex items-end justify-center select-none cursor-pointer transition-transform duration-300 active:scale-95"
                  title="Explore Bye Bye Narcissist Collection"
                >
                  <img
                    src={encodeURI(
                      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Complete_Collection_Etsy_Bundle.png"
                    )}
                    alt="Bye Bye Narcissist Complete Collection with Poster Set"
                    className="w-auto h-full max-h-[98%] object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
                  />
                </Link>
              </div>

              {/* Pillar 1 Grounded Shelf */}
              <div className="relative z-20 w-full -mt-2">
                <div className="w-full h-3.5 bg-gradient-to-r from-[#0d2618] via-[#1a4028] to-[#0d2618] border-t border-cream-logo/25" />
                <div className="w-full h-4 bg-gradient-to-b from-[#0b2114] via-[#07150d] to-[#030a06] border-t border-black/80 shadow-[0_8px_16px_rgba(0,0,0,0.8)]" />
              </div>

              {/* Pillar 1 Text */}
              <Link href="/collections" className="space-y-2 block w-full pt-4 text-center sm:text-left">
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-cream-logo tracking-tight leading-snug">
                  Collections
                </h3>
                <p className="text-sm sm:text-base text-cream-logo/80 font-normal leading-relaxed">
                  Digital books, workbooks, and tools that help you explore a specific challenge and put what you learn into practice.
                </p>
              </Link>
            </div>

            {/* Mobile Pillar 2: App */}
            <div className="w-full flex flex-col items-center">
              <Link href="/join-beta" className="w-full flex flex-col items-center cursor-pointer group">
                <div className="relative w-[230px] sm:w-[260px] h-[320px] sm:h-[350px] bg-[#020A06] border-[2.5px] border-[#1d4a32] rounded-t-[34px] p-2.5 sm:p-3 flex flex-col justify-between origin-bottom shadow-[0_25px_50px_rgba(0,0,0,0.85)] overflow-hidden">
                  <div className="w-full flex items-center justify-center px-2 pt-1 pb-2 border-b border-editorial-white/10 shrink-0">
                    <img
                      src="/assets/Mani Logos/mani cream logo.png"
                      alt="mani"
                      className="h-3 w-auto object-contain"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden py-1.5">
                    <ChatSimulator />
                  </div>
                  <div className="w-full relative h-0 pointer-events-none z-20">
                    <div className="w-[88%] h-[4px] bg-black/95 rounded-full mx-auto -mt-[2px] blur-[1px]" />
                  </div>
                </div>
              </Link>

              {/* Pillar 2 Grounded Shelf */}
              <div className="relative z-20 w-full -mt-2">
                <div className="w-full h-3.5 bg-gradient-to-r from-[#0d2618] via-[#1a4028] to-[#0d2618] border-t border-cream-logo/25" />
                <div className="w-full h-4 bg-gradient-to-b from-[#0b2114] via-[#07150d] to-[#030a06] border-t border-black/80 shadow-[0_8px_16px_rgba(0,0,0,0.8)]" />
              </div>

              {/* Pillar 2 Text */}
              <Link href="/join-beta" className="space-y-2 block w-full pt-4 text-center sm:text-left">
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-cream-logo tracking-tight leading-snug">
                  App
                </h3>
                <p className="text-sm sm:text-base text-cream-logo/80 font-normal leading-relaxed">
                  Guided conversations, breathwork, meditations, stories, and expert-created resources designed to support you whenever you need it.
                </p>
              </Link>
            </div>

            {/* Mobile Pillar 3: Watch & Learn */}
            <div className="w-full flex flex-col items-center">
              <Link href="/watch-learn" className="w-full flex flex-col items-center cursor-pointer group">
                <div className="relative w-[230px] sm:w-[260px] h-[320px] sm:h-[350px] rounded-t-2xl overflow-hidden border-t border-x border-white/20 origin-bottom shadow-[0_25px_50px_rgba(0,0,0,0.85)]">
                  <img
                    src={newestVideo.thumbnailUrl}
                    alt={newestVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-14 h-14 rounded-full bg-cream-logo text-[#06180F] flex items-center justify-center shadow-2xl">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h4 className="text-xs sm:text-sm font-serif-heading font-medium line-clamp-2 leading-snug text-cream-logo">
                      {newestVideo.title}
                    </h4>
                  </div>
                  <div className="w-full relative h-0 pointer-events-none z-20">
                    <div className="w-[88%] h-[4px] bg-black/95 rounded-full mx-auto -mt-[2px] blur-[1px]" />
                  </div>
                </div>
              </Link>

              {/* Pillar 3 Grounded Shelf */}
              <div className="relative z-20 w-full -mt-2">
                <div className="w-full h-3.5 bg-gradient-to-r from-[#0d2618] via-[#1a4028] to-[#0d2618] border-t border-cream-logo/25" />
                <div className="w-full h-4 bg-gradient-to-b from-[#0b2114] via-[#07150d] to-[#030a06] border-t border-black/80 shadow-[0_8px_16px_rgba(0,0,0,0.8)]" />
              </div>

              {/* Pillar 3 Text */}
              <Link href="/watch-learn" className="space-y-2 block w-full pt-4 text-center sm:text-left">
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-cream-logo tracking-tight leading-snug">
                  Watch & Learn
                </h3>
                <p className="text-sm sm:text-base text-cream-logo/80 font-normal leading-relaxed">
                  Daily videos that turn psychology, relationships, and personal growth into practical insights you can use every day.
                </p>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
