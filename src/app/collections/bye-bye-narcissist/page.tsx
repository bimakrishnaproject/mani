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
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mb-12 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
              COLLECTIONS &bull; START HERE
            </span>
            <h1 className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#0E2E1E] leading-[0.96] tracking-tight">
              Bye Bye Narcissist
            </h1>
            <p className="text-xl sm:text-2xl text-[#0B1710] font-medium leading-relaxed">
              If you are questioning a relationship, thinking about leaving, or trying to move forward after you have left, start here.
            </p>
            <p className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed">
              When something feels wrong, it is easy to question yourself. You wonder if you&apos;re overreacting, explain away behavior that hurts, and slowly lose trust in your own instincts.
            </p>
            <p className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed">
              The Bye Bye Narcissist Collection was created to help you understand what is happening, recognize unhealthy patterns, and find the confidence to move forward.
            </p>
          </motion.div>

          {/* Complete Collection Hero Banner (Clean directly on page, no background box) */}
          <motion.div
            {...fadeIn}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full py-6"
          >
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full bg-gradient-to-b from-[#FBFBFA] to-[#F1F3F5] border border-mist-grey/80 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-end relative shadow-xs overflow-hidden group">
                <div className="relative w-full flex items-end justify-center pt-4 pb-0">
                  <Image
                    src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
                    alt="Complete Bye Bye Narcissist Collection"
                    width={680}
                    height={520}
                    quality={100}
                    priority
                    className="w-auto max-h-[340px] sm:max-h-[420px] object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.16)] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                {/* Realistic Ground Contact Shadow under all 5 objects */}
                <div className="w-[88%] h-3.5 bg-gradient-to-r from-transparent via-black/35 to-transparent blur-[6px] rounded-full mx-auto -mt-1.5 pointer-events-none" />
                
                {/* Studio Tabletop Surface Plane */}
                <div className="w-full h-10 bg-gradient-to-b from-[#E6E8EC] to-[#DBDEE4] border-t border-[#CCD0D7] rounded-b-2xl mt-1.5 flex items-center justify-center shadow-inner">
                  <span className="text-[11px] font-bold text-[#0E2E1E]/80 uppercase tracking-widest">
                    The Complete 5-Piece Physical Experience
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-bold tracking-widest uppercase bg-[#0E2E1E] text-cream-logo px-3.5 py-1 rounded-full inline-block">
                COMPLETE PHYSICAL SET
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-[#0E2E1E] leading-tight">
                All 5 Tools in One System
              </h2>
              <p className="text-base text-[#0B1710] leading-relaxed font-medium">
                Includes the Foundation Book, Action Workbook, Coloring Book &amp; Journal, complete 10-Poster Set, and 30-day Card Deck.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#0E2E1E] uppercase tracking-wider pt-1">
                <span>Free Domestic Shipping</span>
                <span>&bull;</span>
                <span>30-Day Satisfaction Guarantee</span>
                <span>&bull;</span>
                <span>5 Physical Resources</span>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <span className="text-4xl font-serif-heading text-[#0E2E1E] font-bold">
                  $119.99
                </span>
                <button
                  onClick={handleAddBundleToCart}
                  className="px-8 sm:px-10 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-md text-sm cursor-pointer"
                >
                  {cartAdded ? "✓ Added to Bag!" : "Add Complete Collection ($119.99) →"}
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 2. THE 5 PHYSICAL PRODUCTS BREAKDOWN (VERTICAL EDITORIAL FLOW) */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-28">
          <motion.div {...fadeIn} className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
              INDIVIDUAL RESOURCES
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-5xl text-[#0E2E1E]">
              Five Connected Tools
            </h2>
            <p className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed">
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
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-mist-grey/80 rounded-3xl p-6 sm:p-10 shadow-xs hover:border-[#0E2E1E]/40 hover:shadow-md transition-all"
              >
                {/* Product Image Stage with Apple Studio Grounded Depth */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  {prod.posterGrid ? (
                    <div className="relative w-full bg-gradient-to-b from-[#FBFBFA] to-[#F1F3F5] rounded-2xl p-5 sm:p-6 border border-mist-grey/80 shadow-xs overflow-hidden">
                      <div className="flex items-center justify-between mb-4 px-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E2E1E] bg-[#0E2E1E]/10 px-2.5 py-0.5 rounded-full">
                          Complete 10-Poster Set (8&times;10)
                        </span>
                        <span className="text-xs text-[#0E2E1E]/70 font-semibold">10 Prints</span>
                      </div>
                      <div className="grid grid-cols-5 gap-2 relative z-10">
                        {posterImages.map((src, pIdx) => (
                          <div key={pIdx} className="group relative rounded-md overflow-hidden bg-white p-1 border border-mist-grey/60 shadow-2xs hover:scale-105 transition-transform">
                            <img
                              src={encodeURI(src)}
                              alt={`Poster ${pIdx + 1} of 10`}
                              className="w-full h-auto object-contain rounded-xs"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full bg-gradient-to-b from-[#FBFBFA] to-[#F1F3F5] rounded-2xl p-6 sm:p-8 flex flex-col justify-end items-center border border-mist-grey/80 shadow-xs overflow-hidden group">
                      <div className="relative z-10 flex flex-col items-center justify-end w-full flex-grow pt-4 pb-0">
                        <img
                          src={encodeURI(prod.image!)}
                          alt={prod.title}
                          className="relative z-10 max-h-[240px] sm:max-h-[270px] w-auto object-contain drop-shadow-[0_14px_20px_rgba(0,0,0,0.16)] group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                      {/* Realistic Ground Contact Shadow under object */}
                      <div className="w-[80%] h-2.5 bg-gradient-to-r from-transparent via-black/40 to-transparent blur-[4px] rounded-full mx-auto -mt-1 pointer-events-none" />
                      {/* Studio Tabletop Horizon Plinth */}
                      <div className="w-full h-7 bg-gradient-to-b from-[#E6E8EC] to-[#DBDEE4] border-t border-[#CCD0D7] rounded-b-xl mt-1 shadow-inner" />
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

                  <p className="text-base text-[#0B1710] font-medium leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <span className="text-2xl font-serif-heading text-[#0E2E1E] font-bold">
                      {prod.price}
                    </span>
                    <button
                      onClick={() => handleAddSingleToCart(prod)}
                      className="px-6 py-3 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all text-xs shadow-md cursor-pointer"
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
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24">
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
            <p className="text-base sm:text-lg text-[#FAF5EB] font-medium leading-relaxed max-w-2xl mx-auto">
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
