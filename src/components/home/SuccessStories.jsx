"use client";

import React, { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Star, Award, Quote, CheckCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteImage } from "@/components/ui/SiteImage";

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative border-b border-line/60 bg-white py-20 sm:py-28 overflow-hidden">
      {/* Background ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] bg-gradient-to-r from-[#D1FAE5]/40 via-[#2DD4BF]/10 to-transparent blur-3xl opacity-60"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-3">
            <Sparkles className="h-3.5 w-3.5 text-[#14B8A6]" />
            <span>Verified Career Pivots</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text">
            Transformative Career Outcomes & Reviews
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Honest feedback from learners who switched careers, joined high-growth agencies, or launched thriving freelance consultancies.
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-3xl mx-auto relative">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative rounded-3xl border border-line/80 bg-white p-7 sm:p-10 lg:p-12 shadow-[0_8px_32px_rgba(20,184,166,0.08)] overflow-hidden"
              >
                {/* Decorative Quote Icon Watermark */}
                <Quote className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 text-[#D1FAE5]/50 rotate-180" />

                {/* Top Bar: Stars + Package Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
                  <div className="flex shrink-0 items-center gap-1 bg-[#D1FAE5]/40 px-3 py-1.5 rounded-full">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#14B8A6] text-[#14B8A6]"
                      />
                    ))}
                    <span className="ml-1 text-xs font-bold text-[#0F766E]">5.0</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D1FAE5] border border-[#14B8A6]/30 text-[#0F766E] text-xs sm:text-sm font-bold shadow-xs">
                    <Award className="w-4 h-4 text-[#14B8A6]" />
                    <span>Package Secured: {currentTestimonial.package}</span>
                  </div>
                </div>

                {/* Quote Body */}
                <p className="relative z-10 text-base sm:text-lg text-text leading-relaxed font-normal mb-8">
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </p>

                {/* Student Details */}
                <div className="relative z-10 flex items-center justify-between border-t border-line/60 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-13 h-13 rounded-full overflow-hidden border-2 border-[#14B8A6]/40 shadow-xs">
                      <SiteImage
                        image={currentTestimonial.image}
                        fill
                        className="object-cover"
                        sizes="52px"
                      />
                      <div className="absolute bottom-0 right-0 p-0.5 rounded-full bg-[#14B8A6] text-white">
                        <CheckCircle className="w-3 h-3" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-text text-base sm:text-lg flex items-center gap-1.5">
                        <span>{currentTestimonial.studentName}</span>
                      </h4>
                      <div className="text-xs sm:text-sm text-muted flex flex-wrap items-center gap-x-2 mt-0.5">
                        <span className="font-medium text-[#0F766E]">{currentTestimonial.roleAtCompany}</span>
                        <span>&bull;</span>
                        <span>{currentTestimonial.batch}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls: Prev / Next & Indicators */}
          <div className="flex items-center justify-between mt-8 px-2">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 bg-[#14B8A6]"
                      : "w-2.5 bg-line hover:bg-[#2DD4BF]"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prevSlide}
                className="w-11 h-11 rounded-xl bg-white border border-line text-muted hover:text-[#0F766E] hover:border-[#14B8A6] flex items-center justify-center transition-all cursor-pointer shadow-xs hover:shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={nextSlide}
                className="w-11 h-11 rounded-xl bg-white border border-line text-muted hover:text-[#0F766E] hover:border-[#14B8A6] flex items-center justify-center transition-all cursor-pointer shadow-xs hover:shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
