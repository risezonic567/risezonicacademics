"use client";

import React from "react";
import { mentors } from "@/data/mentors";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { UserCheck, Sparkles, GraduationCap } from "lucide-react";
import { SiteImage } from "@/components/ui/SiteImage";

export function Mentors() {
  return (
    <section className="relative border-b border-line/60 bg-[#F8FAF9] py-20 sm:py-28 overflow-hidden">
      {/* Background ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[500px] bg-gradient-to-l from-[#D1FAE5]/40 via-[#2DD4BF]/10 to-transparent blur-3xl opacity-60"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <GraduationCap className="h-3.5 w-3.5 text-[#14B8A6]" />
            <span>Active Practitioner Faculty</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text">
            Learn Directly From Proven Industry Leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            No academic theorists. Your instructors actively oversee multimillion-rupee client budgets and organic growth teams at top agencies and brands.
          </p>
        </div>

        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
        >
          {mentors.map((mentor) => (
            <StaggerItem key={mentor.id} className="h-full flex">
              <div className="group relative flex w-full flex-col justify-between rounded-2xl border border-line/80 bg-white p-6 sm:p-7 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#14B8A6]/50 hover:shadow-[0_16px_36px_rgba(20,184,166,0.12)] hover:-translate-y-1">
                <div>
                  {/* Circular Mentor Photo */}
                  <div className="relative mx-auto w-24 h-24 mb-5">
                    <div className="w-full h-full rounded-full border-2 border-line/80 group-hover:border-[#14B8A6] transition-colors overflow-hidden shadow-xs relative">
                      <SiteImage
                        image={mentor.image}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="96px"
                      />
                    </div>

                    <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-[#14B8A6] text-white shadow-xs">
                      <UserCheck className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-heading font-bold text-xl text-text mb-1 group-hover:text-[#0F766E] transition-colors">
                    {mentor.name}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-[#0F766E] mb-2.5">
                    {mentor.role}
                  </div>

                  <div
                    dangerouslySetInnerHTML={{ __html: mentor.experience }}
                    className="inline-block px-3 py-1 rounded-full bg-[#D1FAE5]/60 border border-[#D1FAE5] text-xs font-semibold text-[#0F766E] mb-4"
                  />

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {mentor.bio}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="pt-4 border-t border-line/60 flex flex-wrap justify-center gap-1.5">
                  {mentor.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-[#F0F5F3] text-xs font-medium text-text border border-line/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
