"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { hiringPartners } from "@/data/partners";
import { SiteImage } from "@/components/ui/SiteImage";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { ArrowRight, TrendingUp, DollarSign, Award, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function PlacementSnapshot() {
  const shouldReduceMotion = useReducedMotion();
  const partnersList = [...hiringPartners, ...hiringPartners];

  const pillars = [
    {
      title: "1-on-1 Portfolio & Resume Audits",
      desc: "Practicing recruiters personally refine your case studies to pass automated ATS filters.",
    },
    {
      title: "Technical Mock Interview Rounds",
      desc: "Simulate live campaign troubleshooting and budget allocation rounds with agency directors.",
    },
    {
      title: "Direct Placement Drives",
      desc: "Fast-track introductions to active marketing vacancies at 150+ verified agency & brand partners.",
    },
  ];

  return (
    <section className="relative border-b border-line/60 bg-white py-20 sm:py-28 overflow-hidden">
      {/* Background ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[350px] w-[800px] bg-gradient-to-b from-[#D1FAE5]/40 via-[#2DD4BF]/10 to-transparent blur-3xl opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <Building2 className="h-3.5 w-3.5 text-[#14B8A6]" />
            <span>Dedicated Corporate Relations Cell</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text">
            Placement Track Record & Salary Benchmarks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Our corporate relations desk bridges the gap between academy training and full-time employment at top-tier digital agencies and brands.
          </p>
        </div>

        {/* 3 Metric Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 sm:mb-16">
          {/* Card 1: Peak Package */}
          <div className="group relative rounded-2xl border border-line/80 bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#14B8A6]/50 hover:shadow-[0_16px_36px_rgba(20,184,166,0.12)] hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D1FAE5] text-[#0F766E] transition-transform group-hover:scale-105">
                <TrendingUp className="h-6 w-6 text-[#14B8A6]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E] bg-[#D1FAE5]/60 px-2.5 py-1 rounded-md">
                Peak Package
              </span>
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-text group-hover:text-[#0F766E] transition-colors">
              {siteConfig.stats.highestPackage}
            </div>
            <p className="mt-2 text-sm text-muted">
              Highest compensation secured by recent campus drive graduates.
            </p>
          </div>

          {/* Card 2: Average CTC */}
          <div className="group relative rounded-2xl border-2 border-[#14B8A6] bg-[#F8FAF9] p-7 sm:p-8 shadow-[0_8px_30px_rgba(20,184,166,0.1)] transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14B8A6] text-white transition-transform group-hover:scale-105">
                <DollarSign className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#0F766E] px-2.5 py-1 rounded-md">
                Cohort Median
              </span>
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0F766E]">
              {siteConfig.stats.averagePackage}
            </div>
            <p className="mt-2 text-sm text-muted">
              Average starting salary across performance and growth tracks.
            </p>
          </div>

          {/* Card 3: Placement Ratio */}
          <div className="group relative rounded-2xl border border-line/80 bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#14B8A6]/50 hover:shadow-[0_16px_36px_rgba(20,184,166,0.12)] hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D1FAE5] text-[#0F766E] transition-transform group-hover:scale-105">
                <Award className="h-6 w-6 text-[#14B8A6]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F766E] bg-[#D1FAE5]/60 px-2.5 py-1 rounded-md">
                Hiring Success
              </span>
            </div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-text group-hover:text-[#0F766E] transition-colors">
              {siteConfig.stats.placementRate}
            </div>
            <p className="mt-2 text-sm text-muted">
              Of active job-seeking alumni placed within 90 days of graduation.
            </p>
          </div>
        </div>

        {/* Hiring Partners Marquee Banner */}
        <div className="rounded-3xl border border-line/80 bg-[#F8FAF9] p-8 sm:p-10 mb-14 shadow-xs">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              Where Our Graduates Build Careers & Lead Growth
            </span>
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Gradient Fade Edges */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#F8FAF9] to-transparent z-10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#F8FAF9] to-transparent z-10"
            />

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      x: ["0%", "-50%"],
                    }
              }
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex items-center gap-6 sm:gap-8 w-max"
            >
              {partnersList.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex items-center justify-center min-w-[150px] sm:min-w-[180px] h-[60px] sm:h-[68px] px-6 rounded-xl bg-white border border-line/80 hover:border-[#14B8A6]/50 transition-all select-none shadow-xs"
                >
                  <SiteImage
                    image={partner.image}
                    className="object-contain p-2 max-h-12"
                    sizes="180px"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 3 Pillars Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-line/70"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D1FAE5] text-[#0F766E] mt-0.5">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm sm:text-base text-text mb-1">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to /placement */}
        <Reveal className="text-center">
          <Link
            href="/placement"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#14B8A6] hover:bg-[#0D9488] text-white font-bold transition-all text-sm sm:text-base shadow-sm hover:shadow-[0_4px_16px_rgba(20,184,166,0.3)] group cursor-pointer"
          >
            <span>Explore Complete Placement Report & Company Roster</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
