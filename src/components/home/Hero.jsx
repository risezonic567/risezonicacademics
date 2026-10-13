"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Star,
  Award,
  TrendingUp,
  Radio,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/data/images";

const rotatingWords = ["get hired", "start freelancing", "grow your business"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  // Motion variants for stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-surface pt-10 sm:pt-16 pb-0 border-b border-line">
      <div className="relative z-10 mx-auto max-w-[720px] px-5 sm:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* 1. H1 with rotating word */}
          <motion.div variants={itemVariants} className="w-full">
            <h1 className="font-heading font-bold text-text text-[2.2rem] sm:text-5xl lg:text-[3.6rem] leading-[1.12] tracking-tight">
              {/* Visually hidden full static text for SEO and Screen Readers */}
              <span className="sr-only">
                Digital marketing skills to get hired, start freelancing and grow your business
              </span>

              <span aria-hidden="true" className="block">
                Digital marketing skills to
              </span>
              <span
                aria-hidden="true"
                className="block text-text h-[1.3em] overflow-hidden relative mt-1 sm:mt-2"
              >
                {shouldReduceMotion ? (
                  <span>get hired</span>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -22 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="inline-block text-accent"
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                )}
              </span>
            </h1>
          </motion.div>

          {/* 3. One-line subtext */}
          <motion.div variants={itemVariants}>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted max-w-[620px] leading-relaxed">
              Live mentors, real campaigns and placement support, all in one program.
            </p>
          </motion.div>

          {/* 4. Two Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-8 flex w-full flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
          >
            <OpenModalButton
              source="hero"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-bold"
            >
              <span>Register now</span>
            </OpenModalButton>

            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-line text-text hover:border-primary hover:text-accent font-semibold transition-colors text-sm sm:text-base active:scale-[0.98]"
            >
              Explore courses
            </Link>
          </motion.div>

          {/* 5. Trust Row */}
          <motion.div
            variants={itemVariants}
            className="mt-7 sm:mt-9 flex items-center justify-center gap-3 text-xs sm:text-sm text-muted"
          >
            {/* Overlapping 24px avatars */}
            <div className="flex -space-x-2">
              <div className="h-6 w-6 rounded-full border-2 border-bg bg-surface-2 flex items-center justify-center text-[10px] text-accent font-bold">
                <SiteImage image={images.avatars[0]} className="rounded-full object-cover" sizes="24px" fill />
              </div>
              <div className="h-6 w-6 rounded-full border-2 border-bg bg-light flex items-center justify-center text-[10px] text-accent font-bold">
                <SiteImage image={images.avatars[1]} className="rounded-full object-cover" sizes="24px" fill />
              </div>
              <div className="h-6 w-6 rounded-full border-2 border-bg bg-accent/30 flex items-center justify-center text-[10px] text-accent font-bold">
                <SiteImage image={images.avatars[2]} className="rounded-full object-cover" sizes="24px" fill />
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-text font-semibold">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <span>[0.0]</span>
            </div>

            <span className="text-muted/60">•</span>
            <span>[00+] students trained</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wide Banner (Section 8 Option D) */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mt-9 sm:mt-12 w-full"
      >
        <div className="relative w-full">
          <div className="relative h-[280px] min-h-[280px] w-full overflow-hidden bg-light md:h-[380px] md:min-h-[380px] lg:h-[480px] lg:min-h-[480px]">
            <SiteImage
              image={images.hero}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1200px] px-5 sm:px-8">
            <div className="relative h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1, scale: 1 }
                : {
                    opacity: 1,
                    scale: 1,
                    y: [-7, 0, -7],
                  }
            }
            transition={
              shouldReduceMotion
                ? { delay: 0.65 }
                : {
                    delay: 0.65,
                    y: {
                      repeat: Infinity,
                      duration: 3.4,
                      ease: "easeInOut",
                    },
                  }
            }
            className="pointer-events-auto absolute -top-3.5 sm:-top-4 left-0 z-20 flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-sm font-semibold text-text"
          >
            <Award className="h-3.5 w-3.5 text-accent" />
            <span>Certificate</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              shouldReduceMotion
                ? { opacity: 1, scale: 1 }
                : {
                    opacity: 1,
                    scale: 1,
                    y: [0, -7, 0],
                  }
            }
            transition={
              shouldReduceMotion
                ? { delay: 0.75 }
                : {
                    delay: 0.75,
                    y: {
                      repeat: Infinity,
                      duration: 3.4,
                      delay: 1.2,
                      ease: "easeInOut",
                    },
                  }
            }
            className="pointer-events-auto absolute -top-3.5 sm:-top-4 right-0 z-20 flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-sm font-semibold text-text"
          >
            <TrendingUp className="h-3.5 w-3.5 text-accent" />
            <span>[00%] placement</span>
          </motion.div>

            {/* Left Card: Campaign results (Overlapping bottom-left on desktop, inside on mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="pointer-events-auto absolute bottom-3 left-0 sm:bottom-4 z-20 w-[140px] sm:w-[170px] rounded-xl border border-line bg-surface-2 p-3"
            >
              <div className="text-sm font-medium text-muted">
                Campaign results
              </div>
              <div className="mt-0.5 text-base sm:text-xl font-bold font-heading text-accent">
                +[00%] leads
              </div>

              {/* 5 growth bars staggered from bottom */}
              <div className="mt-2 flex items-end gap-1.5 h-6">
                {[0.4, 0.6, 0.5, 0.85, 1].map((scale, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0.15 }}
                    animate={{ scaleY: scale }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.75 + i * 0.15,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: "bottom" }}
                    className="flex-1 rounded-sm bg-accent/80 h-full"
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Card: Live now (Overlapping bottom-right on desktop, inside on mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="pointer-events-auto absolute bottom-3 right-0 sm:bottom-4 z-20 w-[140px] sm:w-[170px] rounded-xl border border-line bg-surface-2 p-3 text-left"
            >
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-[7px] w-[7px]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-red-500" />
                </span>
                <span className="text-sm font-semibold text-text">
                  Live now
                </span>
              </div>

              <div className="mt-2 flex items-center gap-2">
                <div className="h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] rounded-full bg-light border border-primary/40 flex items-center justify-center text-sm text-accent font-bold shrink-0">
                  M
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-text truncate">
                    [Mentor name]
                  </div>
                  <div className="text-sm text-accent truncate">
                    Google Ads
                  </div>
                </div>
              </div>

              <div className="mt-1.5 text-sm text-muted flex items-center gap-1">
                <Radio className="h-3 w-3 text-red-400 shrink-0" />
                <span>[00] students watching</span>
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </motion.div>
    </section>
  );
}
