"use client";

import React, { useState } from "react";
import { faqs } from "@/data/faqs";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { OpenModalButton } from "@/components/ui/OpenModalButton";

export function Faq() {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Structured Data (FAQPage JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative border-b border-line/60 bg-[#F8FAF9] py-20 sm:py-28 overflow-hidden">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[700px] bg-gradient-to-b from-[#D1FAE5]/40 via-[#2DD4BF]/10 to-transparent blur-3xl opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-[880px] px-5 sm:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-[#14B8A6]" />
            <span>Clear Answers</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our curriculum, live ad spend budgets, batch timings, and placement commitments.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#14B8A6] shadow-[0_8px_24px_rgba(20,184,166,0.1)] ring-1 ring-[#14B8A6]/20"
                    : "bg-white border-line/80 hover:border-[#14B8A6]/40 shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="font-heading font-bold text-text text-base sm:text-lg pr-2 leading-snug">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#D1FAE5] text-[#0F766E] rotate-180"
                        : "bg-[#F0F5F3] text-muted hover:text-text"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-muted text-sm sm:text-base border-t border-line/50 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 rounded-2xl border border-line/80 bg-white p-6 sm:p-7 text-center shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D1FAE5] text-[#0F766E]">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-text">
                Still have specific questions?
              </h4>
              <p className="text-xs sm:text-sm text-muted">
                Speak directly with an academic admissions advisor.
              </p>
            </div>
          </div>

          <OpenModalButton
            source="faq-help"
            variant="primary"
            className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-bold bg-[#14B8A6] hover:bg-[#0D9488] text-white shadow-xs transition-all hover:shadow-[0_4px_16px_rgba(20,184,166,0.3)] shrink-0"
          >
            <span>Ask Us On Call</span>
          </OpenModalButton>
        </div>
      </div>
    </section>
  );
}
