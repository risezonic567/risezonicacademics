"use client";

import React from "react";
import { coursePlans } from "@/data/courses";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { Check, Star, ArrowRight, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export function Programs() {
  // Take top 3 core programs (Starter, Pro, Master)
  const corePlans = coursePlans.slice(0, 3);

  return (
    <section className="relative border-b border-line/60 bg-[#F8FAF9] py-20 lg:py-28 overflow-hidden">
      {/* Background glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[450px] w-[450px] rounded-full bg-gradient-to-b from-[#D1FAE5]/60 via-[#2DD4BF]/10 to-transparent blur-3xl opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-0 h-[450px] w-[450px] rounded-full bg-gradient-to-t from-[#D1FAE5]/60 via-[#14B8A6]/10 to-transparent blur-3xl opacity-60"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-3">
              <Sparkles className="h-3.5 w-3.5 text-[#14B8A6]" />
              <span>Job-Ready Learning Tracks</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text">
              Industry-Led Marketing Programs
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
              From beginner foundations to executive marketing leadership. Master high-converting digital campaigns with live advertising budget.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 font-semibold text-[#0F766E] hover:text-[#14B8A6] transition-colors text-base self-start md:self-end group"
          >
            <span>Compare all curriculums</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#14B8A6]" />
          </Link>
        </div>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {corePlans.map((plan) => {
            const isPro = plan.isPopular;

            return (
              <StaggerItem key={plan.slug} className="h-full flex">
                <div
                  className={`group relative flex w-full flex-col justify-between rounded-2xl bg-white transition-all duration-300 ${
                    isPro
                      ? "border-2 border-[#14B8A6] shadow-[0_16px_40px_rgba(20,184,166,0.14)] lg:-translate-y-2 ring-4 ring-[#D1FAE5]/50"
                      : "border border-line/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#14B8A6]/50 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)] hover:-translate-y-1"
                  }`}
                >
                  {/* Pro Flagship Ribbon */}
                  {isPro && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#14B8A6] via-[#2DD4BF] to-[#0D9488] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                        <Sparkles className="h-3 w-3" />
                        Most Enrolled Program
                      </span>
                    </div>
                  )}

                  {/* Card Content Top */}
                  <div className="p-6 sm:p-8">
                    {/* Course Image */}
                    <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl bg-surface-2 border border-line/50">
                      <SiteImage
                        image={plan.image}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                      
                      {/* Floating level badge */}
                      <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-[#0F766E] shadow-xs">
                        {plan.level}
                      </span>

                      {/* Duration */}
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-lg bg-black/70 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-white">
                        <Clock className="h-3 w-3 text-[#2DD4BF]" />
                        {plan.duration}
                      </span>
                    </div>

                    {/* Title & Rating */}
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-text group-hover:text-[#0F766E] transition-colors">
                        {plan.name} Track
                      </h3>
                      <div className="inline-flex items-center gap-1 text-xs font-bold text-[#0F766E] bg-[#D1FAE5] px-2 py-0.5 rounded-md">
                        <Star className="h-3 w-3 fill-[#14B8A6] text-[#14B8A6]" />
                        <span>{plan.rating}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted leading-relaxed mb-6">
                      {plan.summary}
                    </p>

                    {/* Highlights List */}
                    <div className="border-t border-line/70 pt-5 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
                        Key Curriculum Highlights
                      </div>
                      <ul className="space-y-2.5">
                        {plan.highlights.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-text">
                            <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#D1FAE5] text-[#0F766E]">
                              <Check className="h-2.5 w-2.5 stroke-[3]" />
                            </div>
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Career & Salary */}
                    <div className="rounded-xl border border-[#D1FAE5] bg-[#F0FDF4]/70 p-3.5 mb-2">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted">Target Career:</span>
                        <span className="font-bold text-text">{plan.targetRole}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted">Salary Potential:</span>
                        <span className="font-bold text-[#0F766E]">{plan.salaryRange}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="border-t border-line/60 bg-[#FAFCFB] p-6 sm:p-8 rounded-b-2xl">
                    <div className="flex flex-col gap-3">
                      <OpenModalButton
                        source={`program-${plan.slug}`}
                        course={plan.slug}
                        variant={isPro ? "primary" : "secondary"}
                        className={`w-full py-3.5 text-sm font-bold shadow-xs transition-all ${
                          isPro
                            ? "bg-[#14B8A6] hover:bg-[#0D9488] text-white border-transparent hover:shadow-[0_4px_16px_rgba(20,184,166,0.3)]"
                            : "bg-white hover:border-[#14B8A6] hover:text-[#0F766E] border-line text-text"
                        }`}
                      >
                        Enquire For Admissions
                      </OpenModalButton>

                      <Link
                        href={`/courses/${plan.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0F766E] hover:text-[#14B8A6] transition-colors py-1 group/link"
                      >
                        <span>View complete syllabus</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-link-hover:translate-x-1" />
                      </Link>
                    </div>

                    <p className="mt-3 text-center text-xs text-muted/80">
                      Flexible live batches &bull; 100% placement support
                    </p>
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
