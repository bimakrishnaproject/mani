"use client";

import { useState } from "react";
import Image from "next/image";

export default function AppShowcaseSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-28 md:py-36 bg-soft-white" id="app">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
              THE MANI APP
            </div>
            <h2 className="font-serif-heading text-4xl md:text-6xl text-deep-green mb-5">
              Support Wherever You Are
            </h2>
            <p className="text-base sm:text-lg text-[#4A524D] leading-relaxed mb-6">
              Beyond listening, MANI guides you toward understanding and practical next steps. Designed for private, calm, real-time support right from your phone.
            </p>

            <div className="inline-flex items-center gap-2 text-sm font-semibold text-deep-green mb-8">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Currently in Private Beta
            </div>

            {submitted ? (
              <div className="p-4 bg-soft-signal-green text-deep-green rounded-md font-semibold text-sm">
                ✓ Thank you! You have been added to the MANI Beta access list.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-grow px-4 py-3.5 border border-mist-grey rounded-md text-sm bg-editorial-white focus:outline-none focus:border-deep-green"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-deep-green text-cream-logo font-semibold rounded-md hover:bg-[#143d28] transition-colors text-sm"
                  >
                    Join Beta Access
                  </button>
                </div>
                <p className="text-xs text-sage-grey">We respect your privacy. Unsubscribe at any time.</p>
              </form>
            )}
          </div>

          {/* Real App Device Mockup Image */}
          <div className="flex justify-center">
            <div className="w-[320px] h-[580px] bg-editorial-white border-[10px] border-deep-green rounded-[44px] p-3 shadow-2xl overflow-hidden relative flex flex-col items-center justify-center">
              <div className="absolute top-3 w-20 h-4 bg-deep-green rounded-full z-10"></div>
              <Image
                src="/assets/Chat Conversation.png"
                alt="MANI App Conversation Screenshot"
                width={300}
                height={550}
                className="object-cover rounded-[32px] w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
