import Link from "next/link";
import ChatSimulator from "./ChatSimulator";

export default function HeroSection() {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32 bg-gradient-to-b from-editorial-white to-soft-white min-h-screen flex items-center">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 w-full">
        {/* Editorial Hero Header */}
        <div className="text-center max-w-[840px] mx-auto mb-16">
          <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full mb-6">
            THE LIVING EDITORIAL SYSTEM
          </div>

          <h1 className="font-serif-heading text-5xl sm:text-7xl md:text-8xl text-deep-green leading-[0.95] tracking-tight mb-7">
            Emotional Support<br />
            <span className="font-serif-italic">Made Simple.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#4A524D] leading-relaxed mb-10 max-w-[760px] mx-auto">
            MANI brings together expert-guided collections, daily videos and a new app in development to help you better understand yourself and navigate life's challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#collections"
              className="w-full sm:w-auto px-8 py-4 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-all transform hover:-translate-y-0.5 shadow-sm text-center"
            >
              Explore Collections
            </Link>
            <Link
              href="#app"
              className="w-full sm:w-auto px-8 py-4 border border-ink-black text-ink-black font-semibold rounded-md hover:bg-soft-white transition-all transform hover:-translate-y-0.5 text-center"
            >
              Get Early Access
            </Link>
          </div>
        </div>

        {/* Spatial Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
          {/* Card 1: Featured Collection Product */}
          <div className="bg-editorial-white border border-mist-grey rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-md">
            <div>
              <div className="text-[10px] font-bold tracking-wider text-sage-grey uppercase mb-4">
                FEATURED COLLECTION
              </div>
              <div className="h-[200px] bg-soft-white rounded-lg flex items-center justify-center mb-5 p-4 relative">
                <div className="w-[130px] h-[160px] bg-deep-green rounded-md p-4 text-cream-logo flex flex-col justify-between shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
                  <span className="font-serif-heading text-lg leading-tight">
                    BYE BYE NARCISSIST
                  </span>
                  <span className="text-[9px] uppercase tracking-wider opacity-80">
                    Foundation Guide
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-ink-black mb-1">Bye Bye Narcissist</h3>
              <p className="text-xs text-[#626A64]">5-Resource Recovery System</p>
            </div>
          </div>

          {/* Card 2: Watch & Learn Video Frame */}
          <div className="bg-editorial-white border border-mist-grey rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-md">
            <div>
              <div className="text-[10px] font-bold tracking-wider text-sage-grey uppercase mb-4">
                WATCH & LEARN
              </div>
              <div className="h-[200px] bg-gradient-to-br from-[#1e3a2b] to-[#0e2e1e] rounded-lg relative flex items-center justify-center mb-5 overflow-hidden group cursor-pointer">
                <div className="w-13 h-13 bg-cream-logo rounded-full flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <polygon points="9,6 18,12 9,18" fill="#0E2E1E" />
                  </svg>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] font-bold text-cream-logo">
                  <span>PSYCHOLOGY</span>
                  <span>1:15 min</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-ink-black mb-1">Understanding Boundaries</h4>
              <p className="text-xs text-[#626A64]">500+ Expert-Led Videos</p>
            </div>
          </div>

          {/* Card 3: MANI Beta App Chat Simulator */}
          <div className="bg-editorial-white border border-mist-grey rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-md">
            <div>
              <div className="text-[10px] font-bold tracking-wider text-sage-grey uppercase mb-4">
                MANI APP • BETA
              </div>
              <ChatSimulator />
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-lg text-ink-black mb-1">Guided Support</h4>
              <p className="text-xs text-[#626A64]">Real-time reflection on your phone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
