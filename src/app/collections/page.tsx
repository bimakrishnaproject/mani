"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

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
    heightClass: "h-[260px] sm:h-[295px] md:h-[330px]",
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
    heightClass: "h-[250px] sm:h-[285px] md:h-[320px]",
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
    heightClass: "h-[260px] sm:h-[295px] md:h-[330px]",
  },
  {
    id: "posters",
    slug: "bye-bye-narcissist-posters",
    badge: "REINFORCEMENT",
    title: "Bye Bye Narcissist Poster Collection",
    description: "Daily reminders that strengthen boundaries and self-worth.",
    price: "$29.99",
    numericPrice: 29.99,
    image:
      "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/trimmed/Grounded_Poster.png",
    heightClass: "h-[260px] sm:h-[295px] md:h-[330px]",
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
    heightClass: "h-[210px] sm:h-[240px] md:h-[270px]",
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
  const [hoveredFeaturedBookId, setHoveredFeaturedBookId] = useState<string | null>(null);
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

        {/* ============================================================== */}
        {/* SECTION 1: WHAT ARE COLLECTIONS? (VERBATIM FROM DOCS)          */}
        {/* ============================================================== */}
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-20 sm:mb-28 text-center">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E2E1E] block">
              WHAT ARE COLLECTIONS?
            </span>

            <h1 className="font-serif-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0E2E1E] leading-[0.98] tracking-tight">
              Life Doesn&apos;t Come With Instructions
            </h1>

            <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#0B1710] font-normal leading-relaxed">
              <p>
                <strong>mani</strong> Collections bring together expert-created books, workbooks, and practical tools around a specific challenge, topic, or life experience.
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

        {/* ============================================================== */}
        {/* SECTION 2: WHY OUR COLLECTIONS EXIST (VERBATIM FROM DOCS)      */}
        {/* ============================================================== */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-20 sm:mb-28 border-t border-mist-grey/60 pt-16 sm:pt-24">
          <div className="w-full text-center space-y-8">
            <motion.div {...fadeIn} className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E2E1E] block">
                WHY OUR COLLECTIONS EXIST
              </span>

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

        {/* ============================================================== */}
        {/* SECTION 3: FEATURED COLLECTION (GROUNDED TATAKAN STAGE)         */}
        {/* ============================================================== */}
        <section
          id="featured-collection"
          className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24 sm:mb-32"
        >
          <div className="w-full">
            <motion.div
              {...fadeIn}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* Grounded Physical Collection Display on Architectural Tatakan Shelf Ledge (Individual Interactive Hoverable Books) */}
              <div className="lg:col-span-6 flex flex-col items-center justify-end w-full">
                <div
                  onMouseLeave={() => setHoveredFeaturedBookId(null)}
                  className="relative w-full flex flex-col items-center justify-end select-none overflow-visible group"
                >
                  {/* The Physical Collection Books sitting on the shelf floor */}
                  <div className="relative w-full flex items-end justify-center pb-0 z-10 overflow-visible pt-16">
                    {featuredCollectionItems.map((item) => {
                      const isHovered = hoveredFeaturedBookId === item.id;
                      const isAnyHovered = hoveredFeaturedBookId !== null;

                      return (
                        <Link
                          key={item.id}
                          href={`/products/${item.slug}`}
                          onMouseEnter={() => setHoveredFeaturedBookId(item.id)}
                          onMouseLeave={() => setHoveredFeaturedBookId(null)}
                          className={`relative flex flex-col items-center justify-end cursor-pointer transition-all duration-300 origin-bottom select-none ${item.marginClass} ${
                            isHovered
                              ? "z-50 -translate-y-5 sm:-translate-y-7 scale-[1.07]"
                              : `${item.zIndex} ${isAnyHovered ? "opacity-80 scale-[0.98]" : "opacity-100 scale-100"}`
                          }`}
                        >
                          {/* Floating Badge on Hover */}
                          <div
                            className={`absolute -top-10 px-3 py-1 bg-[#0E2E1E] text-cream-logo text-[10px] font-mono font-bold tracking-wider uppercase rounded-full shadow-lg transition-all duration-300 pointer-events-none whitespace-nowrap z-50 ${
                              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                            }`}
                          >
                            {item.badge} &bull; {item.name}
                          </div>

                          {/* Book Asset */}
                          <img
                            src={encodeURI(item.image)}
                            alt={item.name}
                            className={`${item.heightClass} w-auto block object-contain transition-all duration-300 origin-bottom ${
                              isHovered
                                ? "drop-shadow-[0_28px_42px_rgba(0,0,0,0.45)]"
                                : "drop-shadow-[0_16px_25px_rgba(0,0,0,0.26)]"
                            }`}
                          />

                          {/* Individual Grounding Contact Shadow Directly on Shelf Floor Plane */}
                          <div className="w-full relative h-0 pointer-events-none z-20">
                            <div
                              className={`w-[88%] h-[4px] bg-black/95 blur-[1.5px] rounded-full mx-auto -mt-[2px] transition-all duration-300 ${
                                isHovered ? "scale-75 opacity-30" : "scale-100 opacity-95"
                              }`}
                            />
                            <div
                              className={`w-[78%] h-[8px] bg-black/45 blur-[3px] rounded-full mx-auto -mt-[2px] transition-all duration-300 ${
                                isHovered ? "scale-85 opacity-25" : "scale-100 opacity-60"
                              }`}
                            />
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Overall Grounding Contact Shadow Baseline */}
                  <div className="w-full relative h-0 z-20 pointer-events-none">
                    <div className="w-[96%] h-[4.5px] bg-black/95 blur-[1.5px] rounded-full mx-auto -mt-[2px]" />
                    <div className="w-[90%] h-[9px] bg-black/45 blur-[4px] rounded-full mx-auto -mt-[2px]" />
                  </div>

                  {/* Architectural Shelf Plinth with Perspective Surface Plane */}
                  <div className="w-full z-20 -mt-1">
                    {/* Shelf Top Surface Plane */}
                    <div className="w-full h-6 sm:h-7 bg-gradient-to-b from-[#EAE2D5] via-[#DFD6C7] to-[#D5CAB9] border-t border-white/95 shadow-[inset_0_2px_4px_rgba(255,255,255,0.95)] relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                      <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-white/30 via-white to-white/30" />
                    </div>
                    {/* Shelf Front Fascia Bevel Drop */}
                    <div className="w-full h-5 sm:h-6 bg-gradient-to-b from-[#C4B59F] via-[#B8A891] to-[#A08F77] border-t border-[#B8A790] shadow-[0_16px_28px_rgba(14,46,30,0.2)]" />
                  </div>
                </div>
              </div>

              {/* Storytelling & Framing (Verbatim from Docs) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E2E1E] block">
                    FEATURED COLLECTION
                  </span>

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

        {/* ============================================================== */}
        {/* SECTION 4: WHAT’S INCLUDED? (5 GROUNDED PRODUCT PLINTH CARDS) */}
        {/* ============================================================== */}
        <section
          id="whats-included"
          className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24 sm:mb-32"
        >
          <div className="w-full space-y-12">
            <motion.div {...fadeIn} className="max-w-4xl space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E2E1E] block">
                WHAT’S INCLUDED?
              </span>
              <h3 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-[1.08] tracking-tight">
                Five Resources. One Connected Experience.
              </h3>
              <p className="text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed pt-1">
                Each resource serves a different purpose in the recovery process. Together they help you move from confusion and self-doubt to clarity, confidence, and self-trust.
              </p>
            </motion.div>

            {/* Spacious 3 + 2 Grid (Bigger cards, large books, no card background behind book, no cut off on hover) */}
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

                      {/* Grounded Physical Display Plinth Stage (No Card Background Behind Book, No Clipping on Zoom) */}
                      <Link
                        href={`/products/${product.slug}`}
                        className="block relative w-full h-[360px] sm:h-[390px] md:h-[415px] pt-10 sm:pt-14 flex flex-col justify-end items-center cursor-pointer select-none overflow-visible group/stage"
                      >
                        {/* Product Asset Firmly Resting on Floor (Scales up smoothly on hover without cut off) */}
                        <div className="relative w-full flex-grow flex items-end justify-center pb-0 z-10 overflow-visible">
                          <img
                            src={encodeURI(product.image)}
                            alt={product.title}
                            className={`${product.heightClass} w-auto block object-contain drop-shadow-[0_20px_32px_rgba(0,0,0,0.26)] transition-all duration-300 origin-bottom group-hover:scale-[1.10] group-hover:-translate-y-4 group-hover:drop-shadow-[0_32px_48px_rgba(0,0,0,0.4)] group-hover/stage:scale-[1.14] group-hover/stage:-translate-y-5`}
                          />
                        </div>

                        {/* Precision Contact Shadow directly touching the bottom of the object */}
                        <div className="w-full relative h-0 pointer-events-none z-20">
                          <div
                            className="w-[88%] h-[5px] bg-black/95 blur-[1.5px] rounded-full mx-auto -mt-[2px] transition-all duration-300 group-hover:scale-80 group-hover:opacity-50"
                          />
                          <div
                            className="w-[78%] h-[10px] bg-black/45 blur-[4px] rounded-full mx-auto -mt-[2px] transition-all duration-300 group-hover:scale-85 group-hover:opacity-40"
                          />
                        </div>

                        {/* Physical Plinth Ledge Surface ("Tatakan Nyata" Edge-to-Edge) */}
                        <div className="relative z-20 w-full -mt-1">
                          {/* Floor Surface */}
                          <div className="w-full h-5 bg-gradient-to-r from-[#D7CBBA] via-[#EAE0D0] to-[#D7CBBA] border-t border-white/90 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.9)] rounded-t-xs" />
                          {/* Front Bevel */}
                          <div className="w-full h-5 bg-gradient-to-b from-[#C4B59F] via-[#B8A891] to-[#A4937B] border-t border-[#BFAA94] shadow-[0_8px_16px_rgba(0,0,0,0.15)]" />
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

                      {/* Grounded Physical Display Plinth Stage (No Card Background Behind Book, No Clipping on Zoom) */}
                      <Link
                        href={`/products/${product.slug}`}
                        className="block relative w-full h-[360px] sm:h-[390px] md:h-[415px] pt-10 sm:pt-14 flex flex-col justify-end items-center cursor-pointer select-none overflow-visible group/stage"
                      >
                        {/* Product Asset Firmly Resting on Floor (Scales up smoothly on hover without cut off) */}
                        <div className="relative w-full flex-grow flex items-end justify-center pb-0 z-10 overflow-visible">
                          <img
                            src={encodeURI(product.image)}
                            alt={product.title}
                            className={`${product.heightClass} w-auto block object-contain drop-shadow-[0_20px_32px_rgba(0,0,0,0.26)] transition-all duration-300 origin-bottom group-hover:scale-[1.10] group-hover:-translate-y-4 group-hover:drop-shadow-[0_32px_48px_rgba(0,0,0,0.4)] group-hover/stage:scale-[1.14] group-hover/stage:-translate-y-5`}
                          />
                        </div>

                        {/* Precision Contact Shadow directly touching the bottom of the object */}
                        <div className="w-full relative h-0 pointer-events-none z-20">
                          <div
                            className="w-[88%] h-[5px] bg-black/95 blur-[1.5px] rounded-full mx-auto -mt-[2px] transition-all duration-300 group-hover:scale-80 group-hover:opacity-50"
                          />
                          <div
                            className="w-[78%] h-[10px] bg-black/45 blur-[4px] rounded-full mx-auto -mt-[2px] transition-all duration-300 group-hover:scale-85 group-hover:opacity-40"
                          />
                        </div>

                        {/* Physical Plinth Ledge Surface ("Tatakan Nyata" Edge-to-Edge) */}
                        <div className="relative z-20 w-full -mt-1">
                          {/* Floor Surface */}
                          <div className="w-full h-5 bg-gradient-to-r from-[#D7CBBA] via-[#EAE0D0] to-[#D7CBBA] border-t border-white/90 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.9)] rounded-t-xs" />
                          {/* Front Bevel */}
                          <div className="w-full h-5 bg-gradient-to-b from-[#C4B59F] via-[#B8A891] to-[#A4937B] border-t border-[#BFAA94] shadow-[0_8px_16px_rgba(0,0,0,0.15)]" />
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

        {/* ============================================================== */}
        {/* SECTION 5: FIND YOUR STARTING POINT (VERBATIM FROM DOCS)       */}
        {/* ============================================================== */}
        <section id="starting-point" className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24 sm:mb-32">
          <motion.div
            {...fadeIn}
            className="w-full bg-[#FAF9F5] border border-mist-grey/80 rounded-3xl p-8 sm:p-14 lg:p-20 shadow-sm text-center space-y-6"
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E2E1E] block">
              FIND YOUR STARTING POINT
            </span>

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

        {/* ============================================================== */}
        {/* SECTION 6: MORE COLLECTIONS ARE COMING (VERBATIM FROM DOCS)     */}
        {/* ============================================================== */}
        <section
          id="future-collections"
          className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 mb-24 sm:mb-32 border-t border-mist-grey/60 pt-20"
        >
          <div className="w-full space-y-16">
            <motion.div {...fadeIn} className="max-w-4xl space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E2E1E] block">
                MORE COLLECTIONS ARE COMING
              </span>
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

        {/* ============================================================== */}
        {/* SECTION 7: COMMUNITY (VERBATIM FROM DOCS)                       */}
        {/* ============================================================== */}
        <section id="community" className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <motion.div
            {...fadeIn}
            className="w-full bg-gradient-to-b from-editorial-white to-soft-white border border-mist-grey/80 rounded-3xl p-10 sm:p-16 lg:p-20 text-center space-y-6 shadow-sm"
          >
            <h3 className="font-serif-heading text-3xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-[1.08] tracking-tight">
              Be Part Of What <strong>mani</strong> Creates Next
            </h3>
            <p className="text-base sm:text-lg text-[#0B1710] font-normal leading-relaxed max-w-3xl mx-auto">
              Receive early access to new Collections, invitations to experience the app, and Watch &amp; Learn videos with practical guidance for everyday life.
            </p>
            <div className="pt-2">
              <Link
                href="/join-community"
                className="inline-flex px-8 py-3.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-full hover:bg-[#143d28] transition-all text-sm sm:text-base shadow-md cursor-pointer"
              >
                Join Our Community
              </Link>
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
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg cursor-pointer"
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
