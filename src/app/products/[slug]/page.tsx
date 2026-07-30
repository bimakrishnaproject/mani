"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const productCatalog: Record<string, any> = {
    book: {
      title: "The Book — Name It. Face It. Own It.",
      subtitle: "The Psychological Foundation of Narcissistic Recovery",
      price: "$24.99",
      badge: "HARDCOVER & DIGITAL PDF • 240 PAGES",
      description: "A 240-page comprehensive guide dissecting covert manipulation, gaslighting dynamics, trauma bonds, and step-by-step boundary rebuilding strategies.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png",
      specs: ["240 Pages", "Premium Linen Hardcover", "High-Resolution Typography"],
    },
    workbook: {
      title: "The Workbook — Practical Recovery Exercises",
      subtitle: "Turn Awareness into Daily Behavioral Action",
      price: "$29.99",
      badge: "INTERACTIVE WORKBOOK • 180 WORKSHEETS",
      description: "180 worksheets, boundary script fill-in templates, emotional processing audits, and daily self-trust tracking grids.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Workbook.png",
      specs: ["180 Practical Worksheets", "Fill-in Boundary Scripts", "Self-Trust Trackers"],
    },
    "colouring-book": {
      title: "Colouring Book & Daily Journal",
      subtitle: "Somatic Grounding & Daily Reflection",
      price: "$14.99",
      badge: "SOMATIC ART THERAPY • DAILY JOURNAL",
      description: "Art therapy grounding prompts combined with structured daily journaling to quiet nervous system spirals during emotional triggers.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Coloring Book.png",
      specs: ["Somatic Art Therapy", "Overthinking De-escalation", "Daily Reflection Grid"],
    },
    posters: {
      title: "Poster Set — Visual Boundary Reminders",
      subtitle: "Keep Your Sanctuary Grounded Every Single Day",
      price: "$29.99",
      badge: "10 PREMIUM FRAMEABLE ART PRINTS",
      description: "10 high-resolution frameable 8x10 art prints featuring core emotional boundary rules and daily self-compassion affirmations.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Posters/1 Framed.png",
      specs: ["10 Art Prints", "Frameable 8x10 Format", "Daily Sanctuary Affirmations"],
    },
    "affirmation-cards": {
      title: "Affirmation Card Deck — Micro-Actions",
      subtitle: "Instant Emotional Clarity Right in Your Hands",
      price: "$19.99",
      badge: "52 LUXE CARDS IN DISPLAY BOX",
      description: "52 premium micro-reflection cards providing immediate grounded perspective whenever you experience self-doubt or emotional triggers.",
      image: "/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Affirmation Cards/Box Display.png",
      specs: ["52 Micro-Action Cards", "Luxe Rigid Display Box", "Instant Trigger Grounding"],
    },
  };

  const product = productCatalog[slug] || productCatalog["book"];

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">
        <div className="px-6 sm:px-12 md:px-16 lg:px-24">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8 text-xs font-semibold text-sage-grey flex items-center gap-2">
            <Link href="/collections" className="hover:underline">Collections</Link>
            <span>/</span>
            <Link href="/collections/bye-bye-narcissist" className="hover:underline">Bye Bye Narcissist</Link>
            <span>/</span>
            <span className="text-deep-green font-bold">{product.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Product Image Stage */}
            <div className="lg:col-span-6 bg-soft-white border-2 border-mist-grey rounded-3xl p-10 flex justify-center items-center shadow-xl">
              <Image
                src={product.image}
                alt={product.title}
                width={520}
                height={520}
                quality={100}
                priority
                className="w-auto max-h-[440px] object-contain drop-shadow-2xl animate-float"
              />
            </div>

            {/* Right Column: Product Detail & Purchase Action */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-4 py-1.5 rounded-full inline-block">
                {product.badge}
              </span>

              <h1 className="font-serif-heading text-4xl sm:text-6xl text-deep-green leading-tight">
                {product.title}
              </h1>

              <p className="font-serif-italic text-xl text-[#4A524D]">
                "{product.subtitle}"
              </p>

              <div className="text-4xl font-serif-heading text-deep-green">
                {product.price}
              </div>

              <p className="text-base text-[#626A64] font-light leading-relaxed">
                {product.description}
              </p>

              {/* Specs Bullet Checklist */}
              <div className="space-y-2 pt-2 border-t border-mist-grey">
                <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block">PRODUCT SPECIFICATIONS</span>
                <ul className="space-y-1.5 text-xs text-ink-black font-medium">
                  {product.specs.map((spec: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-deep-green font-bold">✓</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-mist-grey rounded-xl bg-soft-white overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-lg font-bold text-deep-green hover:bg-mist-grey/50"
                    >
                      −
                    </button>
                    <span className="px-5 py-3 text-sm font-bold text-deep-green">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-lg font-bold text-deep-green hover:bg-mist-grey/50"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-grow py-4 bg-deep-green text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all transform hover:scale-[1.02] shadow-xl text-base"
                  >
                    {addedToCart ? "✓ Added to Cart!" : `Add to Cart — ${product.price}`}
                  </button>
                </div>

                <div className="p-4 bg-soft-signal-green/20 rounded-xl border border-soft-signal-green text-xs font-semibold text-deep-green flex items-center justify-between">
                  <span>💡 Bundle & Save Option Available:</span>
                  <Link href="/collections/bye-bye-narcissist" className="underline font-bold">
                    Buy Complete 5-Part Bundle for $119.99 &rarr;
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
