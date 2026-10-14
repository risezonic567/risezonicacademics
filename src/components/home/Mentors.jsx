"use client";

import React from "react";
import { mentors } from "@/data/mentors";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { UserCheck } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";

export function Mentors() {
  return (
    <section className="py-20 sm:py-28 bg-surface border-y border-line relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Learn Directly from Active Practitioners"
          highlightWord="Practitioners"
          subtitle="No academic theorists. Your instructors manage millions in live digital marketing ad budgets daily."
        />

        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {mentors.map((mentor) => (
            <StaggerItem key={mentor.id} className="h-full flex">
              <Card
                variant="surface"
                className="w-full p-6 flex flex-col justify-between text-center group hover:border-accent/50"
              >
                <div>
                  {/* Circular Photo Placeholder */}
                  <div className="relative mx-auto w-24 h-24 mb-5">
                    <div className="w-full h-full rounded-full bg-surface-2 border-2 border-line group-hover:border-accent flex items-center justify-center font-heading font-bold text-accent text-xl transition-colors shadow-inner overflow-hidden">
                      <SiteImage
                        image={mentor.image}
                        fill
                        className="rounded-full object-cover"
                        sizes="96px"
                      />
                    </div>

                    <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-primary text-on-primary">
                      <UserCheck className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-heading font-bold text-lg text-text mb-1 group-hover:text-accent transition-colors">
                    {mentor.name}
                  </h3>
                  <div className="text-xs font-semibold text-accent mb-2">
                    {mentor.role}
                  </div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-surface-2 border border-line text-[11px] text-muted font-medium mb-3">
                    {mentor.experience}
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-muted leading-relaxed line-clamp-3 mb-5">
                    {mentor.bio}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="pt-3 border-t border-line/60 flex flex-wrap justify-center gap-1.5">
                  {mentor.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-surface-2 text-[10px] text-muted font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
