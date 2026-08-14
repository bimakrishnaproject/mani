"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const items = [
  {
    num: "01",
    badge: "FOUNDATION",
    title: "The Bye Bye Narcissist Book",
    description: "Understand manipulation, gaslighting, and unhealthy patterns.",
    price: "$24.99",
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
  },
  {
    num: "02",
    badge: "ACTION",
    title: "The Bye Bye Narcissist Workbook",
    description: "Turn insight into practical change.",
    price: "$29.99",
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Workbook.png",
  },
  {
    num: "03",
    badge: "CALM",
    title: "The Bye Bye Narcissist Coloring Book & Journal",
    description: "Slow down, process emotions, and reconnect with yourself.",
    price: "$14.99",
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Coloring Book.png",
  },
  {
    num: "04",
    badge: "REINFORCEMENT",
    title: "Bye Bye Narcissist Poster Collection",
    description: "Daily reminders that strengthen boundaries and self-worth.",
    price: "$29.99",
    posterGrid: true,
  },
  {
    num: "05",
    badge: "DAILY PRACTICE",
    title: "Bye Bye Narcissist Card Deck",
    description: "Build confidence and trust in yourself one day at a time.",
    price: "$19.99",
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Affirmation Cards/Box Display.png",
  },
];

const posterImages = Array.from({ length: 10 }, (_, i) => `/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/${i + 1} Framed.png`);

