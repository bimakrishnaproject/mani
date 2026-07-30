"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTypewriterNavigation } from "./TypewriterNavigationProvider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateTo } = useTypewriterNavigation();

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-mist-grey py-3 shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => handleNavClick(e, "/", "INITIALIZING MANI HOME")}
            className="flex items-center gap-2.5 text-[#0E2E1E] font-bold text-xl tracking-widest cursor-pointer"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="16" cy="16" r="5" fill="currentColor" />
            </svg>
            <span>MANI</span>
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
              onClick={(e) => handleNavClick(e, "/watch-learn", "OPENING WATCH & LEARN CINEMA LIBRARY")}
              className="text-sm font-medium text-ink-black hover:text-[#0E2E1E] transition-colors cursor-pointer"
            >
              Watch & Learn
            </a>
            <a
              href="/#app"
              onClick={(e) => handleNavClick(e, "/#app", "OPENING MANI APP BETA SECTION")}
              className="text-sm font-medium text-ink-black hover:text-[#0E2E1E] transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              App <span className="text-[9px] font-bold uppercase bg-soft-signal-green text-[#0E2E1E] px-1.5 py-0.5 rounded-sm">Beta</span>
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

          <div className="flex items-center gap-4">
            <a
              href="/#community"
              onClick={(e) => handleNavClick(e, "/#community", "JOINING MANI COMMUNITY")}
              className="hidden md:inline-flex text-xs font-semibold px-4 py-2.5 bg-[#0E2E1E] text-cream-logo rounded-md hover:bg-[#143d28] transition-colors cursor-pointer"
            >
              Join Our Community
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ink-black focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <div className="w-6 h-0.5 bg-ink-black mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-ink-black"></div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0E2E1E] text-editorial-white pt-28 px-8 flex flex-col justify-between pb-12">
          <nav className="flex flex-col gap-6 text-2xl font-serif-heading">
            <a href="/" onClick={(e) => handleNavClick(e, "/", "INITIALIZING MANI HOME")} className="text-cream-logo">
              Home
            </a>
            <a href="/collections" onClick={(e) => handleNavClick(e, "/collections", "CONNECTING TO MANI COLLECTIONS")} className="hover:text-cream-logo">
              Collections
            </a>
            <a href="/watch-learn" onClick={(e) => handleNavClick(e, "/watch-learn", "OPENING WATCH & LEARN CINEMA LIBRARY")} className="hover:text-cream-logo">
              Watch & Learn
            </a>
            <a href="/#app" onClick={(e) => handleNavClick(e, "/#app", "OPENING MANI APP BETA SECTION")} className="hover:text-cream-logo">
              App Beta
            </a>
            <a href="/why-mani" onClick={(e) => handleNavClick(e, "/why-mani", "LOADING WHY MANI PHILOSOPHY")} className="hover:text-cream-logo">
              Why MANI
            </a>
            <a href="/about" onClick={(e) => handleNavClick(e, "/about", "LOADING CLINICAL DOSSIER")} className="hover:text-cream-logo">
              About
            </a>
            <a href="/faq" onClick={(e) => handleNavClick(e, "/faq", "CONNECTING TO SANCTUARY FAQ")} className="hover:text-cream-logo">
              FAQ
            </a>
          </nav>

          <div className="pt-8 border-t border-editorial-white/20 space-y-4">
            <a
              href="/#community"
              onClick={(e) => handleNavClick(e, "/#community", "JOINING MANI COMMUNITY")}
              className="block w-full py-4 text-center bg-cream-logo text-[#0E2E1E] font-semibold rounded-md text-base"
            >
              Join Our Community
            </a>
          </div>
        </div>
      )}
    </>
  );
}
