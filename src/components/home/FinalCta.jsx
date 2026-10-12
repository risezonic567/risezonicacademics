"use client";

import React from "react";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { Calendar, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28 bg-bg relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="relative rounded-[28px] bg-gradient-to-b from-surface via-surface to-surface-2 border border-accent/40 p-8 sm:p-14 lg:p-16 text-center shadow-2xl shadow-black/60 overflow-hidden">
            {/* Background Glow Circles */}
            <div
              aria-hidden="true"
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/15 rounded-full blur-[100px] pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 right-10 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"
            />

            {/* Title & Subtitle */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text leading-[1.15] max-w-2xl mx-auto tracking-tight mb-5">
              Ready to start your career?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-muted max-w-xl mx-auto mb-9 leading-relaxed">
              Book a free 1-on-1 strategy call with our mentors. We will review your career goals, preview live ad dashboards, and reserve your seat.
            </p>

            {/* Single Primary Action Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <OpenModalButton
                source="final-cta"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 font-bold shadow-xl shadow-primary/25 text-base"
              >
                <span>Book free counselling</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </OpenModalButton>
            </div>

            {/* Micro Trust Details */}
            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted/70">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <span>Complimentary Consultation • Zero Obligation • Interactive Q&A</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
