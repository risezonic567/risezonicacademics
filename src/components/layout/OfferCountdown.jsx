"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Clock3, PhoneCall, X } from "lucide-react";
import { siteConfig } from "@/data/site";

const offerCourses = ["Digital Marketing Course", "SEO Course"];

export function OfferCountdown() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [courseIndex, setCourseIndex] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateCountdown = () => {
      const remaining = Math.max(0, new Date(siteConfig.offer.endsAt).getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(remaining / 86400000),
        hours: Math.floor((remaining % 86400000) / 3600000),
        minutes: Math.floor((remaining % 3600000) / 60000),
        seconds: Math.floor((remaining % 60000) / 1000),
      });
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCourseIndex((index) => (index + 1) % offerCourses.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  if (dismissed) return null;

  return (
    <aside aria-label="Course offer countdown" className="fixed bottom-4 right-3 z-[10000] hidden w-[220px] rounded-xl bg-white p-3 text-left text-gray-800 shadow-xl ring-1 ring-black/5 sm:block lg:right-5 lg:bottom-5">
      <button type="button" onClick={() => setDismissed(true)} aria-label="Close offer countdown" className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-teal-600"><Clock3 className="h-3.5 w-3.5" /> Limited-time offer</div>
      <div className="mt-1.5 min-h-[48px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={offerCourses[courseIndex]}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="text-sm font-bold text-gray-900">{offerCourses[courseIndex]}</h2>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-[11px] text-gray-400 line-through">₹20,000</span>
              <span className="text-lg font-extrabold leading-tight text-teal-600">₹12,000</span>
              <span className="rounded bg-rose-50 px-1 py-0.5 text-[9px] font-bold text-rose-600">40% OFF</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="mt-0.5 text-[10px] leading-snug text-gray-500">Offer ends in</p>
      <div className="mt-2.5 grid grid-cols-4 gap-1" aria-live="off">
        {[
          [timeLeft?.days ?? "--", "Days"],
          [timeLeft?.hours ?? "--", "Hours"],
          [timeLeft?.minutes ?? "--", "Mins"],
          [timeLeft?.seconds ?? "--", "Secs"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-md bg-teal-50 px-1 py-1.5 text-center">
            <span className="block text-base font-bold tabular-nums text-gray-900">{String(value).padStart(2, "0")}</span>
            <span className="text-[8px] uppercase tracking-wide text-gray-500">{label}</span>
          </div>
        ))}
      </div>
      <a href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`} className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg bg-teal-500 px-2 py-2 text-xs font-bold text-white transition hover:bg-teal-600">
        <PhoneCall className="h-3.5 w-3.5" /> Call for offer price
      </a>
    </aside>
  );
}
