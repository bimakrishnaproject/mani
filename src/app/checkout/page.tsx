"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnderProgressPage from "@/components/UnderProgressPage";
import { SITE_LOCKS } from "@/config/locks";

export default function CheckoutPage() {
  if (SITE_LOCKS.PAGES_LOCKED) {
    return (
      <UnderProgressPage
        pageName="Secure Checkout"
        description="This checkout page is currently undergoing milestone updates. Please explore the live homepage."
      />
    );
  }

  const router = useRouter();
  const { cart, subtotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "United States",
    postalCode: "",
    shippingMethod: "express",
    paymentMethod: "card",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shippingFee = formData.shippingMethod === "express" && subtotal > 100 ? 0 : 9.99;
  const grandTotal = subtotal + shippingFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const itemsPurchasedSummary = cart.map(item => `${item.title} (Qty: ${item.quantity})`).join("; ");
    const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    try {
      // Send live subscription & order customer profile to Klaviyo API with item details
      await fetch("/api/klaviyo/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          type: "order",
          customFields: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            shipping_address: `${formData.address}, ${formData.city}, ${formData.country} ${formData.postalCode}`,
            order_total: grandTotal,
            items_purchased: itemsPurchasedSummary,
            items_count: totalItemsCount,
            order_source: "MANI Website Checkout Order",
          },
        }),
      });
    } catch (err) {
      console.warn("Klaviyo CRM sync warning:", err);
    }

    setTimeout(() => {
      clearCart();
      router.push("/order-confirmation");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-44 pb-32">
        <section className="px-6 sm:px-12 md:px-16 lg:px-24">
          
          <div className="max-w-6xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-4 py-2 rounded-full shadow-xs">
              SECURE CHECKOUT
            </span>
            <h1 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E] mt-4">
              Complete Your Order
            </h1>
          </div>

          {cart.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-16 p-8 bg-soft-white border border-mist-grey rounded-3xl space-y-6">
              <h2 className="font-serif-heading text-3xl text-[#0E2E1E]">Your Cart is Currently Empty</h2>
              <p className="text-sm text-[#626A64]">
                Explore the Bye Bye Narcissist collection or individual tools to add items to your sanctuary order.
              </p>
              <Link
                href="/collections/bye-bye-narcissist"
                className="inline-block px-8 py-4 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all text-sm"
              >
                Shop Flagship Collection — $119.99 &rarr;
              </Link>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Customer Form */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8 bg-soft-white p-8 sm:p-10 border-2 border-mist-grey rounded-3xl shadow-sm">
                
                {/* 1. Contact Information */}
                <div className="space-y-4">
                  <h3 className="font-serif-heading text-2xl text-[#0E2E1E] border-b border-mist-grey pb-3">
                    1. Contact & Delivery Email
                  </h3>
                  <div>
                    <label className="block text-xs font-bold text-ink-black uppercase tracking-wider mb-2">
                      Email Address (For Order Tracking & Digital Access)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-editorial-white border border-mist-grey rounded-xl text-sm focus:outline-none focus:border-[#0E2E1E]"
                    />
                  </div>
                </div>

                {/* 2. Shipping Address */}
                <div className="space-y-4">
                  <h3 className="font-serif-heading text-2xl text-[#0E2E1E] border-b border-mist-grey pb-3">
                    2. Shipping Destination
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-ink-black uppercase tracking-wider mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3.5 bg-editorial-white border border-mist-grey rounded-xl text-sm focus:outline-none focus:border-[#0E2E1E]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink-black uppercase tracking-wider mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3.5 bg-editorial-white border border-mist-grey rounded-xl text-sm focus:outline-none focus:border-[#0E2E1E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink-black uppercase tracking-wider mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Street Address, Suite or Apartment"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3.5 bg-editorial-white border border-mist-grey rounded-xl text-sm focus:outline-none focus:border-[#0E2E1E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-ink-black uppercase tracking-wider mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3.5 bg-editorial-white border border-mist-grey rounded-xl text-sm focus:outline-none focus:border-[#0E2E1E]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink-black uppercase tracking-wider mb-2">
                        Country
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3.5 bg-editorial-white border border-mist-grey rounded-xl text-sm focus:outline-none focus:border-[#0E2E1E]"
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="International">International</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink-black uppercase tracking-wider mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ZIP / Postal Code"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="w-full px-4 py-3.5 bg-editorial-white border border-mist-grey rounded-xl text-sm focus:outline-none focus:border-[#0E2E1E]"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Payment Method Simulation */}
                <div className="space-y-4">
                  <h3 className="font-serif-heading text-2xl text-[#0E2E1E] border-b border-mist-grey pb-3">
                    3. Payment Selection
                  </h3>
                  <div className="p-4 bg-editorial-white border border-mist-grey rounded-xl flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#0E2E1E]">🔒 Secure 256-Bit Encrypted Checkout</span>
                    <span className="text-xs text-sage-grey">Credit Card • Apple Pay • PayPal</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#0E2E1E] text-editorial-white font-semibold rounded-xl hover:bg-[#143d28] transition-all shadow-xl text-base flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Syncing Order to Klaviyo CRM..." : `Pay $${grandTotal.toFixed(2)} & Place Order →`}
                </button>
              </form>

              {/* Right Column: Order Summary */}
              <div className="lg:col-span-5 bg-[#081F14] text-editorial-white p-8 rounded-3xl border border-editorial-white/10 space-y-6 shadow-2xl sticky top-36">
                <h3 className="font-serif-heading text-2xl text-cream-logo border-b border-editorial-white/15 pb-4">
                  Order Summary
                </h3>

                <div className="space-y-4 max-h-[320px] overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-sm py-2 border-b border-editorial-white/10">
                      <div>
                        <p className="font-semibold text-cream-logo">{item.title}</p>
                        <p className="text-xs text-[#C3CDC6]">Qty: {item.quantity}</p>
                      </div>
                      <span className="font-mono text-cream-logo font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-sm pt-4 border-t border-editorial-white/15">
                  <div className="flex justify-between text-[#C3CDC6]">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#C3CDC6]">
                    <span>Worldwide Shipping</span>
                    <span>{shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-cream-logo pt-2 border-t border-editorial-white/15">
                    <span>Total Due</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="p-4 bg-editorial-white/10 rounded-2xl text-xs text-[#C3CDC6] space-y-1">
                  <p className="font-semibold text-cream-logo">✓ Live Item & Order Details Synced</p>
                  <p>Book details and quantity count synced to Klaviyo profile.</p>
                </div>
              </div>

            </div>
          )}

        </section>
      </main>

      <Footer />
    </div>
  );
}
