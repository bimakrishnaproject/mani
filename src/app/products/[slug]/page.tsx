"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";
import { useCart } from "@/context/CartContext";
import { MagneticElement, ScrollReveal, KineticTextReveal, SplitSlideCombine } from "@/components/ScrollAnimations";

const posterImages = Array.from({ length: 10 }, (_, i) => `/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/${i + 1} Framed.png`);

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
  const slug = resolvedParams?.slug || "book";
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [selectedPoster, setSelectedPoster] = useState<number | null>(null);

  const productCatalog: Record<string, any> = {
    book: {
      id: "book",
      title: "The Bye Bye Narcissist Book",
      subtitle: "Foundation",
      numericPrice: 24.99,
      price: "$24.99",
      badge: "FOUNDATION",
      description: "Understand manipulation, gaslighting, and unhealthy patterns.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
      specs: ["280 Pages", "Softcover Luxe Finish", "10 In-Depth Chapters", "Emergency Quick-Reference Guide"],
      features: [
        "Anatomy of Covert Manipulation & Gaslighting",
        "Breaking the Chemical Bond of Trauma",
        "Rebuilding Self-Trust After Systemic Devaluation",
        "Scripting Bulletproof Boundary Statements",
      ],
    },
    workbook: {
      id: "workbook",
      title: "The Bye Bye Narcissist Workbook",
      subtitle: "Action",
      numericPrice: 29.99,
      price: "$29.99",
      badge: "ACTION",
      description: "Turn insight into practical change.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Workbook.png",
      specs: ["196 Interactive Exercises", "Spiral-Bound Flat Lay", "Boundary Scripting Templates", "Trigger Audit Logs"],
      features: [
        "Boundary Scripting Fill-in Templates",
        "Emotional Trigger Processing Audits",
        "Cognitive Distortion Reality Checklists",
        "Emergency No-Contact Action Protocol",
      ],
    },
    "coloring-book": {
      id: "coloring-book",
      title: "The Bye Bye Narcissist Coloring Book & Journal",
      subtitle: "Calm",
      numericPrice: 14.99,
      price: "$14.99",
      badge: "CALM",
      description: "Slow down, process emotions, and reconnect with yourself.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Coloring Book.png",
      specs: ["50 Art Mandalas", "Perforated Pages", "Heavy Bleed-Resistant Paper", "Reflective Journal Prompts"],
      features: [
        "Somatic Nervous System Art Mandalas",
        "Overthinking De-escalation Prompts",
        "Daily Emotional Weather Trackers",
        "Visual Affirmation Color Grids",
      ],
    },
    posters: {
      id: "posters",
      title: "Bye Bye Narcissist Poster Collection",
      subtitle: "Reinforcement",
      numericPrice: 29.99,
      price: "$29.99",
      badge: "REINFORCEMENT",
      description: "Daily reminders that strengthen boundaries and self-worth.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/1 Framed.png",
      posterGrid: true,
      specs: ["10 Art Prints Included", "Frameable 8x10 Format", "300 GSM Heavy Cardstock", "Matte Protective Finish"],
      features: [
        "Complete Set of 10 Frameable 8x10 Art Prints",
        "'My Guilt Is Not Evidence of Wrongdoing'",
        "'No Is a Complete Sentence'",
        "Daily Reminders to Anchor Progress",
      ],
    },
    "affirmation-cards": {
      id: "affirmation-cards",
      title: "Bye Bye Narcissist Card Deck",
      subtitle: "Daily Practice",
      numericPrice: 19.99,
      price: "$19.99",
      badge: "DAILY PRACTICE",
      description: "Build confidence and trust in yourself one day at a time.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Affirmation Cards/Box Display.png",
      specs: ["52 Micro-Action Cards", "Luxe Rigid Display Box", "Instant Trigger Grounding", "Gold Foil Accents"],
      features: [
        "52 Weekly Micro-Action Cards",
        "Luxe Rigid Display Box",
        "Quick-Draw Trigger Guidance",
        "Pocket-Sized Cards",
      ],
    },
  };

  const product = productCatalog[slug] || productCatalog["book"];

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
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-12 md:px-16">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8 text-xs font-semibold text-[#0E2E1E] flex items-center gap-2">
            <Link href="/collections" className="hover:underline">Collections</Link>
            <span>/</span>
            <Link href="/collections/bye-bye-narcissist" className="hover:underline">Bye Bye Narcissist</Link>
            <span>/</span>
            <span className="text-[#0E2E1E] font-bold">{product.title}</span>
          </div>

          {/* Main Product Showcase Split */}
          <SplitSlideCombine className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Product Image Stage with Grounded Depth */}
            <div className="lg:col-span-6 flex justify-center items-center">
              {slug === "posters" ? (
                <div className="relative w-full bg-gradient-to-b from-[#F5F2EC] to-[#E5E0D8] rounded-3xl p-6 sm:p-8 border border-[#D5CEC2] shadow-[inset_0_1px_3px_rgba(255,255,255,0.8),0_20px_35px_-12px_rgba(14,46,30,0.2)] overflow-hidden">
                  <div className="flex items-center justify-between mb-4 px-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0E2E1E] bg-soft-signal-green px-3 py-1 rounded-full">
                      Complete 10-Poster Collection (8&times;10)
                    </span>
                    <span className="text-xs text-[#0E2E1E] font-bold">10 Frameable Prints</span>
                  </div>
                  <div className="grid grid-cols-5 gap-2.5 relative z-10">
                    {posterImages.map((src, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedPoster(idx)}
                        className="group relative rounded-lg overflow-hidden bg-white p-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all cursor-pointer"
                      >
                        <img
                          src={encodeURI(src)}
                          alt={`Poster ${idx + 1} of 10`}
                          className="w-full h-auto object-contain rounded-xs"
                        />
                        <span className="absolute bottom-1 right-1 text-[9px] font-bold bg-black/70 text-white px-1 rounded">
                          0{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Ground shadow beneath gallery */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-5 bg-black/15 blur-md rounded-full pointer-events-none" />
                </div>
              ) : (
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/12] bg-gradient-to-b from-[#F7F5F0] via-[#EFEBE4] to-[#E3DDD4] rounded-3xl p-8 sm:p-12 flex justify-center items-center border border-[#D5CEC2] shadow-[inset_0_1px_3px_rgba(255,255,255,0.9),0_20px_35px_-12px_rgba(14,46,30,0.14)] overflow-hidden group">
                  {/* Ambient Ground Surface Plane */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/[0.04] to-transparent pointer-events-none" />

                  {/* Product & Direct Base Contact Shadow */}
                  <div className="relative z-10 flex flex-col items-center justify-center max-h-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={540}
                      height={540}
                      quality={100}
                      priority
                      className="relative z-10 w-auto max-h-[320px] sm:max-h-[380px] object-contain drop-shadow-[0_12px_22px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="w-[85%] h-4.5 bg-black/30 blur-md rounded-[100%] -mt-3.5 pointer-events-none" />
                    <div className="w-[55%] h-3 bg-black/40 blur-xs rounded-[100%] -mt-3.5 pointer-events-none" />
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Product Detail & Purchase Action */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-3.5 py-1.5 rounded-full inline-block">
                {product.badge}
              </span>

              <KineticTextReveal
                text={product.title}
                tag="h1"
                className="font-serif-heading text-3xl xs:text-4xl sm:text-6xl text-[#0E2E1E] leading-tight"
              />

              <p className="font-serif-italic text-2xl text-[#1C2826]">
                &ldquo;{product.subtitle}&rdquo;
              </p>

              <div className="flex items-baseline gap-4 pt-2">
                <span className="text-4xl font-serif-heading text-[#0E2E1E]">
                  {product.price}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-soft-signal-green px-3 py-1 rounded-full">
                  IN STOCK • READY TO SHIP
                </span>
              </div>

              <p className="text-base text-[#1C2826] font-normal leading-relaxed">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="pt-4 border-t border-mist-grey space-y-3">
                <span className="text-xs font-bold text-[#0E2E1E] uppercase tracking-wider block">
                  SPECIFICATIONS &amp; FORMAT
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-ink-black font-medium">
                  {product.specs.map((spec: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#0E2E1E] font-bold">✓</span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="pt-4 border-t border-mist-grey space-y-3">
                <span className="text-xs font-bold text-[#0E2E1E] uppercase tracking-wider block">
                  WHAT IS INCLUDED
                </span>
                <ul className="space-y-1.5 text-xs text-ink-black font-medium">
                  {product.features.map((feat: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#0E2E1E] font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector & Add to Cart */}
              <div className="pt-6 border-t border-mist-grey flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-soft-white border border-mist-grey rounded-xl px-4 py-3 justify-center">
                  <span className="text-xs text-[#0E2E1E] uppercase font-bold">QTY</span>
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-6 h-6 rounded bg-editorial-white font-bold text-sm text-[#0E2E1E] flex items-center justify-center hover:bg-mist-grey"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-[#0E2E1E] min-w-[20px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-6 h-6 rounded bg-editorial-white font-bold text-sm text-[#0E2E1E] flex items-center justify-center hover:bg-mist-grey"
                  >
                    +
                  </button>
                </div>

                <MagneticElement strength={0.15} className="flex-grow">
                  <button
                    onClick={handleAddToCart}
                    className="w-full py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all transform hover:scale-[1.02] shadow-xl text-base flex items-center justify-center gap-2"
                  >
                    {addedToCart ? "✓ Added to Cart!" : `Add to Cart ($${(product.numericPrice * quantity).toFixed(2)}) →`}
                  </button>
                </MagneticElement>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-[#22332A] border-t border-mist-grey">
                <span>🚚 Free Shipping over $100</span>
                <span>🔒 30-Day Guarantee</span>
                <span>📦 Discreet Packaging</span>
              </div>

            </div>

          </SplitSlideCombine>

          {/* Related System Tools */}
          <section className="mt-28 pt-16 border-t-2 border-mist-grey">
            <ScrollReveal direction="up" className="mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-1">
                CONNECTED 5-PART SYSTEM
              </span>
              <h2 className="font-serif-heading text-4xl text-[#0E2E1E]">
                Explore Other Tools in the Collection
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(productCatalog)
                .filter(([k]) => k !== slug)
                .slice(0, 4)
                .map(([k, p]) => (
                  <Link key={k} href={`/products/${k}`} className="group">
                    <div className="p-6 bg-soft-white border border-mist-grey rounded-2xl hover:border-[#0E2E1E] transition-all space-y-4 shadow-xs h-full flex flex-col justify-between">
                      <div className="h-44 bg-editorial-white rounded-xl p-4 flex items-center justify-center border border-mist-grey">
                        <Image
                          src={p.image}
                          alt={p.title}
                          width={200}
                          height={200}
                          className="w-auto max-h-36 object-contain group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-[#0E2E1E] bg-soft-signal-green px-2.5 py-0.5 rounded-full inline-block">
                          {p.badge.split("•")[0]}
                        </span>
                        <h4 className="font-serif-heading text-xl text-[#0E2E1E] group-hover:text-[#1c5c3b] transition-colors leading-snug">
                          {p.title}
                        </h4>
                        <span className="text-lg font-serif-heading text-[#0E2E1E] block">
                          {p.price}
                        </span>
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
