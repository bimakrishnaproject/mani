"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const fullText = "Emotional Support Made Simple.";
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, 55);

      return () => clearInterval(interval);
    }, 1200);

    return () => clearTimeout(startTimer);
  }, []);

  // Split displayed text into two lines at the natural break
  const line1Full = "Emotional Support";
  const line2Full = " Made Simple.";

  const line1 = displayedText.slice(0, line1Full.length);
  const line2 = displayedText.length > line1Full.length
    ? displayedText.slice(line1Full.length).trimStart()
    : "";

  return (
    <section className="min-h-screen h-screen pt-24 pb-12 bg-gradient-to-b from-editorial-white via-soft-white/60 to-editorial-white flex items-center justify-center overflow-hidden w-full relative">
      
      {/* Subtle Ambient Lighting Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial from-soft-signal-green/25 via-cream-logo/15 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8 sm:space-y-10">
          
          {/* Main Title with Typing Effect */}
          <h1
            className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-deep-green leading-[0.96] sm:leading-[0.92] tracking-tight"
          >
            {line1}
            {line2 ? (
              <>
                <br />
                <span className="font-serif-italic text-deep-green">
                  {line2}
                </span>
              </>
            ) : null}
            {/* Blinking cursor while typing */}
            {!typingDone && (
              <span className="inline-block w-[3px] h-[0.8em] bg-deep-green ml-1 animate-pulse align-baseline" />
            )}
          </h1>

          {/* Calm Supporting Message — fades in after typing completes */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={typingDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`text-lg sm:text-xl md:text-2xl text-[#4A524D] leading-relaxed max-w-2xl mx-auto font-light px-2 ${!typingDone ? 'opacity-0' : ''}`}
          >
            MANI brings together expert-guided collections, daily videos, and an app in development to help you better understand yourself and navigate life&apos;s challenges.
          </motion.p>

          {/* Single Focused CTA Button — fades in after typing completes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={typingDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`pt-2 flex justify-center ${!typingDone ? 'opacity-0' : ''}`}
          >
            <Link
              href="/collections"
              className="px-9 py-4 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-all shadow-md text-sm sm:text-base tracking-wide"
            >
              Explore Collections &rarr;
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
