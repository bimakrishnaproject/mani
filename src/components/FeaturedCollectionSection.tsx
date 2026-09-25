"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";


export default function FeaturedCollectionSection() {
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
      {/* 1. Header */}
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0E2E1E]" />
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
                Book &bull; Workbook &bull; Coloring Book &amp; Journal &bull; Set of 10 Framed Posters &bull; Affirmation Cards
              </p>
            </div>

            <div className="shrink-0 pt-2">
              <Link
                href="/collections#featured-collection"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-full hover:bg-[#143d28] hover:shadow-xl hover:scale-[1.02] active:scale-95 active:bg-[#071B11] active:ring-4 active:ring-[#0E2E1E]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E2E1E] transition-all duration-200 text-sm tracking-wide shadow-md group cursor-pointer select-none"
              >
                <span>Explore Collection</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Full-Width Architectural Gallery Exhibition Stage */}
      <div className="w-full my-12 sm:my-16 bg-gradient-to-b from-[#FBF8F2] via-[#F4EDE2] to-[#EAE0D2] border-y border-[#DDD1BE] relative overflow-hidden">
        {/* Gallery Overhead Soft Illumination */}
        <div className="absolute top-0 left-0 right-0 h-80 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,255,255,0.95),transparent_75%)] pointer-events-none z-10" />

        {/* Subtle Gallery Picture Rail Shadow on the Back Wall */}
        <div className="absolute top-10 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D6C7B2]/60 to-transparent pointer-events-none" />

        {/* UNIFIED COMPLETE COLLECTION HERO PRESENTATION (Centered with Generous Whitespace) */}
        <div className="relative z-10 w-full max-w-[1760px] mx-auto pt-10 sm:pt-14 md:pt-18 lg:pt-22 pb-0 px-4 sm:px-8 flex flex-col items-center justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-[1180px] flex flex-col items-center justify-end group cursor-pointer"
          >
            {/* Ambient back glow */}
            <div className="absolute inset-0 bg-[#0E2E1E]/5 blur-3xl rounded-full pointer-events-none group-hover:bg-[#0E2E1E]/10 transition-all duration-700" />

            {/* Cohesive Complete Collection Bundle Mockup (Etsy-Style Physical Staging with Grounded Contact Shadows) */}
            <Link
              href="/collections#featured-collection"
              className="relative w-full flex items-end justify-center block"
              title="Explore The Bye Bye Narcissist Complete Collection"
            >
              <img
                src={encodeURI(
                  "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Complete_Collection_Etsy_Bundle.png"
                )}
                alt="The Bye Bye Narcissist Complete Collection - Hardcover Book, Guided Workbook, Coloring Book, Affirmation Cards, and Framed Poster Collection"
                className="w-auto h-auto max-h-[440px] sm:max-h-[520px] md:max-h-[580px] lg:max-h-[640px] xl:max-h-[680px] object-contain object-bottom relative z-10 drop-shadow-[0_20px_45px_rgba(0,0,0,0.14)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
              />
            </Link>
          </motion.div>
        </div>

        {/* THE "TATAKAN" (CONTINUOUS PHYSICAL 3D SHELF LEDGE - EDGE-TO-EDGE) */}
        <div className="relative z-20 w-full">
          {/* SHELF FLOOR PLANE: The surface the bundle stands on */}
          <div className="w-full h-4 sm:h-5 bg-gradient-to-r from-[#D7CBBA] via-[#EAE0D0] to-[#D7CBBA] border-t border-white/90 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9)] relative">
            {/* Crisp Horizon Bevel Edge Reflection */}
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-white/30 via-white to-white/30" />
          </div>

          {/* SHELF FRONT FASCIA: The vertical thickness of the tatakan plinth */}
          <div className="w-full h-5 sm:h-6 bg-gradient-to-b from-[#C4B59F] via-[#B8A891] to-[#A4937B] border-t border-[#BFAA94] shadow-[0_6px_14px_rgba(0,0,0,0.14)]" />
        </div>
      </div>

      {/* 3. Future Releases */}
      <div className="w-full max-w-[1760px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="max-w-3xl mx-auto text-center space-y-6 pt-4 sm:pt-8 border-t border-mist-grey/70">
          {/* <MaskedReveal> */}
            <h3 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E2E1E] leading-[1.1]">
              More Collections Are Coming
            </h3>
          {/* </MaskedReveal> */}

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
