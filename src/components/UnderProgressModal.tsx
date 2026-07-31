"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface UnderProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export default function UnderProgressModal({
  isOpen,
  onClose,
  title = "🔒 Action Under Progress",
  description = "This feature or registration action is currently locked for today's milestone update. Please explore the live flagship presentation.",
}: UnderProgressModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-[#081F14] text-editorial-white rounded-3xl border-2 border-emerald-500/30 p-8 shadow-2xl z-10 space-y-6 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-soft-signal-green/10 text-cream-logo border border-emerald-500/30 flex items-center justify-center mx-auto text-2xl">
              🔒
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-3.5 py-1 rounded-full border border-editorial-white/15">
                MILESTONE UPDATE IN PROGRESS
              </span>
              <h3 className="font-serif-heading text-3xl text-cream-logo pt-2">
                {title}
              </h3>
            </div>

            <p className="text-sm text-[#C3CDC6] font-light leading-relaxed">
              {description}
            </p>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all text-sm shadow-xl"
              >
                Got It &rarr; Continue Exploring
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
