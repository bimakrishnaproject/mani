"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">
        <section className="px-6 sm:px-12 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-[#081F14] text-editorial-white rounded-3xl p-10 sm:p-16 text-center space-y-8 shadow-2xl border border-emerald-500/30"
          >
            <div className="w-20 h-20 bg-cream-logo/20 rounded-full flex items-center justify-center mx-auto text-cream-logo text-4xl">
              ✓
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full inline-block">
                ORDER CONFIRMED & DISPATCHING
              </span>
              <h1 className="font-serif-heading text-4xl sm:text-6xl text-cream-logo">
                Welcome to Your Sanctuary
              </h1>
              <p className="text-sm text-[#C3CDC6] font-light max-w-xl mx-auto">
                Thank you for your order. A confirmation email with order tracking and your instant digital collection downloads has been sent to your email.
              </p>
            </div>

            <div className="p-6 bg-[#05150D] rounded-2xl border border-editorial-white/10 text-left space-y-3 text-xs text-[#C3CDC6]">
              <div className="flex justify-between border-b border-editorial-white/10 pb-2">
                <span className="font-semibold text-cream-logo">Guarantee:</span>
                <span>30-Day Sanctuary Guarantee Active</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-cream-logo">Digital Downloads:</span>
                <span className="text-cream-logo underline">Access Links Sent to Email</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/watch-learn"
                className="px-8 py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all transform hover:scale-105 text-sm"
              >
                Explore Watch & Learn Videos &rarr;
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-editorial-white/10 text-cream-logo border border-editorial-white/20 font-semibold rounded-xl hover:bg-editorial-white/20 transition-all text-sm"
              >
                Return Home &rarr;
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
