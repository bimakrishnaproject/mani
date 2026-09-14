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

export default function ShippingPolicyPage() {
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
              Shipping Policy
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
              mani™ is owned and operated by Moose Ventures LLC.
            </p>
            <p>
              mani™ currently ships physical products within the United States and select international locations.
            </p>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Processing Times
              </h2>
              <p>
                Orders are generally processed within 3-5 business days. Processing times may vary during:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Product launches</li>
                <li>Holidays</li>
                <li>Promotional periods</li>
                <li>High-volume sales periods</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Shipping Times
              </h2>
              <p>
                Delivery times vary based on location and carrier. Estimated shipping times are provided at checkout and are not guaranteed.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Tracking Information
              </h2>
              <p>
                When available, tracking information will be provided once your order has shipped.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Lost or Delayed Packages
              </h2>
              <p>mani™ is not responsible for shipping delays caused by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Weather</li>
                <li>Carrier disruptions</li>
                <li>Customs delays</li>
                <li>Incorrect addresses provided by customers</li>
              </ul>
              <p>
                If your package appears lost, please contact us at{" "}
                <a href="mailto:contact@mymani.ai" className="font-semibold text-[#0E2E1E] underline">
                  contact@mymani.ai
                </a>{" "}
                and we will work with the carrier to investigate.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                International Orders
              </h2>
              <p>
                Customers are responsible for any duties, taxes, customs fees, or import charges imposed by their local jurisdiction.
              </p>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
