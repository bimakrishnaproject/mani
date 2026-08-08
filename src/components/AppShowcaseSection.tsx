"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import UnderProgressModal from "./UnderProgressModal";
import { trackBetaSignup } from "@/lib/analytics";

export default function AppShowcaseSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      trackBetaSignup(email);
      try {
        await fetch("/api/klaviyo/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, type: "beta" }),
        });
      } catch (err) {
        console.error("Klaviyo CRM sync error:", err);
      }
      setEmail("");
    }
  };

  return (
    <section
      className="py-24 sm:py-36 bg-editorial-white text-ink-black overflow-hidden w-full border-t border-mist-grey"
      id="app"
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12 sm:space-y-16">

          {/* Section Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h2 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-deep-green leading-[1.05] tracking-tight">
              Support Wherever You Are
            </h2>
            <p className="text-lg sm:text-xl text-[#4A524D] font-light leading-relaxed max-w-2xl mx-auto">
              Guided conversations, breathwork, meditations, visualizations, stories, and practical tools designed to support you wherever you are.
            </p>
          </motion.div>

          {/* Clean App Preview Frame */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0E2E1E] text-editorial-white rounded-3xl p-6 sm:p-10 border border-editorial-white/15 shadow-2xl max-w-2xl mx-auto text-left space-y-5 relative overflow-hidden min-h-[300px]"
          >
            {/* Ambient Inner Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-radial from-cream-logo/15 to-transparent blur-3xl pointer-events-none" />

            {/* Frame Top Notch Header */}
            <div className="flex items-center justify-between border-b border-editorial-white/10 pb-4 mb-2">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/Mani Logos/mani cream logo.png"
                  alt="MANI Logo"
                  className="h-5 w-auto object-contain"
                />
                <span className="text-xs font-semibold text-cream-logo tracking-wider">
                  MANI App
                </span>
              </div>
              <span className="text-[10px] font-bold text-cream-logo bg-editorial-white/10 px-3 py-1 rounded-full uppercase tracking-widest">
                BETA
              </span>
            </div>

            {/* Clean Placeholder — Awaiting approved transcripts */}
            <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#05150D] border border-editorial-white/15 flex items-center justify-center">
                <img
                  src="/assets/Mani Logos/mani cream logo.png"
                  alt="MANI"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-cream-logo">
                  Your private support companion
                </p>
                <p className="text-xs text-editorial-white/60 font-light max-w-sm">
                  Guided conversations designed to help you process, reflect, and move forward — right from your phone.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Supporting Messaging & Early Access CTA Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto space-y-6 pt-4"
          >
            {submitted ? (
              <div className="p-5 bg-[#0E2E1E] text-cream-logo rounded-2xl font-semibold text-base shadow-lg border border-editorial-white/10">
                ✓ Thank you! You have been added to the MANI early access list.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-grow px-5 py-4 border border-mist-grey rounded-xl text-base bg-white text-ink-black focus:outline-none focus:border-deep-green shadow-xs"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-deep-green text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-md text-base tracking-wide whitespace-nowrap"
                >
                  Request Early Access &rarr;
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>

      <UnderProgressModal
        isOpen={showProgressModal}
        onClose={() => setShowProgressModal(false)}
        title="🔒 Early Access Under Progress"
        description="App Early Access registration is currently under progress for today's milestone update. Please explore the live homepage presentation."
      />
    </section>
  );
}
