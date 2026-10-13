"use client";

import React, { useState } from "react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ChevronLeft, ChevronRight, Star, Quote, Award } from "lucide-react";
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
    <section className="py-20 sm:py-28 bg-surface-2/40 border-y border-line relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Transformative Outcomes & Career Shifts"
          highlightWord="Outcomes"
          subtitle="Real reviews from learners who pivoted their careers, launched agencies, and scaled revenue."
        />

        {/* Carousel Card Container */}
        <div className="max-w-3xl mx-auto relative mt-8">
          <div className="relative min-h-[320px] sm:min-h-[290px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <Card
                  variant="surface"
                  className="p-8 sm:p-10 relative overflow-hidden border-accent/25 shadow-2xl"
                >
                  {/* Decorative Watermark Quote Icon */}
                  <Quote
                    aria-hidden="true"
                    className="absolute -bottom-4 -right-4 w-32 h-32 text-accent/5 pointer-events-none"
                  />

                  {/* Top Bar: Stars + Package Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>Package: {currentTestimonial.package}</span>
                    </div>
                  </div>

                  {/* Quote Body */}
                  <p className="text-base sm:text-lg text-text leading-relaxed font-normal mb-8 italic">
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </p>

                  {/* Student Details */}
                  <div className="flex items-center gap-3.5 border-t border-line/60 pt-5">
                    <div className="w-11 h-11 rounded-full bg-surface-2 border border-accent/40 flex items-center justify-center font-heading font-bold text-accent text-sm shrink-0">
                      <SiteImage
                        image={currentTestimonial.image}
                        fill
                        className="rounded-full object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-text text-sm sm:text-base">
                        {currentTestimonial.studentName}
                      </h4>
                      <div className="text-xs text-muted flex items-center gap-2 mt-0.5">
                        <span>{currentTestimonial.roleAtCompany}</span>
                        <span>•</span>
                        <span className="text-accent">{currentTestimonial.batch}</span>
                      </div>
                    </div>
                  </div>
                </Card>
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
                  className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 bg-accent"
                      : "w-2 bg-line hover:bg-muted"
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
                className="w-10 h-10 rounded-xl bg-surface border border-line text-muted hover:text-text hover:border-accent flex items-center justify-center transition-colors cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={nextSlide}
                className="w-10 h-10 rounded-xl bg-surface border border-line text-muted hover:text-text hover:border-accent flex items-center justify-center transition-colors cursor-pointer shadow-md"
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
