"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";

export default function JoinCommunityPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Join Our Community"
        description="This page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">
        <section className="px-6 sm:px-12 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-[#081F14] text-editorial-white rounded-3xl p-10 sm:p-16 text-center space-y-8 shadow-2xl border border-emerald-500/30"
          >
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full">
              JOIN THE MANI COMMUNITY
            </div>

            <div className="space-y-4">
              <h1 className="font-serif-heading text-4xl sm:text-6xl text-cream-logo">
                Support Doesn’t End Here
              </h1>
              <p className="text-base sm:text-lg text-[#C3CDC6] font-light max-w-xl mx-auto leading-relaxed">
                Be the first to hear about new collections, daily educational videos, app updates, and exclusive resources.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#05150D] rounded-2xl border border-emerald-500/40 text-cream-logo space-y-3">
                <span className="text-3xl">✓</span>
                <h3 className="font-serif-heading text-2xl">You’re Connected to the Community</h3>
                <p className="text-xs text-[#C3CDC6]">
                  Thank you for joining. We have sent a welcome message to <strong className="text-cream-logo">{email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto">
                <div>
                  <label className="block text-xs font-bold text-cream-logo uppercase tracking-wider mb-1.5">
                    First Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3.5 bg-editorial-white/10 border border-editorial-white/20 rounded-xl text-sm text-cream-logo placeholder-sage-grey focus:outline-none focus:border-cream-logo"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-cream-logo uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 bg-editorial-white/10 border border-editorial-white/20 rounded-xl text-sm text-cream-logo placeholder-sage-grey focus:outline-none focus:border-cream-logo"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 accent-cream-logo"
                  />
                  <label htmlFor="consent" className="text-xs text-[#C3CDC6] font-light leading-snug">
                    I agree to receive educational updates and new collection announcements from MANI. You can unsubscribe at any time.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all transform hover:scale-105 shadow-xl text-base"
                >
                  Join Our Community &rarr;
                </button>
              </form>
            )}

            <div className="pt-4 border-t border-editorial-white/10 flex justify-center gap-6 text-xs text-[#C3CDC6]">
              <span>🔒 Managed via Klaviyo CRM</span>
              <span>•</span>
              <Link href="/privacy" className="underline hover:text-cream-logo">
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
