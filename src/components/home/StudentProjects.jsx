"use client";

import React from "react";
import { studentProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { SiteImage } from "@/components/ui/SiteImage";

export function StudentProjects() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Real Projects Built By Our Learners"
          subtitle="From zero ad spend to multi-channel scaling. Explore verified student capstone deliverables."
          titleClassName="text-[40px] font-heading font-bold leading-tight tracking-tight text-text"
          subtitleClassName="mt-4 text-lg text-muted font-normal leading-relaxed max-w-[65ch]"
        />

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-6 auto-rows-[200px] md:grid-cols-2"
        >
          {studentProjects.map((project, index) => (
            <StaggerItem
              key={project.id}
              className={`h-full ${index === 0 || index === studentProjects.length - 1 ? "md:row-span-2" : ""}`}
            >
              <Card
                variant="surface"
                className="flex h-full w-full flex-col overflow-hidden border-line hover:border-primary"
              >
                <div className="relative min-h-0 flex-1 overflow-hidden bg-surface-2">
                  <div className="absolute inset-0">
                    <SiteImage
                      image={project.image}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="bg-surface p-5">
                  <h3 className="font-heading text-xl font-bold text-text">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-base text-muted">
                    [Student name] | [Tools used]
                  </p>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-lg font-semibold text-accent">
                      +[00%] [metric]
                    </span>
                  <a
                    href={project.link}
                    className="text-base font-semibold text-accent hover:text-primary"
                  >
                    View project
                  </a>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
