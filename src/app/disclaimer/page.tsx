"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden selection:bg-[#0E2E1E] selection:text-white">
      <Header />

      <main className="flex-grow pt-32 sm:pt-40 md:pt-48 pb-32">
        <section className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 space-y-10">
          
          <motion.div {...fadeIn} className="space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] block">
              LEGAL NOTICE
            </span>
            <h1 className="font-serif-heading text-4xl sm:text-6xl text-[#0E2E1E] tracking-tight">
              Disclaimer
            </h1>
            <p className="text-xs text-[#1C2826]/70 uppercase tracking-wider font-semibold">
              Last Updated: June 15, 2026
            </p>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="space-y-8 text-base text-[#1C2826] font-normal leading-relaxed border-t border-mist-grey/60 pt-8"
          >
            <p className="text-lg font-medium text-[#0E2E1E]">
              By accessing or using the mani™ website, products, services, content, community spaces, or future applications, you acknowledge and agree to the terms of this Disclaimer.
            </p>

            <div className="p-6 bg-[#0E2E1E] text-editorial-white rounded-2xl space-y-2 shadow-md">
              <p className="text-sm font-medium text-cream-logo">
                mani™ provides educational and informational content intended to support learning and personal growth. mani™ is not therapy, counseling, mental health treatment, crisis support, medical care, or a substitute for professional advice, diagnosis, or treatment.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                1. Educational and Informational Purposes Only
              </h2>
              <p>
                All content provided through mani™, including books, workbooks, videos, audio recordings, articles, guided reflections, breathing exercises, and community discussions, is created strictly for educational, informational, and self-reflection purposes.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                2. No Medical, Mental Health, or Professional Advice
              </h2>
              <p>
                The information available through our website, products, resources, community spaces, videos, books, or applications should not be used as a substitute for medical advice, diagnosis, treatment, or care from a qualified healthcare professional.
              </p>
              <p>
                Always seek the advice of a physician, licensed psychologist, psychiatrist, licensed therapist, or other qualified healthcare provider regarding any mental health, medical, or psychological condition. Never disregard professional advice or delay seeking treatment because of something you have read, watched, heard, or experienced through mani™.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                3. No Therapist-Client or Healthcare Provider Relationship
              </h2>
              <p>
                Accessing our website, using our products, participating in our community, or interacting with our content does not create a therapist-client relationship, counselor-client relationship, doctor-patient relationship, coaching relationship, or any other professional relationship.
              </p>
              <p>
                Any interactions, communications, reflections, or prompts provided through the website, app, or email communications are automated, educational, or general in nature and do not constitute individualized clinical assessment or healthcare services.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                4. Not for Emergency or Crisis Situations
              </h2>
              <p className="font-semibold text-red-700">
                mani™ does not provide crisis intervention, emergency services, medical treatment, or urgent mental health support.
              </p>
              <p>
                If you are experiencing a mental health emergency, thoughts of self-harm, thoughts of harming others, severe psychological distress, or a medical emergency, please immediately:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Call 911 (or your local emergency services)</li>
                <li>Go to the nearest hospital emergency room</li>
                <li>Call or text 988 to connect with the Suicide &amp; Crisis Lifeline (US)</li>
                <li>Text HOME to 741741 to connect with the Crisis Text Line</li>
              </ul>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                5. Personal Responsibility and Self-Care
              </h2>
              <p>
                Exploring personal growth, emotional challenges, relationships, boundaries, and past experiences can bring up uncomfortable emotions or distress. You acknowledge and agree that you are solely responsible for your own well-being, decisions, actions, and safety when engaging with our resources.
              </p>
              <p>
                If at any point engaging with our materials causes significant distress, you should pause use and consider consulting a qualified mental health professional.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                6. No Guarantee of Outcomes
              </h2>
              <p>
                mani™ makes no representations, warranties, or guarantees regarding any outcomes, results, improvements, benefits, or experiences that may arise from the use of our content, products, services, resources, community spaces, or applications.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, mani™, Moose Ventures LLC, its officers, founders, advisors, contributors, employees, contractors, and partners shall not be held liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use the website, products, content, resources, or applications.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                8. Contact
              </h2>
              <p>
                Questions regarding this Disclaimer may be directed to:{" "}
                <a href="mailto:contact@mymani.ai" className="font-semibold text-[#0E2E1E] underline">
                  contact@mymani.ai
                </a>
              </p>
            </div>
          </motion.div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
