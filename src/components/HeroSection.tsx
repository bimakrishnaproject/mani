"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll-driven parallax and gentle fade (Flyhyer / Koto)
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const line1Full = "Emotional Support";
  const line2Full = "Made Simple";
  const fullText = `${line1Full}\n${line2Full}`;

  const [displayedText, setDisplayedText] = useState<string>("");
  const [typingDone, setTypingDone] = useState<boolean>(false);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let index = 0;

    const typeNextChar = () => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;

        // Natural typing cadence (Inside The Head): slight pause at line break, organic variation
        let nextDelay = 38 + Math.random() * 26; // 38ms - 64ms organic keystroke
        if (index === line1Full.length + 1) {
          nextDelay = 240; // Thoughtful pause between "Emotional Support" and "Made Simple"
        } else if (index === line1Full.length) {
          nextDelay = 120;
        }

        timeoutId = setTimeout(typeNextChar, nextDelay);
      } else {
        setTypingDone(true);
        // Let cursor linger gracefully before smooth fadeout
        setTimeout(() => {
          setCursorVisible(false);
        }, 650);
      }
    };

    // Brief initial resting breath before typing commences
    timeoutId = setTimeout(typeNextChar, 280);

    return () => clearTimeout(timeoutId);
  }, [fullText, line1Full.length]);

  // Mouse tracking for dynamic ambient spotlight (Flyhyer & 14islands)
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hasMouse, setHasMouse] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    if (!hasMouse) setHasMouse(true);
  };

  // Parse lines from displayed text
  const parts = displayedText.split("\n");
  const line1 = parts[0] || "";
  const line2 = parts[1] !== undefined ? parts[1] : "";
  const isTypingLine2 = displayedText.length > line1Full.length;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="min-h-[85vh] sm:min-h-screen pt-32 sm:pt-36 pb-36 sm:pb-44 bg-gradient-to-b from-editorial-white via-[#FAF7F2] to-editorial-white flex items-center justify-center overflow-hidden w-full relative select-none"
    >
      {/* Subtle dynamic ambient spotlight (Flyhyer & 14islands craftsmanship) */}
      {hasMouse && (
        <div
          className="pointer-events-none absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,46,30,0.045),transparent_70%)] blur-3xl -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
          style={{
            left: mousePos.x,
            top: mousePos.y,
          }}
          aria-hidden="true"
        />
      )}

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="text-center w-full space-y-8 sm:space-y-10 max-w-5xl mx-auto"
        >

          {/* Main Title with Humanized Cadence Typing Animation (Inside The Head & Koto) */}
          <h1
            className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[9.5rem] text-deep-green leading-[0.96] sm:leading-[0.92] tracking-tight min-h-[2.1em] flex flex-col items-center justify-center select-none"
          >
            <span>
              {line1}
              {!isTypingLine2 && cursorVisible && (
                <span className={`inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-deep-green ml-1.5 align-baseline ${!typingDone ? "animate-pulse" : "transition-opacity duration-500 opacity-0"}`} />
              )}
            </span>
            {isTypingLine2 && (
              <span className="font-serif-italic text-deep-green mt-1 sm:mt-2">
                {line2}
                {cursorVisible && (
                  <span className={`inline-block w-[3px] sm:w-[4px] h-[0.8em] bg-deep-green ml-1.5 align-baseline not-italic ${!typingDone ? "animate-pulse" : "transition-opacity duration-500 opacity-0"}`} />
                )}
              </span>
            )}
          </h1>

          {/* Calm Supporting Message - Fades in smoothly once typing completes */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-[#0B1710] leading-relaxed max-w-2xl mx-auto font-medium px-2"
          >
            <strong className="font-bold lowercase">mani</strong>{" "}brings together expert-guided collections, daily videos, and a new app in development to help you better understand yourself and navigate life&apos;s challenges.
          </motion.p>

          {/* CTA Buttons: Explore Collections | Join the App Beta with Tactile Press & Focus Rings */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/collections"
              className="px-8 sm:px-9 py-3.5 sm:py-4 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97] active:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E2E1E] transition-all shadow-md text-sm sm:text-base tracking-wide cursor-pointer"
            >
              Explore Collections
            </Link>
            <Link
              href="/join-beta"
              className="px-8 sm:px-9 py-3.5 sm:py-4 bg-editorial-white text-[#0E2E1E] border-2 border-[#0E2E1E] font-semibold rounded-xl hover:bg-soft-white hover:-translate-y-0.5 hover:shadow-md active:scale-[0.97] active:bg-[#E8F0EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E2E1E] transition-all shadow-sm text-sm sm:text-base tracking-wide cursor-pointer"
            >
              Join the App Beta
            </Link>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}
