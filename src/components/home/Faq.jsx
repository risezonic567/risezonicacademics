"use client";

import React, { useState } from "react";
import { faqs } from "@/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="py-20 sm:py-28 bg-surface-2/40 border-y border-line relative">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[880px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          highlightWord="Questions"
          subtitle="Everything you need to know about our curriculum, live ad budgets, batch schedules, and placement assistance."
        />

        <div className="space-y-3.5 mt-10">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-surface border-accent/40 shadow-lg shadow-accent/5 ring-1 ring-accent/20"
                    : "bg-surface/70 border-line hover:border-primary/40"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-accent shrink-0 hidden sm:block" />
                    <span className="font-heading font-semibold text-text text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`p-1.5 rounded-full border border-line text-muted transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-accent border-accent/40" : ""
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
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-muted text-xs sm:text-sm border-t border-line/40 leading-relaxed sm:pl-13">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
