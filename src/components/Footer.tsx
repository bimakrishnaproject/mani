"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0E2E1E] text-editorial-white pt-20 pb-12 border-t border-[#183B29]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-editorial-white/10">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/assets/Mani Logos/mani cream logo.png"
                alt="MANI Logo"
                className="h-5 md:h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#C3CDC6] max-w-sm leading-relaxed font-light">
              Emotional Support Made Simple™. Bringing together expert-guided collections, daily educational videos, and a guided app to help you better understand yourself.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cream-logo bg-editorial-white/10 px-3 py-1 rounded-full">
                Sanctuary & Privacy Standards
              </span>
            </div>
          </div>

          {/* Navigation Column 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo">Navigation</h4>
            <ul className="space-y-2 text-xs text-[#C3CDC6]">
              <li><Link href="/" className="hover:text-cream-logo transition-colors">Home</Link></li>
              <li><Link href="/collections" className="hover:text-cream-logo transition-colors">Collections Directory</Link></li>
              <li><Link href="/collections/bye-bye-narcissist" className="hover:text-cream-logo transition-colors">Bye Bye Narcissist Flagship</Link></li>
              <li><Link href="/watch-learn" className="hover:text-cream-logo transition-colors">Watch & Learn Cinema</Link></li>
              <li><Link href="/join-beta" className="hover:text-cream-logo transition-colors">MANI App Beta Program</Link></li>
              <li><Link href="/why-mani" className="hover:text-cream-logo transition-colors">Why MANI Manifesto</Link></li>
              <li><Link href="/about" className="hover:text-cream-logo transition-colors">About & Clinical Team</Link></li>
              <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Sanctuary FAQ</Link></li>
            </ul>
          </div>

          {/* Legal Column 2 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo">Legal & Sanctuary Policies</h4>
            <ul className="space-y-2 text-xs text-[#C3CDC6]">
              <li><Link href="/disclaimer" className="hover:text-cream-logo transition-colors">Clinical & Medical Disclaimer</Link></li>
              <li><Link href="/privacy" className="hover:text-cream-logo transition-colors">Privacy & Data Sanctuary Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cream-logo transition-colors">Terms of Use</Link></li>
              <li><Link href="/refund-policy" className="hover:text-cream-logo transition-colors">30-Day Sanctuary Refund Guarantee</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-cream-logo transition-colors">Shipping & Delivery Policy</Link></li>
              <li><Link href="/community-guidelines" className="hover:text-cream-logo transition-colors">Community Guidelines</Link></li>
              <li><Link href="/beta-terms" className="hover:text-cream-logo transition-colors">Beta Program Terms</Link></li>
              <li><Link href="/join-community" className="hover:text-cream-logo transition-colors">Join Our Community</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C3CDC6] gap-4">
          <p>© {new Date().getFullYear()} MANI. All rights reserved. Emotional Support Made Simple™.</p>
          <p className="text-[11px] text-sage-grey italic">
            MANI is an educational and supportive platform, not a substitute for therapy or emergency crisis care.
          </p>
        </div>
      </div>
    </footer>
  );
}
