"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { Sparkles, Calendar, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

export function Journey() {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      num: "01",
      title: "Enroll & Strategic Alignment",
      description:
        "Select the track tailored to your career aspiration (agency employment, freelancing, or brand growth). Receive immediate onboarding materials and roadmap access.",
      duration: "Week 1",
      badge: "Orientation & Tools Setup",
    },
    {
      num: "02",
      title: "Intensive Live Masterclasses",
      description:
        "Participate in live interactive sessions covering performance ad algorithms, SEO architecture, conversion rate optimization, and GA4 event tracking.",
      duration: "Weeks 2 – 4",
      badge: "Core Frameworks",
    },
    {
      num: "03",
      title: "Live Budget Ad Execution",
      description:
        "Run live Meta and Google Ads campaigns using actual advertising budgets provided by the academy. Monitor real impressions, cost-per-click, and ROAS.",
      duration: "Weeks 5 – 8",
      badge: "Real Money Spend",
    },
    {
      num: "04",
      title: "Client Internship & Capstone Case Studies",
      description:
        "Take on live marketing deliverables for authentic partner businesses. Build an audited, verifiable portfolio ready to present to agency directors.",
      duration: "Weeks 9 – 11",
      badge: "Portfolio Creation",
    },
    {
      num: "05",
      title: "Placement Drives & Career Placement",
      description:
        "Undergo rigorous mock technical interviews, LinkedIn and resume audits, and receive direct introductions to hiring partners for high-impact roles.",
      duration: "Week 12 Onwards",
      badge: "Salary Offers",
    },
  ];

  return (
    <section className="relative border-b border-line/60 bg-[#F8FAF9] py-20 sm:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#D1FAE5]/40 via-[#2DD4BF]/10 to-transparent blur-3xl opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Sticky Column (5 cols) */}
          <div className="lg:col-span-5 self-start lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#D1FAE5]/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0F766E] mb-4">
              <Sparkles className="h-3.5 w-3.5 text-[#14B8A6]" />
              <span>Proven Learning Trajectory</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text">
              From Day One to Your First High-Paying Offer
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted">
              Every phase has a concrete, verifiable deliverable — ensuring you always know what skill you are mastering and how it advances your hireability.
            </p>

            {/* Quick consultation promo card */}
            <div className="mt-8 rounded-2xl border border-line/80 bg-white p-6 shadow-[0_8px_24px_rgba(20,184,166,0.06)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D1FAE5] text-[#0F766E]">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-text">
                    Next Batch Starting Soon
                  </h4>
                  <p className="text-xs text-muted">Strict 20-seat limit per mentor</p>
                </div>
              </div>

              <OpenModalButton
                source="journey-sticky-cta"
                variant="primary"
                className="w-full py-3.5 text-sm font-bold bg-[#14B8A6] hover:bg-[#0D9488] text-white shadow-xs transition-all hover:shadow-[0_4px_16px_rgba(20,184,166,0.3)]"
              >
                <span>Book Free Counselling Session</span>
              </OpenModalButton>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted">
                <ShieldCheck className="h-4 w-4 text-[#14B8A6]" />
                <span>Zero Obligation &bull; 1-on-1 Profile Assessment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Roadmap Steps (7 cols) */}
          <div className="lg:col-span-7 relative">
            {/* Connected Vertical Timeline Line */}
            <div
              aria-hidden="true"
              className="absolute left-6 top-8 bottom-8 hidden sm:block w-[2px] bg-gradient-to-b from-[#14B8A6] via-[#2DD4BF] to-[#D1FAE5]"
            />

            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                    ease: "easeOut",
                  }}
                  className="group relative flex flex-col sm:flex-row items-start gap-5 sm:gap-6 rounded-2xl border border-line/80 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#14B8A6]/50 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)] hover:-translate-y-1 sm:ml-4"
                >
                  {/* Step Node Circle */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#14B8A6] to-[#0F766E] text-white font-heading font-extrabold text-lg shadow-md group-hover:scale-105 transition-transform">
                    {step.num}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-heading text-xl font-bold text-text group-hover:text-[#0F766E] transition-colors">
                        {step.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#D1FAE5] px-3 py-0.5 text-xs font-bold text-[#0F766E]">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-sm text-muted leading-relaxed mb-3">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F766E]">
                      <CheckCircle className="h-3.5 w-3.5 text-[#14B8A6]" />
                      <span>Outcome: {step.badge}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
