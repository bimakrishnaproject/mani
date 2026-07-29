"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ChallengePauseSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 3D Unfolding rotation: Starts folded (-60deg), unfolds flat (0deg) at center, folds closed (+60deg) at end
  const rotateX = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [-60, 0, 0, 60]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0.82, 1, 1, 0.82]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);

  return (
    <section
      ref={containerRef}
      className="py-36 md:py-52 bg-editorial-white w-full relative overflow-hidden [perspective:1400px]"
      id="why-mani"
    >
      {/* 3D Unfolding/Folding Editorial Sanctuary Canvas */}
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          transformOrigin: "center center",
        }}
        className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 bg-deep-green text-editorial-white rounded-3xl py-24 sm:py-32 shadow-[0_50px_100px_rgba(14,46,30,0.3)] relative overflow-hidden [transform-style:preserve-3d]"
      >
        {/* Subtle Ambient Radial Lighting Sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-cream-logo/15 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

        <div className="text-center max-w-5xl mx-auto relative z-10 space-y-8">
          <div className="text-xs font-bold tracking-widest uppercase text-sage-grey bg-editorial-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-md">
            A MOMENT OF CALM • 3D UNFOLDING SANCTUARY
          </div>

          <h2 className="font-serif-heading text-5xl sm:text-7xl md:text-8xl text-cream-logo leading-[0.95] tracking-tight">
            "Understanding comes before change.<br />
            <span className="font-serif-italic">Support comes before solutions."</span>
          </h2>

          <p className="text-xl sm:text-2xl text-[#C3CDC6] max-w-3xl mx-auto leading-relaxed font-light">
            You do not need to fix everything today. Emotional growth happens in quiet, consistent moments of self-reflection.
          </p>

          <div className="pt-4">
            <Link
              href="/why-mani"
              className="inline-flex px-10 py-5 bg-cream-logo text-deep-green font-semibold rounded-md hover:bg-[#f2e1bd] transition-all transform hover:scale-105 shadow-2xl text-base"
            >
              Read Our Full Philosophy &rarr;
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
