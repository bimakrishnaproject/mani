"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTypewriterNavigation } from "./TypewriterNavigationProvider";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateTo } = useTypewriterNavigation();
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string, label: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateTo(href, label);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-mist-grey/80 py-2.5 shadow-sm"
          : "bg-transparent py-4 sm:py-5"
          }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/", "INITIALIZING MANI HOME")}
            className="flex items-center cursor-pointer"
          >
            <img
              src="/assets/Mani Logos/mani green logo.png"
              alt="MANI Logo"
              className="h-5 md:h-8 w-auto object-contain transition-all duration-300"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/", "INITIALIZING MANI HOME")}
              className="text-sm font-medium text-ink-black hover:text-[#0E2E1E] transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="/collections"
              onClick={(e) => handleNavClick(e, "/collections", "CONNECTING TO MANI COLLECTIONS")}
              className="text-sm font-medium text-ink-black hover:text-[#0E2E1E] transition-colors cursor-pointer"
            >
              Collections
            </a>
            <a
              href="/watch-learn"
              onClick={(e) => handleNavClick(e, "/watch-learn", "LOADING WATCH & LEARN CINEMA")}
              className="text-sm font-medium text-ink-black hover:text-[#0E2E1E] transition-colors cursor-pointer"
            >
              Watch &amp; Learn
            </a>
            <a
              href="/#app"
              onClick={(e) => handleNavClick(e, "/#app", "OPENING MANI BETA APP SHOWCASE")}
              className="text-sm font-medium text-ink-black hover:text-[#0E2E1E] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>App</span>
              <span className="text-[10px] font-bold tracking-widest uppercase bg-[#0E2E1E] text-cream-logo px-2 py-0.5 rounded-full">
                BETA
              </span>
            </a>
            <a
              href="/why-mani"
              onClick={(e) => handleNavClick(e, "/why-mani", "LOADING WHY MANI PHILOSOPHY")}
              className="text-sm font-medium text-ink-black hover:text-[#0E2E1E] transition-colors cursor-pointer"
            >
              Why MANI
            </a>
            <a
              href="/about"
              onClick={(e) => handleNavClick(e, "/about", "LOADING CLINICAL DOSSIER & FOUNDERS")}
              className="text-sm font-medium text-ink-black hover:text-[#0E2E1E] transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="/faq"
              onClick={(e) => handleNavClick(e, "/faq", "CONNECTING TO SANCTUARY FAQ")}
              className="text-sm font-medium text-ink-black hover:text-[#0E2E1E] transition-colors cursor-pointer"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Cart Drawer Trigger Button */}
            <button
              onClick={openCart}
              className="relative p-2.5 bg-soft-white border border-mist-grey text-[#0E2E1E] rounded-full hover:bg-mist-grey/50 transition-colors flex items-center justify-center cursor-pointer shadow-xs"
              aria-label="View Shopping Cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#0E2E1E] text-cream-logo font-bold text-[10px] rounded-full flex items-center justify-center border-2 border-white shadow-md animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            <a
              href="/#community"
              onClick={(e) => handleNavClick(e, "/#community", "JOINING MANI COMMUNITY")}
              className="hidden md:inline-flex text-xs font-semibold px-4 py-2.5 bg-[#0E2E1E] text-cream-logo rounded-md hover:bg-[#143d28] transition-colors cursor-pointer"
            >
              Join Our Community
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-ink-black focus:outline-none z-50 relative"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <div className="space-y-1.5">
                  <div className="w-6 h-0.5 bg-ink-black transition-all"></div>
                  <div className="w-6 h-0.5 bg-ink-black transition-all"></div>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-editorial-white flex flex-col justify-between p-8 pt-28 md:hidden overflow-y-auto max-h-screen">
          <nav className="flex flex-col gap-6 text-2xl font-serif-heading">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/", "INITIALIZING MANI HOME")}
              className="text-[#0E2E1E]"
            >
              Home
            </a>
            <a
              href="/collections"
              onClick={(e) => handleNavClick(e, "/collections", "CONNECTING TO MANI COLLECTIONS")}
              className="text-[#0E2E1E]"
            >
              Collections
            </a>
            <a
              href="/watch-learn"
              onClick={(e) => handleNavClick(e, "/watch-learn", "LOADING WATCH & LEARN CINEMA")}
              className="text-[#0E2E1E]"
            >
              Watch &amp; Learn
            </a>
            <a
              href="/#app"
              onClick={(e) => handleNavClick(e, "/#app", "OPENING MANI BETA APP SHOWCASE")}
              className="text-[#0E2E1E] flex items-center gap-2"
            >
              <span>App</span>
              <span className="text-xs font-sans font-bold bg-[#0E2E1E] text-cream-logo px-2 py-0.5 rounded-full">
                BETA
              </span>
            </a>
            <a
              href="/why-mani"
              onClick={(e) => handleNavClick(e, "/why-mani", "LOADING WHY MANI PHILOSOPHY")}
              className="text-[#0E2E1E]"
            >
              Why MANI
            </a>
            <a
              href="/about"
              onClick={(e) => handleNavClick(e, "/about", "LOADING CLINICAL DOSSIER & FOUNDERS")}
              className="text-[#0E2E1E]"
            >
              About
            </a>
            <a
              href="/faq"
              onClick={(e) => handleNavClick(e, "/faq", "CONNECTING TO SANCTUARY FAQ")}
              className="text-[#0E2E1E]"
            >
              FAQ
            </a>
          </nav>

          <div className="space-y-4 pt-6 border-t border-mist-grey">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCart();
              }}
              className="w-full py-4 bg-editorial-white text-[#0E2E1E] border border-[#0E2E1E] font-semibold rounded-md text-center text-sm flex items-center justify-center gap-2"
            >
              🛍 View Cart ({totalItems})
            </button>

            <a
              href="/#community"
              onClick={(e) => handleNavClick(e, "/#community", "JOINING MANI COMMUNITY")}
              className="block w-full py-4 bg-[#0E2E1E] text-cream-logo font-semibold rounded-md text-center text-sm"
            >
              Join Our Community
            </a>
          </div>
        </div>
      )}
    </>
  );
}
