"use client";

import React from "react";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="py-20 sm:py-28 bg-bg relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="relative rounded-[24px] bg-light border border-line p-8 sm:p-14 lg:p-16 text-center overflow-hidden">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text leading-[1.15] max-w-2xl mx-auto tracking-tight mb-5">
              Ready to start your career?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-muted max-w-xl mx-auto mb-9 leading-relaxed">
              Book a free 1-on-1 strategy call with our mentors. We will review your career goals, preview live ad dashboards, and reserve your seat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <OpenModalButton
                source="final-cta"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 font-bold text-base"
              >
                <span>Book free counselling</span>
              </OpenModalButton>
            </div>

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
