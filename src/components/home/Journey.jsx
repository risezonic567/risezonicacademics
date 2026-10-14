"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { OpenModalButton } from "@/components/ui/OpenModalButton";

export function Journey() {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: "01",
      title: "Enroll",
      description: "Pick the plan that fits your goal and reserve your seat.",
      duration: "[Week 1]",
    },
    {
      num: "02",
      title: "Learn",
      description: "Live classes, recordings and notes on ads, SEO, analytics and content.",
      duration: "[Week 2]",
    },
    {
      num: "03",
      title: "Build",
      description: "Run campaigns with a real ad budget and review the results with your mentor.",
      duration: "[Week 3]",
    },
    {
      num: "04",
      title: "Intern",
      description: "Work on live client tasks and add them to your portfolio.",
      duration: "[Week 4]",
    },
    {
      num: "05",
      title: "Get hired",
      description: "Resume, mock interviews and introductions to hiring teams.",
      duration: "[Week 5]",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-bg">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="self-start lg:sticky lg:top-28">
            <h2 className="font-heading text-[clamp(2rem,3.2vw,2.75rem)] font-semibold leading-tight tracking-tight text-text">
              From day one to your first job
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Every step has a clear outcome, so you always know what you are
              working towards.
            </p>
            <OpenModalButton
              source="steps-cta"
              variant="primary"
              className="mt-7 text-[17px] hover:bg-primary hover:border-accent hover:text-on-primary"
            >
              Book free counselling
            </OpenModalButton>
          </div>

          <div className="border-t border-line">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                  ease: "easeOut",
                }}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-5 gap-y-2 border-b border-line py-6 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:gap-x-6"
              >
                <span className="row-span-2 font-heading text-5xl font-semibold leading-none text-accent">
                  {step.num}
                </span>
                <h3 className="font-heading text-2xl font-semibold leading-tight text-text">
                  {step.title}
                </h3>
                <span className="col-start-2 text-[17px] leading-relaxed text-text sm:col-start-2">
                  {step.description}
                </span>
                <span className="col-start-2 text-base text-muted sm:col-start-3 sm:row-start-1 sm:row-span-2 sm:self-center">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
