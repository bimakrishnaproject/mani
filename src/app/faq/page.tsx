"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

function renderFormattedMani(text: string): React.ReactNode {
  const parts = text.split(/(\b(?:Mani|mani)(?:'s)?\b)/g);
  return parts.map((part, idx) => {
    if (part === "Mani" || part === "mani") {
      return <strong key={idx} className="font-bold lowercase">mani</strong>;
    }
    if (part === "Mani's" || part === "mani's") {
      return <span key={idx}><strong className="font-bold lowercase">mani</strong>&apos;s</span>;
    }
    return part;
  });
}

const faqs = [
  {
    question: "Why is Mani called Mani?",
    answer:
      "The name Mani was inspired by the Sanskrit word Manas, meaning mind. It reflects our commitment to helping people better understand themselves, navigate life's challenges, and create meaningful change.",
  },
  {
    question: "What age group is Mani designed for?",
    answer:
      "Most Mani resources are designed for ages above 18. As we grow, additional resources may be developed for other age groups.",
  },
  {
    question: "Do I need to be experiencing a serious problem to benefit from Mani?",
    answer:
      "No. Many people use Mani to better understand themselves, strengthen relationships, build resilience, develop new skills, or navigate everyday challenges. You do not need to be in crisis to benefit from our resources.",
  },
  {
    question: "How do I know which collection is right for me?",
    answer:
      "Each collection is designed around a specific topic or challenge. Start with the area that feels most relevant to your life right now and explore the collection that best aligns with your needs.",
  },
  {
    question: "Is Mani a replacement for therapy?",
    answer:
      "No. Mani provides educational resources, tools, and support designed to promote learning, self-awareness, and personal growth. It is not a substitute for therapy, counseling, medical care, or crisis support.",
  },
  {
    question: "Can I use Mani if I am already working with a therapist or coach?",
    answer:
      "Yes. Many people use books, educational resources, and personal development tools alongside therapy, coaching, or other forms of professional support.",
  },
  {
    question: "What is the difference between the books, videos, and app?",
    answer:
      "Each resource serves a different purpose. Books and workbooks provide deeper learning and reflection. Videos offer accessible education and guidance. The app is being developed to bring tools, resources, and support together in a more interactive experience.",
  },
  {
    question: "Do I need the app to benefit from Mani?",
    answer:
      "No. The app is only one part of the Mani experience. Books, videos, and other resources are designed to provide value on their own.",
  },
  {
    question: "What if I don't know where to start?",
    answer:
      "That's completely normal. Start with the format that works best for you. Explore our daily videos for quick guidance, join the beta version of Mani app for a more personalized experience, or browse our collections if you prefer physical resources such as books, workbooks, and card decks.",
  },
  {
    question: "Who creates the content and resources at Mani?",
    answer:
      "Mani resources are developed with contributions from experienced professionals, subject matter experts, researchers, and individuals with professional experience.",
  },
  {
    question: "Are Mani resources based on research and professional expertise?",
    answer:
      "Yes. Our resources are informed by research, professional expertise, and practical experience. We are committed to creating content that is thoughtful, credible, and simple to apply.",
  },
  {
    question: "Can organizations or workplaces use Mani resources?",
    answer:
      "Yes. Many Mani resources address topics such as communication, emotional intelligence, relationships, resilience, and personal growth that may be valuable in professional environments.",
  },
  {
    question: "Can I access Mani from anywhere in the world?",
    answer:
      "Yes. Our digital resources are available worldwide. Availability of physical products and shipping options may vary by location.",
  },
  {
    question: "Will new collections and topics be added over time?",
    answer:
      "Yes. We are continually developing new collections, videos, tools, and experiences to expand the support available through Mani.",
  },
  {
    question: "How can I stay informed about new releases and future products?",
    answer:
      "Join the Mani Community to receive updates on new collections, videos, app developments, product releases, and future initiatives.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden selection:bg-[#0E2E1E] selection:text-white">
      <Header />

      <main className="flex-grow pt-32 sm:pt-40 md:pt-48 pb-32">
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 space-y-12">
          
          {/* Header */}
          <motion.div {...fadeIn} className="text-center space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
              QUESTIONS &amp; ANSWERS
            </span>
            <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#0B1710] font-medium leading-relaxed max-w-3xl mx-auto">
              Find clear answers about <strong className="font-bold lowercase">mani</strong>, our resources, collections, app, and philosophy.
            </p>

            {/* Search filter */}
            <div className="pt-4 max-w-xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions or topics..."
                className="w-full px-5 py-4 rounded-xl border border-mist-grey bg-white text-base text-[#0B1710] font-medium placeholder-neutral-400 focus:outline-none focus:border-[#0E2E1E] shadow-xs"
              />
            </div>
          </motion.div>

          {/* Accordion List */}
          <div className="w-full space-y-4 pt-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 8) * 0.04 }}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#0E2E1E] bg-[#0E2E1E] text-editorial-white shadow-lg"
                      : "border-mist-grey/80 bg-white hover:border-[#0E2E1E]/40 shadow-xs"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left px-6 sm:px-8 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span
                      className={`font-serif-heading text-lg sm:text-xl font-medium leading-snug ${
                        isOpen ? "text-cream-logo" : "text-[#0E2E1E]"
                      }`}
                    >
                      {renderFormattedMani(faq.question)}
                    </span>
                    <span
                      className={`text-xl font-bold transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-45 text-cream-logo" : "text-[#0E2E1E]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-[#FAF5EB] leading-relaxed font-medium border-t border-editorial-white/10 pt-4">
                          {renderFormattedMani(faq.answer)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Community CTA */}
          <motion.div
            {...fadeIn}
            className="pt-12 text-center border-t border-mist-grey/60 space-y-4"
          >
            <h3 className="font-serif-heading text-2xl text-[#0E2E1E]">
              Have a question not answered here?
            </h3>
            <p className="text-sm sm:text-base text-[#0B1710] font-medium">
              Reach out to our team at{" "}
              <a href="mailto:contact@mymani.ai" className="font-semibold text-[#0E2E1E] underline">
                contact@mymani.ai
              </a>{" "}
              or join the community.
            </p>
            <div className="pt-2">
              <Link
                href="/join-community"
                className="inline-flex px-8 py-3.5 bg-[#0E2E1E] text-cream-logo font-semibold rounded-xl hover:bg-[#143d28] transition-all text-sm shadow-md cursor-pointer"
              >
                Join Our Community &rarr;
              </Link>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
