"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ChatSimulator from "@/components/ChatSimulator";
import { VIDEOS_DATA } from "@/data/videos";

import MaskedReveal from "@/components/MaskedReveal";

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
      className="w-full bg-editorial-white py-10 sm:py-16 lg:py-24 select-none overflow-hidden relative"
    >
      {/* Outer Canvas Container: Provides responsive side gutters on the light editorial background */}
      <div className="w-full max-w-[1880px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
        
        {/* Architectural Showroom Island Card (Apple Pro / Koto craftsmanship) */}
        <div className="relative rounded-[32px] sm:rounded-[44px] lg:rounded-[56px] bg-[#06180F] text-cream-logo px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-14 sm:pt-18 lg:pt-22 pb-16 sm:pb-24 shadow-[0_30px_90px_-20px_rgba(6,24,15,0.38),0_10px_30px_-10px_rgba(6,24,15,0.2)] border border-emerald-950/50 overflow-hidden">
          
          {/* Internal Cinematic Ambient Stage Lighting */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-radial from-emerald-500/12 via-[#0E2E1E]/20 to-transparent blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="w-full space-y-12 lg:space-y-16 relative z-10">
            
            {/* Section Header with Koto Masked Typography Reveal */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                  HOW <strong className="font-bold lowercase">mani</strong> HELPS
                </span>
              </div>

          <MaskedReveal>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-cream-logo leading-[1.05] tracking-tight">
              Three Ways We Can Help
            </h2>
          </MaskedReveal>
        </div>

        {/* Three Pillars: Visual Stage and Grounded Shelf */}
        <div className="w-full space-y-0">
          
          {/* Visual Showcase Row: Books, Phone, Video sitting side-by-side with 14islands 3D Tilt */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 xl:gap-12 items-end">
            
            {/* Pillar 1 Visual: Collections Books with Scroll-Triggered & Hover Physical Deck Fanning */}
            <div className="w-full">
              <Link
                href="/collections"
                onMouseEnter={() => setIsPillar1Hovered(true)}
                onMouseLeave={() => {
                  setIsPillar1Hovered(false);
                  setHoveredBookId(null);
                }}
                className="w-full flex flex-col items-center justify-end cursor-pointer group/pillar1"
              >
                <div className="w-full flex items-end justify-center pb-0 relative">
                  {ECOSYSTEM_BOOKS.map((book, bIdx) => {
                    const isIndivHovered = hoveredBookId === book.id;

                    // Physical card deck fanning physics:
                    // Automatically fans when section enters view; elevates further when hovered
                    let fanTransform = "";
                    let zIndex = book.zIndex;

                    if (bIdx === 0) {
                      // Coloring Book (Left)
                      fanTransform = isIndivHovered
                        ? "-rotate-[14deg] -translate-x-6 -translate-y-5 scale-[1.08]"
                        : isDeckFanned
                        ? "-rotate-[10deg] -translate-x-4 -translate-y-2 scale-[1.02]"
                        : "-rotate-[5deg] translate-x-0 translate-y-0 scale-100";
                      if (isIndivHovered) zIndex = 50;
                    } else if (bIdx === 1) {
                      // Hardcover Book (Center)
                      fanTransform = isIndivHovered
                        ? "rotate-0 -translate-y-7 scale-[1.12]"
                        : isDeckFanned
                        ? "rotate-0 -translate-y-4 scale-[1.06]"
                        : "rotate-0 translate-y-0 scale-100";
                      zIndex = isIndivHovered ? 50 : 30;
                    } else {
                      // Guided Workbook (Right)
                      fanTransform = isIndivHovered
                        ? "rotate-[14deg] translate-x-6 -translate-y-5 scale-[1.08]"
                        : isDeckFanned
                        ? "rotate-[10deg] translate-x-4 -translate-y-2 scale-[1.02]"
                        : "rotate-[5deg] translate-x-0 translate-y-0 scale-100";
                      if (isIndivHovered) zIndex = 50;
                    }

                    return (
                      <div
                        key={book.id}
                        onMouseEnter={() => setHoveredBookId(book.id)}
                        onMouseLeave={() => setHoveredBookId(null)}
                        className={`relative flex flex-col items-center justify-end cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom select-none ${book.baseMargin}`}
                        style={{ zIndex }}
                      >
                        {/* Ambient Shadow Behind Book */}
                        <div
                          className={`absolute inset-0 bg-black/50 blur-2xl rounded-2xl pointer-events-none transition-all duration-500 ${
                            isIndivHovered ? "opacity-70 scale-120" : isDeckFanned ? "opacity-45 scale-110" : "opacity-25 scale-100"
                          }`}
                        />

                        {/* The Book Mockup with Dynamic Deck Fan */}
                        <img
                          src={encodeURI(book.image)}
                          alt={book.alt}
                          className={`${book.heightClass} w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-10 origin-bottom ${fanTransform} ${
                            isDeckFanned
                              ? "drop-shadow-[0_32px_50px_rgba(0,0,0,0.98)]"
                              : "drop-shadow-[0_12px_22px_rgba(0,0,0,0.7)]"
                          }`}
                        />

                        {/* Contact Shadow Grounded Directly on the Shelf Floor */}
                        <div className="w-full relative h-0 pointer-events-none z-20">
                          <div
                            className={`w-[90%] h-[4px] bg-black/95 rounded-full mx-auto -mt-[2px] transition-all duration-500 ${
                              isDeckFanned ? "scale-60 opacity-20 blur-[6px]" : "scale-100 opacity-95 blur-[1.5px]"
                            }`}
                          />
                          <div
                            className={`w-[80%] h-[8px] bg-black/50 rounded-full mx-auto -mt-[2px] transition-all duration-500 ${
                              isDeckFanned ? "scale-70 opacity-15 blur-[9px]" : "scale-100 opacity-50 blur-[4px]"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Link>
            </div>

            {/* Pillar 2 Visual: App Companion Phone with Scroll-Triggered Lift & Glow */}
            <div className="w-full">
              <Link
                href="/join-beta"
                onMouseEnter={() => setIsPillar2Hovered(true)}
                onMouseLeave={() => setIsPillar2Hovered(false)}
                className="w-full flex flex-col items-center justify-end cursor-pointer group"
              >
                <div
                  className={`relative w-[215px] sm:w-[240px] lg:w-[260px] xl:w-[285px] 2xl:w-[310px] h-[300px] sm:h-[340px] lg:h-[375px] xl:h-[410px] 2xl:h-[435px] bg-[#020A06] border-[2.5px] rounded-t-[34px] p-2.5 sm:p-3 flex flex-col justify-between origin-bottom transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                    isPillar2Hovered
                      ? "-translate-y-6 scale-[1.05] border-emerald-400 shadow-[0_38px_75px_rgba(16,185,129,0.3)]"
                      : isPillar2Active
                      ? "-translate-y-4 scale-[1.03] border-emerald-400/80 shadow-[0_30px_60px_rgba(16,185,129,0.22)]"
                      : "border-[#1d4a32] shadow-[0_25px_50px_rgba(0,0,0,0.85)] scale-100"
                  }`}
                >
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
                    <div
                      className={`w-[88%] h-[4px] bg-black/95 rounded-full mx-auto -mt-[2px] transition-all duration-500 ${
                        isPillar2Active ? "scale-70 opacity-20 blur-[5px]" : "blur-[1px]"
                      }`}
                    />
                    <div
                      className={`w-[78%] h-[8px] bg-black/50 rounded-full mx-auto -mt-[2px] transition-all duration-500 ${
                        isPillar2Active ? "scale-75 opacity-15 blur-[8px]" : "blur-[3px]"
                      }`}
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Pillar 3 Visual: Watch & Learn Video with Scroll-Triggered Lift & Play Pulse */}
            <div className="w-full">
              <Link
                href="/watch-learn"
                onMouseEnter={() => setIsPillar3Hovered(true)}
                onMouseLeave={() => setIsPillar3Hovered(false)}
                className="w-full flex flex-col items-center justify-end cursor-pointer group"
              >
                <div
                  className={`relative w-[215px] sm:w-[240px] lg:w-[260px] xl:w-[285px] 2xl:w-[310px] h-[300px] sm:h-[340px] lg:h-[375px] xl:h-[410px] 2xl:h-[435px] rounded-t-2xl overflow-hidden border-t border-x border-white/20 origin-bottom transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isPillar3Hovered
                      ? "-translate-y-6 scale-[1.05] shadow-[0_38px_75px_rgba(0,0,0,0.95)] border-cream-logo/60"
                      : isPillar3Active
                      ? "-translate-y-4 scale-[1.03] shadow-[0_30px_60px_rgba(0,0,0,0.92)] border-cream-logo/40"
                      : "shadow-[0_25px_50px_rgba(0,0,0,0.85)] scale-100"
                  }`}
                >
                  <img
                    src={newestVideo.thumbnailUrl}
                    alt={newestVideo.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                      isPillar3Active ? "scale-106" : "scale-100"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/40" />

                  {/* Play Button with Tangible Expanding Pulse */}
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

                  {/* Video Title */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h4
                      className={`text-xs sm:text-sm font-serif-heading font-medium line-clamp-2 leading-snug transition-colors duration-300 ${
                        isPillar3Hovered ? "text-white" : "text-cream-logo"
                      }`}
                    >
                      {newestVideo.title}
                    </h4>
                  </div>

                  {/* Contact Shadow at Video Base */}
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

        {/* Three Visual Cards: Verbatim from website_copy.md */}
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
        </div>
      </div>
    </section>
  );
}
