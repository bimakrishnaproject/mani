"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";

export default function RefundPolicyPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="30-Day Guarantee Refund Policy"
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
              CUSTOMER COMMITMENT
            </div>
            <h1 className="font-serif-heading text-5xl sm:text-7xl text-[#0E2E1E]">
              Refund Policy
            </h1>
            <p className="text-sm text-sage-grey uppercase tracking-wider font-semibold">
              30-DAY RISK-FREE REFUND GUARANTEE
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-8 text-base text-[#4A524D] font-light leading-relaxed border-t border-mist-grey pt-8"
          >
            <div className="p-8 bg-soft-white border-2 border-mist-grey rounded-3xl space-y-4 shadow-md">
              <h2 className="font-serif-heading text-3xl text-[#0E2E1E]">
                The 30-Day Refund Guarantee
              </h2>
              <p className="text-sm text-[#626A64]">
                We stand fully behind the transformational quality of MANI Collections. If any collection or individual tool does not provide you with immediate emotional clarity and practical boundary tools, you may request a 100% refund within 30 days of purchase.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">1. Physical Products Return Process</h3>
              <p>
                To initiate a return for physical products (Books, Workbooks, Colouring Books, Poster Sets, or Card Decks), please contact our support team with your order number. Returned physical items must be sent back in reasonable condition. Return shipping costs are covered for damaged or defective shipments.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">2. Digital Products & Downloads</h3>
              <p>
                All digital PDFs and instant download products included in MANI bundles are covered under our 30-Day Refund Guarantee. If you are unsatisfied with your digital access, contact support within 30 days for a complete refund.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">3. Refund Processing Time</h3>
              <p>
                Once approved, refunds are processed immediately to your original payment method (Credit Card, Apple Pay, PayPal) within 3-5 business days depending on your financial institution.
              </p>
            </div>

            {/* Client Action Note if official legal text needs custom additions */}
            <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl space-y-2">
              <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block">
                NOTE FOR MANI TEAM / CLIENT COPY UPDATE
              </span>
              <p className="text-xs text-[#626A64] italic">
                This page reflects the 30-Day Refund Guarantee specified in the blueprint. If you would like to append specific legal return address details or custom region clauses from your legal advisor, please provide the text to be updated here.
              </p>
            </div>

            <div className="pt-8 border-t border-mist-grey flex justify-between items-center text-xs font-bold text-[#0E2E1E]">
              <Link href="/collections/bye-bye-narcissist" className="underline hover:text-emerald-700">
                &larr; Return to Bye Bye Narcissist Collection
              </Link>
              <Link href="/shipping-policy" className="underline hover:text-emerald-700">
                View Shipping Policy &rarr;
              </Link>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
