"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden selection:bg-[#0E2E1E] selection:text-white">
      <Header />

      <main className="flex-grow pt-32 sm:pt-40 md:pt-48 pb-32">
        <section className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 space-y-10">
          
          <motion.div {...fadeIn} className="space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
              LEGAL
            </span>
            <h1 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E] tracking-tight">
              Refund Policy
            </h1>
            <p className="text-xs text-[#1C2826]/70 uppercase tracking-wider font-semibold">
              Last Updated: June 15, 2026
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="space-y-8 text-base text-[#1C2826] font-normal leading-relaxed border-t border-mist-grey/60 pt-8"
          >
            <p>
              <strong className="font-bold lowercase">mani</strong>&trade; is owned and operated by Moose Ventures LLC.
            </p>
            <p>
              At <strong className="font-bold lowercase">mani</strong>&trade;, we strive to provide high-quality products and resources designed to support personal growth, emotional well-being, and learning.
            </p>
            <p>
              Because we offer a combination of physical products, digital products, and future subscription-based services, our refund policies vary by product type.
            </p>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Physical Products
              </h2>
              <p>
                If you are not satisfied with a physical product purchased through <strong className="font-bold lowercase">mani</strong>&trade;, you may request a return within 30 days of delivery.
              </p>
              <p className="font-medium text-[#0E2E1E]">To be eligible for a refund:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The item must be unused and in resalable condition.</li>
                <li>The item must be returned in its original packaging.</li>
                <li>Proof of purchase may be required.</li>
              </ul>
              <p className="text-sm text-[#1C2826]/80 italic">
                Customers are responsible for return shipping costs unless the product arrives damaged or incorrect.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Damaged or Incorrect Orders
              </h2>
              <p>
                If your order arrives damaged or you receive the wrong item, please contact us within 7 days of delivery.
              </p>
              <p>We may offer at our discretion:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Replacement product</li>
                <li>Store credit</li>
                <li>Full refund</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Digital Products
              </h2>
              <p>
                Due to the immediate nature of digital access, all sales of digital products are final unless otherwise required by law.
              </p>
              <p>This includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Digital books</li>
                <li>Digital workbooks</li>
                <li>Downloadable resources</li>
                <li>Digital collections</li>
                <li>Digital audio content</li>
                <li>Digital video content</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                App Subscriptions
              </h2>
              <p>
                When available, subscription purchases will be governed by the billing and cancellation policies provided at the time of purchase.
              </p>
              <p>
                Users may cancel future renewals at any time.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Contact
              </h2>
              <p>
                For refund requests, contact:{" "}
                <a href="mailto:contact@mymani.ai" className="font-semibold text-[#0E2E1E] underline">
                  contact@mymani.ai
                </a>
              </p>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
