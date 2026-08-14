"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTypewriterNavigation } from "./TypewriterNavigationProvider";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateTo } = useTypewriterNavigation();
  const { totalItems, openCart } = useCart();
  const pathname = usePathname();

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

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    if (href === "/collections") {
      return pathname.startsWith("/collections") || pathname.startsWith("/products");
    }
    if (href === "/watch-learn") {
      return pathname.startsWith("/watch-learn");
    }
    if (href === "/app") {
      return pathname === "/app";
    }
    if (href === "/why-mani") {
      return pathname.startsWith("/why-mani");
    }
    if (href === "/about") {
      return pathname.startsWith("/about");
    }
    return pathname.startsWith(href);
  };

  const navLinkClass = (href: string) => {
    const active = isActive(href);
    return `text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer relative py-1.5 px-3 rounded-full whitespace-nowrap ${
      active
        ? "text-[#0E2E1E] bg-soft-signal-green font-bold shadow-xs after:content-[''] after:absolute after:-bottom-1 after:left-3 after:right-3 after:h-[2px] after:bg-[#0E2E1E] after:rounded-full"
        : "text-[#1C2826] hover:text-[#0E2E1E] hover:bg-mist-grey/40"
    }`;
  };

  const mobileNavLinkClass = (href: string) => {
    const active = isActive(href);
    return `flex items-center justify-between py-3 px-4 rounded-xl text-xl font-serif-heading transition-all ${
      active
        ? "bg-[#0E2E1E] text-cream-logo font-bold shadow-md pl-5 border-l-4 border-emerald-400"
        : "text-[#0E2E1E] hover:bg-mist-grey/30"
    }`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-mist-grey/80 py-2.5 shadow-sm"
          : "bg-transparent py-3 sm:py-5"
          }`}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-4">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/", "INITIALIZING MANI HOME")}
            className="flex items-center cursor-pointer shrink-0"
          >
            <img
              src="/assets/Mani Logos/mani green logo.png"
              alt="MANI™ Logo"
              className="h-5 md:h-7 xl:h-8 w-auto object-contain transition-all duration-300"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-6 2xl:gap-8">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/", "INITIALIZING MANI HOME")}
              className={navLinkClass("/")}
            >
              Home
            </a>
            <a
              href="/collections"
              onClick={(e) => handleNavClick(e, "/collections", "CONNECTING TO MANI COLLECTIONS")}
              className={navLinkClass("/collections")}
            >
              Collections
            </a>
            <a
              href="/watch-learn"
              onClick={(e) => handleNavClick(e, "/watch-learn", "LOADING WATCH & LEARN")}
              className={navLinkClass("/watch-learn")}
            >
              Watch &amp; Learn
            </a>
            <a
              href="/app"
              onClick={(e) => handleNavClick(e, "/app", "LOADING MANI APP")}
              className={navLinkClass("/app")}
            >
              App
            </a>
            <a
              href="/why-mani"
              onClick={(e) => handleNavClick(e, "/why-mani", "LOADING WHY MANI PHILOSOPHY")}
              className={navLinkClass("/why-mani")}
            >
              Why Mani
            </a>
            <a
              href="/about"
              onClick={(e) => handleNavClick(e, "/about", "LOADING ABOUT MANI")}
              className={navLinkClass("/about")}
            >
              About
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
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
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#0E2E1E] text-cream-logo font-bold text-[10px] rounded-full flex items-center justify-center border-2 border-white shadow-md">
                  {totalItems}
                </span>
              )}
            </button>

            <a
              href="/join-community"
              onClick={(e) => handleNavClick(e, "/join-community", "JOINING MANI COMMUNITY")}
              className="hidden xl:inline-flex text-xs font-semibold px-4 py-2.5 bg-[#0E2E1E] text-cream-logo rounded-md hover:bg-[#143d28] transition-colors cursor-pointer whitespace-nowrap"
            >
              Join Our Community
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-ink-black focus:outline-none z-50 relative cursor-pointer"
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
        <div className="fixed inset-0 z-40 bg-editorial-white flex flex-col justify-between p-8 pt-28 lg:hidden overflow-y-auto max-h-screen">
          <nav className="flex flex-col gap-6 text-2xl font-serif-heading">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, "/", "INITIALIZING MANI HOME")}
              className={mobileNavLinkClass("/")}
            >
              Home
            </a>
            <a
              href="/collections"
              onClick={(e) => handleNavClick(e, "/collections", "CONNECTING TO MANI COLLECTIONS")}
              className={mobileNavLinkClass("/collections")}
            >
              Collections
            </a>
            <a
              href="/watch-learn"
              onClick={(e) => handleNavClick(e, "/watch-learn", "LOADING WATCH & LEARN")}
              className={mobileNavLinkClass("/watch-learn")}
            >
              Watch &amp; Learn
            </a>
            <a
              href="/app"
              onClick={(e) => handleNavClick(e, "/app", "LOADING MANI APP")}
              className={mobileNavLinkClass("/app")}
            >
              App
            </a>
            <a
              href="/why-mani"
              onClick={(e) => handleNavClick(e, "/why-mani", "LOADING WHY MANI PHILOSOPHY")}
              className={mobileNavLinkClass("/why-mani")}
            >
              Why Mani
            </a>
            <a
              href="/about"
              onClick={(e) => handleNavClick(e, "/about", "LOADING ABOUT MANI")}
              className={mobileNavLinkClass("/about")}
            >
              About
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
              View Cart ({totalItems})
            </button>

            <a
              href="/join-community"
              onClick={(e) => handleNavClick(e, "/join-community", "JOINING MANI COMMUNITY")}
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
