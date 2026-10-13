"use client";

import React from "react";
import { coursePlans } from "@/data/courses";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import Link from "next/link";

export function Programs() {
  return (
    <section className="py-24 lg:py-32 bg-surface-2 border-t border-line relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Industry-Led Marketing Programs"
          subtitle="From beginner foundations to executive marketing leadership. Master high-converting digital campaigns."
          align="left"
          className="max-w-2xl mb-10"
          titleClassName="text-[clamp(2rem,3.2vw,2.75rem)] font-heading font-semibold text-text leading-tight tracking-tight"
          subtitleClassName="mt-4 text-lg sm:text-xl text-muted font-normal leading-relaxed max-w-2xl"
        />

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {coursePlans.map((plan) => {
            const isPro = plan.isPopular;

            return (
              <StaggerItem key={plan.slug} className="h-full flex">
                <div
                  className={`w-full rounded-xl border p-8 lg:p-10 ${
                    isPro
                      ? "border-2 border-primary bg-light/40"
                      : "border-line bg-bg hover:border-primary"
                  }`}
                >
                  <div className="relative mb-6 aspect-video overflow-hidden rounded-lg bg-surface-2">
                    <SiteImage
                      image={plan.image}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {isPro && (
                    <div className="mb-4 inline-flex rounded-[4px] bg-primary px-3 py-1 text-sm font-semibold text-ink">
                      Most popular
                    </div>
                  )}

                  <div className="mb-4 flex items-center justify-between gap-4 text-base text-muted">
                    <span>{plan.level}</span>
                    <span>{plan.duration}</span>
                  </div>

                  <h3 className="mb-2 font-heading text-[28px] font-semibold leading-tight tracking-tight text-text sm:text-[32px]">
                    {plan.name}
                  </h3>
                  <p className="mb-3 text-base text-muted">
                    {plan.rating} ({plan.ratingCount} learners)
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-text">
                    {plan.summary}
                  </p>

                  <ul className="mb-6 divide-y divide-line border-y border-line">
                    {plan.highlights.slice(0, 4).map((bullet) => (
                      <li
                        key={bullet}
                        className="py-3 text-[17px] leading-relaxed text-text"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 flex flex-wrap justify-between gap-3 text-base">
                    <span>
                      <span className="text-muted">Target role: </span>
                      <span className="font-semibold text-text">{plan.targetRole}</span>
                    </span>
                    <span className="font-semibold text-text">{plan.salaryRange}</span>
                  </div>

                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <OpenModalButton
                      source={`plan-${plan.slug}`}
                      course={plan.slug}
                      variant="primary"
                      className="w-full text-[17px] hover:bg-primary hover:border-accent sm:w-auto"
                    >
                      Enquire now
                    </OpenModalButton>
                    <Link
                      href={`/courses/${plan.slug}`}
                      className="text-[17px] font-semibold text-accent hover:text-primary"
                    >
                      View syllabus
                    </Link>
                  </div>
                  <p className="mt-4 text-[15px] text-muted">
                    Online and offline both available
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
