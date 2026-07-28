import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-36 bg-gradient-to-b from-editorial-white via-soft-white/60 to-soft-white min-h-screen flex items-center">
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

          <p className="text-lg sm:text-xl md:text-2xl text-[#4A524D] leading-relaxed mb-10 max-w-[760px] mx-auto font-light">
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

        {/* Spatial Editorial Composition (3 Distinct Premium Modules) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mt-14 items-stretch">
          
          {/* Module 1: Featured Collection (Light Studio Bleed) */}
          <Link
            href="/collections/bye-bye-narcissist"
            className="md:col-span-4 group relative bg-editorial-white border border-mist-grey rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3 py-1 rounded-full">
                  01 / COLLECTION
                </span>
                <span className="text-xs font-semibold text-deep-green opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Explore &rarr;
                </span>
              </div>

              {/* Full Collection Render Image */}
              <div className="h-[240px] flex items-center justify-center relative my-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#F7F8F6] to-[#E9ECE8] p-4">
                <Image
                  src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
                  alt="Bye Bye Narcissist Collection"
                  width={340}
                  height={240}
                  className="w-full h-auto object-contain max-h-[210px] drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-mist-grey/80">
              <span className="text-[10px] font-bold tracking-widest text-sage-grey uppercase block mb-1">
                RECOVERY SYSTEM
              </span>
              <h3 className="font-serif-heading text-3xl text-deep-green group-hover:text-[#143d28] transition-colors mb-1">
                Bye Bye Narcissist
              </h3>
              <p className="text-xs text-[#626A64]">
                5-Part System • <span className="font-semibold text-deep-green">$119.99</span>
              </p>
            </div>
          </Link>

          {/* Module 2: Watch & Learn Video (Deep Green Visual Anchor) */}
          <Link
            href="/watch-learn"
            className="md:col-span-4 group relative bg-deep-green text-editorial-white border border-deep-green rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 shadow-md hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-cream-logo/5 rounded-bl-full pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                  02 / WATCH & LEARN
                </span>
                <span className="text-xs font-semibold text-cream-logo opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Watch &rarr;
                </span>
              </div>

              {/* Video Thumbnail Frame */}
              <div className="h-[240px] rounded-2xl relative flex items-center justify-center my-4 overflow-hidden shadow-xl border border-editorial-white/10 group-hover:border-cream-logo/30 transition-colors">
                <Image
                  src="/assets/Video Thumbnails/How Emotionally Intelligent People Handle Hurt.jpeg"
                  alt="Understanding Boundaries Video"
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="w-16 h-16 bg-cream-logo text-deep-green rounded-full flex items-center justify-center shadow-2xl relative z-10 transform group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <polygon points="9,6 18,12 9,18" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-bold text-cream-logo z-10 bg-ink-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <span>EMOTIONAL INTELLIGENCE</span>
                  <span>1:30 min</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-editorial-white/10">
              <span className="text-[10px] font-bold tracking-widest text-sage-grey uppercase block mb-1">
                DAILY VIDEO LIBRARY
              </span>
              <h4 className="font-serif-heading text-3xl text-cream-logo mb-1">
                Understanding Boundaries
              </h4>
              <p className="text-xs text-[#C3CDC6]">
                500+ Daily Videos • <span className="font-semibold text-cream-logo">Free Access</span>
              </p>
            </div>
          </Link>

          {/* Module 3: MANI Beta App Showcase (Clean Phone Bleed) */}
          <Link
            href="#app"
            className="md:col-span-4 group relative bg-editorial-white border border-mist-grey rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-radial from-soft-signal-green/20 via-transparent to-transparent pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-6 relative z-10">
                <span className="text-[10px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3 py-1 rounded-full">
                  03 / MANI APP
                </span>
                <span className="text-xs font-semibold text-deep-green opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  Join Beta &rarr;
                </span>
              </div>

              {/* Large Crisp Phone Display */}
              <div className="h-[240px] flex items-center justify-center my-4 relative overflow-hidden">
                <img
                  src="/assets/Chat Conversation.png?v=3"
                  alt="MANI App Chat Conversation"
                  className="w-auto h-[240px] object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-mist-grey/80 relative z-10">
              <span className="text-[10px] font-bold tracking-widest text-sage-grey uppercase block mb-1">
                GUIDED TECHNOLOGY
              </span>
              <h4 className="font-serif-heading text-3xl text-deep-green group-hover:text-[#143d28] transition-colors mb-1">
                Guided Support
              </h4>
              <p className="text-xs text-[#626A64]">
                Real-Time Reflection • <span className="font-semibold text-deep-green">Private Beta</span>
              </p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
