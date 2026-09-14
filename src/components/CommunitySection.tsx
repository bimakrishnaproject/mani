"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { trackCommunitySignup } from "@/lib/analytics";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function CommunitySection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
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
      setEmail("");
    }
  };

  return (
    <section className="py-24 sm:py-36 bg-gradient-to-b from-editorial-white to-soft-white text-ink-black text-center relative overflow-hidden" id="community">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <motion.div {...fadeIn} className="space-y-6 sm:space-y-8">
          <h2 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-[#0E2E1E] leading-[1.05] tracking-tight">
            There’s More To <strong>mani</strong>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-[#0B1710] leading-relaxed font-medium max-w-3xl mx-auto">
            Join our community for new collections, videos, app updates, and practical resources for everyday life.
          </p>

          <div className="pt-4 max-w-xl mx-auto">
            {submitted ? (
              <div className="p-6 bg-[#0E2E1E] text-cream-logo rounded-2xl font-semibold text-base shadow-lg">
                ✓ Welcome to the <strong>mani</strong>{" "}Community! Updates will be sent to your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  required
                  className="flex-grow px-6 py-4 rounded-xl text-sm sm:text-base text-ink-black bg-white border border-mist-grey focus:outline-none focus:border-[#0E2E1E] shadow-xs"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all whitespace-nowrap text-sm sm:text-base shadow-md cursor-pointer"
                >
                  Join Our Community
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
