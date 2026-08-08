"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";

export default function JoinBetaPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Join MANI App Beta"
        description="This page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    device: "iOS (iPhone)",
    interest: "Narcissistic Recovery & Boundaries",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.consent) return;
    setIsSubmitting(true);

    try {
      await fetch("/api/klaviyo/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          type: "beta",
          customFields: {
            full_name: formData.name,
            device_preference: formData.device,
            primary_interest: formData.interest,
          },
        }),
      });
    } catch (err) {
      console.warn("Klaviyo Beta sync warning:", err);
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">
        <section className="px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Beta Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-[#081F14] text-editorial-white p-8 sm:p-12 rounded-3xl border border-emerald-500/30 shadow-2xl space-y-8"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full inline-block">
                  MANI APP BETA PROGRAM
                </span>
                <h1 className="font-serif-heading text-4xl sm:text-6xl text-cream-logo">
                  Help Shape What’s Next
                </h1>
                <p className="text-sm text-[#C3CDC6] font-light leading-relaxed">
                  Join our private beta program to test guided chat experience, daily reflection prompts, and privacy-first features before public release.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#05150D] rounded-2xl border border-emerald-500/40 text-cream-logo space-y-4 text-center">
                  <span className="text-4xl">✨</span>
                  <h3 className="font-serif-heading text-3xl">Beta Application Received</h3>
                  <p className="text-sm text-[#C3CDC6] max-w-md mx-auto">
                    We’ve reserved your spot for <strong className="text-cream-logo">{formData.email}</strong> in our live Klaviyo Beta list (<code className="text-emerald-300 font-mono">WKUVRm</code>). As soon as a testing slot opens, you’ll receive an invitation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-cream-logo uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-editorial-white/10 border border-editorial-white/20 rounded-xl text-sm text-cream-logo placeholder-sage-grey focus:outline-none focus:border-cream-logo"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-cream-logo uppercase tracking-wider mb-1.5">
                        Primary Device
                      </label>
                      <select
                        value={formData.device}
                        onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#05150D] border border-editorial-white/20 rounded-xl text-sm text-cream-logo focus:outline-none focus:border-cream-logo"
                      >
                        <option value="iOS (iPhone)">iOS (iPhone)</option>
                        <option value="Android">Android</option>
                        <option value="Web Browser">Web Browser</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-cream-logo uppercase tracking-wider mb-1.5">
                        Primary Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3.5 bg-[#05150D] border border-editorial-white/20 rounded-xl text-sm text-cream-logo focus:outline-none focus:border-cream-logo"
                      >
                        <option value="Narcissistic Recovery & Boundaries">Narcissistic Recovery & Boundaries</option>
                        <option value="Emotional Intelligence">Emotional Intelligence</option>
                        <option value="Relationships & Attachment">Relationships & Attachment</option>
                        <option value="Overthinking & Anxiety">Overthinking & Anxiety</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="betaConsent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 accent-cream-logo"
                    />
                    <label htmlFor="betaConsent" className="text-xs text-[#C3CDC6] font-light leading-snug">
                      I agree to test unreleased beta features and keep early interface flows confidential under MANI Beta Terms.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all transform hover:scale-105 shadow-xl text-base"
                  >
                    {isSubmitting ? "Submitting to Live Klaviyo Beta List..." : "Submit Beta Access Application →"}
                  </button>
                </form>
              )}

              <div className="pt-4 border-t border-editorial-white/10 flex justify-between items-center text-xs text-[#C3CDC6]">
                <Link href="/beta-terms" className="underline hover:text-cream-logo">
                  Read Beta Program Terms
                </Link>
                <span>🔒 Live Sync to Klaviyo List (WKUVRm)</span>
              </div>
            </motion.div>

            {/* Right Column: Chat Showcase Mockup Stage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-center items-center text-center space-y-6"
            >
              <div className="bg-editorial-white p-6 rounded-3xl border-2 border-mist-grey shadow-xl max-w-[340px]">
                <Image
                  src="/assets/Chat Conversation.png"
                  alt="MANI App Guided Chat Experience"
                  width={340}
                  height={560}
                  quality={100}
                  priority
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
              <p className="text-xs text-sage-grey italic max-w-xs">
                "For the moments you need it most — accessible guided support right in your hands."
              </p>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
