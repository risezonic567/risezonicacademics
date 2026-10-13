"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  UserCheck,
  BookOpenCheck,
  Hammer,
  BriefcaseBusiness,
  Trophy,
} from "lucide-react";

export function Journey() {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: "01",
      title: "Enroll",
      subtitle: "Orientation & Mentor Matching",
      description: "Set up marketing toolkits, audit student benchmarks, and connect with faculty guides.",
      icon: UserCheck,
    },
    {
      num: "02",
      title: "Learn",
      subtitle: "Live Campaign Labs",
      description: "Master performance funnels, technical SEO, and retention workflows with live instruction.",
      icon: BookOpenCheck,
    },
    {
      num: "03",
      title: "Build",
      subtitle: "Real Ad Spend Capstone",
      description: "Deploy real advertising budgets on Meta and Google Ads accounts to validate metrics.",
      icon: Hammer,
    },
    {
      num: "04",
      title: "Intern",
      subtitle: "Hands-on Industry Project",
      description: "Work on real brand deliverables under agency mentorship to forge high-converting case studies.",
      icon: BriefcaseBusiness,
    },
    {
      num: "05",
      title: "Get Hired",
      subtitle: "Interviews & Placements",
      description: "Conduct mock technical rounds, optimize your portfolio, and interview with partner companies.",
      icon: Trophy,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-bg relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          title="Your 5-Step Path from Beginner to Marketer"
          highlightWord="Path"
          subtitle="A battle-tested progression engineered to take you from foundational basics to top-tier career placements."
        />

        {/* Steps Container */}
        <div className="relative mt-12 sm:mt-16">
          {/* Desktop Connecting Line that draws as it scrolls into view */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[42px] left-[5%] right-[5%] h-[2px] bg-line z-0"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.2,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-accent"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: shouldReduceMotion ? 0 : idx * 0.12,
                    ease: "easeOut",
                  }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle Icon */}
                  <div className="relative mb-5">
                    <div className="w-[84px] h-[84px] rounded-2xl bg-surface border-2 border-line group-hover:border-accent flex flex-col items-center justify-center text-text transition-all duration-300 group-hover:-translate-y-1">
                      <Icon className="w-6 h-6 text-accent mb-1 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-heading font-bold text-muted">
                        STEP {step.num}
                      </span>
                    </div>

                    {/* Step indicator dot on desktop */}
                    <div className="hidden lg:block absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-bg" />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-text mb-1 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-accent mb-2">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
