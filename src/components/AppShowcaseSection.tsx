"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UnderProgressModal from "./UnderProgressModal";
import { trackBetaSignup } from "@/lib/analytics";

const chatScenarios = [
  {
    user: "I'm feeling anxious today. Everything felt like it was going wrong and I never felt like I could catch up.",
    mani: "That sounds like a lot for one day. Do you think it was the amount you had to do, or the pressure you were putting on yourself?",
  },
  {
    user: "I feel like I'm walking on eggshells around my partner and second-guessing everything I say.",
    mani: "Walking on eggshells is a common sign of unpredictable emotional dynamics. Let's explore when this pattern usually triggers for you.",
  },
  {
    user: "I don't know how to set a boundary without feeling guilty.",
    mani: "Guilt is often just your brain misinterpreting self-protection as selfishness. Let's look at what boundary you actually need right now.",
  },
];

export default function AppShowcaseSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);

  // Multi-dialogue scenario index and animation state
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [animPhase, setAnimPhase] = useState<"user" | "thinking" | "mani" | "pause">("user");
  const [userTextIndex, setUserTextIndex] = useState(0);
  const [maniTextIndex, setManiTextIndex] = useState(0);

  useEffect(() => {
    setAnimPhase("user");
    setUserTextIndex(0);
    setManiTextIndex(0);

    const currentScenario = chatScenarios[scenarioIndex];
    let uIdx = 0;

    // Step 1: Type User Message
    const userInterval = setInterval(() => {
      uIdx++;
      setUserTextIndex(uIdx);
      if (uIdx >= currentScenario.user.length) {
        clearInterval(userInterval);

        // Step 2: MANI Thinking Delay (1.2s)
        setAnimPhase("thinking");
        const thinkTimeout = setTimeout(() => {

          // Step 3: Type MANI Response
          setAnimPhase("mani");
          let mIdx = 0;
          const maniInterval = setInterval(() => {
            mIdx++;
            setManiTextIndex(mIdx);
            if (mIdx >= currentScenario.mani.length) {
              clearInterval(maniInterval);

              // Step 4: Pause & Cycle to Next Scenario after 4s
              setAnimPhase("pause");
              const nextTimeout = setTimeout(() => {
                setScenarioIndex((prev) => (prev + 1) % chatScenarios.length);
              }, 4000);

              return () => clearTimeout(nextTimeout);
            }
          }, 22);

          return () => clearInterval(maniInterval);
        }, 1200);

        return () => clearTimeout(thinkTimeout);
      }
    }, 25);

    return () => clearInterval(userInterval);
  }, [scenarioIndex]);

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

  const currentScenario = chatScenarios[scenarioIndex];
  const currentUserText = currentScenario.user.slice(0, userTextIndex);
  const currentManiText = currentScenario.mani.slice(0, maniTextIndex);

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
              Beyond listening, MANI guides you toward understanding and practical next steps right from your phone.
            </p>
          </motion.div>

          {/* Single Centered Showcase Frame with Automated Multi-Dialogue Stream */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0E2E1E] text-editorial-white rounded-3xl p-6 sm:p-10 border border-editorial-white/15 shadow-2xl max-w-2xl mx-auto text-left space-y-5 relative overflow-hidden min-h-[360px]"
          >
            {/* Ambient Inner Glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-radial from-cream-logo/15 to-transparent blur-3xl pointer-events-none" />

            {/* Frame Top Notch Header with Scenario Indicator */}
            <div className="flex items-center justify-between border-b border-editorial-white/10 pb-4 mb-2">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/Mani Logos/mani cream logo.png"
                  alt="MANI Logo"
                  className="h-5 w-auto object-contain"
                />
                <span className="text-xs font-semibold text-cream-logo tracking-wider">
                  MANI Reflection Companion
                </span>
              </div>
              <span className="text-[10px] font-bold text-cream-logo bg-editorial-white/10 px-3 py-1 rounded-full uppercase tracking-widest">
                SCENARIO 0{scenarioIndex + 1} / 03
              </span>
            </div>

            {/* Conversation Flow */}
            <AnimatePresence mode="wait">
              <motion.div
                key={scenarioIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 text-sm sm:text-base min-h-[220px] flex flex-col justify-center"
              >

                {/* User Reflection Bubble */}
                <div className="p-4 sm:p-5 bg-editorial-white text-ink-black rounded-2xl rounded-tr-xs shadow-md space-y-1 ml-auto max-w-[92%] border border-mist-grey">
                  <span className="text-[10px] font-bold text-sage-grey uppercase tracking-wider block">YOU</span>
                  <p className="leading-relaxed font-light">
                    &ldquo;{currentUserText}&rdquo;
                    {animPhase === "user" && (
                      <span className="inline-block w-1.5 h-4 bg-deep-green ml-1 animate-pulse" />
                    )}
                  </p>
                </div>

                {/* Thinking Indicator */}
                {animPhase === "thinking" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-[#05150D] text-cream-logo rounded-2xl rounded-tl-xs flex items-center gap-3 border border-editorial-white/10 w-fit max-w-[90%]"
                  >
                    <img src="/assets/Mani Logos/mani cream logo.png" alt="MANI" className="h-4 w-auto" />
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-cream-logo rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-cream-logo rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-2 h-2 bg-cream-logo rounded-full animate-bounce [animation-delay:0.4s]" />
                      <span className="text-xs italic text-cream-logo/80 ml-2">MANI is reflecting...</span>
                    </div>
                  </motion.div>
                )}

                {/* AI Response Bubble */}
                {(animPhase === "mani" || animPhase === "pause") && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 sm:p-5 bg-[#05150D] text-editorial-white rounded-2xl rounded-tl-xs border border-editorial-white/15 shadow-xl space-y-1 max-w-[92%]"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <img src="/assets/Mani Logos/mani cream logo.png" alt="MANI" className="h-4 w-auto" />
                      <span className="text-[10px] font-bold text-cream-logo uppercase tracking-wider">MANI</span>
                    </div>
                    <p className="leading-relaxed font-light text-editorial-white/90">
                      &ldquo;{currentManiText}&rdquo;
                      {animPhase === "mani" && (
                        <span className="inline-block w-1.5 h-4 bg-cream-logo ml-1 animate-pulse" />
                      )}
                    </p>
                  </motion.div>
                )}

              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Supporting Messaging & Early Access CTA Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto space-y-6 pt-4"
          >
            <blockquote className="font-serif-italic text-xl sm:text-2xl text-deep-green leading-snug">
              &ldquo;Private, real-time reflection right from your phone.&rdquo;
            </blockquote>

            <p className="text-base text-[#4A524D] font-light leading-relaxed">
              An intelligent supportive companion designed to help you process feelings in the moment, reframe overwhelming thoughts, and track emotional clarity.
            </p>

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
