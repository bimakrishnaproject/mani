"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { trackCommunitySignup } from "@/lib/analytics";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const products = [
  {
    id: "book",
    slug: "bye-bye-narcissist-book",
    badge: "FOUNDATION",
    title: "The Bye Bye Narcissist Book",
    description: "Understand manipulation, gaslighting, and unhealthy patterns.",
    price: "$24.99",
    numericPrice: 24.99,
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Book_Clean.png",
    heightClass: "h-[240px] sm:h-[270px] md:h-[295px]",
  },
  {
    id: "workbook",
    slug: "bye-bye-narcissist-workbook",
    badge: "ACTION",
    title: "The Bye Bye Narcissist Workbook",
    description: "Turn insight into practical change.",
    price: "$29.99",
    numericPrice: 29.99,
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Workbook_Clean.png",
    heightClass: "h-[240px] sm:h-[270px] md:h-[295px]",
  },
  {
    id: "coloring-book",
    slug: "bye-bye-narcissist-coloring-book",
    badge: "CALM",
    title: "The Bye Bye Narcissist Coloring Book & Journal",
    description: "Slow down, process emotions, and reconnect with yourself.",
    price: "$14.99",
    numericPrice: 14.99,
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Coloring Book.png",
    heightClass: "h-[235px] sm:h-[265px] md:h-[290px]",
  },
  {
    id: "posters",
    slug: "bye-bye-narcissist-posters",
    badge: "REINFORCEMENT",
    title: "Bye Bye Narcissist Poster Collection (Set of 10)",
    description:
      "Daily reminders that strengthen boundaries and self-worth. Includes all 10 framed reinforcement prints.",
    price: "$29.99",
    numericPrice: 29.99,
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Poster_Collection_Set_10.png",
    heightClass: "h-[195px] sm:h-[220px] md:h-[245px] max-w-full",
  },
  {
    id: "affirmation-cards",
    slug: "bye-bye-narcissist-affirmation-cards",
    badge: "DAILY PRACTICE",
    title: "Bye Bye Narcissist Affirmation Cards",
    description: "Build confidence and trust in yourself one day at a time.",
    price: "$19.99",
    numericPrice: 19.99,
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Solo_Cards_Tray.png",
    heightClass: "h-[180px] sm:h-[205px] md:h-[230px]",
  },
];

const featuredCollectionItems = [
  {
    id: "cards",
    name: "Affirmation Cards",
    badge: "DAILY PRACTICE",
    slug: "bye-bye-narcissist-affirmation-cards",
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Grounded_Cards.png",
    heightClass: "h-[145px] sm:h-[185px] md:h-[215px] lg:h-[235px]",
    zIndex: "z-20",
    marginClass: "-mr-2 sm:-mr-4 md:-mr-5",
  },
  {
    id: "coloring",
    name: "Coloring Book & Daily Journal",
    badge: "CALM",
    slug: "bye-bye-narcissist-coloring-book",
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Grounded_Coloring.png",
    heightClass: "h-[195px] sm:h-[245px] md:h-[285px] lg:h-[315px]",
    zIndex: "z-30",
    marginClass: "-mr-2 sm:-mr-4 md:-mr-5",
  },
  {
    id: "book",
    name: "The Bye Bye Narcissist Book",
    badge: "FOUNDATION",
    slug: "bye-bye-narcissist-book",
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Grounded_Book.png",
    heightClass: "h-[230px] sm:h-[290px] md:h-[335px] lg:h-[370px]",
    zIndex: "z-40",
    marginClass: "scale-[1.02]",
  },
  {
    id: "workbook",
    name: "The Bye Bye Narcissist Workbook",
    badge: "ACTION",
    slug: "bye-bye-narcissist-workbook",
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Grounded_Workbook.png",
    heightClass: "h-[210px] sm:h-[265px] md:h-[305px] lg:h-[335px]",
    zIndex: "z-30",
    marginClass: "-ml-2 sm:-ml-4 md:-ml-5",
  },
];

const inDevelopmentTitles = [
  "Boundaries",
  "Purpose",
  "Anxiety",
  "Burnout",
  "Shadow Work",
  "Inner Child Healing",
  "Self-Sabotage",
  "Self-Worth",
  "Panic",
];

