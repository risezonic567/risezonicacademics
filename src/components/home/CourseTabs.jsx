"use client";

import React, { useState } from "react";
import { moduleGroups } from "@/data/courses";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { CheckCircle2, Wrench, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CourseTabs() {
  const [activeTabId, setActiveTabId] = useState(moduleGroups[0].id);

  const activeGroup =
    moduleGroups.find((g) => g.id === activeTabId) || moduleGroups[0];

  return (
    <section className="py-20 sm:py-28 bg-surface border-t border-line relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Explore Deep-Dive Module Tracks"
          subtitle="Engineered with modern tools and practical frameworks to give you real hands-on execution mastery."
          titleClassName="text-[40px] font-heading font-semibold leading-tight tracking-tight text-text"
          subtitleClassName="mt-4 text-lg sm:text-xl text-muted font-normal leading-relaxed max-w-[65ch]"
        />

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-surface border border-line max-w-4xl mx-auto mb-10 sm:mb-14">
          {moduleGroups.map((group) => {
            const isActive = group.id === activeTabId;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveTabId(group.id)}
                className={`flex-1 min-w-[130px] sm:min-w-[150px] px-5 py-3 rounded-xl text-[17px] font-medium transition-colors duration-200 cursor-pointer text-center select-none ${
                  isActive
                    ? "bg-light text-accent"
                    : "text-muted hover:text-text"
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
            className="rounded-[24px] bg-surface border border-line p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Overview, Tools, and CTA (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-base font-medium text-accent">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    <span>Track Overview</span>
                  </div>
                  <h3 className="text-4xl font-heading font-semibold text-text">
                    {activeGroup.title}
                  </h3>
                  <p className="mt-3 text-lg text-muted leading-relaxed">
                    {activeGroup.description}
                  </p>
                </div>

                {/* Tools Stack */}
                <div className="p-4 rounded-xl bg-surface-2 border border-line">
                  <div className="flex items-center gap-2 text-base font-semibold text-accent mb-3">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Tools & platforms mastered</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeGroup.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-surface border border-line text-base font-medium text-text"
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
                    className="w-full text-[17px] sm:w-auto"
                  >
                    <span>Download Syllabus</span>
                  </OpenModalButton>
                  <Link
                    href="/courses"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-[17px] font-semibold text-accent hover:text-primary"
                  >
                    <span>Compare with all tracks</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Key Modules List (7 cols) */}
              <div className="lg:col-span-7 space-y-3">
                <div className="text-base font-semibold text-muted mb-2">
                  Topics covered in this track
                </div>
                {activeGroup.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="px-4 py-4 rounded-xl bg-surface-2 border border-line hover:border-accent transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center shrink-0 mt-0.5 text-accent">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-lg font-medium text-text leading-snug">
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
