"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface RealisticPaperScrollProps {
  children: React.ReactNode;
  className?: string;
  badgeText?: string;
}

/**
 * RealisticPaperScroll
 * 
 * A Creative Technologist component that simulates a realistic 3D paper sheet
 * rolling up tightly into a cylindrical scroll as the user scrolls down the page.
 * 
 * Powered by React, Framer Motion, and CSS 3D perspective transforms with
 * dynamic inner shadow gradients for paper depth and specular lighting.
 */
export default function RealisticPaperScroll({
  children,
  className = "",
  badgeText = "THE LIVING EDITORIAL SYSTEM",
}: RealisticPaperScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within the container viewport (0 = fully in view, 1 = scrolled past)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Global paper sheet scale and opacity transforms
  const mainScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const mainOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.4, 0]);

  // Generate 8 3D cylindrical segment rotations for realistic spiral rolling deformation
  const segmentCount = 8;
  const segmentRotations = Array.from({ length: segmentCount }, (_, i) => {
    // Progressive rotation angle for each fold segment as it rolls into a cylinder
    return useTransform(
      scrollYProgress,
      [0, 1],
      [0, (i + 1) * -22] // Rotates progressively tighter (-22deg, -44deg, -66deg, etc.)
    );
  });

  // Dynamic shadow intensity as the paper rolls tighter
  const innerShadowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.65]);

  return (
    <section
      ref={containerRef}
      className={`relative min-h-[140vh] w-full pt-32 pb-24 flex justify-center items-start overflow-hidden bg-gradient-to-b from-editorial-white via-soft-white/60 to-soft-white [perspective:1400px] ${className}`}
    >
      <div className="sticky top-28 w-full max-w-6xl px-4 sm:px-8 md:px-12 flex justify-center">
        
        {/* Main 3D Paper Sheet Container */}
        <motion.div
          style={{
            scale: mainScale,
            opacity: mainOpacity,
            transformOrigin: "top center",
          }}
          className="w-full relative bg-[#FAF6EF] border-2 border-[#D8C7AD] rounded-3xl py-16 sm:py-24 px-8 sm:px-16 shadow-[0_30px_80px_rgba(14,46,30,0.18)] overflow-hidden [transform-style:preserve-3d]"
        >
          
          {/* TOP RIGHT: 3D Corner Page Curl Peel Overlay (Gold/Parchment Fold) */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-gradient-to-br from-[#D8C7AD] via-[#FAF6EF] to-[#BFA989] rounded-bl-full shadow-[0_15px_30px_rgba(0,0,0,0.25)] z-40 pointer-events-none border-b-2 border-l-2 border-[#BFA989] flex items-end justify-start p-4 [transform:rotate(-10deg)]">
            <div className="w-12 h-12 bg-cream-logo/50 rounded-full blur-xs" />
          </div>

          {/* DYNAMIC 3D CYLINDRICAL ROLL OVERLAY SEGMENTS */}
          <div className="absolute inset-0 pointer-events-none z-30 [transform-style:preserve-3d]">
            {segmentRotations.map((rotation: MotionValue<number>, idx: number) => (
              <motion.div
                key={idx}
                style={{
                  rotateX: rotation,
                  top: `${(idx * 100) / segmentCount}%`,
                  height: `${100 / segmentCount}%`,
                  transformOrigin: "top center",
                }}
                className="absolute left-0 right-0 [transform-style:preserve-3d]"
              >
                {/* Dynamic Inner Shadow Gradient conveying Paper Roll Thickness & Depth */}
                <motion.div
                  style={{ opacity: innerShadowOpacity }}
                  className="w-full h-full bg-gradient-to-b from-black/40 via-transparent to-black/30 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* INNER CONTENT LAYER */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {badgeText && (
              <div className="mb-6">
                <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-4 py-2 rounded-full shadow-xs">
                  {badgeText}
                </span>
              </div>
            )}

            {children}
          </div>

          {/* PAPER SPECULAR LIGHTING & TEXTURE LINES */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#D8C7AD] to-transparent opacity-60 z-20" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#D8C7AD] to-transparent opacity-60 z-20" />
        </motion.div>

      </div>
    </section>
  );
}
