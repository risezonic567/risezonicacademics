"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Laptop, Sparkles, Coffee, Mic, Presentation } from "lucide-react";
import { images } from "@/data/images";
import { SiteImage } from "@/components/ui/SiteImage";

export function Campus() {
  const bentoItems = [
    {
      id: "bento-1",
      title: "Interactive Smart Classroom",
      category: "Main Lecture Hall",
      description: "Equipped with dual 4K monitors, gigabit networking, and live streaming capabilities.",
      icon: Presentation,
      colSpan: "md:col-span-2 md:row-span-2",
      aspect: "aspect-[4/3] md:aspect-auto",
    },
    {
      id: "bento-2",
      title: "Live Media & Ad Lab",
      category: "Campaign Operations",
      description: "Dedicated workstation pods for managing active ad dashboards and client accounts.",
      icon: Laptop,
      colSpan: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[16/10]",
    },
    {
      id: "bento-3",
      title: "Content & Podcast Studio",
      category: "Creative Production",
      description: "Acoustically treated studio for filming viral short-form reels and podcast interviews.",
      icon: Mic,
      colSpan: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[16/10]",
    },
    {
      id: "bento-4",
      title: "Collaboration & Breakout Hub",
      category: "Student Common Area",
      description: "Casual spaces designed for peer brainstorming and group campaign hackathons.",
      icon: Coffee,
      colSpan: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[16/10]",
    },
    {
      id: "bento-5",
      title: "1-on-1 Mentor Consultation Desk",
      category: "Personalized Reviews",
      description: "Private pods for portfolio auditing, mock hiring rounds, and strategy teardowns.",
      icon: Sparkles,
      colSpan: "md:col-span-2 md:row-span-1",
      aspect: "aspect-[16/10] md:aspect-auto",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-bg relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Campus Infrastructure & Innovation Hub"
          highlightWord="Campus"
          subtitle="A state-of-the-art facility engineered for immersive learning, campaign execution, and networking."
        />

        {/* 5-Item Bento Grid */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[220px]"
        >
          {bentoItems.map((item) => {
            const Icon = item.icon;

            return (
              <StaggerItem
                key={item.id}
                className={`${item.colSpan} h-full`}
              >
                <div className="h-full w-full rounded-[20px] bg-surface border border-line hover:border-primary/50 transition-all duration-300 p-6 flex flex-col justify-between group overflow-hidden relative">
                  <div className="absolute inset-0">
                    <SiteImage
                      image={images.campus[Number(item.id.slice(-1)) - 1]}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Top Header */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-surface-2 border border-line text-accent flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-muted bg-surface-2 px-2.5 py-1 rounded-full border border-line">
                      {item.category}
                    </span>
                  </div>

                  {/* Center Placeholder Watermark */}
                  <div className="relative z-10 my-auto text-center py-4">
                  </div>

                  {/* Bottom Text */}
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-base sm:text-lg text-text mb-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">
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
