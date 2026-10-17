"use client";

import { useEffect, useRef } from "react";
import { useLeadModal } from "@/components/modal/LeadModalProvider";

// Show the standard counselling form three times during the first minute.
const OPEN_TIMES = [10_000, 30_000, 50_000];

export default function LeadPopup() {
  const { isOpen, openModal } = useLeadModal();
  const isOpenRef = useRef(isOpen);
  isOpenRef.current = isOpen;

  useEffect(() => {
    const timers = OPEN_TIMES.map((delay) =>
      setTimeout(() => {
        if (!isOpenRef.current) openModal({ source: "auto-popup", course: "pro" });
      }, delay),
    );

    return () => timers.forEach(clearTimeout);
  }, [openModal]);

  return null;
}
