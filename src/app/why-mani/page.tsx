"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function WhyManiPage() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
      try {
        await fetch("/api/klaviyo/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, type: "community" }),
        });
      } catch (err) {
        console.error("Subscribe error:", err);
      }
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-0">

        {/* 1. WHY MANI EXISTS */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E]/60 block">
              WHY MANI EXISTS
            </span>
            <h1 className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#0E2E1E] leading-[0.96] tracking-tight">
              Why MANI&trade; Exists
            </h1>
            <p className="text-xl sm:text-2xl text-[#4A524D] font-light leading-relaxed">
              The more we learned about emotional well-being, the more we saw the same challenge.
            </p>
            <p className="text-base sm:text-lg text-[#4A524D] font-light leading-relaxed">
              Support was often difficult to access, difficult to understand, and difficult to apply.
            </p>
            <p className="text-base sm:text-lg text-[#4A524D] font-light leading-relaxed">
              MANI&trade; was created to change that.
            </p>
          </motion.div>
        </section>

        {/* 2. THE PROBLEM WITH EMOTIONAL SUPPORT TODAY */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl space-y-6">
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E] leading-[1.05]">
              The Problem With Emotional Support Today
            </h2>
            <p className="text-base sm:text-lg text-[#4A524D] font-light leading-relaxed">
              People have access to more information than ever before.
            </p>
            <p className="text-base sm:text-lg text-[#4A524D] font-light leading-relaxed">
              Books. Podcasts. Videos. Experts. Endless advice.
            </p>
            <p className="text-base sm:text-lg text-[#4A524D] font-light leading-relaxed">
              Yet many people still feel confused, overwhelmed, and unsure where to begin.
            </p>
            <p className="text-base sm:text-lg text-[#4A524D] font-light leading-relaxed">
              Knowing what applies to your situation can be harder than finding information in the first place.
            </p>
          </motion.div>
        </section>

        {/* 3. PEOPLE ARE NOT PROBLEMS TO BE FIXED */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto bg-[#0E2E1E] rounded-3xl p-10 sm:p-16 space-y-6 shadow-xl">
            <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo leading-[1.1]">
              People Are Not Problems To Be Fixed
            </h2>
            <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed">
              Too often emotional support focuses on quick answers, advice, and fixing what appears to be wrong.
            </p>
            <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed">
              We believe there is a better place to start.
            </p>
            <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed">
              Before people can move forward they need to understand what they are experiencing.
            </p>
            <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed">
              Not fix it. Not push past it. Understand it.
            </p>
            <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed">
              When people understand what they are going through they are better equipped to make decisions, navigate challenges, and move forward on their own terms.
            </p>
            <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed">
              That belief shapes everything we create at MANI&trade;.
            </p>
          </motion.div>
        </section>

        {/* 4. WHY SIMPLICITY MATTERS */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto mb-12">
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              Why Simplicity Matters
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Information Isn\u2019t The Same As Understanding.",
                body: "Knowing something exists is not the same as knowing what it means for your life. MANI\u2122 helps you make sense of what you are going through.",
              },
              {
                title: "Learning Matters When It Can Be Applied.",
                body: "Everything we create is designed to be used in real life. Not just read and forgotten.",
              },
              {
                title: "Simple Doesn\u2019t Mean Simplistic.",
                body: "We make complex emotions and experiences easier to understand without dumbing them down.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 bg-soft-white border border-mist-grey rounded-2xl space-y-3"
              >
                <h3 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E] leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-[#4A524D] font-light leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. BUILT AROUND ONE BELIEF */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto bg-[#0E2E1E] rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-xl">
            <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo leading-[1.15]">
              Built Around One Belief
            </h2>
            <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Understanding comes before change. Support comes before solutions. People are not problems to be fixed.
            </p>
          </motion.div>
        </section>

        {/* 6. WHAT YOU'LL FIND AT MANI */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto mb-6">
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              What You&apos;ll Find At MANI&trade;
            </h2>
            <p className="text-base sm:text-lg text-[#4A524D] font-light leading-relaxed mt-4 max-w-3xl">
              Support comes in different forms. Explore the resources designed to help you better understand yourself and navigate life&apos;s challenges.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "COLLECTIONS",
                title: "Explore Life\u2019s Challenges",
                desc: "Books, workbooks, journals, card decks, posters, and other resources built around specific challenges and experiences.",
                link: "/collections",
                linkText: "Explore Collections",
              },
              {
                label: "WATCH & LEARN",
                title: "Support In Minutes",
                desc: "Short videos on psychology, relationships, emotional intelligence, stress, self-sabotage, and more.",
                link: "/watch-learn",
                linkText: "Watch Videos",
              },
              {
                label: "THE APP",
                title: "Support Wherever You Are",
                desc: "Guided conversations, breathwork, meditations, visualizations, stories, and practical tools available whenever you need them.",
                link: "/app",
                linkText: "Learn More",
              },
            ].map((pathway, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 bg-soft-white border border-mist-grey rounded-2xl space-y-4 hover:border-[#0E2E1E]/30 transition-all h-full flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#626A64] block mb-2">
                    {pathway.label}
                  </span>
                  <h3 className="font-serif-heading text-2xl text-[#0E2E1E] mb-3">{pathway.title}</h3>
                  <p className="text-sm text-[#4A524D] font-light leading-relaxed">{pathway.desc}</p>
                </div>
                <Link
                  href={pathway.link}
                  className="text-sm font-semibold text-[#0E2E1E] hover:underline pt-4 block"
                >
                  {pathway.linkText} &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. THIS IS ONLY THE BEGINNING */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto space-y-6">
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              This Is Only The Beginning
            </h2>
            <p className="text-base sm:text-lg text-[#4A524D] font-light leading-relaxed">
              The need for emotional support doesn&apos;t stop.
            </p>
            <p className="text-base sm:text-lg text-[#4A524D] font-light leading-relaxed">
              Neither does our commitment to creating resources that are practical, accessible, and built for real life.
            </p>
          </motion.div>
        </section>

        {/* 8. SUPPORT DOESN'T END HERE */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 pb-32">
          <motion.div {...fadeIn}>
            <div className="bg-[#0E2E1E] text-editorial-white rounded-2xl p-10 sm:p-16 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
                Support Doesn&apos;t End Here
              </h2>
              <p className="text-base sm:text-lg text-editorial-white/80 font-light leading-relaxed max-w-2xl mx-auto">
                Join our community and be the first to hear about new collections, videos, app updates, and resources.
              </p>
              {joined ? (
                <div className="p-5 bg-[#05150D] text-cream-logo rounded-2xl font-semibold text-base shadow-lg border border-editorial-white/10">
                  Thank you! You have been added to the MANI&trade; community.
                </div>
              ) : (
                <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-3 pt-2 max-w-lg mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-grow px-5 py-4 border border-editorial-white/20 rounded-xl text-base bg-editorial-white/10 text-cream-logo placeholder-cream-logo/40 focus:outline-none focus:border-cream-logo"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all shadow-md text-base whitespace-nowrap"
                  >
                    Join The MANI&trade; Community
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
