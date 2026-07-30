"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const columnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const cols = columnsRef.current;
    if (!footer || !cols) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Staggered column reveal
    const columns = cols.querySelectorAll(".footer-col");
    gsap.set(columns, { opacity: 0, y: 30 });
    gsap.to(columns, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footer,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === footer) st.kill();
      });
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-deep-green text-editorial-white pt-20 pb-12 border-t border-editorial-white/10">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div ref={columnsRef} className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-editorial-white/10">

          {/* Brand Col */}
          <div className="footer-col md:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 text-cream-logo font-bold text-2xl tracking-widest mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="16" cy="16" r="5" fill="currentColor" />
              </svg>
              <span>MANI</span>
            </Link>
            <p className="text-sm text-cream-logo font-medium mb-2">
              Emotional Support Made Simple™
            </p>
            <p className="text-sm text-[#C3CDC6] max-w-sm leading-relaxed mb-6 font-light">
              Helping people better understand themselves, navigate life&apos;s challenges, and create meaningful change.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              {[
                { name: "Instagram", href: "#" },
                { name: "TikTok", href: "#" },
                { name: "YouTube", href: "#" },
                { name: "Reddit", href: "#" },
                { name: "Threads", href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-xs font-medium text-[#C3CDC6] hover:text-cream-logo transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              ))}
            </div>

            <div className="text-xs text-sage-grey">
              © {new Date().getFullYear()} MANI Inc. All rights reserved.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="footer-col">
              <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo mb-4">Explore</h4>
              <ul className="space-y-3 text-sm text-[#C3CDC6]">
                <li><Link href="/" className="hover:text-cream-logo transition-colors">Home</Link></li>
                <li><Link href="/why-mani" className="hover:text-cream-logo transition-colors">Why MANI</Link></li>
                <li><Link href="/collections" className="hover:text-cream-logo transition-colors">Collections</Link></li>
                <li><Link href="/watch-learn" className="hover:text-cream-logo transition-colors">Watch & Learn</Link></li>
                <li><Link href="/#app" className="hover:text-cream-logo transition-colors">App</Link></li>
                <li><Link href="/about" className="hover:text-cream-logo transition-colors">About</Link></li>
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo mb-4">Collections</h4>
              <ul className="space-y-3 text-sm text-[#C3CDC6]">
                <li><Link href="/collections/bye-bye-narcissist" className="hover:text-cream-logo transition-colors">Bye Bye Narcissist</Link></li>
                <li><span className="text-sage-grey">Love Done Right <span className="text-[10px] opacity-60">Coming Soon</span></span></li>
                <li><span className="text-sage-grey">Emotional Intelligence <span className="text-[10px] opacity-60">Coming Soon</span></span></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo mb-4">Get Involved</h4>
              <ul className="space-y-3 text-sm text-[#C3CDC6]">
                <li><Link href="/#app" className="hover:text-cream-logo transition-colors">Join Beta</Link></li>
                <li><Link href="/#community" className="hover:text-cream-logo transition-colors">Join Our Community</Link></li>
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-[#C3CDC6]">
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Privacy Policy</Link></li>
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Terms of Use</Link></li>
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Disclaimer</Link></li>
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Refund Policy</Link></li>
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Shipping Policy</Link></li>
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Community Guidelines</Link></li>
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Beta Program Terms</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="pt-8 text-[11px] text-sage-grey leading-relaxed max-w-4xl">
          <p>
            <strong>Disclaimer:</strong> MANI resources, books, workbooks, videos, and mobile app tools are designed for educational and self-reflection purposes only. MANI is not a substitute for professional clinical therapy, medical diagnosis, or emergency mental health crisis intervention. Most resources are designed for people aged 18 and above. If you are experiencing a mental health emergency, please contact your local healthcare providers or emergency services immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}
