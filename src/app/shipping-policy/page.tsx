"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";

export default function ShippingPolicyPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Shipping & Fulfillment Policy"
        description="This page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 max-w-4xl mx-auto space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-4 py-2 rounded-full">
              ORDER FULFILMENT & DELIVERY
            </div>
            <h1 className="font-serif-heading text-5xl sm:text-7xl text-[#0E2E1E]">
              Shipping Policy
            </h1>
            <p className="text-sm text-sage-grey uppercase tracking-wider font-semibold">
              PHYSICAL FULFILMENT & DIGITAL ACCESS SPECIFICATIONS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8 text-base text-[#4A524D] font-light leading-relaxed border-t border-mist-grey pt-8"
          >
            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">1. Free Worldwide Shipping on Bundles</h3>
              <p>
                All complete MANI 5-Part Collection Bundles (such as the Bye Bye Narcissist $119.99 system) qualify for **Free Worldwide Express Shipping**. Individual items are shipped using standard domestic and international postal rates calculated at checkout.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">2. Order Processing Times</h3>
              <p>
                Orders are processed and dispatched within 1-2 business days from our fulfillment centers. You will receive a tracking confirmation email with real-time delivery updates as soon as your package leaves the warehouse.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">3. Instant Digital Product Access</h3>
              <p>
                Digital editions and PDF companions included in your purchase are accessible immediately upon order completion. You will receive an instant download link via email and on your checkout confirmation page.
              </p>
            </div>

            {/* Client Action Note if specific carrier details are needed */}
            <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl space-y-2">
              <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block">
                NOTE FOR MANI TEAM / CLIENT COPY UPDATE
              </span>
              <p className="text-xs text-[#626A64] italic">
                This shipping policy includes the free worldwide shipping terms specified in the docs. If you have specific shipping carrier names (e.g. DHL, FedEx, USPS) or regional delivery timeframes (e.g., 3-5 days US, 7-10 days Europe), please provide them to be updated here.
              </p>
            </div>

            <div className="pt-8 border-t border-mist-grey flex justify-between items-center text-xs font-bold text-[#0E2E1E]">
              <Link href="/refund-policy" className="underline hover:text-emerald-700">
                &larr; View Refund Policy
              </Link>
              <Link href="/faq" className="underline hover:text-emerald-700">
                Return to FAQ &rarr;
              </Link>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
