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

          {/* Slide-Over Panel - SPACIOUS 580PX */}
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
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            {/* Cart Items List */}
            <div className="p-6 sm:p-8 flex-1 overflow-y-auto space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-editorial-white/5 border border-editorial-white/10 flex items-center justify-center mx-auto text-cream-logo/70">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </div>
                  <h3 className="font-serif-heading text-2xl text-cream-logo">Your Cart is Empty</h3>
                  <p className="text-xs text-[#E8F0EC] max-w-xs mx-auto leading-relaxed">
                    You haven&apos;t added any items to your cart yet.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/collections"
                      onClick={closeCart}
                      className="inline-block px-6 py-2.5 bg-cream-logo text-[#0E2E1E] text-xs font-semibold rounded-xl hover:bg-[#f2e1bd] transition-colors"
                    >
                      Browse Collections
                    </Link>
                  </div>
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
                            <p className="text-xs text-[#D8E6DE] italic line-clamp-1">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-cream-logo/70 hover:text-red-400 transition-colors p-1"
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
                <div className="space-y-2 text-xs text-[#E8F0EC]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-cream-logo font-serif-heading text-lg">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#D8E6DE]">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-editorial-white/15 flex justify-between items-baseline">
                  <span className="text-base font-bold text-cream-logo">Total</span>
                  <span className="text-4xl font-serif-heading text-cream-logo">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  onClick={handleCheckout}
                  className="w-full py-5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-[#f2e1bd] transition-all transform hover:scale-[1.01] shadow-2xl text-base flex items-center justify-center cursor-pointer text-center"
                >
                  Proceed to Checkout
                </Link>

                <p className="text-[11px] text-center text-[#D8E6DE]">
                  Shipping and taxes calculated during checkout
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