export default function CollectionsPage() {
  const { addToCart } = useCart();
  const [addedItem, setAddedItem] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      title: product.title,
      subtitle: product.badge,
      price: product.numericPrice,
      image: product.image,
    });
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 2000);
  };

  const [communityEmail, setCommunityEmail] = useState("");
  const [communitySubmitted, setCommunitySubmitted] = useState(false);

  const handleCommunitySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!communityEmail) return;
    setCommunitySubmitted(true);
    trackCommunitySignup(communityEmail);
    try {
      await fetch("/api/klaviyo/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: communityEmail, type: "community" }),
      });
    } catch (err) {
      console.error("Klaviyo CRM sync error:", err);
    }
    setCommunityEmail("");
  };

  const handleNotifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail) return;
    setNotifySubmitted(true);
    try {
      await fetch("/api/klaviyo/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: notifyEmail, type: "collection_notify" }),
      });
    } catch (err) {
      console.error("Notify error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden selection:bg-[#0E2E1E] selection:text-white">
      <Header />

      <main className="flex-grow pt-32 sm:pt-40 md:pt-44 pb-24">

        {/* Section 1: What Are Collections? */}
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-20 sm:mb-28 text-center">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0E2E1E]" />
              <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase">
                WHAT ARE COLLECTIONS?
              </span>
            </div>

            <h1 className="font-serif-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0E2E1E] leading-[0.98] tracking-tight">
              Life Doesn&apos;t Come With Instructions
            </h1>

            <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#0B1710] font-normal leading-relaxed">
              <p>
                <strong className="font-bold lowercase">mani</strong> Collections bring together expert-created books, workbooks, and practical tools around a specific challenge, topic, or life experience.
              </p>
              <p>
                Each resource offers a different way to understand what you’re experiencing and put what you learn into practice.
              </p>
              <p>
                From working through difficult experiences to strengthening relationships and developing greater self-understanding, you can choose the resources that meet your needs.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#featured-collection"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-full hover:bg-[#143d28] active:scale-98 transition-all text-sm sm:text-base shadow-md cursor-pointer"
              >
                <span>Explore Collections</span>
                <span>&darr;</span>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Why Our Collections Exist */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-20 sm:mb-28 border-t border-mist-grey/60 pt-16 sm:pt-24">
          <div className="w-full text-center space-y-8">
            <motion.div {...fadeIn} className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0E2E1E]" />
                <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase">
                  WHY OUR COLLECTIONS EXIST
                </span>
              </div>

              <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-[1.08]">
                People learn differently.
              </h2>
            </motion.div>

            {/* 4 Learning Statements on Separate Scannable Lines (Zero Invented Badges/Numbers) */}
            <motion.div
              {...fadeIn}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2 text-left"
            >
              <div className="bg-[#FBFBFA] border border-mist-grey/80 rounded-2xl p-6 sm:p-8 space-y-2 hover:border-[#0E2E1E]/40 hover:shadow-sm transition-all flex items-center justify-center text-center">
                <p className="font-serif-heading text-xl sm:text-2xl text-[#0E2E1E] leading-snug">
                  Some learn through reading.
                </p>
              </div>

              <div className="bg-[#FBFBFA] border border-mist-grey/80 rounded-2xl p-6 sm:p-8 space-y-2 hover:border-[#0E2E1E]/40 hover:shadow-sm transition-all flex items-center justify-center text-center">
                <p className="font-serif-heading text-xl sm:text-2xl text-[#0E2E1E] leading-snug">
                  Some through reflection.
                </p>
              </div>

              <div className="bg-[#FBFBFA] border border-mist-grey/80 rounded-2xl p-6 sm:p-8 space-y-2 hover:border-[#0E2E1E]/40 hover:shadow-sm transition-all flex items-center justify-center text-center">
                <p className="font-serif-heading text-xl sm:text-2xl text-[#0E2E1E] leading-snug">
                  Some through practical exercises.
                </p>
              </div>

              <div className="bg-[#FBFBFA] border border-mist-grey/80 rounded-2xl p-6 sm:p-8 space-y-2 hover:border-[#0E2E1E]/40 hover:shadow-sm transition-all flex items-center justify-center text-center">
                <p className="font-serif-heading text-xl sm:text-2xl text-[#0E2E1E] leading-snug">
                  Others through visual reminders and daily reinforcement.
                </p>
              </div>
            </motion.div>

            <motion.p
              {...fadeIn}
              className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed pt-2 max-w-3xl mx-auto"
            >
              That&apos;s why every Collection includes multiple resources designed for different ways of learning and growth.
            </motion.p>
          </div>
        </section>

        {/* Section 3: Featured Collection */}
        <section
          id="featured-collection"
          className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24 sm:mb-32"
        >
          <div className="w-full">
            <motion.div
              {...fadeIn}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* Grounded Physical Collection Display on Architectural Tatakan Plinth (Verbatim Designer Note: Show the collection image alongside this introduction) */}
              <div className="lg:col-span-6 flex flex-col items-center justify-end w-full">
                <div className="relative w-full flex flex-col items-center justify-end select-none overflow-visible group">
                  {/* Soft ambient back glow */}
                  <div className="absolute inset-0 bg-[#0E2E1E]/5 blur-3xl rounded-full pointer-events-none group-hover:bg-[#0E2E1E]/10 transition-all duration-700" />

                  {/* Complete Collection Mockup Asset (Naturally Grounded with Photorealistic Contact Shadows) */}
                  <div className="relative w-full flex items-end justify-center pb-0 z-10 overflow-visible pt-8 sm:pt-12">
                    <img
                      src={encodeURI(
                        "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Complete_Collection_Etsy_Bundle.png"
                      )}
                      alt="The Bye Bye Narcissist Complete Collection with Poster Set"
                      className="w-full max-h-[380px] sm:max-h-[460px] md:max-h-[520px] object-contain relative z-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.01]"
                    />
                  </div>
                </div>
              </div>

              {/* Storytelling & Framing (Verbatim from Docs) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0E2E1E]" />
                    <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase">
                      FEATURED COLLECTION
                    </span>
                  </div>

                  <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-[1.05] tracking-tight">
                    Bye Bye Narcissist
                  </h2>

                  <p className="text-lg sm:text-xl text-[#0E2E1E] font-medium leading-relaxed italic">
                    It’s a collection about recovering from narcissism’s impact.
                  </p>
                </div>

                {/* 5 Emotional Insight Statements (Verbatim from Docs) */}
                <div className="border-l-3 border-[#0E2E1E] pl-5 py-3 space-y-1.5 text-base text-[#1C2826]/90 leading-relaxed bg-[#F8F9FA] rounded-r-2xl border border-mist-grey/60 font-normal">
                  <p>When something feels wrong in a relationship, it is easy to question yourself.</p>
                  <p>You explain away behavior that hurts.</p>
                  <p>You wonder if you’re overreacting.</p>
                  <p>You hope things will change.</p>
                  <p className="font-semibold text-[#0E2E1E] pt-0.5">
                    Over time, you stop trusting your own instincts.
                  </p>
                </div>

                <div className="space-y-3 text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed">
                  <p>
                    <strong>The Bye Bye Narcissist</strong> Collection was created for people who are tired of second-guessing themselves.
                  </p>
                  <p>
                    It helps you understand what happened, recognize unhealthy patterns, rebuild trust in your instincts, and stop organizing your life around someone else’s dysfunction.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: What's Included? */}
        <section
          id="whats-included"
          className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24 sm:mb-32"
        >
          <div className="w-full space-y-12">
            <motion.div {...fadeIn} className="max-w-4xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0E2E1E]" />
                <span className="text-xs font-bold tracking-widest text-[#0E2E1E] uppercase">
                  WHAT’S INCLUDED?
                </span>
              </div>
              <h3 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-[1.08] tracking-tight">
                Five Resources. One Connected Experience.
              </h3>
              <p className="text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed pt-1">
                Each resource serves a different purpose in the recovery process. Together they help you move from confusion and self-doubt to clarity, confidence, and self-trust.
              </p>
            </motion.div>

            {/* Spacious 3 + 2 Grid (Clean tactile Etsy-style stage, grounded contact shadow, direct product page links) */}
            <div className="space-y-8 w-full">
              {/* Row 1: 3 Cards (Foundation, Action, Calm) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
                {products.slice(0, 3).map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border border-mist-grey/90 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group select-none overflow-visible"
                  >
                    <div>
                      {/* Badge & Price Header Row */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono font-bold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[#0E2E1E]/10 text-[#0E2E1E] border border-[#0E2E1E]/15">
                          {product.badge}
                        </span>
                        <span className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#0E2E1E]">
                          {product.price}
                        </span>
                      </div>

                      {/* Grounded Physical Display Stage (Tactile, Clean, No Fake Wooden Shelf) */}
                      <Link
                        href={`/products/${product.slug}`}
                        className="block relative w-full h-[320px] sm:h-[350px] md:h-[370px] bg-[#FAF9F5] rounded-2xl border border-mist-grey/60 group-hover:border-[#0E2E1E]/25 transition-all p-4 flex flex-col justify-end items-center cursor-pointer select-none overflow-hidden group/stage"
                      >
                        {/* Product Asset Firmly Resting on Ground */}
                        <div className="relative w-full flex-grow flex items-end justify-center pb-2 z-10">
                          <img
                            src={encodeURI(product.image)}
                            alt={product.title}
                            className={`${product.heightClass} w-auto block object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom group-hover:scale-[1.02]`}
                          />
                        </div>

                        {/* Precision Photorealistic Contact Shadow */}
                        <div className="w-full relative h-3 pointer-events-none z-0 flex items-center justify-center">
                          <div className="w-[75%] h-[8px] bg-black/25 rounded-full blur-[6px] transition-all duration-500 group-hover:opacity-30" />
                        </div>
                      </Link>

                      {/* Product Name (Clickable) & Description */}
                      <div className="pt-6 space-y-2">
                        <Link href={`/products/${product.slug}`}>
                          <h4 className="font-serif-heading text-2xl sm:text-[1.75rem] text-[#0E2E1E] leading-snug group-hover:text-[#143d28] transition-colors font-bold">
                            {product.title}
                          </h4>
                        </Link>

                        <p className="text-sm sm:text-base text-[#1C2826]/90 leading-relaxed font-normal">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="pt-6 mt-6 border-t border-mist-grey/70 flex items-center justify-between gap-4">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 py-4 bg-[#0E2E1E] text-cream-logo text-sm font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-sm cursor-pointer active:scale-98"
                      >
                        {addedItem === product.id ? "✓ Added to Cart" : "Add to Cart"}
                      </button>
                      <Link
                        href={`/products/${product.slug}`}
                        className="text-sm sm:text-base text-[#0E2E1E] font-semibold hover:underline px-2"
                      >
                        Details &rarr;
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Row 2: 2 Cards Centered (Reinforcement Posters & Daily Practice Affirmation Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full items-stretch pt-2">
                {products.slice(3, 5).map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white border border-mist-grey/90 rounded-3xl p-8 sm:p-9 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group select-none overflow-visible"
                  >
                    <div>
                      {/* Badge & Price Header Row */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono font-bold tracking-wider uppercase px-4 py-1.5 rounded-full bg-[#0E2E1E]/10 text-[#0E2E1E] border border-[#0E2E1E]/15">
                          {product.badge}
                        </span>
                        <span className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#0E2E1E]">
                          {product.price}
                        </span>
                      </div>

                      {/* Grounded Physical Display Stage (Tactile, Clean, No Fake Wooden Shelf) */}
                      <Link
                        href={`/products/${product.slug}`}
                        className="block relative w-full h-[320px] sm:h-[350px] md:h-[370px] bg-[#FAF9F5] rounded-2xl border border-mist-grey/60 group-hover:border-[#0E2E1E]/25 transition-all p-4 flex flex-col justify-end items-center cursor-pointer select-none overflow-hidden group/stage"
                      >
                        {/* Product Asset Firmly Resting on Ground */}
                        <div className="relative w-full flex-grow flex items-end justify-center pb-2 z-10">
                          <img
                            src={encodeURI(product.image)}
                            alt={product.title}
                            className={`${product.heightClass} w-auto block object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom group-hover:scale-[1.02]`}
                          />
                        </div>

                        {/* Precision Photorealistic Contact Shadow */}
                        <div className="w-full relative h-3 pointer-events-none z-0 flex items-center justify-center">
                          <div className="w-[75%] h-[8px] bg-black/25 rounded-full blur-[6px] transition-all duration-500 group-hover:opacity-30" />
                        </div>
                      </Link>

                      {/* Product Name (Clickable) & Description */}
                      <div className="pt-6 space-y-2">
                        <Link href={`/products/${product.slug}`}>
                          <h4 className="font-serif-heading text-2xl sm:text-[1.75rem] text-[#0E2E1E] leading-snug group-hover:text-[#143d28] transition-colors font-bold">
                            {product.title}
                          </h4>
                        </Link>

                        <p className="text-sm sm:text-base text-[#1C2826]/90 leading-relaxed font-normal">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Action Row */}
                    <div className="pt-6 mt-6 border-t border-mist-grey/70 flex items-center justify-between gap-4">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 py-4 bg-[#0E2E1E] text-cream-logo text-sm font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-sm cursor-pointer active:scale-98"
                      >
                        {addedItem === product.id ? "✓ Added to Cart" : "Add to Cart"}
                      </button>
                      <Link
                        href={`/products/${product.slug}`}
                        className="text-sm sm:text-base text-[#0E2E1E] font-semibold hover:underline px-2"
                      >
                        Details &rarr;
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Find Your Starting Point */}
        <section id="starting-point" className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24 sm:mb-32">
          <motion.div
            {...fadeIn}
            className="w-full bg-[#FAF9F5] border border-mist-grey/80 rounded-3xl p-8 sm:p-14 lg:p-20 shadow-sm text-center space-y-6"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0E2E1E]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]">
                FIND YOUR STARTING POINT
              </span>
            </div>

            <h3 className="font-serif-heading text-3xl sm:text-5xl text-[#0E2E1E] leading-[1.1]">
              Begin With What You Need Most
            </h3>

            <p className="text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed max-w-3xl mx-auto">
              If you’re trying to make sense of what happened, begin with the book. If you’re ready to examine your own experiences, choose the workbook. For quiet reflection, explore the coloring book and journal. For daily reminders, choose the posters or affirmation cards.
            </p>

            <p className="text-base sm:text-lg text-[#0E2E1E] font-semibold leading-relaxed max-w-3xl mx-auto">
              You don’t have to use every resource at once. Choose what feels useful now and return to the others as your needs change.
            </p>
          </motion.div>
        </section>

        {/* Section 6: More Collections Are Coming */}
        <section
          id="future-collections"
          className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24 sm:mb-32 border-t border-mist-grey/60 pt-20"
        >
          <div className="w-full space-y-16">
            <motion.div {...fadeIn} className="max-w-4xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0E2E1E]" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]">
                  MORE COLLECTIONS ARE COMING
                </span>
              </div>
              <h3 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-[1.08] tracking-tight">
                Support For Every Stage Of Growth
              </h3>
              <p className="text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed">
                We&apos;re creating Collections focused on the challenges people face throughout life.
              </p>
            </motion.div>

            {/* Coming Soon Highlights (Pure Docs Copy: No Extra Invented Buttons) */}
            <div className="space-y-6">
              <h4 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Coming Soon
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Love Done Right */}
                <motion.div
                  {...fadeIn}
                  className="bg-[#0E2E1E] text-editorial-white rounded-3xl p-8 sm:p-12 space-y-4 shadow-xl flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 border border-cream-logo/20 px-3 py-1 rounded-full inline-block">
                      Coming Soon
                    </span>
                    <h5 className="font-serif-heading text-3xl sm:text-4xl text-cream-logo">
                      Love Done Right
                    </h5>
                    <p className="text-base text-[#FAF5EB] font-normal leading-relaxed">
                      Learn what love done right looks like and build stronger, more connected relationships.
                    </p>
                  </div>
                </motion.div>

                {/* Emotional Intelligence */}
                <motion.div
                  {...fadeIn}
                  className="bg-[#0E2E1E] text-editorial-white rounded-3xl p-8 sm:p-12 space-y-4 shadow-xl flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 border border-cream-logo/20 px-3 py-1 rounded-full inline-block">
                      Coming Soon
                    </span>
                    <h5 className="font-serif-heading text-3xl sm:text-4xl text-cream-logo">
                      Emotional Intelligence
                    </h5>
                    <p className="text-base text-[#FAF5EB] font-normal leading-relaxed">
                      Build self-awareness, emotional regulation, empathy, and stronger communication skills.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Collections in Development */}
            <motion.div
              {...fadeIn}
              className="bg-[#FAF8F5] border border-mist-grey rounded-3xl p-8 sm:p-12 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <h4 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                    Collections in Development
                  </h4>
                  <p className="text-sm sm:text-base text-[#0B1710] font-normal leading-relaxed">
                    We’re developing additional collections on boundaries, purpose, anxiety, burnout, shadow work, inner child healing, self-sabotage, self-worth, and panic.
                  </p>
                </div>

                <button
                  onClick={() => setNotifyModalOpen(true)}
                  className="px-8 py-3.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-full hover:bg-[#143d28] transition-all text-sm shadow-md cursor-pointer whitespace-nowrap self-start md:self-auto shrink-0"
                >
                  Notify Me About New Collections
                </button>
              </div>

              {/* 9 Scannable Pills */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {inDevelopmentTitles.map((title) => (
                  <span
                    key={title}
                    className="text-xs font-semibold px-4 py-2 bg-white border border-mist-grey rounded-full text-[#0E2E1E] shadow-xs"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Community */}
        <section id="community" className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24 sm:mb-32">
          <motion.div
            {...fadeIn}
            className="w-full bg-[#FAF9F5] border border-mist-grey/80 rounded-3xl py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-16 text-center space-y-6 sm:space-y-8 shadow-xs"
          >
            <h3 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-[1.08] tracking-tight">
              Be Part Of What <strong className="font-bold lowercase">mani</strong> Creates Next
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-[#0B1710] font-normal leading-relaxed max-w-2xl mx-auto">
              Receive early access to new Collections, invitations to experience the app, and Watch &amp; Learn videos with practical guidance for everyday life.
            </p>
            <div className="pt-2 max-w-xl mx-auto w-full">
              {communitySubmitted ? (
                <div className="p-5 bg-[#0E2E1E] text-cream-logo rounded-2xl font-semibold text-base shadow-md">
                  ✓ Welcome to the <strong className="font-bold lowercase">mani</strong> Community! Updates will be sent to your inbox.
                </div>
              ) : (
                <form onSubmit={handleCommunitySubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={communityEmail}
                    onChange={(e) => setCommunityEmail(e.target.value)}
                    placeholder="Enter Email"
                    required
                    className="flex-grow px-6 py-4 rounded-xl text-sm sm:text-base text-ink-black bg-white border border-mist-grey focus:outline-none focus:border-[#0E2E1E] shadow-xs"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all whitespace-nowrap text-sm sm:text-base shadow-md cursor-pointer"
                  >
                    Join Our Community
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />

      {/* NOTIFY MODAL */}
      {notifyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl border border-mist-grey space-y-5">
            <button
              onClick={() => {
                setNotifyModalOpen(false);
                setNotifySubmitted(false);
              }}
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors text-lg cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {notifySubmitted ? (
              <div className="text-center py-6 space-y-3">
                <span className="text-4xl">✓</span>
                <h4 className="font-serif-heading text-2xl text-[#0E2E1E]">You&apos;re On The List</h4>
                <p className="text-sm text-[#1C2826]">
                  We will notify you at <strong>{notifyEmail}</strong> as soon as new collections launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#0E2E1E] uppercase block">
                  NEW RELEASES
                </span>
                <h4 className="font-serif-heading text-2xl text-[#0E2E1E]">
                  Notify Me About New Collections
                </h4>
                <p className="text-xs text-[#1C2826] leading-relaxed">
                  Enter your email to receive early announcements for upcoming collections like Love Done Right and Emotional Intelligence.
                </p>
                <input
                  type="email"
                  required
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-mist-grey rounded-xl text-sm focus:outline-none focus:border-[#0E2E1E]"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0E2E1E] text-cream-logo rounded-full font-semibold text-sm hover:bg-[#143d28] transition-all cursor-pointer shadow-md"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
