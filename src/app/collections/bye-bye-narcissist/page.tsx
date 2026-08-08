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

  const products = [
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
      title: "2. The Workbook — Practical Recovery Exercises",
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
      subtitle: "Keep Your Space Grounded Every Single Day",
      description: "10 high-resolution frameable posters featuring core emotional reminders, boundary rules, and self-compassion affirmations for your space.",
      price: "$29.99",
      numericPrice: 29.99,
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/1 Framed.png",
      highlights: [
        "10 Premium Frameable 8x10 Art Prints",
        "'My Guilt Is Not Evidence of Wrongdoing'",
        "'No Is a Complete Sentence'",
        "Daily Reminders",
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
        "Pocket-Sized Cards",
      ],
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

  const handleAddSingleToCart = (prod: any) => {
    addToCart({
      id: prod.id,
      title: prod.title,
      price: prod.numericPrice,
      subtitle: prod.subtitle,
      image: prod.image,
    });
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-0">

        {/* HERO — Split Slide Combine */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-28">
          <SplitSlideCombine className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <DiagonalSlideIn from="top-left" distance={30}>
                <div className="inline-block text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-4 py-2 rounded-full shadow-xs">
                  FEATURED COLLECTION • AVAILABLE NOW
                </div>
              </DiagonalSlideIn>

              <KineticTextReveal
                text="Bye Bye Narcissist."
                tag="h1"
                className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#0E2E1E] leading-[0.96] sm:leading-[0.94] tracking-tight"
              />

              <ScrollReveal direction="up" distance={30} delay={0.2}>
                <p className="text-xl text-[#4A524D] font-light leading-relaxed">
                  A connected 5-part system designed to help you understand manipulation dynamics, set meaningful boundaries, and rebuild self-trust.
                </p>
              </ScrollReveal>

              {/* Price & Bundle */}
              <ScrollReveal direction="up" distance={30} delay={0.3}>
                <div className="p-6 bg-soft-white border border-mist-grey rounded-xl space-y-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-sage-grey uppercase tracking-wider block">COMPLETE COLLECTION</span>
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl font-serif-heading text-[#0E2E1E]">$119.99</span>
                        <span className="text-lg text-sage-grey line-through">$129.95</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#0E2E1E] bg-soft-signal-green px-3.5 py-1.5 rounded-full">
                      SAVE $9.96
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-[#0E2E1E]">
                    <span className="bg-editorial-white px-3 py-1 rounded-full border border-mist-grey">✓ Free Shipping</span>
                    <span className="bg-editorial-white px-3 py-1 rounded-full border border-mist-grey">✓ 30-Day Returns</span>
                    <span className="bg-editorial-white px-3 py-1 rounded-full border border-mist-grey">✓ Digital Access</span>
                  </div>

                  <MagneticElement strength={0.15}>
                    <button
                      onClick={handleAddBundleToCart}
                      className="w-full py-5 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all transform hover:scale-[1.02] shadow-xl text-base flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {cartAdded ? "✓ Added to Cart!" : "Shop the Collection — $119.99 →"}
                    </button>
                  </MagneticElement>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Collection Image */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <CurtainClipExpand>
                <div className="relative w-full max-w-[580px] h-[480px] sm:h-[540px] flex items-center justify-center bg-soft-white rounded-2xl border border-mist-grey p-8 shadow-xl">
                  <Image
                    src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
                    alt="Bye Bye Narcissist Collection"
                    width={680}
                    height={520}
                    quality={100}
                    priority
                    className="w-auto max-h-[460px] object-contain drop-shadow-2xl"
                  />
                </div>
              </CurtainClipExpand>
            </div>

          </SplitSlideCombine>
        </section>

        {/* PINNED SCROLL SEQUENCE */}
        <PinnedScrollSequence
          items={[
            {
              label: "THE JOURNEY",
              text: "From Confusion to Clarity.",
              subtext: "The collection guides you through a progressive emotional journey.",
            },
            {
              label: "UNDERSTANDING",
              text: "Confusion → Understanding",
              subtext: "The book creates the foundation. You'll have language for what you experienced.",
            },
            {
              label: "ACTION & CALM",
              text: "Understanding → Action → Calm",
              subtext: "Workbooks create action. Journaling creates calm. Each tool serves a different purpose.",
            },
            {
              label: "TRANSFORMATION",
              text: "Calm → Self-Trust",
              subtext: "Daily practice with cards and visual reminders anchors your progress over time.",
            },
          ]}
          bgColor="bg-[#0E2E1E]"
          textColor="text-cream-logo"
        />

        {/* 5 SEQUENTIAL LUXURY EDITORIAL TOOL SHOWCASE ROWS */}
        <section id="whats-included" className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 py-32 space-y-24">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]">
              WHAT IS INCLUDED IN THE 5-PART SYSTEM
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              Five Connected Tools
            </h2>
            <p className="text-lg text-[#4A524D] font-light leading-relaxed max-w-2xl mx-auto">
              Scroll down to inspect each of the 5 resources in detail. Every tool serves a distinct role in your recovery journey.
            </p>
          </ScrollReveal>

          {products.map((prod, pIdx) => (
            <SplitSlideCombine
              key={prod.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center p-8 sm:p-14 bg-soft-white border-2 border-mist-grey rounded-3xl shadow-xl hover:border-[#0E2E1E] transition-all"
            >
              {/* Product Mockup Image */}
              <div className={`lg:col-span-6 flex justify-center items-center ${pIdx % 2 === 1 ? "lg:order-2" : ""}`}>
                <CurtainClipExpand className="w-full flex justify-center">
                  <div className="relative w-full max-w-[480px] h-[380px] sm:h-[440px] bg-editorial-white rounded-2xl p-8 border border-mist-grey flex items-center justify-center shadow-md group">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      width={480}
                      height={480}
                      quality={100}
                      priority
                      className="w-auto max-h-[360px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </CurtainClipExpand>
              </div>

              {/* Product Details & Specs */}
              <div className={`lg:col-span-6 space-y-6 ${pIdx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-extrabold text-editorial-white bg-[#0E2E1E] px-3.5 py-1 rounded-full">
                    TOOL {prod.num} OF 05
                  </span>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-3 py-1 rounded-full">
                    {prod.badge}
                  </span>
                </div>

                <h3 className="font-serif-heading text-3xl sm:text-5xl text-[#0E2E1E] leading-tight">
                  {prod.title}
                </h3>

                <p className="font-serif-italic text-xl text-[#4A524D]">
                  &ldquo;{prod.subtitle}&rdquo;
                </p>

                <p className="text-base text-[#626A64] font-light leading-relaxed">
                  {prod.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-mist-grey">
                  <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block">
                    KEY HIGHLIGHTS &amp; FEATURES
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-black font-medium">
                    {prod.highlights.map((h, hIdx) => (
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
                      {prod.price}
                    </span>
                  </div>
                  <MagneticElement strength={0.15}>
                    <button
                      onClick={() => handleAddSingleToCart(prod)}
                      className="px-6 py-3 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-xs shadow-md cursor-pointer"
                    >
                      Add Individual Tool — {prod.price} &rarr;
                    </button>
                  </MagneticElement>
                </div>
              </div>
            </SplitSlideCombine>
          ))}
        </section>

        {/* BUNDLE COMPARISON */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-32">
          <ScrollReveal direction="up" className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-1">
              BUNDLE OPTIONS
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-5xl text-[#0E2E1E]">
              Choose Your Path
            </h2>
          </ScrollReveal>

          <PerspectiveFlipIn className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto" angle={-25} stagger={0.15}>
            <div className="p-8 bg-soft-white border-2 border-mist-grey rounded-2xl space-y-4 hover:border-[#0E2E1E] transition-all">
              <span className="text-xs font-bold text-sage-grey uppercase tracking-wider">STARTER</span>
              <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">Book + Workbook</h3>
              <p className="text-sm text-[#626A64] font-light">Foundation understanding plus practical exercises to start your journey.</p>
              <span className="text-3xl font-serif-heading text-[#0E2E1E] block">$49.99</span>
              <MagneticElement strength={0.12}>
                <button
                  onClick={() =>
                    addToCart({
                      id: "starter-bundle",
                      title: "Starter Bundle — Book + Workbook",
                      price: 49.99,
                      subtitle: "Foundation understanding plus practical exercises",
                      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
                    })
                  }
                  className="w-full py-3 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-sm cursor-pointer"
                >
                  Add Starter Bundle — $49.99 &rarr;
                </button>
              </MagneticElement>
            </div>

            <div className="p-8 bg-[#0E2E1E] text-editorial-white border-2 border-[#0E2E1E] rounded-2xl space-y-4 relative">
              <span className="absolute -top-3 right-6 text-[10px] font-bold text-[#0E2E1E] bg-cream-logo px-3 py-1 rounded-full">
                BEST VALUE
              </span>
              <span className="text-xs font-bold text-sage-grey uppercase tracking-wider">COMPLETE</span>
              <h3 className="font-serif-heading text-2xl text-cream-logo">Complete Collection</h3>
              <p className="text-sm text-[#C3CDC6] font-light">All five connected tools for a complete support system.</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif-heading text-cream-logo">$119.99</span>
                <span className="text-sm text-sage-grey line-through">$129.95</span>
              </div>
              <p className="text-xs text-[#C3CDC6]">Includes: Book, Workbook, Colouring Book & Journal, Poster Set, Card Deck</p>
              <MagneticElement strength={0.12}>
                <button
                  onClick={handleAddBundleToCart}
                  className="w-full py-3 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all text-sm cursor-pointer font-bold"
                >
                  Add Complete Bundle — $119.99 &rarr;
                </button>
              </MagneticElement>
            </div>
          </PerspectiveFlipIn>
        </section>

        {/* RELATED VIDEOS */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 mb-32">
          <ScrollReveal direction="up" className="mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-1">
              RELATED WATCH &amp; LEARN CONTENT
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#0E2E1E]">
              Videos That Support This Collection
            </h2>
          </ScrollReveal>

          <CascadingZoomStagger className="grid grid-cols-1 sm:grid-cols-3 gap-6" stagger={0.12}>
            {[
              { title: "How To Recognize A Narcissist", category: "Psychology" },
              { title: "Why You Repeat Toxic Cycles", category: "Psychology" },
              { title: "5 Signs You Struggle to Say What You Need", category: "Relationships" },
            ].map((v, i) => (
              <Link key={i} href="/watch-learn" className="group">
                <div className="p-6 bg-soft-white border border-mist-grey rounded-xl hover:border-[#0E2E1E] transition-all space-y-3">
                  <span className="text-[10px] font-bold text-[#0E2E1E] bg-soft-signal-green px-2.5 py-0.5 rounded-full">
                    {v.category}
                  </span>
                  <h4 className="font-serif-heading text-lg text-[#0E2E1E] group-hover:text-[#1c5c3b] transition-colors">
                    {v.title}
                  </h4>
                  <span className="text-xs font-semibold text-[#0E2E1E] group-hover:underline">
                    Watch Video →
                  </span>
                </div>
              </Link>
            ))}
          </CascadingZoomStagger>
        </section>

        {/* GUARANTEE CTA */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16 pb-32">
          <CurtainClipExpand>
            <div className="bg-[#081F14] text-editorial-white rounded-2xl p-10 sm:p-16 text-center space-y-6 shadow-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-4 py-1.5 rounded-full inline-block">
                30-DAY RETURN POLICY
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
                Try the complete system with confidence.
              </h2>
              <p className="text-base sm:text-lg text-[#C3CDC6] font-light leading-relaxed max-w-2xl mx-auto">
                If this collection doesn&apos;t provide value, return it within 30 days for a full refund. No questions asked.
              </p>
              <MagneticElement strength={0.2} className="inline-block pt-2">
                <button
                  onClick={handleAddBundleToCart}
                  className="px-10 py-5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all transform hover:scale-105 shadow-xl text-base cursor-pointer"
                >
                  {cartAdded ? "✓ Added!" : "Get Started Today — $119.99 →"}
                </button>
              </MagneticElement>
            </div>
          </CurtainClipExpand>
        </section>

      </main>

      <Footer />
    </div>
  );
}
