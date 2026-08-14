"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";
import { useCart } from "@/context/CartContext";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const posterImages = Array.from(
  { length: 10 },
  (_, i) =>
    `/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/${i + 1} Framed.png`
);

const products = [
  {
    id: "book",
    num: "01",
    badge: "FOUNDATION",
    title: "The Bye Bye Narcissist Book",
    description: "Understand manipulation, gaslighting, and unhealthy patterns.",
    price: "$24.99",
    numericPrice: 24.99,
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
  },
  {
    id: "workbook",
    num: "02",
    badge: "ACTION",
    title: "The Bye Bye Narcissist Workbook",
    description: "Turn insight into practical change.",
    price: "$29.99",
    numericPrice: 29.99,
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Workbook.png",
  },
  {
    id: "coloring-book",
    num: "03",
    badge: "CALM",
    title: "The Bye Bye Narcissist Coloring Book & Journal",
    description: "Slow down, process emotions, and reconnect with yourself.",
    price: "$14.99",
    numericPrice: 14.99,
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Coloring Book.png",
  },
  {
    id: "posters",
    num: "04",
    badge: "REINFORCEMENT",
    title: "Bye Bye Narcissist Poster Collection",
    description: "Daily reminders that strengthen boundaries and self-worth.",
    price: "$29.99",
    numericPrice: 29.99,
    posterGrid: true,
  },
  {
    id: "cards",
    num: "05",
    badge: "DAILY PRACTICE",
    title: "Bye Bye Narcissist Card Deck",
    description: "Build confidence and trust in yourself one day at a time.",
    price: "$19.99",
    numericPrice: 19.99,
    image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Affirmation Cards/Box Display.png",
  },
];

export default function ByeByeNarcissistCollectionPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Bye Bye Narcissist Collection"
        description="This page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  const { addToCart } = useCart();
  const [cartAdded, setCartAdded] = useState<boolean>(false);
  const [singleAddedId, setSingleAddedId] = useState<string | null>(null);

  const handleAddBundleToCart = () => {
    addToCart({
      id: "bye-bye-narcissist-bundle",
      title: "Bye Bye Narcissist (Complete Collection)",
      price: 119.99,
      subtitle: "Includes Book, Workbook, Coloring Book & Journal, Posters, Card Deck",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png",
    });
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2500);
  };

  const handleAddSingleToCart = (prod: any) => {
    addToCart({
      id: prod.id,
      title: prod.title,
      price: prod.numericPrice,
      subtitle: prod.badge,
      image: prod.posterGrid ? posterImages[0] : prod.image,
    });
    setSingleAddedId(prod.id);
    setTimeout(() => setSingleAddedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">
        {/* 1. HERO SECTION */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
              COLLECTIONS &bull; START HERE
            </span>
            <h1 className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#0E2E1E] leading-[0.96] tracking-tight">
              Bye Bye Narcissist
            </h1>
            <p className="text-xl sm:text-2xl text-[#1C2826] font-normal leading-relaxed">
              If you are questioning a relationship, thinking about leaving, or trying to move forward after you have left, start here.
            </p>
            <p className="text-base sm:text-lg text-[#1C2826] font-normal leading-relaxed">
              When something feels wrong, it is easy to question yourself. You wonder if you&apos;re overreacting, explain away behavior that hurts, and slowly lose trust in your own instincts.
            </p>
            <p className="text-base sm:text-lg text-[#1C2826] font-normal leading-relaxed">
              The Bye Bye Narcissist Collection was created to help you understand what is happening, recognize unhealthy patterns, and find the confidence to move forward.
            </p>
          </motion.div>

          {/* Complete Collection Hero Banner */}
          <motion.div
            {...fadeIn}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-gradient-to-b from-[#F7F5F0] via-[#EFEBE4] to-[#E3DDD4] border border-[#D5CEC2] rounded-3xl p-8 sm:p-12 shadow-[inset_0_1px_3px_rgba(255,255,255,0.9),0_15px_30px_-10px_rgba(14,46,30,0.14)]"
          >
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="relative z-10 flex flex-col items-center justify-center w-full">
                <Image
                  src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
                  alt="Complete Bye Bye Narcissist Collection"
                  width={680}
                  height={520}
                  quality={100}
                  priority
                  className="w-auto max-h-[300px] sm:max-h-[380px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-500"
                />
                <div className="w-[85%] h-4 bg-black/25 blur-md rounded-[100%] -mt-3 pointer-events-none" />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold tracking-widest uppercase bg-[#0E2E1E] text-cream-logo px-3.5 py-1 rounded-full inline-block">
                COMPLETE PHYSICAL SET
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-[#0E2E1E] leading-tight">
                All 5 Tools in One System
              </h2>
              <p className="text-base text-[#1C2826] leading-relaxed font-normal">
                Includes the Foundation Book, Action Workbook, Coloring Book &amp; Journal, complete 10-Poster Set, and 30-day Card Deck.
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#0E2E1E]">
                <span className="bg-editorial-white px-3 py-1 rounded-full border border-mist-grey">✓ Free Shipping</span>
                <span className="bg-editorial-white px-3 py-1 rounded-full border border-mist-grey">✓ 30-Day Guarantee</span>
                <span className="bg-editorial-white px-3 py-1 rounded-full border border-mist-grey">✓ 5 Physical Resources</span>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <span className="text-4xl font-serif-heading text-[#0E2E1E]">
                  $119.99
                </span>
                <button
                  onClick={handleAddBundleToCart}
                  className="px-8 sm:px-10 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-md text-sm cursor-pointer"
                >
                  {cartAdded ? "✓ Added to Cart!" : "Add Complete Collection ($119.99) →"}
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. THE 5 PHYSICAL PRODUCTS BREAKDOWN (VERTICAL EDITORIAL FLOW) */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-28">
          <motion.div {...fadeIn} className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
              INDIVIDUAL RESOURCES
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl text-[#0E2E1E]">
              Five Connected Tools
            </h2>
            <p className="text-base sm:text-lg text-[#1C2826] font-normal leading-relaxed">
              Each resource serves a distinct role in your recovery and personal growth journey.
            </p>
          </motion.div>

          <div className="space-y-10">
            {products.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-soft-white border border-mist-grey rounded-3xl p-6 sm:p-10 shadow-sm hover:border-[#0E2E1E] transition-all"
              >
                {/* Product Image Stage with Grounded Depth */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  {prod.posterGrid ? (
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
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/15 blur-md rounded-full pointer-events-none" />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#F7F5F0] via-[#EFEBE4] to-[#E3DDD4] rounded-2xl p-6 flex items-center justify-center border border-[#D5CEC2] shadow-[inset_0_1px_3px_rgba(255,255,255,0.9),0_10px_25px_-8px_rgba(14,46,30,0.12)] overflow-hidden group">
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/[0.04] to-transparent pointer-events-none" />
                      <div className="relative z-10 flex flex-col items-center justify-center max-h-full">
                        <img
                          src={encodeURI(prod.image!)}
                          alt={prod.title}
                          className="relative z-10 max-h-[220px] sm:max-h-[250px] w-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.18)] group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="w-[85%] h-3.5 bg-black/30 blur-md rounded-[100%] -mt-2 pointer-events-none" />
                        <div className="w-[55%] h-2 bg-black/40 blur-xs rounded-[100%] -mt-2 pointer-events-none" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-[#0E2E1E] text-cream-logo px-3 py-1 rounded-full inline-block">
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-2xl sm:text-4xl text-[#0E2E1E] leading-snug">
                    {prod.title}
                  </h3>

                  <p className="text-base text-[#1C2826] font-normal leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <span className="text-2xl font-serif-heading text-[#0E2E1E]">
                      {prod.price}
                    </span>
                    <button
                      onClick={() => handleAddSingleToCart(prod)}
                      className="px-6 py-3 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-xs shadow-md cursor-pointer"
                    >
                      {singleAddedId === prod.id ? "✓ Added to Cart!" : `Add to Cart (${prod.price}) →`}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. 30-DAY GUARANTEE & BUNDLE CALL TO ACTION */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-24">
          <motion.div
            {...fadeIn}
            className="bg-[#081F14] text-editorial-white rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full inline-block">
              30-DAY RETURN POLICY
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
              Try the complete system with confidence.
            </h2>
            <p className="text-base sm:text-lg text-[#E8F0EC] font-normal leading-relaxed max-w-2xl mx-auto">
              If this collection doesn&apos;t provide value, return it within 30 days for a full refund. No questions asked.
            </p>
            <div className="pt-2">
              <button
                onClick={handleAddBundleToCart}
                className="px-10 py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all shadow-xl text-base cursor-pointer"
              >
                {cartAdded ? "✓ Added to Cart!" : "Get Started Today ($119.99) →"}
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
