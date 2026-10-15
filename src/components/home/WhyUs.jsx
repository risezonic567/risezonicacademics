"use client";

import React from "react";
import {
  Users2,
  Briefcase,
  Coins,
  GraduationCap,
  Sparkles,
  Network,
  CheckCircle2,
} from "lucide-react";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/Reveal";

export function WhyUs() {
  const features = [
    {
      num: "01",
      icon: Users2,
      title: "Live Industry Mentors",
      description:
        "Learn directly from active marketing practitioners leading campaigns at premier agencies and high-growth brands.",
      benefit: "Weekly 1-on-1 Strategy Office Hours",
    },
    {
      num: "02",
      icon: Coins,
      title: "Real Ad Spend Practice Budget",
      description:
        "Experience true conversion stakes. Every learner receives live ad budgets to configure and optimize real Meta & Google Ads.",
      benefit: "Zero Fake Mockups — Real Conversion Money",
    },
    {
      num: "03",
      icon: Briefcase,
      title: "Live Client Capstone Projects",
      description:
        "Build audited case studies by executing live growth strategies for real businesses, giving you an undeniable hireable portfolio.",
      benefit: "Verified Live Portfolio Deliverables",
    },
    {
      num: "04",
      icon: GraduationCap,
      title: "Intimate Cohort Sizes",
      description:
        "Strict batch size limits ensure personalized feedback, dedicated copy audits, and direct attention from lead mentors.",
      benefit: "Capped Batch Size For Maximum Focus",
    },
    {
      num: "05",
      icon: Sparkles,
      title: "Corporate Placement Cell",
      description:
        "Direct access to 150+ hiring partners, comprehensive resume optimization, technical interview prep, and salary negotiation drills.",
      benefit: "Direct Interviews With Hiring Managers",
    },
    {
      num: "06",
      icon: Network,
      title: "Lifetime Alumni Mastermind",
      description:
        "Continuous access to mentor mastermind sessions, fresh agency recruitment alerts, campaign review vaults, and peer networking.",
      benefit: "Continuous Career & Campaign Mentorship",
    },
  ];

  return (
    <section className="relative border-b border-line/60 bg-white py-20 sm:py-28 overflow-hidden">
      {/* Background ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[200px] w-[800px] bg-gradient-to-b from-[#D1FAE5]/30 to-transparent blur-3xl opacity-80"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-3">
              <Sparkles className="h-3.5 w-3.5 text-[#14B8A6]" />
              <span>The Risezonic Advantage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-text leading-[1.15] tracking-tight">
              Designed For Real Marketing Impact, Not Boring Theory
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
              We eliminated outdated slides and theoretical exams. Everything you execute is calibrated for immediate ROI on active ad dashboards.
            </p>
          </Reveal>
        </div>

        <StaggerContainer
          staggerDelay={0.07}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={index} className="h-full flex">
                <div className="group relative flex w-full flex-col justify-between rounded-2xl border border-line/80 bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#14B8A6]/50 hover:shadow-[0_16px_36px_rgba(20,184,166,0.1)]">
                  {/* Watermark Step Number */}
                  <span className="pointer-events-none absolute top-5 right-6 font-heading text-4xl font-extrabold text-line/60 transition-colors group-hover:text-[#D1FAE5]">
                    {item.num}
                  </span>

                  <div>
                    {/* Icon container with #D1FAE5 background */}
                    <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#D1FAE5] text-[#0F766E] transition-all duration-300 group-hover:bg-[#14B8A6] group-hover:text-white group-hover:scale-105 group-hover:shadow-[0_6px_16px_rgba(20,184,166,0.25)]">
                      <Icon className="h-6 w-6 transition-colors" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-text mb-2.5 transition-colors group-hover:text-[#0F766E]">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Micro Benefit Tag at bottom */}
                  <div className="mt-6 pt-4 border-t border-line/60 flex items-center gap-2 text-xs font-semibold text-[#0F766E]">
                    <CheckCircle2 className="h-4 w-4 text-[#14B8A6] shrink-0" />
                    <span>{item.benefit}</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
