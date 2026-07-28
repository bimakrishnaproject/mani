import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32 bg-gradient-to-b from-editorial-white via-soft-white/60 to-soft-white min-h-screen flex items-center">
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
              href="/collections"
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

        {/* Professional Editorial Spatial Composition (No Basic Rectangles) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {/* Card 1: Featured Collection Object — Links to /collections/bye-bye-narcissist */}
          <Link
            href="/collections/bye-bye-narcissist"
            className="group relative bg-editorial-white border border-[#0E2E1E]/10 rounded-2xl p-7 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-soft-signal-green/30 rounded-bl-full pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-2.5 py-1 rounded-sm">
                  FEATURED COLLECTION
                </span>
                <span className="text-xs font-semibold text-deep-green group-hover:translate-x-1 transition-transform">
                  View Collection &rarr;
                </span>
              </div>

              {/* Real Book Mockup without basic grey container */}
              <div className="h-[220px] flex items-center justify-center relative my-2 overflow-hidden">
                <Image
                  src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Book.png"
                  alt="Bye Bye Narcissist Book"
                  width={220}
                  height={200}
                  className="w-auto h-[190px] object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-mist-grey">
              <h3 className="font-serif-heading text-2xl text-deep-green group-hover:text-[#143d28] transition-colors mb-1">
                Bye Bye Narcissist
              </h3>
              <p className="text-xs text-[#626A64]">
                5-Resource Recovery System • <span className="font-semibold text-deep-green">$119.99</span>
              </p>
            </div>
          </Link>

          {/* Card 2: Watch & Learn Video Frame — Links to /watch-learn */}
          <Link
            href="/watch-learn"
            className="group relative bg-editorial-white border border-[#0E2E1E]/10 rounded-2xl p-7 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-2.5 py-1 rounded-sm">
                  WATCH & LEARN
                </span>
                <span className="text-xs font-semibold text-deep-green group-hover:translate-x-1 transition-transform">
                  Browse 500+ &rarr;
                </span>
              </div>

              <div className="h-[220px] bg-gradient-to-br from-[#1e3a2b] to-[#0e2e1e] rounded-xl relative flex items-center justify-center my-2 overflow-hidden shadow-md">
                <Image
                  src="/assets/Video Thumbnails/How Emotionally Intelligent People Handle Hurt.jpeg"
                  alt="Understanding Boundaries Video"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div className="w-14 h-14 bg-cream-logo text-deep-green rounded-full flex items-center justify-center shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <polygon points="9,6 18,12 9,18" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] font-bold text-cream-logo z-10">
                  <span>EMOTIONAL INTELLIGENCE</span>
                  <span>1:30 min</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-mist-grey">
              <h4 className="font-serif-heading text-2xl text-deep-green group-hover:text-[#143d28] transition-colors mb-1">
                Understanding Boundaries
              </h4>
              <p className="text-xs text-[#626A64]">
                Short Daily Videos • <span className="font-semibold text-deep-green">Free Access</span>
              </p>
            </div>
          </Link>

          {/* Card 3: MANI Beta App Chat Showcase — Links to #app */}
          <Link
            href="#app"
            className="group relative bg-editorial-white border border-[#0E2E1E]/10 rounded-2xl p-7 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-2.5 py-1 rounded-sm">
                  MANI APP • BETA
                </span>
                <span className="text-xs font-semibold text-deep-green group-hover:translate-x-1 transition-transform">
                  Join Beta &rarr;
                </span>
              </div>

              {/* Clean App Conversation Image without white background card */}
              <div className="h-[220px] flex items-center justify-center my-2 relative overflow-hidden">
                <Image
                  src="/assets/Chat Conversation.png"
                  alt="MANI App Chat Conversation"
                  width={200}
                  height={400}
                  className="w-auto h-[210px] object-contain mix-blend-multiply filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-mist-grey">
              <h4 className="font-serif-heading text-2xl text-deep-green group-hover:text-[#143d28] transition-colors mb-1">
                Guided Support
              </h4>
              <p className="text-xs text-[#626A64]">
                Real-time reflection • <span className="font-semibold text-deep-green">Private Beta</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
