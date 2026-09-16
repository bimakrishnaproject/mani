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
            <p className="text-sm font-semibold text-[#0E2E1E]">
              <strong className="font-bold lowercase">mani</strong>&trade; is owned and operated by Moose Ventures LLC.
            </p>

            <p>
              The information, content, products, resources, videos, books, workbooks, coloring books, posters, audio recordings, collections, app content, and materials provided by <strong className="font-bold lowercase">mani</strong>&trade; are intended solely for educational, informational, and personal development purposes.
            </p>

            <p className="text-lg font-medium text-[#0E2E1E]">
              By accessing or using the <strong className="font-bold lowercase">mani</strong>&trade; website, products, services, content, community spaces, or future applications, you acknowledge and agree to the terms of this Disclaimer.
            </p>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                Educational Purposes Only
              </h2>
              <p>
                <strong className="font-bold lowercase">mani</strong>&trade; provides educational content designed to help individuals learn about topics related to emotional well-being, relationships, emotional intelligence, communication, self-awareness, personal growth, and life challenges.
              </p>
              <p>
                The information provided through <strong className="font-bold lowercase">mani</strong>&trade; is intended for educational and informational purposes only and should not be considered professional advice of any kind.
              </p>
              <p>
                Nothing contained on this website should be interpreted as medical, psychological, psychiatric, therapeutic, legal, financial, or professional advice.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                Not Medical Advice
              </h2>
              <p>
                <strong className="font-bold lowercase">mani</strong>&trade; does not provide medical advice.
              </p>
              <p>
                The information available through our website, products, resources, community spaces, videos, books, or applications should not be used as a substitute for medical advice, diagnosis, treatment, or care from a qualified healthcare professional.
              </p>
              <p>
                Always seek the advice of your physician or other qualified healthcare provider regarding any medical concerns or health-related decisions.
              </p>
              <p>
                Never disregard professional medical advice or delay seeking treatment because of information obtained through <strong className="font-bold lowercase">mani</strong>&trade;.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                Not Mental Health Treatment
              </h2>
              <p>
                <strong className="font-bold lowercase">mani</strong>&trade; is not a mental health treatment provider.
              </p>
              <p>
                The content, products, services, resources, and materials offered by <strong className="font-bold lowercase">mani</strong>&trade; are not intended to diagnose, treat, cure, prevent, manage, or address any mental health condition, psychiatric disorder, emotional disorder, illness, or medical condition.
              </p>
              <p>
                If you are experiencing mental health concerns, we encourage you to seek assistance from a qualified mental health professional.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                Not Therapy
              </h2>
              <p>
                <strong className="font-bold lowercase">mani</strong>&trade; is not therapy, counseling, psychotherapy, psychiatric treatment, coaching, clinical care, or any other form of healthcare service.
              </p>
              <p>
                Accessing our website, using our products, participating in our community, or interacting with our content does not create a therapist-client relationship, counselor-client relationship, doctor-patient relationship, coaching relationship, or any other professional relationship.
              </p>
              <p>
                No professional relationship is created through the use of <strong className="font-bold lowercase">mani</strong>&trade;.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                App-Based Support
              </h2>
              <p>
                The <strong className="font-bold lowercase">mani</strong>&trade; app and any future digital experiences are designed to provide educational content, guided exercises, self-reflection tools, learning resources, and personal development experiences.
              </p>
              <p>
                These tools are not intended to replace professional healthcare, mental health treatment, crisis intervention, therapy, counseling, psychiatric care, or medical advice.
              </p>
              <p>
                Any recommendations, exercises, prompts, assessments, insights, or content provided through the app are intended solely for informational and educational purposes.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                Not a Diagnosis
              </h2>
              <p>
                <strong className="font-bold lowercase">mani</strong>&trade; does not diagnose medical conditions, mental health conditions, psychiatric disorders, emotional disorders, or any other health-related issue.
              </p>
              <p>
                Any information presented through the website, products, resources, videos, books, applications, or community spaces should not be interpreted as a diagnosis, clinical opinion, treatment recommendation, or professional assessment.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                Not Emergency Support
              </h2>
              <p className="font-semibold text-red-700">
                <strong className="font-bold lowercase">mani</strong>&trade; is not a crisis service, emergency service, hotline, emergency response provider, or suicide prevention service.
              </p>
              <p>
                Do not rely on <strong className="font-bold lowercase">mani</strong>&trade; during an emergency or crisis situation.
              </p>
              <p>
                If you believe you may be a danger to yourself or others, call 911 or your local emergency services immediately.
              </p>
              <p>
                If you are experiencing suicidal thoughts, thoughts of self-harm, or a mental health crisis, call or text 988 in the United States or contact your local emergency services or crisis hotline immediately.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                Seek Professional Support When Appropriate
              </h2>
              <p>
                Some situations require professional care beyond the educational resources provided by <strong className="font-bold lowercase">mani</strong>&trade;.
              </p>
              <p>
                If you are experiencing severe emotional distress, persistent mental health concerns, trauma, abuse, substance use concerns, suicidal thoughts, self-harm, or any condition significantly affecting your well-being, we strongly encourage you to seek support from a qualified healthcare provider or mental health professional.
              </p>
              <p>
                Professional care can provide assessment, diagnosis, treatment, intervention, and support that <strong className="font-bold lowercase">mani</strong>&trade; does not offer.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                Third-Party Experts and Contributors
              </h2>
              <p>
                <strong className="font-bold lowercase">mani</strong>&trade; may feature content created by psychologists, therapists, educators, coaches, researchers, subject matter experts, and other contributors.
              </p>
              <p>
                The inclusion of expert-created content does not create a professional-client relationship between users and any contributor associated with <strong className="font-bold lowercase">mani</strong>&trade;.
              </p>
              <p>
                Any information provided by contributors remains educational and informational in nature and should not be interpreted as individualized advice, diagnosis, treatment, counseling, therapy, or professional services.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                No Guarantees
              </h2>
              <p>
                Individual experiences and outcomes vary.
              </p>
              <p>
                <strong className="font-bold lowercase">mani</strong>&trade; makes no representations, warranties, or guarantees regarding any outcomes, results, improvements, benefits, or experiences that may arise from the use of our content, products, services, resources, community spaces, or applications.
              </p>
              <p>
                Any actions you take based on information obtained through <strong className="font-bold lowercase">mani</strong>&trade; are taken at your own discretion and risk.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                Limitation of Reliance
              </h2>
              <p>
                You should not rely solely on information provided through <strong className="font-bold lowercase">mani</strong>&trade; when making medical, mental health, legal, financial, or other significant life decisions.
              </p>
              <p>
                Whenever appropriate, seek guidance from qualified professionals who can evaluate your individual circumstances.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-mist-grey/40">
              <h2 className="font-serif-heading text-2xl text-[#0E2E1E]">
                Contact
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
