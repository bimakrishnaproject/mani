"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import AnimatedPhoneChat from "@/components/AnimatedPhoneChat";
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
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Editorial Beta Application */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
                  BETA ACCESS
                </span>
                <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] leading-[1.02] tracking-tight">
                  Shape <strong>mani</strong>’s Future
                </h1>
                <p className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed max-w-xl">
                  We’re inviting a small group of beta testers to use <strong>mani</strong>{" "}before its public launch. Test new features, share what works and what does not, and influence what we improve before release.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-white rounded-2xl border border-[#0E2E1E]/30 text-[#0E2E1E] space-y-4 text-center shadow-sm">
                  <span className="text-4xl">✨</span>
                  <h3 className="font-serif-heading text-3xl">Beta Application Received</h3>
                  <p className="text-sm sm:text-base text-[#0B1710] font-medium max-w-md mx-auto">
                    We have reserved your spot for <strong className="text-[#0E2E1E]">{formData.email}</strong>. As soon as a testing slot opens, you will receive an invitation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
                  <div>
                    <label className="block text-xs font-bold text-[#0E2E1E] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-mist-grey/90 rounded-xl text-base text-[#0B1710] font-medium placeholder-[#1C2826]/50 focus:outline-none focus:border-[#0E2E1E] focus:ring-1 focus:ring-[#0E2E1E] transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0E2E1E] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-white border border-mist-grey/90 rounded-xl text-base text-[#0B1710] font-medium placeholder-[#1C2826]/50 focus:outline-none focus:border-[#0E2E1E] focus:ring-1 focus:ring-[#0E2E1E] transition-all shadow-2xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0E2E1E] uppercase tracking-wider mb-1.5">
                        Primary Device
                      </label>
                      <select
                        value={formData.device}
                        onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-mist-grey/90 rounded-xl text-base text-[#0B1710] font-medium focus:outline-none focus:border-[#0E2E1E] focus:ring-1 focus:ring-[#0E2E1E] transition-all shadow-2xs"
                      >
                        <option value="iOS (iPhone)">iOS (iPhone)</option>
                        <option value="Android">Android</option>
                        <option value="Web Browser">Web Browser</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0E2E1E] uppercase tracking-wider mb-1.5">
                        Primary Interest
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-3.5 bg-white border border-mist-grey/90 rounded-xl text-base text-[#0B1710] font-medium focus:outline-none focus:border-[#0E2E1E] focus:ring-1 focus:ring-[#0E2E1E] transition-all shadow-2xs"
                      >
                        <option value="Narcissistic Recovery & Boundaries">Narcissistic Recovery &amp; Boundaries</option>
                        <option value="Emotional Intelligence">Emotional Intelligence</option>
                        <option value="Relationships & Attachment">Relationships &amp; Attachment</option>
                        <option value="Overthinking & Anxiety">Overthinking &amp; Anxiety</option>
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
                      className="mt-1 accent-[#0E2E1E]"
                    />
                    <label htmlFor="betaConsent" className="text-xs text-[#0B1710] font-medium leading-snug">
                      I agree to test unreleased beta features and keep early interface flows confidential under MANI&trade; Beta Terms.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] active:scale-98 transition-all shadow-md text-base cursor-pointer"
                  >
                    {isSubmitting ? "Submitting..." : "Join the App Beta →"}
                  </button>
                </form>
              )}

              <div className="pt-4 border-t border-mist-grey/60 flex justify-between items-center text-xs text-[#0B1710]/80 font-medium max-w-xl">
                <Link href="/beta-terms" className="underline hover:text-[#0E2E1E]">
                  Read Beta Program Terms
                </Link>
                <span>Your data is kept private and secure.</span>
              </div>
            </motion.div>

            {/* Right Column: Chat Showcase Animated Stage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-center items-center text-center space-y-5"
            >
              <AnimatedPhoneChat />
              <p className="text-xs text-[#22332A] font-medium italic max-w-xs pt-1">
                &ldquo;For the moments you need it most. Accessible guided support right in your hands.&rdquo;
              </p>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
