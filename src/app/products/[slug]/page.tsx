"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";
import { useCart } from "@/context/CartContext";

const posterImages = Array.from(
  { length: 10 },
  (_, i) => `/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/${i + 1} Framed.png`
);

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Product Details"
        description="This product page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  const resolvedParams = use(params);
  const rawSlug = resolvedParams?.slug || "book";
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [selectedPoster, setSelectedPoster] = useState<number>(0);

  const productCatalog: Record<string, any> = {
    book: {
      id: "book",
      slug: "bye-bye-narcissist-book",
      title: "The Bye Bye Narcissist Book",
      subtitle: "Understand manipulation, gaslighting, and unhealthy patterns.",
      numericPrice: 24.99,
      price: "$24.99",
      badge: "FOUNDATION",
      description:
        "The core foundational book that helps you recognize the subtle signs of narcissistic manipulation, understand the psychological dynamics of toxic relationships, and begin rebuilding your self-trust.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
      specs: [
        "280 Pages · Complete Volume",
        "Luxe Softcover Edition",
        "10 Guided Chapters",
        "Emergency Reference Guide",
      ],
      features: [
        "Anatomy of covert manipulation, gaslighting, and love-bombing cycles",
        "Breaking the biological and emotional bonds of trauma bonding",
        "Rebuilding self-trust and somatic intuition after systemic devaluation",
        "Scripting clear, firm boundary statements for everyday encounters",
      ],
    },
    workbook: {
      id: "workbook",
      slug: "bye-bye-narcissist-workbook",
      title: "The Bye Bye Narcissist Workbook",
      subtitle: "Turn insight into practical, everyday change.",
      numericPrice: 29.99,
      price: "$29.99",
      badge: "ACTION",
      description:
        "A practical, hands-on workbook filled with structured exercises, reflection prompts, boundary templates, and action logs designed to help you process experiences and take confident steps forward.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Workbook.png",
      specs: [
        "196 Interactive Exercises",
        "Lay-Flat Journal Binding",
        "Boundary Scripting Templates",
        "Trigger Audit & Processing Logs",
      ],
      features: [
        "Step-by-step fill-in templates for setting and holding firm boundaries",
        "Emotional trigger identification and processing audits",
        "Reality-checking exercises for unmasking gaslighting distortions",
        "Practical protocols for detachment and regaining personal agency",
      ],
    },
    "coloring-book": {
      id: "coloring-book",
      slug: "bye-bye-narcissist-coloring-book",
      title: "The Bye Bye Narcissist Coloring Book & Journal",
      subtitle: "Slow down, process emotions, and reconnect with yourself.",
      numericPrice: 14.99,
      price: "$14.99",
      badge: "CALM",
      description:
        "An artistic and reflective companion combining guided coloring art mandalas with gentle journaling prompts to calm the nervous system and give you space to breathe.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Coloring Book.png",
      specs: [
        "50 Hand-Crafted Art Mandalas",
        "Heavy Bleed-Resistant Paper",
        "Perforated Frameable Pages",
        "Quiet Reflective Prompts",
      ],
      features: [
        "Mindful art patterns to settle nervous system overdrive",
        "De-escalation journal reflections for calming racing thoughts",
        "Gentle daily self-check-ins and emotional weather tracking",
        "Affirmative visual motifs reinforcing inner peace and boundaries",
      ],
    },
    posters: {
      id: "posters",
      slug: "bye-bye-narcissist-posters",
      title: "Bye Bye Narcissist Poster Collection",
      subtitle: "Daily reminders that strengthen boundaries and self-worth.",
      numericPrice: 29.99,
      price: "$29.99",
      badge: "REINFORCEMENT",
      description:
        "A complete set of 10 frameable 8×10 art prints featuring clear, grounded reminders designed to anchor your recovery and keep self-trust visible in your everyday environment.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/1 Framed.png",
      posterGrid: true,
      specs: [
        "Complete Set of 10 Art Prints",
        "Standard 8×10 Frameable Size",
        "300 GSM Heavyweight Matte Stock",
        "Protective Archival Finish",
      ],
      features: [
        "Daily grounding principles designed for home, office, or personal space",
        "Visual affirmations that counteract self-doubt in seconds",
        (
          <>
            High-contrast, timeless typography matching the <strong className="font-bold lowercase">mani</strong> aesthetic
          </>
        ),
        "Pairs seamlessly with standard 8×10 gallery picture frames",
      ],
    },
    "affirmation-cards": {
      id: "affirmation-cards",
      slug: "bye-bye-narcissist-affirmation-cards",
      title: "Bye Bye Narcissist Affirmation Cards",
      subtitle: "Build confidence and trust in yourself one day at a time.",
      numericPrice: 19.99,
      price: "$19.99",
      badge: "DAILY PRACTICE",
      description:
        "A 52-card deck housed in a keepsake rigid box. Each card delivers a targeted micro-action, grounding insight, or boundary reminder whenever you feel uncertain.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Affirmation Cards/Box Display.png",
      specs: [
        "52 Luxe Micro-Action Cards",
        "Rigid Keepsake Display Box",
        "Gold Foil Accent Details",
        "Smooth Matte-Touch Cardstock",
      ],
      features: [
        "52 weekly focus prompts for continuous healing and self-trust",
        "Quick-draw cards for instant clarity during moments of overwhelm",
        "Pocket-sized format designed for everyday carrying or desk display",
        "Structured guidance grounded in clinical behavioral insights",
      ],
    },
  };

  const cleanSlug = rawSlug.replace("bye-bye-narcissist-", "");
  const normalizedKey =
    cleanSlug === "journal"
      ? "coloring-book"
      : cleanSlug === "poster-set"
      ? "posters"
      : cleanSlug;
  const product =
    productCatalog[rawSlug] ||
    productCatalog[normalizedKey] ||
    productCatalog[cleanSlug] ||
    productCatalog["book"];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        title: product.title,
        price: product.numericPrice,
        subtitle: product.subtitle,
        image: product.image,
      });
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden selection:bg-[#0E2E1E] selection:text-white">
      <Header />

      <main className="flex-grow pt-32 sm:pt-40 md:pt-44 pb-28">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          
          {/* Minimalist Breadcrumb Navigation */}
          <nav className="mb-10 text-xs font-semibold tracking-wider text-[#0E2E1E]/70 uppercase flex items-center gap-2">
            <Link href="/collections" className="hover:text-[#0E2E1E] transition-colors">
              Collections
            </Link>
            <span>/</span>
            <Link href="/collections#featured-collection" className="hover:text-[#0E2E1E] transition-colors">
              Bye Bye Narcissist
            </Link>
            <span>/</span>
            <span className="text-[#0E2E1E] font-bold">{product.title}</span>
          </nav>

          {/* Main Product Showcase Split (Apple / Magazine Aesthetic) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start w-full">
            
            {/* Left Column: Pure Apple-Style Hero Stage */}
            <div className="lg:col-span-6 w-full relative lg:sticky top-28">
              {product.posterGrid ? (
                <div className="w-full bg-gradient-to-b from-[#FBFBFA] to-[#F1F3F5] border border-mist-grey/80 rounded-3xl p-6 sm:p-10 flex flex-col items-center justify-between shadow-xs overflow-hidden">
                  {/* Large Featured Poster Preview */}
                  <div className="relative w-full flex items-center justify-center py-4">
                    <img
                      src={encodeURI(posterImages[selectedPoster])}
                      alt={`Poster Print 0${selectedPoster + 1}`}
                      className="max-h-[380px] sm:max-h-[440px] w-auto object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.16)] transition-all duration-500"
                    />
                  </div>

                  {/* Realistic Ground Contact Shadow */}
                  <div className="w-[75%] h-2.5 bg-gradient-to-r from-transparent via-black/35 to-transparent blur-[4px] rounded-full mx-auto -mt-1 pointer-events-none" />

                  {/* 10-Print Gallery Strip */}
                  <div className="w-full pt-6 mt-4 border-t border-mist-grey/60">
                    <div className="flex items-center justify-between mb-3 px-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0E2E1E]">
                        All 10 Included Prints
                      </span>
                      <span className="text-xs text-[#0E2E1E]/70 font-semibold">
                        Click to preview
                      </span>
                    </div>
                    <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 w-full">
                      {posterImages.map((src, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedPoster(idx)}
                          className={`group relative rounded-lg overflow-hidden p-1 transition-all cursor-pointer border ${
                            selectedPoster === idx
                              ? "border-[#0E2E1E] ring-2 ring-[#0E2E1E]/20 bg-white scale-105"
                              : "border-mist-grey/60 bg-white/60 hover:border-[#0E2E1E]/50"
                          }`}
                        >
                          <img
                            src={encodeURI(src)}
                            alt={`Print 0${idx + 1}`}
                            className="w-full h-auto object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full bg-gradient-to-b from-[#FBFBFA] to-[#F1F3F5] border border-mist-grey/80 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-end shadow-xs relative overflow-hidden group">
                  {/* Hero Product Image */}
                  <div className="relative w-full flex items-end justify-center pt-6 pb-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-[360px] sm:max-h-[440px] w-auto object-contain drop-shadow-[0_18px_26px_rgba(0,0,0,0.16)] group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>

                  {/* Realistic Physical Contact Shadow */}
                  <div className="w-[80%] h-3 bg-gradient-to-r from-transparent via-black/40 to-transparent blur-[5px] rounded-full mx-auto -mt-1 pointer-events-none z-10" />

                  {/* Clean Studio Horizon Plinth */}
                  <div className="w-full h-9 bg-gradient-to-b from-[#E6E8EC] to-[#DBDEE4] border-t border-[#CCD0D7] rounded-b-2xl mt-1.5 flex items-center justify-center shadow-inner">
                    <span className="text-[10px] font-bold text-[#0E2E1E]/70 uppercase tracking-widest">
                      Official Physical Edition · <strong className="font-bold lowercase">mani</strong>&trade; Collections
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Editorial Details & Action */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-[#0E2E1E]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                  BYE BYE NARCISSIST · {product.badge}
                </span>

                <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E2E1E] leading-[1.06] tracking-tight">
                  {product.title}
                </h1>

                <p className="font-serif-italic text-xl sm:text-2xl text-[#1C2826]/85 mt-2">
                  &ldquo;{product.subtitle}&rdquo;
                </p>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-4xl font-serif-heading text-[#0E2E1E] font-bold">
                  {product.price}
                </span>
                <span className="text-xs font-medium text-[#0E2E1E]/70 uppercase tracking-wider">
                  Physical Edition · In Stock
                </span>
              </div>

              <p className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed">
                {product.description}
              </p>

              {/* Specifications / Format (Clean Apple Key-Value List) */}
              <div className="border-t border-b border-mist-grey/60 py-6 space-y-3">
                <span className="text-xs font-bold text-[#0E2E1E] uppercase tracking-widest block">
                  Specifications &amp; Format
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#0B1710]">
                  {product.specs.map((spec: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E2E1E]" />
                      <span className="font-semibold">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Focus Areas */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#0E2E1E] uppercase tracking-widest block">
                  Key Focus Areas
                </span>
                <div className="space-y-2.5">
                  {product.features.map((feat: string, idx: number) => (
                    <div key={idx} className="flex items-baseline gap-3 text-sm text-[#0B1710] font-medium leading-relaxed">
                      <span className="text-xs font-serif-heading font-bold text-[#0E2E1E]">
                        0{idx + 1}
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity Selector & Add to Bag CTA */}
              <div className="pt-4 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  {/* Quantity Controller */}
                  <div className="flex items-center justify-between border border-mist-grey/80 rounded-xl px-4 py-3 bg-[#FAFAFA] min-w-[130px]">
                    <span className="text-xs text-[#0E2E1E] font-bold uppercase tracking-wider mr-2">Qty</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-mist-grey/60 text-sm font-semibold hover:bg-mist-grey/40 flex items-center justify-center cursor-pointer transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="font-bold text-sm text-[#0E2E1E] min-w-[24px] text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-7 h-7 rounded-lg bg-white border border-mist-grey/60 text-sm font-semibold hover:bg-mist-grey/40 flex items-center justify-center cursor-pointer transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Primary Apple-Style CTA */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-grow py-4 px-8 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] active:scale-[0.99] transition-all text-base shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    {addedToCart ? "✓ Added to Bag" : `Add to Bag · $${(product.numericPrice * quantity).toFixed(2)}`}
                  </button>
                </div>

                {/* Subtle Editorial Trust Signals (Clean typography, no emojis) */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#1C2826]/70 pt-3 border-t border-mist-grey/40">
                  <span>Complimentary domestic shipping over $100</span>
                  <span className="hidden sm:inline">&bull;</span>
                  <span>30-day satisfaction guarantee</span>
                  <span className="hidden sm:inline">&bull;</span>
                  <span>Discreet packaging</span>
                </div>
              </div>

            </div>

          </div>

          {/* Related System Tools (Full Width Grid) */}
          <section className="mt-28 pt-20 border-t border-mist-grey/60 w-full">
            <div className="mb-10 space-y-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
                CONNECTED 5-PART SYSTEM
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E2E1E]">
                Explore Other Tools in the Collection
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {Object.entries(productCatalog)
                .filter(([k]) => k !== cleanSlug && !k.startsWith("bye-bye-narcissist-"))
                .slice(0, 4)
                .map(([k, p]) => (
                  <Link key={k} href={`/products/${p.slug || k}`} className="group block h-full">
                    <div className="p-6 bg-white border border-mist-grey/80 rounded-2xl hover:border-[#0E2E1E]/40 hover:shadow-lg transition-all space-y-4 h-full flex flex-col justify-between shadow-xs">
                      {/* Product Stage with Tabletop Surface */}
                      <div className="h-56 bg-gradient-to-b from-[#FBFBFA] to-[#F1F3F5] rounded-xl p-4 flex flex-col justify-end items-center border border-mist-grey/60 relative overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="max-h-40 w-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.14)] group-hover:scale-105 transition-transform duration-500 pb-0"
                        />
                        <div className="w-[75%] h-2 bg-gradient-to-r from-transparent via-black/35 to-transparent blur-[3px] rounded-full mx-auto -mt-1 pointer-events-none" />
                        <div className="w-full h-5 bg-gradient-to-b from-[#E7E9ED] to-[#DCE0E6] border-t border-[#CDD2DA] mt-1 shadow-inner" />
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-[#0E2E1E] bg-[#0E2E1E]/10 px-2.5 py-0.5 rounded-full inline-block uppercase tracking-wider">
                          {p.badge}
                        </span>
                        <h4 className="font-serif-heading text-xl text-[#0E2E1E] group-hover:text-[#143d28] transition-colors leading-snug">
                          {p.title}
                        </h4>
                        <p className="text-xs text-[#1C2826]/80 leading-relaxed line-clamp-2">
                          {p.description}
                        </p>
                        <div className="pt-3 flex items-center justify-between border-t border-mist-grey/60">
                          <span className="text-lg font-serif-heading text-[#0E2E1E] font-bold">
                            {p.price}
                          </span>
                          <span className="text-xs font-semibold text-[#0E2E1E] group-hover:underline">
                            Details &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
