"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface UnderProgressPageProps {
  pageName: string;
  description?: string;
}

export default function UnderProgressPage({
  pageName,
  description = "This page is currently being crafted for the next client milestone update. Please explore the live flagship Homepage for today's presentation.",
}: UnderProgressPageProps) {
  return (
    <div className="min-h-screen bg-editorial-white flex flex-col justify-between">
      <Header />

      <main className="flex-grow pt-40 pb-28 flex items-center justify-center px-6 sm:px-12">
        <div className="max-w-2xl text-center space-y-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-4 py-2 rounded-full mb-6">
              🔒 MILESTONE UPDATE IN PROGRESS
            </span>
            <h1 className="font-serif-heading text-5xl sm:text-7xl text-deep-green leading-tight">
              {pageName}<br />Under Construction
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-[#4A524D] font-light leading-relaxed max-w-xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-soft-white border border-mist-grey rounded-2xl max-w-md mx-auto space-y-3 text-left text-sm"
          >
            <div className="flex items-center gap-2.5 text-deep-green font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              Today's Demo Status:
            </div>
            <p className="text-sage-grey text-xs leading-relaxed">
              • Homepage 3D Motion & Collections: <strong>100% Live & Ready</strong><br />
              • {pageName} Sub-Page Release: <strong>Scheduled Next Sprint</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/"
              className="inline-flex px-8 py-4 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-all transform hover:scale-105 shadow-xl text-sm"
            >
              Return to Homepage Presentation &rarr;
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
