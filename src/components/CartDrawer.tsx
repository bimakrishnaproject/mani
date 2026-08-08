"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import UnderProgressModal from "./UnderProgressModal";
import { SITE_LOCKS } from "@/config/locks";

export default function CartDrawer() {
  const router = useRouter();
  const { cart, isOpen, closeCart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const [showProgressModal, setShowProgressModal] = useState(false);

  const freeShippingThreshold = 100;
  const shippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = Math.max(freeShippingThreshold - subtotal, 0);

  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    if (SITE_LOCKS.ACTIONS_LOCKED) {
      setShowProgressModal(true);
      return;
    }
    closeCart();
    router.push("/checkout");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex justify-end overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="absolute inset-0 bg-ink-black/80 backdrop-blur-md"
          />

          {/* Slide-Over Panel — SPACIOUS 580PX */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative w-full sm:w-[540px] md:w-[600px] bg-[#05150D] text-editorial-white h-full shadow-2xl flex flex-col justify-between z-10 border-l border-editorial-white/20"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-editorial-white/15 flex items-center justify-between bg-[#081F14]">
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cream-logo">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="font-serif-heading text-2xl sm:text-3xl text-cream-logo">Your Cart</span>
                <span className="text-xs font-bold bg-cream-logo text-[#0E2E1E] px-3.5 py-1 rounded-full shadow-md">
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="w-10 h-10 rounded-full bg-editorial-white/10 text-cream-logo flex items-center justify-center hover:bg-editorial-white/20 transition-colors text-base font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="px-6 sm:px-8 py-3.5 bg-[#081F14]/90 border-b border-editorial-white/10">
              <div className="flex justify-between items-center text-xs mb-2 font-medium">
                {remainingForFreeShipping > 0 ? (
                  <span className="text-[#C3CDC6]">
                    Add <strong className="text-cream-logo font-serif-heading font-semibold text-sm">${remainingForFreeShipping.toFixed(2)}</strong> more for Free Shipping
                  </span>
                ) : (
                  <span className="text-cream-logo font-semibold flex items-center gap-1.5">
                    ✓ Unlocked Free Express Shipping!
                  </span>
                )}
                <span className="text-sage-grey text-[11px] font-mono">{Math.round(shippingProgress)}%</span>
              </div>
              <div className="w-full bg-editorial-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-cream-logo h-full transition-all duration-500 rounded-full shadow-[0_0_12px_rgba(247,236,214,0.6)]"
                  style={{ width: `${shippingProgress}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="p-6 sm:p-8 flex-1 overflow-y-auto space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-editorial-white/5 border border-editorial-white/10 flex items-center justify-center mx-auto text-sage-grey text-2xl">
                    🛍️
                  </div>
                  <h3 className="font-serif-heading text-2xl text-cream-logo">Your Cart is Empty</h3>
                  <p className="text-xs text-sage-grey max-w-xs mx-auto leading-relaxed">
                    Explore our Bye Bye Narcissist collection to start your journey.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-editorial-white/5 border border-editorial-white/10 flex gap-5 items-center hover:border-editorial-white/20 transition-all shadow-md"
                  >
                    {/* Item Image */}
                    <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-editorial-white border border-editorial-white/15 flex-shrink-0 flex items-center justify-center p-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={90}
                        height={110}
                        quality={100}
                        priority
                        className="w-full h-full object-contain drop-shadow-md"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          {item.badge && (
                            <span className="text-[10px] font-bold tracking-widest text-[#0E2E1E] bg-soft-signal-green px-2.5 py-0.5 rounded-full inline-block mb-1">
                              {item.badge}
                            </span>
                          )}
                          <h4 className="font-serif-heading text-lg sm:text-xl text-cream-logo leading-tight">
                            {item.title}
                          </h4>
                          {item.subtitle && (
                            <p className="text-xs text-sage-grey italic line-clamp-1">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-sage-grey hover:text-red-400 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-3 bg-editorial-white/10 border border-editorial-white/15 rounded-lg px-3 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-xs font-bold text-cream-logo hover:text-white px-1"
                          >
                            -
                          </button>
                          <span className="text-xs font-mono font-bold text-cream-logo">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-xs font-bold text-cream-logo hover:text-white px-1"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-serif-heading text-lg text-cream-logo font-bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cart.length > 0 && (
              <div className="p-6 sm:p-8 bg-[#081F14] border-t border-editorial-white/15 space-y-5">
                <div className="space-y-2 text-xs text-[#C3CDC6]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-cream-logo font-serif-heading text-lg">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Shipping</span>
                    <span className="text-cream-logo">{remainingForFreeShipping === 0 ? "FREE" : "$4.99"}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-editorial-white/15 flex justify-between items-baseline">
                  <span className="text-base font-bold text-cream-logo">Total</span>
                  <span className="text-4xl font-serif-heading text-cream-logo">
                    ${(subtotal + (remainingForFreeShipping === 0 ? 0 : 4.99)).toFixed(2)}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  onClick={handleCheckout}
                  className="w-full py-5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all transform hover:scale-[1.01] shadow-2xl text-base flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  Proceed to Checkout →
                </Link>

                <p className="text-[11px] text-center text-sage-grey">
                  🔒 256-Bit SSL Encrypted • 30-Day Money-Back Guarantee
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
      <UnderProgressModal
        isOpen={showProgressModal}
        onClose={() => setShowProgressModal(false)}
        title="🔒 Checkout Action Under Progress"
        description="Checkout functionality is currently under development. Please explore the homepage."
      />
    </AnimatePresence>
  );
}
