"use client";

import React, { useState } from "react";
import { moduleGroups } from "@/data/courses";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { CheckCircle2, Wrench, Sparkles, ArrowRight, Download, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CourseTabs() {
  const [activeTabId, setActiveTabId] = useState(moduleGroups[0].id);

  const activeGroup =
    moduleGroups.find((g) => g.id === activeTabId) || moduleGroups[0];

  return (
    <section className="relative border-b border-line/60 bg-white py-20 sm:py-28 overflow-hidden">
      {/* Background ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-[400px] w-[600px] bg-gradient-to-l from-[#D1FAE5]/40 to-transparent blur-3xl opacity-60"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <BookOpen className="h-3.5 w-3.5 text-[#14B8A6]" />
            <span>Comprehensive Curriculum</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text">
            Explore Deep-Dive Module Tracks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Engineered with modern tools, real-time analytics dashboards, and tactical frameworks to ensure true execution mastery.
          </p>
        </div>

        {/* Tab Buttons Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#F8FAF9] border border-line/80 max-w-4xl mx-auto mb-10 sm:mb-12 shadow-xs">
          {moduleGroups.map((group) => {
            const isActive = group.id === activeTabId;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveTabId(group.id)}
                className={`relative px-5 py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer text-center select-none ${
                  isActive
                    ? "bg-[#14B8A6] text-white shadow-[0_4px_14px_rgba(20,184,166,0.25)]"
                    : "text-muted hover:text-text hover:bg-white/80"
                }`}
              >
                {group.title}
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl bg-[#F8FAF9] border border-line/80 p-7 sm:p-10 lg:p-12 relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Overview, Tools, and CTA (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="mb-2.5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F766E] bg-[#D1FAE5] px-3 py-1 rounded-full">
                    <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
                    <span>Track Specialization</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text">
                    {activeGroup.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                    {activeGroup.description}
                  </p>
                </div>

                {/* Tools Stack */}
                <div className="p-5 rounded-2xl bg-white border border-line/80 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-3">
                    <Wrench className="w-4 h-4 text-[#14B8A6]" />
                    <span>Industry Tools & Platforms</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeGroup.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-lg bg-[#D1FAE5]/60 border border-[#D1FAE5] text-xs font-bold text-[#0F766E]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <OpenModalButton
                    source={`module-${activeGroup.id}`}
                    course={activeGroup.id}
                    variant="primary"
                    className="w-full sm:w-auto px-6 py-3 text-sm font-bold bg-[#14B8A6] hover:bg-[#0D9488] text-white shadow-xs transition-all hover:shadow-[0_4px_16px_rgba(20,184,166,0.3)] flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Module Syllabus</span>
                  </OpenModalButton>

                  <Link
                    href="/courses"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-bold text-[#0F766E] hover:text-[#14B8A6] transition-colors"
                  >
                    <span>View all tracks</span>
                    <ArrowRight className="w-4 h-4 text-[#14B8A6]" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Modules List (7 cols) */}
              <div className="lg:col-span-7 space-y-3.5">
                <div className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  Practical Topics & Skills Covered
                </div>

                {activeGroup.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="group px-5 py-4 rounded-xl bg-white border border-line/80 hover:border-[#14B8A6]/60 hover:shadow-sm transition-all flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#D1FAE5] text-[#0F766E] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#14B8A6] group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-sm sm:text-base font-semibold text-text group-hover:text-[#0F766E] transition-colors leading-snug">
                        {topic}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
