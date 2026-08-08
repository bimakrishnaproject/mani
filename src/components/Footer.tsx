"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0E2E1E] text-editorial-white pt-20 pb-12 border-t border-[#183B29]">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-editorial-white/10">

          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/assets/Mani Logos/mani cream logo.png"
                alt="MANI Logo"
                className="h-5 md:h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#C3CDC6] max-w-sm leading-relaxed font-light">
              Emotional Support Made Simple™. Helping people better understand themselves, navigate life&apos;s challenges, and create meaningful change.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo">Explore</h4>
            <ul className="space-y-2 text-xs text-[#C3CDC6]">
              <li><Link href="/" className="hover:text-cream-logo transition-colors">Home</Link></li>
              <li><Link href="/why-mani" className="hover:text-cream-logo transition-colors">Why MANI</Link></li>
              <li><Link href="/collections" className="hover:text-cream-logo transition-colors">Collections</Link></li>
              <li><Link href="/watch-learn" className="hover:text-cream-logo transition-colors">Watch &amp; Learn</Link></li>
              <li><Link href="/join-beta" className="hover:text-cream-logo transition-colors">App</Link></li>
              <li><Link href="/about" className="hover:text-cream-logo transition-colors">About</Link></li>
              <li><Link href="/faq" className="hover:text-cream-logo transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo">Collections</h4>
            <ul className="space-y-2 text-xs text-[#C3CDC6]">
              <li><Link href="/collections/bye-bye-narcissist" className="hover:text-cream-logo transition-colors">Bye Bye Narcissist</Link></li>
              <li><span className="text-[#C3CDC6]/60">Love Done Right — Coming Soon</span></li>
              <li><span className="text-[#C3CDC6]/60">Emotional Intelligence — Coming Soon</span></li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo pt-4">Get Involved</h4>
            <ul className="space-y-2 text-xs text-[#C3CDC6]">
              <li><Link href="/join-beta" className="hover:text-cream-logo transition-colors">Join Beta</Link></li>
              <li><Link href="/join-community" className="hover:text-cream-logo transition-colors">Join Our Community</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo">Legal</h4>
            <ul className="space-y-2 text-xs text-[#C3CDC6]">
              <li><Link href="/privacy" className="hover:text-cream-logo transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cream-logo transition-colors">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-cream-logo transition-colors">Disclaimer</Link></li>
              <li><Link href="/refund-policy" className="hover:text-cream-logo transition-colors">Refund Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-cream-logo transition-colors">Shipping Policy</Link></li>
              <li><Link href="/community-guidelines" className="hover:text-cream-logo transition-colors">Community Guidelines</Link></li>
              <li><Link href="/beta-terms" className="hover:text-cream-logo transition-colors">Beta Program Terms</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo">Social</h4>
            <ul className="space-y-2 text-xs text-[#C3CDC6]">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream-logo transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream-logo transition-colors">TikTok</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream-logo transition-colors">YouTube</a></li>
              <li><a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream-logo transition-colors">Reddit</a></li>
              <li><a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="hover:text-cream-logo transition-colors">Threads</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#C3CDC6] gap-4">
          <p>&copy; {new Date().getFullYear()} MANI. All rights reserved. Emotional Support Made Simple&trade;.</p>
          <p className="text-[11px] text-sage-grey italic">
            MANI is an educational and supportive platform, not a substitute for therapy or emergency crisis care.
          </p>
        </div>
      </div>
    </footer>
  );
}
