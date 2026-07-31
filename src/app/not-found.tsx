"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">
        <section className="px-6 sm:px-12 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-4 py-2 rounded-full shadow-xs">
              PAGE NOT FOUND • 404 ERROR
            </span>

            <h1 className="font-serif-heading text-6xl sm:text-8xl text-[#0E2E1E] leading-none">
              404
            </h1>

            <p className="text-2xl font-serif-italic text-[#4A524D]">
              "This path doesn’t exist, but your journey continues."
            </p>

            <p className="text-sm text-[#626A64] font-light max-w-md mx-auto leading-relaxed">
              The page you are looking for may have been moved, renamed, or is currently under development in our sanctuary roadmap.
            </p>

            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="px-8 py-4 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-sm shadow-lg"
              >
                Return to Homepage &rarr;
              </Link>
              <Link
                href="/collections"
                className="px-8 py-4 bg-soft-white text-ink-black border border-mist-grey font-semibold rounded-xl hover:border-[#0E2E1E] transition-all text-sm"
              >
                Explore Collections &rarr;
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