export default function FeaturedCollectionSection() {
  return (
    <section className="py-20 sm:py-28 bg-editorial-white w-full" id="collections">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <motion.div {...fadeIn} className="max-w-3xl mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-deep-green block mb-3">
            FEATURED COLLECTION
          </span>
          <h2 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-deep-green leading-[1.05] tracking-tight mb-6">
            Start Here
          </h2>
        </motion.div>

        {/* Introduction Copy */}
        <motion.div {...fadeIn} className="max-w-3xl mb-12 space-y-4">
          <p className="text-lg sm:text-xl text-[#1C2826] font-normal leading-relaxed">
            If you are questioning a relationship, thinking about leaving, or trying to move forward after you have left, start here.
          </p>
          <h3 className="font-serif-heading text-3xl sm:text-4xl text-deep-green">
            Bye Bye Narcissist
          </h3>
          <p className="text-base text-[#1C2826] font-normal leading-relaxed">
            When something feels wrong, it is easy to question yourself. You wonder if you&apos;re overreacting, explain away behavior that hurts, and slowly lose trust in your own instincts.
          </p>
          <p className="text-base text-[#1C2826] font-normal leading-relaxed">
            The Bye Bye Narcissist Collection was created to help you understand what is happening, recognize unhealthy patterns, and find the confidence to move forward.
          </p>
        </motion.div>

        {/* Complete Physical Collection Hero Showcase */}
        <motion.div
          {...fadeIn}
          className="mb-16 bg-gradient-to-b from-[#F7F5F0] via-[#EFEBE4] to-[#E3DDD4] border border-[#D5CEC2] rounded-3xl p-8 sm:p-12 shadow-[inset_0_1px_3px_rgba(255,255,255,0.9),0_10px_25px_-8px_rgba(14,46,30,0.12)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="relative z-10 flex flex-col items-center justify-center w-full">
              <img
                src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
                alt="Complete Bye Bye Narcissist Physical Collection"
                className="max-h-[280px] sm:max-h-[340px] w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-500"
              />
              <div className="w-[85%] h-4 bg-black/25 blur-md rounded-[100%] -mt-3 pointer-events-none" />
            </div>
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[11px] font-bold tracking-widest uppercase bg-[#0E2E1E] text-cream-logo px-3.5 py-1 rounded-full inline-block">
              COMPLETE PHYSICAL SET
            </span>
            <h3 className="font-serif-heading text-3xl sm:text-4xl text-[#0E2E1E] leading-tight">
              The Complete Collection
            </h3>
            <p className="text-base text-[#1C2826] leading-relaxed font-normal">
              All 5 physical resources designed to work together as a connected support system: Book, Action Workbook, Coloring Book &amp; Journal, complete 10-Poster Set, and Card Deck.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="text-3xl font-serif-heading text-[#0E2E1E]">
                $119.99
              </span>
              <Link
                href="/collections/bye-bye-narcissist"
                className="px-8 py-3.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-md text-sm"
              >
                Explore Full Collection &rarr;
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="space-y-12">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-soft-white border border-mist-grey rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              {/* Product Image Stage with Grounded Depth */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                {item.posterGrid ? (
                  <div className="relative w-full bg-gradient-to-b from-[#F5F2EC] to-[#E5E0D8] rounded-2xl p-4 sm:p-5 border border-[#D5CEC2] shadow-[inset_0_1px_3px_rgba(255,255,255,0.8),0_10px_25px_-8px_rgba(14,46,30,0.15)] overflow-hidden">
                    <div className="flex items-center justify-between mb-3 px-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E2E1E] bg-soft-signal-green px-2.5 py-0.5 rounded-full">
                        Complete 10-Poster Set (8&times;10)
                      </span>
                      <span className="text-[10px] text-[#0E2E1E] font-bold">10 Frameable Art Prints</span>
                    </div>
                    <div className="grid grid-cols-5 gap-2 relative z-10">
                      {posterImages.map((src, pIdx) => (
                        <div key={pIdx} className="group relative rounded-md overflow-hidden bg-white p-1 shadow-[0_4px_10px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all">
                          <img
                            src={encodeURI(src)}
                            alt={`Poster ${pIdx + 1} of 10`}
                            className="w-full h-auto object-contain rounded-xs"
                          />
                        </div>
                      ))}
                    </div>
                    {/* Ground shadow beneath gallery frame */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/15 blur-md rounded-full pointer-events-none" />
                  </div>
                ) : (
                  <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#F7F5F0] via-[#EFEBE4] to-[#E3DDD4] rounded-2xl p-6 flex items-center justify-center border border-[#D5CEC2] shadow-[inset_0_1px_3px_rgba(255,255,255,0.9),0_10px_25px_-8px_rgba(14,46,30,0.12)] overflow-hidden group">
                    {/* Ambient Ground Surface Plane */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/[0.04] to-transparent pointer-events-none" />

                    {/* Product & Direct Base Contact Shadow */}
                    <div className="relative z-10 flex flex-col items-center justify-center max-h-full">
                      <img
                        src={encodeURI(item.image!)}
                        alt={item.title}
                        className="relative z-10 max-h-[220px] sm:max-h-[240px] w-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.18)] group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="w-[85%] h-3.5 bg-black/30 blur-md rounded-[100%] -mt-2 pointer-events-none" />
                      <div className="w-[55%] h-2 bg-black/40 blur-xs rounded-[100%] -mt-2 pointer-events-none" />
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-[10px] font-bold tracking-widest uppercase bg-deep-green text-editorial-white px-3 py-1 rounded-full inline-block">
                  {item.badge}
                </span>
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-deep-green leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-[#1C2826] font-normal leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-xl font-serif-heading text-deep-green">
                    {item.price}
                  </span>
                  <Link
                    href="/collections/bye-bye-narcissist"
                    className="px-6 py-3 bg-deep-green text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-xs shadow-md"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bundle CTA */}
        <motion.div {...fadeIn} className="mt-16 p-8 sm:p-10 bg-[#0E2E1E] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-cream-logo block mb-1">
              COMPLETE COLLECTION
            </span>
            <h3 className="font-serif-heading text-3xl sm:text-4xl text-cream-logo">
              $119.99
            </h3>
            <p className="text-sm text-[#E8F0EC] font-normal mt-1">
              All five resources in one connected system.
            </p>
          </div>
          <Link
            href="/collections/bye-bye-narcissist"
            className="px-10 py-4 bg-cream-logo text-deep-green font-semibold rounded-xl hover:bg-white transition-all shadow-md text-sm whitespace-nowrap"
          >
            Explore the Collection &rarr;
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
