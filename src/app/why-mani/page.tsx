import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WhyManiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-editorial-white selection:bg-soft-signal-green selection:text-deep-green">
      <Header />

      <main className="flex-grow pt-32 pb-28 md:pt-40 md:pb-36">
        {/* Section 1 — Why MANI Exists Hero */}
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-24">
          <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full mb-6">
            PHILOSOPHY & VISION
          </div>
          <h1 className="font-serif-heading text-5xl sm:text-7xl md:text-8xl text-deep-green leading-[0.96] max-w-4xl mb-8">
            Why MANI<br />
            <span className="font-serif-italic">Exists.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#4A524D] max-w-3xl leading-relaxed font-light">
            Most emotional advice fails not because it is wrong, but because it is impossible to apply when you are overwhelmed. MANI was created to turn complex psychology into simple, connected, daily resources.
          </p>
        </div>

        {/* Section 2 — The Problem With Emotional Support Today */}
        <section className="bg-soft-white border-y border-mist-grey py-20 mb-24">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
                THE CURRENT LANDSCAPE
              </div>
              <h2 className="font-serif-heading text-3xl md:text-5xl text-deep-green mb-6">
                The Problem With Emotional Support Today
              </h2>
              <p className="text-base text-[#4A524D] leading-relaxed mb-6">
                We live in an era of information overload. Social media feeds are filled with surface-level therapy terms, while thick academic textbooks remain unreadable during a crisis.
              </p>
              <p className="text-base text-[#4A524D] leading-relaxed">
                People are left trying to piece together random advice without a structured, connected path to actual understanding, emotional grounding, or habit integration.
              </p>
            </div>
            <div className="bg-editorial-white border border-mist-grey rounded-3xl p-8 space-y-6">
              <div className="border-b border-mist-grey pb-4">
                <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block mb-1">TRADITIONAL ADVICE</span>
                <p className="text-sm text-ink-black font-semibold">Overwhelming, fragmented, and clinical.</p>
              </div>
              <div className="border-b border-mist-grey pb-4">
                <span className="text-xs font-bold text-deep-green uppercase tracking-wider block mb-1">THE MANI APPROACH</span>
                <p className="text-sm text-deep-green font-semibold">Structured, connected, and human-centered.</p>
              </div>
              <div>
                <span className="text-xs font-bold text-sage-grey uppercase tracking-wider block mb-1">THE GOAL</span>
                <p className="text-sm text-ink-black font-semibold">Self-trust, somatic calm, and practical boundaries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Deep Green Statement Section */}
        <section className="bg-deep-green text-editorial-white py-20 mb-28">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-sage-grey block mb-4">
              OUR CORE HUMANE PERSPECTIVE
            </span>
            <h2 className="font-serif-heading text-4xl md:text-7xl text-cream-logo max-w-4xl mx-auto leading-tight mb-8">
              People Are Not Problems to Be Fixed
            </h2>
            <p className="text-base md:text-xl text-[#C3CDC6] max-w-2xl mx-auto leading-relaxed font-light">
              Emotional struggle is not a personal failure or a defect. It is a natural response to complex relational and psychological dynamics.
            </p>
          </div>
        </section>

        {/* Section 4 — Why Simplicity Matters (3 Bold Principles) */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12 mb-28">
          <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
            CORE PRINCIPLES
          </div>
          <h2 className="font-serif-heading text-4xl md:text-6xl text-deep-green mb-14">
            Why Simplicity Matters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-editorial-white border border-mist-grey rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-3 py-1 rounded-sm block w-fit mb-6">
                  PRINCIPLE 01
                </span>
                <h3 className="font-serif-heading text-3xl text-deep-green mb-4">
                  Information Is Not the Same as Understanding
                </h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Knowing the name of a psychological term does not mean you have integrated the healing. True understanding requires multi-modal reflection.
                </p>
              </div>
            </div>

            <div className="bg-editorial-white border border-mist-grey rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-3 py-1 rounded-sm block w-fit mb-6">
                  PRINCIPLE 02
                </span>
                <h3 className="font-serif-heading text-3xl text-deep-green mb-4">
                  Learning Matters When It Can Be Applied
                </h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Insights are useless if they cannot be used in the middle of a conflict, an anxiety spiral, or a boundary conversation.
                </p>
              </div>
            </div>

            <div className="bg-editorial-white border border-mist-grey rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-3 py-1 rounded-sm block w-fit mb-6">
                  PRINCIPLE 03
                </span>
                <h3 className="font-serif-heading text-3xl text-deep-green mb-4">
                  Simple Does Not Mean Simplistic
                </h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Simplicity is the highest form of sophistication. Stripping away jargon allows the core truth to shine clearly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Built Around One Belief */}
        <section className="bg-soft-white border-y border-mist-grey py-20 mb-28">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-deep-green block mb-4">
              FOUNDATIONAL MANIFESTO
            </span>
            <h2 className="font-serif-heading text-3xl md:text-5xl text-deep-green mb-10">
              Built Around One Belief
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto font-serif-heading text-2xl md:text-4xl text-deep-green">
              <p className="p-4 bg-editorial-white border border-mist-grey rounded-2xl">
                Understanding comes before change.
              </p>
              <p className="p-4 bg-editorial-white border border-mist-grey rounded-2xl">
                Support comes before solutions.
              </p>
              <p className="p-4 bg-deep-green text-cream-logo rounded-2xl">
                People are not problems to be fixed.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 — What You Will Find at MANI (Three Visual Pathways) */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12 mb-28">
          <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
            THE MANI ECOSYSTEM
          </div>
          <h2 className="font-serif-heading text-4xl md:text-6xl text-deep-green mb-12">
            What You Will Find at MANI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/collections" className="bg-editorial-white border border-mist-grey rounded-3xl p-8 group hover:shadow-xl transition-all">
              <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-3 py-1 rounded-full inline-block mb-4">
                PATHWAY 01
              </span>
              <h3 className="font-serif-heading text-3xl text-deep-green group-hover:text-[#143d28] mb-3">
                Collections &rarr;
              </h3>
              <p className="text-sm text-[#4A524D] leading-relaxed">
                Connected 5-part physical systems (Books, Workbooks, Journals, Posters, Card Decks) addressing specific life challenges.
              </p>
            </Link>

            <Link href="/watch-learn" className="bg-editorial-white border border-mist-grey rounded-3xl p-8 group hover:shadow-xl transition-all">
              <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-3 py-1 rounded-full inline-block mb-4">
                PATHWAY 02
              </span>
              <h3 className="font-serif-heading text-3xl text-deep-green group-hover:text-[#143d28] mb-3">
                Watch & Learn &rarr;
              </h3>
              <p className="text-sm text-[#4A524D] leading-relaxed">
                500+ free expert-led micro-videos explaining psychological dynamics and somatic practices in under 3 minutes.
              </p>
            </Link>

            <Link href="/#app" className="bg-editorial-white border border-mist-grey rounded-3xl p-8 group hover:shadow-xl transition-all">
              <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-3 py-1 rounded-full inline-block mb-4">
                PATHWAY 03
              </span>
              <h3 className="font-serif-heading text-3xl text-deep-green group-hover:text-[#143d28] mb-3">
                The MANI App &rarr;
              </h3>
              <p className="text-sm text-[#4A524D] leading-relaxed">
                Private, real-time reflection and support technology currently in closed beta for mobile devices.
              </p>
            </Link>
          </div>
        </section>

        {/* Section 7 & 8 — Closing Statement & Community CTA */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="bg-deep-green text-editorial-white rounded-3xl p-10 md:p-16 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-sage-grey block mb-3">
              THIS IS ONLY THE BEGINNING
            </span>
            <h2 className="font-serif-heading text-3xl md:text-5xl text-cream-logo mb-6 max-w-2xl mx-auto">
              Join Us as We Reimagine Emotional Support
            </h2>
            <p className="text-base md:text-lg text-[#C3CDC6] max-w-xl mx-auto mb-8">
              Be the first to hear about new collection releases, video topics, and app updates.
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
