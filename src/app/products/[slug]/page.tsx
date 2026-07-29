"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BYE_BYE_NARCISSIST_PRODUCTS } from "@/data/collections";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const product = BYE_BYE_NARCISSIST_PRODUCTS.find(
    (p) => p.slug === resolvedParams.slug
  );

  if (!product) {
    notFound();
  }

  const otherProducts = BYE_BYE_NARCISSIST_PRODUCTS.filter(
    (p) => p.slug !== product.slug
  );

  return (
    <div className="min-h-screen flex flex-col bg-editorial-white selection:bg-soft-signal-green selection:text-deep-green">
      <Header />

      <main className="flex-grow pt-32 pb-28 md:pt-40 md:pb-36">
        {/* Breadcrumb Navigation */}
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-8">
          <nav className="flex items-center gap-2 text-xs text-sage-grey font-medium">
            <Link href="/collections" className="hover:text-deep-green transition-colors">
              Collections
            </Link>
            <span>/</span>
            <Link href="/collections/bye-bye-narcissist" className="hover:text-deep-green transition-colors">
              Bye Bye Narcissist
            </Link>
            <span>/</span>
            <span className="text-deep-green font-semibold">{product.name}</span>
          </nav>
        </div>

        {/* Product Hero */}
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-mist-grey/80 bg-editorial-white p-6 flex justify-center items-center">
              <Image
                src={product.mockupImage}
                alt={product.name}
                width={520}
                height={400}
                className="w-full h-auto object-contain max-h-[420px] drop-shadow-2xl"
                priority
              />
            </div>

            {/* Product Details */}
            <div>
              <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full mb-4">
                {product.role} — {product.format}
              </div>

              <h1 className="font-serif-heading text-4xl sm:text-6xl text-deep-green mb-4 leading-tight">
                {product.name}
              </h1>

              <div className="text-3xl font-bold text-deep-green mb-6">
                ${product.price} <span className="text-xs font-normal text-sage-grey">USD</span>
              </div>

              <p className="text-base sm:text-lg text-[#4A524D] leading-relaxed mb-8">
                {product.description}
              </p>

              {/* What it helps with */}
              <div className="p-6 bg-soft-white border border-mist-grey rounded-2xl mb-8">
                <span className="text-xs font-bold text-deep-green uppercase tracking-wider block mb-3">
                  What this resource helps with:
                </span>
                <div className="space-y-2.5">
                  {product.helpsWith.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-ink-black">
                      <span className="w-2 h-2 bg-deep-green rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => alert(`Added ${product.name} ($${product.price}) to cart.`)}
                  className="flex-grow py-4 px-8 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-colors text-center"
                >
                  Add to Cart — ${product.price}
                </button>
                <Link
                  href="/collections/bye-bye-narcissist#bundles"
                  className="py-4 px-6 border border-deep-green text-deep-green font-semibold rounded-md hover:bg-soft-white transition-colors text-center text-sm"
                >
                  View Bundle Savings
                </Link>
              </div>

              <div className="text-xs text-sage-grey space-y-1">
                <p>✓ Physical product shipped worldwide in discreet packaging</p>
                <p>✓ Part of the 5-resource Bye Bye Narcissist collection system</p>
              </div>
            </div>
          </div>
        </div>

        {/* Collection Bundle Banner */}
        <section className="bg-deep-green text-editorial-white py-16 mb-24">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-sage-grey block mb-3">
              RECOMMENDED SYSTEM
            </span>
            <h2 className="font-serif-heading text-3xl md:text-5xl text-cream-logo mb-6">
              Get the Complete 5-Resource Collection & Save
            </h2>
            <p className="text-base text-[#C3CDC6] max-w-xl mx-auto mb-8">
              Save over $25 when you buy the complete Bye Bye Narcissist recovery system together.
            </p>
            <Link
              href="/collections/bye-bye-narcissist"
              className="inline-flex px-8 py-4 bg-cream-logo text-deep-green font-semibold rounded-md hover:bg-[#f2e1bd] transition-colors"
            >
              Shop Complete Collection — $119.99
            </Link>
          </div>
        </section>

        {/* Other Products in Collection */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
            MORE FROM THIS COLLECTION
          </div>
          <h2 className="font-serif-heading text-3xl md:text-5xl text-deep-green mb-10">
            Other Resources in Bye Bye Narcissist
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="bg-editorial-white border border-mist-grey rounded-2xl p-6 flex flex-col justify-between group hover:shadow-xl transition-all"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-soft-white p-4 flex items-center justify-center">
                    <Image
                      src={item.mockupImage}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="object-contain max-h-[160px] group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-deep-green bg-soft-signal-green px-2 py-0.5 rounded-sm uppercase inline-block mb-2">
                    {item.role}
                  </span>
                  <h3 className="font-serif-heading text-xl text-deep-green group-hover:text-[#143d28] mb-2 leading-snug">
                    {item.name}
                  </h3>
                </div>
                <div className="text-lg font-bold text-deep-green pt-3 border-t border-mist-grey">
                  ${item.price}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
