"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    category: "Professional Support & Safety",
    question: "Is MANI a replacement for therapy?",
    answer: "No. MANI is an educational and emotional support system—it is not therapy, clinical intervention, medical advice, or psychiatric treatment. MANI resources are designed to help you build understanding and self-reflection. If you are experiencing a mental health crisis, please reach out to licensed emergency healthcare professionals."
  },
  {
    category: "Professional Support & Safety",
    question: "Can I use MANI alongside my therapy or coaching?",
    answer: "Yes. Many MANI community members use our workbooks, journals, poster sets, and micro-videos as complementary reflection tools alongside professional therapy or coaching sessions."
  },
  {
    category: "About MANI",
    question: "Who are MANI resources designed for?",
    answer: "Most MANI physical resources, videos, and digital tools are designed for individuals aged 18 and above who are navigating complex relationships, emotional boundaries, or personal growth."
  },
  {
    category: "Collections",
    question: "How are MANI Collections structured?",
    answer: "A MANI Collection is a connected 5-part learning system built around a specific life challenge (e.g., Bye Bye Narcissist). Each collection contains 5 distinct physical resources: a Book (Foundation), Workbook (Action), Colouring Book & Journal (Calm), Poster Set (Reinforcement), and Card Deck (Daily Practice)."
  },
  {
    category: "App & Beta",
    question: "Do I need to download the MANI App to use physical collections?",
    answer: "No. Physical collections, workbooks, card decks, and Watch & Learn videos are completely standalone and do not require the app. The MANI App is a separate digital reflection technology currently in private beta."
  },
  {
    category: "Watch & Learn",
    question: "What is the difference between books, videos, and the app?",
    answer: "Books provide deep foundational knowledge; workbooks and journals offer structured action and somatic calm; micro-videos provide fast 2-minute daily insights; and the app provides private, real-time reflection support."
  },
  {
    category: "Products & Orders",
    question: "How are physical products shipped?",
    answer: "All physical books, workbooks, journals, and card decks are shipped worldwide in discreet, protective packaging with full tracking information."
  },
  {
    category: "Community",
    question: "How do I get access to new collection releases?",
    answer: "You can join our community newsletter by entering your email in any signup section across the website to receive early launch announcements, discount codes, and beta invites."
  }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All Categories");

  const categories = ["All Categories", ...Array.from(new Set(FAQ_DATA.map((item) => item.category)))];

  const filteredFaqs = FAQ_DATA.filter((item) =>
    activeCategory === "All Categories" ? true : item.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-editorial-white selection:bg-soft-signal-green selection:text-deep-green">
      <Header />

      <main className="flex-grow pt-32 pb-28 md:pt-40 md:pb-36">
        {/* Header */}
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-14 text-center">
          <div className="inline-block text-[11px] font-bold tracking-widest uppercase text-deep-green bg-soft-signal-green px-3.5 py-1.5 rounded-full mb-4">
            HELP & FREQUENTLY ASKED QUESTIONS
          </div>
          <h1 className="font-serif-heading text-5xl md:text-7xl text-deep-green mb-6 max-w-3xl mx-auto leading-[0.98]">
            Everything You Need<br />
            <span className="font-serif-italic">To Know.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#4A524D] max-w-xl mx-auto leading-relaxed">
            Find answers to common questions regarding MANI collections, therapy distinctions, shipping, and the mobile app.
          </p>
        </div>

        {/* Category Filters */}
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 mb-12 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-deep-green text-editorial-white shadow-xs"
                  : "bg-soft-white text-ink-black border border-mist-grey hover:border-deep-green"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 mb-24 space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-editorial-white border border-mist-grey rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-soft-white/60 transition-colors"
                >
                  <div>
                    <span className="text-[10px] font-bold text-deep-green bg-soft-signal-green px-2.5 py-0.5 rounded-sm uppercase inline-block mb-2">
                      {faq.category}
                    </span>
                    <h3 className="font-serif-heading text-2xl text-deep-green leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <span className="text-2xl text-deep-green font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#4A524D] leading-relaxed border-t border-mist-grey/60 bg-soft-white/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Safety & Crisis Disclaimer Banner */}
        <section className="max-w-[1360px] mx-auto px-6 md:px-12">
          <div className="bg-soft-white border border-mist-grey border-l-4 border-l-deep-green rounded-2xl p-8">
            <h4 className="font-serif-heading text-2xl text-deep-green mb-2">
              Important Safety & Professional Disclaimer
            </h4>
            <p className="text-xs text-[#626A64] leading-relaxed mb-4">
              MANI is not therapy, diagnosis, or clinical intervention. If you or someone you know is in distress or experiencing an immediate crisis, please contact your local emergency services or call crisis support hotlines in your region.
            </p>
            <Link href="/about" className="text-xs font-bold text-deep-green underline underline-offset-4">
              Learn more about MANI's mission & founder story &rarr;
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
