"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import confetti from "canvas-confetti";

const NOTIFICATIONS = [
  { name: "Sona Yaduwanshi", city: "Delhi", course: "Motion Graphic Designing", href:"/" },
  { name: "Priya Sharma", city: "Noida", course: "SEO & Content Marketing", href:"/" },
  { name: "Amit Verma", city: "Gurugram", course: "Social Media Marketing", href:"/" },
  { name: "Neha Gupta", city: "Jaipur", course: "Performance Marketing & Ads", href:"/" },
  { name: "Ritesh Singh", city: "Lucknow", course: "Digital Marketing + Gen AI", href:"/" },
];

const AGO_TEXTS = ["Just now", "2 minutes ago", "5 minutes ago", "9 minutes ago", "14 minutes ago", "Today"];

const START_DELAY = 5000; // pehla toast 5 sec baad (ye same rakha)
const SHOW_TIME = 4000;   // 4 sec dikhega
const MIN_GAP = 1500;     // minimum 1.5 sec gap
const MAX_GAP = 3500;     // maximum 3.5 sec gap

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const getInitials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function EnrollmentToast() {
  const [current, setCurrent] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let timer;
    let confettiTimer;
    let cancelled = false; // har effect run ka apna flag (Strict Mode safe)
    let queue = [];

    const nextItem = () => {
      if (queue.length === 0) queue = shuffle(NOTIFICATIONS);
      return queue.pop();
    };

    const randomGap = () => MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP);

    const hide = () => {
      if (cancelled) return;
      setCurrent(null);
      timer = setTimeout(show, randomGap());
    };

    const show = () => {
      if (cancelled) return;
      const item = nextItem();
      const ago = AGO_TEXTS[Math.floor(Math.random() * AGO_TEXTS.length)];
      setCurrent({ ...item, ago, id: Date.now() });

      if (!reduceMotion) {
        confettiTimer = setTimeout(() => {
          if (cancelled) return;
          confetti({
            particleCount: 35,
            spread: 65,
            startVelocity: 25,
            scalar: 0.8,
            origin: { x: 0.12, y: 0.9 },
          });
        }, 250);
      }

      timer = setTimeout(hide, SHOW_TIME);
    };

    timer = setTimeout(show, START_DELAY);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      clearTimeout(confettiTimer);
    };
  }, [reduceMotion]);

  const handleClose = () => {
    setCurrent(null);
  };

  return (
    <div className="pointer-events-none fixed bottom-4 left-3 z-[9999] sm:bottom-6 sm:left-6">
      <AnimatePresence mode="wait">
        {current && (
          <motion.div
            key={current.id}
            initial={reduceMotion ? { opacity: 0 } : { x: -140, opacity: 0, scale: 0.9 }}
            animate={reduceMotion ? { opacity: 1 } : { x: 0, opacity: 1, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { x: -140, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="pointer-events-auto relative w-[270px] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5 sm:w-[330px]"
          >
            <button
              onClick={handleClose}
              aria-label="Close notification"
              className="absolute right-2 top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full text-xs text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
            >
              ✕
            </button>

            <Link href={current.href} className="flex items-center gap-3 p-3 pr-7">
              <motion.div
                initial={reduceMotion ? false : { rotate: -20, scale: 0.6 }}
                animate={reduceMotion ? {} : { rotate: [-20, 15, -10, 0], scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-sm font-bold text-white"
              >
                {getInitials(current.name)}
                <span className="absolute -bottom-1 -right-1 text-base">🎉</span>
              </motion.div>

              <div className="min-w-0 text-[13px] leading-snug text-gray-800 sm:text-sm">
                <p className="flex items-center gap-1 font-semibold text-gray-900">
                  <span className="truncate">{current.name}</span>
                  <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-teal-500" fill="currentColor">
                    <path d="M10 1.5l2.2 1.6 2.7-.1.9 2.6 2.2 1.6-.8 2.6.8 2.6-2.2 1.6-.9 2.6-2.7-.1L10 18.5l-2.2-1.6-2.7.1-.9-2.6L2 12.8l.8-2.6L2 7.6l2.2-1.6.9-2.6 2.7.1L10 1.5z" />
                    <path d="M7.2 10.2l2 2 3.8-4" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="truncate font-normal text-gray-500">from {current.city}</span>
                </p>
                <p>
                  just enrolled in{" "}
                  <span className="font-semibold text-teal-600">{current.course}</span>
                </p>
                <p className="mt-0.5 text-[11px] text-gray-400">{current.ago}</p>
              </div>
            </Link>

            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: SHOW_TIME / 1000, ease: "linear" }}
              style={{ transformOrigin: "left" }}
              className="absolute bottom-0 left-0 h-[3px] w-full bg-teal-500"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
