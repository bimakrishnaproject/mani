"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (!pathname) return false;
    const baseHref = href.split("#")[0];
    if (baseHref === "/") return pathname === "/";
    if (baseHref === "/collections") {
      return pathname.startsWith("/collections") || pathname.startsWith("/products");
    }
    return pathname.startsWith(baseHref);
  };

  const linkClass = (href: string) =>
    isLinkActive(href)
      ? "text-cream-logo font-bold underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream-logo/60 rounded-xs"
      : "hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-cream-logo/60 rounded-xs";

  return (
    <footer className="bg-[#0E2E1E] text-editorial-white pt-20 pb-12">
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-editorial-white/10">

          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/assets/Mani Logos/mani cream logo.png"
                alt="mani™ Logo"
                className="h-5 md:h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm font-medium text-cream-logo max-w-sm leading-relaxed">
              Emotional Support Made Simple&trade;
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo">Explore</h4>
            <ul className="space-y-2 text-xs text-[#E8F0EC]">
              <li><Link href="/" className={linkClass("/")}>Home</Link></li>
              <li><Link href="/why-mani" className={linkClass("/why-mani")}>Why <strong className="font-bold lowercase">mani</strong></Link></li>
              <li><Link href="/collections" className={linkClass("/collections")}>Collections</Link></li>
              <li><Link href="/watch-learn" className={linkClass("/watch-learn")}>Watch &amp; Learn</Link></li>
              <li><Link href="/app" className={linkClass("/app")}>App</Link></li>
              <li><Link href="/about" className={linkClass("/about")}>About</Link></li>
              <li><Link href="/faq" className={linkClass("/faq")}>FAQ</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo">Collections</h4>
            <ul className="space-y-2 text-xs text-[#E8F0EC]">
              <li><Link href="/collections#featured-collection" className={linkClass("/collections#featured-collection")}>Bye Bye Narcissist</Link></li>
              <li><Link href="/collections#future-collections" className="text-cream-logo/80 hover:text-cream-logo transition-colors">Love Done Right (Coming Soon)</Link></li>
              <li><Link href="/collections#future-collections" className="text-cream-logo/80 hover:text-cream-logo transition-colors">Emotional Intelligence (Coming Soon)</Link></li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo pt-4">Get Involved</h4>
            <ul className="space-y-2 text-xs text-[#E8F0EC]">
              <li><Link href="/join-beta" className={linkClass("/join-beta")}>Join the App Beta</Link></li>
              <li><Link href="/join-community" className={linkClass("/join-community")}>Join Our Community</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo">Legal</h4>
            <ul className="space-y-2 text-xs text-[#E8F0EC]">
              <li><Link href="/privacy" className={linkClass("/privacy")}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={linkClass("/terms")}>Terms of Use</Link></li>
              <li><Link href="/disclaimer" className={linkClass("/disclaimer")}>Disclaimer</Link></li>
              <li><Link href="/refund-policy" className={linkClass("/refund-policy")}>Refund Policy</Link></li>
              <li><Link href="/shipping-policy" className={linkClass("/shipping-policy")}>Shipping Policy</Link></li>
              <li><Link href="/community-guidelines" className={linkClass("/community-guidelines")}>Community Guidelines</Link></li>
              <li><Link href="/beta-terms" className={linkClass("/beta-terms")}>Beta Program Terms</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo">Connect</h4>
            <ul className="space-y-2 text-xs text-[#E8F0EC]">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Reddit</a></li>
              <li><a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Threads</a></li>
              <li><a href="mailto:contact@mymani.ai" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-[#E8F0EC] gap-4">
          <p className="font-medium shrink-0">&copy; 2026 MANI&trade;. All rights reserved.</p>
          <p className="text-[11px] text-[#D8E6DE] leading-relaxed max-w-3xl">
            <strong>Disclaimer:</strong> <strong className="font-bold lowercase">mani</strong>&trade; provides educational and informational content intended to support learning and personal growth. <strong className="font-bold lowercase">mani</strong>&trade; is not therapy, counseling, mental health treatment, crisis support, medical care, or a substitute for professional advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
