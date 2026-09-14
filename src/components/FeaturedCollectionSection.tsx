"use client";

import React, { useState } from "react";
import Link from "next/link";

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

export default function FeaturedCollectionSection() {
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
      className="py-16 sm:py-24 md:py-28 bg-editorial-white text-ink-black w-full relative overflow-hidden scroll-mt-20 select-none"
      id="collections"
    >
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 space-y-12 sm:space-y-16">

        {/* ========================================================================= */}
        {/* 1. HEADER: 100% VERBATIM FROM docs/website_copy.md (HOMEPAGE SECTION 4)    */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0E2E1E] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E2E1E]">
              FEATURED COLLECTION
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-[#0E2E1E] leading-[1.05] tracking-tight">
                Bye Bye Narcissist
              </h2>
              <p className="text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed">
                <strong>The Bye Bye Narcissist</strong> Collection helps you recognize harmful relationship patterns, rebuild trust in yourself, and find the confidence to move forward.
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#0E2E1E]/70 font-semibold tracking-wide">
                Book &bull; Workbook &bull; Coloring Book &bull; Posters &bull; Affirmation Cards
              </p>
            </div>

            <div className="shrink-0 pt-2">
              <Link
                href="/collections"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-full hover:bg-[#143d28] hover:shadow-xl active:scale-98 transition-all text-sm tracking-wide shadow-md group"
              >
                <span>Explore Collection</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ARCHITECTURAL GALLERY EXHIBITION STAGE                                 */}
        {/* ========================================================================= */}
        <div className="w-full">
          {/* Architectural Cream Plinth Tray */}
          <div className="relative w-full rounded-[28px] sm:rounded-[40px] bg-gradient-to-b from-[#FBF8F2] via-[#F3ECE0] to-[#E8DDD0] border border-[#DDD1BE] shadow-[0_22px_55px_-12px_rgba(14,46,30,0.12),0_8px_20px_-6px_rgba(0,0,0,0.06)] overflow-hidden">
            
            {/* Gallery Overhead Soft Illumination */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.95),transparent_75%)] pointer-events-none z-10" />

            {/* Subtle Gallery Picture Rail Shadow on the Back Wall */}
            <div className="absolute top-10 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#D6C7B2]/60 to-transparent pointer-events-none" />

            {/* BACKREST ALCOVE */}
            <div className="relative z-10 w-full pt-8 sm:pt-12 md:pt-16 pb-0 px-3 sm:px-6 md:px-8">
              
              {/* THE 5 PHYSICAL ASSETS SEATED & LEANING ON THE TATAKAN */}
              <div className="w-full flex items-end justify-start sm:justify-center overflow-x-auto sm:overflow-x-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pt-6 sm:pt-8 md:pt-10 lg:pt-14 pb-0 scroll-smooth snap-x">
                <div className="flex items-end justify-start sm:justify-center min-w-max mx-auto px-6 sm:px-2">
                  {SHELF_ITEMS.map((item) => {
                    const isHovered = activeItem === item.id;
                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setActiveItem(item.id)}
                        onMouseLeave={() => setActiveItem(null)}
                        className={`relative flex flex-col items-center justify-end ${
                          isHovered ? "z-50" : item.zIndex
                        } ${item.marginClass} transition-all duration-300 cursor-pointer origin-bottom`}
                      >
                        {/* Ambient wall shadow behind the item ("bersender" depth) */}
                        <div
                          className={`absolute inset-0 bg-black/10 blur-lg rounded-xl pointer-events-none transition-opacity duration-300 ${
                            isHovered ? "opacity-35 scale-105" : "opacity-12"
                          }`}
                        />

                        {/* The Precision-Grounded Mockup Asset */}
                        <img
                          src={encodeURI(item.image)}
                          alt={item.name}
                          className={`${item.maxHeight} w-auto object-contain transition-all duration-300 relative z-10 origin-bottom ${
                            isHovered
                              ? "scale-105 -translate-y-3 drop-shadow-[0_25px_35px_rgba(14,46,30,0.22)]"
                              : `${item.tiltClass} drop-shadow-[0_8px_14px_rgba(0,0,0,0.12)]`
                          }`}
                        />

                        {/* EXACT CONTACT SHADOW RIGHT ON THE SHELF SURFACE */}
                        <div className="w-full relative h-0 pointer-events-none z-20">
                          <div
                            className={`w-[88%] h-[3px] bg-black/60 blur-[1.5px] rounded-full mx-auto -mt-[2px] transition-all duration-300 ${
                              isHovered ? "opacity-25 scale-75" : "opacity-100"
                            }`}
                          />
                          <div
                            className={`w-[78%] h-[7px] bg-black/25 blur-[3px] rounded-full mx-auto -mt-[1px] transition-all duration-300 ${
                              isHovered ? "opacity-15 scale-85" : "opacity-100"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

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

        {/* ========================================================================= */}
        {/* 3. FUTURE RELEASES: 100% VERBATIM FROM docs/website_copy.md (SECTION 4)   */}
        {/* ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center space-y-6 pt-8 sm:pt-12 border-t border-mist-grey/70">
          <h3 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E2E1E] leading-[1.1]">
            More Collections Are Coming
          </h3>

          <p className="text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed">
            We’re developing new collections, including Love Done Right, along with collections on emotional intelligence, boundaries, anxiety, relationships, shadow work, inner child healing, and more.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => setNotifyModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-editorial-white text-[#0E2E1E] border border-[#0E2E1E] font-semibold rounded-full hover:bg-[#0E2E1E] hover:text-cream-logo transition-all shadow-sm text-sm sm:text-base tracking-wide cursor-pointer"
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
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg cursor-pointer"
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
