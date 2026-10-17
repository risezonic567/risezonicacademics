"use client";

import { useEffect, useRef } from "react";
import { useLeadModal } from "@/components/modal/LeadModalProvider";

const OPEN_DELAY = 30_000;
const STORAGE_KEY = "leadPopupSeen";

export default function LeadPopup() {
  const { isOpen, openModal } = useLeadModal();
  const isOpenRef = useRef(isOpen);
  isOpenRef.current = isOpen;

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {}

    const timer = setTimeout(() => {
      if (isOpenRef.current) return;
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
      openModal({ source: "auto-popup", course: "pro" });
    }, OPEN_DELAY);

    return () => clearTimeout(timer);
  }, [openModal]);

  return null;
}
