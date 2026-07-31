"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";
import { useCart } from "@/context/CartContext";
import {
  ScrollReveal,
  KineticTextReveal,
  SplitSlideCombine,
  DiagonalSlideIn,
  PerspectiveFlipIn,
  CurtainClipExpand,
  CascadingZoomStagger,
  PinnedScrollSequence,
  MagneticElement,
} from "@/components/ScrollAnimations";

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
      num: "01",
      badge: "FOUNDATION",
      title: "1. The Book — Name It. Face It. Own It.",
      subtitle: "The Psychological Foundation of Recovery",
      description: "A comprehensive 240-page hardcover guide dissecting covert manipulation, gaslighting dynamics, trauma bonds, and boundary rebuilding strategies.",
      price: "$24.99",
      numericPrice: 24.99,
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
      highlights: [
        "Anatomy of Covert Manipulation & Gaslighting",
        "Breaking the Chemical Bond of Trauma",
        "Rebuilding Self-Trust After Systemic Devaluation",
        "Scripting Bulletproof Boundary Statements",
      ],
    },
    {
      id: "workbook",
      num: "02",
      badge: "ACTION",
      title: "2. The Workbook — Practical Exercises",
      subtitle: "Turn Awareness into Daily Behavioral Action",
      description: "Step-by-step practical exercises, script templates for setting boundaries, emotional processing worksheets, and self-trust progress trackers.",
      price: "$29.99",
      numericPrice: 29.99,
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Workbook.png",
      highlights: [
        "Boundary Scripting Fill-in Templates",
        "Emotional Trigger Processing Audits",
        "Cognitive Distortion Reality Checklists",
        "Emergency No-Contact Action Protocol",
      ],
    },
    {
      id: "coloring-book",
      num: "03",
      badge: "CALM",
      title: "3. Colouring Book & Daily Journal",
      subtitle: "Somatic Grounding & Daily Reflection",
      description: "Art therapy grounding prompts combined with structured daily journaling to calm your nervous system during overthinking spirals.",
      price: "$14.99",
      numericPrice: 14.99,
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Coloring Book.png",
      highlights: [
        "Somatic Nervous System Art Mandalas",
        "Overthinking De-escalation Prompts",
        "Daily Emotional Weather Trackers",
        "Visual Affirmation Color Grids",
      ],
    },
    {
      id: "posters",
      num: "04",
      badge: "REINFORCEMENT",
      title: "4. Poster Set — Visual Boundary Reminders",
      subtitle: "Keep Your Sanctuary Grounded Every Single Day",
      description: "10 high-resolution frameable posters featuring core emotional reminders, boundary rules, and self-compassion affirmations for your home.",
      price: "$29.99",
      numericPrice: 29.99,
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/1 Framed.png",
      highlights: [
        "10 Premium Frameable 8x10 Art Prints",
        "'My Guilt Is Not Evidence of Wrongdoing'",
        "'No Is a Complete Sentence'",
        "Daily Sanctuary Reminders",
      ],
    },
    {
      id: "cards",
      num: "05",
      badge: "DAILY PRACTICE",
      title: "5. Affirmation Card Deck — Micro-Actions",
      subtitle: "Instant Emotional Clarity Right in Your Hands",
      description: "52 premium micro-reflection cards providing immediate grounded perspective whenever you experience self-doubt or emotional triggers.",
      price: "$19.99",
      numericPrice: 19.99,
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Affirmation Cards/Box Display.png",
      highlights: [
        "52 Weekly Micro-Action Cards",
        "Luxe Rigid Display Box",
        "Quick-Draw Trigger Guidance",
        "Pocket-Sized Sanctuary Cards",
      ],
    },
  ];

  const upcomingCollections = [
    {
      title: "Emotional Intelligence",
      tagline: "Master emotional self-regulation and develop high-EQ communication skills.",
      status: "COMING SOON",
      color: "bg-[#0A2619]",
    },
    {
      title: "Love Done Right",
      tagline: "Build healthy partnership patterns and understand attachment dynamics.",
      status: "COMING SOON",
      color: "bg-[#182B21]",
    },
    {
      title: "Boundaries That Stick",
      tagline: "Learn to communicate your needs without guilt, fear, or apology.",
      status: "IN DEVELOPMENT",
      color: "bg-[#0E2E1E]",
    },
    {
      title: "Beyond the Anxiety",
      tagline: "Practical tools for managing overthinking and building nervous system resilience.",
      status: "IN DEVELOPMENT",
      color: "bg-[#05150D]",
    },
  ];

  const handleAddBundleToCart = () => {
    addToCart({
      id: "bye-bye-narcissist-bundle",
      title: "Bye Bye Narcissist — Complete 5-Tool Collection",
      price: 119.99,
      subtitle: "Includes Book, Workbook, Colouring Book & Journal, Posters, Card Deck",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png",
    });
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 2500);
  };

  const handleAddSingleToCart = (part: any) => {
    addToCart({
      id: part.id,
      title: part.title,
      price: part.numericPrice,
      subtitle: part.subtitle,
      image: part.image,
    });
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-0">

        {/* HERO */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-24">
          <div className="max-w-5xl space-y-6">
            <DiagonalSlideIn from="top-left" distance={40}>
              <div className="inline-block text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-4 py-2 rounded-full shadow-xs">
                MANI COLLECTIONS
              </div>
            </DiagonalSlideIn>

            <KineticTextReveal
              text="Because Life Doesn't Come With Instructions."
              tag="h1"
              className="font-serif-heading text-6xl sm:text-8xl text-[#0E2E1E] leading-[0.94] tracking-tight"
            />

            <ScrollReveal direction="up" distance={40} delay={0.2}>
              <p className="text-xl sm:text-2xl text-[#4A524D] font-light leading-relaxed max-w-3xl">
                Each MANI Collection is a connected learning system built around a specific life challenge—combining education, action, calm, reinforcement, and daily practice.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={20} delay={0.3}>
              <MagneticElement strength={0.15} className="inline-block">
                <Link
                  href="/collections/bye-bye-narcissist"
                  className="inline-flex px-8 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-md hover:bg-[#143d28] transition-all shadow-lg text-sm"
                >
                  Explore Flagship Collection &rarr;
                </Link>
              </MagneticElement>
            </ScrollReveal>
          </div>
        </section>

        {/* PINNED SCROLL SEQUENCE */}
        <PinnedScrollSequence
          items={[
            {
              label: "THE CHALLENGE",
              text: "Because One Resource Is Rarely Enough.",
              subtext: "Awareness without action leads to frustration. Action without calm leads to burnout.",
            },
            {
              label: "PEOPLE LEARN DIFFERENTLY",
              text: "Reading. Reflection. Practice. Reinforcement.",
              subtext: "Different people process in different ways. That's why each collection combines five distinct tools.",
            },
            {
              label: "THE SYSTEM",
              text: "Education → Reflection → Processing → Practice → Reinforcement",
              subtext: "One connected journey designed to support every phase of growth.",
            },
          ]}
          bgColor="bg-[#0E2E1E]"
          textColor="text-cream-logo"
        />

        {/* FLAGSHIP COLLECTION SHOWCASE HEADER */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 pt-24 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-mist-grey">
            <div>
              <span className="text-xs font-bold text-[#0E2E1E] tracking-widest uppercase block mb-2">
                FLAGSHIP COLLECTION • COMPLETE 5-PART SYSTEM
              </span>
              <h2 className="font-serif-heading text-5xl sm:text-7xl text-[#0E2E1E] leading-tight">
                Bye Bye Narcissist
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <span className="text-xs text-sage-grey uppercase block">COMPLETE BUNDLE</span>
                <span className="text-3xl font-serif-heading text-[#0E2E1E]">$119.99</span>
              </div>
              <MagneticElement strength={0.15}>
                <button
                  onClick={handleAddBundleToCart}
                  className="px-8 py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-xl text-sm cursor-pointer"
                >
                  {cartAdded ? "✓ Added to Cart!" : "Add Bundle to Cart — $119.99 →"}
                </button>
              </MagneticElement>
            </div>
          </div>
        </section>

        {/* 5 SEQUENTIAL LUXURY EDITORIAL TOOL SHOWCASE ROWS */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-32 space-y-24">
          {systemParts.map((part, pIdx) => (
            <SplitSlideCombine
              key={part.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center p-8 sm:p-12 bg-soft-white border-2 border-mist-grey rounded-3xl shadow-xl hover:border-[#0E2E1E] transition-all"
            >
              {/* Product Mockup Image */}
              <div className={`lg:col-span-6 flex justify-center items-center ${pIdx % 2 === 1 ? "lg:order-2" : ""}`}>
                <CurtainClipExpand className="w-full flex justify-center">
                  <div className="relative w-full max-w-[460px] h-[360px] sm:h-[420px] bg-editorial-white rounded-2xl p-8 border border-mist-grey flex items-center justify-center shadow-md group">
                    <Image
                      src={part.image}
                      alt={part.title}
                      width={480}
                      height={480}
                      quality={100}
                      priority
                      className="w-auto max-h-[340px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </CurtainClipExpand>
              </div>

              {/* Product Details & Specs */}
              <div className={`lg:col-span-6 space-y-6 ${pIdx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold text-editorial-white bg-[#0E2E1E] px-3.5 py-1 rounded-full">
                    TOOL {part.num} OF 05
                  </span>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-3 py-1 rounded-full">
                    {part.badge}
                  </span>
                </div>

                <h3 className="font-serif-heading text-3xl sm:text-5xl text-[#0E2E1E] leading-tight">
                  {part.title}
                </h3>

                <p className="font-serif-italic text-xl text-[#4A524D]">
                  &ldquo;{part.subtitle}&rdquo;
                </p>

                <p className="text-base text-[#626A64] font-light leading-relaxed">
                  {part.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-mist-grey">
                  <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block">
                    WHAT YOU WILL LEARN &amp; PRACTICE
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-black font-medium">
                    {part.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <span className="text-[#0E2E1E] font-bold">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-mist-grey flex items-center justify-between">
                  <div>
                    <span className="text-xs text-sage-grey block font-medium">INDIVIDUAL TOOL PRICE</span>
                    <span className="text-3xl font-serif-heading text-[#0E2E1E]">
                      {part.price}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAddSingleToCart(part)}
                      className="px-5 py-3 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-xs shadow-md cursor-pointer"
                    >
                      Add to Cart — {part.price} &rarr;
                    </button>
                    <Link
                      href={`/products/${part.id}`}
                      className="px-4 py-3 bg-editorial-white text-[#0E2E1E] border border-mist-grey font-semibold rounded-xl hover:bg-mist-grey/50 transition-all text-xs"
                    >
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </SplitSlideCombine>
          ))}
        </section>

        {/* WHY THEY WORK TOGETHER */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-32">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]">
              THE CONNECTED SYSTEM
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              Why These Resources Work Together
            </h2>
            <p className="text-lg text-[#4A524D] font-light leading-relaxed max-w-2xl mx-auto">
              Each tool serves a different role in your journey. Together, they create a complete support system.
            </p>
          </ScrollReveal>

          <CascadingZoomStagger className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.12}>
            {[
              { num: "01 / Education", title: "Understand", desc: "Deep understanding creates the foundation for meaningful change. Knowledge gives you language for what you've experienced." },
              { num: "02 / Processing", title: "Process & Reflect", desc: "Guided worksheets and creative prompts give you space to process emotions and transform understanding into personal insight." },
              { num: "03 / Practice", title: "Daily Reinforcement", desc: "Frameable posters and micro-reflection cards anchor your progress so that growth becomes part of your daily life." },
            ].map((card, idx) => (
              <MagneticElement key={idx} strength={0.12}>
                <div className="p-8 bg-soft-white border border-mist-grey rounded-2xl space-y-4 hover:border-[#0E2E1E] transition-all shadow-xs h-full">
                  <span className="text-3xl font-serif-heading text-[#0E2E1E]/30 block">{card.num}</span>
                  <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">{card.title}</h3>
                  <p className="text-sm text-[#626A64] font-light leading-relaxed">{card.desc}</p>
                </div>
              </MagneticElement>
            ))}
          </CascadingZoomStagger>
        </section>

        {/* UPCOMING COLLECTIONS */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-32">
          <ScrollReveal direction="up" className="mb-12 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-1">
                MORE COLLECTIONS ARE COMING
              </span>
              <h2 className="font-serif-heading text-4xl sm:text-5xl text-[#0E2E1E]">
                Future Collections
              </h2>
            </div>
            <span className="text-xs font-bold text-sage-grey hidden sm:inline-block">
              IN DEVELOPMENT
            </span>
          </ScrollReveal>

          <PerspectiveFlipIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" angle={-25} stagger={0.12}>
            {upcomingCollections.map((col, cIdx) => (
              <div
                key={cIdx}
                className={`${col.color} text-editorial-white p-8 rounded-2xl border border-editorial-white/10 flex flex-col justify-between h-[300px] hover:scale-[1.02] transition-transform shadow-xl`}
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-soft-signal-green text-[#0E2E1E] px-3 py-1 rounded-full inline-block mb-4">
                    {col.status}
                  </span>
                  <h3 className="font-serif-heading text-3xl text-cream-logo leading-tight mb-3">
                    {col.title}
                  </h3>
                  <p className="text-xs text-[#C3CDC6] font-light leading-relaxed">
                    {col.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-editorial-white/15">
                  <span className="text-xs font-semibold text-cream-logo opacity-80">
                    Get Early Access &rarr;
                  </span>
                </div>
              </div>
            ))}
          </PerspectiveFlipIn>
        </section>

        {/* COMMUNITY CTA */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 pb-32">
          <CurtainClipExpand>
            <div className="bg-[#0E2E1E] text-editorial-white rounded-2xl p-10 sm:p-16 text-center space-y-6 shadow-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full inline-block">
                YOU SHOULD NOT HAVE TO FIGURE IT OUT ALONE
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
                Join our community and be the first to know about new collections.
              </h2>
              <MagneticElement strength={0.2} className="inline-block pt-2">
                <Link
                  href="/#community"
                  className="px-10 py-5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all shadow-xl text-base inline-block"
                >
                  Join Our Community &rarr;
                </Link>
              </MagneticElement>
            </div>
          </CurtainClipExpand>
        </section>

      </main>

      <Footer />
    </div>
  );
}
