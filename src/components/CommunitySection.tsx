"use client";

import { useState } from "react";
import { trackCommunitySignup } from "@/lib/analytics";

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
    <section className="py-24 sm:py-32 bg-[#F4EFE6] text-[#0E2E1E] text-center border-t border-mist-grey" id="community">
      <div className="max-w-[680px] mx-auto px-6">
        <span className="text-xs font-bold tracking-widest text-[#8C7659] uppercase block mb-3">
          STAY CONNECTED
        </span>
        <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E] mb-4">
          Support Doesn&apos;t End Here
        </h2>
        <p className="text-base sm:text-lg text-[#626A64] mb-8 leading-relaxed font-light">
          Be the first to receive new collections, video releases, and app updates directly from the MANI team.
        </p>

        {submitted ? (
          <div className="p-4 bg-[#0E2E1E] text-cream-logo rounded-xl font-semibold text-sm shadow-md">
            ✓ Welcome to the MANI Community! Updates will be sent to your email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[500px] mx-auto mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-5 py-4 rounded-xl text-sm text-ink-black bg-white border border-mist-grey focus:outline-none focus:border-[#0E2E1E]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-colors whitespace-nowrap text-sm shadow-md"
            >
              Join the Community
            </button>
          </form>
        )}
        <p className="text-xs text-sage-grey">By subscribing, you agree to receive MANI updates. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
