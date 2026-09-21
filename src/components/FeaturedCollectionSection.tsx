"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ShelfItem {
  id: string;
  name: string;
  category: string;
  image: string;
  maxHeight: string;
  zIndex: string;
  marginClass: string;
  tiltClass: string;
}

const SHELF_ITEMS: ShelfItem[] = [
  {
    id: "cards",
    name: "Affirmation Cards",
    category: "DAILY PRACTICE",
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Cards_Tray.png",
    maxHeight: "max-h-[165px] sm:max-h-[195px] md:max-h-[225px] lg:max-h-[265px] xl:max-h-[300px]",
    zIndex: "z-20",
    marginClass: "-mr-3 sm:-mr-5 md:-mr-6 lg:-mr-8",
    tiltClass: "-rotate-1",
  },
  {
    id: "coloring",
    name: "Coloring Book",
    category: "CALM",
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Grounded_Coloring.png",
    maxHeight: "max-h-[210px] sm:max-h-[250px] md:max-h-[290px] lg:max-h-[345px] xl:max-h-[390px]",
    zIndex: "z-30",
    marginClass: "-mr-3 sm:-mr-5 md:-mr-6 lg:-mr-8",
    tiltClass: "rotate-0",
  },
  {
    id: "book",
    name: "Hardcover Book",
    category: "FOUNDATION",
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Grounded_Book.png",
    maxHeight: "max-h-[240px] sm:max-h-[285px] md:max-h-[335px] lg:max-h-[395px] xl:max-h-[445px]",
    zIndex: "z-40",
    marginClass: "scale-[1.03]",
    tiltClass: "rotate-0",
  },
  {
    id: "workbook",
    name: "Guided Workbook",
    category: "ACTION",
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Grounded_Workbook.png",
    maxHeight: "max-h-[225px] sm:max-h-[265px] md:max-h-[310px] lg:max-h-[365px] xl:max-h-[410px]",
    zIndex: "z-30",
    marginClass: "-ml-3 sm:-ml-5 md:-ml-6 lg:-ml-8",
    tiltClass: "rotate-1",
  },
  {
    id: "posters",
    name: "Framed Posters",
    category: "REINFORCEMENT",
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Grounded_Poster.png",
    maxHeight: "max-h-[210px] sm:max-h-[250px] md:max-h-[290px] lg:max-h-[345px] xl:max-h-[390px]",
    zIndex: "z-20",
    marginClass: "-ml-3 sm:-ml-5 md:-ml-6 lg:-ml-8",
    tiltClass: "-rotate-1",
  },
];

import MaskedReveal from "@/components/MaskedReveal";

