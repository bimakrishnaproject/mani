"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link href="/" className="flex items-center gap-2.5 text-deep-green font-bold text-xl tracking-widest">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="16" cy="16" r="5" fill="currentColor" />
            </svg>
            <span>MANI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            <Link href="/" className="text-sm font-medium text-ink-black hover:text-deep-green transition-colors">
              Home
            </Link>
            <Link href="/collections" className="text-sm font-medium text-ink-black hover:text-deep-green transition-colors">
              Collections
            </Link>
            <Link href="/watch-learn" className="text-sm font-medium text-ink-black hover:text-deep-green transition-colors">
              Watch & Learn
            </Link>
            <Link href="/#app" className="text-sm font-medium text-ink-black hover:text-deep-green transition-colors flex items-center gap-1.5">
              App <span className="text-[9px] font-bold uppercase bg-soft-signal-green text-deep-green px-1.5 py-0.5 rounded-sm">Beta</span>
            </Link>
            <Link href="/#why-mani" className="text-sm font-medium text-ink-black hover:text-deep-green transition-colors">
              Why MANI
            </Link>
            <Link href="/#about" className="text-sm font-medium text-ink-black hover:text-deep-green transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#community"
              className="hidden md:inline-flex text-xs font-semibold px-4 py-2.5 bg-deep-green text-cream-logo rounded-md hover:bg-[#143d28] transition-colors"
            >
              Join Our Community
            </Link>

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
        <div className="fixed inset-0 z-40 bg-editorial-white flex flex-col justify-center px-8 md:hidden">
          <nav className="flex flex-col gap-6 text-2xl font-serif-heading text-deep-green">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/collections" onClick={() => setMobileMenuOpen(false)}>Collections</Link>
            <Link href="/watch-learn" onClick={() => setMobileMenuOpen(false)}>Watch & Learn</Link>
            <Link href="/#app" onClick={() => setMobileMenuOpen(false)}>The MANI App</Link>
            <Link href="/#why-mani" onClick={() => setMobileMenuOpen(false)}>Why MANI</Link>
            <Link href="/#about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/#community" className="text-deep-green font-sans text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>
              Join Our Community &rarr;
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
