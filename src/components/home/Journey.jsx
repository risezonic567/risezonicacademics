"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import {
  BookOpenCheck,
  CheckCircle2,
  Compass,
  FolderKanban,
  Megaphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Choose your direction",
    description:
      "Start with a track that fits your interests, experience, and the kind of marketing work you want to explore.",
    phase: "GET STARTED",
    outcome: "A clear learning focus",
    icon: Compass,
  },
  {
    num: "02",
    title: "Learn the foundations",
    description:
      "Build an understanding of channels, audiences, content, and analytics through lessons and practical demonstrations.",
    phase: "LEARN",
    outcome: "Core marketing concepts",
    icon: BookOpenCheck,
  },
  {
    num: "03",
    title: "Practice campaign decisions",
    description:
      "Work through campaign plans and creative, then use performance signals to understand what to adjust.",
    phase: "PRACTICE",
    outcome: "Campaign work and reviews",
    icon: Megaphone,
  },
  {
    num: "04",
    title: "Build work you can present",
    description:
      "Collect your projects into a portfolio and prepare to explain your approach in applications and interviews.",
    phase: "CAREER PREP",
    outcome: "Portfolio and interview practice",
    icon: FolderKanban,
  },
];

export function Journey() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-line/60 bg-[#F8FAF9] py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#D1FAE5]/40 via-[#2DD4BF]/10 to-transparent blur-3xl opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E]">
              <Sparkles className="h-3.5 w-3.5 text-[#14B8A6]" aria-hidden="true" />
              <span>Your learning roadmap</span>
            </div>

            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
              Build marketing skills, one step at a time.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              See how learning moves from choosing a direction to practicing campaigns and preparing to present your work.
            </p>

            <div className="mt-8 rounded-2xl border border-line/80 bg-white p-6 shadow-[0_8px_24px_rgba(20,184,166,0.06)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D1FAE5] text-[#0F766E]">
                  <Compass className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-text">Not sure where to start?</h3>
                  <p className="text-xs text-muted">Talk through your interests and goals.</p>
                </div>
              </div>

              <OpenModalButton
                source="journey-sticky-cta"
                variant="primary"
                className="w-full bg-[#14B8A6] py-3.5 text-sm font-bold text-white shadow-xs transition-all hover:bg-[#0D9488] hover:shadow-[0_4px_16px_rgba(20,184,166,0.3)]"
              >
                Find the right track
              </OpenModalButton>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted">
                <ShieldCheck className="h-4 w-4 text-[#14B8A6]" aria-hidden="true" />
                <span>Guidance based on your goals</span>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-6 top-8 hidden w-[2px] bg-gradient-to-b from-[#14B8A6] via-[#2DD4BF] to-[#D1FAE5] sm:block"
            />

            <div className="space-y-4 sm:space-y-5">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.num}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.45,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                      ease: "easeOut",
                    }}
                    className="group relative flex flex-col items-start gap-4 rounded-2xl border border-line/80 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/50 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)] sm:ml-4 sm:flex-row sm:gap-5 sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D1FAE5] to-[#CCFBF1] text-[#0F766E] shadow-sm transition-transform group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-heading text-lg font-bold text-text transition-colors group-hover:text-[#0F766E] sm:text-xl">
                          {step.title}
                        </h3>
                        <span className="inline-flex rounded-full bg-[#F0F9F7] px-3 py-1 text-[10px] font-bold tracking-wider text-[#0F766E]">
                          {step.phase}
                        </span>
                      </div>

                      <p className="mb-3 text-sm leading-relaxed text-muted">{step.description}</p>

                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F766E]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#14B8A6]" aria-hidden="true" />
                        <span>{step.outcome}</span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
