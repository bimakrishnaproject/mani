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
          <span className="text-xs font-bold tracking-widest uppercase text-[#8C7659] block mb-3">
            FEATURED COLLECTION
          </span>
          <h2 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-deep-green leading-[1.05] tracking-tight mb-6">
            Start Here
          </h2>
        </motion.div>

        {/* Introduction Copy */}
        <motion.div {...fadeIn} className="max-w-3xl mb-16 space-y-4">
          <p className="text-lg sm:text-xl text-[#4A524D] font-light leading-relaxed">
            If you are questioning a relationship, thinking about leaving, or trying to move forward after you have left, start here.
          </p>
          <h3 className="font-serif-heading text-3xl sm:text-4xl text-deep-green">
            Bye Bye Narcissist
          </h3>
          <p className="text-base text-[#4A524D] font-light leading-relaxed">
            When something feels wrong, it is easy to question yourself. You wonder if you&apos;re overreacting, explain away behavior that hurts, and slowly lose trust in your own instincts.
          </p>
          <p className="text-base text-[#4A524D] font-light leading-relaxed">
            The Bye Bye Narcissist Collection was created to help you understand what is happening, recognize unhealthy patterns, and find the confidence to move forward.
          </p>
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
              {/* Product Image */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                {item.posterGrid ? (
                  <div className="grid grid-cols-5 gap-2 p-4">
                    {posterImages.map((src, pIdx) => (
                      <img
                        key={pIdx}
                        src={encodeURI(src)}
                        alt={`Poster ${pIdx + 1}`}
                        className="w-full h-auto object-contain rounded-md shadow-md"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center p-2 sm:p-4">
                    <img
                      src={encodeURI(item.image!)}
                      alt={item.title}
                      className="max-h-[320px] w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
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
                <p className="text-base text-[#4A524D] font-light leading-relaxed">
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
            <span className="text-xs font-bold tracking-widest uppercase text-cream-logo/70 block mb-1">
              COMPLETE COLLECTION
            </span>
            <h3 className="font-serif-heading text-3xl sm:text-4xl text-cream-logo">
              $119.99
            </h3>
            <p className="text-sm text-editorial-white/70 font-light mt-1">
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
