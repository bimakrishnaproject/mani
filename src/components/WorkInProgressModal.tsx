"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface WorkInProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageTitle?: string;
}

export default function WorkInProgressModal({
  isOpen,
  onClose,
  pageTitle = "This Section",
}: WorkInProgressModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 [perspective:1200px]">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#05150D]/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 15, y: 30 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateX: -15, y: 30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#081F14] text-editorial-white border-2 border-emerald-500/40 rounded-3xl p-8 sm:p-10 shadow-[0_35px_80px_rgba(0,0,0,0.6)] space-y-6 text-center z-10 overflow-hidden"
          >
            {/* Ambient Lighting Orb */}
            <div className="absolute -top-20 -right-20 w-52 h-52 bg-radial from-cream-logo/25 via-soft-signal-green/10 to-transparent pointer-events-none rounded-full blur-2xl" />

            {/* Lock Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              🔒 DEMO MODE • UNDER DEVELOPMENT
            </div>

            <div className="space-y-3">
              <h3 className="font-serif-heading text-4xl sm:text-5xl text-cream-logo leading-tight">
                {pageTitle} Page<br />Is Under Construction
              </h3>
              <p className="text-sm sm:text-base text-[#C3CDC6] font-light leading-relaxed">
                This dedicated sub-page is currently being polished for the next release. Today’s client update presentation focuses 100% on the live flagship Homepage experience.
              </p>
            </div>

            {/* Feature Status Chips */}
            <div className="p-4 bg-editorial-white/10 rounded-2xl border border-editorial-white/15 text-xs text-cream-logo space-y-2 text-left">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Homepage 3D Presentation & Collections Showcase: <strong>100% Live</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">⚙️</span>
                <span>Sub-page Deep Content: <strong>In Development (Next Update)</strong></span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="w-full py-4 bg-cream-logo text-deep-green font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all text-sm shadow-lg"
              >
                Back to Homepage Presentation &rarr;
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
