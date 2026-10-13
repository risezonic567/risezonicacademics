"use client";

import React from "react";
import { studentProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { ExternalLink, TrendingUp, Layers } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";

export function StudentProjects() {
  return (
    <section className="py-20 sm:py-28 bg-bg relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Real Projects Built By Our Learners"
          highlightWord="Projects"
          subtitle="From zero ad spend to multi-channel scaling. Explore verified student capstone deliverables."
        />

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {studentProjects.map((project) => (
            <StaggerItem key={project.id} className="h-full flex">
              <Card
                variant="surface"
                className="w-full flex flex-col justify-between overflow-hidden group border-line hover:border-primary/60"
              >
                <div>
                  {/* Image Placeholder Block */}
                  <div className="relative w-full aspect-[16/9] bg-surface-2 border-b border-line flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                    <div className="absolute inset-0">
                      <SiteImage
                        image={project.image}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Metric Chip */}
                    <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-accent/40 text-accent text-xs font-semibold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{project.metrics}</span>
                    </div>

                    {/* Category Chip */}
                    <div className="absolute top-4 right-4 z-10 text-[11px] font-medium text-muted bg-surface px-2.5 py-1 rounded-lg border border-line">
                      {project.category}
                    </div>

                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-text mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-surface-2 border border-line text-[11px] font-medium text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-2 border-t border-line/60 flex items-center justify-between">
                  <span className="text-xs text-muted/80">Audited Student Capstone</span>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent hover:underline group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
