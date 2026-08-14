"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    // 1. About Mani
    {
      question: "What is Mani?",
      answer: "Mani brings together carefully selected resources designed around specific challenges and life experiences. We combine physical tools, daily educational videos, a supportive community, and a guided app to help people better understand themselves and navigate life's challenges.",
    },
    {
      question: "Who is Mani designed for?",
      answer: "Most Mani resources are designed for people aged 18 and above. Our content is created for anyone seeking to better understand themselves, process emotions, and navigate challenges with practical, accessible tools.",
    },

    // 2. Collections
    {
      question: "What is included in the Bye Bye Narcissist Collection?",
      answer: "The Bye Bye Narcissist Collection includes five complementary resources: The Foundation Book, The Action Workbook, The Calm Coloring Book & Journal, The 10-Piece Reinforcement Poster Collection, and The Daily Practice Affirmation Card Deck.",
    },
    {
      question: "Are collections organized around specific challenges?",
      answer: "Yes. Mani Collections bring together carefully selected resources designed around a specific challenge, topic, or life experience. Because support is most effective when everything works together.",
    },
    {
      question: "What other collections are coming?",
      answer: "We are actively developing future collections including Emotional Intelligence, Love Done Right, Boundaries That Stick, Purpose Starts Here, Beyond the Anxiety, Meeting Your Shadow, Healing Your Inner Child, and Stop Self-Sabotage.",
    },

    // 3. Products & Orders
    {
      question: "Can I buy individual items without purchasing the full collection?",
      answer: "Yes. While the complete collection bundle offers the most cohesive experience and best value ($119.99), each book, workbook, journal, poster set, and card deck can also be purchased individually.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship physical collections worldwide. Domestic US orders typically arrive in 3-5 business days, and international shipping typically takes 7-12 business days. Digital components are delivered instantly.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all physical products. If you feel our resources do not meet your needs, return them within 30 days of delivery for a full refund.",
    },

    // 4. App & Beta
    {
      question: "How do I get access to the Mani app beta?",
      answer: "You can apply for early access through the Join Beta form on our website. We invite small groups of testers periodically before public launch to explore new features and help shape the future of the app.",
    },
    {
      question: "What can the app do?",
      answer: "The Mani App goes beyond listening. It provides guided conversations, breathwork, meditations, visualizations, and stories to help you understand what you are facing and guide you toward practical next steps.",
    },
    {
      question: "Is the app required to use other Mani resources?",
      answer: "No. The app is not required to use other Mani resources. Books, workbooks, journals, cards, posters, and videos are all standalone tools that can be used independently.",
    },
    {
      question: "Is my data in the app private?",
      answer: "Yes. Privacy is a core principle. Your conversations and reflections in the app remain strictly confidential and secure. We do not sell or share personal user data.",
    },

    // 5. Watch & Learn
    {
      question: "How many videos are available?",
      answer: "Our Watch & Learn video library includes 500+ short videos and is growing daily. Topics cover psychology, relationships, emotional intelligence, stress, self-sabotage, shadow work, inner child, and more.",
    },
    {
      question: "Are the videos free?",
      answer: "Yes, the Watch & Learn video library is freely accessible on our website.",
    },
    {
      question: "How do books, videos, and the app work together?",
      answer: "Books, videos, and the app serve different purposes. Videos provide quick daily clarity, collections offer comprehensive in-depth guidance for specific challenges, and the app provides on-demand interactive support whenever you need it.",
    },

    // 6. Community
    {
      question: "How do I join the Mani community?",
      answer: "You can join by entering your email on our website. As a community member, you will be the first to hear about new collections, videos, app updates, and resources.",
    },

    // 7. Professional Support & Safety
    {
      question: "Is Mani therapy?",
      answer: "No. Mani is not therapy. Our resources are designed for educational and self-reflection purposes. Mani may be used alongside therapy or coaching, but it does not replace professional medical or mental health care. If you are experiencing a crisis, please contact your local emergency services or healthcare provider immediately.",
    },
    {
      question: "Can I use Mani alongside therapy?",
      answer: "Yes. Mani may be used alongside therapy or coaching. Many people find our physical tools and daily reflections helpful to support their personal growth between sessions.",
    },
  ];

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">

        {/* Page Header */}
        <section className="max-w-[900px] mx-auto px-6 sm:px-12 md:px-16 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h1 className="font-serif-heading text-4xl sm:text-6xl md:text-7xl text-[#0E2E1E] leading-[0.96] tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#1C2826] font-normal leading-relaxed max-w-2xl">
              Find answers about our collections, shipping, app beta program, video library, and more.
            </p>
          </motion.div>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-[900px] mx-auto px-6 sm:px-12 md:px-16 mb-32">
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-soft-white border border-mist-grey rounded-xl overflow-hidden transition-all shadow-xs hover:border-[#0E2E1E]/30"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif-heading text-lg sm:text-xl text-[#0E2E1E]"
                  >
                    <span>{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-xl font-sans text-[#0E2E1E] font-bold flex-shrink-0 w-7 h-7 rounded-full bg-mist-grey/50 flex items-center justify-center"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#1C2826] font-normal leading-relaxed border-t border-mist-grey/60">
                          <p className="pt-4">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-[900px] mx-auto px-6 sm:px-12 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#0E2E1E] text-editorial-white rounded-2xl p-10 sm:p-14 text-center space-y-6 shadow-xl">
              <h2 className="font-serif-heading text-3xl sm:text-4xl text-cream-logo">
                Still Have Questions?
              </h2>
              <p className="text-base text-[#E8F0EC] font-normal max-w-xl mx-auto leading-relaxed">
                Our team is here to support you. Reach out anytime and we&apos;ll respond as quickly as possible.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Link
                  href="/join-community"
                  className="px-8 py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all shadow-md text-sm"
                >
                  Contact Us &rarr;
                </Link>
                <Link
                  href="/collections"
                  className="px-8 py-4 bg-editorial-white/10 text-cream-logo border border-editorial-white/20 font-semibold rounded-xl hover:bg-editorial-white/20 transition-all text-sm"
                >
                  Explore Collections &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
