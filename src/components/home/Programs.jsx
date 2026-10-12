"use client";

import React from "react";
import { coursePlans } from "@/data/courses";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { Check, Clock, Briefcase, IndianRupee, Sparkles } from "lucide-react";

export function Programs() {
  return (
    <section className="py-20 sm:py-28 bg-surface-2/30 border-t border-line relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Industry-Led Marketing Programs"
          highlightWord="Programs"
          subtitle="From beginner foundations to executive marketing leadership. Master high-converting digital campaigns."
        />

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {coursePlans.map((plan) => {
            const isPro = plan.isPopular;

            return (
              <StaggerItem key={plan.slug} className="h-full flex">
                <div
                  className={`w-full flex flex-col justify-between rounded-[20px] p-6 transition-all duration-300 relative ${
                    isPro
                      ? "bg-surface border-2 border-primary shadow-xl shadow-primary/10 ring-1 ring-primary/30 -translate-y-1"
                      : "bg-surface border border-line hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  {/* Popular Floating Badge */}
                  {isPro && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-bg font-heading font-bold text-[11px] uppercase tracking-wider shadow-md">
                        <Sparkles className="w-3 h-3 text-bg" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Header: Level & Duration */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Badge
                        variant={isPro ? "primary" : "accent"}
                        className="text-[10px]"
                      >
                        {plan.level}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-xs text-muted font-medium">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        <span>{plan.duration}</span>
                      </div>
                    </div>

                    {/* Plan Name & Summary */}
                    <h3 className="text-xl font-heading font-bold text-text mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-5">
                      {plan.summary}
                    </p>

                    {/* Target Role & Salary Range */}
                    <div className="p-3.5 rounded-xl bg-surface-2 border border-line mb-5 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-text">
                        <Briefcase className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span className="text-muted">Role:</span>
                        <span className="font-semibold truncate">{plan.targetRole}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-text">
                        <IndianRupee className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span className="text-muted">Avg CTC:</span>
                        <span className="font-semibold text-accent">{plan.salaryRange}</span>
                      </div>
                    </div>

                    {/* Highlight Bullets */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-[11px] font-semibold text-muted uppercase tracking-wider">
                        Key Deliverables
                      </div>
                      {plan.highlights.slice(0, 4).map((bullet, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted leading-relaxed"
                        >
                          <div className="w-4 h-4 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-primary" />
                          </div>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-line mt-auto">
                    <OpenModalButton
                      source={`plan-${plan.slug}`}
                      course={plan.slug}
                      variant={isPro ? "primary" : "secondary"}
                      className="w-full py-3 text-xs sm:text-sm font-semibold"
                    >
                      Enquire now
                    </OpenModalButton>
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
