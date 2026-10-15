"use client";

import React from "react";
import { studentProjects } from "@/data/projects";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { TrendingUp, FolderGit2, ArrowUpRight, Sparkles } from "lucide-react";
import { OpenModalButton } from "@/components/ui/OpenModalButton";

export function StudentProjects() {
  return (
    <section className="relative border-b border-line/60 bg-[#F8FAF9] py-20 sm:py-28 overflow-hidden">
      {/* Background ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-0 h-[400px] w-[500px] bg-gradient-to-b from-[#D1FAE5]/40 via-[#2DD4BF]/10 to-transparent blur-3xl opacity-60"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-3">
              <FolderGit2 className="h-3.5 w-3.5 text-[#14B8A6]" />
              <span>Verifiable Capstone Deliverables</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text">
              Real Client Projects Built By Our Learners
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
              From zero ad spend to multi-channel scaling. Explore verified student capstone campaigns with auditable ROI metrics.
            </p>
          </div>

          <OpenModalButton
            source="projects-sample-request"
            variant="ghost"
            className="inline-flex items-center gap-1.5 font-semibold text-[#0F766E] hover:text-[#14B8A6] transition-colors text-base self-start md:self-end group cursor-pointer"
          >
            <span>Request full portfolio pack</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#14B8A6]" />
          </OpenModalButton>
        </div>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          {studentProjects.map((project) => (
            <StaggerItem key={project.id} className="flex h-full">
              <article className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border border-line/80 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#14B8A6]/50 hover:shadow-[0_16px_36px_rgba(20,184,166,0.12)] hover:-translate-y-1">
                {/* Project Media */}
                <div className="relative w-full aspect-[16/10] bg-surface-2 overflow-hidden border-b border-line/60">
                  <SiteImage
                    image={project.image}
                    fill
                    sizes="(min-width: 768px) 600px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Category Badge on Image */}
                  <span className="absolute top-4 left-4 rounded-lg bg-black/75 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
                    {project.category}
                  </span>

                  {/* Metrics Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-[#D1FAE5]/95 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-[#0F766E] shadow-sm">
                      <TrendingUp className="h-3.5 w-3.5 text-[#14B8A6]" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl leading-snug text-text group-hover:text-[#0F766E] transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tool Stack Tags & CTA at bottom */}
                  <div className="mt-auto pt-5 border-t border-line/60 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-[#F0F5F3] border border-line text-xs font-medium text-text"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <OpenModalButton
                      source={`project-${project.id}`}
                      variant="ghost"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0F766E] hover:text-[#14B8A6] p-0 h-auto cursor-pointer"
                    >
                      <span>View case study</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#14B8A6]" />
                    </OpenModalButton>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
