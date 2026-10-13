"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { hiringPartners } from "@/data/partners";
import { SiteImage } from "@/components/ui/SiteImage";
export function HiringPartners() {
  const shouldReduceMotion = useReducedMotion();
  const partnersList = [...hiringPartners, ...hiringPartners];

  return (
    <section className="py-14 sm:py-20 bg-surface/40 border-y border-line overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 mb-8 text-center">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-text">
          Where our learners work
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden mask-gradient">
        {/* Subtle Edge Fade Gradients */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-bg to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-bg to-transparent z-10"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            },
          }}
          className="flex items-center gap-6 sm:gap-8 w-max"
        >
          {partnersList.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex items-center justify-center min-w-[150px] sm:min-w-[190px] h-[60px] sm:h-[68px] px-6 rounded-2xl bg-surface border border-line hover:border-primary/50 transition-colors shadow-sm select-none group"
            >
              <div className="flex items-center gap-2.5">
                <SiteImage
                  image={partner.image}
                  className="object-contain p-2"
                  sizes="190px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
