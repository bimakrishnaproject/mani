import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#081d13] text-editorial-white pt-20 pb-10 border-t border-editorial-white/10">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 text-cream-logo font-bold text-2xl tracking-widest mb-4">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#F7ECD6" strokeWidth="2.5" />
              <circle cx="16" cy="16" r="5" fill="#F7ECD6" />
            </svg>
            <span>MANI</span>
          </Link>
          <p className="text-sm font-semibold text-cream-logo mb-3">Emotional Support Made Simple™</p>
          <p className="text-xs text-[#8C9990] max-w-sm leading-relaxed">
            Helping people better understand themselves, navigate life's challenges, and create meaningful change.
          </p>
        </div>

        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-cream-logo block mb-5">
            Explore
          </span>
          <ul className="space-y-3 text-xs text-[#B2BCB5]">
            <li><Link href="#hero" className="hover:text-cream-logo transition-colors">Home</Link></li>
            <li><Link href="#why-mani" className="hover:text-cream-logo transition-colors">Why MANI</Link></li>
            <li><Link href="#collections" className="hover:text-cream-logo transition-colors">Collections</Link></li>
            <li><Link href="#watch-learn" className="hover:text-cream-logo transition-colors">Watch & Learn</Link></li>
            <li><Link href="#app" className="hover:text-cream-logo transition-colors">App</Link></li>
            <li><Link href="#about" className="hover:text-cream-logo transition-colors">About</Link></li>
          </ul>
        </div>

        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-cream-logo block mb-5">
            Collections
          </span>
          <ul className="space-y-3 text-xs text-[#B2BCB5]">
            <li><Link href="#collections" className="hover:text-cream-logo transition-colors">Bye Bye Narcissist</Link></li>
            <li className="text-[#58665B]">Love Done Right — Soon</li>
            <li className="text-[#58665B]">Emotional Intelligence — Soon</li>
          </ul>
        </div>

        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-cream-logo block mb-5">
            Get Involved
          </span>
          <ul className="space-y-3 text-xs text-[#B2BCB5]">
            <li><Link href="#app" className="hover:text-cream-logo transition-colors">Join Beta</Link></li>
            <li><Link href="#community" className="hover:text-cream-logo transition-colors">Join Our Community</Link></li>
            <li><Link href="#about" className="hover:text-cream-logo transition-colors">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto px-6 md:px-12 pt-6 border-t border-editorial-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-[#6C7A70] gap-4">
        <p>&copy; 2026 MANI. All rights reserved.</p>
        <p className="max-w-xl text-center md:text-right leading-relaxed">
          <strong>Disclaimer:</strong> MANI provides educational, informational, and supportive content. MANI does not diagnose, treat, or substitute for professional mental health care.
        </p>
      </div>
    </footer>
  );
}
