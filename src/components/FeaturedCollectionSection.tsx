"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedCollectionSection() {
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifySubmitted, setNotifySubmitted] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

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
                onMouseDown={() => setIsButtonPressed(true)}
                onMouseUp={() => setIsButtonPressed(false)}
                className={`inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-full hover:bg-[#143d28] hover:shadow-xl active:scale-95 active:bg-[#081f14] transition-all text-sm tracking-wide shadow-md group ${
                  isButtonPressed ? "ring-4 ring-[#0E2E1E]/20 scale-95" : ""
                }`}
              >
                <span>Explore Collection</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ARCHITECTURAL GALLERY EXHIBITION STAGE (SINGLE UNIFIED COLLECTION IMAGE) */}
        {/* Per docs/ai_notes.md Line 27 & 65: Single collection image & grounded     */}
        {/* ========================================================================= */}
        <div className="w-full">
          <Link
            href="/collections"
            className="block group cursor-pointer"
          >
            {/* Architectural Cream Plinth Tray */}
            <div className="relative w-full rounded-[28px] sm:rounded-[40px] bg-gradient-to-b from-[#FAF7F0] via-[#F2ECE0] to-[#E5DACB] border border-[#D8CCB9] shadow-[0_25px_60px_-15px_rgba(14,46,30,0.14),0_10px_25px_-5px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_35px_75px_-15px_rgba(14,46,30,0.22)]">
              
              {/* Gallery Overhead Soft Illumination */}
              <div className="absolute top-0 left-0 right-0 h-72 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.95),transparent_75%)] pointer-events-none z-10" />

              {/* Subtle Gallery Picture Rail Accent */}
              <div className="absolute top-10 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#D6C7B2]/60 to-transparent pointer-events-none" />

              {/* COLLECTION STAGE DISPLAY */}
              <div className="relative z-10 w-full pt-8 sm:pt-12 md:pt-16 pb-2 sm:pb-4 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center">
                
                {/* Single Master Collection Image */}
                <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
                  {/* Soft ambient back shadow */}
                  <div className="absolute inset-0 bg-black/10 blur-2xl rounded-full scale-90 pointer-events-none transition-all duration-500 group-hover:scale-95 group-hover:opacity-60" />

                  <img
                    src={encodeURI("/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png")}
                    alt="The Complete Bye Bye Narcissist Collection"
                    className="w-full h-auto max-h-[520px] object-contain drop-shadow-[0_20px_35px_rgba(14,46,30,0.18)] transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 relative z-10"
                  />
                </div>

                {/* Grounding Contact Shadow underneath collection baseline */}
                <div className="w-full max-w-4xl relative h-0 pointer-events-none z-20 -mt-3 sm:-mt-5">
                  <div className="w-[92%] h-[6px] bg-black/50 blur-[3px] rounded-full mx-auto transition-all duration-500 group-hover:opacity-40" />
                  <div className="w-[84%] h-[12px] bg-black/20 blur-[6px] rounded-full mx-auto transition-all duration-500 group-hover:opacity-20" />
                </div>
              </div>

              {/* ARCHITECTURAL TATAKAN SHELF PLINTH LEDGE */}
              <div className="relative z-20 w-full">
                {/* Surface Plane */}
                <div className="w-full h-4 sm:h-5 bg-gradient-to-r from-[#D8CCBA] via-[#ECE2D2] to-[#D8CCBA] border-t border-white/90 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9)] relative">
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-white/30 via-white to-white/30" />
                </div>

                {/* Front Fascia Bevel */}
                <div className="w-full h-5 sm:h-6 bg-gradient-to-b from-[#C4B59F] via-[#B8A891] to-[#A4937B] border-t border-[#BFAA94] shadow-[0_6px_14px_rgba(0,0,0,0.14)] flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#544634] opacity-80 group-hover:opacity-100 transition-opacity">
                    Click to Explore Full Collection &rarr;
                  </span>
                </div>
              </div>

            </div>
          </Link>
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
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-editorial-white text-[#0E2E1E] border border-[#0E2E1E] font-semibold rounded-full hover:bg-[#0E2E1E] hover:text-cream-logo active:scale-95 transition-all shadow-sm text-sm sm:text-base tracking-wide cursor-pointer"
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
