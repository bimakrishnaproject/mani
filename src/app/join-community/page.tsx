"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { trackCommunitySignup } from "@/lib/analytics";

const fadeIn = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export default function JoinCommunityPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    trackCommunitySignup(email);

    try {
      await fetch("/api/klaviyo/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "community" }),
      });
    } catch (err) {
      console.error("Klaviyo CRM sync error:", err);
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden selection:bg-[#0E2E1E] selection:text-white">
      <Header />

      <main className="flex-grow pt-32 sm:pt-40 md:pt-48 pb-32">
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          {/* EXPANSIVE EDITORIAL SPREAD - APPLE MAGAZINE ARCHITECTURE */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 2xl:gap-32 items-center">
            
            {/* Left Column: Authoritative Editorial Storytelling */}
            <motion.div {...fadeIn} className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
                  COMMUNITY INVITATION
                </span>
                <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0E2E1E] tracking-tight leading-[0.98]">
                  Join The <strong className="font-bold lowercase">mani</strong>{" "}Community
                </h1>
                <p className="text-xl sm:text-2xl text-[#0B1710] font-medium leading-relaxed pt-2">
                  Be the first to hear about new collections, videos, app updates, and resources.
                </p>
              </div>

              {/* Editorial Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-mist-grey/80">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-wider text-[#0E2E1E] uppercase block">
                    01 &middot; Collections
                  </span>
                  <p className="text-xs sm:text-sm text-[#0B1710] font-medium leading-relaxed">
                    Advance notice for future physical books, workbooks, and tools.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-wider text-[#0E2E1E] uppercase block">
                    02 &middot; Watch &amp; Learn
                  </span>
                  <p className="text-xs sm:text-sm text-[#0B1710] font-medium leading-relaxed">
                    New daily educational videos on psychology and relationships.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-wider text-[#0E2E1E] uppercase block">
                    03 &middot; <strong className="font-bold lowercase">mani</strong> App
                  </span>
                  <p className="text-xs sm:text-sm text-[#0B1710] font-medium leading-relaxed">
                    Direct access to new reflections, practices, and beta features.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Crisp Architectural Form Box (High Contrast, Zero Opacity Cliché) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="bg-white border-2 border-[#0E2E1E]/15 rounded-3xl p-8 sm:p-10 md:p-12 shadow-xl space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                    Stay Connected
                  </h2>
                  <p className="text-xs sm:text-sm text-[#0B1710] font-medium leading-relaxed">
                    Join readers, learners, and community members around the world.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 bg-[#0E2E1E] text-cream-logo rounded-2xl space-y-3 shadow-md">
                    <span className="text-3xl block">✓</span>
                    <h3 className="font-serif-heading text-xl sm:text-2xl text-cream-logo">Welcome to the Community</h3>
                    <p className="text-xs sm:text-sm text-[#FAF5EB] leading-relaxed font-medium">
                      We&apos;ve reserved your place for <strong className="text-cream-logo font-semibold">{email}</strong>. Watch your inbox for incoming resources and early release updates.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0E2E1E] uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your.email@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 bg-[#F8F9FA] border border-mist-grey rounded-xl text-base text-[#0B1710] font-medium placeholder-neutral-400 focus:outline-none focus:border-[#0E2E1E] focus:bg-white transition-all shadow-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-[#0E2E1E] text-cream-logo font-semibold text-base rounded-xl hover:bg-[#143d28] active:scale-98 transition-all shadow-lg cursor-pointer"
                    >
                      {loading ? "Joining..." : "Join The Community"}
                    </button>
                  </form>
                )}

                <div className="pt-2 border-t border-mist-grey/60">
                  <p className="text-[11px] text-[#0B1710]/80 font-medium leading-relaxed">
                    Emotional Support Made Simple&trade; &middot; Unsubscribe anytime with one click.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
