import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FUTURE_COLLECTIONS } from "@/data/collections";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-editorial-white selection:bg-soft-signal-green selection:text-deep-green">
      <Header />

      <main className="flex-grow pt-32 pb-28 md:pt-40 md:pb-36">
        {/* Section 1 — Hero */}
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-20 text-center">
          <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full mb-4">
            MANI COLLECTIONS
          </div>
          <h1 className="font-serif-heading text-5xl md:text-7xl text-deep-green mb-6 max-w-4xl mx-auto leading-[0.98]">
            Because Life Doesn't<br />
            <span className="font-serif-italic">Come With Instructions.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#4A524D] max-w-2xl mx-auto leading-relaxed mb-8">
            A MANI Collection is a connected learning system designed around a particular life challenge—combining physical books, workbooks, journals, poster sets, and daily cards.
          </p>
          <a
            href="#featured-collection"
            className="inline-flex px-8 py-4 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-colors"
          >
            Explore Collections
          </a>
        </div>

        {/* Section 2 — Why Collections Exist */}
        <section className="bg-soft-white border-y border-mist-grey py-20 mb-20">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
                WHY COLLECTIONS EXIST
              </div>
              <h2 className="font-serif-heading text-3xl md:text-5xl text-deep-green mb-6">
                Because One Resource Is Rarely Enough
              </h2>
              <p className="text-base text-[#4A524D] leading-relaxed mb-6">
                Real recovery and emotional growth require more than just awareness. Reading a book creates understanding, but workbooks create action, journals create calm, and card decks build daily practice.
              </p>
              <div className="p-5 bg-editorial-white border border-mist-grey rounded-xl border-l-4 border-l-deep-green">
                <p className="text-sm font-semibold text-deep-green">
                  "Education → Reflection → Processing → Practice → Reinforcement"
                </p>
              </div>
            </div>
            <div className="relative w-full rounded-2xl bg-gradient-to-br from-[#F4F5F2] to-[#E9ECE8] p-6 flex items-center justify-center">
              <Image
                src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Book Trio.png"
                alt="MANI Connected Learning System"
                width={520}
                height={360}
                className="w-full h-auto object-contain max-h-[360px] drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Section 3 — Different Ways of Learning */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12 mb-28">
          <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
            DIFFERENT WAYS OF LEARNING
          </div>
          <h2 className="font-serif-heading text-3xl md:text-5xl text-deep-green mb-12">
            People Learn Differently
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-soft-white border border-mist-grey rounded-xl p-6">
              <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-2.5 py-1 rounded-sm block w-fit mb-4">
                01. Reading
              </span>
              <h3 className="font-semibold text-base text-ink-black mb-2">Foundation</h3>
              <p className="text-xs text-[#626A64]">Books establishing core understanding of psychological dynamics.</p>
            </div>
            <div className="bg-soft-white border border-mist-grey rounded-xl p-6">
              <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-2.5 py-1 rounded-sm block w-fit mb-4">
                02. Reflection
              </span>
              <h3 className="font-semibold text-base text-ink-black mb-2">Action</h3>
              <p className="text-xs text-[#626A64]">Workbooks for structured self-reflection and prompt exercises.</p>
            </div>
            <div className="bg-soft-white border border-mist-grey rounded-xl p-6">
              <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-2.5 py-1 rounded-sm block w-fit mb-4">
                03. Calm
              </span>
              <h3 className="font-semibold text-base text-ink-black mb-2">Creative Processing</h3>
              <p className="text-xs text-[#626A64]">Colouring journals for somatic grounding and nervous system calm.</p>
            </div>
            <div className="bg-soft-white border border-mist-grey rounded-xl p-6">
              <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-2.5 py-1 rounded-sm block w-fit mb-4">
                04. Reinforcement
              </span>
              <h3 className="font-semibold text-base text-ink-black mb-2">Visual Reminders</h3>
              <p className="text-xs text-[#626A64]">Poster sets providing daily boundary reminders in your space.</p>
            </div>
            <div className="bg-soft-white border border-mist-grey rounded-xl p-6">
              <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-2.5 py-1 rounded-sm block w-fit mb-4">
                05. Practice
              </span>
              <h3 className="font-semibold text-base text-ink-black mb-2">Daily Rituals</h3>
              <p className="text-xs text-[#626A64]">Card decks for micro-actions and daily self-trust habits.</p>
            </div>
          </div>
        </section>

        {/* Section 4 — Featured Collection Spotlight */}
        <section id="featured-collection" className="max-w-[1360px] mx-auto px-6 md:px-12 mb-28">
          <div className="bg-soft-white border border-mist-grey rounded-3xl p-8 md:p-14">
            <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
              AVAILABLE COLLECTION
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif-heading text-4xl md:text-6xl text-deep-green mb-4">
                  Bye Bye Narcissist
                </h2>
                <p className="text-base text-[#4A524D] leading-relaxed mb-6">
                  A 5-part connected system designed to guide you from confusion and self-doubt toward boundary clarity, calm, and renewed self-trust.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="p-4 bg-editorial-white border border-mist-grey rounded-lg">
                    <div className="text-xs text-sage-grey">Complete Collection</div>
                    <div className="text-2xl font-bold text-deep-green">$119.99</div>
                    <div className="text-[10px] text-[#626A64]">Includes all 5 physical resources</div>
                  </div>
                  <div className="p-4 bg-editorial-white border border-mist-grey rounded-lg">
                    <div className="text-xs text-sage-grey">Book + Workbook Bundle</div>
                    <div className="text-2xl font-bold text-deep-green">$49.99</div>
                    <div className="text-[10px] text-[#626A64]">Foundation + Action pair</div>
                  </div>
                </div>
                <Link
                  href="/collections/bye-bye-narcissist"
                  className="inline-flex px-8 py-4 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-colors"
                >
                  Explore Bye Bye Narcissist &rarr;
                </Link>
              </div>
              <div className="relative w-full rounded-2xl bg-gradient-to-br from-[#F4F5F2] to-[#E9ECE8] p-6 flex justify-center items-center">
                <Image
                  src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
                  alt="Bye Bye Narcissist Collection"
                  width={560}
                  height={400}
                  className="w-full h-auto object-contain max-h-[400px] drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Future Collections */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12 mb-20">
          <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
            FUTURE COLLECTIONS
          </div>
          <h2 className="font-serif-heading text-3xl md:text-5xl text-deep-green mb-10">
            More Collections Are Coming
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {FUTURE_COLLECTIONS.map((item, idx) => (
              <div
                key={idx}
                className="bg-editorial-white border border-mist-grey rounded-2xl p-6 flex flex-col justify-between h-44 hover:border-deep-green transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-wider text-sage-grey uppercase bg-mist-grey px-2 py-0.5 rounded-sm inline-block mb-3">
                    {item.status}
                  </span>
                  <h3 className="font-serif-heading text-2xl text-deep-green leading-tight">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs font-medium text-sage-grey">In Development</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6 — Community CTA */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="bg-deep-green text-editorial-white rounded-3xl p-10 md:p-16 text-center">
            <h2 className="font-serif-heading text-3xl md:text-5xl text-cream-logo mb-4">
              You Should Not Have to Figure It Out Alone
            </h2>
            <p className="text-base md:text-lg text-[#C3CDC6] max-w-xl mx-auto mb-8">
              Join the MANI community to receive early access to upcoming collection releases, workbooks, and resources.
            </p>
            <Link
              href="/#community"
              className="inline-flex px-8 py-4 bg-cream-logo text-deep-green font-semibold rounded-md hover:bg-[#f2e1bd] transition-colors"
            >
              Join Our Community
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
