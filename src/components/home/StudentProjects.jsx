"use client";

import React from "react";
import { studentProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";

export function StudentProjects() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Real Projects Built By Our Learners"
          subtitle="From zero ad spend to multi-channel scaling. Explore verified student capstone deliverables."
          align="left"
          className="max-w-none"
          titleClassName="text-[40px] font-heading font-bold leading-tight tracking-tight text-text"
          subtitleClassName="mt-4 text-lg text-muted font-normal leading-relaxed max-w-[65ch]"
        />

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
        >
          {studentProjects.map((project) => (
            <StaggerItem
              key={project.id}
              className="flex h-full"
            >
              <article
                className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-line bg-bg transition-colors hover:border-accent"
              >
                <div className="relative w-full aspect-[16/10] bg-surface-2">
                  <SiteImage
                    image={project.image}
                    fill
                    sizes="(min-width: 768px) 500px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading font-bold text-xl leading-snug line-clamp-2 min-h-[3.25rem] text-text">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-base text-muted">
                    [Student name] | [Tools used]
                  </p>
                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <span className="text-lg font-semibold text-accent">
                      +[00%] [metric]
                    </span>
                    <a
                      href={project.link}
                      className="text-base font-semibold text-text hover:underline"
                    >
                      View project
                    </a>
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
