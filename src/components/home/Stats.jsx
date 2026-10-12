"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Users, FolderGit2, TrendingUp, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/Card";

function CounterItem({ icon: Icon, value, label, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();
  const [displayCount, setDisplayCount] = useState(0);

  // Extract digits if any, or animate a smooth 0 -> 100 ticker
  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    let start = 0;
    const end = 50;
    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setDisplayCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, shouldReduceMotion]);

  return (
    <Card
      ref={ref}
      variant="surface"
      className="p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden group hover:border-accent/40"
    >
      {/* Glow highlight on hover */}
      <div
        aria-hidden="true"
        className="absolute -top-12 -right-12 w-28 h-28 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/15 transition-all duration-500"
      />

      <div className="w-12 h-12 rounded-2xl bg-surface-2 border border-line flex items-center justify-center text-accent mb-4 group-hover:border-accent/40 group-hover:scale-105 transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="text-3xl sm:text-4xl font-heading font-bold text-text tracking-tight flex items-baseline gap-1"
      >
        <span className="text-accent">{value}</span>
      </motion.div>

      <p className="mt-2 text-xs sm:text-sm text-muted font-medium">
        {label}
      </p>
    </Card>
  );
}

export function Stats() {
  const statsData = [
    {
      id: "students",
      icon: Users,
      value: siteConfig.stats.studentsTrained,
      label: "students trained",
    },
    {
      id: "projects",
      icon: FolderGit2,
      value: siteConfig.stats.projectsBuilt,
      label: "projects built",
    },
    {
      id: "placement",
      icon: TrendingUp,
      value: siteConfig.stats.placementRate,
      label: "placement rate",
    },
    {
      id: "mentors",
      icon: GraduationCap,
      value: siteConfig.stats.mentorsCount,
      label: "mentors & faculty",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-bg relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
