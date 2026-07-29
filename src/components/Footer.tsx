import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-green text-editorial-white pt-20 pb-12 border-t border-editorial-white/10">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-editorial-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 text-cream-logo font-bold text-2xl tracking-widest mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="16" cy="16" r="5" fill="currentColor" />
              </svg>
              <span>MANI</span>
            </Link>
            <p className="text-sm text-[#C3CDC6] max-w-sm leading-relaxed mb-6 font-light">
              Emotional support made simple. Bringing together physical collections, expert daily videos, and thoughtful mobile technology.
            </p>
            <div className="text-xs text-sage-grey">
              © {new Date().getFullYear()} MANI Inc. All rights reserved.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo mb-4">Ecosystem</h4>
              <ul className="space-y-3 text-sm text-[#C3CDC6]">
                <li><Link href="/collections" className="hover:text-cream-logo transition-colors">Collections</Link></li>
                <li><Link href="/collections/bye-bye-narcissist" className="hover:text-cream-logo transition-colors">Bye Bye Narcissist</Link></li>
                <li><Link href="/watch-learn" className="hover:text-cream-logo transition-colors">Watch & Learn</Link></li>
                <li><Link href="/#app" className="hover:text-cream-logo transition-colors">MANI App (Beta)</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-[#C3CDC6]">
                <li><Link href="/why-mani" className="hover:text-cream-logo transition-colors">Why MANI</Link></li>
                <li><Link href="/about" className="hover:text-cream-logo transition-colors">About Us & Team</Link></li>
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">FAQ</Link></li>
                <li><Link href="/#community" className="hover:text-cream-logo transition-colors">Join Community</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-cream-logo mb-4">Legal & Support</h4>
              <ul className="space-y-3 text-sm text-[#C3CDC6]">
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Privacy Policy</Link></li>
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Terms of Service</Link></li>
                <li><Link href="/faq" className="hover:text-cream-logo transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="pt-8 text-[11px] text-sage-grey leading-relaxed max-w-4xl">
          <p>
            <strong>Disclaimer:</strong> MANI resources, books, workbooks, micro-videos, and mobile app tools are designed for educational and self-reflection purposes only. MANI is not a substitute for professional clinical therapy, medical diagnosis, or emergency mental health crisis intervention. If you are experiencing a mental health emergency, please contact your local healthcare providers or emergency services immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}
