"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenCheck,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";
import { images } from "@/data/images";
import { SiteImage } from "@/components/ui/SiteImage";

function CampusImage({ image, label, direction, reduceMotion, className = "" }) {
  const fromX = direction === "left" ? -28 : 28;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: fromX, scale: 0.96 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative min-h-[190px] overflow-hidden rounded-[24px] border border-line/70 bg-[#DCEBE6] shadow-[0_14px_36px_rgba(16,45,43,0.12)] sm:min-h-[240px] lg:aspect-[4/5] lg:min-h-0 lg:rounded-[30px] ${className}`}
    >
      <SiteImage
        image={image}
        fill
        sizes="(max-width: 1023px) 50vw, 24vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#102D2B]/80 via-[#102D2B]/5 to-transparent"
      />
      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-[#102D2B]/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-3.5">
        {label}
        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
      </span>
    </motion.div>
  );
}

function AnimatedInfoCard({ reduceMotion }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.25 }}
      className="relative order-1 isolate flex min-h-[390px] flex-col items-center justify-center overflow-hidden rounded-[30px] bg-[#071311] px-6 py-10 text-center text-white shadow-[0_26px_70px_rgba(16,45,43,0.22)] sm:min-h-[420px] sm:px-10 sm:py-12 lg:order-none lg:min-h-[500px] lg:rounded-[36px] lg:px-12"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={reduceMotion ? undefined : { scale: [1, 1.045, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <SiteImage
          image={images.campus[1]}
          fill
          sizes="(max-width: 1023px) 100vw, 600px"
          className="object-cover"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-black/40   via-black/20 to-black/50"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 z-[2] rounded-[25px] border border-white/20 lg:inset-5 lg:rounded-[30px]"
        animate={reduceMotion ? undefined : { opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={itemVariants}
        className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#99F6E4]/30 bg-[#5EEAD4]/10 text-[#99F6E4] shadow-[0_0_32px_rgba(94,234,212,0.16)]"
      >
        <motion.span
          animate={reduceMotion ? undefined : { rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="h-7 w-7" aria-hidden="true" />
        </motion.span>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="relative z-10 text-[10px] font-bold uppercase tracking-[0.24em] text-white sm:text-xs"
        style={{ color: "#FFFFFF" }}
      >
        Learn <span className="px-1.5 text-white/40">/</span> Practice <span className="px-1.5 text-white/40">/</span> Grow
      </motion.p>

      <motion.h2
        variants={itemVariants}
        className="relative z-10 mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.8rem]"
        style={{ color: "#FFFFFF" }}
      >
        Risezonic Academics
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="relative z-10 mx-auto mt-4 max-w-md text-sm leading-relaxed text-white sm:text-base"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        Build practical digital marketing skills through guided learning, campaign projects, and career-focused support.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="relative z-10 mt-7 flex flex-wrap items-center justify-center gap-2.5"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm sm:text-sm">
          <BookOpenCheck className="h-4 w-4 text-[#99F6E4]" aria-hidden="true" />
          Guided learning
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-xs font-semibold text-white/90 backdrop-blur-sm sm:text-sm">
          <BriefcaseBusiness className="h-4 w-4 text-[#99F6E4]" aria-hidden="true" />
          Practical projects
        </span>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="relative z-10 mt-8 h-1 w-28 overflow-hidden rounded-full bg-white/15"
      >
        <motion.span
          className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-[#5EEAD4]"
          animate={reduceMotion ? undefined : { x: [0, 56, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}

export function Stats() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-line/60 bg-[#F8FAF9] py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#D1FAE5]/55 via-[#CCFBF1]/35 to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.5fr)_minmax(0,0.88fr)] lg:items-center lg:gap-6">
          <CampusImage
            image={images.campus[0]}
            label="Learn"
            direction="left"
            reduceMotion={reduceMotion}
            className="hidden lg:block"
          />

          <AnimatedInfoCard reduceMotion={reduceMotion} />

          <div className="order-2 grid grid-cols-2 gap-3 lg:contents">
            <CampusImage
              image={images.campus[0]}
              label="Learn"
              direction="left"
              reduceMotion={reduceMotion}
              className="lg:hidden"
            />
            <CampusImage
              image={images.campus[2]}
              label="Create"
              direction="right"
              reduceMotion={reduceMotion}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
