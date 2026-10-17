"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Star, Award, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { OpenModalButton } from "@/components/ui/OpenModalButton";
import { SiteImage } from "@/components/ui/SiteImage";
import { images } from "@/data/images";

const rotatingWords = ["get hired", "start freelancing", "grow your business"];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("get hired");
  const [isDeleting, setIsDeleting] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const currentWord = rotatingWords[wordIndex];
    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && typedWord === currentWord) {
      delay = 1000;
    } else if (isDeleting && typedWord.length === 0) {
      delay = 180;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && typedWord === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && typedWord.length === 0) {
        setWordIndex((index) => (index + 1) % rotatingWords.length);
        setIsDeleting(false);
      } else if (isDeleting) {
        setTypedWord((word) => word.slice(0, -1));
      } else {
        setTypedWord(currentWord.slice(0, typedWord.length + 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [isDeleting, reduceMotion, typedWord, wordIndex]);

  return (
    <section className="border-b border-line">
      <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-surface px-5 py-28 text-center sm:px-8 sm:py-32">
        <div className="absolute inset-0 z-0">
          <SiteImage image={images.hero} fill priority sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 z-[1] bg-black/25" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center">
          <h1 style={{ color: "#fff" }} className="font-heading text-[2.2rem] font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            <span className="sr-only">Digital marketing skills to get hired, start freelancing and grow your business</span>
            <span aria-hidden="true" className="block">Digital marketing skills to</span>
            <span aria-hidden="true" className="relative mt-1 block h-[1.3em] sm:mt-2">
              <span style={{ color: "#0ce0eb" }} className="inline-block capitalize">
                {reduceMotion ? "get hired" : typedWord}
                {!reduceMotion && <span  className="ml-0.5  inline-block animate-pulse">|</span>}
              </span>
            </span>
          </h1>

          <p style={{ color: "rgba(255,255,255,.9)" }} className="mt-4 max-w-[620px] text-sm leading-relaxed sm:mt-5 sm:text-base md:text-lg">
            Live mentors, real campaigns and placement support, all in one program.
          </p>

          <div className="mt-6 flex w-full flex-col items-center justify-center gap-3.5 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4">
            <OpenModalButton source="hero" variant="primary" size="lg" className="w-full px-7 py-3.5 text-sm font-bold sm:w-auto sm:text-base">
              <span>Register now</span>
            </OpenModalButton>
            <Link href="/courses" className="inline-flex w-full items-center justify-center rounded-xl border border-white/70 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto sm:text-base">
              Explore courses
            </Link>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 text-xs text-white sm:mt-9 sm:text-sm">
            <div className="flex -space-x-2">
              {images.avatars.slice(0, 3).map((avatar, index) => (
                <span key={index} className="relative h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-surface-2">
                  <SiteImage image={avatar} fill sizes="24px" className="object-cover" />
                </span>
              ))}
            </div>
            <span className="flex items-center gap-1 font-semibold text-white"><Star className="h-3.5 w-3.5 fill-primary-light text-primary-light" />4.9</span>
            <span className="text-white/70">•</span>
            <span>2,500+ students trained</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pointer-events-none absolute inset-x-0 top-24 z-20 mx-auto flex max-w-[1200px] justify-between px-5 sm:top-28 sm:px-8"
        >
          <div className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-sm font-semibold text-text"><Award className="h-3.5 w-3.5 text-accent" />Certificate</div>
          <div className="flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-sm font-semibold text-text"><TrendingUp className="h-3.5 w-3.5 text-accent" />94.2% placement</div>
        </motion.div>

      </div>
    </section>
  );
}
