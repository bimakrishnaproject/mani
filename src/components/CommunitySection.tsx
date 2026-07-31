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
    <section className="py-28 md:py-36 bg-deep-green text-editorial-white text-center" id="community">
      <div className="max-w-[680px] mx-auto px-6">
        <h2 className="font-serif-heading text-4xl md:text-6xl text-cream-logo mb-4">
          Support Doesn't End Here
        </h2>
        <p className="text-base sm:text-lg text-[#C3CDC6] mb-8 leading-relaxed">
          Be the first to receive new collections, video releases, and app updates directly from the MANI team.
        </p>

        {submitted ? (
          <div className="p-4 bg-cream-logo text-deep-green rounded-md font-semibold text-sm">
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
              className="flex-grow px-5 py-4 rounded-md text-sm text-ink-black bg-editorial-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-cream-logo text-deep-green font-semibold rounded-md hover:bg-[#f2e1bd] transition-colors whitespace-nowrap text-sm"
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
