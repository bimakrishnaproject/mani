import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-editorial-white selection:bg-soft-signal-green selection:text-deep-green">
      <Header />

      <main className="flex-grow pt-32 pb-28 md:pt-40 md:pb-36">
        {/* Section 1 — About MANI Hero */}
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-24">
          <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full mb-6">
            ABOUT MANI
          </div>
          <h1 className="font-serif-heading text-5xl sm:text-7xl md:text-8xl text-deep-green leading-[0.96] max-w-4xl mb-8">
            Built to Make a<br />
            <span className="font-serif-italic">Difference.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#4A524D] max-w-3xl leading-relaxed font-light">
            MANI exists to make human-centered emotional support accessible, practical, and grounded. We combine psychology, somatic practice, and modern design to build resources that help you navigate life's hardest moments.
          </p>
        </div>

        {/* Section 2 — Built by Experts Statement */}
        <section className="bg-soft-white border-y border-mist-grey py-16 mb-24">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
              BUILT BY EXPERTS
            </div>
            <h2 className="font-serif-heading text-3xl md:text-5xl text-deep-green mb-6 max-w-3xl">
              The People Behind MANI
            </h2>
            <p className="text-base md:text-lg text-[#4A524D] max-w-3xl leading-relaxed">
              Every collection, workbook, audio guide, and tool is developed in collaboration with leading authors, behavioral experts, somatic practitioners, sound designers, and technologists.
            </p>
          </div>
        </section>

        {/* Section 3 — Founder Story (Manasa Reddy) */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12 mb-28">
          <div className="bg-deep-green text-editorial-white rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border border-editorial-white/10">
                  <Image
                    src={encodeURI("/assets/Team Photos/Manasa Reddy.png")}
                    alt="Manasa Reddy - Founder & CEO of MANI"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="text-xs font-bold tracking-widest uppercase text-cream-logo bg-editorial-white/10 px-3.5 py-1.5 rounded-full inline-block mb-6">
                  OUR FOUNDER
                </span>
                <h2 className="font-serif-heading text-4xl md:text-6xl text-cream-logo mb-6 leading-tight">
                  Meet Manasa Reddy
                </h2>
                <p className="text-base md:text-lg text-[#C3CDC6] leading-relaxed mb-6 font-light">
                  MANI was born out of a realization that traditional emotional advice often leaves people feeling overwhelmed and unsupported when they need clarity most.
                </p>
                <p className="text-base text-[#C3CDC6] leading-relaxed mb-8 font-light">
                  Manasa Reddy founded MANI to bridge the gap between complex psychological theory and actionable daily practice—creating multi-sensory systems that educate, calm, and empower individuals to rebuild self-trust.
                </p>

                <div className="p-6 bg-editorial-white/5 border border-editorial-white/10 rounded-2xl border-l-4 border-l-cream-logo">
                  <blockquote className="font-serif-italic text-lg md:text-xl text-cream-logo leading-snug">
                    "Understanding comes before change. Support comes before solutions. People are not problems to be fixed."
                  </blockquote>
                  <cite className="block text-xs text-sage-grey uppercase tracking-wider mt-3 not-italic font-sans font-bold">
                    — Manasa Reddy, Founder of MANI
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Meet the Experts Grid */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12 mb-28">
          <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
            MEET THE EXPERTS
          </div>
          <h2 className="font-serif-heading text-4xl md:text-6xl text-deep-green mb-12">
            Meet the Experts Behind MANI
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Expert 1 — Lolly Daskal */}
            <div className="bg-editorial-white border border-mist-grey rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              <div>
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-6 bg-soft-white">
                  <Image
                    src={encodeURI("/assets/Team Photos/Lolly Daskal.png")}
                    alt="Lolly Daskal"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif-heading text-2xl text-deep-green mb-1">
                  Lolly Daskal
                </h3>
                <span className="text-xs font-semibold text-deep-green block mb-3">
                  Behavioral Expert, Strategic Advisor & Bestselling Author
                </span>
                <p className="text-xs text-[#626A64] leading-relaxed">
                  Bestselling author and executive leadership coach specializing in behavioral transformation and emotional intelligence in high-stakes environments.
                </p>
              </div>
            </div>

            {/* Expert 2 — Michaela Katz */}
            <div className="bg-editorial-white border border-mist-grey rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              <div>
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-6 bg-soft-white">
                  <Image
                    src={encodeURI("/assets/Team Photos/Michaela Katz.png")}
                    alt="Michaela Katz"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif-heading text-2xl text-deep-green mb-1">
                  Michaela Katz
                </h3>
                <span className="text-xs font-semibold text-deep-green block mb-3">
                  Somatic Healing and Emotional Well-Being Specialist
                </span>
                <p className="text-xs text-[#626A64] leading-relaxed">
                  Specialist in nervous system regulation, somatic movement, and body-centered processing for emotional recovery.
                </p>
              </div>
            </div>

            {/* Expert 3 — Michelle Falanga */}
            <div className="bg-editorial-white border border-mist-grey rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              <div>
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-6 bg-soft-white">
                  <Image
                    src={encodeURI("/assets/Team Photos/Michelle Falanga.png")}
                    alt="Michelle Falanga"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif-heading text-2xl text-deep-green mb-1">
                  Michelle Falanga
                </h3>
                <span className="text-xs font-semibold text-deep-green block mb-3">
                  Emmy Award-Winning Voice Artist
                </span>
                <p className="text-xs text-[#626A64] leading-relaxed">
                  Emmy Award-winning voice talent bringing warmth, resonance, and presence to MANI guided audio experiences.
                </p>
              </div>
            </div>

            {/* Expert 4 — Stephen Coghill */}
            <div className="bg-editorial-white border border-mist-grey rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              <div>
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-6 bg-soft-white">
                  <Image
                    src={encodeURI("/assets/Team Photos/Stephen CogHill.png")}
                    alt="Stephen Coghill"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif-heading text-2xl text-deep-green mb-1">
                  Stephen Coghill
                </h3>
                <span className="text-xs font-semibold text-deep-green block mb-3">
                  Award-Winning Composer & Sound Engineer
                </span>
                <p className="text-xs text-[#626A64] leading-relaxed">
                  Composer and sound engineer designing immersive soundscapes and acoustic environments for emotional calm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — Visual Summary of Disciplines */}
        <section className="bg-soft-white border-y border-mist-grey py-20 mb-24">
          <div className="max-w-[1360px] mx-auto px-6 md:px-12">
            <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
              COMBINED EXPERTISE
            </div>
            <h2 className="font-serif-heading text-3xl md:text-5xl text-deep-green mb-12">
              Disciplines Behind MANI
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl">
                <span className="text-deep-green font-serif-heading text-2xl block mb-2">01</span>
                <h4 className="font-semibold text-sm text-ink-black mb-1">Human Behaviour</h4>
                <p className="text-xs text-sage-grey">Pattern recognition & habit science</p>
              </div>
              <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl">
                <span className="text-deep-green font-serif-heading text-2xl block mb-2">02</span>
                <h4 className="font-semibold text-sm text-ink-black mb-1">Emotional Intelligence</h4>
                <p className="text-xs text-sage-grey">Self-awareness & empathy models</p>
              </div>
              <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl">
                <span className="text-deep-green font-serif-heading text-2xl block mb-2">03</span>
                <h4 className="font-semibold text-sm text-ink-black mb-1">Relationships</h4>
                <p className="text-xs text-sage-grey">Boundaries & attachment dynamics</p>
              </div>
              <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl">
                <span className="text-deep-green font-serif-heading text-2xl block mb-2">04</span>
                <h4 className="font-semibold text-sm text-ink-black mb-1">Somatic Practice</h4>
                <p className="text-xs text-sage-grey">Nervous system regulation</p>
              </div>
              <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl">
                <span className="text-deep-green font-serif-heading text-2xl block mb-2">05</span>
                <h4 className="font-semibold text-sm text-ink-black mb-1">Voice & Audio</h4>
                <p className="text-xs text-sage-grey">Guided meditation & spoken support</p>
              </div>
              <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl">
                <span className="text-deep-green font-serif-heading text-2xl block mb-2">06</span>
                <h4 className="font-semibold text-sm text-ink-black mb-1">Music & Sound</h4>
                <p className="text-xs text-sage-grey">Acoustic resonance & calming audio</p>
              </div>
              <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl">
                <span className="text-deep-green font-serif-heading text-2xl block mb-2">07</span>
                <h4 className="font-semibold text-sm text-ink-black mb-1">Educational Content</h4>
                <p className="text-xs text-sage-grey">Structured learning design</p>
              </div>
              <div className="p-6 bg-editorial-white border border-mist-grey rounded-2xl">
                <span className="text-deep-green font-serif-heading text-2xl block mb-2">08</span>
                <h4 className="font-semibold text-sm text-ink-black mb-1">Digital Technology</h4>
                <p className="text-xs text-sage-grey">Calm, private user experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — Closing CTA */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif-heading text-4xl md:text-6xl text-deep-green mb-6">
            Support Doesn't End Here
          </h2>
          <p className="text-base md:text-lg text-[#4A524D] max-w-xl mx-auto mb-10">
            Explore our collections, watch daily micro-videos, or join our community to receive updates on new releases.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/#community"
              className="px-8 py-4 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-colors"
            >
              Join Our Community
            </Link>
            <Link
              href="/#community"
              className="px-8 py-4 border border-deep-green text-deep-green font-semibold rounded-md hover:bg-soft-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
