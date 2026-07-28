import Link from "next/link";
import Image from "next/image";

export default function FeaturedCollectionSection() {
  return (
    <section className="py-28 md:py-36 bg-editorial-white" id="collections">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12">
        <div className="text-xs font-bold tracking-widest uppercase text-deep-green mb-3">
          FEATURED COLLECTION
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
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
                href="/collections/bye-bye-narcissist"
                className="px-8 py-4 bg-deep-green text-editorial-white font-semibold rounded-md hover:bg-[#143d28] transition-colors shadow-sm"
              >
                Shop Collection — $119.99
              </Link>
              <Link
                href="/collections/bye-bye-narcissist"
                className="text-sm font-semibold text-deep-green underline underline-offset-4 hover:opacity-80"
              >
                Explore What's Included &rarr;
              </Link>
            </div>
          </div>

          {/* Professional Image Frame with Rounded Radius & Smooth Shadow */}
          <div className="md:col-span-7 flex justify-center items-center">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-mist-grey/80 group hover:shadow-2xl transition-all duration-500">
              <Image
                src="/assets/Product Collections/Product Mockups/Bye Bye Narcissist Collection/Collection/Collection.png"
                alt="Bye Bye Narcissist Collection Mockup"
                width={680}
                height={480}
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
