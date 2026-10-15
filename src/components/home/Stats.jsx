"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Users, FolderGit2, TrendingUp, GraduationCap } from "lucide-react";

function CounterItem({ icon: Icon, value, label, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative flex flex-col items-center justify-between rounded-2xl border border-line/80 bg-white p-6 sm:p-7 text-center shadow-[0_4px_24px_rgba(20,184,166,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8A6]/50 hover:shadow-[0_16px_32px_rgba(20,184,166,0.12)]"
    >
      {/* Top subtle highlight line on hover */}
      <div className="absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#2DD4BF] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon with soft mint #D1FAE5 background */}
      <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#D1FAE5] text-[#0F766E] shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#14B8A6] group-hover:text-white">
        <Icon className="h-6 w-6 transition-colors" />
      </div>

      {/* Metric Value */}
      <div className="font-heading text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        <span className="text-[#0F766E] group-hover:text-[#14B8A6] transition-colors">
          {value}
        </span>
      </div>

      {/* Metric Label */}
      <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-muted sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}

export function Stats() {
  const statsData = [
    {
      id: "students",
      icon: Users,
      value: siteConfig.stats.studentsTrained,
      label: "Students Trained",
    },
    {
      id: "projects",
      icon: FolderGit2,
      value: siteConfig.stats.projectsBuilt,
      label: "Campaigns Executed",
    },
    {
      id: "placement",
      icon: TrendingUp,
      value: siteConfig.stats.placementRate,
      label: "Placement Rate",
    },
    {
      id: "mentors",
      icon: GraduationCap,
      value: siteConfig.stats.mentorsCount,
      label: "Mentors & Leaders",
    },
  ];

  return (
    <section className="relative border-b border-line/60 bg-gradient-to-b from-white via-[#F8FAF9] to-white py-14 sm:py-20 overflow-hidden">
      {/* Subtle radial ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-gradient-to-r from-[#D1FAE5]/50 via-[#2DD4BF]/10 to-transparent blur-3xl opacity-70"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <CounterItem
              key={stat.id}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
