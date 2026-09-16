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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm font-medium text-[#1C2826]/70">
              Last Updated: June 15, 2026
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-8 text-base text-[#1C2826] font-normal leading-relaxed border-t border-mist-grey pt-8">
            <p className="text-lg leading-relaxed font-normal">
              <strong className="font-bold lowercase">mani</strong>&trade; (&ldquo;<strong className="font-bold lowercase">mani</strong>,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the information you share with us.
            </p>

            <p className="text-sm text-[#0E2E1E] font-semibold">
              <strong className="font-bold lowercase">mani</strong>&trade; is owned and operated by Moose Ventures LLC.
            </p>

            <p>
              This Privacy Policy explains what information we collect through the <strong className="font-bold lowercase">mani</strong>&trade; website, how we use that information, how we protect it, and the choices available to you.
            </p>

            {/* Information We Collect */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Information We Collect
              </h2>
              
              <h3 className="font-serif-heading text-xl text-[#0E2E1E] pt-2">
                Information You Voluntarily Provide
              </h3>
              <p>We collect information you choose to provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Name</li>
                <li>Email address</li>
                <li>Contact information</li>
                <li>Beta application responses</li>
                <li>Survey responses</li>
                <li>Feedback submissions</li>
                <li>Information submitted through contact forms</li>
                <li>Information provided when joining our community</li>
                <li>Information provided when communicating with us</li>
              </ul>

              <h3 className="font-serif-heading text-xl text-[#0E2E1E] pt-4">
                Automatically Collected Information
              </h3>
              <p>When you visit our website, we may automatically collect certain information through cookies, analytics tools, and similar technologies, including:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Website interactions</li>
                <li>Referral sources</li>
                <li>General geographic location information</li>
                <li>Performance and diagnostic information</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                How We Use Information
              </h2>
              <p>We use information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Process beta applications</li>
                <li>Communicate application status</li>
                <li>Send beta program updates</li>
                <li>Send community updates</li>
                <li>Respond to questions, feedback, and support requests</li>
                <li>Improve the website experience</li>
                <li>Understand how visitors interact with our website</li>
                <li>Measure website performance</li>
                <li>Improve our products and services</li>
                <li>Evaluate marketing effectiveness</li>
                <li>Maintain website security and integrity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Email Communications */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Email Communications
              </h2>
              <p>If you provide your email address, we may send communications related to <strong className="font-bold lowercase">mani</strong>&trade;, including:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Beta application updates</li>
                <li>Product announcements</li>
                <li>Launch announcements</li>
                <li>Collection releases</li>
                <li>Community announcements</li>
                <li>Company updates</li>
                <li>News and educational content</li>
                <li>Important service-related notices</li>
              </ul>
              <p className="text-sm text-[#1C2826]/80 pt-2">
                You may unsubscribe from non-essential communications at any time by using the unsubscribe link included in our emails.
              </p>
              <p className="text-sm text-[#1C2826]/80">
                We may continue to send important administrative or service-related communications when necessary.
              </p>
            </div>

            {/* Beta Program Communications */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Beta Program Communications
              </h2>
              <p>If you apply for or participate in the <strong className="font-bold lowercase">mani</strong>&trade; beta program, we may use your information to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Process beta applications</li>
                <li>Communicate application status</li>
                <li>Send acceptance, waitlist, or rejection notifications</li>
                <li>Provide onboarding instructions</li>
                <li>Provide community access information</li>
                <li>Request feedback</li>
                <li>Coordinate testing activities</li>
                <li>Improve the beta experience</li>
              </ul>
            </div>

            {/* Cookies and Analytics */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Cookies and Analytics
              </h2>
              <p>
                We use cookies, analytics technologies, pixels, and similar tools to better understand how visitors interact with our website and to improve user experience.
              </p>
              <p className="font-medium text-[#0E2E1E]">These technologies help us:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Measure website traffic</li>
                <li>Understand visitor engagement</li>
                <li>Improve website performance</li>
                <li>Evaluate marketing efforts</li>
                <li>Improve functionality</li>
                <li>Improve products and services</li>
              </ul>
              <p className="text-sm text-[#1C2826]/80 pt-2">
                Most web browsers allow you to manage or disable cookies through browser settings.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Third-Party Services
              </h2>
              <p>
                We may use trusted third-party providers to support the operation of our business, including services related to:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Website hosting</li>
                <li>Email communications</li>
                <li>Analytics</li>
                <li>Application management</li>
                <li>Customer support</li>
                <li>Community management</li>
                <li>Payment processing</li>
                <li>Security and infrastructure</li>
              </ul>
              <p>
                These providers may process information only as necessary to perform services on our behalf.
              </p>
              <div className="p-6 bg-[#0E2E1E] text-editorial-white rounded-2xl space-y-2 shadow-md">
                <h3 className="font-serif-heading text-xl text-cream-logo">
                  We do not sell personal information.
                </h3>
                <p className="text-sm text-[#E8F0EC]">
                  We may disclose information if required by law or if we believe disclosure is necessary to protect the rights, safety, security, or property of <strong className="font-bold lowercase">mani</strong>&trade;, our users, or others.
                </p>
              </div>
            </div>

            {/* User Rights */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                User Rights
              </h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-[#1C2826]/90">
                <li>Request access to your information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent to certain communications</li>
                <li>Request information regarding how your data is used</li>
                <li>Request a copy of information you have provided</li>
              </ul>
              <p className="pt-2">
                To exercise these rights, please contact us.
              </p>
            </div>

            {/* Information Retention */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Information Retention
              </h2>
              <p>
                We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, enforce agreements, and operate our business.
              </p>
              <p className="text-sm text-[#1C2826]/80">
                The length of time information is retained may vary depending on the nature of the information and the purpose for which it was collected.
              </p>
            </div>

            {/* Data Security */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Data Security
              </h2>
              <p>
                We take reasonable administrative, technical, and organizational measures to protect the information we collect.
              </p>
              <p className="text-sm text-[#1C2826]/80">
                However, no method of transmission over the internet or method of electronic storage is completely secure. Therefore, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Age Requirement */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Age Requirement
              </h2>
              <p>
                The <strong className="font-bold lowercase">mani</strong>&trade; website, products, services, community spaces, and future applications are intended for individuals who are at least 18 years of age.
              </p>
              <p>
                By using the website, you represent and warrant that you are 18 years of age or older.
              </p>
              <p className="text-sm text-[#1C2826]/80">
                If we become aware that personal information has been collected from an individual under the age of 18, we may take steps to delete such information.
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time as our website, products, services, and legal obligations evolve.
              </p>
              <p>
                Any updates will be posted on this page along with an updated Last Updated date.
              </p>
              <p>
                Your continued use of the website after changes become effective constitutes acceptance of the revised Privacy Policy.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Contact
              </h2>
              <p>
                If you have questions regarding this Privacy Policy, please contact:{" "}
                <a href="mailto:contact@mymani.ai" className="font-semibold text-[#0E2E1E] underline">
                  contact@mymani.ai
                </a>
              </p>
            </div>

            {/* Navigation links */}
            <div className="pt-8 border-t border-mist-grey flex justify-between items-center text-xs font-bold text-[#0E2E1E]">
              <Link href="/terms" className="underline hover:text-emerald-700">
                &larr; View Terms of Use
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
