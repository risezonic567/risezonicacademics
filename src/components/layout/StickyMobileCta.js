"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { useLeadModal } from "@/components/modal/LeadModalProvider";
import { OpenModalButton } from "@/components/ui/OpenModalButton";

export function StickyMobileCta() {
  const { isOpen: isModalOpen, isMobileMenuOpen } = useLeadModal();

  // Hide sticky mobile CTA when either the modal or mobile menu drawer is open
  if (isModalOpen || isMobileMenuOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-3 bg-surface/90 backdrop-blur-lg border-t border-line md:hidden shadow-[0_-8px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2">
        <OpenModalButton
          source="sticky-mobile-cta"
          variant="primary"
          className="w-full py-3.5 flex items-center justify-center gap-2 shadow-lg shadow-primary/20 text-sm font-bold"
        >
          <Sparkles className="w-4 h-4 text-bg" />
          <span>Book Free Counselling</span>
        </OpenModalButton>
      </div>
    </div>
  );
}
