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
            <p className="text-lg leading-relaxed font-semibold text-[#0E2E1E]">
              Welcome to <strong className="font-bold lowercase">mani</strong>&trade;.
            </p>

            <p className="text-sm text-[#0E2E1E] font-semibold">
              <strong className="font-bold lowercase">mani</strong>&trade; is owned and operated by Moose Ventures LLC.
            </p>

            <p>
              These Terms of Use govern your access to and use of the <strong className="font-bold lowercase">mani</strong>&trade; website, products, services, content, applications, communities, and related offerings. By accessing or using any part of the <strong className="font-bold lowercase">mani</strong>&trade; website, you agree to be bound by these Terms of Use. If you do not agree to these Terms, please do not use the website.
            </p>

            {/* Website Use */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Website Use
              </h2>
              <p>
                You may access and use the <strong className="font-bold lowercase">mani</strong>&trade; website for lawful, personal, and non-commercial purposes only.
              </p>
              <p>
                You agree not to use the website in any way that may damage, disable, interfere with, disrupt, or impair the functionality, security, or operation of the website or related services.
              </p>
            </div>

            {/* Eligibility */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Eligibility
              </h2>
              <p>
                You must be at least 18 years old to access or use the <strong className="font-bold lowercase">mani</strong>&trade; website, products, services, community spaces, or applications.
              </p>
              <p>
                By using the website, you represent and warrant that you are at least 18 years of age.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Intellectual Property
              </h2>
              <p>
                All content available through <strong className="font-bold lowercase">mani</strong>&trade; is owned by or licensed to Moose Ventures LLC and is protected by applicable copyright, trademark, intellectual property, and other laws.
              </p>
              <p>This includes, but is not limited to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 list-disc pl-6 text-sm sm:text-base text-[#1C2826]/90">
                <li>Videos</li>
                <li>Books</li>
                <li>Workbooks</li>
                <li>Coloring books</li>
                <li>Posters</li>
                <li>Audio content</li>
                <li>Guided experiences</li>
                <li>App content</li>
                <li>Collections</li>
                <li>Website content</li>
                <li>Educational materials</li>
                <li>Graphics</li>
                <li>Images</li>
                <li>Logos</li>
                <li>Branding</li>
                <li>Designs</li>
                <li>Text</li>
                <li>Frameworks</li>
                <li>Tools</li>
                <li>Research summaries</li>
                <li>Downloads</li>
                <li>Digital products</li>
              </ul>
              <p className="pt-2">
                Unless expressly authorized in writing, no content may be copied, reproduced, modified, distributed, republished, transmitted, sold, licensed, displayed, or used for commercial purposes.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                User Responsibilities
              </h2>
              <p>By using the website, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Use the website lawfully</li>
                <li>Respect the intellectual property rights of <strong className="font-bold lowercase">mani</strong>&trade; and others</li>
                <li>Provide accurate information when submitting forms, applications, surveys, or feedback</li>
                <li>Refrain from attempting unauthorized access to any portion of the website or its systems</li>
                <li>Use the website in a manner that does not interfere with the rights or experience of other users</li>
              </ul>
            </div>

            {/* Prohibited Uses */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Prohibited Uses
              </h2>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Copy, reproduce, distribute, or exploit content without permission</li>
                <li>Use content for commercial purposes</li>
                <li>Remove copyright, trademark, or proprietary notices</li>
                <li>Attempt to interfere with website security or functionality</li>
                <li>Upload malicious code, viruses, or harmful software</li>
                <li>Use the website for unlawful purposes</li>
                <li>Misrepresent your identity or affiliation</li>
                <li>Attempt to gain unauthorized access to systems, servers, or accounts</li>
              </ul>
            </div>

            {/* User-Generated Content */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                User-Generated Content
              </h2>
              <p>
                If you submit comments, feedback, testimonials, reviews, suggestions, survey responses, beta feedback, application responses, community posts, or other content to <strong className="font-bold lowercase">mani</strong>&trade;, you grant <strong className="font-bold lowercase">mani</strong>&trade; a non-exclusive, worldwide, royalty-free license to use, reproduce, publish, display, modify, distribute, and otherwise utilize such content for business, educational, operational, product development, and marketing purposes.
              </p>
              <p>
                You represent and warrant that you have the right to provide such content and that it does not violate the rights of any third party.
              </p>
            </div>

            {/* Beta Programs */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Beta Programs
              </h2>
              <p>
                <strong className="font-bold lowercase">mani</strong>&trade; may offer beta programs, early-access programs, pilot programs, or testing opportunities.
              </p>
              <p>By participating, you acknowledge that:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Features may be incomplete</li>
                <li>Services may contain bugs or errors</li>
                <li>Functionality may change without notice</li>
                <li>Access may be modified, suspended, or terminated at any time</li>
                <li>Feedback provided may be used to improve products and services</li>
              </ul>
              <p className="pt-2">
                Participation in any beta program does not create ownership rights, employment relationships, partnership relationships, or compensation obligations unless expressly agreed in writing.
              </p>
            </div>

            {/* No Guarantees */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                No Guarantees
              </h2>
              <p>
                The information, content, products, services, resources, and materials provided by <strong className="font-bold lowercase">mani</strong>&trade; are offered for informational and educational purposes only.
              </p>
              <p>
                While we strive to provide accurate and helpful information, <strong className="font-bold lowercase">mani</strong>&trade; makes no guarantees regarding the accuracy, completeness, reliability, availability, effectiveness, or results of any content, product, service, or resource.
              </p>
              <p>
                Individual experiences and outcomes may vary.
              </p>
            </div>

            {/* Assumption of Risk */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Assumption of Risk
              </h2>
              <p>
                By using the <strong className="font-bold lowercase">mani</strong>&trade; website, products, services, resources, communities, content, and future applications, you acknowledge that your participation is voluntary and undertaken at your own discretion.
              </p>
              <p>
                You assume full responsibility for any decisions, actions, outcomes, or consequences resulting from your use of the information, products, services, or resources provided by <strong className="font-bold lowercase">mani</strong>&trade;.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Moose Ventures LLC, its owners, employees, contractors, advisors, affiliates, contributors, licensors, and partners shall not be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising from or related to:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Use of the website</li>
                <li>Inability to use the website</li>
                <li>Reliance on website content</li>
                <li>Products or services offered by <strong className="font-bold lowercase">mani</strong>&trade;</li>
                <li>Errors or omissions in content</li>
                <li>Interruptions in service</li>
                <li>Loss of data</li>
                <li>Technical failures</li>
                <li>Third-party actions</li>
              </ul>
              <p className="pt-2">
                Your use of the website and related services is entirely at your own risk.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Third-Party Links
              </h2>
              <p>
                The website may contain links to third-party websites, products, services, or resources.
              </p>
              <p>
                <strong className="font-bold lowercase">mani</strong>&trade; does not control and is not responsible for the content, policies, practices, availability, or accuracy of third-party websites or services.
              </p>
              <p>
                Accessing third-party resources is done at your own risk.
              </p>
            </div>

            {/* Termination */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Termination
              </h2>
              <p>
                We reserve the right to suspend, restrict, or terminate access to the website, community spaces, beta programs, or related services at any time and for any reason, without prior notice.
              </p>
            </div>

            {/* Changes to These Terms */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Changes to These Terms
              </h2>
              <p>
                We may update these Terms of Use from time to time.
              </p>
              <p>
                Any changes will be posted on this page along with an updated Last Updated date.
              </p>
              <p>
                Your continued use of the website after changes become effective constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Governing Law
              </h2>
              <p>
                These Terms of Use shall be governed by and interpreted in accordance with the laws of the State of Georgia, without regard to conflict of law principles.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Contact
              </h2>
              <p>
                Questions regarding these Terms of Use may be directed to:{" "}
                <a href="mailto:contact@mymani.ai" className="font-semibold text-[#0E2E1E] underline">
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
