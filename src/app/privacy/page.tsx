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
              <strong>mani&trade;</strong> (&ldquo;mani,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the information you share with us.
            </p>

            <p className="text-sm text-[#0E2E1E] font-semibold">
              mani&trade; is owned and operated by Moose Ventures LLC.
            </p>

            <p>
              This Privacy Policy explains what information we collect through the <strong>mani&trade;</strong> website, how we use that information, how we protect it, and the choices available to you.
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
              <p>If you provide your email address, we may send communications related to mani&trade;, including:</p>
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
                You may unsubscribe from non-essential communications at any time by using the unsubscribe link included in our emails. We may continue to send important administrative or service-related communications when necessary.
              </p>
            </div>

            {/* Beta Program Communications */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Beta Program Communications
              </h2>
              <p>If you apply for or participate in the mani&trade; beta program, we may use your information to:</p>
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

            {/* Cookies & Third-Party Services */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Cookies, Analytics &amp; Third-Party Services
              </h2>
              <p>
                We use cookies, analytics technologies, pixels, and similar tools to better understand how visitors interact with our website and to improve user experience.
              </p>
              <div className="p-6 bg-[#0E2E1E] text-editorial-white rounded-2xl space-y-2">
                <h3 className="font-serif-heading text-xl text-cream-logo">
                  We Do Not Sell Personal Information
                </h3>
                <p className="text-sm text-[#E8F0EC]">
                  We never sell, rent, or trade your personal information. We may use trusted third-party providers only as necessary to perform essential services on our behalf (hosting, communications, customer support, and security).
                </p>
              </div>
            </div>

            {/* User Rights & Retention */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                User Rights &amp; Retention
              </h2>
              <p>Depending on your location, you may have the right to request access to your information, request correction or deletion, or request a copy of the data you have provided.</p>
              <p className="text-sm text-[#1C2826]/80">
                We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations, and operate our business.
              </p>
            </div>

            {/* Age Requirement */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Age Requirement
              </h2>
              <p>
                The mani&trade; website, products, services, community spaces, and future applications are intended exclusively for individuals who are at least 18 years of age. By using the website, you represent and warrant that you are 18 years of age or older.
              </p>
            </div>

            {/* Changes & Contact */}
            <div className="space-y-4 pt-4 border-t border-mist-grey/60">
              <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0E2E1E]">
                Changes &amp; Contact
              </h2>
              <p>
                We may update this Privacy Policy from time to time as our website, products, services, and legal obligations evolve. Any updates will be posted on this page along with an updated Last Updated date.
              </p>
              <p className="font-medium text-[#0E2E1E]">
                Questions regarding this Privacy Policy may be directed to:{" "}
                <a href="mailto:contact@mymani.ai" className="underline hover:text-emerald-700">
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
