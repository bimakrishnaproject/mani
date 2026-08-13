"use client";

import React, { useState } from "react";
import Link from "next/link";
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

const posterImages = Array.from({ length: 10 }, (_, i) => `/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/${i + 1} Framed.png`);

export default function CollectionsDirectoryPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Collections Directory"
        description="This page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  const { addToCart } = useCart();
  const [cartAdded, setCartAdded] = useState<boolean>(false);

  const systemParts = [
    {
      id: "book",
      badge: "FOUNDATION",
      title: "The Bye Bye Narcissist Book",
      description: "Understand manipulation, gaslighting, and unhealthy patterns.",
      price: "$24.99",
      numericPrice: 24.99,
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
    },
    {
      id: "workbook",
      badge: "ACTION",
      title: "The Bye Bye Narcissist Workbook",
      description: "Turn insight into practical change.",
      price: "$29.99",
      numericPrice: 29.99,
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Workbook.png",
    },
    {
      id: "coloring-book",
      badge: "CALM",
      title: "The Bye Bye Narcissist Coloring Book & Journal",
      description: "Slow down, process emotions, and reconnect with yourself.",
      price: "$14.99",
      numericPrice: 14.99,
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Coloring Book.png",
    },
    {
      id: "posters",
      badge: "REINFORCEMENT",
      title: "Bye Bye Narcissist Poster Collection",
      description: "Daily reminders that strengthen boundaries and self-worth.",
      price: "$29.99",
      numericPrice: 29.99,
      posterGrid: true,
    },
    {
      id: "affirmation-cards",
      badge: "DAILY PRACTICE",
      title: "Bye Bye Narcissist Card Deck",
      description: "Build confidence and trust in yourself one day at a time.",
      price: "$19.99",
      numericPrice: 19.99,
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Affirmation Cards/Box Display.png",
    },
  ];

  const handleAddBundle = () => {
    addToCart({
      id: "bbn-bundle",
      title: "Bye Bye Narcissist Collection",
      subtitle: "Complete 5-Part Collection",
      price: 119.99,
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png",
    });
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">

        {/* HERO */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-16">
          <motion.div {...fadeIn} className="max-w-4xl space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]/60 block">
              MANI COLLECTIONS
            </span>
            <h1 className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#0E2E1E] leading-[0.96] tracking-tight">
              Because Life Doesn&apos;t Come With Instructions
            </h1>
            <Link
              href="#featured"
              className="inline-flex px-8 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all text-sm shadow-md"
            >
              Explore Collections &rarr;
            </Link>
          </motion.div>
        </section>

        {/* WHAT ARE COLLECTIONS */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]/60 block">
              WHAT ARE COLLECTIONS?
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E] leading-[1.05]">
              Because Life Doesn&apos;t Come With Instructions
            </h2>
            <p className="text-base sm:text-lg text-[#4A524D] font-light leading-relaxed">
              Life&apos;s challenges rarely come one at a time. Whether you&apos;re healing from a difficult experience, strengthening relationships, or working on personal growth, finding the right support can feel overwhelming.
            </p>
            <p className="text-base sm:text-lg text-[#4A524D] font-light leading-relaxed">
              MANI Collections bring together carefully selected resources designed around a specific challenge, topic, or life experience.
            </p>
            <p className="text-base text-[#626A64] font-light leading-relaxed italic">
              Because support is most effective when everything works together.
            </p>
          </motion.div>
        </section>

        {/* FEATURED COLLECTION */}
        <section id="featured" className="px-6 sm:px-12 md:px-16 lg:px-24 mb-16">
          <motion.div {...fadeIn} className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#8C7659] block mb-3">
              FEATURED COLLECTION
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              Start Here
            </h2>
            <p className="text-lg text-[#4A524D] font-light leading-relaxed mt-4 max-w-3xl">
              If you are questioning a relationship, thinking about leaving, or trying to move forward after you have left, start here.
            </p>
          </motion.div>

          {/* Collection Hero Card */}
          <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#0E2E1E] rounded-3xl p-8 sm:p-12 shadow-xl mb-16">
            <div className="lg:col-span-5 flex justify-center">
              <img
                src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
                alt="Bye Bye Narcissist Collection"
                className="max-h-[400px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
            <div className="lg:col-span-7 text-editorial-white space-y-6">
              <h3 className="font-serif-heading text-4xl sm:text-5xl text-cream-logo">
                Bye Bye Narcissist
              </h3>
              <p className="text-base text-editorial-white/80 font-light leading-relaxed">
                When something feels wrong, it is easy to question yourself. You wonder if you are overreacting, explain away behavior that hurts, and slowly lose trust in your own instincts.
              </p>
              <p className="text-base text-editorial-white/80 font-light leading-relaxed">
                The Bye Bye Narcissist Collection was created to help you understand what is happening, recognize unhealthy patterns, and find the confidence to move forward.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <span className="text-3xl font-serif-heading text-cream-logo">$119.99</span>
                <button
                  onClick={handleAddBundle}
                  className="px-8 py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all shadow-md text-sm"
                >
                  {cartAdded ? "Added to Cart!" : "Explore the Collection \u2192"}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Individual Products */}
          <div className="space-y-8">
            {systemParts.map((part, idx) => (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-soft-white border border-mist-grey rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  {part.posterGrid ? (
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
                        src={encodeURI(part.image!)}
                        alt={part.title}
                        className="max-h-[280px] w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </div>

                <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-deep-green text-editorial-white px-3 py-1 rounded-full inline-block">
                    {part.badge}
                  </span>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E] leading-snug">
                    {part.title}
                  </h3>
                  <p className="text-base text-[#4A524D] font-light leading-relaxed">
                    {part.description}
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <span className="text-xl font-serif-heading text-[#0E2E1E]">
                      {part.price}
                    </span>
                    <button
                      onClick={() => {
                        addToCart({
                          id: part.id,
                          title: part.title,
                          subtitle: part.badge,
                          price: part.numericPrice,
                          image: part.posterGrid ? encodeURI(posterImages[0]) : encodeURI(part.image!),
                        });
                      }}
                      className="px-6 py-3 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all text-xs shadow-md"
                    >
                      Add to Cart &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FUTURE COLLECTIONS */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]/60 block mb-3">
              COMING SOON
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              More Collections Are Coming
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Emotional Intelligence", status: "In Development" },
              { title: "Love Done Right", status: "In Development" },
              { title: "Boundaries That Stick", status: "Coming Soon" },
              { title: "Purpose Starts Here", status: "Coming Soon" },
              { title: "Beyond the Anxiety", status: "Coming Soon" },
              { title: "Running on Empty", status: "Coming Soon" },
            ].map((collection, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 bg-soft-white border border-mist-grey rounded-2xl space-y-3 hover:border-[#0E2E1E]/30 transition-all"
              >
                <h3 className="font-serif-heading text-xl sm:text-2xl text-[#0E2E1E]">{collection.title}</h3>
                <span className="text-xs font-bold text-[#626A64] uppercase tracking-wider">{collection.status}</span>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-8">
            <Link
              href="/join-beta"
              className="inline-flex px-8 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all text-sm shadow-md"
            >
              Get Early Access &rarr;
            </Link>
          </motion.div>
        </section>

        {/* COMMUNITY CTA */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24">
          <motion.div {...fadeIn}>
            <div className="bg-[#0E2E1E] text-editorial-white rounded-2xl p-10 sm:p-14 text-center max-w-4xl mx-auto space-y-6 shadow-xl">
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
                You Should Not Have to Figure It Out Alone
              </h2>
              <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed max-w-2xl mx-auto">
                Join our community and be the first to hear about new collections, videos, and resources.
              </p>
              <div className="pt-2">
                <Link
                  href="/join-community"
                  className="px-10 py-5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all shadow-xl text-base"
                >
                  Join Our Community &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
