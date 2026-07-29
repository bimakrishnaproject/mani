"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface PageCurlEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageCurlEffect({
  children,
  className = "",
}: PageCurlEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 3D Corner Page Curl Roll effect (rotate3d + scale + fold shadow):
  // - Starts curled open at corner (rotate3d: 45deg, shadow wide)
  // - Smoothly uncurls flat as user scrolls to center of section
  // - Curls back up at the bottom corner as user scrolls away
  const curlAngle = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [-55, 0, 0, 55]);
  const curlScale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.85, 1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <div
      ref={containerRef}
      className={`relative [perspective:1600px] overflow-hidden ${className}`}
    >
      <motion.div
        style={{
          rotateX: curlAngle,
          scale: curlScale,
          opacity,
          transformOrigin: "bottom right",
        }}
        className="w-full h-full relative [transform-style:preserve-3d]"
      >
        {/* 3D Page Curl Folded Corner Overlay (Sudut Kertas Terkelupas Emas/Krem) */}
        <motion.div
          style={{
            rotateZ: curlAngle,
          }}
          className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-[#D8C7AD] via-[#FAF6EF] to-[#BFA989] rounded-bl-full shadow-[0_20px_35px_rgba(0,0,0,0.3)] z-30 pointer-events-none border-b-2 border-l-2 border-[#BFA989]/50 [transform-style:preserve-3d]"
        >
          {/* Underside Golden Curl Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cream-logo/80 to-transparent rounded-bl-full blur-xs" />
        </motion.div>

        {/* Main Content Layer */}
        {children}
      </motion.div>
    </div>
  );
}