export default function FeaturedCollectionSection() {
  const [activeVariation, setActiveVariation] = useState<"complete" | "interactive">("complete");
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail) return;
    setNotifySubmitted(true);
    try {
      await fetch("/api/klaviyo/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: notifyEmail, type: "collection_notify" }),
      });
    } catch (err) {
      console.error("Notify error:", err);
    }
  };

  return (
    <section
      className="pt-16 sm:pt-24 md:pt-28 pb-36 sm:pb-48 bg-editorial-white text-ink-black w-full relative overflow-hidden scroll-mt-20 select-none"
      id="collections"
    >
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 space-y-12 sm:space-y-16">

        {/* 1. Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0E2E1E]" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E2E1E]">
              FEATURED COLLECTION
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <MaskedReveal>
                <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-[#0E2E1E] leading-[1.05] tracking-tight">
                  Bye Bye Narcissist
                </h2>
              </MaskedReveal>
              <p className="text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed">
                <strong>The Bye Bye Narcissist</strong> Collection helps you recognize harmful relationship patterns, rebuild trust in yourself, and find the confidence to move forward.
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#0E2E1E]/70 font-semibold tracking-wide">
                Book &bull; Workbook &bull; Coloring Book &bull; Posters &bull; Affirmation Cards
              </p>
            </div>

            <div className="shrink-0 pt-2">
              <Link
                href="/collections#featured-collection"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-full hover:bg-[#143d28] hover:shadow-xl hover:scale-[1.02] active:scale-95 active:bg-[#071B11] active:ring-4 active:ring-[#0E2E1E]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E2E1E] transition-all duration-200 text-sm tracking-wide shadow-md group cursor-pointer select-none"
              >
                <span>Explore Collection</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5 group-active:translate-x-3">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Variation Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#0E2E1E]/70 font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#0E2E1E]/60" />
            <span>DESIGN &amp; ANIMATION VARIATIONS</span>
          </div>
          <div className="inline-flex p-1 bg-[#EAE2D5]/80 rounded-full border border-[#DDD1BE] shadow-inner backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setActiveVariation("complete")}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeVariation === "complete"
                  ? "bg-[#0E2E1E] text-cream-logo shadow-sm"
                  : "text-[#0E2E1E]/75 hover:text-[#0E2E1E]"
              }`}
            >
              Variation 1: Complete Collection
            </button>
            <button
              type="button"
              onClick={() => setActiveVariation("interactive")}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeVariation === "interactive"
                  ? "bg-[#0E2E1E] text-cream-logo shadow-sm"
                  : "text-[#0E2E1E]/75 hover:text-[#0E2E1E]"
              }`}
            >
              Variation 2: Interactive 5-Piece Shelf
            </button>
          </div>
        </div>

        {/* 2. Architectural Gallery Exhibition Stage */}
        <div className="w-full">
          {/* Architectural Cream Plinth Tray */}
          <div className="relative w-full rounded-[28px] sm:rounded-[40px] bg-gradient-to-b from-[#FBF8F2] via-[#F3ECE0] to-[#E8DDD0] border border-[#DDD1BE] shadow-[0_22px_55px_-12px_rgba(14,46,30,0.12),0_8px_20px_-6px_rgba(0,0,0,0.06)] overflow-hidden">
            
            {/* Gallery Overhead Soft Illumination */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.95),transparent_75%)] pointer-events-none z-10" />

            {/* Subtle Gallery Picture Rail Shadow on the Back Wall */}
            <div className="absolute top-10 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#D6C7B2]/60 to-transparent pointer-events-none" />

            {/* VARIATION 1: UNIFIED COMPLETE COLLECTION HERO PRESENTATION */}
            {activeVariation === "complete" && (
              <div className="relative z-10 w-full pt-8 sm:pt-12 md:pt-16 pb-0 px-4 sm:px-8 flex flex-col items-center justify-end">
                <motion.div
                  key="variation-complete"
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full max-w-5xl flex flex-col items-center justify-end group cursor-pointer"
                >
                  {/* Soft ambient back glow */}
                  <div className="absolute inset-0 bg-[#0E2E1E]/5 blur-3xl rounded-full pointer-events-none group-hover:bg-[#0E2E1E]/10 transition-all duration-700" />

                  {/* Unified Collection Mockup Image */}
                  <img
                    src={encodeURI(
                      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
                    )}
                    alt="The Bye Bye Narcissist Complete Collection"
                    className="w-full max-h-[340px] sm:max-h-[420px] md:max-h-[500px] lg:max-h-[560px] object-contain relative z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:drop-shadow-[0_32px_50px_rgba(14,46,30,0.25)]"
                  />

                  {/* Grounding Contact Shadow Baseline */}
                  <div className="w-full relative h-0 pointer-events-none z-20">
                    <div className="w-[92%] h-[4px] bg-black/90 rounded-full mx-auto -mt-[2px] blur-[1.5px] group-hover:scale-95 group-hover:opacity-75 transition-all duration-700" />
                    <div className="w-[84%] h-[12px] bg-black/30 rounded-full mx-auto -mt-[2px] blur-[6px] group-hover:scale-90 group-hover:opacity-20 transition-all duration-700" />
                  </div>
                </motion.div>
              </div>
            )}

            {/* VARIATION 2: THE 5 PHYSICAL ASSETS SEATED & LEANING ON THE TATAKAN */}
            {activeVariation === "interactive" && (
              <div className="relative z-10 w-full pt-8 sm:pt-12 md:pt-16 pb-0 px-3 sm:px-6 md:px-8">
                <div className="w-full flex items-end justify-start sm:justify-center overflow-x-auto sm:overflow-x-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pt-6 sm:pt-8 md:pt-10 lg:pt-14 pb-0 scroll-smooth snap-x">
                  <div className="flex items-end justify-start sm:justify-center min-w-max mx-auto px-6 sm:px-2">
                    {SHELF_ITEMS.map((item, idx) => {
                      const isHovered = activeItem === item.id;
                      const hoveredIndex = activeItem ? SHELF_ITEMS.findIndex((i) => i.id === activeItem) : -1;

                      // Physical Bookshelf Interaction (14islands Digital Craftsmanship):
                      // When a book is pulled forward, adjacent books to the left/right physically lean away
                      let shelfTransform = "";
                      let zIndex = item.zIndex;

                      if (isHovered) {
                        shelfTransform = "-translate-y-6 sm:-translate-y-8 scale-[1.12] [transform:perspective(1000px)_rotateX(4deg)]";
                        zIndex = "z-50";
                      } else if (hoveredIndex !== -1) {
                        if (idx < hoveredIndex) {
                          // Left neighbors lean away to the left
                          shelfTransform = "-rotate-[4deg] -translate-x-2 sm:-translate-x-3 scale-[0.98]";
                        } else {
                          // Right neighbors lean away to the right
                          shelfTransform = "rotate-[4deg] translate-x-2 sm:translate-x-3 scale-[0.98]";
                        }
                      } else {
                        shelfTransform = item.tiltClass;
                      }

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 35, scale: 0.94 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, margin: "-10% 0px" }}
                          transition={{
                            duration: 0.85,
                            delay: idx * 0.1,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          onMouseEnter={() => setActiveItem(item.id)}
                          onMouseLeave={() => setActiveItem(null)}
                          className={`relative flex flex-col items-center justify-end ${zIndex} ${item.marginClass} transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer origin-bottom [perspective:1000px]`}
                        >
                          {/* Ambient wall shadow behind the item ("bersender" depth) */}
                          <div
                            className={`absolute inset-0 bg-black/10 blur-xl rounded-2xl pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                              isHovered ? "opacity-50 scale-120 -translate-y-4" : "opacity-12 scale-100"
                            }`}
                          />

                          {/* The Precision-Grounded Mockup Asset with 14islands-grade 3D Perspective Lift */}
                          <img
                            src={encodeURI(item.image)}
                            alt={item.name}
                            className={`${item.maxHeight} w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative z-10 origin-bottom ${shelfTransform} ${
                              isHovered
                                ? "drop-shadow-[0_35px_50px_rgba(14,46,30,0.32)]"
                                : "drop-shadow-[0_8px_14px_rgba(0,0,0,0.12)]"
                            }`}
                          />

                          {/* EXACT DYNAMIC CONTACT SHADOW: Diffuses realistically as object lifts */}
                          <div className="w-full relative h-0 pointer-events-none z-20">
                            {/* Core contact shadow (sharp when grounded, soft & translucent when lifted) */}
                            <div
                              className={`w-[88%] h-[3px] bg-black rounded-full mx-auto -mt-[2px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isHovered
                                  ? "opacity-15 scale-65 blur-[6px] translate-y-2"
                                  : "opacity-60 scale-100 blur-[1.5px]"
                              }`}
                            />
                            {/* Secondary penumbra shadow */}
                            <div
                              className={`w-[78%] h-[8px] bg-black rounded-full mx-auto -mt-[1px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                isHovered
                                  ? "opacity-10 scale-70 blur-[10px] translate-y-2.5"
                                  : "opacity-25 scale-100 blur-[3px]"
                              }`}
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* THE "TATAKAN" (PHYSICAL 3D SHELF LEDGE WITH INTEGRATED SURFACE) */}
            <div className="relative z-20 w-full">
              {/* SHELF FLOOR PLANE: The surface the books stand on */}
              <div className="w-full h-4 sm:h-5 bg-gradient-to-r from-[#D7CBBA] via-[#EAE0D0] to-[#D7CBBA] border-t border-white/90 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9)] relative">
                {/* Crisp Horizon Bevel Edge Reflection */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-white/30 via-white to-white/30" />
              </div>

              {/* SHELF FRONT FASCIA: The vertical thickness of the tatakan plinth */}
              <div className="w-full h-5 sm:h-6 bg-gradient-to-b from-[#C4B59F] via-[#B8A891] to-[#A4937B] border-t border-[#BFAA94] shadow-[0_6px_14px_rgba(0,0,0,0.14)]" />
            </div>

          </div>
        </div>

        {/* 3. Future Releases */}
        <div className="max-w-3xl mx-auto text-center space-y-6 pt-8 sm:pt-12 border-t border-mist-grey/70">
          <MaskedReveal>
            <h3 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E2E1E] leading-[1.1]">
              More Collections Are Coming
            </h3>
          </MaskedReveal>

          <p className="text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed">
            We’re developing new collections, including Love Done Right, along with collections on emotional intelligence, boundaries, anxiety, relationships, shadow work, inner child healing, and more.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setNotifyModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-editorial-white text-[#0E2E1E] border-2 border-[#0E2E1E] font-semibold rounded-full hover:bg-[#0E2E1E] hover:text-cream-logo hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] active:bg-[#091f14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E2E1E] transition-all shadow-sm text-sm sm:text-base tracking-wide cursor-pointer"
            >
              <span>Notify Me About New Collections</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

      </div>

      {/* NOTIFY MODAL */}
      {notifyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl border border-mist-grey space-y-5">
            <button
              type="button"
              onClick={() => {
                setNotifyModalOpen(false);
                setNotifySubmitted(false);
              }}
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors text-lg cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {notifySubmitted ? (
              <div className="text-center py-6 space-y-3">
                <span className="text-4xl">✓</span>
                <h4 className="font-serif-heading text-2xl text-[#0E2E1E]">You&apos;re On The List</h4>
                <p className="text-sm text-[#1C2826]">
                  We will notify you at <strong>{notifyEmail}</strong> as soon as new collections launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="space-y-4">
                <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase block">
                  NEW RELEASES
                </span>
                <h4 className="font-serif-heading text-2xl text-[#0E2E1E]">
                  Be First To Know
                </h4>
                <p className="text-xs text-[#1C2826] leading-relaxed">
                  Enter your email to receive early announcements for upcoming collections like Love Done Right and Emotional Intelligence.
                </p>
                <input
                  type="email"
                  required
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-mist-grey rounded-xl text-sm focus:outline-none focus:border-[#0E2E1E]"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0E2E1E] text-cream-logo rounded-full font-semibold text-sm hover:bg-[#143d28] transition-all cursor-pointer shadow-md"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
