"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BYE_BYE_NARCISSIST_PRODUCTS } from "@/data/collections";

export default function ByeByeNarcissistPage() {
  return (
    <div className="min-h-screen flex flex-col bg-editorial-white selection:bg-soft-signal-green selection:text-deep-green">
      <Header />

      <main className="flex-grow pt-32 pb-28 md:pt-40 md:pb-36">
        {/* Section 1 — Collection Hero */}
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full mb-4">
                MANI COLLECTION 01
              </div>
              <h1 className="font-serif-heading text-5xl md:text-7xl text-deep-green mb-4 leading-[0.96]">
                Bye Bye Narcissist
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#4A524D] leading-relaxed mb-8">
                A 5-part connected system designed to help you understand toxic dynamics, reclaim your boundaries, and rebuild self-trust after narcissistic abuse.
              </p>

              <div className="p-5 bg-soft-white border border-mist-grey rounded-2xl mb-8 flex items-center justify-between shadow-xs">
                <div>
                  <span className="text-xs text-sage-grey uppercase font-bold tracking-wider block">Complete Collection Bundle</span>
                  <span className="text-3xl font-bold text-deep-green">$119.99</span>
                </div>
                <Link
                  href="#bundles"
                  className="px-6 py-3.5 bg-deep-green text-editorial-white text-sm font-semibold rounded-md hover:bg-[#143d28] transition-colors"
                >
                  Shop the Collection
                </Link>
              </div>
            </div>

            {/* Seamless Bleed Image Presentation without white background card */}
            <div className="relative w-full flex justify-center items-center py-4">
              <Image
                src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
                alt="Bye Bye Narcissist Collection Full System"
                width={620}
                height={460}
                className="w-full h-auto object-contain max-h-[460px] drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>

        {/* Section 2 — Emotional Journey */}
        <section className="bg-deep-green text-editorial-white py-16 mb-20">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-sage-grey block mb-3">
              THE EXPERIENCE
            </span>
            <h2 className="font-serif-heading text-3xl md:text-5xl text-cream-logo mb-10">
              Confusion → Understanding → Action → Calm → Self-Trust
            </h2>
            <p className="text-sm md:text-base text-[#C3CDC6] max-w-2xl mx-auto leading-relaxed">
              Recovery requires moving beyond initial intellectual realization into somatic grounding, actionable boundary work, and daily habit integration.
            </p>
          </div>
        </section>

        {/* Section 3 — Product Sequence Breakdown */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12 mb-28 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase text-deep-green block mb-2">
              THE 5 RESOURCES
            </span>
            <h2 className="font-serif-heading text-4xl md:text-5xl text-deep-green">
              Inside the Collection
            </h2>
          </div>

          {BYE_BYE_NARCISSIST_PRODUCTS.map((prod, idx) => (
            <div
              key={prod.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-editorial-white border border-mist-grey/80 rounded-3xl p-8 md:p-12 shadow-xs ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div>
                <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-3 py-1 rounded-sm uppercase inline-block mb-3">
                  0{idx + 1}. {prod.role}
                </span>
                <h3 className="font-serif-heading text-3xl md:text-4xl text-deep-green mb-3">
                  {prod.name}
                </h3>
                <div className="text-2xl font-bold text-deep-green mb-4">${prod.price}</div>
                <p className="text-sm text-[#4A524D] leading-relaxed mb-6">
                  {prod.description}
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block">
                    What it helps with:
                  </span>
                  {prod.helpsWith.map((item, i) => (
                    <div key={i} className="text-xs text-ink-black flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-deep-green rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => alert(`Added ${prod.name} to cart.`)}
                  className="px-6 py-3 border border-deep-green text-deep-green font-semibold rounded-md text-sm hover:bg-deep-green hover:text-editorial-white transition-colors"
                >
                  Add Item — ${prod.price}
                </button>
              </div>

              {/* Seamless Studio Image Container */}
              <div className="relative w-full flex justify-center items-center p-4">
                <Image
                  src={prod.mockupImage}
                  alt={prod.name}
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain max-h-[300px] drop-shadow-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </section>

        {/* Section 4 — Bundle Comparison */}
        <section id="bundles" className="max-w-[1360px] mx-auto px-6 md:px-12 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-deep-green block mb-2">
              BUNDLE & SAVE
            </span>
            <h2 className="font-serif-heading text-4xl md:text-5xl text-deep-green">
              Collection Bundles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bundle 1 */}
            <div className="bg-editorial-white border-2 border-mist-grey rounded-3xl p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block mb-2">Essential Pair</span>
                <h3 className="font-serif-heading text-3xl text-deep-green mb-3">Book + Workbook</h3>
                <div className="text-4xl font-bold text-deep-green mb-6">$49.99</div>
                <ul className="space-y-3 text-sm text-[#4A524D] mb-8">
                  <li className="flex items-center gap-2">✓ Bye Bye Narcissist Book (Foundation)</li>
                  <li className="flex items-center gap-2">✓ Bye Bye Narcissist Workbook (Action)</li>
                </ul>
              </div>
              <button
                onClick={() => alert("Added Book + Workbook Bundle ($49.99) to cart.")}
                className="w-full py-4 border border-deep-green text-deep-green font-semibold rounded-md hover:bg-deep-green hover:text-editorial-white transition-colors"
              >
                Add Essential Bundle — $49.99
              </button>
            </div>

            {/* Bundle 2 */}
            <div className="bg-soft-white border-2 border-deep-green rounded-3xl p-8 md:p-10 flex flex-col justify-between relative shadow-md">
              <span className="absolute -top-3 right-8 bg-deep-green text-cream-logo text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Best Value
              </span>
              <div>
                <span className="text-xs font-bold text-deep-green uppercase tracking-wider block mb-2">Full Recovery System</span>
                <h3 className="font-serif-heading text-3xl text-deep-green mb-3">Complete Collection</h3>
                <div className="text-4xl font-bold text-deep-green mb-6">$119.99</div>
                <ul className="space-y-3 text-sm text-[#4A524D] mb-8">
                  <li className="flex items-center gap-2">✓ Bye Bye Narcissist Book</li>
                  <li className="flex items-center gap-2">✓ Bye Bye Narcissist Workbook</li>
                  <li className="flex items-center gap-2">✓ Colouring Book & Journal</li>
                  <li className="flex items-center gap-2">✓ Affirmation Card Deck</li>
                  <li className="flex items-center gap-2">✓ Poster Set</li>
                </ul>
              </div>
              <button
                onClick={() => alert("Added Complete Collection ($119.99) to cart.")}
                className="w-full py-4 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-colors"
              >
                Add Complete Collection — $119.99
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
