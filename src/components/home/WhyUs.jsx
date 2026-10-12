"use client";

import React from "react";
import {
  Users2,
  Briefcase,
  Coins,
  GraduationCap,
  Sparkles,
  Network,
} from "lucide-react";
import { StaggerContainer, StaggerItem, Reveal } from "@/components/ui/Reveal";

export function WhyUs() {
  const features = [
    {
      icon: Users2,
      title: "Live Industry Mentors",
      description:
        "Learn directly from active marketing practitioners leading campaigns at premier agencies and high-growth brands.",
    },
    {
      icon: Briefcase,
      title: "Real Client Projects",
      description:
        "Build audited case studies by executing live growth strategies for legitimate businesses, not theoretical textbook mockups.",
    },
    {
      icon: Coins,
      title: "Ad Budget to Practice With",
      description:
        "Experience true conversion stakes. Students receive live advertising budget allocations to test Meta and Google Ads.",
    },
    {
      icon: GraduationCap,
      title: "Small Focused Batches",
      description:
        "Strict batch size limits ensure personalized feedback, dedicated code/copy audits, and direct weekly 1-on-1 office hours.",
    },
    {
      icon: Sparkles,
      title: "Internship & Placement Support",
      description:
        "Direct access to hiring partners, comprehensive resume optimization, technical interview prep, and corporate introductions.",
    },
    {
      icon: Network,
      title: "Lifetime Alumni Community",
      description:
        "Continuous access to mentor mastermind sessions, fresh recruitment alerts, campaign review vaults, and peer networking.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#D1FAE5] text-[#0B1111] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Header Block in dark text */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#0B1111] leading-[1.15] tracking-tight">
              Designed For Real Marketing Impact
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-4 text-base sm:text-lg text-[#1F2937]/80 leading-relaxed">
              We eliminated boring theory. Everything you learn is calibrated for immediate execution on active ad dashboards.
            </p>
          </Reveal>
        </div>

        {/* 6 Features Grid */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={index} className="h-full flex">
                <div className="w-full p-6 sm:p-7 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#0B1111]/10 hover:border-[#0B1111]/30 hover:bg-white/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0B1111]/5 transition-all duration-300 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#0B1111] text-[#D1FAE5] flex items-center justify-center mb-5 shrink-0 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-[#0B1111] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#1F2937]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
