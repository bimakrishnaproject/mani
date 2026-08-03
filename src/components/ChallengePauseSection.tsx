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

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 md:py-44 bg-editorial-white w-full relative overflow-hidden"
      id="why-mani"
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 bg-[#0E2E1E] text-editorial-white rounded-3xl py-20 sm:py-28 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-cream-logo/10 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

        <div className="text-center max-w-4xl mx-auto relative z-10 space-y-6 sm:space-y-8">
          <span className="text-xs font-bold tracking-widest uppercase text-cream-logo/60 block">
            BRAND PHILOSOPHY
          </span>

          <h2 className="font-serif-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-cream-logo leading-[1.15] tracking-tight">
            &ldquo;Understanding comes before change.<br />
            <span className="font-serif-italic">Support comes before solutions.&rdquo;</span>
          </h2>

          <p className="text-base sm:text-xl text-editorial-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            You do not need to fix everything today. Emotional growth happens in quiet, consistent moments of self-reflection.
          </p>

          <div className="pt-2">
            <Link
              href="/why-mani"
              className="inline-flex px-8 py-3.5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all text-sm shadow-md"
            >
              Read Our Full Philosophy &rarr;
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
