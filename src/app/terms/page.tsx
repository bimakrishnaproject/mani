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
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-editorial-white text-ink-black flex flex-col justify-between overflow-x-hidden">
      <Header />

      <main className="flex-grow pt-36 md:pt-48 pb-32">
        <section className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 space-y-12">
          
          <motion.div {...fadeIn} className="space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0E2E1E] bg-soft-signal-green px-4 py-1.5 rounded-full inline-block">
              LEGAL
            </span>
            <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl text-[#0E2E1E] leading-[1.05]">
              Terms of Use
            </h1>
            <p className="text-sm font-medium text-[#1C2826]/70">
              Last Updated: June 15, 2026
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-8 text-base text-[#1C2826] font-normal leading-relaxed border-t border-mist-grey pt-8">
            <p className="text-lg leading-relaxed font-normal">
              <strong>Welcome to mani&trade;.</strong>
            </p>

            <p className="text-sm text-[#0E2E1E] font-semibold">
              mani&trade; is owned and operated by Moose Ventures LLC.
            </p>

            <p>
              These Terms of Use govern your access to and use of the mani&trade; website, products, services, content, applications, communities, and related offerings. By accessing or using any part of the mani&trade; website, you agree to be bound by these Terms of Use. If you do not agree to these Terms, please do not use the website.
            </p>

            {/* Website Use & Eligibility */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Website Use &amp; Eligibility
              </h2>
              <p>
                You may access and use the mani&trade; website for lawful, personal, and non-commercial purposes only. You agree not to use the website in any way that may damage, disable, interfere with, disrupt, or impair the functionality, security, or operation of the website or related services.
              </p>
              <p>
                You must be at least 18 years old to access or use the mani&trade; website, products, services, community spaces, or applications. By using the website, you represent and warrant that you are at least 18 years of age.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Intellectual Property
              </h2>
              <p>
                All content available through mani&trade; is owned by or licensed to Moose Ventures LLC and is protected by applicable copyright, trademark, intellectual property, and other laws. This includes, but is not limited to: videos, books, workbooks, coloring books, posters, audio content, guided experiences, app content, collections, graphics, images, logos, branding, designs, text, frameworks, tools, research summaries, downloads, and digital products.
              </p>
              <p className="text-sm text-[#1C2826]/80">
                Unless expressly authorized in writing, no content may be copied, reproduced, modified, distributed, republished, transmitted, sold, licensed, displayed, or used for commercial purposes.
              </p>
            </div>

            {/* User Responsibilities & Prohibited Uses */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                User Responsibilities &amp; Prohibited Uses
              </h2>
              <p>By using the website, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Use the website lawfully</li>
                <li>Respect the intellectual property rights of mani&trade; and others</li>
                <li>Provide accurate information when submitting forms, applications, surveys, or feedback</li>
                <li>Refrain from attempting unauthorized access to any portion of the website or its systems</li>
                <li>Use the website in a manner that does not interfere with the rights or experience of other users</li>
              </ul>
              <p className="pt-2">You may not copy or exploit content without permission, use content for commercial purposes, upload malicious code, or misrepresent your identity.</p>
            </div>

            {/* User-Generated Content */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                User-Generated Content
              </h2>
              <p>
                If you submit comments, feedback, testimonials, reviews, suggestions, survey responses, beta feedback, application responses, or community posts to mani&trade;, you grant mani&trade; a non-exclusive, worldwide, royalty-free license to use, reproduce, publish, display, modify, distribute, and otherwise utilize such content for business, educational, operational, product development, and marketing purposes.
              </p>
            </div>

            {/* Beta Programs */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Beta Programs
              </h2>
              <p>
                mani&trade; may offer beta programs, early-access programs, pilot programs, or testing opportunities. By participating, you acknowledge that features may be incomplete, services may contain bugs, functionality may change without notice, and access may be suspended or terminated at any time. Participation does not create employment or ownership rights.
              </p>
            </div>

            {/* No Guarantees & Assumption of Risk */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                No Guarantees &amp; Assumption of Risk
              </h2>
              <p>
                The information, content, products, services, resources, and materials provided by mani&trade; are offered for informational and educational purposes only. Individual experiences and outcomes may vary. You assume full responsibility for any decisions, actions, outcomes, or consequences resulting from your use of the resources provided by mani&trade;.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Limitation of Liability
              </h2>
              <p className="text-sm text-[#1C2826]/90 leading-relaxed">
                To the fullest extent permitted by law, Moose Ventures LLC, its owners, employees, contractors, advisors, affiliates, contributors, licensors, and partners shall not be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising from or related to your use of or inability to use the website, reliance on content, or products offered. Your use of the website is entirely at your own risk.
              </p>
            </div>

            {/* Governing Law & Contact */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Governing Law &amp; Contact
              </h2>
              <p>
                These Terms of Use shall be governed by and interpreted in accordance with the laws of the State of Georgia, without regard to conflict of law principles.
              </p>
              <p className="font-medium text-[#0E2E1E]">
                Questions regarding these Terms of Use may be directed to:{" "}
                <a href="mailto:contact@mymani.ai" className="underline hover:text-emerald-700">
                  contact@mymani.ai
                </a>
              </p>
            </div>

            {/* Navigation links */}
            <div className="pt-8 border-t border-mist-grey flex justify-between items-center text-xs font-bold text-[#0E2E1E]">
              <Link href="/privacy" className="underline hover:text-emerald-700">
                &larr; View Privacy Policy
              </Link>
              <Link href="/disclaimer" className="underline hover:text-emerald-700">
                View Disclaimer &rarr;
              </Link>
            </div>

          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
