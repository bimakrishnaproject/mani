import Link from "next/link";

export default function ThreeWaysSection() {
  return (
    <section className="py-28 md:py-36 bg-editorial-white" id="three-ways">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
          HOW MANI HELPS
        </div>
        <h2 className="font-serif-heading text-4xl md:text-6xl text-deep-green mb-14">
          Three Ways We Can Help
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-soft-white border border-mist-grey rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="text-sm font-bold text-sage-grey mb-6">01</div>
              <h3 className="font-serif-heading text-3xl text-deep-green mb-3">Collections</h3>
              <p className="text-sm text-[#4A524D] leading-relaxed mb-8">
                Structured physical and digital learning systems designed around specific life challenges.
              </p>
            </div>
            <div>
              <div className="h-28 bg-editorial-white border border-mist-grey rounded-lg mb-6 flex items-center justify-center gap-2 px-4">
                <span className="text-xs font-semibold px-3 py-1 bg-soft-signal-green text-deep-green rounded-md">Book</span>
                <span className="text-xs font-semibold px-3 py-1 bg-soft-signal-green text-deep-green rounded-md">Workbook</span>
                <span className="text-xs font-semibold px-3 py-1 bg-soft-signal-green text-deep-green rounded-md">Card Deck</span>
              </div>
              <Link href="#collections" className="text-sm font-semibold text-deep-green hover:underline">
                Explore Collections &rarr;
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-soft-white border border-mist-grey rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="text-sm font-bold text-sage-grey mb-6">02</div>
              <h3 className="font-serif-heading text-3xl text-deep-green mb-3">Watch & Learn</h3>
              <p className="text-sm text-[#4A524D] leading-relaxed mb-8">
                Short, daily educational videos breaking down complex psychology into clear insights.
              </p>
            </div>
            <div>
              <div className="h-28 bg-editorial-white border border-mist-grey rounded-lg mb-6 flex items-center justify-center gap-2">
                <span className="text-xs font-medium px-2.5 py-1 bg-mist-grey text-ink-black rounded-md">#Boundaries</span>
                <span className="text-xs font-medium px-2.5 py-1 bg-mist-grey text-ink-black rounded-md">#ShadowWork</span>
              </div>
              <Link href="#watch-learn" className="text-sm font-semibold text-deep-green hover:underline">
                Browse Video Library &rarr;
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-soft-white border border-mist-grey rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="text-sm font-bold text-sage-grey mb-6">03</div>
              <h3 className="font-serif-heading text-3xl text-deep-green mb-3">The MANI App</h3>
              <p className="text-sm text-[#4A524D] leading-relaxed mb-8">
                Guided technology in your pocket for real-time reflection and support when you need it most.
              </p>
            </div>
            <div>
              <div className="h-28 bg-editorial-white border border-mist-grey rounded-lg mb-6 flex items-center justify-center">
                <span className="text-xs font-semibold px-4 py-2 bg-cream-logo text-deep-green rounded-full shadow-xs">
                  Support in Minutes
                </span>
              </div>
              <Link href="#app" className="text-sm font-semibold text-deep-green hover:underline">
                Join Beta Access &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
