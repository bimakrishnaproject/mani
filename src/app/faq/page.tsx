"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is MANI?",
      answer: "MANI is a platform that brings together expert-led collections, daily educational videos, community, and a guided app to help people better understand themselves and navigate life's challenges. Our approach combines physical tools, digital content, and guided technology into one connected ecosystem.",
    },
    {
      question: "Is MANI therapy?",
      answer: "No. MANI is not a substitute for professional clinical therapy, medical diagnosis, or emergency mental health crisis intervention. Our resources are designed for educational and self-reflection purposes. MANI may be used alongside therapy or coaching, but it does not replace professional care.",
    },
    {
      question: "What is included in the Bye Bye Narcissist Collection?",
      answer: "The collection includes five connected tools: (1) The Foundation Book ($24.99), (2) The Action Workbook ($29.99), (3) Coloring Book & Journal for calm ($14.99), (4) 10 Frameable Poster Collection for reinforcement ($29.99), and (5) The 52 Affirmation Card Deck for daily practice.",
    },
    {
      question: "Can I buy individual items without purchasing the full collection?",
      answer: "Yes! While the complete collection bundle is available at $119.99, every item can be purchased individually. We designed the collection as a connected system, but each resource works on its own too.",
    },
    {
      question: "What other collections are coming?",
      answer: "We are developing additional collections including Emotional Intelligence, Love Done Right, Boundaries That Stick, Purpose Starts Here, Beyond the Anxiety, Running on Empty, Meeting Your Shadow, Healing Your Inner Child, Stop Self Sabotage, Own Your Worth, and When Panic Hits.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship physical collections worldwide. Domestic US orders typically arrive in 3-5 business days, while international shipping takes 7-12 business days. Digital products are available immediately after purchase.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy. If you feel our physical collection does not provide value, return it within 30 days for a full refund. Digital products are non-refundable once accessed.",
    },
    {
      question: "How do I get access to the MANI app beta?",
      answer: "You can join the beta by submitting your name and email through the beta signup form on our website. Beta invites are sent out in batches to ensure quality and stability.",
    },
    {
      question: "What can the app do?",
      answer: "The MANI app is currently in beta and focuses on guided support through a conversational interface. It provides personalized guidance to help users reflect, understand, and take practical next steps. Additional features are in development.",
    },
    {
      question: "Is my data in the app private?",
      answer: "Absolutely. Your privacy is a priority. Your conversations and reflections in the app are kept private and secure. We do not sell or share your personal data with third parties.",
    },
    {
      question: "How many videos are available?",
      answer: "Our Watch & Learn library currently includes 500+ short videos and is growing daily. New videos are added regularly, covering topics from psychology and emotional intelligence to relationships, stress management, and self-understanding.",
    },
    {
      question: "Are the videos free?",
      answer: "Yes, the Watch & Learn video library is freely accessible. We believe educational content should be available to everyone who needs it.",
    },
    {
      question: "How do I join the MANI community?",
      answer: "You can join by entering your email on our website. As a community member, you'll be the first to hear about new collections, videos, app updates, and resources.",
    },
    {
      question: "Who is MANI designed for?",
      answer: "Most MANI resources are designed for people aged 18 and above. Our content is created for anyone seeking to better understand themselves and navigate emotional challenges with practical, accessible tools.",
    },
    {
      question: "Can I use MANI alongside therapy?",
      answer: "Yes. MANI is designed to complement professional support, not replace it. Many people find our resources helpful alongside therapy or coaching. If you are experiencing a mental health emergency, please contact your local healthcare providers or emergency services immediately.",
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
            <p className="text-lg text-[#4A524D] font-light leading-relaxed max-w-2xl">
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
                      className="text-xl font-sans text-[#4A524D] font-bold flex-shrink-0 w-7 h-7 rounded-full bg-mist-grey/50 flex items-center justify-center"
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
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#4A524D] font-light leading-relaxed border-t border-mist-grey/60">
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
              <p className="text-base text-editorial-white/80 font-light max-w-xl mx-auto leading-relaxed">
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
