"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function AppPage() {
  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">

        {/* SECTION 1: Opening */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div {...fadeIn} className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]/60 block">
                THE MANI APP
              </span>
              <h1 className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#0E2E1E] leading-[0.96] tracking-tight">
                Not Just Someone To Talk To
              </h1>
              <p className="text-lg sm:text-xl text-[#4A524D] font-light leading-relaxed">
                Most support stops at listening.
              </p>
              <p className="text-lg sm:text-xl text-[#4A524D] font-light leading-relaxed">
                The Mani App goes further.
              </p>
              <p className="text-base text-[#4A524D] font-light leading-relaxed">
                Guided conversations help you understand what you are facing. Breathwork, meditations, visualizations, and stories help you move through it.
              </p>
              <p className="text-base text-[#626A64] font-light leading-relaxed">
                Because feeling heard is only the beginning.
              </p>
              <Link
                href="/join-beta"
                className="inline-flex px-8 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all text-sm shadow-md"
              >
                Join Beta &rarr;
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative max-w-[340px] flex justify-center items-center">
                <img
                  src="/assets/Chat Conversation.png"
                  alt="MANI App Guided Chat Experience"
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: For The Moments You Need It Most */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto bg-[#0E2E1E] rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-xl">
            <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
              For The Moments You Need It Most
            </h2>
            <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Most people do not fall apart on a schedule. Hard moments happen at midnight, on a lunch break, in the middle of a conversation you were not ready for.
            </p>
            <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              The Mani App exists for those moments.
            </p>
          </motion.div>
        </section>

        {/* SECTION 3: Why It's Different */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]/60 block mb-3">
              WHY IT&apos;S DIFFERENT
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              Why It&apos;s Different
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                title: "More Than A Chat",
                body: "Most apps listen. Mani helps you understand what you are feeling and guides you toward what comes next.",
              },
              {
                title: "Support In Different Ways",
                body: "Conversations, breathwork, meditations, visualizations, and stories because different moments call for different kinds of support.",
              },
              {
                title: "Built For Where You Actually Are",
                body: "Not where you should be. Not where you were. Where you are right now.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 bg-soft-white border border-mist-grey rounded-2xl space-y-3"
              >
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                  {item.title}
                </h3>
                <p className="text-base text-[#4A524D] font-light leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 4: What It Will Do */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]/60 block mb-3">
              WHAT IT WILL DO
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              What It Will Do
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Guided Support",
                body: "Guidance that helps bring clarity when things feel uncertain.",
              },
              {
                title: "Practical Tools",
                body: "Practical experiences designed to calm, reflect, and refocus.",
              },
              {
                title: "Meaningful Progress",
                body: "Small steps that build confidence, resilience, and momentum.",
              },
              {
                title: "Always Accessible",
                body: "Available whenever you need it. No appointment. No waitlist. No judgment.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 bg-[#0E2E1E] text-editorial-white rounded-2xl space-y-3 shadow-lg"
              >
                <span className="text-xs font-bold tracking-widest uppercase text-cream-logo/70">
                  0{idx + 1}
                </span>
                <h3 className="font-serif-heading text-2xl text-cream-logo">
                  {item.title}
                </h3>
                <p className="text-sm text-editorial-white/80 font-light leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Beta CTA */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto bg-[#081F14] text-editorial-white rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-cream-logo/70 block">
              BETA PROGRAM
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
              Help Shape What&apos;s Next
            </h2>
            <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              We are inviting a small group of people to experience the Mani App before public launch.
            </p>
            <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Get early access, explore new features, and help shape the future of the app.
            </p>
            <div className="pt-4">
              <Link
                href="/join-beta"
                className="inline-flex px-10 py-5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all shadow-xl text-base"
              >
                Join Beta &rarr;
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
