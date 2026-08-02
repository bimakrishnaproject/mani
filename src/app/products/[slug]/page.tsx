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

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Product Sanctuary Details"
        description="This product page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  const { slug } = use(params);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const productCatalog: Record<string, any> = {
    book: {
      id: "book",
      title: "The Book — Name It. Face It. Own It.",
      subtitle: "The Psychological Foundation of Recovery",
      numericPrice: 24.99,
      price: "$24.99",
      badge: "HARDCOVER & DIGITAL PDF • 240 PAGES",
      description: "A 240-page comprehensive guide dissecting covert manipulation, gaslighting dynamics, trauma bonds, and step-by-step boundary rebuilding strategies.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
      specs: ["240 Pages", "Premium Linen Hardcover", "High-Resolution Typography", "Digital PDF Included"],
      features: [
        "Anatomy of Covert Manipulation & Gaslighting",
        "Breaking the Chemical Bond of Trauma",
        "Rebuilding Self-Trust After Systemic Devaluation",
        "Scripting Bulletproof Boundary Statements",
      ],
    },
    workbook: {
      id: "workbook",
      title: "The Workbook — Practical Recovery Exercises",
      subtitle: "Turn Awareness into Daily Behavioral Action",
      numericPrice: 29.99,
      price: "$29.99",
      badge: "INTERACTIVE WORKBOOK • 180 WORKSHEETS",
      description: "180 worksheets, boundary script fill-in templates, emotional processing audits, and daily self-trust tracking grids.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Workbook.png",
      specs: ["180 Practical Worksheets", "Fill-in Boundary Scripts", "Self-Trust Trackers", "Spiral Bound Flat Lay"],
      features: [
        "Boundary Scripting Fill-in Templates",
        "Emotional Trigger Processing Audits",
        "Cognitive Distortion Reality Checklists",
        "Emergency No-Contact Action Protocol",
      ],
    },
    "colouring-book": {
      id: "colouring-book",
      title: "Colouring Book & Daily Journal",
      subtitle: "Somatic Grounding & Daily Reflection",
      numericPrice: 14.99,
      price: "$14.99",
      badge: "SOMATIC ART THERAPY • DAILY JOURNAL",
      description: "Art therapy grounding prompts combined with structured daily journaling to quiet nervous system spirals during emotional triggers.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Coloring Book.png",
      specs: ["Somatic Art Therapy Mandalas", "Overthinking De-escalation", "Daily Reflection Grid", "Thick Non-Bleed Paper"],
      features: [
        "Somatic Nervous System Art Mandalas",
        "Overthinking De-escalation Prompts",
        "Daily Emotional Weather Trackers",
        "Visual Affirmation Color Grids",
      ],
    },
    posters: {
      id: "posters",
      title: "Poster Set — Visual Boundary Reminders",
      subtitle: "Keep Your Sanctuary Grounded Every Single Day",
      numericPrice: 29.99,
      price: "$29.99",
      badge: "10 PREMIUM FRAMEABLE ART PRINTS",
      description: "10 high-resolution frameable 8x10 art prints featuring core emotional boundary rules and daily self-compassion affirmations.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/1 Framed.png",
      specs: ["10 Art Prints", "Frameable 8x10 Format", "300 GSM Heavy Cardstock", "Matte Protective Finish"],
      features: [
        "10 Premium Frameable 8x10 Art Prints",
        "'My Guilt Is Not Evidence of Wrongdoing'",
        "'No Is a Complete Sentence'",
        "Daily Sanctuary Reminders",
      ],
    },
    "affirmation-cards": {
      id: "affirmation-cards",
      title: "Affirmation Card Deck — Micro-Actions",
      subtitle: "Instant Emotional Clarity Right in Your Hands",
      numericPrice: 19.99,
      price: "$19.99",
      badge: "52 LUXE CARDS IN DISPLAY BOX",
      description: "52 premium micro-reflection cards providing immediate grounded perspective whenever you experience self-doubt or emotional triggers.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Affirmation Cards/Box Display.png",
      specs: ["52 Micro-Action Cards", "Luxe Rigid Display Box", "Instant Trigger Grounding", "Gold Foil Accents"],
      features: [
        "52 Weekly Micro-Action Cards",
        "Luxe Rigid Display Box",
        "Quick-Draw Trigger Guidance",
        "Pocket-Sized Sanctuary Cards",
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
          <div className="mb-8 text-xs font-semibold text-sage-grey flex items-center gap-2">
            <Link href="/collections" className="hover:underline">Collections</Link>
            <span>/</span>
            <Link href="/collections/bye-bye-narcissist" className="hover:underline">Bye Bye Narcissist</Link>
            <span>/</span>
            <span className="text-[#0E2E1E] font-bold">{product.title}</span>
          </div>

          {/* Main Product Showcase Split */}
          <SplitSlideCombine className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Product Image Stage */}
            <div className="lg:col-span-6 bg-soft-white border-2 border-mist-grey rounded-3xl p-8 sm:p-12 flex justify-center items-center shadow-xl group">
              <Image
                src={product.image}
                alt={product.title}
                width={540}
                height={540}
                quality={100}
                priority
                className="w-auto max-h-[460px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
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

              <p className="font-serif-italic text-2xl text-[#4A524D]">
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

              <p className="text-base text-[#626A64] font-light leading-relaxed">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="pt-4 border-t border-mist-grey space-y-3">
                <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block">
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
                <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block">
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
                  <span className="text-xs text-sage-grey uppercase font-bold">QTY</span>
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
                    {addedToCart ? "✓ Added to Cart!" : `Add to Cart — $${(product.numericPrice * quantity).toFixed(2)} →`}
                  </button>
                </MagneticElement>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 text-xs font-medium text-sage-grey border-t border-mist-grey">
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
