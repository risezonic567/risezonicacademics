"use client";

import React from "react";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Laptop, Sparkles, Coffee, Mic, Presentation, Building } from "lucide-react";
import { images } from "@/data/images";
import { SiteImage } from "@/components/ui/SiteImage";

export function Campus() {
  const bentoItems = [
    {
      id: "bento-1",
      title: "Interactive Smart Classroom",
      category: "Main Lecture Theatre",
      description: "Equipped with dual 4K presentation monitors, high-speed networking, and multi-angle broadcast feeds.",
      icon: Presentation,
      colSpan: "md:col-span-2 md:row-span-2",
    },
    {
      id: "bento-2",
      title: "Live Media & Ad Operations Lab",
      category: "Campaign Operations",
      description: "Dedicated workstation pods for managing active client ad spend and multi-screen GA4 analytics.",
      icon: Laptop,
      colSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: "bento-3",
      title: "Content & Podcast Studio",
      category: "Creative Production",
      description: "Acoustically treated studio equipped for recording viral video reels and podcast interview episodes.",
      icon: Mic,
      colSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: "bento-4",
      title: "Student Collaboration & Breakout Lounge",
      category: "Student Common Area",
      description: "Casual ideation spaces designed for peer brainstorming and group campaign hackathons.",
      icon: Coffee,
      colSpan: "md:col-span-1 md:row-span-1",
    },
    {
      id: "bento-5",
      title: "1-on-1 Mentor Consultation Pods",
      category: "Personalized Reviews",
      description: "Private acoustic pods for confidential resume auditing, mock interview drills, and strategic reviews.",
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <Building className="h-3.5 w-3.5 text-[#14B8A6]" />
            <span>Modern Learning Infrastructure</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text">
            Campus Infrastructure & Innovation Hub
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            A state-of-the-art facility engineered for immersive learning, campaign execution, and peer networking in a professional environment.
          </p>
        </div>

        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[250px]"
        >
          {bentoItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <StaggerItem
                key={item.id}
                className={`${item.colSpan} h-full`}
              >
                <div className="group relative h-full w-full rounded-3xl overflow-hidden border border-line/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:border-[#14B8A6]/60 hover:shadow-[0_16px_36px_rgba(20,184,166,0.15)] p-6 sm:p-7 flex flex-col justify-between">
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
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25"
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
                    <h3 className="font-heading font-bold text-lg sm:text-xl !text-white mb-1.5 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-normal !text-white/90 leading-relaxed line-clamp-2">
                      {item.description}
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
