"use client";

import React, { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { useLeadModal } from "@/components/modal/LeadModalProvider";
import { siteConfig } from "@/data/site";

export function AnnouncementBar() {
  const [isDismissed, setIsDismissed] = useState(false);
  const { openModal } = useLeadModal();

  if (isDismissed) return null;

  return (
    <div
      onClick={() => openModal({ source: "announcement-bar" })}
      role="banner"
      aria-label="Announcement banner"
      className="w-full bg-primary text-bg py-2 px-4 text-xs sm:text-[13px] font-heading font-semibold cursor-pointer transition-colors hover:bg-accent relative z-40 select-none shadow-sm"
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-3">
        <div className="flex-1 flex items-center justify-center gap-2 text-center truncate sm:overflow-visible">
          <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse text-bg" />
          <span className="truncate sm:overflow-visible">
            {siteConfig.announcement.text}
          </span>
        </div>

        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={(e) => {
            e.stopPropagation();
            setIsDismissed(true);
          }}
          className="shrink-0 p-1 rounded-md hover:bg-black/10 text-bg/80 hover:text-bg transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
