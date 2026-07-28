import Link from "next/link";
import Image from "next/image";

export default function FeaturedCollectionSection() {
  return (
    <section className="py-28 md:py-36 bg-editorial-white" id="collections">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
          FEATURED COLLECTION
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="font-serif-heading text-4xl md:text-6xl text-deep-green mb-4">
              Bye Bye Narcissist
            </h2>
            <p className="text-base sm:text-lg text-[#4A524D] leading-relaxed mb-8">
              A 5-part connected system to help you understand toxic dynamics, reclaim your boundaries, and rebuild self-trust.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="text-sm border-b border-mist-grey pb-3">
                <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-2 py-0.5 rounded-sm mr-2.5">
                  01. Foundation
                </span>{" "}
                <strong>Book</strong> — Deep understanding of narcissistic patterns
              </li>
              <li className="text-sm border-b border-mist-grey pb-3">
                <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-2 py-0.5 rounded-sm mr-2.5">
                  02. Action
                </span>{" "}
                <strong>Workbook</strong> — Practical exercises for recovery
              </li>
              <li className="text-sm border-b border-mist-grey pb-3">
                <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-2 py-0.5 rounded-sm mr-2.5">
                  03. Calm
                </span>{" "}
                <strong>Colouring Book & Journal</strong> — Emotional grounding
              </li>
              <li className="text-sm border-b border-mist-grey pb-3">
                <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-2 py-0.5 rounded-sm mr-2.5">
                  04. Reinforcement
                </span>{" "}
                <strong>Poster Set</strong> — Visual daily boundary reminders
              </li>
              <li className="text-sm border-b border-mist-grey pb-3">
                <span className="text-xs font-bold text-deep-green bg-soft-signal-green px-2 py-0.5 rounded-sm mr-2.5">
                  05. Daily Practice
                </span>{" "}
                <strong>Card Deck</strong> — Micro-actions for self-trust
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="#community"
                className="px-8 py-4 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-colors"
              >
                Shop Collection — $119.99
              </Link>
              <Link
                href="#collections"
                className="text-sm font-semibold text-deep-green underline underline-offset-4 hover:opacity-80"
              >
                Explore What's Included &rarr;
              </Link>
            </div>
          </div>

          <div className="bg-soft-white border border-mist-grey rounded-2xl h-[460px] relative flex items-center justify-center p-6 overflow-hidden shadow-sm">
            <Image
              src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
              alt="Bye Bye Narcissist Collection Mockup"
              width={520}
              height={400}
              className="object-contain max-h-[400px] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
