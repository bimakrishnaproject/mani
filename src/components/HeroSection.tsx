"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const line1Full = "Emotional Support";
  const line2Full = "Made Simple";
  const fullText = `${line1Full}\n${line2Full}`;

  const [displayedText, setDisplayedText] = useState<string>("");
  const [typingDone, setTypingDone] = useState<boolean>(false);

  useEffect(() => {
    let index = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, 45);

      return () => clearInterval(interval);
    }, 300);

    return () => clearTimeout(startTimeout);
  }, [fullText]);

  // Parse lines from displayed text
  const parts = displayedText.split("\n");
  const line1 = parts[0] || "";
  const line2 = parts[1] !== undefined ? parts[1] : "";
  const isTypingLine2 = displayedText.length > line1Full.length;

  return (
    <section className="min-h-[85vh] sm:min-h-screen pt-32 sm:pt-36 pb-16 bg-gradient-to-b from-editorial-white via-soft-white/60 to-editorial-white flex items-center justify-center overflow-hidden w-full relative">
      
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        <div className="text-center w-full space-y-8 sm:space-y-10">
          
          {/* Main Title with Smooth Intentional Typing Animation */}
          <h1
            className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[9.5rem] text-deep-green leading-[0.96] sm:leading-[0.92] tracking-tight min-h-[2.1em] flex flex-col items-center justify-center"
          >
            <span>
              {line1}
              {!isTypingLine2 && !typingDone && (
                <span className="inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-deep-green ml-1 animate-pulse align-baseline" />
              )}
            </span>
            {isTypingLine2 && (
              <span className="font-serif-italic text-deep-green mt-1 sm:mt-2">
                {line2}
                {!typingDone && (
                  <span className="inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-deep-green ml-1 animate-pulse align-baseline not-italic" />
                )}
              </span>
            )}
          </h1>

          {/* Calm Supporting Message - Fades in smoothly once typing completes */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-[#0B1710] leading-relaxed max-w-2xl mx-auto font-medium px-2"
          >
            <strong>mani</strong>{" "}brings together expert-guided collections, daily videos, and a new app in development to help you better understand yourself and navigate life&apos;s challenges.
          </motion.p>

          {/* CTA Buttons: Explore Collections | Join the App Beta */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/collections"
              className="px-8 sm:px-9 py-3.5 sm:py-4 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-md text-sm sm:text-base tracking-wide"
            >
              Explore Collections
            </Link>
            <Link
              href="/join-beta"
              className="px-8 sm:px-9 py-3.5 sm:py-4 bg-editorial-white text-[#0E2E1E] border-2 border-[#0E2E1E] font-semibold rounded-xl hover:bg-soft-white transition-all shadow-sm text-sm sm:text-base tracking-wide"
            >
              Join the App Beta
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
