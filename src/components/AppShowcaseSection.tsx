"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import UnderProgressModal from "./UnderProgressModal";
import { trackBetaSignup } from "@/lib/analytics";

export default function AppShowcaseSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      trackBetaSignup(email);
      try {
        await fetch("/api/klaviyo/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, type: "beta" }),
        });
      } catch (err) {
        console.error("Klaviyo CRM sync error:", err);
      }
      setEmail("");
    }
  };

  return (
    <section
      className="py-24 sm:py-32 bg-editorial-white text-ink-black overflow-hidden w-full"
      id="app"
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-mist-grey">

          {/* Left Column: Deep Green side with copy & form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#0E2E1E] text-editorial-white p-8 sm:p-14 lg:p-20 space-y-6 flex flex-col justify-center"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-cream-logo">
              THE MANI APP
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-cream-logo leading-[1.05] tracking-tight">
              Support Wherever You Are
            </h2>
            <p className="text-lg sm:text-xl text-[#E8F0EC] font-normal leading-relaxed max-w-2xl">
              Guided conversations, breathwork, meditations, visualizations, stories, and practical tools designed to support you wherever you are.
            </p>
            <p className="text-base text-[#D8E6DE] font-normal leading-relaxed max-w-2xl">
              We&apos;re currently inviting beta testers to experience the app before launch and help shape future features.
            </p>

            <div className="pt-2">
              <Link
                href="/join-beta"
                className="inline-flex items-center gap-2 px-9 py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all shadow-md text-base tracking-wide text-center"
              >
                <span>Join Beta</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Editorial White side with floating phone showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-editorial-white p-8 sm:p-14 flex justify-center items-center border-t lg:border-t-0 lg:border-l border-mist-grey"
          >
            <div className="relative max-w-[340px] w-full flex justify-center items-center py-4">
              <img
                src="/assets/Chat Conversation.png"
                alt="MANI App Guided Chat Experience"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>

      <UnderProgressModal
        isOpen={showProgressModal}
        onClose={() => setShowProgressModal(false)}
        title="Early Access Under Progress"
        description="App Early Access registration is currently under progress for today's milestone update. Please explore the live homepage presentation."
      />
    </section>
  );
}
