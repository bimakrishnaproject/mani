"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ChallengePauseSection() {
  return (
    <section
      className="py-20 sm:py-28 md:py-36 bg-editorial-white w-full relative overflow-hidden"
      id="why-mani"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1240px] mx-auto px-6 sm:px-12 md:px-16 bg-[#0E2E1E] text-editorial-white rounded-3xl py-16 sm:py-24 shadow-xl relative overflow-hidden"
      >
        <div className="text-center max-w-4xl mx-auto relative z-10 space-y-6 sm:space-y-8">
          <h2 className="font-serif-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-cream-logo leading-[1.15] tracking-tight">
            People Are Not Problems To Be Fixed
          </h2>

          <p className="text-base sm:text-xl text-[#E8F0EC] max-w-2xl mx-auto leading-relaxed font-normal">
            Understanding comes before change. Support comes before solutions.
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
