"use client";

import React from "react";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Laptop, Sparkles, Coffee, Mic, Presentation, Building, ArrowUpRight, MapPin } from "lucide-react";
import { images } from "@/data/images";
import { SiteImage } from "@/components/ui/SiteImage";

export function Campus() {
  const bentoItems = [
    {
      id: "bento-1",
      title: "Interactive Smart Classroom",
      category: "Main Lecture Theatre",
      description: "Learn together, work through real campaign briefs, and present your ideas in a classroom built for collaboration.",
      icon: Presentation,
      colSpan: "md:col-span-2 md:row-span-2",
    },
    {
      id: "bento-2",
      title: "Live Media & Ad Operations Lab",
      category: "Campaign Operations",
      description: "Practice reading campaign data, planning optimizations, and explaining the decisions behind your work.",
      icon: Laptop,
      colSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: "bento-3",
      title: "Content & Podcast Studio",
      category: "Creative Production",
      description: "Plan and produce content ideas, short-form videos, and podcast-style conversations with your team.",
      icon: Mic,
      colSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: "bento-4",
      title: "Student Collaboration & Breakout Lounge",
      category: "Student Common Area",
      description: "Share ideas, work through briefs together, and get comfortable collaborating with other learners.",
      icon: Coffee,
      colSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: "bento-5",
      title: "1-on-1 Mentor Consultation Pods",
      category: "Personalized Reviews",
      description: "Get focused mentor feedback on your projects, portfolio, interview practice, and next steps.",
      icon: Sparkles,
      colSpan: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section className="relative border-b border-line/60 bg-white py-20 sm:py-28 overflow-hidden">
      {/* Background ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[800px] bg-gradient-to-b from-[#D1FAE5]/40 via-[#2DD4BF]/10 to-transparent blur-3xl opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-4">
            <Building className="h-3.5 w-3.5 text-[#14B8A6]" />
            <span>Learn by doing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text">
            Campus Infrastructure <span className="text-[#0F9F93]">&amp; Innovation Hub</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            A place to learn together, put ideas into practice, create campaign work, and get feedback from mentors.
          </p>
        </div>

        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[220px] md:gap-5"
        >
          {bentoItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <StaggerItem
                key={item.id}
                className={`${item.colSpan} h-full ${idx === 0 ? "min-h-[340px] md:min-h-0" : "min-h-[240px] md:min-h-0"}`}
              >
                <div className="group relative h-full w-full rounded-3xl overflow-hidden border border-line/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-[#14B8A6]/60 hover:shadow-[0_16px_36px_rgba(20,184,166,0.15)] p-5 sm:p-7 flex flex-col justify-between">
                  {/* Background Photo with hover zoom */}
                  <div className="absolute inset-0">
                    <SiteImage
                      image={images.campus[idx % images.campus.length]}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Gradient Overlay for high contrast */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 ${idx === 0 ? "bg-gradient-to-t from-black/90 via-black/40 to-black/10" : "bg-gradient-to-t from-black/90 via-black/45 to-black/25"}`}
                  />

                  {/* Top Bar with Icon & Category */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white border border-white/25 transition-transform group-hover:scale-105 group-hover:bg-[#14B8A6] group-hover:border-transparent">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="relative z-10">
                    <h3 className={`font-heading font-bold !text-white mb-1.5 transition-colors ${idx === 0 ? "text-xl sm:text-2xl lg:text-3xl" : "text-lg sm:text-xl"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs sm:text-sm font-normal !text-white/90 leading-relaxed ${idx === 0 ? "max-w-lg line-clamp-3" : "line-clamp-2"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-line/70 bg-[#F8FBFA] px-5 py-5 sm:flex-row sm:px-7">
          <div className="flex items-start gap-3 text-center sm:text-left">
            <MapPin className="mt-0.5 hidden h-5 w-5 shrink-0 text-[#0F9F93] sm:block" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Want to see the spaces and meet the team? Plan a visit to campus.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0F9F93] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0D8179] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F9F93] focus-visible:ring-offset-2 sm:w-auto"
          >
            Plan a campus visit
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
