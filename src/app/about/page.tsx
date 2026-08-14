"use client";

import React from "react";
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

export default function AboutPage() {
  const founders = [
    {
      name: "Manasa Reddy",
      role: "Founder",
      bio: "Manasa created MANI™ with a vision of making emotional support truly accessible. Her personal experience navigating life's challenges inspired her to build a platform that brings together expert-led content, physical tools, and guided technology into one connected support system.",
      image: "/assets/Team Photos/Manasa Reddy.png",
    },
  ];

  const experts = [
    {
      name: "Lolly Daskal",
      role: "Behavioral Expert, Strategic Advisor & Best Selling Author",
      bio: "For more than four decades, Lolly Daskal has studied human behavior and helped people navigate growth, relationships, leadership, and life's challenges. As founder and CEO of Lead From Within and bestselling author of The Leadership Gap, she has spent her career helping individuals and organizations gain clarity, build resilience, strengthen relationships, and create meaningful change.\n\nDrawing from decades of research, coaching, and real-world experience, Lolly helps shape the vision, content, and frameworks behind Mani. Her work combines behavioral science, psychology, and practical wisdom to help people better understand themselves, strengthen their relationships, and navigate life's challenges with greater confidence and clarity.",
      image: "/assets/Team Photos/Lolly Daskal.png",
    },
    {
      name: "Michaela Katz",
      role: "Somatic Healing and Emotional Well-Being Specialist",
      bio: "Michaela brings deep expertise in somatic healing practices, helping ensure Mani's tools address both the mind and body in the process of emotional growth and recovery.",
      image: "/assets/Team Photos/Michaela Katz.png",
    },
    {
      name: "Michelle Falanga",
      role: "Emmy Award-Winning Voice Artist",
      bio: "Michelle's award-winning voice artistry brings warmth and authenticity to Mani's guided experiences, creating a sense of calm and connection through every audio interaction.",
      image: "/assets/Team Photos/Michelle Falanga.png",
    },
    {
      name: "Stephen Coghill",
      role: "Award-Winning Composer, Producer & Audio Engineer",
      bio: "Stephen's expertise in music composition and sound design shapes the sonic identity of Mani, creating audio environments that support reflection, calm, and emotional processing.",
      image: "/assets/Team Photos/Stephen CogHill.png",
    },
  ];

  const howWeCreate = [
    {
      step: "01",
      title: "Identify",
      desc: "We focus on the real issues people need help understanding and navigating.",
    },
    {
      step: "02",
      title: "Research",
      desc: "We draw upon decades of professional experience, established research, and expert insight.",
    },
    {
      step: "03",
      title: "Develop",
      desc: "We create practical resources people can use in everyday life.",
    },
    {
      step: "04",
      title: "Evaluate",
      desc: "We review and strengthen our resources to ensure they remain accurate, relevant, and useful.",
    },
  ];

  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">

        {/* HERO SECTION */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="max-w-4xl space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
              ABOUT MANI
            </span>
            <h1 className="font-serif-heading text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-[#0E2E1E] leading-[0.96] tracking-tight">
              Built To Make A Difference
            </h1>
            <p className="text-xl sm:text-2xl text-[#1C2826] font-normal leading-relaxed">
              Too many people struggle in silence, unsure where to turn or what to do next.
            </p>
            <p className="text-lg sm:text-xl text-[#1C2826] font-normal leading-relaxed">
              Mani was created to make emotional support simple, accessible and practical for everyday life.
            </p>
          </motion.div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-2">
              OUR FOUNDER
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E]">
              Meet Manasa Reddy
            </h2>
          </motion.div>

          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-5">
                <div className="relative w-full max-w-[420px] aspect-square mx-auto rounded-2xl overflow-hidden shadow-xl border border-mist-grey bg-[#0E2E1E]">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold text-[#0E2E1E] uppercase tracking-widest block mb-1">
                    {founder.role}
                  </span>
                  <h3 className="font-serif-heading text-4xl sm:text-5xl text-[#0E2E1E]">
                    {founder.name}
                  </h3>
                </div>
                <p className="text-base text-[#1C2826] font-normal leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* EXPERTS SECTION */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-2">
              BUILT BY EXPERTS
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-5xl text-[#0E2E1E]">
              The People Behind Mani
            </h2>
            <p className="text-base text-[#1C2826] font-normal leading-relaxed mt-4 max-w-2xl">
              The people behind Mani bring decades of experience, specialized expertise, and a shared commitment to excellence because we believe the quality of what we create depends on the quality of the people who create it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experts.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 bg-soft-white border border-mist-grey rounded-2xl space-y-4 flex flex-col justify-between hover:border-[#0E2E1E]/40 transition-all shadow-xs"
              >
                <div className="space-y-4">
                  <div className="w-full aspect-square rounded-xl overflow-hidden border border-mist-grey/60 shadow-xs bg-[#0E2E1E]">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif-heading text-xl sm:text-2xl text-[#0E2E1E] leading-snug">{m.name}</h3>
                    <span className="text-[11px] font-bold text-[#0E2E1E] uppercase tracking-wider block leading-tight">
                      {m.role}
                    </span>
                    <p className="text-xs sm:text-sm text-[#1C2826] font-normal leading-relaxed pt-1 whitespace-pre-line">
                      {m.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HOW WE CREATE */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 mb-24">
          <motion.div {...fadeIn} className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block mb-2">
              HOW WE CREATE
            </span>
            <h2 className="font-serif-heading text-4xl sm:text-5xl text-[#0E2E1E]">
              How We Turn Expertise Into Support
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {howWeCreate.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-9 bg-[#0E2E1E] text-editorial-white rounded-3xl space-y-5 shadow-xl border border-emerald-500/20 flex flex-col justify-between hover:border-cream-logo/30 transition-all"
              >
                <div className="space-y-3">
                  <span className="text-4xl font-serif-heading text-cream-logo/80 block">
                    {item.step}
                  </span>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl text-cream-logo">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#E8F0EC] font-normal leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="px-6 sm:px-12 md:px-16 lg:px-24 py-24">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto">
            <div className="bg-[#081F14] text-editorial-white rounded-2xl p-10 sm:p-16 text-center space-y-6 shadow-2xl">
              <span className="text-xs font-bold tracking-widest uppercase text-cream-logo block">
                SUPPORT DOESN&apos;T END HERE
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-5xl text-cream-logo">
                Join us in making emotional support accessible to everyone.
              </h2>
              <p className="text-base sm:text-lg text-[#E8F0EC] font-normal leading-relaxed max-w-2xl mx-auto">
                Explore our collections, watch our daily videos, or join our growing community.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/join-community"
                  className="px-10 py-5 bg-cream-logo text-[#0E2E1E] font-semibold rounded-xl hover:bg-white transition-all shadow-xl text-base"
                >
                  Join Our Community &rarr;
                </Link>
                <Link
                  href="/collections"
                  className="px-10 py-5 bg-editorial-white/10 text-cream-logo border border-editorial-white/20 font-semibold rounded-xl hover:bg-editorial-white/20 transition-all text-base"
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
